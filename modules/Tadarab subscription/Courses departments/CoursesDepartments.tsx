/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, memo} from "react";
import styles from "./courses-departments.module.css";
import { Row, Col, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';
import "swiper/css";
import { ChevronLeftIcon } from "common/Icons/Icons";
import { useSelector } from "react-redux";

function CoursesDepartments() {
  SwiperCore.use([Navigation]);
  const homePageData = useSelector((state: any) => state.homePageData);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(homePageData.data?.categories || []);
  }, [homePageData]);
  return (
    <>
      <Row>
        <Col xs={{ span: 12, order: 1 }} sm={{ span: 9, order: 1 }} className={styles["courses-departments__container"]}>
          <div className={styles["courses-departments__container__title"]}>
            <span> أقسام </span>
            <span> الدورات </span>
          </div>
        </Col>

        <Col xs={{ span: 12, order: 3 }} sm={{ span: 3, order: 1 }} className={styles["courses-departments__see-more-btn-col"]}>

          <Button className={styles["courses-departments__container__show-all-btn"]}>
            اعرض كل الأقسام
            <ChevronLeftIcon color="#af151f" />

          </Button>
        </Col>

        <Col xs={{ span: 12, order: 2 }} sm={{ span: 12, order: 2 }} className={styles['courses-departments__cards-carousel']}>
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

            {categories?.map((cat: any, i: any) => {
              return (
                <SwiperSlide key={i} style={{ cursor: "pointer" }}>
                  <a href={`/topic/${cat.slug}`}>
                    <div className={styles["courses-departments__cards-carousel__departments-card"]}>
                      <div>

                        <div className="d-flex justify-content-center">

                          <div className={styles["courses-departments__cards-carousel__departments-card__img-box"]}
                            style={{ backgroundColor: cat.color }}>

                            <img loading="lazy" src={`/images/${cat.icon}.svg`} alt={cat.icon} id={styles[cat.icon]} />

                          </div>
                        </div>
                        <div className={styles["courses-departments__cards-carousel__departments-card__department"]}>{cat.title}</div>
                        <div className={styles["courses-departments__cards-carousel__departments-card__learners-number"]}>
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
  );
}

export default memo(CoursesDepartments);

