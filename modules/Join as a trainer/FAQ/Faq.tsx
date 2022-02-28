import React from 'react';
import styles from "./faq.module.css";
import { Row,Col,Accordion } from "react-bootstrap";
import { SearchIcon, ChevronLeftIcon } from "common/Icons/Icons";

export default function Faq() {
  return (
    <Row className={styles["faq__row"]}>
        <Col xs={12} className={styles["faq"]}>
            <div className={styles["faq__title"]}>
                <div>الأسئلة الشائعة</div>
                <div>عن نظام الاشتراك الشهري</div>
            </div>

            <Accordion className={styles["faq__accordion"]}>

              <Accordion.Item
                eventKey="0"
                className={styles["faq__accordion__item"]}
              >
                <Accordion.Header className={styles["faq__accordion__header"]}>
                   ما هو نظام تدرب الاشتراك الشهري؟
                </Accordion.Header>
                <Accordion.Body  className={styles["faq__accordion__body"]}>
                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item
                eventKey="1"
                className={styles["faq__accordion__item"]}
              >
                <Accordion.Header className={styles["faq__accordion__header"]}>
                كيف اشترك في تدرب؟
                </Accordion.Header>
                <Accordion.Body  className={styles["faq__accordion__body"]}>
                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item
                eventKey="2"
                className={styles["faq__accordion__item"]}
              >
                <Accordion.Header className={styles["faq__accordion__header"]}>
                هل كل الدورات متاحة في الاشتراك؟
                </Accordion.Header>
                <Accordion.Body  className={styles["faq__accordion__body"]}>
                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item
                eventKey="3"
                className={styles["faq__accordion__item"]}
              >
                <Accordion.Header className={styles["faq__accordion__header"]}>
                ما هو نظام الاشتراك الشهري على منصة تدرب؟
                </Accordion.Header>
                <Accordion.Body  className={styles["faq__accordion__body"]}>
                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها.
                </Accordion.Body>
              </Accordion.Item>
        </Accordion>

        <div className={styles["faq__contact-us"]}>
          <span> هل لديك سؤال؟ </span>
          <span> تواصل معنا </span>
        </div>
        </Col>
    </Row>
  )
}
