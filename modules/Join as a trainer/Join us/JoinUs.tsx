/* eslint-disable @next/next/link-passhref */
import React,{ useEffect,useState } from 'react';
import styles from "./join-us.module.css";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';
import "swiper/css";
import Link from 'next/link';
import { ChevronLeftIcon } from "common/Icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";


export default function JoinUs() {
  SwiperCore.use([Navigation]);
  const homePageData = useSelector((state:any) => state.homePageData);

  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
   
      setTrainers(homePageData.data?.trainers || []);

  }, [homePageData]); 

  return (
    <Row className={styles["join-us"]}>

        <Col xs={12} >
            <div className={styles["join-us__title"]}>
                 انضم لتدرب وكن واحد من 
                <div>
                مدربيننا 
                </div>
                </div>
            <div className={styles["join-us__brief"]}>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما لتدريب افراد شركتك</div>
        </Col>

        <Col xs={12} className={styles["join-us__cards-carousel"]}>
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
           
           {
             trainers?.map((trainer:any, i:number)=>{
               return(

                  <SwiperSlide key={i}> 
                 <Link href={`/trainer/${trainer?.slug}`}>
                    <Card className={styles["join-us__cards-carousel__card"]} 
                    style={{backgroundImage: `url("${trainer.image}")`}}
                      >
                          <div className={styles["join-us__cards-carousel__card__card-body"]}>
                              <div className="text-center">
                                  <div className={styles["join-us__cards-carousel__card__trainer"]}>{trainer.name_ar}</div>
                                  <div className={styles["join-us__cards-carousel__card__job-title"]}>{trainer.title}</div>
                                  <div className={styles["join-us__cards-carousel__card__job-history"]}>{trainer.bio}</div>
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

        <Col xs={12} className={styles["join-us__start-now"]}>
            <Button onClick={()=>{Router.push("https://app.tadarab.com/selfhosted")}}>
            ابدأ الآن مجاناَ 
            </Button>
        </Col>
    </Row>
  )
}
