/* eslint-disable @next/next/no-img-element */
import React , { useEffect ,useState} from "react";
import styles from "./live-courses.module.css";
import { Row, Col, Button, Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';
import "swiper/css";
import { axiosInstance } from "configurations/axios/axiosConfig";
import  {ChevronLeftIcon,LiveIcon,PlayIcon,CartIcon,FavouriteIcon,AddedToCartIcon,ContainedBellIcon,AddedToFavouriteIcon,BellIcon}  from "common/Icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";
import { handleFav } from "modules/_Shared/utils/handleFav";
import { handleCart } from "modules/_Shared/utils/handleCart";
import { setCartItems } from "configurations/redux/actions/cartItems"; 
import { setCheckoutType } from "configurations/redux/actions/checkoutType"; 

export default function LiveCourses() {
    SwiperCore.use([Navigation]);
  const dispatch = useDispatch();

    const homePageData = useSelector((state:any) => state.homePageData);
    const [liveCourses, setLiveCourses] = useState<any>([]);
    const userStatus = useSelector((state:any) => state.userAuthentication);

    const handleSubscribeBtn = (course:any):any =>{
      if(userStatus.isUserAuthenticated == true){

        if(course.is_subscribed_to == false){
          axiosInstance
          .post(`users/live-subscriptions`, {"course_id" : course.id})
          .then((response:any) => {
            console.log("Response",response);
            axiosInstance
            .get(`home/?country_code=${localStorage.getItem("countryCode")}`)
            .then(function (response:any) {
              setLiveCourses(response.data.data.live_courses);
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
          .delete(`users/live-subscriptions`, { data:{"course_id" : course.id}})
          .then((response:any) => {
            console.log("Response",response);
            axiosInstance
            .get(`home/?country_code=${localStorage.getItem("countryCode")}`)
            .then(function (response:any) {
              setLiveCourses(response.data.data.live_courses);
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
          pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}signin`,
          query: { from: "/HomePage" }
        })
  
      }
      setLiveCourses([...liveCourses]);
    }
    const handleCartActionBtn = (course:any):any =>{
      dispatch(setCheckoutType("cart"));
    
      // if(userStatus?.isUserAuthenticated == true){
        const handleCartResponse:any =  handleCart([course],`home/?country_code=${localStorage.getItem("countryCode")}`,false);
        handleCartResponse.then(function(firstresponse:any) {
          firstresponse.resp.then(function(response:any){
            setLiveCourses(response.data.data.live_courses);
             dispatch(setCartItems(firstresponse.cartResponse));
          })
        //  setLocalCartItems(response.totalItems);
        })
      // }
      // else{
      //   const handleCartResponse:any =  handleCart([course],`home/?country_code=${localStorage.getItem("countryCode")}`,false);
      //   handleCartResponse.then(function(response:any) {
      //       dispatch(setCartItems(response.data.data));
      //       let newArray:any = liveCourses;
      //       response.data.data?.forEach((element:any) => {
      //        newArray.forEach((ele:any) => {
      //            if(element.id === ele.id){
      //              // console.log(ele);
      //              ele.is_in_cart = true;
      //          }
      //      });
      //  });
      //  setLiveCourses([...newArray]);
          
      //   })
      // }
      // setLatestCourses([...latestCourses]);
    }


    useEffect(() => { 
  
        setLiveCourses(homePageData.data?.live_courses || []);
        const localStorageItems:any = localStorage.getItem("cart");
      if(localStorageItems !== "[]" && localStorageItems !== "null" && localStorageItems !== "undefined"){
        axiosInstance
          .get(`courses/?country_code=${localStorage.getItem("countryCode")}&course_ids=${localStorageItems?.replace(/[\[\]']+/g,'')}`)
          .then(function (response:any) {
            // console.log(response);
            let newArray:any = homePageData.data?.live_courses;
           response.data.data.forEach((element:any) => {
            newArray.forEach((ele:any) => {
                if(element.id === ele.id){
                  // console.log(ele);
                  ele.is_in_cart = true;
                  // newArray.ele.is_in_cart = true;
                  // console.log("newArray",newArray);
                }
              });
            });
            setLiveCourses([...newArray]);
  
        })
        .catch(function (error) {
          console.log(error); 
        });

      }

    }, [homePageData]);
    
  return (
    <>
      <Row>
        <Col xs={{span:12 , order:1}} sm={{span:9 , order:1}} className={styles["live-courses__title"]}> 
          <div>
            <span> الدورات </span>
            <span> المباشرة </span>
          </div>
        </Col>
        <Col xs={{span:12 , order:3}} sm={{span:3 , order:1}} className={styles["live-courses__see-more-btn-col"]}>

          <Button className={styles["live-courses__see-more-btn"]}>
            اعرض المزيد
            <ChevronLeftIcon color="#af151f"/>

          </Button>

        </Col>

        <Col xs={{span:12 , order:2}} sm={{span:12 , order:2}} className={styles["live-courses__cards-carousel"]}>
        <Swiper dir="rtl" slidesPerView={4} navigation={true} pagination={{"clickable": true}} 
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
        }} className="mySwiper">

            {  liveCourses?.map((lc:any,i:number)=>{
              return(
                <SwiperSlide key={i}> 
                  <Card className={`${ lc.price == 0 ? styles["live-courses__cards-carousel__card"] : styles["live-courses__cards-carousel__card--paid"] } 
                  `}>
                      <div
                        className={
                          styles[
                            "live-courses__cards-carousel__course-card__category-chip"
                          ]
                        }
                        style={{backgroundColor:lc.categories[0]?.color}}
                      >
                          {lc.categories[0]?.title}
                      </div>
                      <div
                        className={
                          styles[
                            "live-courses__cards-carousel__course-card__duration-chip"
                          ]
                        }
                      >
                        <div>
                        { lc.full_date == Math.floor(Date.now() / 1000) && <LiveIcon/>}
                        </div>
                        <div>

                          { lc.full_date == Math.floor(Date.now() / 1000) ? <span>مباشر الآن</span> :  <span>{lc.short_date}</span>}
                        </div>
                      </div>
                          <Card.Img variant="top" src={lc.image} alt='trainer image'
                          className={styles["live-courses__cards-carousel__card__trainer-img"]}/>
                          <Card.Body className={styles["live-courses__cards-carousel__card__card-body"]}>
                              <div className={styles["live-courses__cards-carousel__card__card-body__card-header"]}>
                                  <div className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details"]}>
                                      <h1 title={lc.title} className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details__title"]}>{lc.title}</h1>
                                      <div title={lc.trainer?.name_ar} className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details__author"]}>{lc.trainer?.name_ar}</div>
                                  </div>
                                  <div className={styles["live-courses__cards-carousel__card__card-body__card-header__course-details__para"]}>
                                  {lc.details}
                                  </div>
                              </div>


                              <div className={styles["live-courses__cards-carousel__card__card-body__checkout-details"]}>
                                <div>
                                  <div
                                    className={
                                      styles[
                                        "live-courses__cards-carousel__course-card__card-body__checkout-details__price-container"
                                      ]
                                    }
                                  >
                                    { lc.discounted_price !== 0 && !lc.is_purchased && <span
                                      className={
                                        styles[
                                          "live-courses__cards-carousel__course-card__card-body__checkout-details__price-container__currency"
                                        ]
                                      }
                                    >
                                    {lc.currency_code}
                                    </span>}

                                    <span
                                      className={
                                        styles[
                                          "live-courses__cards-carousel__course-card__card-body__checkout-details__price-container__price"
                                        ]
                                      }
                                    >
                                  {lc.is_purchased && "تم الشراء"}

                                      {!lc.is_purchased && (lc.discounted_price == 0 ? "مجانًا" : lc.discounted_price)}
                                    </span>
                                  
                                  </div>
                                  { (lc.price > lc.discounted_price) && !lc.is_purchased &&
                                  <div
                                    className={
                                      styles[
                                        "live-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container"
                                      ]
                                    }
                                  >
                                    <span
                                      className={
                                        styles[
                                          "live-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__currency"
                                        ]
                                      }
                                    >
                                      {lc.currency_code}
                                    </span>
                                    <span
                                      className={
                                        styles[
                                          "live-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__price"
                                        ]
                                      }
                                    >
                                      {lc.price}
                                    </span>
                                  
                                  </div>
                                  }
                                </div>
                                  {  !lc.is_purchased &&  <Button className={styles["live-courses__cards-carousel__card__card-body__checkout-details__btn-box"]} disabled={lc.is_in_cart} variant={""}>
                                    {lc.price == 0 ? <div onClick={()=>handleSubscribeBtn(lc)}> {lc.is_subscribed_to ? <ContainedBellIcon/> : <BellIcon/>} </div>  
                                    :
                                    <div onClick={()=>handleCartActionBtn(lc)}> {(lc.is_in_cart ? <AddedToCartIcon color="#222"/>: <CartIcon color="#222"/>)} </div>}
                                  </Button>}
                              </div>
                          </Card.Body>
                          {lc.full_date == Math.floor(Date.now() / 1000) && <div className={styles["live-courses__cards-carousel__card__live-icon"]}>
                              <PlayIcon/>

                          </div>}
                  </Card> 
                </SwiperSlide>

              )
            })
            }
        
          
        </Swiper>
        </Col>
      </Row>
    </>
  );
}

  