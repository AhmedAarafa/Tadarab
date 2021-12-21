/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from "./course-advertisement.module.css";

export default function CourseAdvertisement() {
    return (
        <>
        <div className={styles["course-ad"]}>
            <ul className={styles["course-ad__list"]}>
                <li>فنون</li>
                <li>الرسم</li>
                <li>تعليم الرسم والتلوين</li>
            </ul>
            <div className={styles["course-ad__course-img"]}>
                <img src="/images/course2cropped.png" alt="course image" />
                <div className={styles["course-ad__course-img__watch-ad"]}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="3.125rem" height="3.125rem" viewBox="0 0 50 50">
                            <g id="play" transform="translate(-1 -1)">
                                <g id="Group_11421" data-name="Group 11421" transform="translate(1 1)">
                                <g id="Group_11420" data-name="Group 11420" transform="translate(0 0)">
                                    <path id="Path_13148" data-name="Path 13148" d="M26,1A25,25,0,1,0,51,26,25,25,0,0,0,26,1Zm9.308,26.378L20.881,35.706a1.424,1.424,0,0,1-2.136-1.234V17.815a1.424,1.424,0,0,1,2.137-1.234L35.309,24.91a1.425,1.425,0,0,1,0,2.467Z" transform="translate(-1 -1)" fill="#fff"/>
                                </g>
                                </g>
                            </g>
                        </svg>

                    </div>
                    <div>شاهد إعلان الدورة</div>
                </div>

            </div>
        </div>
            
        </>
    )
}
