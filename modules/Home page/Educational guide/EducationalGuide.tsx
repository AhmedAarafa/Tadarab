/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./educational-guide.module.css";
import { Row, Col, Button } from "react-bootstrap";

export default function EducationalGuide() {
  return (
    <>
      <Row>
        <Col xs={12} className={styles["educational-guide"]}>
          <div className={styles["educational-guide__container"]}>
            <div className={styles["educational-guide__container__img"]}>
                <img src="/images/Alaa.HEIC" alt="guide" />
            </div>
            <div className={styles["educational-guide__container__details-box"]}>
              <div className={styles["educational-guide__container__details-box__title"]}>
                  <span> مرشدك </span>
                  <span> التعليمي </span>
              </div>
              <div className={styles["educational-guide__container__details-box__breif"]}>
              نظام دعم فني شخصي لكل متدرب لضمان نجاح كل جانب من جوانب تجربة تعلمك علي تدرب لرد علي استفساراتك
              </div>
              <Button className={styles["educational-guide__container__details-box__btn"]}>
              تواصل معانا
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}
