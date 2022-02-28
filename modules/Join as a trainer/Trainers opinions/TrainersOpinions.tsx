/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from "./trainers-opinions.module.css";
import { Row,Col,Button } from "react-bootstrap";

export default function TrainersOpinions() {
  return (
    <Row className={styles["trainers-opinions"]}>

      <Col xs={12}>
        <div className={styles["trainers-opinions__title"]}>
        شاهد ماذا قال اكبر المدربين بالخليج والوطن العربى على منصة تدرب
        </div>
        <div className={styles["trainers-opinions__video"]}>

         <img src="/images/VideoPlaceholder2.png" alt="promo video" />

        </div>
        <div className={styles["trainers-opinions__inquiries-section"]}>
          <div>تحتاج مساعدة أو استفسار؟</div>
          <div>فريق عمل تدرب يساعدك بداية من أعداد المحتوى حتى التسويق لدورتك التدريبية</div>
          <Button>تواصل معانا</Button>
        </div>
      </Col>
      
    </Row>
  )
}
