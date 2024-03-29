/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, memo } from "react";
import styles from "./trainers.module.css";
import { Row, Col, Button, Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';
import "swiper/css";
import { axiosInstance } from "configurations/axios/axiosConfig";
import { ChevronLeftIcon } from "common/Icons/Icons";
import Link from 'next/link';
import { useSelector } from "react-redux";

function Trainers() {
    SwiperCore.use([Navigation]);
    const [trainers, setTrainers] = useState([]);
    const themeState = useSelector((state: any) => state.themeState.theme);

    useEffect(() => {
        axiosInstance
            .get(`trainers/?limit=10&page=1`)
            .then(function (response: any) {
                setTrainers(response?.data?.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    return (
        <>
            <Row>
                <Col xs={{ span: 12, order: 1 }} sm={{ span: 9, order: 1 }} className={styles["trainers__title"]}>
                    <h2>
                      <span>تعلم من الأفضل</span>
                    </h2>
                </Col>

                <Col xs={{ span: 12, order: 3 }} sm={{ span: 3, order: 2 }} className={styles["trainers__see-more-btn-col"]}>
                    <Link href="/trainers">
                        <Button className={styles["trainers__see-more-btn"]}>
                            اعرض كل المدربين
                            <ChevronLeftIcon color={themeState == "light" ? "#af151f" : "#f5f5f5"} />
                        </Button>
                    </Link>
                </Col>

                <Col xs={{ span: 12, order: 2 }} sm={{ span: 12, order: 3 }} className={styles["trainers__cards-carousel"]}>
                    <Swiper dir="rtl" slidesPerView={4} navigation={true} pagination={{ "clickable": true }}
                        breakpoints={{

                            "50": {
                                slidesPerView: 1.15,
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
                                        <Card className={styles["trainers__cards-carousel__card"]}
                                            style={{ backgroundImage: `url("${trainer.image}")` }}
                                        >
                                            <div className={styles["trainers__cards-carousel__card__card-body"]}>
                                                <div className="text-center">
                                                    <Link href={`/trainer/${trainer?.slug}`}>

                                                        <div className={styles["trainers__cards-carousel__card__trainer"]}>{trainer.name_ar}</div>
                                                    </Link>
                                                    <div className={styles["trainers__cards-carousel__card__job-title"]}>{trainer.title}</div>
                                                    <div className={styles["trainers__cards-carousel__card__job-history"]}
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
