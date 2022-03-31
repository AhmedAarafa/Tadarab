/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from "./successful-investment.module.css";
import { Row,Col } from "react-bootstrap";


export default function SuccessfulInvestment() {
  return (
    <Row className={styles["successful-investment"]}>
        <Col xs={12} >
            <div className={styles["successful-investment__title"]}>
            لماذا التدريب على تدرب يعد استثمار ناجح؟
            </div>

        </Col>
        <Col xs={12} >
            <div className={styles["successful-investment__marketing_boxes"]}>

                <div className={styles["successful-investment__marketing_boxes__box"]}>
                    <div className={styles["successful-investment__marketing_boxes__box__img"]}>
                        <img src="/images/bestReturnRate.png" alt="discriptive image" />
                    </div>
                    <div className={styles["successful-investment__marketing_boxes__box__text"]}>
                    أفضل نسبة أرباح وعوائد شهرية في الوطن العربي
                    </div>
                </div>
                <div className={styles["successful-investment__marketing_boxes__box"]}>
                    <div className={styles["successful-investment__marketing_boxes__box__img"]}>
                        <img src="/images/reach.png" alt="discriptive image" />
                    </div>
                    <div className={styles["successful-investment__marketing_boxes__box__text"]}>
                    انتشار ووصول لشريحة أكبر من الطلاب والمتدربين
                    </div>
                </div>
                <div className={styles["successful-investment__marketing_boxes__box"]}>
                    <div className={styles["successful-investment__marketing_boxes__box__img"]}>
                        <img src="/images/toolsToHelpU.png" alt="discriptive image" />
                    </div>
                    <div className={styles["successful-investment__marketing_boxes__box__text"]}>
                    نظام متكامل وأدوات تساعدك على تقديم تجربة تدريب فريدة
                    </div>
                </div>
                <div className={styles["successful-investment__marketing_boxes__box"]}>
                    <div className={styles["successful-investment__marketing_boxes__box__img"]}>
                        <img src="/images/deepenYourName.png" alt="discriptive image" />
                    </div>
                    <div className={styles["successful-investment__marketing_boxes__box__text"]}>
                    ترسيخ أسمك ومحتواك ضمن أكبر المدربين
                    </div>
                </div>
              

            </div>

        </Col>
    </Row>
  )
}
