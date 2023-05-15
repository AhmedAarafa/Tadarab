/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
import React from 'react';
import styles from "./bundle-courses.module.css";
import { Row, Col, Button, Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import { useDispatch, useSelector } from "react-redux";
import { ChevronLeftIcon, LearnersIcon, TickIcon, CartIcon, FavouriteIcon, AddedToCartIcon, AddedToFavouriteIcon, TvIcon } from "common/Icons/Icons";
import Link from 'next/link';

export default function BundleCourses() {
    const themeState = useSelector((state: any) => state.themeState.theme);

    return (
        <Row data-theme={themeState} className={styles["bundle-courses"]}>

            <Col xs={12} className={styles["bundle-courses__title"]}>
                <h2>
                    <span>الباقات </span>
                    <span>التدريبية</span>
                </h2>
            </Col>

            <Col xs={{ span: 12, order: 2 }} className={styles["bundle-courses__cards-carousel"]}>
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
                    <Card className={styles['bundle-courses__cards-carousel__course-card']}>

                        <Card.Img
                            variant="top"
                            src="https://shorturl.at/pGMY3"
                            alt="course image"
                            className={styles["bundle-courses__cards-carousel__course-card__course-img"]}
                        />

                        <Card.Body className={styles["bundle-courses__cards-carousel__course-card__card-body"]}>

                            <div className={styles["bundle-courses__cards-carousel__course-card__card-body__card-header"]}>
                                <div className={styles["bundle-courses__cards-carousel__course-card__card-body__card-header__course-details"]}>
                                    {/* <Link href={`/course/${course.slug}`}> */}
                                    <h3 title=""
                                        className={
                                            styles[
                                            "bundle-courses__cards-carousel__course-card__card-body__card-header__course-details__title"
                                            ]
                                        }
                                    >
                                        باقة تعليم الرسم
                                    </h3>
                                    {/* </Link> */}
                                    {/* <Link href={`/trainer/${course.trainer?.slug}`}> */}
                                    <div title="" className={styles["bundle-courses__cards-carousel__course-card__card-body__card-header__course-details__author"]}                                        >
                                        الشنكوتي عزت
                                    </div>
                                    {/* </Link> */}
                                </div>
                            </div>

                            <div className={styles["bundle-courses__cards-carousel__course-card__card-body__checkout-details"]}>
                                <div >
                                    <div className={styles["bundle-courses__cards-carousel__course-card__card-body__checkout-details__price-container"]}>
                                        <span className={styles["bundle-courses__cards-carousel__course-card__card-body__checkout-details__price-container__price"]}>
                                            6000
                                        </span>
                                        <span className={styles["bundle-courses__cards-carousel__course-card__card-body__checkout-details__price-container__currency"]}>
                                            ج.م
                                        </span>
                                        {/* 
                                        <span className={styles["bundle-courses__cards-carousel__course-card__card-body__checkout-details__price-container__price"]}>
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
                                        </span> */}

                                    </div>
                                    {
                                        // (course.price > course.discounted_price) && !course.is_purchased &&
                                        <div className={styles["bundle-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container"]}>
                                            <span className={styles["bundle-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__price"]}>
                                                7000
                                            </span>
                                            <span className={styles["bundle-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__currency"]}>
                                                ج.م
                                            </span>

                                        </div>
                                    }


                                </div>

                                <div >
                                    {<Button /*  disabled={course.is_in_cart || disabledCartBtns.includes(course.id)}  */ variant={""}
                                        className={styles["bundle-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"]}>
                                        <div className={styles["bundle-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__cart-icon"]}>

                                            {
                                                // course.discounted_price == 0 ?
                                                //     <TvIcon color={themeState == 'light' ? "#222" : "#f5f5f5"} />
                                                //     :
                                                //     (course.is_in_cart) || disabledCartBtns.includes(course.id) ?
                                                //         <AddedToCartIcon color={themeState == 'light' ? "#222" : "#f5f5f5"} />
                                                //         :
                                                <CartIcon color={themeState == 'light' ? "#222" : "#f5f5f5"} />
                                            }
                                        </div>

                                    </Button>}

                                    <Button className={styles["bundle-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"]}>

                                        <div className={styles["bundle-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__fav-icon"]}>
                                            {
                                                // course.is_in_favorites ?
                                                //     <AddedToFavouriteIcon color="#af151f" />
                                                //     :
                                                <FavouriteIcon color={themeState == 'light' ? "#222" : "#f5f5f5"} />
                                            }

                                        </div>


                                    </Button>
                                </div>
                            </div>

                        </Card.Body>

                    </Card>
                </Swiper>
            </Col>

        </Row>
    )
}
