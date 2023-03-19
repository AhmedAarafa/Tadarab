/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import styles from "./custom-signup-popup.module.css";
import { Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { TickIcon } from "common/Icons/Icons";
import Link from "next/link";

export default function CustomSignupPopup(props: any) {
    const [show, setShow] = useState(false);
    const themeState = useSelector((state: any) => state.themeState.theme);
    const userStatus = useSelector((state: any) => state.userAuthentication);

    useEffect(() => {
        setShow(props?.isCustomSignupModalVisible);
        return () => {
            setShow(false);
        }
    }, [props]);


    const handleModalVisibility = (status: boolean) => {
        setShow(status);
        props?.setIsCustomSignupModalVisible(status);
    }


    return (
        <>
            {
                userStatus.isUserAuthenticated == false &&
                <Modal data-theme={themeState} show={show}
                    onHide={() => handleModalVisibility(false)} animation={true} className={styles["custom-signup-popup"]}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <span>
                                تدرب في رمضان
                            </span>
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>

                        <div className={styles["custom-signup-popup__image"]}>
                            <img src="/images/RamadanCoverImage.jpg" alt="تدرب في رمضان" />
                        </div>

                        <div className={styles["custom-signup-popup__brief"]}>
                            استفد من خلال اشتراكك في تدرب بأفضل الدورات المباشرة والمسجلة خلال شهر رمضان المبارك وشارك اسئلتك مع أفضل المدربين بالخليج والوطن العربي
                        </div>

                        <div className={styles["custom-signup-popup__benefits-list"]}>
                            <div className={styles["custom-signup-popup__benefits-list__benefit"]}>
                                <div><TickIcon /></div>
                                <div>
                                    دورات مباشرة خلال شهر رمضان الكريم.
                                </div>
                            </div>
                            <div className={styles["custom-signup-popup__benefits-list__benefit"]}>
                                <div><TickIcon /></div>
                                <div>
                                    أكبر مكتبة دورات عربية بالخليج والوطن العربي
                                </div>
                            </div>
                            <div className={styles["custom-signup-popup__benefits-list__benefit"]}>
                                <div><TickIcon /></div>
                                <div>
                                    متابعة الدورة من أي جهاز وفي أي مكان.
                                </div>
                            </div>
                            <div className={styles["custom-signup-popup__benefits-list__benefit"]}>
                                <div><TickIcon /></div>
                                <div>
                                    السؤال والاستفسار أثناء البث المباشر ليجب عنه المدرب خلال الدورة.
                                </div>
                            </div>
                            <div className={styles["custom-signup-popup__benefits-list__benefit"]}>
                                <div><TickIcon /></div>
                                <div>
                                    شهادة إتمام للدورات أونلاين معتمدة.
                                </div>
                            </div>
                            <div className={styles["custom-signup-popup__benefits-list__benefit"]}>
                                <div><TickIcon /></div>
                                <div>
                                    دعم فني وتقني على مدار الساعة وأثناء البث المباشر.
                                </div>
                            </div>
                        </div>



                        <div className={styles["custom-signup-popup__ctas"]}>
                            <Link href="/subscription-plans">
                                <Button className={styles["custom-signup-popup__sub-btn"]}>اشترك في تدرب بلا حدود</Button>
                            </Link>
                            <Link href="/sign-up?f=csup">
                                <Button className={styles["custom-signup-popup__signup-btn"]}>سجل بريدك الالكتروني لمشاهدة رمضان</Button>
                            </Link>
                        </div>

                    </Modal.Body>
                </Modal>
            }
        </>
    )
}
