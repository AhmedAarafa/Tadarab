/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from "./how-to-start.module.css";
import { Row, Col, Button } from "react-bootstrap";
import Router from "next/router";

export default function HowToStart() {
    return (
        <>
            <Row className={styles["how-to-start"]}>

                <Col xs={12} className={styles["how-to-start__title-box"]}>
                    <div className={styles["how-to-start__title-box__title"]}>
                        <span>
                            كيف تبدأ
                        </span>
                        التدريب على تدرب؟
                    </div>
                    <div className={styles["how-to-start__title-box__brief"]}>
                    خطوتان لتبدأ رحلتك في التدريب على منصة تدرب
                    </div>

                </Col>
            </Row>

            <Row className={styles["how-to-start__marketing-boxes"]}>
                <Col xs={12} sm={6} className={styles["how-to-start__box"]}>
                    <div className={`${styles["how-to-start__image"]} d-flex justify-content-start`}>
                        <img src="/images/photographyAndDirecting.jpg" alt="discriptive image" />
                    </div>
                </Col>
                <Col xs={12} sm={6} className={styles["how-to-start__box"]}>
                    <div className={styles["how-to-start__title"]}>
                        التصوير والإخراج
                    </div>
                    <div className={styles["how-to-start__brief"]}>
                    تستطيع مع تدرب تصوير دورتك داخل ستوديوهات تدرب المُجهزة بأحدث أدوات التصوير التي تساعدك على إنتاج دورتك بأفضل جودة ممكنة وبشكل احترافي، بالإضافة إلى مساعدتك على الوقوف أمام الكاميرا وتدريبك على فنون الإلقاء لتصل إلى أكبر عدد من المتدربين.
                    </div>
                    <div className={styles["how-to-start__btn"]}>
                        <Button onClick={()=>{Router.push("https://app.tadarab.com/selfhosted")}}>
                        سجِّل الآن
                        </Button>
                    </div>
                </Col>
                <Col style={{ backgroundColor: "rgba(14, 11, 29, 0.02)" }} xs={12} sm={6} className={styles["how-to-start__box"]}>
                    <div className={styles["how-to-start__title"]}>
                    المونتاج و الجرافيك
                    </div>
                    <div className={styles["how-to-start__brief"]}>
                    كيف ستظهر أمام الناس، كيف ستصل دورتك بالشكل السليم الذي يفيد المتدرب ويزيد من شعبيتك وسهولة التعلم معك..
                    هذا هو دور المونتاج والجرافيك. توفر لك منصة تدرب فريقًا مُدربًا ومسؤولًا عن ظهورك وظهور دورتك بأفضل شكل. 
                    </div>
                    <div className={styles["how-to-start__btn"]}>
                        <Button onClick={()=>{Router.push("https://app.tadarab.com/selfhosted")}}>
                        سجِّل الآن
                        </Button>
                    </div>
                </Col>
                <Col style={{ backgroundColor: "rgba(14, 11, 29, 0.02)" }} xs={12} sm={6} className={styles["how-to-start__box"]}>
                    <div className={`${styles["how-to-start__image"]}  d-flex justify-content-end`}>
                        <img src="/images/montageAndGraphic.png" alt="discriptive image" />
                    </div>
                </Col>
                {/* <Col xs={12} sm={6} className={styles["how-to-start__box"]}>
                    <div className={`${styles["how-to-start__image"]} d-flex justify-content-start`}>
                        <img src="/images/Photography.png" alt="discriptive image" />
                    </div>
                </Col>
                <Col xs={12} sm={6} className={styles["how-to-start__box"]}>
                    <div className={styles["how-to-start__title"]}>
                        التصوير والإخراج
                    </div>
                    <div className={styles["how-to-start__brief"]}>
                        هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام.هنا يوجد محتوى نصي
                    </div>
                    <div className={styles["how-to-start__btn"]}>
                        <Button>
                            قم بالتسجيل الآن
                        </Button>
                    </div>
                </Col> */}
            </Row>

        </>

    )
}
