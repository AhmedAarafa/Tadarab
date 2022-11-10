/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./educational-guide.module.css";
import { Row, Col, Button } from "react-bootstrap";
import Router from "next/router";
import { contactUsHandler, openSuppotConvInNewTab } from "modules/_Shared/utils/contactUs";
import Image from 'next/image';

export default function EducationalGuide() {

  return (
    <>
      <Row>
        <Col xs={12} className={styles["educational-guide"]}>
          <div className={styles["educational-guide__container"]}>
            <div className={styles["educational-guide__container__img"]}>
              <img loading="lazy" src={"/images/TadarabForBusinessLogo.png"} alt="guide" />
            </div>
            <div className={styles["educational-guide__container__details-box"]}>
              <div className={styles["educational-guide__container__details-box__title"]}>
                <span> تدرب </span>
                <span> للشركات </span>
              </div>
              <div className={styles["educational-guide__container__details-box__breif"]}>
                <div>
                  تحديات سوق العمل لا تنتهي!
                </div>
                <div>
                  طور مهارات مُوظفيك لتتناسب مع اقتصاد اليوم، اختر الخطة التعليمية التي تناسب أهداف عملك وتواصل معنا الآن.
                </div>
              </div>
              <Button onClick={() => { openSuppotConvInNewTab('https://wa.me/+96597128912') }} className={styles["educational-guide__container__details-box__btn"]}>
                تواصل معنا
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}
