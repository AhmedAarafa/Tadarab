/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from "./watched-courses.module.css";
import {
    Row,
    Col,
    Card,
    ProgressBar
} from "react-bootstrap";
import { ChevronLeftIcon } from "common/Icons/Icons";
import Router from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import { GAProductClickEventHandler } from "modules/_Shared/utils/GAEvents";
import { useSelector } from 'react-redux';

export default function WatchedCourses(props: any) {
    const [watchedCourses, setWatchedCourses] = useState<any>([]);
    const themeState = useSelector((state: any) => state.themeState.theme);

    useEffect(() => {
        setWatchedCourses(props.data || []);
      }, [props?.data]);

    return (
        <>
            { watchedCourses.length !== 0 && <Row data-theme={themeState} className={styles["watched-courses"]}>
                <Col  xs={12} className={styles["watched-courses__title"]}>
                    <span>دوراتي </span>
                    <span>التدريبية</span>
                </Col>

                <Col xs={{ span: 12, order: 2 }} className={styles["watched-courses__cards-carousel"]}>

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
                        className="mySwiper"
                    >

                        {
                            watchedCourses?.map((course: any, i: number) => {
                                return (
                                    <SwiperSlide key={i}>

                                        <Card
                                            id={`watched-courses-card${i}`}
                                            className={
                                                styles["watched-courses__cards-carousel__course-card"]
                                            }>
                                            {
                                                course?.categories[0] !== undefined && course?.categories[0].title !== null && course?.categories[0].title !== "" &&

                                                <div
                                                    className={
                                                        styles[
                                                        "watched-courses__cards-carousel__course-card__category-chip"
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
                                                        src={course?.image}
                                                        alt="course image"
                                                        className={
                                                            styles[
                                                            "watched-courses__cards-carousel__course-card__course-img"
                                                            ]
                                                        }
                                                    />

                                                </a>
                                            </Link>

                                            <Card.Body
                                                className={
                                                    styles[
                                                    "watched-courses__cards-carousel__course-card__card-body"
                                                    ]
                                                }
                                            >
                                                <div style={{ borderBottom: course?.is_in_user_subscription && "none" }}
                                                    className={
                                                        styles[
                                                        "watched-courses__cards-carousel__course-card__card-body__card-header"
                                                        ]
                                                    }
                                                >
                                                    <div
                                                        className={
                                                            styles[
                                                            "watched-courses__cards-carousel__course-card__card-body__card-header__trainer-img-box"
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
                                                            "watched-courses__cards-carousel__course-card__card-body__card-header__course-details"
                                                            ]
                                                        }
                                                    >
                                                        <Link href={`/course/${course?.slug}`}>
                                                            <h1 onClick={() => { GAProductClickEventHandler(course, i) }}
                                                                title={course?.title}
                                                                className={
                                                                    styles[
                                                                    "watched-courses__cards-carousel__course-card__card-body__card-header__course-details__title"
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
                                                                    "watched-courses__cards-carousel__course-card__card-body__card-header__course-details__author"
                                                                    ]
                                                                }
                                                            >
                                                                {course?.trainer?.name_ar}
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>

                                                <div className={styles[
                                                    "watched-courses__cards-carousel__course-card__card-body__watching-progress-box"
                                                ]}>
                                                    <div className={styles[
                                                        "watched-courses__cards-carousel__course-card__card-body__watching-progress-box__progress-bar"
                                                    ]}>
                                                        <ProgressBar now={Math.ceil(course?.progress_percentage)} />
                                                    </div>
                                                    <div className="w-100 d-flex align-items-center justify-content-between">

                                                        <div className={styles[
                                                            "watched-courses__cards-carousel__course-card__card-body__watching-progress-box__percentage"
                                                        ]}>
                                                            {`${course?.progress_percentage}%`}

                                                        </div>

                                                        <Link href={`/course/${course?.slug}`}>

                                                            <div className={styles[
                                                                "watched-courses__cards-carousel__course-card__card-body__watching-progress-box__start"
                                                            ]}>
                                                                {
                                                                    course?.progress_percentage == 0 ?
                                                                        " ابدأ "
                                                                        :
                                                                        " أكمل "
                                                                }
                                                                التعلم
                                                                <ChevronLeftIcon color="#af151f" />

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
            </Row>}

        </>
    )
}
