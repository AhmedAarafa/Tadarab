import React from 'react'
import { Row, Col, Button,Card } from "react-bootstrap";
import styles from "./category-trainers.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";


export default function CategoryTrainers() {
  SwiperCore.use([Navigation]);
    return (
        <>
        <Row className={styles["category-trainer"]}>


            <Col xs={12} className={styles["category-trainer__title"]}>
            أشهر المدربين في الفنون
            </Col>


            <Col xs={12} className={styles["category-trainer__cards-carousel"]}>
        <Swiper dir="rtl" slidesPerView={3.7} navigation={true} pagination={{"clickable": true}} 
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
            <SwiperSlide> 
              <Card className={styles["category-trainer__cards-carousel__card"]}
                >
                    <div className={styles["category-trainer__cards-carousel__card__card-body"]}>
                        <div className="text-center">
                            <div className={styles["category-trainer__cards-carousel__card__trainer"]}>د. حسين عبدالكريم</div>
                            <div className={styles["category-trainer__cards-carousel__card__job-title"]}>مستشار عقاري</div>
                            <div className={styles["category-trainer__cards-carousel__card__job-history"]}>مؤسس شركه إعمار </div>
                        </div>
                    </div>
                
              </Card> 
            </SwiperSlide>
            <SwiperSlide> 
              <Card className={styles["category-trainer__cards-carousel__card"]}
                >
                    <div className={styles["category-trainer__cards-carousel__card__card-body"]}>
                        <div className="text-center">
                            <div className={styles["category-trainer__cards-carousel__card__trainer"]}>د. حسين عبدالكريم</div>
                            <div className={styles["category-trainer__cards-carousel__card__job-title"]}>مستشار عقاري</div>
                            <div className={styles["category-trainer__cards-carousel__card__job-history"]}>مؤسس شركه إعمار </div>
                        </div>
                    </div>
                
              </Card> 
            </SwiperSlide>
            <SwiperSlide> 
              <Card className={styles["category-trainer__cards-carousel__card"]}
                >
                    <div className={styles["category-trainer__cards-carousel__card__card-body"]}>
                        <div className="text-center">
                            <div className={styles["category-trainer__cards-carousel__card__trainer"]}>د. حسين عبدالكريم</div>
                            <div className={styles["category-trainer__cards-carousel__card__job-title"]}>مستشار عقاري</div>
                            <div className={styles["category-trainer__cards-carousel__card__job-history"]}>مؤسس شركه إعمار </div>
                        </div>
                    </div>
                
              </Card> 
            </SwiperSlide>
            <SwiperSlide> 
              <Card className={styles["category-trainer__cards-carousel__card"]}
                >
                    <div className={styles["category-trainer__cards-carousel__card__card-body"]}>
                        <div className="text-center">
                            <div className={styles["category-trainer__cards-carousel__card__trainer"]}>د. حسين عبدالكريم</div>
                            <div className={styles["category-trainer__cards-carousel__card__job-title"]}>مستشار عقاري</div>
                            <div className={styles["category-trainer__cards-carousel__card__job-history"]}>مؤسس شركه إعمار </div>
                        </div>
                    </div>
                
              </Card> 
            </SwiperSlide>
            <SwiperSlide> 
              <Card className={styles["category-trainer__cards-carousel__card"]}
                >
                    <div className={styles["category-trainer__cards-carousel__card__card-body"]}>
                        <div className="text-center">
                            <div className={styles["category-trainer__cards-carousel__card__trainer"]}>د. حسين عبدالكريم</div>
                            <div className={styles["category-trainer__cards-carousel__card__job-title"]}>مستشار عقاري</div>
                            <div className={styles["category-trainer__cards-carousel__card__job-history"]}>مؤسس شركه إعمار </div>
                        </div>
                    </div>
                
              </Card> 
            </SwiperSlide>
            <SwiperSlide> 
              <Card className={styles["category-trainer__cards-carousel__card"]}
                >
                    <div className={styles["category-trainer__cards-carousel__card__card-body"]}>
                        <div className="text-center">
                            <div className={styles["category-trainer__cards-carousel__card__trainer"]}>د. حسين عبدالكريم</div>
                            <div className={styles["category-trainer__cards-carousel__card__job-title"]}>مستشار عقاري</div>
                            <div className={styles["category-trainer__cards-carousel__card__job-history"]}>مؤسس شركه إعمار </div>
                        </div>
                    </div>
                
              </Card> 
            </SwiperSlide>
            <SwiperSlide> 
              <Card className={styles["category-trainer__cards-carousel__card"]}
                >
                    <div className={styles["category-trainer__cards-carousel__card__card-body"]}>
                        <div className="text-center">
                            <div className={styles["category-trainer__cards-carousel__card__trainer"]}>د. حسين عبدالكريم</div>
                            <div className={styles["category-trainer__cards-carousel__card__job-title"]}>مستشار عقاري</div>
                            <div className={styles["category-trainer__cards-carousel__card__job-history"]}>مؤسس شركه إعمار </div>
                        </div>
                    </div>
                
              </Card> 
            </SwiperSlide>
            <SwiperSlide> 
              <Card className={styles["category-trainer__cards-carousel__card"]}
                >
                    <div className={styles["category-trainer__cards-carousel__card__card-body"]}>
                        <div className="text-center">
                            <div className={styles["category-trainer__cards-carousel__card__trainer"]}>د. حسين عبدالكريم</div>
                            <div className={styles["category-trainer__cards-carousel__card__job-title"]}>مستشار عقاري</div>
                            <div className={styles["category-trainer__cards-carousel__card__job-history"]}>مؤسس شركه إعمار </div>
                        </div>
                    </div>
                
              </Card> 
            </SwiperSlide>
            <SwiperSlide> 
              <Card className={styles["category-trainer__cards-carousel__card"]}
                >
                    <div className={styles["category-trainer__cards-carousel__card__card-body"]}>
                        <div className="text-center">
                            <div className={styles["category-trainer__cards-carousel__card__trainer"]}>د. حسين عبدالكريم</div>
                            <div className={styles["category-trainer__cards-carousel__card__job-title"]}>مستشار عقاري</div>
                            <div className={styles["category-trainer__cards-carousel__card__job-history"]}>مؤسس شركه إعمار </div>
                        </div>
                    </div>
                
              </Card> 
            </SwiperSlide>
            <SwiperSlide> 
              <Card className={styles["category-trainer__cards-carousel__card"]}
                >
                    <div className={styles["category-trainer__cards-carousel__card__card-body"]}>
                        <div className="text-center">
                            <div className={styles["category-trainer__cards-carousel__card__trainer"]}>د. حسين عبدالكريم</div>
                            <div className={styles["category-trainer__cards-carousel__card__job-title"]}>مستشار عقاري</div>
                            <div className={styles["category-trainer__cards-carousel__card__job-history"]}>مؤسس شركه إعمار </div>
                        </div>
                    </div>
                
              </Card> 
            </SwiperSlide>
            <SwiperSlide> 
              <Card className={styles["category-trainer__cards-carousel__card"]}
                >
                    <div className={styles["category-trainer__cards-carousel__card__card-body"]}>
                        <div className="text-center">
                            <div className={styles["category-trainer__cards-carousel__card__trainer"]}>د. حسين عبدالكريم</div>
                            <div className={styles["category-trainer__cards-carousel__card__job-title"]}>مستشار عقاري</div>
                            <div className={styles["category-trainer__cards-carousel__card__job-history"]}>مؤسس شركه إعمار </div>
                        </div>
                    </div>
                
              </Card> 
            </SwiperSlide>
            <SwiperSlide> 
              <Card className={styles["category-trainer__cards-carousel__card"]}
                >
                    <div className={styles["category-trainer__cards-carousel__card__card-body"]}>
                        <div className="text-center">
                            <div className={styles["category-trainer__cards-carousel__card__trainer"]}>د. حسين عبدالكريم</div>
                            <div className={styles["category-trainer__cards-carousel__card__job-title"]}>مستشار عقاري</div>
                            <div className={styles["category-trainer__cards-carousel__card__job-history"]}>مؤسس شركه إعمار </div>
                        </div>
                    </div>
                
              </Card> 
            </SwiperSlide>
        </Swiper>
        </Col>
            
        </Row>
            
        </>
    )
}
