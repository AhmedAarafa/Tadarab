/* eslint-disable @next/next/link-passhref */
import React, { useState, useEffect } from "react";
import styles from "./books.module.css";
import { Row, Col, Button, Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';
import "swiper/css";
import { ChevronLeftIcon, DownloadIcon } from "common/Icons/Icons";
import Link from "next/link";
import Router from "next/router";
import { useSelector } from "react-redux";
import { axiosInstance } from "configurations/axios/axiosConfig";
import { FBPixelEventsHandler } from "modules/_Shared/utils/FBPixelEvents";
import { toggleLoader } from "modules/_Shared/utils/toggleLoader";

export default function Books() {
    SwiperCore.use([Navigation]);
    const userStatus = useSelector((state: any) => state.userAuthentication);
    const [books, setBooks] = useState([]);
    const themeState = useSelector((state: any) => state.themeState.theme);

    useEffect(() => {
        axiosInstance
            .get(`home`)
            .then(function (response: any) {
                FBPixelEventsHandler(response.data.fb_tracking_events, null);
                setBooks(response?.data?.data?.books);
                toggleLoader("hide");
            })
            .catch(function (error: any) {
                // toggleLoader("hide");
                console.log(error);
            });
    }, []);

    return (
        <>
            <Row data-theme={themeState} className={styles["books__row"]}>

                <Col xs={{ span: 12, order: 1 }} sm={{ span: 8, order: 1 }} className={styles["books__title"]}>
                    <h2>
                       <span>كتب مجانية و ملخصات</span>
                    </h2>
                </Col>

                <Col xs={{ span: 12, order: 2 }} sm={{ span: 12, order: 2 }} className={styles["books__cards-carousel"]}>
                    <Swiper dir="rtl" initialSlide={1}  slidesPerView={5} navigation={true} pagination={{ "clickable": true }}
                        breakpoints={{
                            "50": {
                                slidesPerView: 1.05,
                            },
                            "576": {
                                slidesPerView: 4,
                            },
                            // "981": {
                            //   slidesPerView: 4,
                            // },
                            "1201": {
                                slidesPerView: 5,
                            },
                        }} className="mySwiper">

                        {books?.map((book: any, i: number) => {
                            return (
                                <SwiperSlide key={i}>
                                    <Card className={styles["books__cards-carousel__card"]}>
                                        <Link href={`/ebook/${book?.slug}`}>
                                            <Card.Img
                                                variant="top"
                                                src={book?.image}
                                                alt={book?.title}
                                                className={
                                                    styles["books__cards-carousel__card__book-img"]
                                                }
                                            />
                                        </Link>
                                        <Card.Body
                                            className={styles["books__cards-carousel__card__card-body"]}
                                        >
                                            <Link href={`/ebook/${book?.slug}`}>
                                                <h3 className={styles["books__cards-carousel__card__card-body__title"]}>{book?.title}</h3>
                                            </Link>
                                            <Link href={`/topic/${book.categories[0]?.slug}`}>
                                                <div className={styles["books__cards-carousel__card__card-body__category"]}>{
                                                    book.categories[0] !== undefined && book.categories[0].title !== null && book.categories[0].title !== "" &&
                                                    book.categories[0]?.title}</div>
                                            </Link>
                                            <div className="w-100">
                                                <Button className={styles["books__cards-carousel__card__download-btn"]}>
                                                    {userStatus.isUserAuthenticated ?
                                                        <>
                                                            <a href={book?.ebook_link} target="_blank" rel="noreferrer">
                                                                <DownloadIcon color={themeState == "light" ? "#af151f" : "#f5f5f5"} />
                                                                <span> تحميل مجاني </span>
                                                            </a>
                                                        </>
                                                        :
                                                        <a onClick={() => {
                                                            Router.push({
                                                                pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}sign-in`,
                                                                query: { from: "ebook" }
                                                            })
                                                        }}>
                                                            <DownloadIcon color={themeState == "light" ? "#af151f" : "#f5f5f5"} />
                                                            <span>  تحميل مجاني </span>
                                                        </a>
                                                    }

                                                </Button>
                                            </div>
                                        </Card.Body>
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
