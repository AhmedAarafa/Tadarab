/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React, {useState, useEffect, memo } from "react";
import styles from "./learn-from-the-best.module.css";
import { Row, Col, Button, Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';
import "swiper/css";
import { axiosInstance } from "configurations/axios/axiosConfig";
import  {ChevronLeftIcon}  from "common/Icons/Icons";
import Link from 'next/link';
import { useSelector } from "react-redux";
import saTrainers from "./saTrainers.json";

function LearnFromTheBest(props: any) {
  SwiperCore.use([Navigation]);
  const homePageData = useSelector((state:any) => state.homePageData);
  const [trainers, setTrainers] = useState([]);
  const themeState = useSelector((state: any) => state.themeState.theme);

  useEffect(() => {
   
      setTrainers(homePageData.data?.trainers || []);

  }, [homePageData]);

  return (
    <>
      <Row>
        <Col xs={{span:12 ,order:1}} sm={{span:9 ,order:1}} className={styles["learn-from-the-best__title"]}> 
          <h2>
            <span> تعلم من </span>
            <span> الأفضل </span>
          </h2>
        </Col>

        <Col xs={{span:12 ,order:3}} sm={{span:3 ,order:1}} className={styles["learn-from-the-best__see-more-btn-col"]}>
          <Link href="/trainers">
            <Button className={styles["learn-from-the-best__see-more-btn"]}>
                اعرض كل المدربين 
                <ChevronLeftIcon color={themeState == "light" ? "#af151f" : "#f5f5f5"}/>
            </Button>
          </Link>
        </Col> 

        <Col xs={{span:12 ,order:2}} sm={{span:12 ,order:3}} className={styles["learn-from-the-best__cards-carousel"]}>
        <Swiper dir="rtl"   slidesPerView={4} navigation={true} pagination={{"clickable": true}} 
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
           
            {(props?.targetedCountry == "sa" ?
              saTrainers.concat(trainers?.filter((tr: any) => (tr?.id !== 207998 && tr?.id !== 110230 && tr?.id !== 3126)))
              : trainers
            )?.map((trainer:any, i:number)=>{
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
                                  <div className={styles["learn-from-the-best__cards-carousel__card__job-history"]} 
                                   dangerouslySetInnerHTML={{ __html: trainer.bio}}></div>
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

export default memo(LearnFromTheBest);


