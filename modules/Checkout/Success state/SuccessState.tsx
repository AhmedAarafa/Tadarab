import React from 'react'
import { Row, Col, Button, Form, Card } from "react-bootstrap";
import styles from "./success-state.module.css";

export default function SuccessState() {
    return (
        <>
        <Row className={styles["success-state-row"]}>
            <Col xs={12} className={styles["success-state"]}>
            <svg className={styles["success-state__img"]} xmlns="http://www.w3.org/2000/svg" width="7rem" height="6.75rem" viewBox="0 0 112 107.999">
                <g id="success" transform="translate(6.312 8.142)">
                    <g id="Group_11910" data-name="Group 11910" transform="translate(-0.312 -0.239)">
                    <circle id="Ellipse_262" data-name="Ellipse 262" cx="50" cy="50" r="50" transform="translate(0 0.096)" fill="#31af91"/>
                    </g>
                    <g id="Group_11911" data-name="Group 11911" transform="translate(19.068 30.816)">
                    <path id="Path_15065" data-name="Path 15065" d="M47.66,84.365,24.733,61.439a.751.751,0,0,1,0-1.088l6.606-6.606a.751.751,0,0,1,1.088,0L48.2,69.521,77.892,39.833a.751.751,0,0,1,1.088,0l6.606,6.606a.751.751,0,0,1,0,1.088L48.748,84.365A.751.751,0,0,1,47.66,84.365Z" transform="translate(-24.5 -39.6)" fill="#fff"/>
                    </g>
                    <path id="Path_15219" data-name="Path 15219" d="M6.65,19.6l1.41-3.58L9.48,19.6l3.58,1.42L9.48,22.43,8.06,26.02,6.65,22.43,3.06,21.02Z" transform="translate(-9.372 64.838)" fill="#31af91" opacity="0.3"/>
                    <path id="Path_15220" data-name="Path 15220" d="M10.24,23.18l2.82-7.16,2.84,7.16,7.16,2.84L15.9,28.84l-2.84,7.18-2.82-7.18L3.06,26.02Z" transform="translate(82.628 -24.162)" fill="#31af91" opacity="0.4"/>
                </g>
            </svg>

            <div className={styles["success-state__purchasing-done"]}> تمت عملية الشراء بنجاح </div>
            <div className={styles["success-state__begin-learning"]}> يمكنك الآن بدء مرحلة التعلم واكتشاف الدورات </div>
            <Button className={styles["success-state__btn"]}>
                <span> اذهب لدوراتي </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="0.75rem" height="0.75rem" viewBox="0 0 14.364 14">
                        <path id="goArrow" d="M8.207,50.712l-.712.712a.766.766,0,0,1-1.087,0L.176,45.195a.766.766,0,0,1,0-1.087l6.232-6.232a.766.766,0,0,1,1.087,0l.712.712a.77.77,0,0,1-.013,1.1l-3.863,3.68h9.214a.768.768,0,0,1,.769.769v1.026a.768.768,0,0,1-.769.769H4.331l3.863,3.68A.765.765,0,0,1,8.207,50.712Z" transform="translate(0.05 -37.65)" fill="#fff"/>
                </svg>
            </Button>
            <div className={styles["success-state__bill-details"]}> اعرض تفاصيل الفاتورة </div>

            </Col>
        </Row>
            
        </>
    )
}
