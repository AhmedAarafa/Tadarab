/* eslint-disable @next/next/link-passhref */
import React, { useState, useEffect }from 'react';
import { Row, Col, Button, Card } from "react-bootstrap";
import styles from "./category-trainers.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import Link from 'next/link';
import "swiper/css";


export default function CategoryTrainers(props: any) {
  SwiperCore.use([Navigation]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle(props?.data?.title)
  }, [props]);
  
  return (
    <>
      <Row className={styles["category-trainer"]}>


        <Col xs={12} className={styles["category-trainer__title"]}>
          أشهر المدربين في {title}
        </Col>

        <Col xs={12} className={styles["category-trainer__cards-carousel"]}>
          <Swiper dir="rtl"   slidesPerView={3.7} navigation={true} pagination={{ "clickable": true }}
            breakpoints={{
              "50": {
                slidesPerView: 1,
              },
              "576": {
                slidesPerView: 2.7,
              },
              "981": {
                slidesPerView: 3.7,
              },
              "1201": {
                slidesPerView: 4.7,
              },
            }} className="mySwiper">

            {props?.data?.trainers?.map((trainer: any, i: number) => {
              return (

                <SwiperSlide key={i}>
                  <Link href={`/trainer/${trainer?.slug}`}> 

                    <Card className={styles["category-trainer__cards-carousel__card"]} style={{
                      background: `transparent url(${trainer?.image}) no-repeat padding-box`,
                      backgroundSize: "contain"
                    }}
                    >
                      <div className={styles["category-trainer__cards-carousel__card__card-body"]}>
                        <div className="text-center">
                          <div className={styles["category-trainer__cards-carousel__card__trainer"]}>{trainer?.name_ar}</div>
                          <div className={styles["category-trainer__cards-carousel__card__job-title"]}>{trainer?.title}</div>
                          <div className={styles["category-trainer__cards-carousel__card__job-history"]} 
                          dangerouslySetInnerHTML={{ __html: trainer?.bio }}></div>
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
