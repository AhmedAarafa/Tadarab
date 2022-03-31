/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from "./about-tadarab.module.css";
import { Row, Col} from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation,Pagination } from 'swiper';
import "swiper/css";

export default function AboutTadarab() {
  SwiperCore.use([Navigation]);
  SwiperCore.use([Pagination]);

    return (
        <>
        <Row className={styles["about-tadarab"]}>
          
            <Col xs={12} className={styles["about-tadarab__title"]}>
                    <span> ماذا </span>
                    <span>  قالوا عن تدرب  </span>
            </Col>
            <Col xs={12} className={styles["about-tadarab__breif"]}>
            آراء المتعلمين علي منصة تدرب في الدورات والمدربين
            </Col>
            <Col xs={12} className={styles["about-tadarab__cards-carousel-container"]}>
            <Swiper dir="rtl" slidesPerView={1} navigation={true} pagination={{"clickable": true}} 
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

                    <img src="/images/الاستثمار بالاسهم خطوة بخطوة.jpg" alt="الاستثمار بالاسهم خطوة بخطوة" />
                    <div
                      className={styles[ "about-tadarab__cards-carousel__item__container__course-details-box" ]}
                    >
                      <div
                        className={ styles[ "about-tadarab__cards-carousel__item__container__course-details-box__trainer-img"] }
                      >
                        <img src="/images/FaisalKarkari.png" alt="فيصل كركري" />
                      </div>
                      <div
                        className={styles[ "about-tadarab__cards-carousel__item__container__course-details-box__course-details"]}
                      >
                        <div
                          className={ styles[ "about-tadarab__cards-carousel__item__container__course-details-box__course-details__title"] }
                        >
                         الاستثمار بالاسهم خطوة بخطوة
                        </div>
                        <div
                          className={styles[ "about-tadarab__cards-carousel__item__container__course-details-box__course-details__author" ]}
                        >
                          فيصل كركري
                        </div>
                      </div>
                    </div>
                </div>
                <div className={styles["about-tadarab__cards-carousel__item__container__review-box"]}>
                    <div className={styles["about-tadarab__cards-carousel__item__container__review-box__quote"]}>
                       
                          <svg className={styles["about-tadarab__cards-carousel__item__container__review-box__img"]} xmlns="http://www.w3.org/2000/svg" width="2.5rem" height="2rem" viewBox="0 0 40.31 32">
  <g id="quote" transform="translate(0)">
    <g id="Group_10098" data-name="Group 10098" transform="translate(0 0)">
      <path id="Path_12882" data-name="Path 12882" d="M6.509,17.5a10.152,10.152,0,0,0,2.805.41,8.815,8.815,0,0,0,3.517-.721c-.884,3.237-3.008,8.823-7.24,9.452a1,1,0,0,0-.82.723l-.925,3.308a1.005,1.005,0,0,0,.831,1.266A7.024,7.024,0,0,0,5.625,32c5.079,0,10.109-5.3,12.231-12.892C19.1,14.654,19.467,7.958,16.4,3.744A9.162,9.162,0,0,0,8.951,0H8.912a8.915,8.915,0,0,0-2.4,17.5Z" transform="translate(21.539 0)" fill="#be1622"/>
      <path id="Path_12883" data-name="Path 12883" d="M1.15,13.288A8.935,8.935,0,0,0,6.509,17.5a10.151,10.151,0,0,0,2.8.41,8.817,8.817,0,0,0,3.518-.721c-.884,3.237-3.008,8.823-7.24,9.452a1.006,1.006,0,0,0-.82.723L3.847,30.67a1.005,1.005,0,0,0,.831,1.266A7.015,7.015,0,0,0,5.625,32c5.079,0,10.109-5.3,12.232-12.892C19.1,14.654,19.467,7.959,16.4,3.744A9.161,9.161,0,0,0,8.951,0h-.04A8.915,8.915,0,0,0,1.15,13.288Z" transform="translate(0 0)" fill="#be1622"/>
    </g>
  </g>
</svg>

                          
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

                    <img src="/images/أساسيات التصميم الداخلي و فن الديكور.jpg" alt="أساسيات التصميم الداخلي و فن الديكور" />
                    <div
                      className={styles[ "about-tadarab__cards-carousel__item__container__course-details-box" ]}
                    >
                      <div
                        className={ styles[ "about-tadarab__cards-carousel__item__container__course-details-box__trainer-img"] }
                      >
                        <img src="/images/DalalElwehaib.png" alt="دلال الوهيب" />
                      </div>
                      <div
                        className={styles[ "about-tadarab__cards-carousel__item__container__course-details-box__course-details"]}
                      >
                        <div
                          className={ styles[ "about-tadarab__cards-carousel__item__container__course-details-box__course-details__title"] }
                        >
                          أساسيات التصميم الداخلي و فن الديكور
                        </div>
                        <div
                          className={styles[ "about-tadarab__cards-carousel__item__container__course-details-box__course-details__author" ]}
                        >
                          دلال الوهيب
                        </div>
                      </div>
                    </div>
                </div>
                <div className={styles["about-tadarab__cards-carousel__item__container__review-box"]}>
                    <div className={styles["about-tadarab__cards-carousel__item__container__review-box__quote"]}>
                       
                          <svg className={styles["about-tadarab__cards-carousel__item__container__review-box__img"]} xmlns="http://www.w3.org/2000/svg" width="2.5rem" height="2rem" viewBox="0 0 40.31 32">
  <g id="quote" transform="translate(0)">
    <g id="Group_10098" data-name="Group 10098" transform="translate(0 0)">
      <path id="Path_12882" data-name="Path 12882" d="M6.509,17.5a10.152,10.152,0,0,0,2.805.41,8.815,8.815,0,0,0,3.517-.721c-.884,3.237-3.008,8.823-7.24,9.452a1,1,0,0,0-.82.723l-.925,3.308a1.005,1.005,0,0,0,.831,1.266A7.024,7.024,0,0,0,5.625,32c5.079,0,10.109-5.3,12.231-12.892C19.1,14.654,19.467,7.958,16.4,3.744A9.162,9.162,0,0,0,8.951,0H8.912a8.915,8.915,0,0,0-2.4,17.5Z" transform="translate(21.539 0)" fill="#be1622"/>
      <path id="Path_12883" data-name="Path 12883" d="M1.15,13.288A8.935,8.935,0,0,0,6.509,17.5a10.151,10.151,0,0,0,2.8.41,8.817,8.817,0,0,0,3.518-.721c-.884,3.237-3.008,8.823-7.24,9.452a1.006,1.006,0,0,0-.82.723L3.847,30.67a1.005,1.005,0,0,0,.831,1.266A7.015,7.015,0,0,0,5.625,32c5.079,0,10.109-5.3,12.232-12.892C19.1,14.654,19.467,7.959,16.4,3.744A9.161,9.161,0,0,0,8.951,0h-.04A8.915,8.915,0,0,0,1.15,13.288Z" transform="translate(0 0)" fill="#be1622"/>
    </g>
  </g>
</svg>

                          
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

                    <img src="/images/أساسيات التنظيف في المنزل.jpg" alt="أساسيات التنظيف في المنزل" />
                    <div
                      className={styles[ "about-tadarab__cards-carousel__item__container__course-details-box" ]}
                    >
                      <div
                        className={ styles[ "about-tadarab__cards-carousel__item__container__course-details-box__trainer-img"] }
                      >
                        <img src="/images/FatmaElqallaf.png" alt="فاطمة القلاف" />
                      </div>
                      <div
                        className={styles[ "about-tadarab__cards-carousel__item__container__course-details-box__course-details"]}
                      >
                        <div
                          className={ styles[ "about-tadarab__cards-carousel__item__container__course-details-box__course-details__title"] }
                        >
                          أساسيات التنظيف في المنزل
                        </div>
                        <div
                          className={styles[ "about-tadarab__cards-carousel__item__container__course-details-box__course-details__author" ]}
                        >
                          فاطمة القلاف
                        </div>
                      </div>
                    </div>
                </div>
                <div className={styles["about-tadarab__cards-carousel__item__container__review-box"]}>
                    <div className={styles["about-tadarab__cards-carousel__item__container__review-box__quote"]}>
                       
                          <svg className={styles["about-tadarab__cards-carousel__item__container__review-box__img"]} xmlns="http://www.w3.org/2000/svg" width="2.5rem" height="2rem" viewBox="0 0 40.31 32">
  <g id="quote" transform="translate(0)">
    <g id="Group_10098" data-name="Group 10098" transform="translate(0 0)">
      <path id="Path_12882" data-name="Path 12882" d="M6.509,17.5a10.152,10.152,0,0,0,2.805.41,8.815,8.815,0,0,0,3.517-.721c-.884,3.237-3.008,8.823-7.24,9.452a1,1,0,0,0-.82.723l-.925,3.308a1.005,1.005,0,0,0,.831,1.266A7.024,7.024,0,0,0,5.625,32c5.079,0,10.109-5.3,12.231-12.892C19.1,14.654,19.467,7.958,16.4,3.744A9.162,9.162,0,0,0,8.951,0H8.912a8.915,8.915,0,0,0-2.4,17.5Z" transform="translate(21.539 0)" fill="#be1622"/>
      <path id="Path_12883" data-name="Path 12883" d="M1.15,13.288A8.935,8.935,0,0,0,6.509,17.5a10.151,10.151,0,0,0,2.8.41,8.817,8.817,0,0,0,3.518-.721c-.884,3.237-3.008,8.823-7.24,9.452a1.006,1.006,0,0,0-.82.723L3.847,30.67a1.005,1.005,0,0,0,.831,1.266A7.015,7.015,0,0,0,5.625,32c5.079,0,10.109-5.3,12.232-12.892C19.1,14.654,19.467,7.959,16.4,3.744A9.161,9.161,0,0,0,8.951,0h-.04A8.915,8.915,0,0,0,1.15,13.288Z" transform="translate(0 0)" fill="#be1622"/>
    </g>
  </g>
</svg>

                          
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
                    <img src="/images/التنظيم الفعال للمنزل.jpg" alt="التنظيم الفعال للمنزل" />
                    <div
                      className={styles[ "about-tadarab__cards-carousel__item__container__course-details-box" ]}
                    >
                      <div
                        className={ styles[ "about-tadarab__cards-carousel__item__container__course-details-box__trainer-img"] }
                      >
                        <img src="/images/EbtisamEloumi.png" alt="ابتسام العومي" />
                      </div>
                      <div
                        className={styles[ "about-tadarab__cards-carousel__item__container__course-details-box__course-details"]}
                      >
                        <div
                          className={ styles[ "about-tadarab__cards-carousel__item__container__course-details-box__course-details__title"] }
                        >
                          إحتراف التصوير بالكاميرا
                        </div>
                        <div
                          className={styles[ "about-tadarab__cards-carousel__item__container__course-details-box__course-details__author" ]}
                        >
                          ابتسام العومي
                        </div>
                      </div>
                    </div>
                </div>
                <div className={styles["about-tadarab__cards-carousel__item__container__review-box"]}>
                    <div className={styles["about-tadarab__cards-carousel__item__container__review-box__quote"]}>
                       
                          <svg className={styles["about-tadarab__cards-carousel__item__container__review-box__img"]} xmlns="http://www.w3.org/2000/svg" width="2.5rem" height="2rem" viewBox="0 0 40.31 32">
  <g id="quote" transform="translate(0)">
    <g id="Group_10098" data-name="Group 10098" transform="translate(0 0)">
      <path id="Path_12882" data-name="Path 12882" d="M6.509,17.5a10.152,10.152,0,0,0,2.805.41,8.815,8.815,0,0,0,3.517-.721c-.884,3.237-3.008,8.823-7.24,9.452a1,1,0,0,0-.82.723l-.925,3.308a1.005,1.005,0,0,0,.831,1.266A7.024,7.024,0,0,0,5.625,32c5.079,0,10.109-5.3,12.231-12.892C19.1,14.654,19.467,7.958,16.4,3.744A9.162,9.162,0,0,0,8.951,0H8.912a8.915,8.915,0,0,0-2.4,17.5Z" transform="translate(21.539 0)" fill="#be1622"/>
      <path id="Path_12883" data-name="Path 12883" d="M1.15,13.288A8.935,8.935,0,0,0,6.509,17.5a10.151,10.151,0,0,0,2.8.41,8.817,8.817,0,0,0,3.518-.721c-.884,3.237-3.008,8.823-7.24,9.452a1.006,1.006,0,0,0-.82.723L3.847,30.67a1.005,1.005,0,0,0,.831,1.266A7.015,7.015,0,0,0,5.625,32c5.079,0,10.109-5.3,12.232-12.892C19.1,14.654,19.467,7.959,16.4,3.744A9.161,9.161,0,0,0,8.951,0h-.04A8.915,8.915,0,0,0,1.15,13.288Z" transform="translate(0 0)" fill="#be1622"/>
    </g>
  </g>
</svg>

                          
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


