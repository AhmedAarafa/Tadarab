/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, memo } from "react";
import styles from "./explore-other-categories.module.css";
import { Row, Col, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';
import "swiper/css";
import { ChevronLeftIcon } from "common/Icons/Icons";
import { useRouter } from 'next/router';


function ExploreOtherCategories(props:any) {
    SwiperCore.use([Navigation]);
    const [categories, setCategories] = useState([]);
    const Router = useRouter();
    const { slug } = Router.query;
    
    useEffect(() => {
      setCategories(props?.categoriesList);
    }, [props]);

    return (
        <>
            <Row>
                <Col xs={{ span: 12, order: 1 }} sm={{ span: 9, order: 1 }} className={styles["explore-other-categories__container"]}>
                    <h2 className={styles["explore-other-categories__container__title"]}>
                        <span> استكشف التخصصات الأخرى </span>
                    </h2>
                </Col>

                <Col xs={{ span: 12, order: 2 }} sm={{ span: 12, order: 2 }} className={styles['explore-other-categories__cards-carousel']}>
                    <Swiper dir="rtl"   slidesPerView={7} navigation={true} pagination={{ "clickable": true }}
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

                        {categories?.filter((item:any) => (item.slug !== slug)).map((cat: any, i: any) => {
                            return (
                                <SwiperSlide key={i} style={{ cursor: "pointer" }}>

                                    <a href={`/topic/${cat.slug}`}>
                                        <div className={styles["explore-other-categories__cards-carousel__departments-card"]}>
                                            <div>

                                                <div className="d-flex justify-content-center">

                                                    <div className={styles["explore-other-categories__cards-carousel__departments-card__img-box"]}
                                                        style={{ backgroundColor: cat.color }}>
                                                        <img loading="lazy" src={`/images/${cat.icon}.svg`} alt={cat.icon} id={styles[cat.icon]} />
                                                    </div>
                                                </div>
                                                <div className={styles["explore-other-categories__cards-carousel__departments-card__department"]}>{cat.title}</div>
                                                <div className={styles["explore-other-categories__cards-carousel__departments-card__learners-number"]}>
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

export default memo(ExploreOtherCategories);
