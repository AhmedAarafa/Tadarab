import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import styles from "./notification-bar.module.css";
import { CloseIcon } from "common/Icons/Icons";
import useResize from "custom hooks/useResize";
import { useDispatch, useSelector } from "react-redux";
import Router, { useRouter } from "next/router";
import { setCheckoutType } from "configurations/redux/actions/checkoutType";
import Link from "next/link";

export default function NotificationBar() {
    const [isMobileView, setIsMobileView] = useState(false);
    const userStatus = useSelector((state: any) => state.userAuthentication.isUserAuthenticated);
    const dispatch = useDispatch();
    const Router = useRouter();

    const hideNotificationBar = () => {
        let notifBar: any = document.getElementById('notification-bar');
        let navbar: any = document.getElementById("nav");
        notifBar.style.cssText = `display:none`;
        navbar.style.cssText = `top:0;`;
    }

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
                <div style={{display: userStatus ? 'none' : 'flex'}} className={styles['notification-bar']} id="notification-bar">
                    <div>
                        <div>
                            شاهد الآن بث مباشر دورة الدليل الشامل لصناعة علامة تجارية ناجحة 
                            <a href="https://marketing.tadarab.com/funnel/tadarab-live-3/l1/" target="__blank">
                                أضغط هنا لمشاهدة البث
                            </a>
                            {/* <span onClick={() => { handleSubscriptionBtn() }}>
                            أضغط هنا لمشاهدة البث
                            </span> */}
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
