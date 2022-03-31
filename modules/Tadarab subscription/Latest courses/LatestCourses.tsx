/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React , { useEffect , useState } from "react";
import styles from "./latest-courses.module.css";
import {
  Row,
  Col,
  Button,
  Card,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import Tippy from '../../../node_modules/@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 
import Link from 'next/link';
import { axiosInstance } from "configurations/axios/axiosConfig";
import  {ChevronLeftIcon,LearnersIcon,TickIcon,CartIcon,FavouriteIcon,AddedToCartIcon,AddedToFavouriteIcon}  from "common/Icons/Icons";
import { useDispatch, useSelector } from "react-redux";  
import Router from "next/router";
import  useAddToCart  from "custom hooks/useAddToCart";
import  useAddToFav  from "custom hooks/useAddToFav";
import { setCartItems } from "configurations/redux/actions/cartItems"; 
import withAuth from "configurations/auth guard/AuthGuard";
import { handleFav } from "modules/_Shared/utils/handleFav";
import { handleCart } from "modules/_Shared/utils/handleCart";
import {GAProductClickEventHandler} from "modules/_Shared/utils/GAEvents"
import { setCheckoutType } from "configurations/redux/actions/checkoutType"; 

function LatestCourses() {
  SwiperCore.use([Navigation]);
  const homePageData = useSelector((state:any) => state.homePageData);
  const userStatus = useSelector((state:any) => state.userAuthentication);
  const cartItems = useSelector((state:any) => state.cartItems);

  const [localCartItems, setLocalCartItems] = useState<any>([]);
  const [isFnExecuted, setIsFnExecuted] = useState(false);
  const [latestCourses, setLatestCourses] = useState<any>([]);
  const [filterType, setFilterType] = useState("best-seller");
  // const [cartItems, setCartItems] = useState<any>([]);
  const dispatch = useDispatch();


  const handleFilterType = (type:string)=>{
    setFilterType(type);
    axiosInstance
    .get(`home/courses/?country_code=${localStorage.getItem("countryCode")}&type=${type}`)
    /* home/courses/?country_code=${localStorage.getItem("countryCode")}&type=${type} */
    .then(function (response:any) {
      setLatestCourses(response.data.data);
      // console.log("response.data.data.courses",response.data.data.courses);
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  const handleFavActionBtn = (course:any):any =>{
    if(userStatus.isUserAuthenticated == true){
    const handleFavResponse:any =  handleFav(course,`home/?country_code=${localStorage.getItem("countryCode")}`);
    handleFavResponse.then(function(response:any) {
     setLatestCourses(response.data.data.best_seller_courses);
    })
    }else{
      Router.push({
        pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}signin`,
        query: { from: "/TadarabSubscription" }
      })
    }

  }

  const handleCartActionBtn = (course:any):any =>{
    dispatch(setCheckoutType("cart"));
    
    // if(userStatus?.isUserAuthenticated == true){
      const handleCartResponse:any =  handleCart([course],`home/?country_code=${localStorage.getItem("countryCode")}`,false);
      handleCartResponse.then(function(firstresponse:any) {
        firstresponse.resp.then(function(response:any){
           setLatestCourses(response.data.data.best_seller_courses);
           dispatch(setCartItems(firstresponse.cartResponse));
        })
      //  setLocalCartItems(response.totalItems);
      })
  //   }
  //   else{
  //     const handleCartResponse:any =  handleCart([course],`home/?country_code=${localStorage.getItem("countryCode")}`,false);
  //     handleCartResponse.then(function(response:any) {
  //         dispatch(setCartItems(response));
  //       //  setLocalCartItems(response);
  //       let newArray:any = latestCourses;
  //       response.data.data?.forEach((element:any) => {
  //        newArray.forEach((ele:any) => {
  //            if(element.id === ele.id){
  //              // console.log(ele);
  //              ele.is_in_cart = true;
  //          }
  //      });
  //  });
  //  setLatestCourses([...newArray]);
      
  //     })

  //   }
    // setLatestCourses([...latestCourses]);
  }

  useEffect(() => {

      setLatestCourses(homePageData.data?.best_seller_courses || []);
      const localStorageItems:any = localStorage.getItem("cart");

      if(localStorageItems !== "[]" && localStorageItems !== "null" && localStorageItems !== "undefined"){

        axiosInstance
        .get(`courses/?country_code=${localStorage.getItem("countryCode")}&course_ids=${localStorageItems?.replace(/[\[\]']+/g,'')}`)
        .then(function (response:any) {
          // console.log(response);
          let newArray:any = homePageData.data?.best_seller_courses;
         response.data.data.forEach((element:any) => {
          newArray.forEach((ele:any) => {
              if(element.id === ele.id){
                // console.log(ele);
                ele.is_in_cart = true;
                // newArray.ele.is_in_cart = true;
                // console.log("newArray",newArray);
                setLatestCourses([...newArray]);
              }
            });
          });
  
      })
      .catch(function (error) {
        console.log(error); 
      });
      }

 

  }, [homePageData]);

  // useEffect(() => {
  //   const seeMoreBtn:any = document.getElementById("see-more");
  //   const departmentsList:any = document.getElementById("departments-list");

  //   // to capture all the carousel cards
  //   const trigger: any = document.querySelectorAll(
  //     '[id^="latest-courses-card"]'
  //   );
 
  //   // loop over them to control the hover effect per each card
  //   trigger.forEach((element: any) => {
  //     element.addEventListener("mouseout" , function(){
  //       // setTimeout(() => {
  //         seeMoreBtn.style.cssText=`z-index:5;`
  //         departmentsList.style.cssText=`z-index:5;`
  //       // }, 2000);
  //     })
  //     element.addEventListener("mouseover", function () {
  //       seeMoreBtn.style.cssText=`z-index:1;`
  //       departmentsList.style.cssText=`z-index:1;`
  //       if(window.innerWidth > 1024){

  //       // to get right and left empty spaces to decide which direction the popover will appear
  //       const rootFontSize = parseFloat(
  //         window
  //         .getComputedStyle(document.getElementsByTagName("html")[0])
  //         .getPropertyValue("font-size")
  //       );
  //       const cardRightBoundary =
  //         window.innerWidth - element.getClientRects()[0].left;
  //       const cardLeftBoundary =
  //         element.getClientRects()[0].left;

          
  //         const observer = new MutationObserver((mutations, obs) => {
  //           let relatedPopover:any = document.getElementsByClassName(`popover-${element.id}`)[0];
  //           if (relatedPopover) {
  //             relatedPopover.addEventListener("mouseover" , function(){
  //               seeMoreBtn.style.cssText=`z-index:1;`
  //               departmentsList.style.cssText=`z-index:1;`
                
  //             });
  //             // setTimeout(() => {
  //               relatedPopover.addEventListener("mouseout" , function(){
  //                 seeMoreBtn.style.cssText=`z-index:5;`
  //                 departmentsList.style.cssText=`z-index:5;`
  //               });
  //             // }, 1000);
  //             // console.log(
  //             //   "element.getClientRects()[0].right",
  //             //   element.getClientRects()[0].right
  //             // );
  //             // console.log(
  //             //   "element.getClientRects()[0].left",
  //             //   element.getClientRects()[0].left
  //             // );
  //              obs.disconnect();
  //             if (cardRightBoundary > cardLeftBoundary) {
  //               // element.style.right="22rem"
  //               // console.log(document.getElementById(`popover-${element.id}`));
  //               // const relatedPopover:HTMLElement | null = document.getElementById(`popover-${element.id}`);
  //               // relatedPopover ?  relatedPopover.style.left=`${(element.getClientRects()[0].right)}px` : null ;
  //               setPlacement("right");
  //               // const cardWidth:any = document.getElementById("latest-courses-card1");
  //               // relatedPopover ?  relatedPopover.style.right=`auto` : null ;
  //               if(window.innerWidth <= 1200){
  //               relatedPopover ?  relatedPopover.style.left=`${2.32*(element.offsetWidth)}px` : null ;
  //               }else if(window.innerWidth > 1200){
  //               relatedPopover ?  relatedPopover.style.left=`${2.63*(element.offsetWidth)}px` : null ;
  //               }
  //               // relatedPopover ?  relatedPopover.style.left=`${2.65*(element.offsetWidth)}px` : null ;
  //               relatedPopover ?  relatedPopover.style.bottom =`${5.5*rootFontSize}px` : null ;
  //               // console.log("element.offsetWidth",element.offsetWidth);

  //             } else if (cardRightBoundary < cardLeftBoundary) {
  //               // element.style.left="22rem"
  //               // console.log(document.getElementById(`popover-${element.id}`));
  //               // const relatedPopover:HTMLElement | null = document.getElementById(`popover-${element.id}`);
  //               // relatedPopover ?  relatedPopover.style.inset=`0px  ${(window.innerWidth - element.getClientRects()[0].left)}px auto auto` : null ;
  //               setPlacement("left");
  //               // relatedPopover ?  relatedPopover.style.right=`${(element.getClientRects()[0].left)}px` : null ;
  //               // relatedPopover ?  relatedPopover.style.right=`auto` : null ;
  //               //relatedPopover ?  relatedPopover.style.right=`${(window.innerWidth)/5.2}px` : null ;
  //               // const cardWidth:any = document.getElementById("latest-courses-card1");
  //               relatedPopover ?  relatedPopover.style.right=`${1.085*(element.offsetWidth)}px` : null ;
  //               relatedPopover ?  relatedPopover.style.bottom =`${5.5*rootFontSize}px` : null ;
  //               // console.log("element.offsetWidth",element.offsetWidth);

  //             }
  //             return;
  //           }
  //         });
          
  //         observer.observe(document, {
  //           childList: true,
  //           subtree: true
  //         });

  //     }
  //     });
  //   });

  //   return () => {
  //     trigger.forEach((element: any) => {
  //       element.removeEventListener("mouseout", ()=>{
  //         return;
  //       });
  //       element.removeEventListener("mouseover", ()=>{
  //         return;
  //       });
  //     })
  //   };

  // },);

  const handlePlacement = ()=>{
    
    if(!isFnExecuted){
      // to capture all the carousel cards
      const trigger: any = document.querySelectorAll(
        '[id^="latest-courses-card"]'
      );
   
      // loop over them to control the hover effect per each card
      trigger.forEach((element: any) => {
     
        element.addEventListener("mouseover", function (event:any) {
          // event.stopPropagation();
  
          if(window.innerWidth > 1024){
            // const observer = new MutationObserver((mutations, obs) => {
            let relatedPopover:any = document.getElementById(`popover-${element.id}`);
            let relatedWrapper:any = document.getElementById(`wrapper-${element.id}`);
  
          const cardRightBoundary =
            window.innerWidth - element.getClientRects()[0].left;
          const cardLeftBoundary =
            element.getClientRects()[0].left;
            // if (relatedPopover) {
  
                //  obs.disconnect();
              
                if (cardRightBoundary > cardLeftBoundary) {
                  // setPlacement("right");
                  console.log("right");
                  relatedWrapper.style.cssText=`left: 100% ;
                   bottom: -${((relatedWrapper.offsetHeight - element.offsetHeight)/2)}px`;
                  // relatedWrapper.style.cssText=`bottom: -${relatedWrapper.offsetHeight/6}px`;
                  relatedPopover.classList.add(styles["latest-courses__popover-container--right"]);
                  // relatedPopover.style.cssText=`left: 100%;`
                } else if (cardRightBoundary < cardLeftBoundary) {
                  // setPlacement("left");
                  console.log("left");
                  relatedWrapper.style.cssText=`right: 100%;
                   bottom: -${((relatedWrapper.offsetHeight - element.offsetHeight)/2)}px`;
                  // relatedWrapper.style.cssText=`bottom: -${relatedWrapper.offsetHeight/6}px`;
                  relatedPopover.style.cssText=`left: 0%;`;
                  relatedPopover.classList.add(styles["latest-courses__popover-container--left"]);
                }
                // return;
              // }
              // });
            
              // observer.observe(document, {
              //   childList: true,
              //   subtree: true
              // });
        }
        });
  
      });

      setIsFnExecuted(true);
    }
  }

  const handleZindex = (status:any)=>{
    const seeMoreBtn:any = document.getElementById("see-more");
    const departmentsList:any = document.getElementById("departments-list");
    if(status == 'high'){
          seeMoreBtn.style.cssText=`z-index:5;`
          departmentsList.style.cssText=`z-index:5;`
        }else {
          seeMoreBtn.style.cssText=`z-index:1;`
          departmentsList.style.cssText=`z-index:1;`

    }
  }

  

  return (
    <>
      <Row className={styles["latest-courses"]}>
        <Col xs={12} className={styles["latest-courses__title"]}>
          <span>الدورات </span>
          <span>المسجلة</span>
        </Col>
        <Col
           xs={{span:12 , order:1}} sm={9}
          className="d-flex align-items-center justify-content-start"
        >
          <ul id="departments-list" className={styles["latest-courses__departments-list"]}>
            <li onClick={()=>{handleFilterType("best-seller")}} 
            className={`${styles["latest-courses__departments-list__item"]} ${filterType == "best-seller" && styles["latest-courses__departments-list__item--active"]}`}>
              الأكثر مبيعاً
            </li>
            <li onClick={()=>{handleFilterType("latest")}} 
            className={`${styles["latest-courses__departments-list__item"]} ${filterType == "latest" && styles["latest-courses__departments-list__item--active"]}`}>
              أحدث الدورات
            </li>
            <li onClick={()=>{handleFilterType("most-viewed")}} 
            className={`${styles["latest-courses__departments-list__item"]} ${filterType == "most-viewed" && styles["latest-courses__departments-list__item--active"]}`}>
              الأكثر زيارة
            </li>
          </ul>
        </Col>

        <Col xs={{span:12 , order:3}} sm={{span:3 , order:1}} className={styles["latest-courses__see-more-btn-col"]}>
          <Button className={styles["latest-courses__see-more-btn"]} id="see-more">
            اعرض المزيد
            <ChevronLeftIcon color="#af151f"/>
          </Button>
        </Col>

        <Col xs={{span:12 , order:2}} className={styles["latest-courses__cards-carousel"]}>

          <Swiper 
            dir="rtl"
            slidesPerView={5}
            spaceBetween={0}
            navigation={true}
            pagination={{ clickable: true }}
            breakpoints={{
             
              "50": {
                slidesPerView: 1,
              },
              "576": {
                slidesPerView: 3,
              },
              "981": {
                slidesPerView: 4,
              },
              "1201": {
                slidesPerView: 5,
              },
              
            }}
            className="mySwiper"
          >

            {
              latestCourses?.map((course:any , i:number)=>{
                return (
                  <SwiperSlide key={i}>

                    <Card onClick={()=>{GAProductClickEventHandler(course,i)}}  onMouseMove={()=>{
                        handleZindex("low");
                        handlePlacement();
                      }} onMouseOut={()=>{handleZindex("high")}}
                        id={`latest-courses-card${i}`}
                        className={
                          styles["latest-courses__cards-carousel__course-card"]
                        }>
                        <div  className={
                      styles["popover-wrapper"]
                    }
                    id={`wrapper-latest-courses-card${i}`}
                     onMouseMove={()=>{handleZindex("low")}} onMouseOut={()=>{handleZindex("high")}}>

                      <div id={`popover-latest-courses-card${i}`} 
                      className={styles["latest-courses__popover-container"]}
                      >

                    <div>
                         <Link href={`/course/${course.slug}`}>
                            <div
                            className={
                              styles["latest-courses__popover-container__title"]
                            }
                            title={course.title}
                          >
                            {course.title}
                            </div>
                          </Link>

                        { course.subscribers_count !== null ? 
                        <div className={styles["latest-courses__popover-container__learners"]}>
                          <LearnersIcon color="#af151f"/>
                          <span>{course.subscribers_count}</span>
                          <span>متعلم</span>
                        </div>
                        :
                        null
                        }
                        <div
                          className={
                            styles["latest-courses__popover-container__brief"]
                          }
                        >
                          {course.details}
                        </div>

                    </div>

                    <div>

                    
                      <div
                        className={
                          styles[
                            "latest-courses__popover-container__what-you-will-learn-title"
                          ]
                        }
                      > 
                        ماذا ستتعلم في الدورة؟
                      </div>
                      { course.key_points?.slice(0,6).map((kp:string,i:number)=>{
                        return(
                      <div key={i}
                        className={
                          styles[
                            "latest-courses__popover-container__what-you-will-learn"
                          ]
                        }
                      >
                        <div>

                        <TickIcon/>
                        </div>


                        <span>{kp}</span>
                      </div>

                        )
                      })
                      }

                    </div>
                    
                        {
                        course.key_points.length > 6 ?
                        <Link href={`/course/${course.slug}`}>

                          <div className={styles["latest-courses__show-more-link"]}>
                            اعرض المزيد
                          </div>
                        </Link>
                        :
                        null
                        }
                  
                      <div className={styles["latest-courses__popover-container__btns"]}>

                      <Link href={`/course/${course.slug}`}>
                              <Button className={styles["latest-courses__popover-container__btns__details-btn"]}>التفاصيل</Button>
                            </Link>
                            <Button className={styles["latest-courses__popover-container__btns__add-to-cart-btn"]}>
                            <CartIcon color="#fff"/>
                            <span> أضف للسلة </span>  
                              </Button>
                        </div> 

                  
                      </div>

                     </div>

                        <div
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__category-chip"
                            ]
                          }
                          style={{backgroundColor:course.categories[0].color}}
                        > 
                        {course.categories[0].title} 
                        </div>

                        <Link href={`/course/${course.slug}`}>

                        <Card.Img
                          variant="top"
                          src={course.image}
                          alt="course image"
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__course-img"
                            ]
                          }
                        />
                        </Link>

                        <Card.Body
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body"
                            ]
                          }
                        >
                          <div
                            className={
                              styles[
                                "latest-courses__cards-carousel__course-card__card-body__card-header"
                              ]
                            }
                          >
                            <div
                              className={
                                styles[
                                  "latest-courses__cards-carousel__course-card__card-body__card-header__trainer-img-box"
                                ]
                              }
                            >
                              <Link href={`/trainer/${course.trainer?.slug}`}>

                                <img
                                  src={course.trainer.image}
                                  alt="trainer image"
                                />
                              </Link>
                            </div>
                            <div
                              className={
                                styles[
                                  "latest-courses__cards-carousel__course-card__card-body__card-header__course-details"
                                ]
                              }
                            >
                          <Link href={`/course/${course.slug}`}>
                                <h1 
                              title={course.title}
                                  className={
                                    styles[
                                      "latest-courses__cards-carousel__course-card__card-body__card-header__course-details__title"
                                    ]
                                  }
                                >
                                  {course.title}
                                </h1>
                          </Link>
                          <Link href={`/trainer/${course.trainer?.slug}`}>

                              <div title={course.trainer.name_ar}
                                className={
                                  styles[
                                    "latest-courses__cards-carousel__course-card__card-body__card-header__course-details__author"
                                  ]
                                }
                              >
                                {course.trainer.name_ar}
                              </div>
                          </Link>
                            </div>
                          </div>

                          <div
                            className={
                              styles[
                                "latest-courses__cards-carousel__course-card__card-body__checkout-details"
                              ]
                            }
                          >
                            <div >
                              <div
                                className={
                                  styles[
                                    "latest-courses__cards-carousel__course-card__card-body__checkout-details__price-container"
                                  ]
                                }
                              >
                                 { course.discounted_price !== 0 && !course.is_purchased && <span
                                  className={
                                    styles[
                                      "latest-courses__cards-carousel__course-card__card-body__checkout-details__price-container__currency"
                                    ]
                                  }
                                >
                                 {course.currency_code}
                                </span>}

                                <span
                                  className={
                                    styles[
                                      "latest-courses__cards-carousel__course-card__card-body__checkout-details__price-container__price"
                                    ]
                                  }
                                >
                                   {course.is_purchased && "تم الشراء"}
                                  {
                                    !course.is_purchased && (course.discounted_price == 0 ? "مجانًا" : course.discounted_price)
                                  }
                                </span>
                               
                              </div>
                              {
                                (course.price > course.discounted_price) && !course.is_purchased &&
                              <div
                                className={
                                  styles[
                                    "latest-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container"
                                  ]
                                }
                              >
                                 <span
                                  className={
                                    styles[
                                      "latest-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__currency"
                                    ]
                                  }
                                >
                                  {course.currency_code}
                                </span>
                                <span
                                  className={
                                    styles[
                                      "latest-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__price"
                                    ]
                                  }
                                >
                                  {course.price}
                                </span>
                               
                              </div>
                              }
                              
                              
                            </div>

                            <div >
                              { !course.is_purchased &&  <Button disabled={course.is_in_cart} variant={""}
                                className={
                                  styles[
                                    "latest-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                                  ]
                                }
                              >
                                <div onClick={()=>handleCartActionBtn(course)} 
                                className={styles["latest-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__cart-icon"]}>
                                  {/* {
                                    // console.log(localCartItems.includes(course.id))
                                    console.log(cartItems.data?.map((item:any)=>{
                                     return item.id == course.id
                                    }))
                                    
                                  } */}
                                  {
                                  course.is_in_cart ?
                                  <AddedToCartIcon color="#222"/>
                                   : 
                                   <CartIcon color="#222"/>
                                   }
                                </div>

                              </Button>}
                              <Button
                                className={
                                  styles[
                                    "latest-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                                  ]
                                }
                              >

                                <div onClick={()=>handleFavActionBtn(course)} 
                                className={styles["latest-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__fav-icon"]}>
                                 {
                                  course.is_in_favorites ?
                                  <AddedToFavouriteIcon color="af151f"/>
                                   : 
                                  <FavouriteIcon color="#222"/>
                                   }
                                 
                                </div>
                                

                              </Button>
                            </div>
                          </div>
                        </Card.Body>

                      </Card>

                  </SwiperSlide>
                );
              })
            }
          
          </Swiper>
        </Col>
      </Row>
    </>
  );
}


export default withAuth(LatestCourses);


/* 
if(course.is_in_favorites == false){

        axiosInstance
        .post(`users/favorites/?country_code=${localStorage.getItem("countryCode")}`, {"course_id" : course.id})
        .then((response:any) => {
          console.log("Response",response);
          axiosInstance
          .get(`home/?country_code=${localStorage.getItem("countryCode")}`)
          .then(function (response:any) {
            setLatestCourses(response.data.data.latest_courses);
          })
          .catch(function (error) {
            console.log(error);
          });
        })
        .catch((error:any)=>{
          console.log("error", error);
        });
      }else{
        axiosInstance
        .delete(`users/favorites/?country_code=${localStorage.getItem("countryCode")}`, { data:{"course_id" : course.id}})
        .then((response:any) => {
          console.log("Response",response);
          axiosInstance
          .get(`home/?country_code=${localStorage.getItem("countryCode")}`)
          .then(function (response:any) {
            setLatestCourses(response.data.data.latest_courses);
          })
          .catch(function (error) {
            console.log(error);
          });
        })
        .catch((error:any)=>{
          console.log("error", error);
        });

      }




       if(userStatus?.isUserAuthenticated == true){
      if(course.is_in_cart == false){


        axiosInstance
        .post(`users/cart/?country_code=${localStorage.getItem("countryCode")}`, {"item_ids" : JSON.stringify([course.id])})
        .then((response:any) => {
         const totalItems:any = [];
          console.log("add to cart response",response);
          response.data.data.forEach((item:any)=>{
            totalItems.push(item.id);
          });
          localStorage.setItem("cart" , JSON.stringify(totalItems));
          // console.log("totalItems",totalItems);
          
         dispatch(setCartItems(totalItems));
          axiosInstance
          .get(`home/?country_code=${localStorage.getItem("countryCode")}`)
          .then(function (response:any) {
            setLatestCourses(response.data.data.latest_courses);
          })
          .catch(function (error) {
            console.log(error);
          });
        })
        .catch((error:any)=>{
          console.log("error", error);
        });
        // const localStorageCartItems:any = localStorage.getItem("cart");
        // dispatch(setCartItems(JSON.parse(localStorageCartItems)));


      }else{
        axiosInstance
        .delete(`users/cart/?country_code=${localStorage.getItem("countryCode")}`, { data:{"item_id" : course.id}})
        .then((response:any) => {
         const totalItems:any = [];
          console.log("Response",response);
          response.data.data.forEach((item:any)=>{
          totalItems.push(item.id);
          });
          localStorage.setItem("cart" , JSON.stringify(totalItems));
          dispatch(setCartItems(totalItems));

          axiosInstance
          .get(`home/?country_code=${localStorage.getItem("countryCode")}`)
          .then(function (response:any) {
            setLatestCourses(response.data.data.latest_courses);
          })
          .catch(function (error) {
            console.log(error);
          });
        })
        .catch((error:any)=>{
          console.log("error", error);
        });
      //   (async function (){ 
      //     const storedCartCourses:any = await localStorage.getItem("cart");
      //    const resultedItems = JSON.parse(storedCartCourses).filter(function(ele:any){ 
      //       return ele != course.id; 
      //   });
      // localStorage.setItem("cart" , JSON.stringify(resultedItems));


      //   })();


      }
    }else{
      if(course.is_in_cart == false){
        course.is_in_cart = true;
        (async function (){ 
        // await  setCartItems([...new Set(cartItems),course.id]);
        const storedCartCourses:any = await localStorage.getItem("cart");
        
        const uniqeStoredCartCourses = [...new Set([...(JSON.parse(storedCartCourses) || []),course.id])];
        localStorage.setItem("cart" , JSON.stringify((uniqeStoredCartCourses || [])));
          dispatch(setCartItems(uniqeStoredCartCourses));
          setLatestCourses([...latestCourses]);
      })();
      }else{
        course.is_in_cart = false;
        const localStorageItems:any = localStorage.getItem("cart");
       const resultedItems:any = JSON.parse(localStorageItems).filter(function(ele:any){ 
          return ele != course.id; 
      });
      localStorage.setItem("cart" , JSON.stringify(resultedItems));
      dispatch(setCartItems(resultedItems));

      setLatestCourses([...latestCourses]);

      }
    }
*/
