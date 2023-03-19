import React from 'react';
import styles from "./faq.module.css";
import { Row, Col, Accordion } from "react-bootstrap";
import { contactUsHandler } from "modules/_Shared/utils/contactUs";
import { useSelector } from "react-redux";

export default function Faq() {
  const themeState = useSelector((state: any) => state.themeState.theme);

  return (
    <Row data-theme={themeState} className={styles["faq__row"]}>
      <Col xs={12} className={styles["faq"]}>
        <div className={styles["faq__title"]}>
          <div>الأسئلة الشائعة</div>
          <div>عن نظام تدرب بلا حدود</div>
        </div>

        <Accordion defaultActiveKey="0" className={styles["faq__accordion"]}>

          <Accordion.Item
            eventKey="0"
            className={styles["faq__accordion__item"]}
          >
            <Accordion.Header className={styles["faq__accordion__header"]}>
              ما هو تدرب بلا حدود؟
            </Accordion.Header>
            <Accordion.Body className={styles["faq__accordion__body"]}>
              <div>
                تدرب بلا حدود هو نظام اشتراك، يتيح لك الإستفادة من محتوى المنصة ومتابعة مئات الدورات الأكثر طلبًا ومبيعًا في الخليج، يقدمها أكفأ المدربين في مختلف المجالات على مستوى الوطن العربي و يتيح لك ايضاً الحصول على شهادات الحضورالإلكترونية عند إتمام الدورات ، بالإضافة إلى إمكانية حضور جميع دورات البث المباشر التفاعلية  أو متابعتها مسجلة في أي وقت يناسبك.
              </div>
              {/* <div>
                  بالاضافة لحضور الدورات المباشرة خلال البث المباشر او مشاهدنا مسجلة في اي وقت مناسب لك. 
                  </div> */}

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
              نعم بكل تأكيد ،لا يوجد التزام يمكنك إلغاء الاشتراك في أي وقت تريده.
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
              لا يتوفر نظام الاسترداد في باقات الاشتراك في تدرب بلا حدود.
            </Accordion.Body>
          </Accordion.Item>


          <Accordion.Item
            eventKey="3"
            className={styles["faq__accordion__item"]}
          >
            <Accordion.Header className={styles["faq__accordion__header"]}>
              هل الاشتراك في تدرب بلا حدود يتم تجديده تلقائياً أم لا؟
            </Accordion.Header>
            <Accordion.Body className={styles["faq__accordion__body"]}>
              نعم، الاشتراك في تدرب بلا حدود يتم تجديده تلقائياً في موعد التجديد.
            </Accordion.Body>
          </Accordion.Item>


          <Accordion.Item
            eventKey="4"
            className={styles["faq__accordion__item"]}
          >
            <Accordion.Header className={styles["faq__accordion__header"]}>
              كيف يمكنني إنشاء حساب في تدرب؟
            </Accordion.Header>
            <Accordion.Body className={styles["faq__accordion__body"]}>
              إذا كنت لا تمتلك حساب بالمنصة برجاء الضغط على حساب جديد( حساب جديد ) وادخل البيانات المطلوبة و قم بمتابعة الخطوات لإنشاء .
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item
            eventKey="5"
            className={styles["faq__accordion__item"]}
          >
            <Accordion.Header className={styles["faq__accordion__header"]}>
              ما هي طرق الدفع المتاحة ؟
            </Accordion.Header>
            <Accordion.Body className={styles["faq__accordion__body"]}>
              يمكنك الدفع من خلال الفيزا كارد أو الماستر كارد أو عن طريق باي بال.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item
            eventKey="6"
            className={styles["faq__accordion__item"]}
          >
            <Accordion.Header className={styles["faq__accordion__header"]}>
              كم عدد الشهادات التي يمكنني الحصول عليها مع تدرب بلا حدود؟
            </Accordion.Header>
            <Accordion.Body className={styles["faq__accordion__body"]}>
              لا يوجد حد، ستحصل على شهادة لكل دورة تقوم بإتمام مشاهدتها.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item
            eventKey="7"
            className={styles["faq__accordion__item"]}
          >
            <Accordion.Header className={styles["faq__accordion__header"]}>
              هل للدورات مدة معينة وتختفي من حسابي ؟
            </Accordion.Header>
            <Accordion.Body className={styles["faq__accordion__body"]}>
              الدورات تكون متاحة فقط خلال فترة الاشتراك في تدرب بلا حدود.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item
            eventKey="8"
            className={styles["faq__accordion__item"]}
          >
            <Accordion.Header className={styles["faq__accordion__header"]}>
              كيف يتم مشاهدة الدورات؟
            </Accordion.Header>
            <Accordion.Body className={styles["faq__accordion__body"]}>
              الدورات تكون متاحة أونلاين على المنصة يمكنك متابعتها من خلال حسابك بالمنصة في أى وقت و من أي مكان  بالعالم فقط قم بتسجيل الدخول ثم اضغط على لوحتي التعليمية لمشاهدة الدورات التي قمت بالتسجيل فيها.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item
            eventKey="9"
            className={styles["faq__accordion__item"]}
          >
            <Accordion.Header className={styles["faq__accordion__header"]}>
              متى يكون موعد بدء الدورات ؟
            </Accordion.Header>
            <Accordion.Body className={styles["faq__accordion__body"]}>
              الدورات تكون مسجلة يمكنك مشاهدتها أونلاين في أي وقت على المنصة بمجرد الاشتراك في تدرب بلا حدود.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item
            eventKey="10"
            className={styles["faq__accordion__item"]}
          >
            <Accordion.Header className={styles["faq__accordion__header"]}>
              كم هي مدة الدورة ؟
            </Accordion.Header>
            <Accordion.Body className={styles["faq__accordion__body"]}>
              مدة الدورة تكون موضحة داخل الصفحة الخاصة بكل دورة.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item
            eventKey="11"
            className={styles["faq__accordion__item"]}
          >
            <Accordion.Header className={styles["faq__accordion__header"]}>
              كيف يمكنني الحصول على الشهادة ؟
            </Accordion.Header>
            <Accordion.Body className={styles["faq__accordion__body"]}>
              يمكنك الحصول علي الشهادة بمجرد إتمام مشاهدة الدورة من خلال صفحة الدورة من قسم ملفات الشرح.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item
            eventKey="12"
            className={styles["faq__accordion__item"]}
          >
            <Accordion.Header className={styles["faq__accordion__header"]}>
              هل الشهادة معتمدة ؟
            </Accordion.Header>
            <Accordion.Body className={styles["faq__accordion__body"]}>
              الشهادة معتمدة من قبل منصة تدرب فقط.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item
            eventKey="13"
            className={styles["faq__accordion__item"]}
          >
            <Accordion.Header className={styles["faq__accordion__header"]}>
              هل توجد دورات مجانية ؟
            </Accordion.Header>
            <Accordion.Body className={styles["faq__accordion__body"]}>
              لدينا مجموعة كبيرة من الدورات المجانية التي يمكنك مشاهدتها والاستفادة منها من خلال الدخول لقسم الدورات المجانية بالمنصة.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item
            eventKey="14"
            className={styles["faq__accordion__item"]}
          >
            <Accordion.Header className={styles["faq__accordion__header"]}>
              هل يوجد دورات حضوري؟
            </Accordion.Header>
            <Accordion.Body className={styles["faq__accordion__body"]}>
              الدورات تكون مسجلة أون لاين على منصة تدرب و ذلك يتيح لك مشاهدة الدورات في أي وقت و من أي مكان بالعالم .
              يوجد ايضا بعض دورات البث المباشر التي يجعلها المدرب حضوري لذا يرجى متابعتنا من أجل موافاتكم بكل ما هو جديد.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item
            eventKey="15"
            className={styles["faq__accordion__item"]}
          >
            <Accordion.Header className={styles["faq__accordion__header"]}>
              هل يوجد دورات حضوري؟
            </Accordion.Header>
            <Accordion.Body className={styles["faq__accordion__body"]}>
              الدورات تكون مسجلة أون لاين على منصة تدرب و ذلك يتيح لك مشاهدة الدورات في أي وقت و من أي مكان بالعالم .
              يوجد ايضا بعض دورات البث المباشر التي يجعلها المدرب حضوري لذا يرجى متابعتنا من أجل موافاتكم بكل ما هو جديد.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item
            eventKey="16"
            className={styles["faq__accordion__item"]}
          >
            <Accordion.Header className={styles["faq__accordion__header"]}>
              كيف يمكنني التواصل مع الدعم الفني ؟
            </Accordion.Header>
            <Accordion.Body className={styles["faq__accordion__body"]}>
              يمكنك التواصل مع الدعم الفني من خلال:
              <br />
             - البريد الإلكتروني:
              <br />
              support@tadarab.com
              <br />
             - رسائل الواتس آب:
              <br />
              96569932303+
              <br />
             - دردشة المنصة
              <br />
             - حسابات المنصة على مواقع التواصل الإجتماعي الفيس بوك و إنستغرام و تويتر.

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
