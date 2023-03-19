import React from 'react';
import styles from "./faqs.module.css";
import { Row, Col, Accordion } from "react-bootstrap";
import { contactUsHandler } from "modules/_Shared/utils/contactUs";
import faqs from "./faqs.json";

export default function Faqs() {
    return (
        <Row className={styles["faq__row"]}>
            <Col xs={12} className={styles["faq"]}>
                <div className={styles["faq__title"]}>
                    <div>الأسئلة الشائعة</div>
                    <div>عن التدريب على منصة تدرب</div>
                </div>

                <Accordion defaultActiveKey="0" className={styles["faq__accordion"]}>

                    {faqs.map((faq: any, i: number) => {
                        return (
                            <Accordion.Item key={i}
                                eventKey={i.toString()}
                                className={styles["faq__accordion__item"]}>
                                <Accordion.Header className={styles["faq__accordion__header"]}>
                                    {faq.q}
                                </Accordion.Header>
                                <Accordion.Body className={styles["faq__accordion__body"]} >
                                    {faq.a}
                                </Accordion.Body>
                            </Accordion.Item>
                        )
                    })
                    }
                </Accordion>

                <div className={styles["faq__contact-us"]}>
                    <span> هل لديك سؤال؟ </span>
                    <span onClick={() => { contactUsHandler() }}> تواصل معنا </span>
                </div>
            </Col>
        </Row>
    )
}
