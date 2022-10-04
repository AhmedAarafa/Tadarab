/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from "./tadarab-introduction.module.css";
import { Row, Col, Button, Form } from "react-bootstrap";

export default function TadarabIntroduction() {
    return (
        <>
            <Row className={styles["tadarab-introduction"]}>
                <Col xs={{ span: 12, order: 2 }} sm={{ span: 4, order: 1 }} className={styles["tadarab-introduction__description-box"]}>
                    <div className={styles["tadarab-introduction__description-box__title"]}>
                        أكبر حدث تدريبي
                        ٢٠٢٢
                    </div>
                    <img className={styles["tadarab-introduction__description-box__img"]} src="images/TadarabSeason.png" />
                    <div className={styles["tadarab-introduction__description-box__brief"]}>
                        أول موسم تدريبي بالخليج والشرق والأوسط يهدف لتطوير المتدرب وطرح
                        أكبر عدد من الدورات التدريبية مقدمة من أفضل الخبراء بالخليج
                    </div>

                    <Form className={styles["tadarab-introduction__description-box__form"]}>
                        <Form.Control type="email" placeholder="ادخل بريدك الالكتروني" />

                        <Button type="submit">
                            انشاء حساب جديد
                        </Button>
                    </Form>
                    <div className={styles["tadarab-introduction__description-box__subsc-pricing"]}>
                        يبدأ سعر الاشتراك من ٦ دك / ش يشمل جميع دورات تدرب والموسم التدريبي
                    </div>
                </Col>
                <Col xs={{ span: 12, order: 1 }} sm={{ span: 8, order: 2 }} className={styles["tadarab-introduction__video"]}>
                    <img src="https://woodfordoil.com/wp-content/uploads/2018/02/placeholder.jpg" />
                </Col>
            </Row>
        </>
    )
}
