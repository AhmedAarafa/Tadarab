/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./learn-from-the-best.module.css";
import { Row, Col, Button, Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';
import "swiper/css";

export default function LearnFromTheBest() {
  SwiperCore.use([Navigation]);

  return (
    <>
      <Row>
        <Col xs={{span:12 ,order:1}} sm={{span:9 ,order:1}} className={styles["learn-from-the-best__title"]}> 
          <div>
            <span> تعلم من </span>
            <span> الأفضل </span>
          </div>
        </Col>

        <Col xs={{span:12 ,order:3}} sm={{span:3 ,order:1}} className={styles["learn-from-the-best__see-more-btn-col"]}>
          <Button className={styles["learn-from-the-best__see-more-btn"]}>
              اعرض كل المدربين 
            <svg id="more" xmlns="http://www.w3.org/2000/svg" width="0.5rem" height="0.875rem" viewBox="0 0 8.39 14">
  <path id="Path_12841" data-name="Path 12841" d="M11.567,6.006a1.346,1.346,0,0,1,.229-.183L17.222.4A1.356,1.356,0,0,1,19.14,2.315L14.467,6.988l4.7,4.7A1.356,1.356,0,1,1,17.247,13.6L11.8,8.153a1.407,1.407,0,0,1-.229-2.147Z" transform="translate(-11.172 -0.001)" fill="#af151f"/>
</svg>

          </Button>
        </Col>

        <Col xs={{span:12 ,order:2}} sm={{span:12 ,order:3}} className={styles["learn-from-the-best__cards-carousel"]}>
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
              <Card className={styles["learn-from-the-best__cards-carousel__card"]}
                >
                    <div className={styles["learn-from-the-best__cards-carousel__card__card-body"]}>
                        <div className="text-center">
                            <div className={styles["learn-from-the-best__cards-carousel__card__trainer"]}>د. حسين عبدالكريم</div>
                            <div className={styles["learn-from-the-best__cards-carousel__card__job-title"]}>مستشار عقاري</div>
                            <div className={styles["learn-from-the-best__cards-carousel__card__job-history"]}>مؤسس شركه إعمار </div>
                        </div>
                    </div>
                
              </Card> 
            </SwiperSlide>
            <SwiperSlide> 
              <Card className={styles["learn-from-the-best__cards-carousel__card"]}
                >
                    <div className={styles["learn-from-the-best__cards-carousel__card__card-body"]}>
                        <div className="text-center">
                            <div className={styles["learn-from-the-best__cards-carousel__card__trainer"]}>د. حسين عبدالكريم</div>
                            <div className={styles["learn-from-the-best__cards-carousel__card__job-title"]}>مستشار عقاري</div>
                            <div className={styles["learn-from-the-best__cards-carousel__card__job-history"]}>مؤسس شركه إعمار </div>
                        </div>
                    </div>
                
              </Card> 
            </SwiperSlide>
            <SwiperSlide> 
              <Card className={styles["learn-from-the-best__cards-carousel__card"]}
                >
                    <div className={styles["learn-from-the-best__cards-carousel__card__card-body"]}>
                        <div className="text-center">
                            <div className={styles["learn-from-the-best__cards-carousel__card__trainer"]}>د. حسين عبدالكريم</div>
                            <div className={styles["learn-from-the-best__cards-carousel__card__job-title"]}>مستشار عقاري</div>
                            <div className={styles["learn-from-the-best__cards-carousel__card__job-history"]}>مؤسس شركه إعمار </div>
                        </div>
                    </div>
                
              </Card> 
            </SwiperSlide>
            <SwiperSlide> 
              <Card className={styles["learn-from-the-best__cards-carousel__card"]}
                >
                    <div className={styles["learn-from-the-best__cards-carousel__card__card-body"]}>
                        <div className="text-center">
                            <div className={styles["learn-from-the-best__cards-carousel__card__trainer"]}>د. حسين عبدالكريم</div>
                            <div className={styles["learn-from-the-best__cards-carousel__card__job-title"]}>مستشار عقاري</div>
                            <div className={styles["learn-from-the-best__cards-carousel__card__job-history"]}>مؤسس شركه إعمار </div>
                        </div>
                    </div>
                
              </Card> 
            </SwiperSlide>
            <SwiperSlide> 
              <Card className={styles["learn-from-the-best__cards-carousel__card"]}
                >
                    <div className={styles["learn-from-the-best__cards-carousel__card__card-body"]}>
                        <div className="text-center">
                            <div className={styles["learn-from-the-best__cards-carousel__card__trainer"]}>د. حسين عبدالكريم</div>
                            <div className={styles["learn-from-the-best__cards-carousel__card__job-title"]}>مستشار عقاري</div>
                            <div className={styles["learn-from-the-best__cards-carousel__card__job-history"]}>مؤسس شركه إعمار </div>
                        </div>
                    </div>
                
              </Card> 
            </SwiperSlide>
            <SwiperSlide> 
              <Card className={styles["learn-from-the-best__cards-carousel__card"]}
                >
                    <div className={styles["learn-from-the-best__cards-carousel__card__card-body"]}>
                        <div className="text-center">
                            <div className={styles["learn-from-the-best__cards-carousel__card__trainer"]}>د. حسين عبدالكريم</div>
                            <div className={styles["learn-from-the-best__cards-carousel__card__job-title"]}>مستشار عقاري</div>
                            <div className={styles["learn-from-the-best__cards-carousel__card__job-history"]}>مؤسس شركه إعمار </div>
                        </div>
                    </div>
                
              </Card> 
            </SwiperSlide>
            <SwiperSlide> 
              <Card className={styles["learn-from-the-best__cards-carousel__card"]}
                >
                    <div className={styles["learn-from-the-best__cards-carousel__card__card-body"]}>
                        <div className="text-center">
                            <div className={styles["learn-from-the-best__cards-carousel__card__trainer"]}>د. حسين عبدالكريم</div>
                            <div className={styles["learn-from-the-best__cards-carousel__card__job-title"]}>مستشار عقاري</div>
                            <div className={styles["learn-from-the-best__cards-carousel__card__job-history"]}>مؤسس شركه إعمار </div>
                        </div>
                    </div>
                
              </Card> 
            </SwiperSlide>
            <SwiperSlide> 
              <Card className={styles["learn-from-the-best__cards-carousel__card"]}
                >
                    <div className={styles["learn-from-the-best__cards-carousel__card__card-body"]}>
                        <div className="text-center">
                            <div className={styles["learn-from-the-best__cards-carousel__card__trainer"]}>د. حسين عبدالكريم</div>
                            <div className={styles["learn-from-the-best__cards-carousel__card__job-title"]}>مستشار عقاري</div>
                            <div className={styles["learn-from-the-best__cards-carousel__card__job-history"]}>مؤسس شركه إعمار </div>
                        </div>
                    </div>
                
              </Card> 
            </SwiperSlide>
            <SwiperSlide> 
              <Card className={styles["learn-from-the-best__cards-carousel__card"]}
                >
                    <div className={styles["learn-from-the-best__cards-carousel__card__card-body"]}>
                        <div className="text-center">
                            <div className={styles["learn-from-the-best__cards-carousel__card__trainer"]}>د. حسين عبدالكريم</div>
                            <div className={styles["learn-from-the-best__cards-carousel__card__job-title"]}>مستشار عقاري</div>
                            <div className={styles["learn-from-the-best__cards-carousel__card__job-history"]}>مؤسس شركه إعمار </div>
                        </div>
                    </div>
                
              </Card> 
            </SwiperSlide>
            <SwiperSlide> 
              <Card className={styles["learn-from-the-best__cards-carousel__card"]}
                >
                    <div className={styles["learn-from-the-best__cards-carousel__card__card-body"]}>
                        <div className="text-center">
                            <div className={styles["learn-from-the-best__cards-carousel__card__trainer"]}>د. حسين عبدالكريم</div>
                            <div className={styles["learn-from-the-best__cards-carousel__card__job-title"]}>مستشار عقاري</div>
                            <div className={styles["learn-from-the-best__cards-carousel__card__job-history"]}>مؤسس شركه إعمار </div>
                        </div>
                    </div>
                
              </Card> 
            </SwiperSlide>
            <SwiperSlide> 
              <Card className={styles["learn-from-the-best__cards-carousel__card"]}
                >
                    <div className={styles["learn-from-the-best__cards-carousel__card__card-body"]}>
                        <div className="text-center">
                            <div className={styles["learn-from-the-best__cards-carousel__card__trainer"]}>د. حسين عبدالكريم</div>
                            <div className={styles["learn-from-the-best__cards-carousel__card__job-title"]}>مستشار عقاري</div>
                            <div className={styles["learn-from-the-best__cards-carousel__card__job-history"]}>مؤسس شركه إعمار </div>
                        </div>
                    </div>
                
              </Card> 
            </SwiperSlide>
            <SwiperSlide> 
              <Card className={styles["learn-from-the-best__cards-carousel__card"]}
                >
                    <div className={styles["learn-from-the-best__cards-carousel__card__card-body"]}>
                        <div className="text-center">
                            <div className={styles["learn-from-the-best__cards-carousel__card__trainer"]}>د. حسين عبدالكريم</div>
                            <div className={styles["learn-from-the-best__cards-carousel__card__job-title"]}>مستشار عقاري</div>
                            <div className={styles["learn-from-the-best__cards-carousel__card__job-history"]}>مؤسس شركه إعمار </div>
                        </div>
                    </div>
                
              </Card> 
            </SwiperSlide>
        </Swiper>
        </Col>
      </Row>
    </>
  );
}


