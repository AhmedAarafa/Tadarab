import React from 'react';
import styles from "./subscription-benefits.module.css";
import { Row, Col } from "react-bootstrap";
import { TickIcon } from "common/Icons/Icons";

export default function SubscriptionBenefits() {
    return (
        <>
            <Row className={styles["subscription-benefits"]}>
                <Col className={styles["subscription-benefits__title"]} sm={{ span: 6, order: 1 }} xs={{ span: 12, order: 1 }}>
                    <div>
                        <div>
                            ما المميزات في اشتراك
                        </div>
                        <span className={styles["subscription-benefits--important"]}>
                            تدرب بلا حدود
                        </span>
                        ؟
                    </div>
                </Col>
                <Col className={styles["subscription-benefits__benefits"]} sm={{ span: 6, order: 2 }} xs={{ span: 12, order: 2 }}>

                    <div className={styles["subscription-benefits__benefits"]}>

                        <div className={styles["subscription-benefits__benefits__list-item"]}>
                            <div>
                                <TickIcon />
                            </div>
                            <span>
                                مشاهدة بلا حدود لجميع الدورات بالمنصة (أكثر من
                                <span className={styles["subscription-benefits--important"]}>
                                    700
                                </span>
                                دورة تدريبية).
                            </span>
                        </div>
                        <div className={styles["subscription-benefits__benefits__list-item"]}>
                            <div>
                                <TickIcon />
                            </div>
                            <span>
                                <span className={styles["subscription-benefits--important"]}>
                                    دورات جديدة
                                </span>
                                تضاف شهريًا.
                            </span>
                        </div>
                        <div className={styles["subscription-benefits__benefits__list-item"]}>
                            <div>
                                <TickIcon />
                            </div>
                            <span>
                                عدد لا نهائي من
                                <span className={styles["subscription-benefits--important"]}>

                                    شهادات
                                </span>
                                إتمام الدورات.
                            </span>
                        </div>
                        <div className={styles["subscription-benefits__benefits__list-item"]}>
                            <div>
                                <TickIcon />
                            </div>
                            <span>
                                ملخصات
                                <span className={styles["subscription-benefits--important"]}>

                                    كتب إلكترونية
                                </span>
                                حصرية.
                            </span>
                        </div>
                        <div className={styles["subscription-benefits__benefits__list-item"]}>
                            <div>
                                <TickIcon />
                            </div>
                            <span>
                                دورات
                                <span className={styles["subscription-benefits--important"]}>
                                    بث مباشر
                                </span>
                                تفاعلية حصرية.
                            </span>
                        </div>
                        <div className={styles["subscription-benefits__benefits__list-item"]}>
                            <div>
                                <TickIcon />
                            </div>
                            <span>
                                إمكانية متابعة الدورات من
                                <span className={styles["subscription-benefits--important"]}>
                                    أي جهاز
                                </span>
                                وبأي وقت.
                            </span>
                        </div>
                        <div className={styles["subscription-benefits__benefits__list-item"]}>
                            <div>
                                <TickIcon />
                            </div>
                            <span>
                                إمكانية
                                <span className={styles["subscription-benefits--important"]}>
                                    تحميل وطباعة المرفقات
                                </span>
                                والتمارين لسهولة التطبيق.
                            </span>
                        </div>
                        <div className={styles["subscription-benefits__benefits__list-item"]}>
                            <div>
                                <TickIcon />
                            </div>
                            <span>
                                لا يوجد التزام، يمكنك
                                <span style={{ fontWeight: "700" }} className={styles["subscription-benefits--important"]}>
                                    إلغاء الاشتراك
                                </span>
                                في أي وقت.
                            </span>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}
