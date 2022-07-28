/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import styles from "./tadarab-unlimited.module.css";
import { Row, Col, Button } from "react-bootstrap";
import Link from "next/link";
import useResize from "custom hooks/useResize";
import Image from 'next/image';

export default function TadarabUnlimited() {
    const [isMobileView, setIsMobileView] = useState(false);

    const viewportWidthDetector = () => {
        if (window.innerWidth >= 576) {
            setIsMobileView(false);
        } else {
            setIsMobileView(true);
        }
    }
    useResize(viewportWidthDetector);

    return (
        <>
        {
            !isMobileView ? 
        <Row className={styles["tadarab-unlimited"]}>
            <Col xs={5}>
                <div className={styles["tadarab-unlimited__img"]}>
                    <img loading="lazy"   src={"/images/tadarab-unlimited.png"} alt="تدرب للدورات المجانية والمدفوعة" />
                </div>
            </Col>
            <Col xs={7} className={styles["tadarab-unlimited__brief"]}>
                <h3>
                    <span> اكتشف </span>
                    <span> تدرب بلا حدود </span>
                </h3>
                <div> 
                منصة تدرب تقدم لك باقات متنوعة سواء من دورات مجانية أو كورسات مدفوعة، حيث يمكنك بحرية استكشاف ومشاهدة جميع دورات تدرب أكثر من 750 دورة تدريبية عربية مسجلة بالإضافة إلى الدورات المباشرة والكتب والملخصات الحصرية باشتراك شهري واحد. 
                            </div>
                            <Link href="/subscription">
                                <Button>
                                    اكتشف الآن
                                </Button>
                            </Link>
                        </Col>

                    </Row>

                    :

                    <div className={styles["tadarab-unlimited-mobile-view"]}>
                        <div>
                            <div className={styles["tadarab-unlimited-mobile-view__img"]}>
                                <img loading="lazy" src={"/images/tadarab-unlimited.png"} alt="تدرب للدورات المجانية والمدفوعة" />
                            </div>
                        </div>
                        <div className={styles["tadarab-unlimited-mobile-view__brief"]}>
                            <div>
                                <span> اكتشف </span>
                                <span> تدرب بلا حدود </span>
                            </div>
                            <div>
                            منصة تدرب تقدم لك باقات متنوعة سواء من دورات تدريبية مجانية أو كورسات مدفوعة، حيث يمكنك بحرية استكشاف ومشاهدة جميع دورات تدرب أكثر من 750 دورة تدريبية عربية مسجلة بالإضافة إلى الدورات المباشرة والكتب والملخصات الحصرية باشتراك شهري واحد. 
                            </div>
                            <Link href="/subscription">
                                <Button>
                                    اكتشف الآن
                                </Button>
                            </Link>
                        </div>

                    </div>
            }

        </>
    )
}
