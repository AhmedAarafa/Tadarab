/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import styles from "./practical-projects.module.css";
import { Row, Col, Button, Card, Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';
import { useDispatch, useSelector } from "react-redux";  
import { axiosInstance } from "configurations/axios/axiosConfig";

export default function PracticalProjects() {
  const [courseProjects, setCourseProjects] = useState<any>([]);

  useEffect(() => {

    axiosInstance
    .get(`courses/1540/projects/?country_code=${localStorage.getItem("countryCode")}`)
    .then(function (response:any) {
        setCourseProjects(response.data.data);
    })
    .catch(function (error) {
      console.log(error); 
    });
  }, []);

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

      {courseProjects?.map((project:any,i:number)=>{
          return(
            <Col key={i} xs={6} className={styles["practical-projects__project-card-col"]}>
                <div className={styles["practical-projects__project-card"]}>
                    <div className={styles["practical-projects__project-card__project-img"]}>
                        <img src={project.attachment_url} alt="project image" />
                    </div>
                    <div className={styles["practical-projects__project-card__trainee-details-box"]}>
                        <div className={styles["practical-projects__project-card__trainee-details-box__trainee-img"]}>
                            <img src={project.user_image} alt="male avatar" />  

                        </div>
                        <div className={styles["practical-projects__project-card__trainee-details-box__details"]}>
                            <div className={styles["practical-projects__project-card__trainee-details-box__details__name"]}>
                            {project.user_full_name}
                            <span> متعلم </span>
                            </div>
                            <div className={styles["practical-projects__project-card__trainee-details-box__details__project"]}>
                            {project.category_title}
                            </div>
                        </div>
                    </div>
                </div>
            </Col>

          )
      })}

      <Col xs={12} className={styles["practical-projects__responsive-projects-slider"]}>
      <Swiper dir="rtl" slidesPerView={1} navigation={true} pagination={{"clickable": true}} 
        breakpoints={{
            "50": {
                "slidesPerView": 1,
            },
           
        }} className="mySwiper">
            {
                courseProjects?.map((project:any,i:number)=>{
                    return(
                        <SwiperSlide key={i}>
                            <div className={styles["practical-projects__project-card"]}>
                                <div className={styles["practical-projects__project-card__project-img"]}>
                                    <img src={project.attachment_url} alt="project image" />
                                </div>
                                <div className={styles["practical-projects__project-card__trainee-details-box"]}>
                                    <div className={styles["practical-projects__project-card__trainee-details-box__trainee-img"]}>
                                        <img src={project.user_image} alt="male avatar" />  

                                    </div>
                                    <div className={styles["practical-projects__project-card__trainee-details-box__details"]}>
                                        <div className={styles["practical-projects__project-card__trainee-details-box__details__name"]}>
                                        {project.user_full_name}
                                        <span> متعلم </span>
                                        </div>
                                        <div className={styles["practical-projects__project-card__trainee-details-box__details__project"]}>
                                        {project.category_title}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )

                })
            }
          
        </Swiper>
      </Col>
    </>
  );
}
