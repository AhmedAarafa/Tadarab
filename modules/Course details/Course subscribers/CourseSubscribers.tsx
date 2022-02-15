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
      if(course.is_in_favorites == false){

        axiosInstance
        .post(`users/favorites/?country_code=eg`, {"course_id" : course.id})
        .then((response:any) => {
          console.log("Response",response);
          axiosInstance
          .get("courses/32720/?country_code=eg")
          .then(function (response:any) {
            setCourseDetails(response.data?.data);
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
          .get("courses/32720/?country_code=eg")
          .then(function (response:any) {
            setCourseDetails(response.data?.data);
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

    // setCourseDetails([...courseDetails]);
  }

  const handleCartActionBtn = (course:any):any =>{
    if(userStatus.isUserAuthenticated == true){
      if(course.is_in_cart == false){

        axiosInstance
        .post(`users/cart/?country_code=eg`, {"item_ids" : JSON.stringify([course.id])})
        .then((response:any) => {
         const totalItems:any = [];
          console.log("Response",response);
          response.data.data.forEach((item:any)=>{
            totalItems.push(item.id);
          });
          localStorage.setItem("cart" , JSON.stringify(totalItems));
         dispatch(setCartItems(totalItems));
          axiosInstance
          .get("courses/32720/?country_code=eg")
          .then(function (response:any) {
            setCourseDetails(response.data.data);
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
        .delete(`users/cart/?country_code=eg`, { data:{"item_id" : course.id}})
        .then((response:any) => {
         const totalItems:any = [];
          console.log("Response",response);
          response.data.data.forEach((item:any)=>{
          totalItems.push(item.id);
          });
          localStorage.setItem("cart" , JSON.stringify(totalItems));
          dispatch(setCartItems(totalItems));

          axiosInstance
          .get("courses/32720/?country_code=eg")
          .then(function (response:any) {
            setCourseDetails(response.data.data);
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
          setCourseDetails([...courseDetails]);
      })();
      }else{
        course.is_in_cart = false;
        const localStorageItems:any = localStorage.getItem("cart");
       const resultedItems:any = JSON.parse(localStorageItems).filter(function(ele:any){ 
          return ele != course.id; 
      });
      localStorage.setItem("cart" , JSON.stringify(resultedItems));
      dispatch(setCartItems(resultedItems));

      setCourseDetails([...courseDetails]);

      }
    }
  }
  useEffect(() => {

    setCourseDetails(courseDetailsData.data || []);
    // console.log("courseDetailsData.data",courseDetailsData.data);
    
    const localStorageItems:any = localStorage.getItem("cart");
    (courseDetailsData.data?.latest_courses || []).forEach((item:any) => {
      if((JSON.parse(localStorageItems) || []).includes(item.id)){
        item.is_in_cart = true;
        setCourseDetails([...courseDetails]);
      }
    });

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

            {courseDetails?.related_courses?.map((course:any,i:number)=>{
                return(
                    <SwiperSlide key={i}>
                        <Card
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
                                    <img
                                    src={course.trainer.image}
                                    alt="trainer image"
                                    />
                                </div>
                                <div
                                    className={
                                    styles[
                                        "course-subscribers__cards-carousel__course-card__card-body__card-header__course-details"
                                    ]
                                    }
                                >
                                    <h1
                                    className={
                                        styles[
                                        "course-subscribers__cards-carousel__course-card__card-body__card-header__course-details__title"
                                        ]
                                    }
                                    >
                                   {course.title}
                                    </h1>
                                    <div
                                    className={
                                        styles[
                                        "course-subscribers__cards-carousel__course-card__card-body__card-header__course-details__author"
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
                                        { course.discounted_price}
                                    </span>
                                    <span
                                        className={
                                        styles[
                                            "course-subscribers__cards-carousel__course-card__card-body__checkout-details__price-container__currency"
                                        ]
                                        }
                                    >
                                        { course.currency_code}
                                    </span>
                                    </div>

                                    {course.price > course.discounted_price &&
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
                                    <Button onClick={()=>handleCartActionBtn(course)} 
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

                                    </Button>
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
                    </SwiperSlide>
                )
            })}


         
           
        </Swiper>
        </Col>
    </>
  );
}
