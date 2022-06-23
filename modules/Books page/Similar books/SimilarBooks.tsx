/* eslint-disable @next/next/link-passhref */
import React, { useState, useEffect } from "react";
import styles from "./similar-books.module.css";
import { Row, Col, Button, Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';
import "swiper/css";
import { DownloadIcon } from "common/Icons/Icons";
import Link from "next/link";
import { useSelector } from "react-redux";
import Router from "next/router";

export default function SimilarBooks(props: any) {
    SwiperCore.use([Navigation]);
    const userStatus = useSelector((state: any) => state.userAuthentication);

    return (
        <>
            <Row className={styles["similar-books__row"]}>


                <Col xs={{ span: 12, order: 1 }} sm={{ span: 8, order: 1 }} className={styles["similar-books__title"]}>
                    <div>
                        <span> كتيبات مشابهة </span>
                        <span> لإختيارك </span>
                    </div>
                </Col>

                <Col xs={{ span: 12, order: 3 }} sm={{ span: 4, order: 1 }} className={styles["see-more-btn-col"]}>

                    {/* <Button className={styles["similar-books__see-more-btn"]}>
            تصفح المزيد من الكتب المجانية
            <ChevronLeftIcon color="#af151f"/>

          </Button> */}

                </Col>


                <Col xs={{ span: 12, order: 2 }} sm={{ span: 12, order: 2 }} className={styles["similar-books__cards-carousel"]}>
                    <Swiper dir="rtl" slidesPerView={5} navigation={true} pagination={{ "clickable": true }}
                        breakpoints={{
                            "50": {
                                slidesPerView: 1,
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

                        {props?.data?.related_ebooks?.map((book: any, i: number) => {
                            return (
                                <SwiperSlide key={i}>
                                    <Card className={styles["similar-books__cards-carousel__card"]}>
                                        <Link href={`/ebook/${book?.slug}`}>
                                            <Card.Img
                                                variant="top"
                                                src={book?.image}
                                                alt={book?.title}
                                                className={
                                                    styles["similar-books__cards-carousel__card__book-img"]
                                                }
                                            />
                                        </Link>
                                        <Card.Body
                                            className={styles["similar-books__cards-carousel__card__card-body"]}
                                        >
                                            <Link href={`/ebook/${book?.slug}`}>
                                                <div className={styles["similar-books__cards-carousel__card__card-body__title"]}>{book?.title}</div>
                                            </Link>
                                            <Link href={`/topic/${book?.categories[0]?.slug}`}>
                                                <div className={styles["similar-books__cards-carousel__card__card-body__category"]}>
                                                    {book?.categories && JSON.stringify(book?.categories) !== "[]" &&
                                                        book?.categories[0].title}
                                                </div>
                                            </Link>
                                            <div className="w-100">
                                                <Button className={styles["similar-books__cards-carousel__card__download-btn"]}>

                                                    {userStatus.isUserAuthenticated ?
                                                        <>
                                                            <a href={props?.data?.ebook_link}
                                                                target="_blank" rel="noreferrer">
                                                                <DownloadIcon color="#af151f" />
                                                                <span>  تحميل مجاني </span>
                                                            </a>
                                                        </>
                                                        :
                                                        <a onClick={() => {
                                                            Router.push({
                                                                pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}sign-in`,
                                                                query: { from: "ebook" }
                                                            })
                                                        }}>
                                                            <DownloadIcon color="#af151f" />
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
