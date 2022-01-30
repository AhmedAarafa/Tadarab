/* eslint-disable @next/next/no-img-element */
import React, {useState, useEffect } from "react";
import styles from "./learn-from-the-best.module.css";
import { Row, Col, Button, Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';
import "swiper/css";
import { axiosInstance } from "configurations/axios/axiosConfig";
import  {ChevronLeftIcon}  from "common/Icons/Icons";

export default function LearnFromTheBest() {
  SwiperCore.use([Navigation]);
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    axiosInstance
    .get("home/?country_code=eg")
    .then(function (response:any) {
      setTrainers(response.data.data.trainers);
    })
    .catch(function (error) {
      console.log(error);
    });
  }, []);

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
              <ChevronLeftIcon color="#af151f"/>


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
           
            { trainers.map((trainer:any, i:number)=>{
              return(
                  <SwiperSlide key={i}> 
                    <Card className={styles["learn-from-the-best__cards-carousel__card"]} 
                    style={{background: `transparent url(${trainer.image}) no-repeat padding-box` , 
                    backgroundSize: "contain" }}
                      >
                          <div className={styles["learn-from-the-best__cards-carousel__card__card-body"]}>
                              <div className="text-center">
                                  <div className={styles["learn-from-the-best__cards-carousel__card__trainer"]}>{trainer.name_ar}</div>
                                  <div className={styles["learn-from-the-best__cards-carousel__card__job-title"]}>{trainer.title}</div>
                                  <div className={styles["learn-from-the-best__cards-carousel__card__job-history"]}>{trainer.bio} </div>
                              </div>
                          </div>
                      
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


