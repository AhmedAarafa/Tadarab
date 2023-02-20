/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from "react-bootstrap";
import styles from "./subscription-plans-page.module.css";
import { toggleLoader } from 'modules/_Shared/utils/toggleLoader';
import { ChevronLeftIcon, TickIcon } from 'common/Icons/Icons';
import { axiosInstance } from "configurations/axios/axiosConfig";
import Router, { useRouter } from "next/router";
import { useDispatch, useSelector } from 'react-redux';
import { setCheckoutType } from "configurations/redux/actions/checkoutType";

export default function SubscriptionPlansPage() {

    const [selectedPlan, setSelectedPlan] = useState("yearly");
    const [paymentSettings, setPaymentSettings] = useState<any>([]);
    const router = useRouter();
    const dispatch = useDispatch();
    const userStatus = useSelector((state: any) => state.userAuthentication.isUserAuthenticated);


    useEffect(() => {
        toggleLoader("show");

        axiosInstance
            .get(`subscription/plans`)
            .then(function (response: any) {
                if (JSON.stringify(response.status).startsWith("2")) {
                    setPaymentSettings(response?.data?.data?.subscription_plans);
                }
                toggleLoader("hide");
                if (Router.asPath.includes("subscription-plans")) {
                    let FOOTER = document.getElementsByTagName("footer")[0];
                    FOOTER ? FOOTER.style.cssText = `display:none` : null;
                }
            })
            .catch(function (error) {
                toggleLoader("hide");
                console.log(error);
            });

            return ()=>{
                let FOOTER = document.getElementsByTagName("footer")[0];
                FOOTER ? FOOTER.style.cssText = `display:block` : null;
            }

    }, []);

    const handleSubscriptionBtn = (e: any) => { 
        e.preventDefault();
        dispatch(setCheckoutType("subscription"));
        if (userStatus) {
            // Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}subscription-plans`);
            Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}checkout/payment/?checkout_type=subscription&splan=${selectedPlan}`);
        } else {
            Router.push({
                pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}sign-up`,
                query: { from_subscription_plans: `${selectedPlan}`}
            })
        }
    }

    return (
        <Row className={styles["subscription-plans-page"]}>
            <Col xs={12} className={styles["subscription-plans-page__title"]}>
                <div>باقــــــــات</div>
                <div>tadarab</div>
                <div>بلا حـــدود</div>
                <div>مميزات الاشتراك في افضل برنامج تدريبي عن بعد بالوطن العربي</div>
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
                            <span>
                                {selectedPlan == "yearly" && paymentSettings[0]?.sale_label}
                                {selectedPlan == "monthly" && paymentSettings[1]?.sale_label}
                                {" "}
                                {selectedPlan == "yearly" &&
                                    <span>
                                        {paymentSettings[0]?.discount_label.replace("ستوفر", "خصم")}
                                    </span>
                                }
                            </span>
                        </div>

                        <div className={styles["subscription-plans-page__plan-card__pay-per-unit"]}>
                            تدفع
                            {" "} {selectedPlan == "yearly" ? "سنوياً" : "شهرياً"} {" "}
                            {" "} {selectedPlan == "yearly" && "(ستوفر"} {" "}
                            {/* {" "} {selectedPlan == "yearly" && `${((paymentSettings[0]?.original_price / 12)*0.5)}`} {" "} */}
                            {/* {" "} {selectedPlan == "yearly" && `${paymentSettings[0]?.currency_symbol}/ش)`} {" "} */}
                            {" "} {selectedPlan == "yearly" && (paymentSettings[0]?.original_price - paymentSettings[0]?.total_pay)} {" "}
                            {" "} {selectedPlan == "yearly" && `${paymentSettings[0]?.currency_symbol})`} {" "}
                        </div>

                    </div>

                    <Button className={styles["subscription-plans-page__plan-card__cta"]}
                        onClick={() => {
                            handleSubscriptionBtn(event);
                        }}>
                        ابدأ التعلم
                        {/* {" "} {selectedPlan == "yearly" ? "سنوياً" : "شهرياً"} {" "} */}
                        {/* {" "} {selectedPlan == "yearly" ? paymentSettings[0]?.total_pay : paymentSettings[1]?.total_pay} {" "} */}
                        {/* {" "} {selectedPlan == "yearly" ? paymentSettings[0]?.currency_symbol : paymentSettings[1]?.currency_symbol} {" "} */}
                        <ChevronLeftIcon color='#f5f5f5' />
                    </Button>


                    <div className={styles["subscription-plans-page__plan-card__subscription-points"]}>
                        <div>
                            <div>

                                <TickIcon />
                            </div>
                            <span>
                                مشاهدة بلا حدود لجميع الدورات بالمنصة (أكثر من 1000 دورة)
                            </span>
                        </div>
                        <div>
                            <div>

                                <TickIcon />
                            </div>
                            <span>
                                ملخصات حصرية مجانية لأكثر الكتب مبيعًا في العديد من التخصصات المطلوبة
                            </span>
                        </div>
                        <div>
                            <div>

                                <TickIcon />
                            </div>
                            <span>
                                دعم تقني على مدار الساعة طوال الأسبوع
                            </span>
                        </div>
                        <div>
                            <div>

                                <TickIcon />
                            </div>
                            <span>
                                مشاهدة حصرية للدورات أثناء البث المباشر لأفضل المدربين بالوطن العربي
                            </span>
                        </div>


                        <div>
                            <div>

                                <TickIcon />
                            </div>
                            <span>دورات جديدة تضاف شهريًا</span>
                        </div>
                        <div>
                            <div>

                                <TickIcon />
                            </div>
                            <span>عدد لا نهائي من شهادات إتمام الدورات</span>
                        </div>
                        <div>
                            <div>

                                <TickIcon />
                            </div>
                            <span>إمكانية تحميل وطباعة المرفقات والتمارين لسهولة التطبيق</span>
                        </div>
                        <div>
                            <div>

                                <TickIcon />
                            </div>
                            <span> يمكنك إلغاء الاشتراك في أي وقت</span>
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
