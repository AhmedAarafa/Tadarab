/* eslint-disable @next/next/link-passhref */
import React, { useEffect } from 'react';
import styles from "./sticky-signup-bar.module.css";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Router, { useRouter } from "next/router";
import { setCheckoutType } from "configurations/redux/actions/checkoutType";
import Link from "next/link";

export default function StickySignupBar() {
    const dispatch = useDispatch();
    const Router = useRouter();
    const userStatus = useSelector((state: any) => state.userAuthentication.isUserAuthenticated);


    const scrollingHandler = () => {
        const stickyBar: any = document.getElementById("free-courses-page-sticky-signup-bar");
        if (window.scrollY > 400) {
            stickyBar ? stickyBar.style.display = "flex" : null;
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
            {
                !userStatus &&
                <div id="free-courses-page-sticky-signup-bar" className={styles["sticky-signup-bar"]}>
                    <Link href="/sign-up?type=free">
                        <Button id="free-courses-page-sticky-signup-bar-btn" >
                            انشاء حساب جديد
                        </Button>
                    </Link>
                    <div>قم بإنشاء حساب لتتابع الدورات المجانية الآن</div>
                </div>
            }
        </>
    )
}
