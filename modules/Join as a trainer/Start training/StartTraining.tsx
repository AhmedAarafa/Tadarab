/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from "./start-training.module.css";
import { Row,Col,Form,Button } from "react-bootstrap";
import { SearchIcon, ChevronLeftIcon } from "common/Icons/Icons";
import Router from "next/router";

export default function StartTraining() {
  return (
    <Row className={styles["start-training"]}>
        <Col xs={12} sm={6}>

          <div className={styles["start-training__title"]}>
            <div>ابدأ التدريب الآن مع تدرب</div>
            <div>بوابة المدربين العرب</div>
          </div>

          <div className={styles["start-training__brief"]}>
            أصبح مدرب الآن واصنع التأثير وساعد في نقل المهارات بين الناس عن طريق التدريب
          </div>

          <Button onClick={()=>{Router.push("https://app.tadarab.com/selfhosted")}} className={styles["start-training__btn"]}>
              ابدأ الآن مجاناَ   
          </Button>

        </Col>

        <Col xs={12} sm={6} >
          
          <div className={styles["start-training__img-container"]}>
            <img src="/images/startTrainingnoww.png" alt="discriptive image" />
          </div>

        </Col>
    </Row>
  )
}
