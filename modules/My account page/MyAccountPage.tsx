/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Card, Pagination } from "react-bootstrap";
import styles from "./my-account-page.module.css";
import Router, { useRouter } from "next/router";
import { axiosInstance } from "configurations/axios/axiosConfig";
import { GAProductClickEventHandler } from "modules/_Shared/utils/GAEvents";
import { AddedToCartIcon, AddedToFavouriteIcon, CartIcon, FavouriteIcon, PlayIcon, LiveIcon, ContainedBellIcon, BellIcon } from "common/Icons/Icons";
import Link from 'next/link';
import { handleFav } from "modules/_Shared/utils/handleFav";
import { handleCart } from "modules/_Shared/utils/handleCart";
import { useDispatch, useSelector } from "react-redux";
import { setCheckoutType } from "configurations/redux/actions/checkoutType";
import { setCartItems } from "configurations/redux/actions/cartItems";
import { FBPixelEventsHandler } from 'modules/_Shared/utils/FBPixelEvents';
import { toggleLoader } from "modules/_Shared/utils/toggleLoader";
import { tokenValidationCheck } from "modules/_Shared/utils/tokenValidationCheck";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';
import "swiper/css";
import Image from 'next/image';

export default function MyAccountPage() {
  SwiperCore.use([Navigation]);
  const [courseListing, setCourseListing] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState("1");
  const [pageNumber, setPageNumber] = useState(1);
  const userStatus = useSelector((state: any) => state.userAuthentication);
  const dispatch = useDispatch();
  const router = useRouter();


  const handleFavActionBtn = (course: any): any => {
    if (userStatus.isUserAuthenticated == true) {
      const handleFavResponse: any = handleFav(course, `users/purchased/?country_code=eg&limit=16&page=${pageNumber}`);
      handleFavResponse.then(function (response: any) {
        setCourseListing(response?.data);
      })
    } else {
      Router.push({
        pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}sign-in`,
        query: { from: "my-account" }
      })
    }
  }

  const handleCartActionBtn = (course: any): any => {
    dispatch(setCheckoutType("cart"));

    const handleCartResponse: any = handleCart([course], `users/purchased/?country_code=eg&limit=16&page=${pageNumber}`, false);
    handleCartResponse.then(function (firstresponse: any) {
      firstresponse.resp.then(function (response: any) {
        console.log("response,", response);
        console.log("firstresponse", firstresponse);

        setCourseListing(response?.data);
        dispatch(setCartItems(firstresponse.cartResponse));
      })
    })

  }

  const handlePageClick = (pgNo: any) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentPage(pgNo);
    axiosInstance
      .get(`users/purchased/?country_code=eg&limit=16&page=${pgNo}`)
      .then(function (response: any) {
        console.log(response);
        setCourseListing(response?.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    toggleLoader("show");

    axiosInstance
      .get(`users/purchased/?country_code=eg&limit=16&page=1`)
      .then(function (response: any) {
        if (tokenValidationCheck(response)) {

          setCourseListing(response?.data);
          FBPixelEventsHandler(response.data.fb_tracking_events, null);
          toggleLoader("hide");
        }
        toggleLoader("hide");

      })
      .catch(function (error) {
        toggleLoader("hide");
        console.log(error);
      });

  }, []);



  return (
    <>
      <Row>

        <div className={styles['my-account__explore-courses']}> 
          تصفح الدورات من خلال الأقسام
        </div>

        <Col xs={12} className={styles['my-account__cards-carousel']}>
          <Swiper dir="rtl" slidesPerView={7} navigation={true}
            breakpoints={{
              "50": {
                "slidesPerView": 2,
              },
              "576": {
                "slidesPerView": 5,
              },
              "981": {
                "slidesPerView": 7,
              },
            }} className="mySwiper">

            {courseListing?.data?.categories?.map((cat: any, i: any) => {
              return (
                <SwiperSlide key={i} style={{ cursor: "pointer" }}>

                  <Link href={`/topic/${cat.slug}`}>
                    <div className={styles["my-account__cards-carousel__departments-card"]}>
                      <div>

                        <div className="d-flex justify-content-center">

                          <div className={styles["my-account__cards-carousel__departments-card__img-box"]}
                            style={{ backgroundColor: cat.color }}>
                            <img loading="lazy"   src={`/images/${cat.icon}.svg`} alt={cat.icon} id={styles[cat.icon]} />


                          </div>
                        </div>
                        <div className={styles["my-account__cards-carousel__departments-card__department"]}>{cat.title}</div>
                        <div className={styles["my-account__cards-carousel__departments-card__learners-number"]}>
                          {cat.courses_count} دورة
                        </div>
                      </div>
                    </div>
                  </Link>

                </SwiperSlide>
              )
            })
            }


          </Swiper>
        </Col>

        <Col xs={12} className={styles["my-account"]}>
          {courseListing?.data?.length == 0 &&
            <div className={styles["my-account__you-have-no-courses"]}>
              لا يوجد دورات في حسابك
            </div>
          }
          {courseListing?.data?.courses?.map((course: any, i: number) => {

            return (
              <Card key={i} className={styles["my-account__course-card"]}>
                {
                  course.categories[0] !== undefined && course.categories[0].title !== null && course.categories[0].title !== "" &&
                  <div
                    className={
                      styles["my-account__course-card__category-chip"]
                    }
                    style={{ backgroundColor: `${course.categories[0] !== undefined && course.categories[0].color}` }}
                  >
                    {course.categories[0] !== undefined && course.categories[0].title}
                  </div>
                }

                <Link href={`/course/${course.slug}`}>
                  <a onClick={() => { GAProductClickEventHandler(course, i) }}>
                    <Card.Img
                      variant="top"
                      src={course.image}
                      alt="course image"
                      className={
                        styles[
                        "my-account__course-card__course-img"
                        ]
                      }
                    />

                  </a>
                </Link>

                <Card.Body
                  className={
                    styles[
                    "my-account__course-card__card-body"
                    ]
                  }
                >
                  <div
                    className={
                      styles[
                      "my-account__course-card__card-body__card-header"
                      ]
                    }
                  >
                    <div
                      className={
                        styles[
                        "my-account__course-card__card-body__card-header__trainer-img-box"
                        ]
                      }
                    >
                      <Link href={`/trainer/${course.trainer?.slug}`}>
                        <img loading="lazy"  
                          src={course.trainer?.image}
                          alt="trainer image"
                        />
                      </Link>
                    </div>
                    <div
                      className={
                        styles[
                        "my-account__course-card__card-body__card-header__course-details"
                        ]
                      }
                    >
                      <Link href="/course">
                        <h1 onClick={() => { GAProductClickEventHandler(course, i) }}
                          title={course.title}
                          className={
                            styles[
                            "my-account__course-card__card-body__card-header__course-details__title"
                            ]
                          }
                        >
                          {course.title}
                        </h1>
                      </Link>

                      <Link href={`/trainer/${course.trainer?.slug}`}>

                        <div title={course.trainer?.name_ar}
                          className={
                            styles[
                            "my-account__course-card__card-body__card-header__course-details__author"
                            ]
                          }
                        >
                          {course.trainer?.name_ar}
                        </div>
                      </Link>

                    </div>
                  </div>

                  <div
                    className={
                      styles[
                      "my-account__course-card__card-body__checkout-details"
                      ]
                    }
                  >
                    <div >
                      <div
                        className={
                          styles[
                          "my-account__course-card__card-body__checkout-details__price-container"
                          ]
                        }
                      >
                        {course.discounted_price !== 0 && !course.is_purchased && <span
                          className={
                            styles[
                            "my-account__course-card__card-body__checkout-details__price-container__currency"
                            ]
                          }
                        >
                          {!course.is_in_user_subscription && course.currency_code}
                        </span>}

                        <span
                          className={
                            styles[
                            "my-account__course-card__card-body__checkout-details__price-container__price"
                            ]
                          }
                        >
                          {course.is_purchased && !course.is_in_user_subscription && "تم الشراء"}
                          {
                            !course.is_purchased && !course.is_in_user_subscription && (course.discounted_price == 0 ? "مجانًا" : course.discounted_price)
                          }
                          {
                            course.is_in_user_subscription &&
                            <Link href={`/course/${course.slug}`}>
                              <span className={styles["watch-subscribed-course"]}>
                                شاهد الدورة
                              </span>
                            </Link>
                          }
                        </span>

                      </div>
                      {
                        (course.price > course.discounted_price) && !course.is_purchased &&
                        <div
                          className={
                            styles[
                            "my-account__course-card__card-body__checkout-details__old-price-container"
                            ]
                          }
                        >
                          <span
                            className={
                              styles[
                              "my-account__course-card__card-body__checkout-details__old-price-container__currency"
                              ]
                            }
                          >
                            {course.currency_code}
                          </span>
                          <span
                            className={
                              styles[
                              "my-account__course-card__card-body__checkout-details__old-price-container__price"
                              ]
                            }
                          >
                            {course.price}
                          </span>

                        </div>
                      }


                    </div>

                    <div >
                      {!course.is_purchased && !course.is_in_user_subscription && <Button disabled={course.is_in_cart} variant={""}
                        className={
                          styles[
                          "my-account__course-card__card-body__checkout-details__icon-btn"
                          ]
                        }
                      >
                        <div onClick={() => handleCartActionBtn(course)}
                          className={styles["my-account__course-card__card-body__checkout-details__icon-btn__cart-icon"]}>
                          {
                            course.is_in_cart ?
                              <AddedToCartIcon color="#222" />
                              :
                              <CartIcon color="#222" />
                          }
                        </div>

                      </Button>}

                      <Button
                        className={
                          styles[
                          "my-account__course-card__card-body__checkout-details__icon-btn"
                          ]
                        }
                      >

                        <div onClick={() => handleFavActionBtn(course)}
                          className={styles["my-account__course-card__card-body__checkout-details__icon-btn__fav-icon"]}>
                          {
                            course.is_in_favorites ?
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
            )
          })}
        </Col>

        <Col xs={12} className={styles["my-account__pagination"]}>
          {console.log(courseListing)
          }

          {
            courseListing?.pagination?.count > 16 && <Pagination>
              <Pagination.Prev
                onClick={() => {
                  setPageNumber(courseListing?.pagination?.current - 1);
                  handlePageClick(courseListing?.pagination?.current - 1)
                }}
                className={`${currentPage == "1" && styles["disabled"]}`} />

              <Pagination.Item
                style={{ display: courseListing?.pagination?.previous ? "" : "none" }}
                active={currentPage == courseListing?.pagination?.previous}
                onClick={() => {
                  setPageNumber(courseListing?.pagination?.previous);
                  handlePageClick(courseListing?.pagination?.previous)
                }}>
                {courseListing?.pagination?.previous}
              </Pagination.Item>
              <Pagination.Item
                active={currentPage == courseListing?.pagination?.current}
                onClick={() => {
                  setPageNumber(courseListing?.pagination?.current);
                  handlePageClick(courseListing?.pagination?.current);
                }}>
                {courseListing?.pagination?.current}
              </Pagination.Item>
              <Pagination.Item
                style={{ display: courseListing?.pagination?.next ? "" : "none" }}
                active={currentPage == courseListing?.pagination?.next}
                onClick={() => {
                  setPageNumber(courseListing?.pagination?.next);
                  handlePageClick(courseListing?.pagination?.next)
                }}>
                {courseListing?.pagination?.next}
              </Pagination.Item>

              <Pagination.Next
                onClick={() => {
                  setPageNumber(courseListing?.pagination?.current + 1);
                  handlePageClick(courseListing?.pagination?.current + 1)
                }}
                className={`${currentPage == courseListing?.pagination?.pages && styles["disabled"]}`} />
            </Pagination>
          }

        </Col>


      </Row>

    </>
  )
}
