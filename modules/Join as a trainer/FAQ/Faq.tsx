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
                هل يمكنني تقديم دورة على تدرب؟
                </Accordion.Header>
                <Accordion.Body  className={styles["faq__accordion__body"]}>
                نعم بالتأكيد منصة تدرب تتشرف بكل صاحب رسالة وخبرة وعلم لنشر المحتوى العربى بدون حدود جغرافية
                  </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item
                eventKey="1"
                className={styles["faq__accordion__item"]}
              >
                <Accordion.Header className={styles["faq__accordion__header"]}>
                ما هي امتيازات تقديم دورة على منصة تدرب؟
                </Accordion.Header>
                <Accordion.Body  className={styles["faq__accordion__body"]}>
                منصة تدرب تقدم نسب مبيعات تنافسية للمدربين المقدمين للمحتوى على المنصة يمكنك زيارة صفحة شروط المدربين للمزيد من التفاصيل.
                  </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item
                eventKey="2"
                className={styles["faq__accordion__item"]}
              >
                <Accordion.Header className={styles["faq__accordion__header"]}>
                هل يمكنني إنشاء دورتي التدريبية ورفعها على المنصة بنفسي؟
                </Accordion.Header>
                <Accordion.Body  className={styles["faq__accordion__body"]}>
                نعم نوفر لوحة تحكم مميزة للمدربين يمكن من خلالها إنشاء دورة تدريبية ورفع جميع الفيديوهات والمرفقات والمحتوى وتسعير الدورة وإرسالها للمراجعة من قبل فريق الجودة لنشرها على المنصة او ارسال بعض الملاحظات عليها ليتم نشرها. 
                  </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item
                eventKey="3"
                className={styles["faq__accordion__item"]}
              >
                <Accordion.Header className={styles["faq__accordion__header"]}>
                هل تقدمون خدمات التصوير للمدربين؟
                </Accordion.Header>
                <Accordion.Body  className={styles["faq__accordion__body"]}>
                نعم بالطبع منصة تدرب خبرة ١٠ سنوات في مجال التدريب ولدينا الكثير من خدمات المدربين مثل كتابة المحتوى وإعداد المدرب و التسويق للدورات التدريبية و التصوير  في استديوهات تدرب في دولة الكويت وجمهورية مصر العربية ونعمل للتوسع وإنشاء استديوهات في باقي دول الخليج .
                  
                  </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item
                eventKey="4"
                className={styles["faq__accordion__item"]}
              >
                <Accordion.Header className={styles["faq__accordion__header"]}>
                كيف يمكنني التواصل معكم؟
                </Accordion.Header>
                <Accordion.Body  className={styles["faq__accordion__body"]}>
                يمكنك التواصل معنا عن طريق ارسال ايميل على info@tadarab.com او مراسلتنا على رقم الواتساب 0096599002199
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
