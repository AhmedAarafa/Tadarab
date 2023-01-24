/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./tadarab-for-business.module.css";
import { Row, Col, Button } from "react-bootstrap";
import { openSupportConvInNewTab } from "modules/_Shared/utils/contactUs";

export default function TadarabForBusiness() {
    return (
        <>
            <Row>
                <Col xs={12} className={styles["tadarab-for-business"]}>
                    <div className={styles["tadarab-for-business__container"]}>
                        <div className={styles["tadarab-for-business__container__img"]}>
                            <img loading="lazy" src={"/images/TadarabForBusinessLogo.png"} alt="guide" />
                        </div>
                        <div className={styles["tadarab-for-business__container__details-box"]}>
                            <div className={styles["tadarab-for-business__container__details-box__title"]}>
                                <span> تدرب </span>
                                <span> للشركات </span>
                            </div>
                            <div className={styles["tadarab-for-business__container__details-box__breif"]}>
                                <div>
                                    تحديات سوق العمل لا تنتهي!
                                </div>
                                <div>
                                    طور مهارات مُوظفيك لتتناسب مع اقتصاد اليوم، اختر الخطة التعليمية التي تناسب أهداف عملك وتواصل معنا الآن.
                                </div>
                            </div>
                            <Button onClick={() => { openSupportConvInNewTab('https://wa.me/+96599002199') }} className={styles["tadarab-for-business__container__details-box__btn"]}>
                                تواصل معنا
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}
