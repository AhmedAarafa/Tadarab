/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Row, Col, Button } from "react-bootstrap";
import styles from "./how-to-learn-on-tadarab.module.css";
import Link from "next/link";

export default function HowToLearnOnTadarab() {
    return (
        <>
            <Row className={styles["how-to-learn-on-tadarab"]}>
                <Col sm={{span:7 , order:1}} xs={{span:12 , order:2}} >
                    <div className={styles["how-to-learn-on-tadarab__img"]}>
                        <img src="/images/How to learn Section4.png" alt="كيف تتعلم علي تدرب" />
                    </div>
                </Col>
                <Col sm={{span:5 , order:2}} xs={{span:12 , order:1}}>
                    <div className={styles["how-to-learn-on-tadarab__content"]}>
                        <div>
                            كيف تتعلم على
                            <div>

                             منصة
                            <span>
                                تدرب التعليمية؟
                            </span>
                            </div>
                        </div>
                        <div>
                            أكتسب المهارات والعلم عن طريق الفديوهات التدريبية والتمارين والاختبارات المرفقة مع كل دورة بكل حرية أكتسب المهارات والعلم عن طريق الفديوهات التدريبية والتمارين والاختبارات المرفقة
                        </div>
                        <Link href="/courses?filter_type=all">
                            <Button>
                            ابدأ التعلم الآن
                            </Button>
                        </Link>
                    </div>
                </Col>
            </Row>

        </>
    )
}
