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
                <Col sm={{span:7 , order:1}} xs={{span:12 , order:2}} >
                    <div className={styles["how-to-learn-on-tadarab__img"]}>
                        <img loading="lazy"   src={"/images/How to learn Section4.png"} alt="كيف تتعلم على منصة تدرب" />
                    </div>
                </Col>
                <Col sm={{span:5 , order:2}} xs={{span:12 , order:1}}>
                    <div className={styles["how-to-learn-on-tadarab__content"]}>
                        <div>
                            كيف تتعلم على
                            <div>
                             منصة تدرب 
                            <span>
                            للتعلم أون لاين؟
                            </span>
                            </div>
                        </div>
                        <div className={styles["how-to-learn-on-tadarab__img--responsive"]}>
                            <img loading="lazy"   src={"/images/How to learn Section4.png"} alt="كيف تتعلم على منصة تدرب" />
                        </div>
                        <div>
                        يمكنك متابعة الدورات التدريبية المختلفة في جميع المجالات والمقسمة إلى فيديوهات تستطيع متابعتها بسهولة من أي مكان وفي أي وقت وعلى أي جهاز، تستطيع أيضًا تحميل المرفقات الورقية للتطبيق والمتابعة وزيادة الاستفادة.
                        </div>
                        <Link href="/courses?type=all">
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
