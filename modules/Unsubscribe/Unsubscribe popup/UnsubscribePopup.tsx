/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, memo } from 'react';
import styles from "./unsubscribe-popup.module.css";
import { Button, Modal, Form } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';
import "swiper/css";
import Link from "next/link";
import { axiosInstance } from "configurations/axios/axiosConfig";
import Router from "next/router";
import TadarabGA from "modules/_Shared/utils/ga";
import { useSelector } from 'react-redux';

function UnsubscribePopup(props: any) {
    const [categories, setCategories] = useState([]);
    SwiperCore.use([Navigation]);
    const [step, setStep] = useState(1);
    const [showError, setShowError] = useState(false);
    const [unsubscriptionReasons, setUnsubscriptionReasons] = useState<any>({ knownReasons: [], others: "" });
    const setOtherReason = (e: any) => {
        setUnsubscriptionReasons({
            ...unsubscriptionReasons,
            others: e.target.value
        })
    };
  const themeState = useSelector((state: any) => state.themeState.theme);


    const setReason = (reason: string) => {
        setUnsubscriptionReasons({
            ...unsubscriptionReasons,
            knownReasons: unsubscriptionReasons.knownReasons.includes(reason) ?
                unsubscriptionReasons.knownReasons.filter((r: any) => r !== reason)
                :
                [...unsubscriptionReasons.knownReasons, reason]
        })
    };

    const cancelSubscription = () => {
        if (unsubscriptionReasons.knownReasons.length !== 0 || unsubscriptionReasons.others !== "") {
            setShowError(false);
            axiosInstance.post(`subscription/unsubscribe`, {
                "reasons": JSON.stringify(unsubscriptionReasons.knownReasons).replace(/[\[\]']+/g, ''),
                "other_reason": unsubscriptionReasons.others,
            }).then((response: any) => {
                let tadarabGA = new TadarabGA();
                tadarabGA.tadarab_fire_traking_GA_code("unsubscribe", {
                    single_reason: response?.data?.data?.single_reason,
                    user_id: response?.data?.data?.ga_tracking.uid,
                    cid: response?.data?.data?.ga_tracking.cid,
                    date: response?.data?.data?.start_trial_date,
                });
                Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}`);
            }).catch((error: any) => {
                console.log(error);
            })
        } else {
            setShowError(true);
        }
    }

    useEffect(() => {
        axiosInstance.get(`categories`).then(function (response: any) {
            setCategories(response?.data?.data?.categories);
        }).catch(function (error: any) {
            console.log(error);
        });
    }, []);


    return (
        <>
            <Modal data-theme={themeState} className={styles["unsubscribe-popup__modal"]} show={props.show} onHide={props.handleClose()} onExited={() => { setStep(1) }}>
                {step == 1 &&
                    <>
                        <Modal.Header closeButton className={styles["unsubscribe-popup__header"]}>
                            <Modal.Title className={styles["unsubscribe-popup__title"]}>التعلم رحلة لا تنتهى</Modal.Title>
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

                                    {categories.map((cat: any, i: number) => {
                                        return (
                                            <SwiperSlide key={i} style={{ cursor: "pointer" }}>
                                                <Link href={`/topic/${cat?.slug}`}>
                                                    <div className={styles["unsubscribe-popup__category-card"]}>
                                                        <div>
                                                            <div className="d-flex justify-content-center">
                                                                <div className={styles["unsubscribe-popup__category-card__img-box"]}
                                                                    style={{ backgroundColor: cat?.color }}>
                                                                    <img loading="lazy" src={`/images/${cat?.icon}.svg`} alt={cat?.icon} id={styles[cat?.icon]} />
                                                                </div>
                                                            </div>
                                                            <div className={styles["unsubscribe-popup__category-card__department"]}>{cat?.title}</div>
                                                            <div className={styles["unsubscribe-popup__category-card__learners-number"]}>
                                                                {cat?.courses_count} دورة
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </SwiperSlide>
                                        )
                                    })
                                    }

                                </Swiper>

                            </div>

                        </Modal.Body>

                        <Modal.Footer className={styles["unsubscribe-popup__footer"]}>

                            <a onClick={() => { setStep(step + 1) }}>
                                استكمال إلغاء الإشتراك
                            </a>

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

                            <a onClick={() => { setStep(step + 1) }}>
                                استكمال إلغاء الإشتراك
                            </a>

                            <Link href="/my-account">
                                الابقاء علي اشتراكى
                            </Link>

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

                            <a onClick={() => { setStep(step + 1) }}>
                                استكمال إلغاء الإشتراك
                            </a>

                            <a href="https://wa.link/z4tq07" target="_blank" rel="noreferrer">
                                تواصل مع خدمة العملاء
                            </a>

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
                                        onChange={() => { setOtherReason(event) }}
                                        placeholder="سبب إلغاء اشتراكك..."
                                        className={styles["reason-for-unsubscription__another-reason-input-field"]}
                                    />
                                    {showError && <div className={styles["error-msg"]}>الرجاء ذكر سبب إلغاء الاشتراك</div>}
                                </div>
                            </div>

                        </Modal.Body>

                        <Modal.Footer className={styles["unsubscribe-popup__footer3"]}>

                            <a onClick={() => { cancelSubscription() }}>
                                إلغاء الاشتراك
                            </a>

                            <a href="https://wa.link/z4tq07" target="_blank" rel="noreferrer">
                                تواصل مع خدمة العملاء
                            </a>

                        </Modal.Footer>
                    </>
                }

            </Modal>
        </>
    )
}

export default memo(UnsubscribePopup);
