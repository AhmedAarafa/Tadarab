/* eslint-disable @next/next/link-passhref */
import React, { memo } from "react";
import styles from "./trainers.module.css";
import { Row, Col, Button, Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';
import "swiper/css";
import { ChevronLeftIcon } from "common/Icons/Icons";
import Link from 'next/link';
import { useSelector } from "react-redux";
import trainers from "./trainers-info.json";

function Trainers() {
    SwiperCore.use([Navigation]);
    const themeState = useSelector((state: any) => state.themeState.theme);

    return (
        <>
            <Row>
                <Col xs={{ span: 12, order: 1 }} sm={{ span: 9, order: 1 }} className={styles["free-courses-trainers__title"]}>
                    <h2>
                        <span>أشهر مدربين الدورات المجانية </span>
                    </h2>
                </Col>

                <Col xs={{ span: 12, order: 2 }} sm={{ span: 12, order: 3 }} className={styles["free-courses-trainers__cards-carousel"]}>
                    <Swiper dir="rtl" slidesPerView={4} navigation={true} pagination={{ "clickable": true }}
                        breakpoints={{

                            "50": {
                                slidesPerView: 1.12,
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

                        }} className="mySwiper">

                        {trainers?.map((trainer: any, i: number) => {
                            return (
                                <SwiperSlide key={i}>
                                    <Link href={`/trainer/${trainer?.slug}`}>
                                        <Card className={styles["free-courses-trainers__cards-carousel__card"]}
                                            style={{ backgroundImage: `url("${trainer.image}")` }}
                                        >
                                            <div className={styles["free-courses-trainers__cards-carousel__card__card-body"]}>
                                                <div className="text-center">
                                                    <Link href={`/trainer/${trainer?.slug}`}>
                                                        <div className={styles["free-courses-trainers__cards-carousel__card__trainer"]}>{trainer.name_ar}</div>
                                                    </Link>
                                                    <div className={styles["free-courses-trainers__cards-carousel__card__job-title"]}>{trainer.title}</div>
                                                    <div className={styles["free-courses-trainers__cards-carousel__card__job-history"]}
                                                        dangerouslySetInnerHTML={{ __html: trainer.bio }}></div>
                                                </div>
                                            </div>

                                        </Card>
                                    </Link>
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

export default memo(Trainers);