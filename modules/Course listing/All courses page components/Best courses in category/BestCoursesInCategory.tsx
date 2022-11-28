/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
import React, { useEffect, useState, useRef } from "react";
import styles from "./best-courses-in-category.module.css";
import { Row, Col, Button, Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import Link from 'next/link';
import { axiosInstance } from "configurations/axios/axiosConfig";
import { ChevronLeftIcon, LearnersIcon, TickIcon, CartIcon, FavouriteIcon, AddedToCartIcon, AddedToFavouriteIcon, TvIcon } from "common/Icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { setCartItems } from "configurations/redux/actions/cartItems";
import withAuth from "configurations/auth guard/AuthGuard";
import { handleFav } from "modules/_Shared/utils/handleFav";
import { handleCart } from "modules/_Shared/utils/handleCart";
import { GAProductClickEventHandler } from "modules/_Shared/utils/GAEvents";
import { setCheckoutType } from "configurations/redux/actions/checkoutType";
import { handleFreeCourses } from "modules/_Shared/utils/handleFreeCourses";
import { toggleLoader } from "modules/_Shared/utils/toggleLoader";

export default function BestCoursesInCategory(props: any) {
  SwiperCore.use([Navigation]);

  const [categoryCourses, setCategoryCourses] = useState<any>([]);
  // const [isExecuted, setIsExecuted] = useState(false);
  const [disabledCartBtns, setDisabledCartBtns] = useState<any>([]);

  const dispatch = useDispatch();
  const userStatus = useSelector((state: any) => state.userAuthentication);
  const cartItems = useSelector((state: any) => state.cartItems);
  const router = useRouter();
  const themeState = useSelector((state: any) => state.themeState.theme);

  useEffect(() => {

    if (props?.title == "business" || props?.title == "family-and-educational-skills" || props?.title == "family") {
      axiosInstance
        .get(`categories/${props?.title}/?page=1&limit=10`)
        .then(function (response: any) {
          setCategoryCourses(response.data.data.courses);
          toggleLoader("hide");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, []);

  return (
    <>
      <Row>
        <Col xs={12} className={styles["best-courses-in-category__title"]} id="title-section">
          <h2 >
            <span>
              دورات
              {props?.title == "business" && " ريادة الأعمال "}
              {props?.title == "family-and-educational-skills" && " التربية "}
              {props?.title == "family" && " الأسرة  "  }
            </span>

          </h2>
        </Col>
        <Col xs={{ span: 12, order: 2 }} className={styles["best-courses-in-category__cards-carousel"]}>
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
              categoryCourses?.map((course: any, i: number) => {
                return (
                  <SwiperSlide key={i}>

                    <Card
                      className={
                        styles["best-courses-in-category__cards-carousel__course-card"]
                      }>

                      {
                        course.categories[0] !== undefined && course.categories[0].title !== null && course.categories[0].title !== "" &&

                        <div
                          className={
                            styles[
                            "best-courses-in-category__cards-carousel__course-card__category-chip"
                            ]
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
                            className={styles["best-courses-in-category__cards-carousel__course-card__course-img"]} />
                        </a>
                      </Link>

                      <Card.Body
                        className={styles["best-courses-in-category__cards-carousel__course-card__card-body"]}>
                        <div style={{ borderBottom: course.is_in_user_subscription && "none" }}
                          className={styles["best-courses-in-category__cards-carousel__course-card__card-body__card-header"]}>
                          <div
                            className={styles["best-courses-in-category__cards-carousel__course-card__card-body__card-header__trainer-img-box"]}>
                            <Link href={`/trainer/${course.trainer?.slug}`}>
                              <img loading="lazy"
                                src={course.trainer?.image}
                                alt="trainer image"
                              />
                            </Link>
                          </div>
                          <div
                            className={styles["best-courses-in-category__cards-carousel__course-card__card-body__card-header__course-details"]}>
                            <Link href={`/course/${course.slug}`}>
                              <h3 onClick={() => { GAProductClickEventHandler(course, i) }}
                                title={course.title}
                                className={styles["best-courses-in-category__cards-carousel__course-card__card-body__card-header__course-details__title"]}>
                                {course.title}
                              </h3>
                            </Link>
                            <Link href={`/trainer/${course.trainer?.slug}`}>
                              <div title={course.trainer?.name_ar}
                                className={styles["best-courses-in-category__cards-carousel__course-card__card-body__card-header__course-details__author"]}>
                                {course.trainer?.name_ar}
                              </div>
                            </Link>
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
