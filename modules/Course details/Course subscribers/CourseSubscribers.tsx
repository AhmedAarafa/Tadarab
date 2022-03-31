/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React ,{ useState,useEffect } from "react";
import styles from "./course-subscribers.module.css";
import { Col , Button, Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "configurations/axios/axiosConfig";
import Router from "next/router";
import { setCartItems } from "configurations/redux/actions/cartItems"; 
import  {ChevronLeftIcon,LearnersIcon,TickIcon,CartIcon,FavouriteIcon,AddedToCartIcon,AddedToFavouriteIcon}  from "common/Icons/Icons";
import { handleCart } from "modules/_Shared/utils/handleCart";
import { handleFav } from "modules/_Shared/utils/handleFav";
import Link from 'next/link';
import { setCheckoutType } from "configurations/redux/actions/checkoutType"; 


export default function CourseSubscribers() {
  SwiperCore.use([Navigation]);
  const courseDetailsData = useSelector((state:any) => state.courseDetailsData);
  const userStatus = useSelector((state:any) => state.userAuthentication);
  const [courseDetails, setCourseDetails] = useState<any>([]);
  const [courseSubscribers, setCourseSubscribers] = useState([]);
  // const [cartItems, setCartItems] = useState<any>([]);
  const dispatch = useDispatch();

  const handleFavActionBtn = (course:any):any =>{
    if(userStatus.isUserAuthenticated == true){
    const handleFavResponse:any =  handleFav(course,`courses/1540/?country_code=${localStorage.getItem("countryCode")}`);
    handleFavResponse.then(function(response:any) {
      setCourseDetails(response.data.data?.related_courses);
    })
    }else{
      Router.push({
        pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}signin`,
        query: { from: "/CourseDetails" }
      })
    }
  }

  const handleCartActionBtn = (course:any):any =>{
    dispatch(setCheckoutType("cart"));
    
    // if(userStatus?.isUserAuthenticated == true){
      const handleCartResponse:any =  handleCart([course],`courses/1540/?country_code=${localStorage.getItem("countryCode")}`,false);
      handleCartResponse.then(function(firstresponse:any) {
        firstresponse.resp.then(function(response:any){
            // console.log("response.data.data",response.data.data);
            
          setCourseDetails(response.data.data?.related_courses);
           dispatch(setCartItems(firstresponse.cartResponse));
        })
      //  setLocalCartItems(response.totalItems);
      })
    // }
    // else{
    //   const handleCartResponse:any =  handleCart([course],`courses/1540/?country_code=${localStorage.getItem("countryCode")}`,false);
    //   handleCartResponse.then(function(response:any) {
    //       dispatch(setCartItems(response.data.data));

    //       let newArray:any = courseDetails;
    //      response.data.data?.forEach((element:any) => {
    //       newArray.forEach((ele:any) => {
    //           if(element.id === ele.id){
    //             console.log(ele);
    //             ele.is_in_cart = true;
    //         }
    //     });
    // });
    // setCourseDetails([...newArray]);
  
    //   })

    // }
  }

  useEffect(() => {

    setCourseDetails(courseDetailsData.data?.related_courses || []);
    
    const localStorageItems:any = localStorage.getItem("cart");
    if(localStorageItems !== "undefined" && localStorageItems !== "null" && localStorageItems !== "[]" ){
        
        axiosInstance
        .get(`courses/?country_code=${localStorage.getItem("countryCode")}&course_ids=${localStorageItems?.replace(/[\[\]']+/g,'')}`)
        .then(function (response:any) {
         
          let newArray:any = courseDetailsData.data?.related_courses;
         response.data.data.forEach((element:any) => {
          newArray.forEach((ele:any) => {
              if(element.id === ele.id){
                // console.log(ele);
                ele.is_in_cart = true;
                // newArray.ele.is_in_cart = true;
                // console.log("newArray",newArray);
                setCourseDetails([...newArray]);
              }
            });
          });
    
      })
      .catch(function (error) {
        console.log(error); 
      });
    }

    
    // (courseDetailsData.data?.latest_courses || []).forEach((item:any) => {
    //   if((JSON.parse(localStorageItems) || []).includes(item.id)){
    //     item.is_in_cart = true;
    //     setCourseDetails([...courseDetails]);
    //   }
    // });

  }, [courseDetailsData]);


  return (
    <>
      <Col xs={12} className={styles["course-subscribers"]}>
        <div className={styles["course-subscribers__title"]}>
            <div>مشتركين هذه الدورة</div>
            <div>امتلكوا الدورات التالية أيضاً</div>
        </div>
      </Col>
      <Col xs={12} className={styles["course-subscribers__cards-carousel"]}>
        <Swiper dir="rtl" slidesPerView={3.8} navigation={true} 
        breakpoints={{
            "50": {
                slidesPerView: 1.1,
              },
              "576": {
                slidesPerView: 2.8,
              },
              "981": {
                slidesPerView: 3.8,
              },
              "1201": {
                slidesPerView: 4.8,
              },
        }} className="mySwiper">

            {courseDetails?.map((course:any,i:number)=>{
                return(
                    <SwiperSlide key={i}>
                        <Card data-isvisible={false} data-coursedetails={JSON.stringify({
                                name:course.title,
                                id:course.id,
                                price:course.discounted_price_usd,
                                brand:"Tadarab",
                                category: "Recorded Course",
                                variant: "Single Course",
                                list: "single",
                                position: i+1
                              })}
                              id={`course-subscribers__course-card${i}`}
                            className={
                                styles["course-subscribers__cards-carousel__course-card"]
                            }
                            >
                            <div
                                className={
                                styles[
                                    "course-subscribers__cards-carousel__course-card__category-chip"
                                ]
                                }
                                style={{backgroundColor:`${course.categories[0].color}`}}
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
                                      "course-subscribers__cards-carousel__course-card__course-img"
                                  ]
                                  }
                              />
                            </Link>
                            <Card.Body
                                className={
                                styles[
                                    "course-subscribers__cards-carousel__course-card__card-body"
                                ]
                                }
                            >
                                <div
                                className={
                                    styles[
                                    "course-subscribers__cards-carousel__course-card__card-body__card-header"
                                    ]
                                }
                                >
                                <div
                                    className={
                                    styles[
                                        "course-subscribers__cards-carousel__course-card__card-body__card-header__trainer-img-box"
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
                                        "course-subscribers__cards-carousel__course-card__card-body__card-header__course-details"
                                    ]
                                    }
                                >
                                  <Link href={`/course/${course.slug}`}>

                                      <h1 title={course.title}
                                      className={
                                          styles[
                                          "course-subscribers__cards-carousel__course-card__card-body__card-header__course-details__title"
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
                                          "course-subscribers__cards-carousel__course-card__card-body__card-header__course-details__author"
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
                                    "course-subscribers__cards-carousel__course-card__card-body__checkout-details"
                                    ]
                                }
                                >
                                <div className="d-flex flex-column">
                                    <div
                                    className={
                                        styles[
                                        "course-subscribers__cards-carousel__course-card__card-body__checkout-details__price-container"
                                        ]
                                    }
                                    >
                                    <span
                                        className={
                                        styles[
                                            "course-subscribers__cards-carousel__course-card__card-body__checkout-details__price-container__price"
                                        ]
                                        }
                                    >
                                        {course.is_purchased && "تم الشراء"}
                                  {
                                    !course.is_purchased && (course.discounted_price == 0 ? "مجانًا" : course.discounted_price)
                                  }
                                    </span>
                                   { course.discounted_price !== 0 && !course.is_purchased &&   <span
                                        className={
                                        styles[
                                            "course-subscribers__cards-carousel__course-card__card-body__checkout-details__price-container__currency"
                                        ]
                                        }
                                    >
                                        { course.currency_code}
                                    </span>}
                                    </div>

                                    {(course.price > course.discounted_price) && !course.is_purchased &&
                                    <div
                                    className={
                                        styles[
                                        "course-subscribers__cards-carousel__course-card__card-body__checkout-details__old-price-container"
                                        ]
                                    }
                                    >
                                    <span
                                        className={
                                        styles[
                                            "course-subscribers__cards-carousel__course-card__card-body__checkout-details__old-price-container__price"
                                        ]
                                        }
                                    >
                                        { course.price}
                                    </span>
                                    <span
                                        className={
                                        styles[
                                            "course-subscribers__cards-carousel__course-card__card-body__checkout-details__old-price-container__currency"
                                        ]
                                        }
                                    >
                                        { course.currency_code}
                                    </span>
                                    </div>
                                    }
                                    
                                </div>

                                <div className="d-inline-block">
                                     { !course.is_purchased && <Button onClick={()=>handleCartActionBtn(course)}  disabled={course.is_in_cart} variant={""}
                                    className={
                                        styles[
                                        "course-subscribers__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                                        ]
                                    }
                                    >
                                    <div className={styles["course-subscribers__cards-carousel__course-card__card-body__checkout-details__icon-btn__cart-icon"]}>

                                    {
                                  course.is_in_cart ?
                                  <AddedToCartIcon color="#222"/>
                                   : 
                                   <CartIcon color="#222"/>
                                   }
                                    </div>

                                    </Button>}
                                    <Button onClick={()=>handleFavActionBtn(course)}
                                    className={
                                        styles[
                                        "course-subscribers__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                                        ]
                                    }
                                    >
                                    <div className={styles["course-subscribers__cards-carousel__course-card__card-body__checkout-details__icon-btn__fav-icon"]}>

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
                )
            })}


         
           
        </Swiper>
        </Col>
    </>
  );
}
