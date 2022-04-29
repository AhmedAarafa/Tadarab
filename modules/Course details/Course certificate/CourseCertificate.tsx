/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from "./course-certificate.module.css";
import Image from 'next/image';

export default function CourseCertificate() {
    return (
        <>
        <div className={styles["course-certificate"]}>
            <div>سوف تحصل على </div>
            <div>شهادة من تدرب بعد إتمام الدورة</div>
            <div>
                <img loading="lazy"   src="/images/BlankCretifacte.png" alt="course certificate" />
            </div>
        </div>
            
        </> 
    )
}
