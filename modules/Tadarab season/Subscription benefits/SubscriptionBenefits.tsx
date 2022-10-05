import React from 'react';
import styles from "./subscription-benefits.module.css";
import { Row, Col, Button } from "react-bootstrap";
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
                    <Button>
                        انشاء حساب جديد
                    </Button>
                </Col>
                <Col sm={{ span: 6, order: 2 }} xs={{ span: 12, order: 2 }}>

                    <div className={styles["subscription-benefits__benefits"]}>

                        <div className={styles["subscription-benefits__benefits__list-item"]}>
                            <div>
                                <TickIcon />
                            </div>
                            <span>
                                مشاهدة بلا حدود لجميع الدورات بالمنصة (أكثر من
                                700
                                دورة تدريبية).
                            </span>
                        </div>
                        <div className={styles["subscription-benefits__benefits__list-item"]}>
                            <div>
                                <TickIcon />
                            </div>
                            <span>
                                دورات جديدة
                                تضاف شهريًا.
                            </span>
                        </div>
                        <div className={styles["subscription-benefits__benefits__list-item"]}>
                            <div>
                                <TickIcon />
                            </div>
                            <span>
                                عدد لا نهائي من
                                شهادات
                                إتمام الدورات.
                            </span>
                        </div>
                        <div className={styles["subscription-benefits__benefits__list-item"]}>
                            <div>
                                <TickIcon />
                            </div>
                            <span>
                                ملخصات
                                كتب إلكترونية
                                حصرية.
                            </span>
                        </div>
                        <div className={styles["subscription-benefits__benefits__list-item"]}>
                            <div>
                                <TickIcon />
                            </div>
                            <span>
                                دورات
                                بث مباشر
                                تفاعلية حصرية.
                            </span>
                        </div>
                        <div className={styles["subscription-benefits__benefits__list-item"]}>
                            <div>
                                <TickIcon />
                            </div>
                            <span>
                                إمكانية متابعة الدورات من
                                أي جهاز
                                وبأي وقت.
                            </span>
                        </div>
                        <div className={styles["subscription-benefits__benefits__list-item"]}>
                            <div>
                                <TickIcon />
                            </div>
                            <span>
                                إمكانية
                                تحميل وطباعة المرفقات
                                والتمارين لسهولة التطبيق.
                            </span>
                        </div>
                        <div className={styles["subscription-benefits__benefits__list-item"]}>
                            <div>
                                <TickIcon />
                            </div>
                            <span>
                                لا يوجد التزام، يمكنك
                                إلغاء الاشتراك
                                في أي وقت.
                            </span>
                        </div>
                    </div>
                    <Button>
                        انشاء حساب جديد
                    </Button>
                </Col>
            </Row>
        </>
    )
}
