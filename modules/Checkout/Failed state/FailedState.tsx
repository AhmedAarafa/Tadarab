import React from 'react'
import { Row, Col, Button, Form, Card } from "react-bootstrap";
import styles from "./failed-state.module.css";

export default function FailedState() {
    return (
        <>
         <Row className={styles["failed-state-row"]}>
            <Col xs={12} className={styles["failed-state"]}>
            <svg className={styles["failed-state__img"]} xmlns="http://www.w3.org/2000/svg" width="7rem" height="6.75rem" viewBox="0 0 100 100">
                <g id="error" transform="translate(0.312 0.143)">
                    <g id="Group_11910" data-name="Group 11910" transform="translate(-0.312 -0.239)">
                    <circle id="Ellipse_262" data-name="Ellipse 262" cx="50" cy="50" r="50" transform="translate(0 0.096)" fill="#e6a0a5"/>
                    </g>
                    <path id="exclamation-solid" d="M31.625,42.188a7.812,7.812,0,1,1-7.812-7.812A7.821,7.821,0,0,1,31.625,42.188ZM16.9,2.461l1.328,26.562a2.344,2.344,0,0,0,2.341,2.227h6.479a2.344,2.344,0,0,0,2.341-2.227L30.721,2.461A2.344,2.344,0,0,0,28.38,0H19.245A2.344,2.344,0,0,0,16.9,2.461Z" transform="translate(25.688 24.857)" fill="#fff"/>
                </g>
            </svg>


            <div className={styles["failed-state__purchasing-failed"]}> حدث خطأ اثناء عملية الدفع </div>
            <div className={styles["failed-state__purchasing-failed-brief"]}> لقد حدث خطأ. حاول مرة أخرى لإكمال عملية الشراء </div>
            <Button className={styles["failed-state__btn"]}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="1.25rem" viewBox="0 0 20 20">
                     <path id="retry" d="M18.018,8a9.966,9.966,0,0,1,6.889,2.77l1.44-1.44A.968.968,0,0,1,28,10.013v5.406a.968.968,0,0,1-.968.968H21.627a.968.968,0,0,1-.684-1.652l1.683-1.683A6.774,6.774,0,1,0,22.461,23.1a.483.483,0,0,1,.66.022l1.6,1.6a.485.485,0,0,1-.019.7A10,10,0,1,1,18.018,8Z" transform="translate(-8 -8)" fill="#fff"/>
                </svg>
                <span> حاول الدفع مرة آخرى </span>

            </Button>
            <div className={styles["failed-state__back-to-main-page"]}> اذهب للصفحة الرئيسية </div>

            </Col>
        </Row>
            
        </>
    )
}
