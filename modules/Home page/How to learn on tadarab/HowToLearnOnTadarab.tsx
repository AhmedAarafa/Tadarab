/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Row, Col, Button } from "react-bootstrap";
import styles from "./how-to-learn-on-tadarab.module.css";
import Link from "next/link";
import Image from 'next/image';

export default function HowToLearnOnTadarab() {
    return (
        <>
            <Row className={styles["how-to-learn-on-tadarab"]}>
                <Col sm={{ span: 7, order: 1 }} xs={{ span: 12, order: 2 }} >
                    <div className={styles["how-to-learn-on-tadarab__img"]}>
                        <img loading="lazy" src={"/images/How to learn Section4.png"} alt="دورة تنسيق الزهور" />
                    </div>
                </Col>
                <Col sm={{ span: 5, order: 2 }} xs={{ span: 12, order: 1 }}>
                    <div className={styles["how-to-learn-on-tadarab__content"]}>
                        <h3>
                            كيف تبدأ رحلة التعلم ومتابعة الدورات الأونلاين على
                            <span>
                                منصة تدرب
                                ؟
                            </span>
                        </h3>
                        {/* <div className={styles["how-to-learn-on-tadarab__img--responsive"]}>
                            <img loading="lazy"   src={"/images/How to learn Section4.png"} alt="دورة تنسيق الزهور" />
                        </div> */}
                        <div>
                            الدورات جميعها مسجلة يمكنك متابعتها في أي وقت ومن أي مكان تريده وبكل سهولة حيث أن جميع الدورات مقسمة إلى فيديوهات تستطيع أيضاً تحميل المرفقات الخاصة بالدورات وطباعتها لتحقيق أقصى استفادة
                        </div>
                        <Link href="/courses">
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
