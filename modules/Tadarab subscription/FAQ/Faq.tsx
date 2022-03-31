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
                <div>عن نظام تدرب بلا حدود</div>
            </div>

            <Accordion className={styles["faq__accordion"]}>

              <Accordion.Item
                eventKey="0"
                className={styles["faq__accordion__item"]}
              >
                <Accordion.Header className={styles["faq__accordion__header"]}>
                ما هو تدرب بلا حدود؟
                </Accordion.Header>
                <Accordion.Body  className={styles["faq__accordion__body"]}>
                  <div>
                تدرب بلا حدود هو نظام إشتراك شهري يتيح للمشترك من خلاله الاستفادة من محتوى المنصة المدفوع عن من مئات الدورات التدريبية الافضل مبيعاَ في الخليج والوطن العربي ومقدمة من أفضل المدربين والخبراء في مجالاتهم.
                  </div>
                  <div>
                  بالاضافة لحضور الدورات المباشرة خلال البث المباشر او مشاهدنا مسجلة في اي وقت مناسب لك. 
                  </div>

                  </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item
                eventKey="1"
                className={styles["faq__accordion__item"]}
              >
                <Accordion.Header className={styles["faq__accordion__header"]}>
                هل يمكنني تجربة تدرب بلا حدود مجاناََ لمعرفة هل يناسب احتياجاتي أم لا ؟
                </Accordion.Header>
                <Accordion.Body  className={styles["faq__accordion__body"]}>
                نعم بكل ترحيب يمكنك بدء التعلم الآن والحصول على فترة تجربة مجاناََ بدون اي تكلفة كما يمكنك الغاء الاشتراك في أي وقت في حين قررت ذلك.
                  </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item
                eventKey="2"
                className={styles["faq__accordion__item"]}
              >
                <Accordion.Header className={styles["faq__accordion__header"]}>
                هل سأتمكن من إلغاء الاشتراك في أي وقت؟
                </Accordion.Header>
                <Accordion.Body  className={styles["faq__accordion__body"]}>
                نعم بكل تأكيد يمكنك إلغاء اشتراكك في تدرب بلا حدود في اي وقت يناسبك
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item
                eventKey="3"
                className={styles["faq__accordion__item"]}
              >
                <Accordion.Header className={styles["faq__accordion__header"]}>
                هل هناك ضمان استرداد على إشتراك تدرب بلا حدود؟
                </Accordion.Header>
                <Accordion.Body  className={styles["faq__accordion__body"]}>
                تدرب بلا حدود نظام إشتراك شهري لا يتوفر به نظام الاسترداد. 
                </Accordion.Body>
              </Accordion.Item>


              <Accordion.Item
                eventKey="4"
                className={styles["faq__accordion__item"]}
              >
                <Accordion.Header className={styles["faq__accordion__header"]}>
                هل سأوفر المال من خلال اشتراكي في تدرب بلا حدود؟
                </Accordion.Header>
                <Accordion.Body  className={styles["faq__accordion__body"]}>
                نعم! إذا كنت تأخذ أكثر من دورة بانتظام ، يمكنك توفير الكثير كل شهر!. كلما تعلمت أكثر ، كلما وفرت أكثر!
                </Accordion.Body>
              </Accordion.Item>


              <Accordion.Item
                eventKey="5"
                className={styles["faq__accordion__item"]}
              >
                <Accordion.Header className={styles["faq__accordion__header"]}>
                كم عدد الشهادات التي يمكنني الحصول عليها مع تدرب بلا حدود؟
                </Accordion.Header>
                <Accordion.Body  className={styles["faq__accordion__body"]}>
                لا يوجد حد! ستحصل على شهادة لكل دورة تكملها. 
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
