/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Col, Button } from "react-bootstrap";
import styles from "./cover-photo-section.module.css";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { setCheckoutType } from "configurations/redux/actions/checkoutType";
import Router, { useRouter } from "next/router";
import SubscriptionValues from "modules/_Shared/utils/SubscriptionValues";

export default function CoverPhotoSection() {
    const dispatch = useDispatch();
    const Router = useRouter();
    const userStatus = useSelector((state: any) => state.userAuthentication.isUserAuthenticated);
    const userSubscInfo = useSelector((state: any) => state.userAuthentication.isSubscribed);

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
        <Col xs={12} className={styles["cover-photo-box"]}>
            <img src="https://s3.me-south-1.amazonaws.com/tadarab2.0-bahrain/HeroSection-copy.jpg"
                alt="دورات مجانية" className={styles["cover-photo-box__cover-img"]} />
            <div className={styles["cover-photo-box__title-box"]}>
                <h1 className={styles["cover-photo-box__title"]}>
                    إستكشف مكتبة دورات تدرب
                </h1>
                <div className={styles["cover-photo-box__title-brief"]}>
                    أكبر محتوى تدريبي بالخليج والوطن العربى
                </div>
            </div>
            {userStatus == false &&
                <div className={styles["cover-photo-box__sign-up-section"]}>
                    {userSubscInfo == false && <Button onClick={() => { handleSubscriptionBtn(event) }} className={styles["cover-photo-box__signup-btn"]}>
                        {userStatus ?
                            "ابدأ التعلم الاّن"
                            :
                            "اشترك الآن"
                        }
                    </Button>}
                    {userSubscInfo == false &&
                        <div className={styles["cover-photo-box__brief"]}>
                            <SubscriptionValues />
                        </div>
                    }
                </div>
            }
        </Col>
    )
}
