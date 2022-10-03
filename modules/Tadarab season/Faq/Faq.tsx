import React from 'react';
import styles from "./faq.module.css";
import { Row, Col, Accordion } from "react-bootstrap";
import { contactUsHandler } from "modules/_Shared/utils/contactUs";

export default function Faq() {
    return (
        <Row className={styles["faq__row"]}>
            <Col xs={12} className={styles["faq"]}>
                <div className={styles["faq__title"]}>
                    <div>الأسئلة الشائعة</div>
                    <div>عن نظام تدرب بلا حدود</div>
                </div>

                <Accordion defaultActiveKey="" className={styles["faq__accordion"]}>

                    <Accordion.Item
                        eventKey="0"
                        className={styles["faq__accordion__item"]}
                    >
                        <Accordion.Header className={styles["faq__accordion__header"]}>
                            ما هو تدرب بلا حدود؟
                        </Accordion.Header>
                        <Accordion.Body className={styles["faq__accordion__body"]}>
                            <div>

                                تدرب بلا حدود هو نظام اشتراك شهري بقيمة رمزية، يتيح لك الاستفادة من محتوى المنصة بالكامل
                                ومتابعة مئات الدورات الأكثر طلبًا ومبيعًا في الخليج، يقدمها أكفأ المدربين في مختلف المجالات
                                على مستوى الوطن العربي، بالإضافة إلى إمكانية حضور جميع دورات البث المباشر التفاعلية
                                أو متابعتها مسجلة في أي وقت يناسبك.

                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item
                        eventKey="1"
                        className={styles["faq__accordion__item"]}
                    >
                        <Accordion.Header className={styles["faq__accordion__header"]}>
                            هل سأتمكن من إلغاء الاشتراك في أي وقت؟
                        </Accordion.Header>
                        <Accordion.Body className={styles["faq__accordion__body"]}>
                            نعم بكل تأكيد، يمكنك إلغاء اشتراكك في تدرب بلا حدود في أي وقت تريده.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item
                        eventKey="2"
                        className={styles["faq__accordion__item"]}
                    >
                        <Accordion.Header className={styles["faq__accordion__header"]}>
                            هل يوجد ضمان استرداد على اشتراك تدرب بلا حدود؟
                        </Accordion.Header>
                        <Accordion.Body className={styles["faq__accordion__body"]}>
                            تدرب بلا حدود نظام اشتراك شهري لا يتوفر به نظام الاسترداد.
                        </Accordion.Body>
                    </Accordion.Item>


                    <Accordion.Item
                        eventKey="3"
                        className={styles["faq__accordion__item"]}
                    >
                        <Accordion.Header className={styles["faq__accordion__header"]}>
                            هل سأوفر المال من خلال اشتراكي في تدرب بلا حدود؟
                        </Accordion.Header>
                        <Accordion.Body className={styles["faq__accordion__body"]}>
                            نعم! إذا كنت تأخذ أكثر من دورة بانتظام ، يمكنك توفير الكثير كل شهر!. كلما تعلمت أكثر ، كلما وفرت أكثر!
                        </Accordion.Body>
                    </Accordion.Item>


                    <Accordion.Item
                        eventKey="4"
                        className={styles["faq__accordion__item"]}
                    >
                        <Accordion.Header className={styles["faq__accordion__header"]}>
                            كم عدد الشهادات التي يمكنني الحصول عليها مع تدرب بلا حدود؟
                        </Accordion.Header>
                        <Accordion.Body className={styles["faq__accordion__body"]}>
                            لا يوجد حد! ستحصل على شهادة لكل دورة تكملها.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <div className={styles["faq__contact-us"]}>
                    <span> هل لديك سؤال؟ </span>
                    <span onClick={() => { contactUsHandler() }}> تواصل معنا </span>
                </div>
            </Col>
        </Row>
    )
}
