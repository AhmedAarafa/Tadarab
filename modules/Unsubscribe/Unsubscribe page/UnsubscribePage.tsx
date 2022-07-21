import React, { useState } from 'react';
import styles from "./unsubscribe-page.module.css";
import { Row, Col, Button } from "react-bootstrap";
import { TickIcon } from "common/Icons/Icons";
import UnsubscribePopup from "modules/Unsubscribe/Unsubscribe popup/UnsubscribePopup";

export default function UnsubscribePage() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Row className={styles["unsubscribe-page"]}>
            <Col xs={12}>
                <div className={styles["unsubscribe-page__title"]}>
                    نظام الاشتراكات
                </div>
                <div className={styles["unsubscribe-page__your-membership"]}>
                    عضويتك
                </div>
                <div className={styles["unsubscribe-page__subscription-pros"]}>
                    انت مشترك في تدرب بلا حدود إمتيازات اشتراكك هي:
                </div>
                <ul className={styles["unsubscribe-page__subscription-pros__list"]}>
                    <li><TickIcon />مشاهدة بلا حدود لأكبر مكتبة دورات في الخليج.</li>
                    <li><TickIcon />عدد لا نهائي من شهادات اتمام الدورات. </li>
                    <li><TickIcon />مشاهدة جميع الدورات المباشرة القادمة. </li>
                    <li><TickIcon />كتب وملخصات حصرية للمشتركين.</li>
                    <li><TickIcon />الدورات الجديدة المضافة بشكل شهري. </li>
                </ul>
                <div className={styles["unsubscribe-page__cancel-subscription"]}>
                    <a onClick={() => handleShow()}>
                        إلغاء الاشتراك
                    </a>

                    <UnsubscribePopup show={show} handleShow={() => handleShow} handleClose={() => handleClose} />
                </div>
            </Col>
        </Row>
    )
}
