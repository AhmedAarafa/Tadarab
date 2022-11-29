/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';
import "swiper/css";
import { Row, Col, Button, Card, Pagination } from "react-bootstrap";
import styles from "./browse-through-categories.module.css";
import Link from 'next/link';


export default function BrowseThroughCategories(props:any) {
    return (
        <>

            <div className={styles['browse-through-categories__explore-courses']}>
                تصفح الدورات من خلال الأقسام
            </div>

            <Col xs={12} className={styles['browse-through-categories__cards-carousel']}>
                <Swiper dir="rtl"   slidesPerView={7} navigation={true}
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

                    {props?.data?.map((cat: any, i: any) => {
                        return (
                            <SwiperSlide key={i} style={{ cursor: "pointer" }}>

                                <Link href={`/topic/${cat.slug}`}>
                                    <div className={styles["browse-through-categories__cards-carousel__departments-card"]}>
                                        <div>

                                            <div className="d-flex justify-content-center">

                                                <div className={styles["browse-through-categories__cards-carousel__departments-card__img-box"]}
                                                    style={{ backgroundColor: cat.color }}>
                                                    <img loading="lazy" src={`/images/${cat.icon}.svg`} alt={cat.icon} id={styles[cat.icon]} />


                                                </div>
                                            </div>
                                            <div className={styles["browse-through-categories__cards-carousel__departments-card__department"]}>{cat.title}</div>
                                            <div className={styles["browse-through-categories__cards-carousel__departments-card__learners-number"]}>
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


        </>
    )
}
