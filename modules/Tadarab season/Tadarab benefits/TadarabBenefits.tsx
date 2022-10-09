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
                        <img src="images/UnlimitedTadarabSeason.png" />
                    </div>
                    <div>
                        <div className={styles["tadarab-benefits__title"]}>
                            موسم تدرب أكتوبر ٢٠٢٢ ضمن اشتراك تدرب
                        </div>
                        <div className={styles["tadarab-benefits__benefits-box"]}>
                            احصل على جميع دورات موسم تدرب خلال شهر أكتوبر ٢٠٢٢ بالاضافة لجميع دورات تدرب أكثر من ٨٥٠ دورة تدريبية + دورات جديدة تضاف كل شهر باشتراك  شهري واحد يمكنك المتابعة من اي جهاز وفي اي مكان بالعالم
                        </div>
                    </div>

                </Col>
            </Row>
        </>
    )
}
