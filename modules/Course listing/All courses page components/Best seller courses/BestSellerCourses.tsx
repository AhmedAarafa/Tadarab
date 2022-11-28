/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import styles from "./best-seller-courses.module.css";
import { Row, Col, Button, Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import Link from 'next/link';
import { axiosInstance } from "configurations/axios/axiosConfig";
import { useSelector } from "react-redux";
import { GAProductClickEventHandler } from "modules/_Shared/utils/GAEvents";
import { toggleLoader } from "modules/_Shared/utils/toggleLoader";

export default function BestSellerCourses() {
    SwiperCore.use([Navigation]);
    const themeState = useSelector((state: any) => state.themeState.theme);
    const [bestSellerCourses, setBestSellerCourses] = useState<any>([]);

    useEffect(() => {

        axiosInstance
            .get(`home/courses/?type=best-seller`)
            .then(function (response: any) {
                setBestSellerCourses(response?.data?.data);
                // toggleLoader("hide");
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    return (
        <>
            <Row data-theme={themeState} className={styles["best-seller-courses"]}>
                <Col xs={12} className={styles["best-seller-courses__title"]}>
                    <h2>
                        <span>الدورات الأكثر مشاهدة </span>
                    </h2>
                </Col>

                <Col xs={{ span: 12, order: 2 }} className={styles["best-seller-courses__cards-carousel"]}>
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
                            bestSellerCourses?.map((course: any, i: number) => {
                                return (
                                    <SwiperSlide key={i}>

                                        <Card
                                            className={
                                                styles["best-seller-courses__cards-carousel__course-card"]
                                            }>

                                            {
                                                course.categories[0] !== undefined && course.categories[0].title !== null && course.categories[0].title !== "" &&

                                                <div
                                                    className={
                                                        styles[
                                                        "best-seller-courses__cards-carousel__course-card__category-chip"
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
                                                        className={
                                                            styles[
                                                            "best-seller-courses__cards-carousel__course-card__course-img"
                                                            ]
                                                        }
                                                    />
                                                </a>
                                            </Link>

                                            <Card.Body
                                                className={
                                                    styles[
                                                    "best-seller-courses__cards-carousel__course-card__card-body"
                                                    ]
                                                }
                                            >
                                                <div style={{ borderBottom: course.is_in_user_subscription && "none" }}
                                                    className={
                                                        styles[
                                                        "best-seller-courses__cards-carousel__course-card__card-body__card-header"
                                                        ]
                                                    }
                                                >
                                                    <div
                                                        className={
                                                            styles["best-seller-courses__cards-carousel__course-card__card-body__card-header__trainer-img-box"
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
                                                            "best-seller-courses__cards-carousel__course-card__card-body__card-header__course-details"
                                                            ]
                                                        }
                                                    >
                                                        <Link href={`/course/${course.slug}`}>
                                                            <h3 onClick={() => { GAProductClickEventHandler(course, i) }}
                                                                title={course.title}
                                                                className={
                                                                    styles[
                                                                    "best-seller-courses__cards-carousel__course-card__card-body__card-header__course-details__title"
                                                                    ]
                                                                }
                                                            >
                                                                {course.title}
                                                            </h3>
                                                        </Link>
                                                        <Link href={`/trainer/${course.trainer?.slug}`}>
                                                            <div title={course.trainer?.name_ar}
                                                                className={
                                                                    styles[
                                                                    "best-seller-courses__cards-carousel__course-card__card-body__card-header__course-details__author"
                                                                    ]
                                                                }
                                                            >
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
