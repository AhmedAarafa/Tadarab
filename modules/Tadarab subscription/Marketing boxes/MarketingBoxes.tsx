/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from "./marketing-boxes.module.css";
import { Row, Col } from "react-bootstrap";
import LatestCourses from '../Latest courses/LatestCourses';
import LiveCourses from '../Live courses/LiveCourses';
import CoursesDepartments from '../Courses departments/CoursesDepartments';
import Image from 'next/image';

export default function MarketingBoxes() {
  return (
    <Row className={styles["marketing-boxes"]}>
        <Col style={{display:"none"}} xs={12} sm={6} className={styles["marketing-boxes__box"]}>
            <div  className={`${styles["marketing-boxes__image"]} d-flex justify-content-start`}>
                <img loading="lazy"   src={"/images/imagePlaceholder.png"} alt="discriptive image" />
            </div>
        </Col>
        <Col style={{display:"none"}} xs={12} sm={6} className={styles["marketing-boxes__box"]}>
            <div className={styles["marketing-boxes__title"]}>
                <div>أكبر محتوى</div>
                <div> دورات عربى في</div>
                <div className={styles["marketing-boxes__title--important"]}> الخليج والشرق الاوسط</div>
            </div>
            <div className={styles["marketing-boxes__brief"]}>
            مئات الدورات التدريبية عالية الجودة بأشتراك شهري بسيط بين يديك الآن على أكبر منصة تعلم عن بعد بالخليج والشرق الاوسط
            </div>
        </Col>


        <Col xs={12} sm={6} className={styles["marketing-boxes__box"]}>
            <div className={styles["marketing-boxes__title"]}>
                <div className={styles["marketing-boxes__title--important"]}>حرية الاختيار</div>
                <div > واستكشاف الدورات</div>
            </div>
            <div className={styles["marketing-boxes__brief"]}>
            لا داعِ للتقيد بعدد معين من الدورات الموجودة في حسابك فقط،
مع تدرب بلا حدود يمكنك مشاهدة أي دورة من مئات الدورات في مختلف المجالات
ومتابعتها في أي وقت خلال فترة الاشتراك.
                
                </div>
        </Col>
        <Col xs={12} sm={6} className={styles["marketing-boxes__box"]}>
            <div className={`${styles["marketing-boxes__image"]}  d-flex justify-content-end`}>
                <img loading="lazy"   src={"/images/discoveringCourses.jpg"} alt="discriptive image" />
            </div>
        </Col>
        
        <CoursesDepartments/>

        <Col xs={12} sm={6} className={styles["marketing-boxes__box"]}>
            <div className={`${styles["marketing-boxes__image"]} d-flex justify-content-start`}>
                <img loading="lazy"   src={"/images/trainingCourses.jpg"} alt="discriptive image" />
            </div>
        </Col>
        <Col xs={12} sm={6} className={styles["marketing-boxes__box"]}>
            <div className={styles["marketing-boxes__title"]}>
                <div>دورات تدريبية صممت</div>
                <div> لوضعك على بداية الطريق</div>
            </div>
            <div className={styles["marketing-boxes__brief"]}>
            اكتسب العلم والمهارت المختلفة عن طريق الفيديوهات التدريبية
            والتمارين والاختبارات المرفقة مع كل دورة بحرية تامة.

            </div>
        </Col>
        {/* <LiveCourses/> */}
    </Row>
  )
}