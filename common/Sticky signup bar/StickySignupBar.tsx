import React, { useEffect, memo } from 'react';
import styles from "./sticky-signup-bar.module.css";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Router, { useRouter } from "next/router";
import { setCheckoutType } from "configurations/redux/actions/checkoutType";
import SubscriptionValues from "modules/_Shared/utils/SubscriptionValues";

function StickySignupBar() {
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

    const scrollingHandler = () => {
        const stickyBar: any = document.getElementById("sticky-signup-bar");
        if (window.scrollY > 400) {
            if (window.innerWidth > 576) {
                stickyBar ? stickyBar.style.visibility = "hidden" : null;
            } else {
                stickyBar ? stickyBar.style.visibility = "visible" : null;
            }
        }
        else {
            stickyBar ? stickyBar.style.visibility = "hidden" : null;
        }
    }

    useEffect(() => {
        scrollingHandler();
        window.addEventListener("scroll", () => {
            scrollingHandler();
        });
        return () => {
            window.removeEventListener("scroll", () => {
                return;
            });
        }
    }, []);


    return (
        <>
            <div id="sticky-signup-bar" className={styles["sticky-signup-bar"]}>
                <Button id="sticky-signup-bar-btn" onClick={() => { handleSubscriptionBtn(event) }}>
                    اشترك الآن
                </Button>
                <SubscriptionValues />
            </div>
        </>
    )
}

export default memo(StickySignupBar);
