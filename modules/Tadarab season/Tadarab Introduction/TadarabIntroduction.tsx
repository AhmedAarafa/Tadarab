/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from "./tadarab-introduction.module.css";
import { Row, Col, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Router, { useRouter } from "next/router";
import { setCheckoutType } from "configurations/redux/actions/checkoutType";


export default function TadarabIntroduction(props: any) {
    const dispatch = useDispatch();
    const Router = useRouter();
    const userStatus = useSelector((state: any) => state.userAuthentication.isUserAuthenticated);


    const handleSubscriptionBtn = (e: any) => {
        e.preventDefault();
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
            <Row className={styles["tadarab-introduction"]}>
                <Col xs={{ span: 12, order: 2 }} sm={{ span: 4, order: 1 }} className={styles["tadarab-introduction__description-box"]}>
                    <div className={styles["tadarab-introduction__description-box__title"]}>
                        أكبر حدث تدريبي
                        ٢٠٢٢
                    </div>
                    <img className={styles["tadarab-introduction__description-box__img"]} src="images/TadarabSeason.png" alt="موسم تدرب" />
                    <div className={styles["tadarab-introduction__description-box__brief"]}>
                        أول موسم تدريبي بالخليج والشرق والأوسط يهدف لتطوير المتدرب وطرح
                        أكبر عدد من الدورات التدريبية مقدمة من أفضل الخبراء
                        بالخليج والوطن العربي.
                    </div>

                    <Form className={styles["tadarab-introduction__description-box__form"]}>
                        {/* <Form.Control type="email" placeholder="ادخل بريدك الالكتروني" /> */}

                        <Button type="submit" onClick={() => { handleSubscriptionBtn(event) }}>
                            انشاء حساب جديد
                        </Button>
                    </Form>
                    <div className={styles["tadarab-introduction__description-box__subsc-pricing"]}>
                        يبدأ سعر الاشتراك من
                        {` ${props?.currency.subscription_value && props?.currency.subscription_value} `}
                        { props?.currency.curr_symbol && props?.currency.curr_symbol }
                        /
                        ش
                        يشمل جميع دورات تدرب والموسم التدريبي
                    </div>
                </Col>
                <Col xs={{ span: 12, order: 1 }} sm={{ span: 8, order: 2 }} className={styles["tadarab-introduction__video"]}>
                    <img src="images/trainersgif-.gif" alt="موسم تدرب" />
                </Col>
            </Row>
        </>
    )
}
