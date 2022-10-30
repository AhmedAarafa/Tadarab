/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import styles from "./tadarab-season.module.css";
import { Row, Col, Button } from "react-bootstrap";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function TadarabSeason() {
    const themeState = useSelector((state: any) => state.themeState.theme);

    return (
        <>
            <Row data-theme={themeState} className={styles["tadarab-season"]}>
                <Col sm={{ span: 6, order: 1 }} xs={{ span: 12, order: 2 }} className={styles["tadarab-season__info-box"]}>
                    <div className={styles["tadarab-season__info-box__info"]}>
                        <div>
                            أكبر حدث تدريبي ٢٠٢٢
                        </div>
                        <img className={styles["tadarab-season__info-box__logo"]} src="images/TadarabSeason.png" alt="موسم تدرب" />
                        <div>
                            أول موسم تدريبي بالخليج والشرق والأوسط يهدف لتطوير المتدرب وطرح أكبر عدد من الدورات التدريبية مقدمة من أفضل الخبراء بالخليج والوطن العربي.
                        </div>
                    </div>
                    <div className={styles["tadarab-season__signup-box"]}>
                        <Link href="/tadarab-season">
                            <Button>
                                تعرف على الموسم
                            </Button>
                        </Link>
                    </div>
                </Col>
                <Col sm={{ span: 6, order: 2 }} xs={{ span: 12, order: 1 }} className={styles["tadarab-season__gif"]}>
                    <img src="images/trainersgif-.gif" alt="موسم تدرب" />
                </Col>
            </Row>
        </>
    )
}
