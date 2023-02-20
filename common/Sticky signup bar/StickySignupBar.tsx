import React, { useEffect } from 'react';
import styles from "./sticky-signup-bar.module.css";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Router, { useRouter } from "next/router";
import { setCheckoutType } from "configurations/redux/actions/checkoutType";
import SubscriptionValues from "modules/_Shared/utils/SubscriptionValues";

export default function StickySignupBar() {
    const dispatch = useDispatch();
    const Router = useRouter();
    const userStatus = useSelector((state: any) => state.userAuthentication.isUserAuthenticated);


    const handleSubscriptionBtn = (e: any) => {
        e.preventDefault();
        dispatch(setCheckoutType("subscription"));
            Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}subscription-plans`);
    }

    const scrollingHandler = () => {
        const stickyBar: any = document.getElementById("sticky-signup-bar");
        if (window.scrollY > 400) {
            if (window.innerWidth > 576) {
                stickyBar ? stickyBar.style.display = "none" : null;
            } else {
                stickyBar ? stickyBar.style.display = "flex" : null;
            }
        }
        else {
            stickyBar ? stickyBar.style.display = "none" : null;
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
