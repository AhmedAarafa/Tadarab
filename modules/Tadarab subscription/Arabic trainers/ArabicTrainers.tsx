/* eslint-disable @next/next/link-passhref */
import React from 'react';
import styles from "./arabic-trainers.module.css";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';
import "swiper/css";
import Link from 'next/link';
import { ChevronLeftIcon } from "common/Icons/Icons";


export default function ArabicTrainers() {
  SwiperCore.use([Navigation]);

  return (
    <Row className={styles["arabic-trainers"]}>

        <Col xs={12} >
            <div className={styles["arabic-trainers__title"]}>
                أكبر قاعدة 
                <span>
                مدربين عرب
                </span>
                </div>
            <div className={styles["arabic-trainers__brief"]}>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما لتدريب افراد شركتك</div>
        </Col>

        <Col xs={12} className={styles["arabic-trainers__cards-carousel"]}>
        <Swiper dir="rtl" slidesPerView={4} navigation={true} pagination={{"clickable": true}} 
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
           
                  <SwiperSlide> 
                 <Link href="/TrainerProfile">
                    <Card className={styles["arabic-trainers__cards-carousel__card"]} 
                    style={{backgroundImage: `url("/images/Abdul Aziz Al Saygh.png")`}}
                      >
                          <div className={styles["arabic-trainers__cards-carousel__card__card-body"]}>
                              <div className="text-center">
                                  <div className={styles["arabic-trainers__cards-carousel__card__trainer"]}>د. حسين محمود</div>
                                  <div className={styles["arabic-trainers__cards-carousel__card__job-title"]}>مستشار تطوير الأعمال</div>
                                  <div className={styles["arabic-trainers__cards-carousel__card__job-history"]}>مستشار تطوير أعمال ، و صاحب تجربة 18 عام في عالم الوظائف بالمؤسسات المحلية الكبيرة منها والمتوسطة. </div>
                              </div>
                          </div>
                      
                    </Card> 
                  </Link>
                  </SwiperSlide>
                  <SwiperSlide> 
                 <Link href="/TrainerProfile">
                    <Card className={styles["arabic-trainers__cards-carousel__card"]} 
                    style={{backgroundImage: `url("/images/Abdul Aziz Al Saygh.png")`}}
                      >
                          <div className={styles["arabic-trainers__cards-carousel__card__card-body"]}>
                              <div className="text-center">
                                  <div className={styles["arabic-trainers__cards-carousel__card__trainer"]}>د. حسين محمود</div>
                                  <div className={styles["arabic-trainers__cards-carousel__card__job-title"]}>مستشار تطوير الأعمال</div>
                                  <div className={styles["arabic-trainers__cards-carousel__card__job-history"]}>مستشار تطوير أعمال ، و صاحب تجربة 18 عام في عالم الوظائف بالمؤسسات المحلية الكبيرة منها والمتوسطة. </div>
                              </div>
                          </div>
                      
                    </Card> 
                  </Link>
                  </SwiperSlide>
                  <SwiperSlide> 
                 <Link href="/TrainerProfile">
                    <Card className={styles["arabic-trainers__cards-carousel__card"]} 
                    style={{backgroundImage: `url("/images/Abdul Aziz Al Saygh.png")`}}
                      >
                          <div className={styles["arabic-trainers__cards-carousel__card__card-body"]}>
                              <div className="text-center">
                                  <div className={styles["arabic-trainers__cards-carousel__card__trainer"]}>د. حسين محمود</div>
                                  <div className={styles["arabic-trainers__cards-carousel__card__job-title"]}>مستشار تطوير الأعمال</div>
                                  <div className={styles["arabic-trainers__cards-carousel__card__job-history"]}>مستشار تطوير أعمال ، و صاحب تجربة 18 عام في عالم الوظائف بالمؤسسات المحلية الكبيرة منها والمتوسطة. </div>
                              </div>
                          </div>
                      
                    </Card> 
                  </Link>
                  </SwiperSlide>
                  <SwiperSlide> 
                 <Link href="/TrainerProfile">
                    <Card className={styles["arabic-trainers__cards-carousel__card"]} 
                    style={{backgroundImage: `url("/images/Abdul Aziz Al Saygh.png")`}}
                      >
                          <div className={styles["arabic-trainers__cards-carousel__card__card-body"]}>
                              <div className="text-center">
                                  <div className={styles["arabic-trainers__cards-carousel__card__trainer"]}>د. حسين محمود</div>
                                  <div className={styles["arabic-trainers__cards-carousel__card__job-title"]}>مستشار تطوير الأعمال</div>
                                  <div className={styles["arabic-trainers__cards-carousel__card__job-history"]}>مستشار تطوير أعمال ، و صاحب تجربة 18 عام في عالم الوظائف بالمؤسسات المحلية الكبيرة منها والمتوسطة. </div>
                              </div>
                          </div>
                      
                    </Card> 
                  </Link>
                  </SwiperSlide>
                  <SwiperSlide> 
                 <Link href="/TrainerProfile">
                    <Card className={styles["arabic-trainers__cards-carousel__card"]} 
                    style={{backgroundImage: `url("/images/Abdul Aziz Al Saygh.png")`}}
                      >
                          <div className={styles["arabic-trainers__cards-carousel__card__card-body"]}>
                              <div className="text-center">
                                  <div className={styles["arabic-trainers__cards-carousel__card__trainer"]}>د. حسين محمود</div>
                                  <div className={styles["arabic-trainers__cards-carousel__card__job-title"]}>مستشار تطوير الأعمال</div>
                                  <div className={styles["arabic-trainers__cards-carousel__card__job-history"]}>مستشار تطوير أعمال ، و صاحب تجربة 18 عام في عالم الوظائف بالمؤسسات المحلية الكبيرة منها والمتوسطة. </div>
                              </div>
                          </div>
                      
                    </Card> 
                  </Link>
                  </SwiperSlide>
                  <SwiperSlide> 
                 <Link href="/TrainerProfile">
                    <Card className={styles["arabic-trainers__cards-carousel__card"]} 
                    style={{backgroundImage: `url("/images/Abdul Aziz Al Saygh.png")`}}
                      >
                          <div className={styles["arabic-trainers__cards-carousel__card__card-body"]}>
                              <div className="text-center">
                                  <div className={styles["arabic-trainers__cards-carousel__card__trainer"]}>د. حسين محمود</div>
                                  <div className={styles["arabic-trainers__cards-carousel__card__job-title"]}>مستشار تطوير الأعمال</div>
                                  <div className={styles["arabic-trainers__cards-carousel__card__job-history"]}>مستشار تطوير أعمال ، و صاحب تجربة 18 عام في عالم الوظائف بالمؤسسات المحلية الكبيرة منها والمتوسطة. </div>
                              </div>
                          </div>
                      
                    </Card> 
                  </Link>
                  </SwiperSlide>
                  <SwiperSlide> 
                 <Link href="/TrainerProfile">
                    <Card className={styles["arabic-trainers__cards-carousel__card"]} 
                    style={{backgroundImage: `url("/images/Abdul Aziz Al Saygh.png")`}}
                      >
                          <div className={styles["arabic-trainers__cards-carousel__card__card-body"]}>
                              <div className="text-center">
                                  <div className={styles["arabic-trainers__cards-carousel__card__trainer"]}>د. حسين محمود</div>
                                  <div className={styles["arabic-trainers__cards-carousel__card__job-title"]}>مستشار تطوير الأعمال</div>
                                  <div className={styles["arabic-trainers__cards-carousel__card__job-history"]}>مستشار تطوير أعمال ، و صاحب تجربة 18 عام في عالم الوظائف بالمؤسسات المحلية الكبيرة منها والمتوسطة. </div>
                              </div>
                          </div>
                      
                    </Card> 
                  </Link>
                  </SwiperSlide>
                  <SwiperSlide> 
                 <Link href="/TrainerProfile">
                    <Card className={styles["arabic-trainers__cards-carousel__card"]} 
                    style={{backgroundImage: `url("/images/Abdul Aziz Al Saygh.png")`}}
                      >
                          <div className={styles["arabic-trainers__cards-carousel__card__card-body"]}>
                              <div className="text-center">
                                  <div className={styles["arabic-trainers__cards-carousel__card__trainer"]}>د. حسين محمود</div>
                                  <div className={styles["arabic-trainers__cards-carousel__card__job-title"]}>مستشار تطوير الأعمال</div>
                                  <div className={styles["arabic-trainers__cards-carousel__card__job-history"]}>مستشار تطوير أعمال ، و صاحب تجربة 18 عام في عالم الوظائف بالمؤسسات المحلية الكبيرة منها والمتوسطة. </div>
                              </div>
                          </div>
                      
                    </Card> 
                  </Link>
                  </SwiperSlide>
           
        </Swiper>
        </Col>

        <Col xs={12} className={styles["arabic-trainers__subscribe-box"]}>
            <div>للاشتراك الشهري على منصة تدرب سجل ايميلك وسجل حسابك</div>
            <div>
            <div className={styles["arabic-trainers__search-bar-container"]}>
              
              <Form.Control
                type="text"
                placeholder="ادخل ايميلك هنا..."
                className={
                  styles["arabic-trainers__search-bar-container__search-bar"]
                }
              />
              <Button className={styles["arabic-trainers__search-bar__btn"]}>
              ابدأ الآن
              <ChevronLeftIcon color="#fff"/>
              </Button>
            </div>
            </div>
        </Col>
    </Row>
  )
}
