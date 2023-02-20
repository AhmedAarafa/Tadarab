/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
import React, { useEffect, useState } from "react";
import Link from 'next/link';
import styles from "./latest-courses.module.css";
import {
  Row,
  Col,
  Button,
  Card,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import { ChevronLeftIcon, LearnersIcon, TickIcon, CartIcon, TvIcon, FavouriteIcon, AddedToCartIcon, AddedToFavouriteIcon } from "common/Icons/Icons";
import Router from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import { GAProductClickEventHandler } from "modules/_Shared/utils/GAEvents";
import { handleFav } from "modules/_Shared/utils/handleFav";
import { handleCart } from "modules/_Shared/utils/handleCart";
import { useDispatch, useSelector } from "react-redux";
import { setCheckoutType } from "configurations/redux/actions/checkoutType";
import { setCartItems } from "configurations/redux/actions/cartItems";
import { handleFreeCourses } from "modules/_Shared/utils/handleFreeCourses";


export default function LatestCourses(props: any) {
  SwiperCore.use([Navigation]);
  const [latestCourses, setLatestCourses] = useState<any>([]);
  const [disabledCartBtns, setDisabledCartBtns] = useState<any>([]);
  const userStatus = useSelector((state: any) => state.userAuthentication);
  const dispatch = useDispatch();

  useEffect(() => {
    setLatestCourses(props.data);
  }, [props?.data]);

  const handleCartActionBtn = (course: any): any => {
    setDisabledCartBtns([...disabledCartBtns,course?.id]);
    setTimeout(() => {
      setDisabledCartBtns(disabledCartBtns.filter((b:any) => b !== course?.id));
    }, 5000);
    dispatch(setCheckoutType("cart"));

    const handleCartResponse: any = handleCart([course], `course/filter/?country_code=eg`, false);
    handleCartResponse.then(function (firstresponse: any) {
      firstresponse.resp.then(function (response: any) {
        setLatestCourses(response.data.data.best_seller_courses);
        dispatch(setCartItems(firstresponse.cartResponse));
      })
    })
   
  }

  const handleFavActionBtn = (course: any): any => {
    if (userStatus.isUserAuthenticated == true) {
      const handleFavResponse: any = handleFav(course, `course/filter/?country_code=eg`);
      handleFavResponse.then(function (response: any) {
        setLatestCourses(response.data.data.best_seller_courses);
      })
    } else {
      Router.push({
        pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}sign-in`,
        query: { from: "my-account" }
      })
    }

  }
    
  const handleFreeCoursesActionBtn = (course: any): any => {
    if (userStatus.isUserAuthenticated == true) {
        handleFreeCourses(course);
    } else {
        Router.push({
            pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}sign-in`,
            query: { from: "/my-account" }
        })
    }
 }

  return (
    <>
      <Row className={styles["latest-courses"]}>
        <Col sm={9} className={styles["latest-courses__title"]}>
          <span> الأكثر </span>
          <span> مبيعاً </span>
        </Col>

        <Col xs={{ span: 12, order: 3 }} sm={{ span: 3, order: 1 }} className={styles["latest-courses__see-more-btn-col"]}>
          <Button className={styles["latest-courses__see-more-btn"]} id="see-more"
            onClick={() => { Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}courses/?type=best-seller`) }}
          >
            اعرض المزيد
            <ChevronLeftIcon color="#af151f" />
          </Button>
        </Col>

        <Col xs={{ span: 12, order: 2 }} className={styles["latest-courses__cards-carousel"]}>

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
            className="mySwiper">
            {
              latestCourses?.map((course: any, i: number) => {
                  return (
                    course?.progress_percentage == 0 &&
                    <SwiperSlide key={i}>
  
                      <Card
                        data-isvisible={false} data-coursedetails={JSON.stringify({
                          name: course?.title,
                          id: course?.id,
                          price: course?.discounted_price_usd,
                          brand: "Tadarab",
                          category: "Recorded Course",
                          variant: "Single Course",
                          list: "suggetion",
                          position: i + 1
                        })}
  
                        id={`latest-courses-card${i}`}
                        className={
                          styles["latest-courses__cards-carousel__course-card"]
                        }>
                       
                        {
                          course?.categories[0] !== undefined && course?.categories[0].title !== null && course?.categories[0].title !== "" &&
  
                          <div
                            className={
                              styles[
                              "latest-courses__cards-carousel__course-card__category-chip"
                              ]
                            }
                            style={{ backgroundColor: `${course?.categories[0] !== undefined && course?.categories[0].color}` }}
                          >
                            {course?.categories[0] !== undefined && course?.categories[0].title}
                          </div>
  
                        }
  
  
                        <Link href={`/course/${course?.slug}`}>
                          <a onClick={() => { GAProductClickEventHandler(course, i) }}>
  
                            <Card.Img
                              variant="top"
                              // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfFsim7mJetzNBK672yN0qjry6QJot2drW_w&usqp=CAU"
                              src={course?.image}
                              alt="course image"
                              className={
                                styles[
                                "latest-courses__cards-carousel__course-card__course-img"
                                ]
                              }
                            />
  
                          </a>
                        </Link>
  
                        <Card.Body
                          className={
                            styles[
                            "latest-courses__cards-carousel__course-card__card-body"
                            ]
                          }
                        >
                          <div style={{ borderBottom: course?.is_in_user_subscription && "none" }}
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
                              <Link href={`/trainer/${course?.trainer?.slug}`}>
  
                                <img loading="lazy"
                                  src={course?.trainer?.image}
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
                              <Link href={`/course/${course?.slug}`}>
                                <h1 onClick={() => { GAProductClickEventHandler(course, i) }}
                                  title={course?.title}
                                  className={
                                    styles[
                                    "latest-courses__cards-carousel__course-card__card-body__card-header__course-details__title"
                                    ]
                                  }
                                >
                                  {course?.title}
                                </h1>
                              </Link>
                              <Link href={`/trainer/${course?.trainer?.slug}`}>
  
                                <div title={course?.trainer?.name_ar}
                                  className={
                                    styles[
                                    "latest-courses__cards-carousel__course-card__card-body__card-header__course-details__author"
                                    ]
                                  }
                                >
                                  {course?.trainer?.name_ar}
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
                                {course?.discounted_price !== 0 && !course?.is_purchased && <span
                                  className={
                                    styles[
                                    "latest-courses__cards-carousel__course-card__card-body__checkout-details__price-container__currency"
                                    ]
                                  }
                                >
                                  {!course?.is_in_user_subscription && course?.currency_symbol}
                                </span>}
  
                                <span
                                  className={
                                    styles[
                                    "latest-courses__cards-carousel__course-card__card-body__checkout-details__price-container__price"
                                    ]
                                  }
                                >
                                  {course?.is_purchased && !course?.is_in_user_subscription && "تم الشراء"}
                                  {
                                    !course?.is_purchased && !course?.is_in_user_subscription && (course?.discounted_price == 0 ? "مجانًا" : course?.discounted_price)
                                  }
                                  {
                                    course?.is_in_user_subscription &&
                                    <Link href={`/course/${course?.slug}`}>
                                      <span className={styles["watch-subscribed-course"]}>
                                        شاهد الدورة
                                      </span>
                                    </Link>
  
                                  }
                                </span>
  
                              </div>
                              {
                                (course?.price > course?.discounted_price) && !course?.is_purchased &&
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
                                    {course?.currency_symbol}
                                  </span>
                                  <span
                                    className={
                                      styles[
                                      "latest-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__price"
                                      ]
                                    }
                                  >
                                    {course?.price}
                                  </span>
  
                                </div>
                              }
  
  
                            </div>
  
                            <div >
                              {!course?.is_purchased && !course?.is_in_user_subscription && <Button disabled={course?.is_in_cart || disabledCartBtns.includes(course?.id)} variant={""}
                                className={
                                  styles[
                                  "latest-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                                  ]
                                }
                              >
                                <div onClick={() => 
                                course?.discounted_price == 0 ?
                                handleFreeCoursesActionBtn(course)
                                :
                                handleCartActionBtn(course)}
                                  className={styles["latest-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__cart-icon"]}>
                                  {/* {
                                      // console.log(localCartItems.includes(course?.id))
                                      console.log(cartItems.data?.map((item:any)=>{
                                       return item.id == course?.id
                                      }))
                                      
                                    } */}
                                  {
                                    course?.discounted_price == 0 ?
                                      <TvIcon color="#222" />
                                      :
                                      course?.is_in_cart || disabledCartBtns.includes(course?.id) ?
                                        <AddedToCartIcon color="#222" />
                                        :
                                        <CartIcon color="#222" />
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
  
                                <div onClick={() => handleFavActionBtn(course)}
                                  className={styles["latest-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__fav-icon"]}>
                                  {
                                    course?.is_in_favorites ?
                                      <AddedToFavouriteIcon color="#af151f" />
                                      :
                                      <FavouriteIcon color="#222" />
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
  )
}
