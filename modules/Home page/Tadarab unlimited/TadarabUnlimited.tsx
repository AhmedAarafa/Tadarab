/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from "./tadarab-unlimited.module.css";
import { Row, Col, Button } from "react-bootstrap";
import Link from "next/link";

export default function TadarabUnlimited() {
    return (
        <>
        <Row className={styles["tadarab-unlimited"]}>

            <Col sm={{span:5 , order:1}} xs={{span:12 , order:1}}>
                <div className={styles["tadarab-unlimited__img"]}>
                    <img src="/images/tadarab-unlimited.png" alt="تدرب بلا حدود" />
                </div>
            </Col>
            <Col sm={{span:7 , order:2}} xs={{span:12 , order:2}} className={styles["tadarab-unlimited__brief"]}>
                <div>
                    <span> اكتشف </span>
                    <span> تدرب بلا حدود </span>
                </div>
                <div>
                تمتع بحرية استكشاف ومشاهدة جميع دورات تدرب أكثر من 750 دورة تدريبية
                عربية مسجلة بالإضافة إلى الدورات المباشرة والكتب والملخصات الحصرية
                باشتراك شهري واحد.

                </div>
                <Link href="/subscription">
                    <Button>
                        اكتشف الآن
                    </Button>
                </Link>

            </Col>

        </Row>

        </>
    )
}
