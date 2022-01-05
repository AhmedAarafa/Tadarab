/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./practical-projects.module.css";
import { Row, Col, Button, Card, Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';


export default function PracticalProjects() {
    SwiperCore.use([Navigation]);
  return (
    <>
      <Col id="practical-projects-section" xs={12} className={styles["practical-projects"]}>
        <div className={styles["practical-projects__title"]}>
          <div>المشاريع العملية</div>
          <div>للمتعلمين في الدورة</div>
        </div>
        <div className={styles["practical-projects__brief"]}>
          هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
          القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
          التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ
          طبيعياَ
        </div>
      </Col>
      <Col xs={6} className={styles["practical-projects__project-card-col"]}>
          <div className={styles["practical-projects__project-card"]}>
              <div className={styles["practical-projects__project-card__project-img"]}>
                  <img src="/images/course2cropped.png" alt="project image" />
              </div>
              <div className={styles["practical-projects__project-card__trainee-details-box"]}>
                  <div className={styles["practical-projects__project-card__trainee-details-box__trainee-img"]}>
                    <img src="/images/MaleAvatar.svg" alt="male avatar" />  

                  </div>
                  <div className={styles["practical-projects__project-card__trainee-details-box__details"]}>
                      <div className={styles["practical-projects__project-card__trainee-details-box__details__name"]}>
                      علياء عبدالكريم
                      <span> متعلم </span>
                      </div>
                      <div className={styles["practical-projects__project-card__trainee-details-box__details__project"]}>
                      لوحة فنية
                      </div>
                  </div>
              </div>
          </div>
      </Col>
      <Col xs={6} className={styles["practical-projects__project-card-col"]}>
          <div className={styles["practical-projects__project-card"]}>
              <div className={styles["practical-projects__project-card__project-img"]}>
                  <img src="/images/course2cropped.png" alt="project image" />
              </div>
              <div className={styles["practical-projects__project-card__trainee-details-box"]}>
                  <div className={styles["practical-projects__project-card__trainee-details-box__trainee-img"]}>
                    <img src="/images/MaleAvatar.svg" alt="" />  

                  </div>
                  <div className={styles["practical-projects__project-card__trainee-details-box__details"]}>
                      <div className={styles["practical-projects__project-card__trainee-details-box__details__name"]}>
                      علياء عبدالكريم
                      <span> متعلم </span>
                      </div>
                      <div className={styles["practical-projects__project-card__trainee-details-box__details__project"]}>
                      لوحة فنية
                      </div>
                  </div>
              </div>
          </div>
      </Col>
      <Col xs={6} className={styles["practical-projects__project-card-col"]}>
          <div className={styles["practical-projects__project-card"]}>
              <div className={styles["practical-projects__project-card__project-img"]}>
                  <img src="/images/course2cropped.png" alt="project image" />
              </div>
              <div className={styles["practical-projects__project-card__trainee-details-box"]}>
                  <div className={styles["practical-projects__project-card__trainee-details-box__trainee-img"]}>
                    <img src="/images/MaleAvatar.svg" alt="" />  

                  </div>
                  <div className={styles["practical-projects__project-card__trainee-details-box__details"]}>
                      <div className={styles["practical-projects__project-card__trainee-details-box__details__name"]}>
                      علياء عبدالكريم
                      <span> متعلم </span>
                      </div>
                      <div className={styles["practical-projects__project-card__trainee-details-box__details__project"]}>
                      لوحة فنية
                      </div>
                  </div>
              </div>
          </div>
      </Col>
      <Col xs={6} className={styles["practical-projects__project-card-col"]}>
          <div className={styles["practical-projects__project-card"]}>
              <div className={styles["practical-projects__project-card__project-img"]}>
                  <img src="/images/course2cropped.png" alt="project image" />
              </div>
              <div className={styles["practical-projects__project-card__trainee-details-box"]}>
                  <div className={styles["practical-projects__project-card__trainee-details-box__trainee-img"]}>
                    <img src="/images/MaleAvatar.svg" alt="" />  

                  </div>
                  <div className={styles["practical-projects__project-card__trainee-details-box__details"]}>
                      <div className={styles["practical-projects__project-card__trainee-details-box__details__name"]}>
                      علياء عبدالكريم
                      <span> متعلم </span>
                      </div>
                      <div className={styles["practical-projects__project-card__trainee-details-box__details__project"]}>
                      لوحة فنية
                      </div>
                  </div>
              </div>
          </div>
      </Col> 
      <Col xs={12} className={styles["practical-projects__responsive-projects-slider"]}>
      <Swiper dir="rtl" slidesPerView={1} navigation={true} pagination={{"clickable": true}} 
        breakpoints={{
            "50": {
                "slidesPerView": 1,
            },
           
        }} className="mySwiper">
            <SwiperSlide>
                <div className={styles["practical-projects__project-card"]}>
                    <div className={styles["practical-projects__project-card__project-img"]}>
                        <img src="/images/course2cropped.png" alt="project image" />
                    </div>
                    <div className={styles["practical-projects__project-card__trainee-details-box"]}>
                        <div className={styles["practical-projects__project-card__trainee-details-box__trainee-img"]}>
                            <img src="/images/MaleAvatar.svg" alt="male avatar" />  

                        </div>
                        <div className={styles["practical-projects__project-card__trainee-details-box__details"]}>
                            <div className={styles["practical-projects__project-card__trainee-details-box__details__name"]}>
                            علياء عبدالكريم
                            <span> متعلم </span>
                            </div>
                            <div className={styles["practical-projects__project-card__trainee-details-box__details__project"]}>
                            لوحة فنية
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={styles["practical-projects__project-card"]}>
                    <div className={styles["practical-projects__project-card__project-img"]}>
                        <img src="/images/course2cropped.png" alt="project image" />
                    </div>
                    <div className={styles["practical-projects__project-card__trainee-details-box"]}>
                        <div className={styles["practical-projects__project-card__trainee-details-box__trainee-img"]}>
                            <img src="/images/MaleAvatar.svg" alt="" />  

                        </div>
                        <div className={styles["practical-projects__project-card__trainee-details-box__details"]}>
                            <div className={styles["practical-projects__project-card__trainee-details-box__details__name"]}>
                            علياء عبدالكريم
                            <span> متعلم </span>
                            </div>
                            <div className={styles["practical-projects__project-card__trainee-details-box__details__project"]}>
                            لوحة فنية
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={styles["practical-projects__project-card"]}>
                    <div className={styles["practical-projects__project-card__project-img"]}>
                        <img src="/images/course2cropped.png" alt="project image" />
                    </div>
                    <div className={styles["practical-projects__project-card__trainee-details-box"]}>
                        <div className={styles["practical-projects__project-card__trainee-details-box__trainee-img"]}>
                            <img src="/images/MaleAvatar.svg" alt="" />  

                        </div>
                        <div className={styles["practical-projects__project-card__trainee-details-box__details"]}>
                            <div className={styles["practical-projects__project-card__trainee-details-box__details__name"]}>
                            علياء عبدالكريم
                            <span> متعلم </span>
                            </div>
                            <div className={styles["practical-projects__project-card__trainee-details-box__details__project"]}>
                            لوحة فنية
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={styles["practical-projects__project-card"]}>
                    <div className={styles["practical-projects__project-card__project-img"]}>
                        <img src="/images/course2cropped.png" alt="project image" />
                    </div>
                    <div className={styles["practical-projects__project-card__trainee-details-box"]}>
                        <div className={styles["practical-projects__project-card__trainee-details-box__trainee-img"]}>
                            <img src="/images/MaleAvatar.svg" alt="" />  

                        </div>
                        <div className={styles["practical-projects__project-card__trainee-details-box__details"]}>
                            <div className={styles["practical-projects__project-card__trainee-details-box__details__name"]}>
                            علياء عبدالكريم
                            <span> متعلم </span>
                            </div>
                            <div className={styles["practical-projects__project-card__trainee-details-box__details__project"]}>
                            لوحة فنية
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
      </Col>
    </>
  );
}
