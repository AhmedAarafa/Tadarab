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

    if (props?.title == "business" || props?.title == "family-and-educational-skills") {
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

  const handleFavActionBtn = (course: any): any => {
    if (userStatus.isUserAuthenticated == true) {
      const handleFavResponse: any = handleFav(course, `categories/${props?.title}/?page=1&limit=10`);
      handleFavResponse.then(function (response: any) {
        setCategoryCourses(response.data.data.most_popullar);
      })
    } else {
      router.push({
        pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}sign-in`,
        query: { from: "free" }
      })
    }
  }

  const handleCartActionBtn = (course: any): any => {
    setDisabledCartBtns([...disabledCartBtns, course.id]);
    if (cartItems?.data) {
      dispatch(setCartItems([...(cartItems?.data), course]));
    }
    dispatch(setCheckoutType("cart"));

    const handleCartResponse: any = handleCart([course], `categories/${props?.title}/?page=1&limit=10`, false);
    handleCartResponse.then(function (firstresponse: any) {

      firstresponse.resp.then(function (response: any) {
        setCategoryCourses(response.data.data.most_popullar);
        dispatch(setCartItems(firstresponse.cartResponse));
        setDisabledCartBtns(disabledCartBtns.filter((b: any) => b !== course.id));
      })
    })

  }

  const handleFreeCoursesActionBtn = (course: any): any => {
    if (userStatus.isUserAuthenticated == true) {
      handleFreeCourses(course);
    } else {
      router.push({
        pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}sign-in`,
        query: { from: "free" }
      })
    }
  }

  return (
    <>
      <Row>
        <Col xs={12} className={styles["best-courses-in-category__title"]} id="title-section">
          <h2 >
            <span>
              أفضل الدورات في
              {props?.title == "business" && " ريادة الأعمال "}
              {props?.title == "family-and-educational-skills" && " التربية"}
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

                        <div
                          className={styles["best-courses-in-category__cards-carousel__course-card__card-body__checkout-details"]}>
                          <div >
                            <div
                              className={styles["best-courses-in-category__cards-carousel__course-card__card-body__checkout-details__price-container"]}>
                              {course.discounted_price !== 0 && !course.is_purchased && <span
                                className={styles["best-courses-in-category__cards-carousel__course-card__card-body__checkout-details__price-container__currency"]}>
                                {!course.is_in_user_subscription && course.currency_symbol}
                              </span>}

                              <span
                                className={
                                  styles[
                                  "best-courses-in-category__cards-carousel__course-card__card-body__checkout-details__price-container__price"
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
                                  "best-courses-in-category__cards-carousel__course-card__card-body__checkout-details__old-price-container"
                                  ]
                                }
                              >
                                <span
                                  className={styles["best-courses-in-category__cards-carousel__course-card__card-body__checkout-details__old-price-container__currency"]}>
                                  {course.currency_symbol}
                                </span>
                                <span
                                  className={styles["best-courses-in-category__cards-carousel__course-card__card-body__checkout-details__old-price-container__price"]}>
                                  {course.price}
                                </span>

                              </div>
                            }


                          </div>

                          <div >
                            {!course.is_purchased && !course.is_in_user_subscription && <Button disabled={course.is_in_cart || disabledCartBtns.includes(course.id)} variant={""}
                              className={
                                styles[
                                "best-courses-in-category__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                                ]
                              }
                            >
                              <div onClick={() =>
                                course?.discounted_price == 0 ?
                                  handleFreeCoursesActionBtn(course)
                                  :
                                  handleCartActionBtn(course)}
                                className={styles["best-courses-in-category__cards-carousel__course-card__card-body__checkout-details__icon-btn__cart-icon"]}>

                                {
                                  course.discounted_price == 0 ?
                                    <TvIcon color={themeState == 'light' ? "#222" : "#f5f5f5"} />
                                    :
                                    (course.is_in_cart) || disabledCartBtns.includes(course.id) ?
                                      <AddedToCartIcon color={themeState == 'light' ? "#222" : "#f5f5f5"} />
                                      :
                                      <CartIcon color={themeState == 'light' ? "#222" : "#f5f5f5"} />
                                }
                              </div>

                            </Button>}

                            <Button
                              className={
                                styles[
                                "best-courses-in-category__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                                ]
                              }
                            >

                              <div onClick={() => handleFavActionBtn(course)}
                                className={styles["best-courses-in-category__cards-carousel__course-card__card-body__checkout-details__icon-btn__fav-icon"]}>
                                {
                                  course.is_in_favorites ?
                                    <AddedToFavouriteIcon color="#af151f" />
                                    :
                                    <FavouriteIcon color={themeState == 'light' ? "#222" : "#f5f5f5"} />
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
