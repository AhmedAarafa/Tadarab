/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from "./course-certificate.module.css";

export default function CourseCertificate() {
    return (
        <>
        <div className={styles["course-certificate"]}>
            <div>سوف تحصل على </div>
            <div>شهادة من تدرب بعد إتمام الدورة</div>
            <div>
                <img src="/images/certificate.png" alt="course certificate" />
            </div>
        </div>
            
        </> 
    )
}
