/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import styles from "./unsubscribe-popup.module.css";
import { Button, Modal, Form } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';
import "swiper/css";

export default function UnsubscribePopup(props: any) {
    SwiperCore.use([Navigation]);
    const [step, setStep] = useState(1);
    const [unsubscriptionReasons, setUnsubscriptionReasons] = useState<any>({ knownReasons: [], others: "" });
    const setOtherReason = (e: any) => {
        setUnsubscriptionReasons({
            ...unsubscriptionReasons,
            others: e.target.value
        })
    };

    const setReason = (reason: string) => {
        setUnsubscriptionReasons({
            ...unsubscriptionReasons,
            knownReasons: unsubscriptionReasons.knownReasons.includes(reason) ?
                unsubscriptionReasons.knownReasons.filter((r: any) => r !== reason)
                :
                [...unsubscriptionReasons.knownReasons, reason]

            // knownReasons: [...unsubscriptionReasons.knownReasons, reason]
        })

        /* categories:
        filters.categories.includes(categoryId) ? filters.categories.filter((f: any) => f !== categoryId) : [...filters.categories, categoryId] */
    };


    useEffect(() => {
        console.log("unsubscriptionReasons", unsubscriptionReasons);
    }, [unsubscriptionReasons])


    return (
        <>
            <Modal show={props.show} onHide={props.handleClose()} onExited={() => { setStep(1) }}>
                {step == 1 &&
                    <>
                        <Modal.Header closeButton className={styles["unsubscribe-popup__header"]}>
                            <Modal.Title >التعلم رحلة لا تنتهى</Modal.Title>
                        </Modal.Header>

                        <Modal.Body className={styles["unsubscribe-popup__body"]}>
                            <div>
                                مازال لديك مئات الدورات التدريبية لم تستفيد منها يمكنك الإطلاع على اقسام الدورات بالاسفل
                                واستكشاف المزيد من الفرص لكسب المهارات وتعلم شيء جديد.
                            </div>

                            <div className={styles["unsubscribe-popup__category-card-container"]}>

                                <Swiper dir="rtl" slidesPerView={7} navigation={true} pagination={{ "clickable": true }}
                                    breakpoints={{
                                        "50": {
                                            "slidesPerView": 2.25,
                                        },
                                        "576": {
                                            slidesPerView: 5.9,
                                        },
                                        "981": {
                                            slidesPerView: 6.2,
                                        },
                                    }} className="mySwiper">

                                    <SwiperSlide style={{ cursor: "pointer" }}>

                                        <div className={styles["unsubscribe-popup__category-card"]}>
                                            <div>

                                                <div className="d-flex justify-content-center">
                                                    <div className={styles["unsubscribe-popup__category-card__img-box"]}
                                                        style={{ backgroundColor: "yellow" }}>
                                                        <img loading="lazy" src={`/images/technology.svg`} alt="technology" id="technology" />
                                                    </div>
                                                </div>
                                                <div className={styles["unsubscribe-popup__category-card__department"]}>تكنولوجيا</div>
                                                <div className={styles["unsubscribe-popup__category-card__learners-number"]}>
                                                    16 دورة
                                                </div>
                                            </div>
                                        </div>

                                    </SwiperSlide>
                                    <SwiperSlide style={{ cursor: "pointer" }}>

                                        <div className={styles["unsubscribe-popup__category-card"]}>
                                            <div>

                                                <div className="d-flex justify-content-center">
                                                    <div className={styles["unsubscribe-popup__category-card__img-box"]}
                                                        style={{ backgroundColor: "yellow" }}>
                                                        <img loading="lazy" src={`/images/technology.svg`} alt="technology" id="technology" />
                                                    </div>
                                                </div>
                                                <div className={styles["unsubscribe-popup__category-card__department"]}>تكنولوجيا</div>
                                                <div className={styles["unsubscribe-popup__category-card__learners-number"]}>
                                                    16 دورة
                                                </div>
                                            </div>
                                        </div>

                                    </SwiperSlide>
                                    <SwiperSlide style={{ cursor: "pointer" }}>

                                        <div className={styles["unsubscribe-popup__category-card"]}>
                                            <div>

                                                <div className="d-flex justify-content-center">
                                                    <div className={styles["unsubscribe-popup__category-card__img-box"]}
                                                        style={{ backgroundColor: "yellow" }}>
                                                        <img loading="lazy" src={`/images/technology.svg`} alt="technology" id="technology" />
                                                    </div>
                                                </div>
                                                <div className={styles["unsubscribe-popup__category-card__department"]}>تكنولوجيا</div>
                                                <div className={styles["unsubscribe-popup__category-card__learners-number"]}>
                                                    16 دورة
                                                </div>
                                            </div>
                                        </div>

                                    </SwiperSlide>
                                    <SwiperSlide style={{ cursor: "pointer" }}>

                                        <div className={styles["unsubscribe-popup__category-card"]}>
                                            <div>

                                                <div className="d-flex justify-content-center">
                                                    <div className={styles["unsubscribe-popup__category-card__img-box"]}
                                                        style={{ backgroundColor: "yellow" }}>
                                                        <img loading="lazy" src={`/images/technology.svg`} alt="technology" id="technology" />
                                                    </div>
                                                </div>
                                                <div className={styles["unsubscribe-popup__category-card__department"]}>تكنولوجيا</div>
                                                <div className={styles["unsubscribe-popup__category-card__learners-number"]}>
                                                    16 دورة
                                                </div>
                                            </div>
                                        </div>

                                    </SwiperSlide>
                                    <SwiperSlide style={{ cursor: "pointer" }}>

                                        <div className={styles["unsubscribe-popup__category-card"]}>
                                            <div>

                                                <div className="d-flex justify-content-center">
                                                    <div className={styles["unsubscribe-popup__category-card__img-box"]}
                                                        style={{ backgroundColor: "yellow" }}>
                                                        <img loading="lazy" src={`/images/technology.svg`} alt="technology" id="technology" />
                                                    </div>
                                                </div>
                                                <div className={styles["unsubscribe-popup__category-card__department"]}>تكنولوجيا</div>
                                                <div className={styles["unsubscribe-popup__category-card__learners-number"]}>
                                                    16 دورة
                                                </div>
                                            </div>
                                        </div>

                                    </SwiperSlide>
                                    <SwiperSlide style={{ cursor: "pointer" }}>

                                        <div className={styles["unsubscribe-popup__category-card"]}>
                                            <div>

                                                <div className="d-flex justify-content-center">
                                                    <div className={styles["unsubscribe-popup__category-card__img-box"]}
                                                        style={{ backgroundColor: "yellow" }}>
                                                        <img loading="lazy" src={`/images/technology.svg`} alt="technology" id="technology" />
                                                    </div>
                                                </div>
                                                <div className={styles["unsubscribe-popup__category-card__department"]}>تكنولوجيا</div>
                                                <div className={styles["unsubscribe-popup__category-card__learners-number"]}>
                                                    16 دورة
                                                </div>
                                            </div>
                                        </div>

                                    </SwiperSlide>
                                    <SwiperSlide style={{ cursor: "pointer" }}>

                                        <div className={styles["unsubscribe-popup__category-card"]}>
                                            <div>

                                                <div className="d-flex justify-content-center">
                                                    <div className={styles["unsubscribe-popup__category-card__img-box"]}
                                                        style={{ backgroundColor: "yellow" }}>
                                                        <img loading="lazy" src={`/images/technology.svg`} alt="technology" id="technology" />
                                                    </div>
                                                </div>
                                                <div className={styles["unsubscribe-popup__category-card__department"]}>تكنولوجيا</div>
                                                <div className={styles["unsubscribe-popup__category-card__learners-number"]}>
                                                    16 دورة
                                                </div>
                                            </div>
                                        </div>

                                    </SwiperSlide>
                                    <SwiperSlide style={{ cursor: "pointer" }}>

                                        <div className={styles["unsubscribe-popup__category-card"]}>
                                            <div>

                                                <div className="d-flex justify-content-center">
                                                    <div className={styles["unsubscribe-popup__category-card__img-box"]}
                                                        style={{ backgroundColor: "yellow" }}>
                                                        <img loading="lazy" src={`/images/technology.svg`} alt="technology" id="technology" />
                                                    </div>
                                                </div>
                                                <div className={styles["unsubscribe-popup__category-card__department"]}>تكنولوجيا</div>
                                                <div className={styles["unsubscribe-popup__category-card__learners-number"]}>
                                                    16 دورة
                                                </div>
                                            </div>
                                        </div>

                                    </SwiperSlide>
                                    <SwiperSlide style={{ cursor: "pointer" }}>

                                        <div className={styles["unsubscribe-popup__category-card"]}>
                                            <div>

                                                <div className="d-flex justify-content-center">
                                                    <div className={styles["unsubscribe-popup__category-card__img-box"]}
                                                        style={{ backgroundColor: "yellow" }}>
                                                        <img loading="lazy" src={`/images/technology.svg`} alt="technology" id="technology" />
                                                    </div>
                                                </div>
                                                <div className={styles["unsubscribe-popup__category-card__department"]}>تكنولوجيا</div>
                                                <div className={styles["unsubscribe-popup__category-card__learners-number"]}>
                                                    16 دورة
                                                </div>
                                            </div>
                                        </div>

                                    </SwiperSlide>
                                </Swiper>

                            </div>

                        </Modal.Body>

                        <Modal.Footer className={styles["unsubscribe-popup__footer"]}>

                            <Button onClick={() => { setStep(step + 1) }}>
                                استكمال إلغاء الإشتراك
                            </Button>

                        </Modal.Footer>
                    </>
                }

                {step == 2 &&
                    <>
                        <Modal.Header closeButton className={styles["unsubscribe-popup__header"]}>
                            <Modal.Title>ما يترتب علية عند الغاء اشتراكك</Modal.Title>
                        </Modal.Header>

                        <Modal.Body className={styles["unsubscribe-popup__body"]}>
                            <div className={styles["unsubscribe-popup__body__unsubscription-cons-body"]}>
                                <img src="/images/unsubscription-cons.png" alt="" className={styles["unsubscribe-popup__body__unsubscription-cons-img"]} />
                                <ul className={styles["unsubscribe-popup__body__unsubscription-cons-list"]}>
                                    <li>
                                        ستفقد صلاحية الوصول لجميع الدورات.
                                    </li>
                                    <li>
                                        لن تتمكن من مشاهدة الدورات الجديدة القادمة.
                                    </li>
                                    <li>
                                        لن تستطيع الحصول على شهادات إتمام الدورات.
                                    </li>
                                    <li>
                                        لن تستطيع الوصول للمرفقات والتمارين او تحميلها.
                                    </li>

                                </ul>
                            </div>

                        </Modal.Body>

                        <Modal.Footer className={styles["unsubscribe-popup__footer2"]}>

                            <Button onClick={() => { setStep(step + 1) }}>
                                استكمال إلغاء الإشتراك
                            </Button>

                            <Button>
                                الابقاء علي اشتراكى
                            </Button>

                        </Modal.Footer>
                    </>
                }

                {step == 3 &&
                    <>
                        <Modal.Header closeButton className={styles["unsubscribe-popup__header"]}>
                            <Modal.Title>تحتاج وقت اطول ؟</Modal.Title>
                        </Modal.Header>

                        <Modal.Body className={styles["unsubscribe-popup__body"]}>
                            <div>
                                اذا كنت تواجة مشكلة في استخدام المنصة او لا تستطيع اختيار الدورات المناسبة لك او تحتاج تواصل مع فريق خدمة
                                العملاء لمساعدتك يمكنك التواصل مباشرة معنا عن طريق الواتساب.
                            </div>

                        </Modal.Body>

                        <Modal.Footer className={styles["unsubscribe-popup__footer3"]}>

                            <Button onClick={() => { setStep(step + 1) }}>
                                استكمال إلغاء الإشتراك
                            </Button>

                            <Button>
                                تواصل مع خدمة العملاء
                            </Button>

                        </Modal.Footer>
                    </>
                }

                {step == 4 &&
                    <>
                        <Modal.Header closeButton className={styles["unsubscribe-popup__header"]}>
                            <Modal.Title>برجاء اختيار سبب إلغاء اشتراكك</Modal.Title>
                        </Modal.Header>

                        <Modal.Body className={styles["unsubscribe-popup__body"]}>
                            <div className={styles["reason-for-unsubscription"]}>
                                <ul>
                                    <li>
                                        <input className="form-check-input" type="checkbox"
                                            onChange={() => { setReason("شاهدت الدورات التى احتاجها") }}
                                            id={`cb1`} name={'cb1'} />
                                        <span>
                                            شاهدت الدورات التى احتاجها
                                        </span>
                                    </li>
                                    <li>
                                        <input className="form-check-input" type="checkbox"
                                            onChange={() => { setReason("لم اجد دورات تناسبني لديكم") }}
                                            id={`cb2`} name={'cb2'} />
                                        <span>
                                            لم اجد دورات تناسبني لديكم
                                        </span>
                                    </li>
                                    <li>
                                        <input className="form-check-input" type="checkbox"
                                            onChange={() => { setReason("المحتوى التدريبي اقل من توقعاتي") }}
                                            id={`cb3`} name={'cb3'} />
                                        <span>
                                            المحتوى التدريبي اقل من توقعاتي
                                        </span>
                                    </li>
                                    <li>
                                        <input className="form-check-input" type="checkbox"
                                            onChange={() => { setReason("سعر الاشتراك غير مناسب لي") }}
                                            id={`cb4`} name={'cb4'} />
                                        <span>
                                            سعر الاشتراك غير مناسب لي
                                        </span>
                                    </li>
                                    <li>
                                        <input className="form-check-input" type="checkbox"
                                            onChange={() => { setReason("لا استفيد حاليا من الاشتراك") }}
                                            id={`cb5`} name={'cb5'} />
                                        <span>
                                            لا استفيد حاليا من الاشتراك
                                        </span>
                                    </li>
                                    <li>
                                        <input className="form-check-input" type="checkbox"
                                            onChange={() => { setReason("الوقت غير مناسب حاليا بالنسبة لي") }}
                                            id={`cb6`} name={'cb6'} />
                                        <span>
                                            الوقت غير مناسب حاليا بالنسبة لي
                                        </span>
                                    </li>
                                </ul>
                                <div className={styles["reason-for-unsubscription__another-reason"]}>
                                    <div>
                                        اذا كان هناك سبب اخر برجاء كتابته بالأسفل
                                    </div>
                                    <textarea
                                        id="unsubscription-reasons-field"
                                        onBlur={() => { setOtherReason(event) }}
                                        placeholder="سبب إلغاء اشتراكك..."
                                        className={styles["reason-for-unsubscription__another-reason-input-field"]}
                                    />
                                </div>
                            </div>

                        </Modal.Body>

                        <Modal.Footer className={styles["unsubscribe-popup__footer3"]}>

                            <Button>
                                إلغاء الاشتراك
                            </Button>

                            <Button>
                                تواصل مع خدمة العملاء
                            </Button>

                        </Modal.Footer>
                    </>
                }

            </Modal>
        </>
    )
}
