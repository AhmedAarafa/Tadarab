/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from "./about-tadarab.module.css";
import { Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from 'swiper';
import "swiper/css";
import { QuoteIcon } from "common/Icons/Icons";

export default function AboutTadarab() {
  SwiperCore.use([Navigation]);
  SwiperCore.use([Pagination]);

  return (
    <>
      <Row className={styles["about-tadarab"]}>

        <Col xs={12} className={styles["about-tadarab__title"]}>
          <span>ماذا قال المتدربون عن الدورات التدريبية في  تدرب</span>
        </Col>
        <Col xs={12} className={styles["about-tadarab__breif"]}>
          آراء المتعلمين على منصة تدرب في الدورات والمدربين
        </Col>
        <Col xs={12} className={styles["about-tadarab__cards-carousel-container"]}>
          <Swiper dir="rtl" slidesPerView={1} navigation={true} pagination={{ "clickable": true }}
            breakpoints={{
              "751": {
                "slidesPerView": 1,
              },
            }} className="mySwiper">
            <div className={styles["about-tadarab__cards-carousel"]}>
              <SwiperSlide className={styles["about-tadarab__cards-carousel__item"]}>
                <div className={styles["about-tadarab__cards-carousel__item__container"]}>
                  <div className={styles["about-tadarab__cards-carousel__item__container__img"]}>
                    <div className={styles["black-overlay"]}></div>

                    <img loading="lazy" src={"/images/الاستثمار بالاسهم خطوة بخطوة.jpg"} alt="الاستثمار بالاسهم خطوة بخطوة" />
                    <div
                      className={styles["about-tadarab__cards-carousel__item__container__course-details-box"]}
                    >
                      <div
                        className={styles["about-tadarab__cards-carousel__item__container__course-details-box__trainer-img"]}
                      >
                        <img loading="lazy" src={"/images/FaisalKarkari.png"} alt="فيصل كركري" />
                      </div>
                      <div
                        className={styles["about-tadarab__cards-carousel__item__container__course-details-box__course-details"]}
                      >
                        <div
                          className={styles["about-tadarab__cards-carousel__item__container__course-details-box__course-details__title"]}
                        >
                          الاستثمار بالاسهم خطوة بخطوة
                        </div>
                        <div
                          className={styles["about-tadarab__cards-carousel__item__container__course-details-box__course-details__author"]}
                        >
                          فيصل كركري
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["about-tadarab__cards-carousel__item__container__review-box"]}>
                    <div className={styles["about-tadarab__cards-carousel__item__container__review-box__quote"]}>
                      <div className={styles["about-tadarab__cards-carousel__item__container__review-box__img"]}>
                        <QuoteIcon />
                      </div>
                    </div>
                    <div className={styles["about-tadarab__cards-carousel__item__container__review-box__review"]}>
                      دورة ممتاز للراغبين في تعلم التحليل المالي للأسهم خطوة بخطوة، والمدرب قمة في أسلوب الشرح وإيصال المعلومة
                    </div>
                    <div className={styles["about-tadarab__cards-carousel__item__container__review-box__reviewer-details"]}>
                      <div>هاني الفقيه</div>
                      <div>السعودية</div>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
              <SwiperSlide className={styles["about-tadarab__cards-carousel__item"]}>
                <div className={styles["about-tadarab__cards-carousel__item__container"]}>
                  <div className={styles["about-tadarab__cards-carousel__item__container__img"]}>
                    <div className={styles["black-overlay"]}></div>

                    <img loading="lazy" src={"/images/أساسيات التصميم الداخلي و فن الديكور.jpg"} alt="أساسيات التصميم الداخلي و فن الديكور" />
                    <div
                      className={styles["about-tadarab__cards-carousel__item__container__course-details-box"]}
                    >
                      <div
                        className={styles["about-tadarab__cards-carousel__item__container__course-details-box__trainer-img"]}
                      >
                        <img loading="lazy" src={"/images/DalalElwehaib.png"} alt="دلال الوهيب" />
                      </div>
                      <div
                        className={styles["about-tadarab__cards-carousel__item__container__course-details-box__course-details"]}
                      >
                        <div
                          className={styles["about-tadarab__cards-carousel__item__container__course-details-box__course-details__title"]}
                        >
                          أساسيات التصميم الداخلي و فن الديكور
                        </div>
                        <div
                          className={styles["about-tadarab__cards-carousel__item__container__course-details-box__course-details__author"]}
                        >
                          دلال الوهيب
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["about-tadarab__cards-carousel__item__container__review-box"]}>
                    <div className={styles["about-tadarab__cards-carousel__item__container__review-box__quote"]}>
                      <div className={styles["about-tadarab__cards-carousel__item__container__review-box__img"]}>
                        <QuoteIcon />
                      </div>
                    </div>
                    <div className={styles["about-tadarab__cards-carousel__item__container__review-box__review"]}>
                      الدوره ممتازه وجدا مفيده واسلوب المهندسه دلال في الشرح جدا ممتع تساعد على تنظيم الافكار والتعرف على خطوات التصميم الداخلي بالتفصيل. انصح فيها بشده لانها تبسط وتسهل عملية التصميم الداخلي

                    </div>
                    <div className={styles["about-tadarab__cards-carousel__item__container__review-box__reviewer-details"]}>
                      <div>غاده الدعيج</div>
                      <div>نيوزيلندا</div>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
              <SwiperSlide className={styles["about-tadarab__cards-carousel__item"]}>
                <div className={styles["about-tadarab__cards-carousel__item__container"]}>
                  <div className={styles["about-tadarab__cards-carousel__item__container__img"]}>
                    <div className={styles["black-overlay"]}></div>

                    <img loading="lazy" src={"/images/أساسيات التنظيف في المنزل.jpg"} alt="أساسيات التنظيف في المنزل" />
                    <div
                      className={styles["about-tadarab__cards-carousel__item__container__course-details-box"]}
                    >
                      <div
                        className={styles["about-tadarab__cards-carousel__item__container__course-details-box__trainer-img"]}
                      >
                        <img loading="lazy" src={"/images/FatmaElqallaf.png"} alt="فاطمة القلاف" />
                      </div>
                      <div
                        className={styles["about-tadarab__cards-carousel__item__container__course-details-box__course-details"]}
                      >
                        <div
                          className={styles["about-tadarab__cards-carousel__item__container__course-details-box__course-details__title"]}
                        >
                          أساسيات التنظيف في المنزل
                        </div>
                        <div
                          className={styles["about-tadarab__cards-carousel__item__container__course-details-box__course-details__author"]}
                        >
                          فاطمة القلاف
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["about-tadarab__cards-carousel__item__container__review-box"]}>
                    <div className={styles["about-tadarab__cards-carousel__item__container__review-box__quote"]}>
                      <div className={styles["about-tadarab__cards-carousel__item__container__review-box__img"]}>
                        <QuoteIcon />
                      </div>
                    </div>
                    <div className={styles["about-tadarab__cards-carousel__item__container__review-box__review"]}>
                      دورة وافية و شاملة تعلمك على روتين يساعدك على ابقاء بيتك نظيف عن طريق خطوات بسيطة،قد تغير من نمط حياتك داخل المنزل،تحتوي على جداول تنظم اعمالك المنزلية
                    </div>
                    <div className={styles["about-tadarab__cards-carousel__item__container__review-box__reviewer-details"]}>
                      <div>فاطمه</div>
                      <div>السعودية</div>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
              <SwiperSlide className={styles["about-tadarab__cards-carousel__item"]}>
                <div className={styles["about-tadarab__cards-carousel__item__container"]}>
                  <div className={styles["about-tadarab__cards-carousel__item__container__img"]}>
                    <div className={styles["black-overlay"]}></div>
                    <img loading="lazy" src={"/images/التنظيم الفعال للمنزل.jpg"} alt="التنظيم الفعال للمنزل" />
                    <div
                      className={styles["about-tadarab__cards-carousel__item__container__course-details-box"]}
                    >
                      <div
                        className={styles["about-tadarab__cards-carousel__item__container__course-details-box__trainer-img"]}
                      >
                        <img loading="lazy" src={"/images/EbtisamEloumi.png"} alt="ابتسام العومي" />
                      </div>
                      <div
                        className={styles["about-tadarab__cards-carousel__item__container__course-details-box__course-details"]}
                      >
                        <div
                          className={styles["about-tadarab__cards-carousel__item__container__course-details-box__course-details__title"]}
                        >
                          إحتراف التصوير بالكاميرا
                        </div>
                        <div
                          className={styles["about-tadarab__cards-carousel__item__container__course-details-box__course-details__author"]}
                        >
                          ابتسام العومي
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["about-tadarab__cards-carousel__item__container__review-box"]}>
                    <div className={styles["about-tadarab__cards-carousel__item__container__review-box__quote"]}>
                      <div className={styles["about-tadarab__cards-carousel__item__container__review-box__img"]}>
                        <QuoteIcon />
                      </div>
                    </div>
                    <div className={styles["about-tadarab__cards-carousel__item__container__review-box__review"]}>
                      الدوره اكثر من المتوقعه وحيل مفيده وانصح كل مهتم بالتنظيم انه يستفيد من الاستاذه ابتسام
                      شكراً من القلب
                    </div>
                    <div className={styles["about-tadarab__cards-carousel__item__container__review-box__reviewer-details"]}>
                      <div>شيماء التوم</div>
                      <div>الكويت</div>
                    </div>
                  </div>

                </div>
              </SwiperSlide>

            </div>
          </Swiper>
        </Col>
      </Row>
    </>
  )
}


