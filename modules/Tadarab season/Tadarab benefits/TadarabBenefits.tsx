/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from "./tadarab-benefits.module.css";
import { Row, Col } from "react-bootstrap";
import { TickIcon } from "common/Icons/Icons";

export default function TadarabBenefits() {
    return (
        <>
            <Row>
                <Col xs={12} className={styles["tadarab-benefits"]}>
                    <div className={styles["tadarab-benefits__img"]}>
                        <img src="https://www.linkpicture.com/q/image-3_14.png" />
                    </div>
                    <div>
                        <div className={styles["tadarab-benefits__title"]}>
                            موسم تدرب أكتوبر ٢٠٢٢ ضمن اشتراك تدرب
                        </div>
                        <div className={styles["tadarab-benefits__benefits-box"]}>
                            <div className={styles["tadarab-benefits__benefits-box__benefits"]}>
                                <div>
                                    <TickIcon />
                                </div>
                                <span>مشاهدة بلا حدود لجميع دورات تدرب أكثر من ٨٥٠ دورة تدريبية</span>
                            </div>
                            <div className={styles["tadarab-benefits__benefits-box__benefits"]}>
                                <div>
                                    <TickIcon />
                                </div>
                                <span>مشاهدة جميع دورات الموسم التدريبي أثناء البث المباشر او مسجلة في اي  وقت  ومن اي مكان</span>
                            </div>
                            <div className={styles["tadarab-benefits__benefits-box__benefits"]}>
                                <div>
                                    <TickIcon />
                                </div>
                                <span>شهادات أتمام الدورات بلا حدود</span>
                            </div>
                            <div className={styles["tadarab-benefits__benefits-box__benefits"]}>
                                <div>
                                    <TickIcon />
                                </div>
                                <span>أمكانية حضور دورات الموسم التدريبي داخل الأستديو أثناء البث المباشر ( عدد محدود ) </span>
                            </div>
                            <div className={styles["tadarab-benefits__benefits-box__benefits"]}>
                                <div>
                                    <TickIcon />
                                </div>
                                <span>لا يوجد التزام، يمكنك الغاء الاشتراك في اي وقت</span>
                            </div>
                        </div>
                    </div>

                </Col>
            </Row>
        </>
    )
}
