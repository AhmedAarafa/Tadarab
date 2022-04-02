/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React, {useState, useEffect } from "react";
import styles from "./learn-from-the-best.module.css";
import { Row, Col, Button, Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';
import "swiper/css";
import { axiosInstance } from "configurations/axios/axiosConfig";
import  {ChevronLeftIcon}  from "common/Icons/Icons";
import Link from 'next/link';
import { useDispatch, useSelector } from "react-redux";

export default function LearnFromTheBest() {
  SwiperCore.use([Navigation]);
  const homePageData = useSelector((state:any) => state.homePageData);

  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    // axiosInstance
    // .get(`home/?country_code=${localStorage.getItem("countryCode")}`)
    // .then(function (response:any) {
    //   setTrainers(response.data.data.trainers);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
    // if(homePageData !== {}){
      setTrainers(homePageData.data?.trainers || []);
    // }
    // setTrainers(homePageData.data.trainers);
    console.log("homePageData.data?.trainer",homePageData.data?.trainers);
     

  }, [homePageData]);

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
           
            { trainers?.map((trainer:any, i:number)=>{
              return(
                  <SwiperSlide key={i}> 
                 <Link href={`/trainer/${trainer?.slug}`}>
                    <Card className={styles["learn-from-the-best__cards-carousel__card"]} 
                    style={{backgroundImage: `url("${trainer.image}")`}}
                      >
                          <div className={styles["learn-from-the-best__cards-carousel__card__card-body"]}>
                              <div className="text-center">
                              <Link href={`/trainer/${trainer?.slug}`}>

                                  <div className={styles["learn-from-the-best__cards-carousel__card__trainer"]}>{trainer.name_ar}</div>
                              </Link>
                                  <div className={styles["learn-from-the-best__cards-carousel__card__job-title"]}>{trainer.title}</div>
                                  <div className={styles["learn-from-the-best__cards-carousel__card__job-history"]}>{trainer.bio} </div>
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
  );
}


