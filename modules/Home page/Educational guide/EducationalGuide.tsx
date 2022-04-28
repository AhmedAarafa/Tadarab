/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./educational-guide.module.css";
import { Row, Col, Button } from "react-bootstrap";
import Router from "next/router";
import { contactUsHandler } from "modules/_Shared/utils/contactUs";
import Image from 'next/image';

export default function EducationalGuide() {

  return (
    <>
      <Row>
        <Col xs={12} className={styles["educational-guide"]}>
          <div className={styles["educational-guide__container"]}>
            <div className={styles["educational-guide__container__img"]}>
                <Image src="/images/hams.png" alt="guide" />
            </div>
            <div className={styles["educational-guide__container__details-box"]}>
              <div className={styles["educational-guide__container__details-box__title"]}>
                  <span> مرشدك </span>
                  <span> التعليمي </span>
              </div>
              <div className={styles["educational-guide__container__details-box__breif"]}>
              نظام دعم فني شخصي لكل متدرب لضمان نجاح كل جانب من جوانب تجربة تعلمك على تدرب لرد على استفساراتك
              </div>
              <Button onClick={()=>{ contactUsHandler() }} className={styles["educational-guide__container__details-box__btn"]}>
              تواصل معنا
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}
