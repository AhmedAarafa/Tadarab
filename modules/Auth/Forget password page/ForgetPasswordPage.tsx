/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Row, Col, Button, Form } from "react-bootstrap";
import styles from "./forget-password-page.module.css"; 
import { EnvelopeIcon } from "common/Icons/Icons";

export default function ForgetPasswordPage() {
    return (
        <>
        <Row className={styles["forget-password"]}>
            <Col xs={{span:12 , order:2}} sm={{span:7 , order:1}} className={styles["forget-password__forget-password-box"]}>
                <div className={styles["forget-password__forget-password-box__title"]}>
                    <div> نسيت كلمة المرور؟ </div>
                    <div> ادخل بريدك الالكتروني لتغيير كلمة المرور الخاص بك </div>
                </div>

                <div className={styles["forget-password__forget-password-box__email-field-container"]}>
                    <div className={styles["forget-password__forget-password-box__icon-wrapper"]}>
                    <EnvelopeIcon/>
                    </div>
                    <Form.Control type="email" placeholder="البريد الالكتروني" className={styles["forget-password__forget-password-box__email-field"]}/>
                </div>

                <Button className={styles["forget-password__forget-password-box__send-btn"]}>
                إرسال
                </Button>
            </Col>
            <Col xs={{span:12 , order:1}} sm={{span:5 , order:2}} className={styles["forget-password__img"]}>
                <img src="/images/forget password.png" alt="forget password" />
            </Col>

        </Row>
        </>
    )
}
