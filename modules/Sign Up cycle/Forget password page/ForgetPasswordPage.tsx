/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Row, Col, Button, Form } from "react-bootstrap";
import styles from "./forget-password-page.module.css"; 

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
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="1.438rem" viewBox="0 0 20 15">
                        <path id="email" d="M19.621,68.953a.235.235,0,0,1,.379.184v7.988A1.875,1.875,0,0,1,18.125,79H1.875A1.875,1.875,0,0,1,0,77.125V69.141a.234.234,0,0,1,.379-.184c.875.68,2.035,1.543,6.02,4.438.824.6,2.215,1.867,3.6,1.859,1.395.012,2.813-1.281,3.605-1.859C17.59,70.5,18.746,69.633,19.621,68.953ZM10,74c.906.016,2.211-1.141,2.867-1.617,5.184-3.762,5.578-4.09,6.773-5.027A.935.935,0,0,0,20,66.617v-.742A1.875,1.875,0,0,0,18.125,64H1.875A1.875,1.875,0,0,0,0,65.875v.742a.94.94,0,0,0,.359.738c1.2.934,1.59,1.266,6.773,5.027C7.789,72.859,9.094,74.016,10,74Z" transform="translate(0 -64)" fill="#999"/>
                    </svg>
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
