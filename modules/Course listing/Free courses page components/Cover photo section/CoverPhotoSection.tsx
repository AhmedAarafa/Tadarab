/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Col, Button } from "react-bootstrap";
import styles from "./cover-photo.module.css";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function CoverPhotoSection() {
    const userStatus = useSelector((state: any) => state.userAuthentication.isUserAuthenticated);

    return (
        <Col xs={12} className={styles["cover-photo-box"]}>
            <img src="https://s3.me-south-1.amazonaws.com/tadarab2.0-bahrain/HeroSection-copy.jpg"
                alt="دورات مجانية" className={styles["cover-photo-box__cover-img"]} />
            <h1 className={styles["cover-photo-box__title"]}>
                دورات مجانية عن بعد
            </h1>
            {userStatus == false &&
                <div className={styles["cover-photo-box__sign-up-section"]}>
                    <Link href="/sign-up?type=free">
                        <Button className={styles["cover-photo-box__sign-up-btn"]}>
                            ابدأ التعلم الآن
                        </Button>
                    </Link>
                    <div className={styles["cover-photo-box__brief"]}>
                        تابع الدورات التدريبية الآن مجاناً
                    </div>
                </div>
            }
        </Col>
    )
}
