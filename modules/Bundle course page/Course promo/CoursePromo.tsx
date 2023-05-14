/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import styles from "./course-promo.module.css";
import Link from "next/link";
import { TadarabVideoPlayer } from 'common/TPlayer/TPlayer';

function CoursePromo() {
    const themeState = useSelector((state: any) => state.themeState.theme);

    return (
        <div className={styles["course-promo"]} data-theme={themeState} style={{ backgroundColor: "var(--tadarab-light-bg)" }}>
            <ul className={styles["course-promo__breadcrumbs"]}>
                <Link href={``}>
                    <li> فنون </li>
                </Link>
                <Link href={``}>
                    <li> الرسم </li>
                </Link>
            </ul>

            <div id="video-player-container" className={styles["course-promo__promo-video"]}>
                {/* <TadarabVideoPlayer /> */}
                <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="" />
            </div>

            {/* <div className={styles["course-promo__promo-details"]}>
                <h1 className={styles["course-promo__course-title"]}>
                    مسار الرسم والتلوين
                </h1>
                <div className={styles["course-promo__course-description"]}>
                    تعلم طريقة تداول الأسهم وزيادة مدخولك بشكل مدروس مع الخبير الكويتي فيصل كركري أفضل مدرب في مجال الاستثمار في الأسهم في السعودية والخليج. في نهاية الدورة ستصبح ملمًا بكل الأمور التي تخص سوق الأسهم وستكون جاهزًا لدخول المجال.
                </div>
            </div> */}

        </div>
    )
}

export default memo(CoursePromo);
