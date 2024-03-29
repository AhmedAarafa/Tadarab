/* eslint-disable @next/next/no-img-element */
import React, { memo } from 'react';
import styles from "./testimonials.module.css";
import { Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from 'swiper';
import "swiper/css";
import { QuoteIcon } from "common/Icons/Icons";
import usersReviews from "./Testimonials.json";

function Testimonials() {
    SwiperCore.use([Navigation]);
    SwiperCore.use([Pagination]);

    return (
        <>
            <Row className={styles["testimonials"]}>

                <Col xs={12} className={styles["testimonials__title"]}>
                    <span>ماذا قال المتدربون عن الدورات التدريبية في  تدرب</span>
                </Col>
                <Col xs={12} className={styles["testimonials__breif"]}>
                    آراء المتعلمين على منصة تدرب في الدورات والمدربين
                </Col>
                <Col xs={12} className={styles["testimonials__cards-carousel-container"]}>
                    <Swiper dir="rtl" slidesPerView={1} navigation={true} pagination={{ "clickable": true }}
                        breakpoints={{
                            "751": {
                                "slidesPerView": 1,
                            },
                        }} className="mySwiper">
                        <div className={styles["testimonials__cards-carousel"]}>
                            {usersReviews.map((review: any, i: number) => {
                                return (
                                    <SwiperSlide key={i} className={styles["testimonials__cards-carousel__item"]}>
                                        <div className={styles["testimonials__cards-carousel__item__container"]}>
                                            <div className={styles["testimonials__cards-carousel__item__container__img"]}>
                                                <div className={styles["black-overlay"]}></div>

                                                <img loading="lazy" src={review.course_image} alt={review.course_title} />
                                                <div
                                                    className={styles["testimonials__cards-carousel__item__container__course-details-box"]}
                                                >
                                                    <div
                                                        className={styles["testimonials__cards-carousel__item__container__course-details-box__trainer-img"]}
                                                    >
                                                        <img loading="lazy" src={review.trainer_image} alt={review.trainer_name} />
                                                    </div>
                                                    <div
                                                        className={styles["testimonials__cards-carousel__item__container__course-details-box__course-details"]}
                                                    >
                                                        <div
                                                            className={styles["testimonials__cards-carousel__item__container__course-details-box__course-details__title"]}
                                                        >
                                                            {review.course_title}
                                                        </div>
                                                        <div
                                                            className={styles["testimonials__cards-carousel__item__container__course-details-box__course-details__author"]}
                                                        >
                                                            {review.trainer_name}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles["testimonials__cards-carousel__item__container__review-box"]}>
                                                <div className={styles["testimonials__cards-carousel__item__container__review-box__quote"]}>
                                                    <div className={styles["testimonials__cards-carousel__item__container__review-box__img"]}>
                                                        <QuoteIcon />
                                                    </div>
                                                    <div className={styles["testimonials__cards-carousel__item__container__review-box__course-img"]}>
                                                        <img loading="lazy" src={review.course_image} alt={review.course_title} />
                                                    </div>
                                                    <div className={styles["testimonials__cards-carousel__item__container__review-box__course-name"]}>
                                                        <img loading="lazy" src={review.trainer_image} alt={review.trainer_name} />
                                                        <div>
                                                            {review.course_title}
                                                            <div>
                                                                {review.trainer_name}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={styles["testimonials__cards-carousel__item__container__review-box__review"]}>
                                                    {review.review}
                                                </div>
                                                <div className={styles["testimonials__cards-carousel__item__container__review-box__reviewer-details"]}>
                                                    <div>{review.reviewer_name}</div>
                                                    <div>{review.reviewer_country}</div>
                                                </div>
                                            </div>

                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </div>
                    </Swiper>
                </Col>
            </Row>
        </>
    )
}

export default memo(Testimonials);
