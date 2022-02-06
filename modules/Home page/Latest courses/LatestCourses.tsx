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
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 
import Link from 'next/link';
import { axiosInstance } from "configurations/axios/axiosConfig";
import  {ChevronLeftIcon,LearnersIcon,TickIcon,CartIcon,FavouriteIcon,AddedToCartIcon,AddedToFavouriteIcon}  from "common/Icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";
import  useAddToCart  from "custom hooks/useAddToCart";
import  useAddToFav  from "custom hooks/useAddToFav";

export default function LatestCourses(props:any) {
  SwiperCore.use([Navigation]);
  const homePageData = useSelector((state:any) => state.homePageData);
  const userStatus = useSelector((state:any) => state.userAuthetication);

  const [placement, setPlacement] = useState<any>();
  const [latestCourses, setLatestCourses] = useState([]);
  const [filterType, setFilterType] = useState("all");
  const [cartItems, setCartItems] = useState<any>([]);

  const handleFilterType = (type:string)=>{
    setFilterType(type);
    axiosInstance
    .get(`courses/?type=${type}&country_code=eg&page=1&limit=10`)
    .then(function (response:any) {
      setLatestCourses(response.data.data.courses);
      // console.log("response.data.data.courses",response.data.data.courses);
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  const handleFavActionBtn = (course:any):any =>{
    if(userStatus.isUserAuthenticated == true){
      if(course.is_in_favorites == false){

        axiosInstance
        .post(`users/favorites/?country_code=eg`, {"course_id" : course.id})
        .then((response:any) => {
          console.log("Response",response);
          axiosInstance
          .get("home/?country_code=eg")
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
        .delete(`users/favorites/?country_code=eg`, { data:{"course_id" : course.id}})
        .then((response:any) => {
          console.log("Response",response);
          axiosInstance
          .get("home/?country_code=eg")
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
    }else{
      Router.push({
        pathname: "http://localhost:3000/SignIn",
        query: { from: "/HomePage" }
      })
    }
    // console.log("course" , course);
    // course.is_in_favorites = !course.is_in_favorites;
    // (async function setToFav(){
    //   await  setFavourite([...favourite,course.id]);
    //   localStorage.setItem("FAVOURITE" , JSON.stringify([...favourite,course.id]));
    // })();
    // console.log("storedFavCourses", localStorage.getItem("FAVOURITE"));
    // const storedFavCourses:any = localStorage.getItem("FAVOURITE");
    setLatestCourses([...latestCourses]);
  }

  const handleCartActionBtn = (course:any):any =>{
    if(userStatus.isUserAuthenticated == true){
      
    }else{
      (async function (){ 
      await  setCartItems([...cartItems,course.id]);
      let storedCartCourses:any = await localStorage.getItem("cart");
      localStorage.setItem("cart" , JSON.stringify([...(JSON.parse(storedCartCourses) || []) ,course.id]));
        console.log("storedCartCourses",localStorage.getItem("cart"));
    })();
    }
  }

  useEffect(() => {
    // axiosInstance
    // .get("home/?country_code=eg")
    // .then(function (response:any) {
    //   // const favouriteCourses:any = localStorage.getItem("FAVOURITE");
    //   // console.log("favouriteCourses",JSON.parse(favouriteCourses));
    //   // JSON.parse(favouriteCourses).forEach((ID:any) => {
    //   //   response.data.data.latest_courses.forEach((course:any)=>{
    //   //     console.log("course",course.id);
          
    //   //     if(course.id === ID){
    //   //       course.is_in_favorites = true;
    //   //     }
    //   //   })
    //   // });
    //   setLatestCourses(response.data.data.latest_courses);
    // })
    // .catch(function (error) {
    // });
    // if(homePageData !== {}){
      // console.log("ssss");
      setLatestCourses(homePageData.data?.latest_courses || []);
    // }

  }, [homePageData]);

  useEffect(() => {
    const seeMoreBtn:any = document.getElementById("see-more");
    const departmentsList:any = document.getElementById("departments-list");

    // to capture all the carousel cards
    const trigger: any = document.querySelectorAll(
      '[id^="latest-courses-card"]'
    );
 
    // loop over them to control the hover effect per each card
    trigger.forEach((element: any) => {
      element.addEventListener("mouseout" , function(){
        // setTimeout(() => {
          seeMoreBtn.style.cssText=`z-index:5;`
          departmentsList.style.cssText=`z-index:5;`
        // }, 2000);
      })
      element.addEventListener("mouseover", function () {
        seeMoreBtn.style.cssText=`z-index:1;`
        departmentsList.style.cssText=`z-index:1;`
        if(window.innerWidth > 1024){

        // to get right and left empty spaces to decide which direction the popover will appear
        const rootFontSize = parseFloat(
          window
          .getComputedStyle(document.getElementsByTagName("html")[0])
          .getPropertyValue("font-size")
        );
        const cardRightBoundary =
          window.innerWidth - element.getClientRects()[0].left;
        const cardLeftBoundary =
          element.getClientRects()[0].left;

          
          const observer = new MutationObserver((mutations, obs) => {
            let relatedPopover:any = document.getElementsByClassName(`popover-${element.id}`)[0];
            if (relatedPopover) {
              relatedPopover.addEventListener("mouseover" , function(){
                seeMoreBtn.style.cssText=`z-index:1;`
                departmentsList.style.cssText=`z-index:1;`
                
              });
              // setTimeout(() => {
                relatedPopover.addEventListener("mouseout" , function(){
                  seeMoreBtn.style.cssText=`z-index:5;`
                  departmentsList.style.cssText=`z-index:5;`
                });
              // }, 1000);
              // console.log(
              //   "element.getClientRects()[0].right",
              //   element.getClientRects()[0].right
              // );
              // console.log(
              //   "element.getClientRects()[0].left",
              //   element.getClientRects()[0].left
              // );
               obs.disconnect();
              if (cardRightBoundary > cardLeftBoundary) {
                // element.style.right="22rem"
                // console.log(document.getElementById(`popover-${element.id}`));
                // const relatedPopover:HTMLElement | null = document.getElementById(`popover-${element.id}`);
                // relatedPopover ?  relatedPopover.style.left=`${(element.getClientRects()[0].right)}px` : null ;
                setPlacement("right");
                // const cardWidth:any = document.getElementById("latest-courses-card1");
                // relatedPopover ?  relatedPopover.style.right=`auto` : null ;
                if(window.innerWidth <= 1200){
                relatedPopover ?  relatedPopover.style.left=`${2.32*(element.offsetWidth)}px` : null ;
                }else if(window.innerWidth > 1200){
                relatedPopover ?  relatedPopover.style.left=`${2.63*(element.offsetWidth)}px` : null ;
                }
                // relatedPopover ?  relatedPopover.style.left=`${2.65*(element.offsetWidth)}px` : null ;
                relatedPopover ?  relatedPopover.style.bottom =`${5.5*rootFontSize}px` : null ;
                // console.log("element.offsetWidth",element.offsetWidth);

              } else if (cardRightBoundary < cardLeftBoundary) {
                // element.style.left="22rem"
                // console.log(document.getElementById(`popover-${element.id}`));
                // const relatedPopover:HTMLElement | null = document.getElementById(`popover-${element.id}`);
                // relatedPopover ?  relatedPopover.style.inset=`0px  ${(window.innerWidth - element.getClientRects()[0].left)}px auto auto` : null ;
                setPlacement("left");
                // relatedPopover ?  relatedPopover.style.right=`${(element.getClientRects()[0].left)}px` : null ;
                // relatedPopover ?  relatedPopover.style.right=`auto` : null ;
                //relatedPopover ?  relatedPopover.style.right=`${(window.innerWidth)/5.2}px` : null ;
                // const cardWidth:any = document.getElementById("latest-courses-card1");
                relatedPopover ?  relatedPopover.style.right=`${1.085*(element.offsetWidth)}px` : null ;
                relatedPopover ?  relatedPopover.style.bottom =`${5.5*rootFontSize}px` : null ;
                // console.log("element.offsetWidth",element.offsetWidth);

              }
              return;
            }
          });
          
          observer.observe(document, {
            childList: true,
            subtree: true
          });

      }
      });
    });

    return () => {
      trigger.forEach((element: any) => {
        element.removeEventListener("mouseout", ()=>{
          return;
        });
        element.removeEventListener("mouseover", ()=>{
          return;
        });
      })
    };

  },);

  

  

  return (
    <>
      <Row className={styles["latest-courses"]}>
        <Col xs={12} className={styles["latest-courses__title"]}>
          <span>أحدث </span>
          <span>الدورات</span>
        </Col>
        <Col
           xs={{span:12 , order:1}} sm={9}
          className="d-flex align-items-center justify-content-start"
        >
          <ul id="departments-list" className={styles["latest-courses__departments-list"]}>
            <li onClick={()=>{handleFilterType("all")}} 
            className={`${styles["latest-courses__departments-list__item"]} ${filterType == "all" && styles["latest-courses__departments-list__item--active"]}`}>
              كل الأقسام
            </li>
            <li onClick={()=>{handleFilterType("best-seller")}} 
            className={`${styles["latest-courses__departments-list__item"]} ${filterType == "best-seller" && styles["latest-courses__departments-list__item--active"]}`}>
              الأكثر مبيعاً
            </li>
            <li onClick={()=>{handleFilterType("latest")}} 
            className={`${styles["latest-courses__departments-list__item"]} ${filterType == "latest" && styles["latest-courses__departments-list__item--active"]}`}>
              أحدث الدورات
            </li>
          </ul>
        </Col>

        <Col xs={{span:12 , order:3}} sm={{span:3 , order:1}} className={styles["latest-courses__see-more-btn-col"]}>
        <Link href="/CourseDetails">
          <Button className={styles["latest-courses__see-more-btn"]} id="see-more">
            اعرض المزيد
            <ChevronLeftIcon color="#af151f"/>
          </Button>
        </Link>
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
              latestCourses.map((course:any , i:number)=>{
                return (
                  <SwiperSlide key={i}>

                  <Tippy className={`popover-latest-courses-card${i}`}  interactive={true} delay={100} placement={placement}
                  content={
                    <div id={`popover-latest-courses-card${i}`} className="h-100"
                    // className={styles["latest-courses__popover-container"]}
                    >

                  <div>
                        <Link href="/CourseDetails">
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
                    { course.key_points.slice(0,6).map((kp:string,i:number)=>{
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
                      <Link href="/CourseDetails">

                        <div className={styles["latest-courses__show-more-link"]}>
                          اعرض المزيد
                        </div>
                      </Link>
                      :
                      null
                      }
                 
                    <div className={styles["latest-courses__popover-container__btns"]}>

                          <Link href="/CourseDetails">
                            <Button className={styles["latest-courses__popover-container__btns__details-btn"]}>التفاصيل</Button>
                          </Link>
                          <Button className={styles["latest-courses__popover-container__btns__add-to-cart-btn"]}>
                          <CartIcon color="#fff"/>
                          <span> أضف للسلة </span>  
                            </Button>
                      </div> 

                 
                    </div>
                  }>

                    <Card
                        id={`latest-courses-card${i}`}
                        className={
                          styles["latest-courses__cards-carousel__course-card"]
                        }
                      >

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

                        <Link href="/CourseDetails">

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
                              <img
                                src={course.trainer.image}
                                alt="trainer image"
                              />
                            </div>
                            <div
                              className={
                                styles[
                                  "latest-courses__cards-carousel__course-card__card-body__card-header__course-details"
                                ]
                              }
                            >
                          <Link href="/CourseDetails">
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
                              <div
                                className={
                                  styles[
                                    "latest-courses__cards-carousel__course-card__card-body__card-header__course-details__author"
                                  ]
                                }
                              >
                                {course.trainer.name_ar}
                              </div>
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
                                 { course.price !== 0 && <span
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
                                  {course.price == 0 ? "مجانًا" : course.price}
                                </span>
                               
                              </div>
                              {
                                (course.price > course.discounted_price) &&
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
                                  {course.discounted_price}
                                </span>
                               
                              </div>
                              }
                              
                              
                            </div>

                            <div >
                              <Button
                                className={
                                  styles[
                                    "latest-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                                  ]
                                }
                              >
                                <div onClick={()=>handleCartActionBtn(course)} 
                                className={styles["latest-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__cart-icon"]}>

                                  <CartIcon color="#222"/>
                                </div>

                              </Button>
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
                                  <AddedToFavouriteIcon />
                                   : 
                                  <FavouriteIcon color="#222"/>
                                   }
                                 
                                </div>
                                

                              </Button>
                            </div>
                          </div>
                        </Card.Body>

                      </Card>


                  </Tippy>

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


/* 

*/
