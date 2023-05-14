/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React, { useState, memo } from 'react';
import styles from "./tadarab-unlimited.module.css";
import { Row, Col, Button } from "react-bootstrap"; 
import Link from "next/link";
import useResize from "custom hooks/useResize";

function TadarabUnlimited() {
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
                                <img loading="lazy" src={"/images/tadarab-unlimited.png"} alt="تدرب للدورات المجانية والمدفوعة" />
                            </div>
                        </Col>
                        <Col xs={7} className={styles["tadarab-unlimited__brief"]}>
                            <h3>
                                <span> اشترك </span>
                                <span>
                                    في
                                    تدرب بلا حدود
                                </span>
                            </h3>
                            <div className={styles["tadarab-unlimited__subscription-points"]}>
                                <div>مشاهدة أكثر من 1000 دورة تدريبية بالمنصة.</div>
                                <div>دورات جديدة تضاف شهريًا.</div>
                                <div>عدد لا نهائي من شهادات إتمام الدورات.</div>
                                <div>لا يوجد التزام، يمكنك إلغاء الاشتراك في أي وقت.</div>
                            </div>
                            <Link href="/subscription">
                                <Button>
                                    اشترك الآن
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
                                <span> اشترك </span>
                                <span>
                                    في
                                    تدرب بلا حدود
                                </span>
                            </div>
                            <div className={styles["tadarab-unlimited__subscription-points"]}>
                                <div>مشاهدة أكثر من 1000 دورة تدريبية بالمنصة.</div>
                                <div>دورات جديدة تضاف شهريًا.</div>
                                <div>عدد لا نهائي من شهادات إتمام الدورات.</div>
                                <div>لا يوجد التزام، يمكنك إلغاء الاشتراك في أي وقت.</div>
                            </div>
                            <Link href="/subscription">
                                <Button>
                                    اشترك الآن
                                </Button>
                            </Link>
                        </div>

                    </div>
            }

        </>
    )
}

export default memo(TadarabUnlimited);
