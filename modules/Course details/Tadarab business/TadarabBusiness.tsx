/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from "./tadarab-business.module.css"
import { Col , Button } from "react-bootstrap";

export default function TadarabBusiness() {
    return (
        <>
        <Col xs={12} className={styles["tadarab-business"]}>
            <div className={styles["tadarab-business__img"]}>
                <img src="/images/LapTop & Phone Alpha (1).gif" alt="Tadarab business" />
                {/* <video src="/images/LapTopPhoneAlpha.mp4" autoPlay loop muted></video> */}
            </div>

            <div className={styles["tadarab-business__details"]}>
                <div className={styles["tadarab-business__details__major"]}>
                دورات عالية الجودة في جميع المجالات لأفراد شركتك
                </div>
                <div className={styles["tadarab-business__details__minor"]}>
                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز
                </div>
                <div className={styles["tadarab-business__details__btn"]}>
                    <Button>
                       <span> تواصل معنا </span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="0.875rem" height="0.875rem" viewBox="0 0 14.364 14">
                             <path id="goArrow" d="M8.207,50.712l-.712.712a.766.766,0,0,1-1.087,0L.176,45.195a.766.766,0,0,1,0-1.087l6.232-6.232a.766.766,0,0,1,1.087,0l.712.712a.77.77,0,0,1-.013,1.1l-3.863,3.68h9.214a.768.768,0,0,1,.769.769v1.026a.768.768,0,0,1-.769.769H4.331l3.863,3.68A.765.765,0,0,1,8.207,50.712Z" transform="translate(0.05 -37.65)" fill="#fff"/>
                        </svg>

                    </Button>
                </div>
            </div>
        </Col>
        </>
    )
}
