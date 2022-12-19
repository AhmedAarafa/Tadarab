/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import styles from "./tadarab-unlimited.module.css";
import { Row, Col, Button } from "react-bootstrap";
import Link from "next/link";
import useResize from "custom hooks/useResize";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { setCheckoutType } from "configurations/redux/actions/checkoutType";

export default function TadarabUnlimited() {
    const [isMobileView, setIsMobileView] = useState(false);
    const userStatus = useSelector((state: any) => state.userAuthentication.isUserAuthenticated);
    const dispatch = useDispatch();
    const Router = useRouter();
    const { slug } = Router.query;

    const viewportWidthDetector = () => {
        if (window.innerWidth >= 576) {
            setIsMobileView(false);
        } else {
            setIsMobileView(true);
        }
    }
    useResize(viewportWidthDetector);


    const handleSubscriptionBtn = () => {
        dispatch(setCheckoutType("subscription"));
        if (userStatus) {
            Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}checkout/payment/?checkout_type=subscription`);
        } else {
            Router.push({
                pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}sign-up`,
                query: { from_subscription: "checkout/payment/?checkout_type=subscription" }
            })
        }
    }

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
                                <div>مشاهدة لجميع الدورات بالمنصة (أكثر من 850 دورة تدريبية).</div>
                                <div>دورات جديدة تضاف شهريًا.</div>
                                <div>عدد لا نهائي من شهادات إتمام الدورات.</div>
                                <div>لا يوجد التزام، يمكنك إلغاء الاشتراك في أي وقت.</div>
                            </div>
                            <Button onClick={() => { handleSubscriptionBtn() }}>
                                اشترك الآن
                            </Button>
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
                                <div>مشاهدة لجميع الدورات بالمنصة (أكثر من 850 دورة تدريبية).</div>
                                <div>دورات جديدة تضاف شهريًا.</div>
                                <div>عدد لا نهائي من شهادات إتمام الدورات.</div>
                                <div>لا يوجد التزام، يمكنك إلغاء الاشتراك في أي وقت.</div>
                            </div>
                            <Button onClick={() => { handleSubscriptionBtn() }}>
                                اشترك الآن
                            </Button>
                        </div>

                    </div>
            }

        </>
    )
}
