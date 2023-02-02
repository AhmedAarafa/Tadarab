import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import styles from "./notification-bar.module.css";
import { CloseIcon } from "common/Icons/Icons";
import useResize from "custom hooks/useResize";
import { useDispatch, useSelector } from "react-redux";
import Router, { useRouter } from "next/router";
import { setCheckoutType } from "configurations/redux/actions/checkoutType";

export default function NotificationBar() {
    const [isMobileView, setIsMobileView] = useState(false);
    const userStatus = useSelector((state: any) => state.userAuthentication.isUserAuthenticated);
    const paymentStep = useSelector((state: any) => state.paymentStep);
    const dispatch = useDispatch();
    const Router = useRouter();
    const [isInPaymentProcess, setIsInPaymentProcess] = useState(false);

    const hideNotificationBar = () => {
        let notifBar: any = document.getElementById('notification-bar');
        let navbar: any = document.getElementById("nav");
        notifBar.style.cssText = `display:none`;
        navbar.style.cssText = `top:0;`;
    }


    useEffect(() => {
        console.log("Router", Router.asPath);
        console.log('Router.asPath.includes("plans")', Router.asPath.includes("plans"));
        console.log('Router.asPath.includes("subscription")', Router.asPath.includes("subscription"));
        console.log('Router.asPath.includes("checkout")', Router.asPath.includes("checkout"));
        let notif_bar = document.getElementById("notification-bar");

        if ((Router.asPath.includes("checkout") || Router.asPath.includes("subscription") || Router.asPath.includes("plans"))) {
            console.log("yes");
            
            setIsInPaymentProcess(true);
            notif_bar ? notif_bar.style.cssText = `display:none !important` : null;

        } else {
            console.log("no");

            notif_bar ? notif_bar.style.cssText = `display:flex` : null;

        }
    })



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
                <div style={{ display: (userStatus || isInPaymentProcess) ? 'none' : 'flex' }} className={styles['notification-bar']} id="notification-bar">
                    <div>
                        <div>
                            {/* آخر فرصة للأستفادة من العرض | بمناسبة مرور ٦ سنوات على تأسيس منصة تدرب أكثر من ٨٠٠ دورة تدريبية بخصم ٧٥٪ كود الخصم T6 */}
                            احصل على أكثر من 900 دورة تدريبية باشتراك واحد | خصم 50٪ على الاشتراك السنوي لفترة محدودة
                            <span onClick={() => { handleSubscriptionBtn() }}>
                                ابدأ التعلم الأن
                            </span>
                        </div>
                    </div>
                    <div>
                        <div onClick={() => { hideNotificationBar() }}>
                            <CloseIcon color="#fff" />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
