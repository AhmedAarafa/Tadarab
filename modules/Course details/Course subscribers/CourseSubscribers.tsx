/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import styles from "./course-subscribers.module.css";
import { Col, Button, Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import Image from 'next/image';
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "configurations/axios/axiosConfig";
import Router from "next/router";
import { setCartItems } from "configurations/redux/actions/cartItems";
import { ChevronLeftIcon, LearnersIcon, TickIcon, CartIcon, FavouriteIcon, AddedToCartIcon, AddedToFavouriteIcon, TvIcon } from "common/Icons/Icons";
import { handleCart } from "modules/_Shared/utils/handleCart";
import { handleFav } from "modules/_Shared/utils/handleFav";
import Link from 'next/link';
import { setCheckoutType } from "configurations/redux/actions/checkoutType";
import { useRouter } from 'next/router';
import { handleFreeCourses } from "modules/_Shared/utils/handleFreeCourses";


export default function CourseSubscribers() {
  SwiperCore.use([Navigation]);
  const courseDetailsData = useSelector((state: any) => state.courseDetailsData);
  const userStatus = useSelector((state: any) => state.userAuthentication);
  const [courseDetails, setCourseDetails] = useState<any>([]);
  const [courseSubscribers, setCourseSubscribers] = useState([]);
  const [disabledCartBtns, setDisabledCartBtns] = useState<any>([]);
  const themeState = useSelector((state: any) => state.themeState.theme);

  // const [cartItems, setCartItems] = useState<any>([]);
  const dispatch = useDispatch();
  const Router = useRouter();
  const { slug } = Router.query;

  useEffect(() => {
    setCourseDetails(courseDetailsData.data?.related_courses);
  }, [courseDetailsData]);

  return (
    <>
      {
        courseDetailsData.length !== 0 && courseDetailsData !== null &&
        <>
          <Col id="course-subscribers-section" xs={12} className={styles["course-subscribers"]}>
            <div className={styles["course-subscribers__title"]}>
              <div>مشتركين هذه الدورة</div>
              <h2>امتلكوا الدورات التالية أيضاً</h2>
            </div>
          </Col>

          <Col xs={12} className={styles["course-subscribers__cards-carousel"]}>
            <Swiper dir="rtl"   slidesPerView={3.8} navigation={true}
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

              {courseDetails?.map((course: any, i: number) => {
                return (
                  <SwiperSlide key={i}>
                    <Card data-isvisible={false} data-coursedetails={JSON.stringify({
                      name: course?.title,
                      id: course?.id,
                      price: course?.discounted_price_usd,
                      brand: "Tadarab",
                      category: "Recorded Course",
                      variant: "Single Course",
                      list: "single",
                      position: i + 1
                    })}
                      id={`course-subscribers__course-card${i}`}
                      className={
                        styles["course-subscribers__cards-carousel__course-card"]
                      }
                    >
                      {
                        course?.categories[0] !== undefined && course?.categories[0]?.title !== null && course?.categories[0]?.title !== "" &&

                        <div
                          className={
                            styles[
                            "course-subscribers__cards-carousel__course-card__category-chip"
                            ]
                          }
                          style={{ backgroundColor: `${course?.categories[0] !== undefined && course?.categories[0].color}` }}
                        >
                          {course?.categories[0] !== undefined && course?.categories[0]?.title}
                        </div>
                      }
                      <Link href={`/course/${course?.slug}`}>
                        <a>
                          <Card.Img
                            variant="top"
                            src={course?.image}
                            alt="course image"
                            className={
                              styles[
                              "course-subscribers__cards-carousel__course-card__course-img"
                              ]
                            }
                          />

                        </a>
                      </Link>
                      <Card.Body
                        className={
                          styles[
                          "course-subscribers__cards-carousel__course-card__card-body"
                          ]
                        }
                      >
                        <div style={{ borderBottom: course?.is_in_user_subscription && "none" }}
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
                              "course-subscribers__cards-carousel__course-card__card-body__card-header__course-details"
                              ]
                            }
                          >
                            <Link href={`/course/${course?.slug}`}>

                              <h3 title={course?.title}
                                className={
                                  styles[
                                  "course-subscribers__cards-carousel__course-card__card-body__card-header__course-details__title"
                                  ]
                                }
                              >
                                {course?.title}
                              </h3>

                            </Link>
                            <Link href={`/trainer/${course?.trainer?.slug}`}>

                              <div title={course?.trainer?.name_ar}
                                className={
                                  styles[
                                  "course-subscribers__cards-carousel__course-card__card-body__card-header__course-details__author"
                                  ]
                                }
                              >
                                {course?.trainer?.name_ar}
                              </div>
                            </Link>
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
      }
    </>
  );
}