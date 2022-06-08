/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import styles from "./books.module.css";
import { Row, Col, Button, Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';
import "swiper/css";
import { axiosInstance } from "configurations/axios/axiosConfig";
import { ChevronLeftIcon, DownloadIcon } from "common/Icons/Icons";
import Link from "next/link";
import Router from "next/router";
import { useDispatch, useSelector } from "react-redux";

export default function Books() {
  SwiperCore.use([Navigation]);
  const homePageData = useSelector((state: any) => state.homePageData);
  const userStatus = useSelector((state: any) => state.userAuthentication);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(homePageData.data?.books || []);
  }, [homePageData]);

  return (
    <>
      <Row className={styles["books__row"]}>


        <Col xs={{ span: 12, order: 1 }} sm={{ span: 8, order: 1 }} className={styles["books__title"]}>
          <div>
            <span>الكتب و</span>
            <span>الملخصات</span>
          </div>
        </Col>

        <Col xs={{ span: 12, order: 3 }} sm={{ span: 4, order: 1 }} className={styles["see-more-btn-col"]}>

          {/* <Button className={styles["books__see-more-btn"]}>
            تصفح المزيد من الكتب المجانية
            <ChevronLeftIcon color="#af151f"/>

          </Button> */}

        </Col>


        <Col xs={{ span: 12, order: 2 }} sm={{ span: 12, order: 2 }} className={styles["books__cards-carousel"]}>
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
                        <h1 className={styles["books__cards-carousel__card__card-body__title"]}>{book?.title}</h1>
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
                                <DownloadIcon color="#af151f" />
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
  );
}


