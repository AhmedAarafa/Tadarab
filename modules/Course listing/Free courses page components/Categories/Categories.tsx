/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import styles from "./categories.module.css";
import { Row, Col, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';
import "swiper/css";
import { ChevronLeftIcon } from "common/Icons/Icons";
import { axiosInstance } from "configurations/axios/axiosConfig";
import { toggleLoader } from "modules/_Shared/utils/toggleLoader";

export default function Categories() {
    SwiperCore.use([Navigation]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // toggleLoader("show");

        axiosInstance
            .get(`categories`)
            .then(function (response: any) {
                setCategories(response?.data?.data?.categories);
                // toggleLoader("hide");
            })
            .catch(function (error: any) {
                // toggleLoader("hide");
                console.log(error);
            });
    }, []);

    return (
        <>
            <Row>
                <Col xs={{ span: 12, order: 1 }} sm={{ span: 9, order: 1 }} className={styles["categories__container"]}>
                    <h2 className={styles["categories__container__title"]}>
                        <span> اكتشف تخصصات تدرب </span>
                    </h2>
                </Col>

                <Col xs={{ span: 12, order: 3 }} sm={{ span: 3, order: 1 }} className={styles["categories__see-more-btn-col"]}>

                    <Button className={styles["categories__container__show-all-btn"]}>
                        اعرض كل الأقسام
                        <ChevronLeftIcon color="#af151f" />

                    </Button>
                </Col>

                <Col xs={{ span: 12, order: 2 }} sm={{ span: 12, order: 2 }} className={styles['categories__cards-carousel']}>
                    <Swiper dir="rtl" slidesPerView={7} navigation={true} pagination={{ "clickable": true }}
                        breakpoints={{
                            "50": {
                                "slidesPerView": 2,
                            },
                            "576": {
                                slidesPerView: 5,
                            },
                            "981": {
                                slidesPerView: 7,
                            },
                        }} className="mySwiper">

                        {categories?.map((cat: any, i: any) => {
                            return (
                                <SwiperSlide key={i} style={{ cursor: "pointer" }}>

                                    <a href={`/topic/${cat.slug}`}>
                                        <div className={styles["categories__cards-carousel__departments-card"]}>
                                            <div>

                                                <div className="d-flex justify-content-center">

                                                    <div className={styles["categories__cards-carousel__departments-card__img-box"]}
                                                        style={{ backgroundColor: cat.color }}>
                                                        <img loading="lazy" src={`/images/${cat.icon}.svg`} alt={cat.icon} id={styles[cat.icon]} />
                                                    </div>
                                                </div>
                                                <div className={styles["categories__cards-carousel__departments-card__department"]}>{cat.title}</div>
                                                <div className={styles["categories__cards-carousel__departments-card__learners-number"]}>
                                                    {cat.courses_count} دورة
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </SwiperSlide>
                            )
                        })
                        }
                    </Swiper>
                </Col>
            </Row>
        </>
    )
}
