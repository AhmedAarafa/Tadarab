/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from "react-bootstrap";
import styles from "./subscription-plans-page.module.css";
import { toggleLoader } from 'modules/_Shared/utils/toggleLoader';
import { ChevronLeftIcon, TickIcon } from 'common/Icons/Icons';

export default function SubscriptionPlansPage() {

    const [selectedPlan, setSelectedPlan] = useState("yearly");

    useEffect(() => {
        toggleLoader('hide');
    }, []);

    return (
        <Row className={styles["subscription-plans-page"]}>
            <Col xs={12} className={styles["subscription-plans-page__title"]}>
                <div>باقــــــــات</div>
                <div>tadarab</div>
                <div>بلا حـــدود</div>
            </Col>
            <Col xs={12} className={styles["subscription-plans-page__plan"]}>
                <div className={styles["subscription-plans-page__plans-options"]}>
                    <div>
                        <div className={styles["subscription-plans-page__plans-options__best-value-label"]}>أفضل قيمة</div>
                        <span className={`${selectedPlan == 'yearly' && styles['selected']}`}
                            onClick={() => { setSelectedPlan('yearly') }}>
                            اشتراك سنوي
                        </span>
                    </div>
                    <span className={`${selectedPlan == 'monthly' && styles['selected']}`}
                        onClick={() => { setSelectedPlan('monthly') }}>
                        اشتراك شهري
                    </span>
                </div>
                <div className={styles["subscription-plans-page__plan-card"]}>
                    <div>
                        <div className={styles["subscription-plans-page__plan-card__price-box"]}>
                            <span>378</span>
                            <span>ج.م/ شهرياً</span>
                        </div>

                        <div className={styles["subscription-plans-page__plan-card__pay-per-unit"]}>
                            تدفع سنوياً وهتوفر 50%
                        </div>

                    </div>

                    <Button className={styles["subscription-plans-page__plan-card__cta"]}>
                        اشترك سنوي 4,538 ج.م
                        <ChevronLeftIcon color='#f5f5f5' />
                    </Button>


                    <div className={styles["subscription-plans-page__plan-card__subscription-points"]}>
                        <div>
                            <TickIcon />
                            <span>مشاهدة بلا حدود لجميع الدورات بالمنصة (أكثر من 850 دورة)</span>
                        </div>
                        <div>
                            <TickIcon />
                            <span>دورات جديدة تضاف شهريًا</span>
                        </div>
                        <div>
                            <TickIcon />
                            <span>عدد لا نهائي من شهادات إتمام الدورات</span>
                        </div>
                        <div>
                            <TickIcon />
                            <span>ملخصات كتب إلكترونية حصرية</span>
                        </div>
                        <div>
                            <TickIcon />
                            <span>إمكانية تحميل وطباعة المرفقات والتمارين لسهولة التطبيق</span>
                        </div>
                        <div>
                            <TickIcon />
                            <span>لا يوجد التزام، يمكنك إلغاء الاشتراك في أي وقت</span>
                        </div>

                    </div>

                    <div className={styles["subscription-plans-page__plan-card__terms-and-conditions"]}>
                        <div>
                            نظام الإشتراكات يطبق الشروط والاحكام لمنصة تدرب
                        </div>
                        <div>
                            العمليات تتم بالدينار الكويتي وما يعادلها
                        </div>
                    </div>

                </div>

            </Col>
        </Row>
    )
}
