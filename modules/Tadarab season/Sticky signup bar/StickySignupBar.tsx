import React, { useEffect } from 'react';
import styles from "./sticky-signup-bar.module.css";
import { Button } from "react-bootstrap";

export default function StickySignupBar() {

    const scrollingHandler = () => {
        const stickyBar: any = document.getElementById("sticky-signup-bar");
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
            <div id="sticky-signup-bar" className={styles["sticky-signup-bar"]}>
                <Button id="sticky-signup-bar-btn">
                    انشاء حساب جديد
                </Button>
                <div>احصل على كل الدورات باشتراك يبدأ من ٦ دك/ش </div>
            </div>
        </>
    )
}
