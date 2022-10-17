/* eslint-disable @next/next/link-passhref */
import React, { useState } from 'react';
import styles from "./season-trainers.module.css";
import { Row, Col, Button, Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';
import "swiper/css";
import trainersList from './SeasonTrainers.json';

export default function SeasonTrainers() {
    SwiperCore.use([Navigation]);
    // const [trainers, setTrainers] = useState(trainersList);

    return (
        <>
            <Row>
                <Col xs={{ span: 12, order: 1 }} sm={{ span: 9, order: 1 }} className={styles["season-trainers__title"]}>
                    <h2>
                        <span> مدربين موسم تدرب</span>
                    </h2>
                </Col>
                <Col xs={{ span: 12, order: 2 }} sm={{ span: 12, order: 3 }} className={styles["season-trainers__cards-carousel"]}>
                    <Swiper dir="rtl" slidesPerView={4} navigation={true} pagination={{ "clickable": true }}
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

                        }} className="mySwiper">

                        {trainersList?.map((trainer: any, i: number) => {
                            return (
                                <SwiperSlide key={i}>
                                    <Card className={styles["season-trainers__cards-carousel__card"]}
                                        style={{ backgroundImage: `url("${trainer.img_src}")` }} >
                                        <div className={styles["season-trainers__cards-carousel__card__card-body"]}>
                                            <div className="text-center">
                                                <div className={styles["season-trainers__cards-carousel__card__trainer-name"]}>{trainer.name}</div>
                                                <div className={styles["season-trainers__cards-carousel__card__trainer-title"]} title={trainer.job_title}>{trainer.job_title}</div>
                                            </div>
                                        </div>
                                    </Card>
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
