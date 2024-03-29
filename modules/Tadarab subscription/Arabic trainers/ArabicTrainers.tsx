/* eslint-disable @next/next/link-passhref */
import React,{ useEffect,useState, memo } from 'react';
import styles from "./arabic-trainers.module.css";
import { Row, Col, Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';
import "swiper/css";
import Link from 'next/link';
import { useSelector } from "react-redux";

function ArabicTrainers() {
  SwiperCore.use([Navigation]);
  const homePageData = useSelector((state:any) => state.homePageData);

  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
   
      setTrainers(homePageData.data?.trainers || []);

  }, [homePageData]);

  return (
    <Row className={styles["arabic-trainers"]}>

        <Col xs={12} >
            <div className={styles["arabic-trainers__title"]}>
                أكبر قاعدة 
                <span>
                مدربين عرب
                </span>
                </div>
            <div className={styles["arabic-trainers__brief"]}>أكثر من 500 مدرب محترف في مجاله، يساعدونك على تحقيق أهدافك من خلال دوراتهم في جميع المجالات.</div>
        </Col>

        <Col xs={12} className={styles["arabic-trainers__cards-carousel"]}>
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
           
                  { trainers?.map((trainer:any, i:number)=>{
                    return(

                   <SwiperSlide key={i}> 
                  <Link href={`/trainer/${trainer?.slug}`}>
                    <Card className={styles["arabic-trainers__cards-carousel__card"]} 
                    style={{backgroundImage: `url("${trainer.image}")`}}
                      >
                          <div className={styles["arabic-trainers__cards-carousel__card__card-body"]}>
                              <div className="text-center">
                                  <div className={styles["arabic-trainers__cards-carousel__card__trainer"]}>{trainer.name_ar}</div>
                                  <div className={styles["arabic-trainers__cards-carousel__card__job-title"]}>{trainer.title}</div>
                                  <div className={styles["arabic-trainers__cards-carousel__card__job-history"]}>{trainer.bio}</div>
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

        {/* <Col xs={12} className={styles["arabic-trainers__subscribe-box"]}>
            <div>للاشتراك الشهري على منصة تدرب، سجل إيميلك وانشئ حسابك.</div>
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
        </Col> */}
    </Row>
  )
}

export default memo(ArabicTrainers);
