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

         {/* <img src="/images/VideoPlaceholder2.png" alt="promo video" /> */}
          <video controls src="https://vod-progressive.akamaized.net/exp=1648819861~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4314%2F25%2F646574244%2F2965661658.mp4~hmac=97f669f166bfbb2335452d66bead3aabc1f80122c90f0d1c3f14c038ab67e2f5/vimeo-prod-skyfire-std-us/01/4314/25/646574244/2965661658.mp4"></video>
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
