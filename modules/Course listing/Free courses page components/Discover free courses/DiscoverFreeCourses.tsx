/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import styles from "./discover-free-courses.module.css";
import { Row, Col, Button, Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import { useDispatch, useSelector } from "react-redux";
import Router, { useRouter } from "next/router";
import { setCartItems } from "configurations/redux/actions/cartItems";
import { GAProductClickEventHandler } from "modules/_Shared/utils/GAEvents";
import Link from 'next/link';
import { CartIcon, FavouriteIcon, AddedToCartIcon, AddedToFavouriteIcon, TvIcon } from "common/Icons/Icons";
import { handleFreeCourses } from "modules/_Shared/utils/handleFreeCourses";
import { handleFav } from "modules/_Shared/utils/handleFav";
import { axiosInstance } from "configurations/axios/axiosConfig";
import { toggleLoader } from "modules/_Shared/utils/toggleLoader";

export default function DiscoverFreeCourses() {
    const [freeCourses, setFreeCourses] = useState<any>([]);
    const [disabledCartBtns, setDisabledCartBtns] = useState<any>([]);
    const themeState = useSelector((state: any) => state.themeState.theme);
    const userStatus = useSelector((state: any) => state.userAuthentication);
    const router = useRouter();
    SwiperCore.use([Navigation]);

    useEffect(() => {
        // toggleLoader("show");
    }, []);

    useEffect(() => {
        axiosInstance
            .get(`courses/?page=1&limit=10&type=free`)
            .then(function (response: any) {
                setFreeCourses(response?.data);
                // toggleLoader("hide");
            })
            .catch(function (error) {
                // toggleLoader("hide");
                console.log(error);
            });

    }, [router.query]);

    const handleFreeCoursesActionBtn = (course: any): any => {
        if (userStatus.isUserAuthenticated == true) {
            handleFreeCourses(course);
        } else {
            Router.push({
                pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}sign-up`,
                query: { from: "free" }
            })
        }
    }

    const handleCartActionBtn = (course: any): any => {
    }

    const handleFavActionBtn = (course: any): any => {
        if (userStatus.isUserAuthenticated == true) {
            const handleFavResponse: any = handleFav(course, `courses/?page=1&limit=10&type=free`);
            handleFavResponse.then(function (response: any) {
                setFreeCourses(response.data);
            })
        } else {
            Router.push({
                pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}sign-up`,
                query: { from: "free" }
            })
        }
    }


    return (
        <Row data-theme={themeState} className={styles["discover-free-courses"]}>
            <Col xs={12} className={styles["discover-free-courses__title"]}>
                <h2>
                    <span> اكتشف جميع الدورات المجانية </span>
                </h2>
            </Col>

            <Col xs={12} className={styles["discover-free-courses__cards-carousel"]}>
                <Swiper
                    dir="rtl"
                    slidesPerView={5}
                    spaceBetween={0}
                    navigation={true}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        "50": {
                            slidesPerView: 1.25,
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
                        freeCourses?.data?.courses.map((course: any, i: number) => {
                            return (
                                <SwiperSlide key={i}>

                                    <Card data-isvisible={false} data-coursedetails={JSON.stringify({
                                        name: course.title,
                                        id: course.id,
                                        price: course.discounted_price_usd,
                                        brand: "Tadarab",
                                        category: "Recorded Course",
                                        variant: "Single Course",
                                        list: "homepage",
                                        position: i + 1
                                    })}
                                        className={styles["discover-free-courses__cards-carousel__course-card"]}>
                                        {
                                            course.categories[0] !== undefined && course.categories[0].title !== null && course.categories[0].title !== "" &&

                                            <div
                                                className={
                                                    styles[
                                                    "discover-free-courses__cards-carousel__course-card__category-chip"
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
                                                    alt={course.title}
                                                    className={styles["discover-free-courses__cards-carousel__course-card__course-img"]}
                                                />
                                            </a>
                                        </Link>

                                        <Card.Body
                                            className={styles["discover-free-courses__cards-carousel__course-card__card-body"]}>
                                            <div style={{ borderBottom: course.is_in_user_subscription && "none" }}
                                                className={
                                                    styles[
                                                    "discover-free-courses__cards-carousel__course-card__card-body__card-header"
                                                    ]}>
                                                <div
                                                    className={
                                                        styles["discover-free-courses__cards-carousel__course-card__card-body__card-header__trainer-img-box"
                                                        ]}>
                                                    <Link href={`/trainer/${course.trainer?.slug}`}>
                                                        <img loading="lazy"
                                                            src={course.trainer?.image}
                                                            alt={course.trainer?.name_ar}
                                                        />
                                                    </Link>
                                                </div>
                                                <div
                                                    className={
                                                        styles[
                                                        "discover-free-courses__cards-carousel__course-card__card-body__card-header__course-details"
                                                        ]}>
                                                    <Link href={`/course/${course.slug}`}>
                                                        <h3 onClick={() => { GAProductClickEventHandler(course, i) }}
                                                            title={course.title}
                                                            className={
                                                                styles[
                                                                "discover-free-courses__cards-carousel__course-card__card-body__card-header__course-details__title"
                                                                ]}>
                                                            {course.title}
                                                        </h3>
                                                    </Link>
                                                    <Link href={`/trainer/${course.trainer?.slug}`}>
                                                        <div title={course.trainer?.name_ar}
                                                            className={
                                                                styles[
                                                                "discover-free-courses__cards-carousel__course-card__card-body__card-header__course-details__author"
                                                                ]}>
                                                            {course.trainer?.name_ar}
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>

                                            <div
                                                className={
                                                    styles[
                                                    "discover-free-courses__cards-carousel__course-card__card-body__checkout-details"
                                                    ]}>
                                                <div >
                                                    <div
                                                        className={
                                                            styles[
                                                            "discover-free-courses__cards-carousel__course-card__card-body__checkout-details__price-container"
                                                            ]
                                                        }
                                                    >
                                                        {course.discounted_price !== 0 && !course.is_purchased && <span
                                                            className={
                                                                styles[
                                                                "discover-free-courses__cards-carousel__course-card__card-body__checkout-details__price-container__currency"
                                                                ]
                                                            }
                                                        >
                                                            {!course.is_in_user_subscription && course.currency_symbol}
                                                        </span>}

                                                        <span
                                                            className={
                                                                styles[
                                                                "discover-free-courses__cards-carousel__course-card__card-body__checkout-details__price-container__price"
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
                                                                "discover-free-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container"
                                                                ]
                                                            }
                                                        >
                                                            <span
                                                                className={
                                                                    styles[
                                                                    "discover-free-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__currency"
                                                                    ]
                                                                }
                                                            >
                                                                {course.currency_symbol}
                                                            </span>
                                                            <span
                                                                className={
                                                                    styles[
                                                                    "discover-free-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__price"
                                                                    ]
                                                                }
                                                            >
                                                                {course.price}
                                                            </span>

                                                        </div>
                                                    }


                                                </div>

                                                <div >
                                                    {!course.is_purchased && !course.is_in_user_subscription && <Button disabled={course.is_in_cart || disabledCartBtns.includes(course.id)} variant={""}
                                                        className={
                                                            styles[
                                                            "discover-free-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                                                            ]
                                                        }
                                                    >
                                                        <div onClick={() =>
                                                            course?.discounted_price == 0 ?
                                                                handleFreeCoursesActionBtn(course)
                                                                :
                                                                handleCartActionBtn(course)}
                                                            className={styles["discover-free-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__cart-icon"]}>

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
                                                            "discover-free-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                                                            ]
                                                        }
                                                    >

                                                        <div onClick={() => handleFavActionBtn(course)}
                                                            className={styles["discover-free-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__fav-icon"]}>
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
    )
}
