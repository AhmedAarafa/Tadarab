/* eslint-disable @next/next/no-img-element */
import React, { memo } from 'react';
import styles from "./bundle-included-courses.module.css";
import { ReviewStartIcon } from 'common/Icons/Icons';

function BundleIncludedCourses() {
    return (
        <div className={styles["bundle-included-courses"]}>
            <h2 className={styles["bundle-included-courses__title"]}>
                مسار تعليم الرسم
            </h2>
            <div className={styles["bundle-included-courses__courses-count"]}>
                4
                دورات تدريبية
            </div>

            <div className={styles["bundle-included-courses__courses-container"]}>

                <div className={styles["bundle-included-courses__courses-container__course"]}>

                    <div className={styles["bundle-included-courses__courses-container__course-index"]}>
                        1
                    </div>

                    <div className={styles["bundle-included-courses__courses-container__course-card"]}>
                        <div className={styles["bundle-included-courses__courses-container__course-card__course-img"]}>
                            <img loading="lazy" src="https://s3.me-south-1.amazonaws.com/tadarab2.0-bahrain/%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%AB%D9%85%D8%A7%D8%B1-%D9%81%D9%8A-%D8%A7%D9%84%D8%A3%D8%B3%D9%87%D9%85-%D9%81%D9%8A%D8%B5%D9%84-%D9%83%D8%B1%D9%83%D8%B1%D9%8A-%D8%A7%D9%84%D9%83%D9%88%D9%8A%D8%AA-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9.jpg" alt="course image" />
                        </div>

                        <div className={styles["bundle-included-courses__courses-container__course-card__trainer-info-box-container"]}>

                            <div className={styles["bundle-included-courses__courses-container__course-card__trainer-info-box"]}>
                                <div className={styles["bundle-included-courses__courses-container__course-card__trainer-info-box__trainer-img"]}>
                                    <img loading="lazy" src="https://s3.me-south-1.amazonaws.com/tadarab2.0-bahrain/29-faysal-karkary-1.png" alt="trainer image" />
                                </div>
                                <div className={styles["bundle-included-courses__courses-container__course-card__trainer-info-box__info"]}>
                                    <h3 className={styles["bundle-included-courses__courses-container__course-card__trainer-info-box__course-name"]} title="تعلم كيفية تداول الأسهم للمبتدئين من الصفر">
                                        تعلم كيفية تداول الأسهم للمبتدئين من الصفر الى الاحتراففففف
                                    </h3>
                                    <div className={styles["bundle-included-courses__courses-container__course-card__trainer-info-box__trainer-name"]}>
                                        فيصل كركري
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className={styles["bundle-included-courses__courses-container__course-card__rating-box"]}>
                                    <span> 4.1 </span>

                                    <ReviewStartIcon color="#ffa120" />

                                    <span> (217 تقييم) </span>
                                </div>
                                <div className={styles["bundle-included-courses__courses-container__course-card__price"]}>
                                    <span> 700 </span>
                                    <span> ج.م </span>
                                </div>
                                {
                                    <div className={styles["bundle-included-courses__courses-container__course-card__old-price"]}>
                                        <span> 800 </span>
                                        <span> ج.م</span>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles["bundle-included-courses__courses-container__course"]}>

                    <div className={styles["bundle-included-courses__courses-container__course-index"]}>
                        2
                    </div>

                    <div className={styles["bundle-included-courses__courses-container__course-card"]}>
                        <div className={styles["bundle-included-courses__courses-container__course-card__course-img"]}>
                            <img loading="lazy" src="https://s3.me-south-1.amazonaws.com/tadarab2.0-bahrain/%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%AB%D9%85%D8%A7%D8%B1-%D9%81%D9%8A-%D8%A7%D9%84%D8%A3%D8%B3%D9%87%D9%85-%D9%81%D9%8A%D8%B5%D9%84-%D9%83%D8%B1%D9%83%D8%B1%D9%8A-%D8%A7%D9%84%D9%83%D9%88%D9%8A%D8%AA-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9.jpg" alt="course image" />
                        </div>

                        <div className={styles["bundle-included-courses__courses-container__course-card__trainer-info-box-container"]}>

                            <div className={styles["bundle-included-courses__courses-container__course-card__trainer-info-box"]}>
                                <div className={styles["bundle-included-courses__courses-container__course-card__trainer-info-box__trainer-img"]}>
                                    <img loading="lazy" src="https://s3.me-south-1.amazonaws.com/tadarab2.0-bahrain/29-faysal-karkary-1.png" alt="trainer image" />
                                </div>
                                <div className={styles["bundle-included-courses__courses-container__course-card__trainer-info-box__info"]}>
                                    <h3 className={styles["bundle-included-courses__courses-container__course-card__trainer-info-box__course-name"]} title="تعلم كيفية تداول الأسهم للمبتدئين من الصفر">
                                        تعلم كيفية تداول الأسهم للمبتدئين من الصفر
                                    </h3>
                                    <div className={styles["bundle-included-courses__courses-container__course-card__trainer-info-box__trainer-name"]}>
                                        فيصل كركري
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className={styles["bundle-included-courses__courses-container__course-card__rating-box"]}>
                                    <span> 4.1 </span>

                                    <ReviewStartIcon color="#ffa120" />

                                    <span> (217 تقييم) </span>
                                </div>
                                <div className={styles["bundle-included-courses__courses-container__course-card__price"]}>
                                    <span> 700 </span>
                                    <span> ج.م </span>
                                </div>
                                {
                                    <div className={styles["bundle-included-courses__courses-container__course-card__old-price"]}>
                                        <span> 800 </span>
                                        <span> ج.م</span>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles["bundle-included-courses__courses-container__course"]}>

                    <div className={styles["bundle-included-courses__courses-container__course-index"]}>
                        3
                    </div>

                    <div className={styles["bundle-included-courses__courses-container__course-card"]}>
                        <div className={styles["bundle-included-courses__courses-container__course-card__course-img"]}>
                            <img loading="lazy" src="https://s3.me-south-1.amazonaws.com/tadarab2.0-bahrain/%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%AB%D9%85%D8%A7%D8%B1-%D9%81%D9%8A-%D8%A7%D9%84%D8%A3%D8%B3%D9%87%D9%85-%D9%81%D9%8A%D8%B5%D9%84-%D9%83%D8%B1%D9%83%D8%B1%D9%8A-%D8%A7%D9%84%D9%83%D9%88%D9%8A%D8%AA-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9.jpg" alt="course image" />
                        </div>

                        <div className={styles["bundle-included-courses__courses-container__course-card__trainer-info-box-container"]}>

                            <div className={styles["bundle-included-courses__courses-container__course-card__trainer-info-box"]}>
                                <div className={styles["bundle-included-courses__courses-container__course-card__trainer-info-box__trainer-img"]}>
                                    <img loading="lazy" src="https://s3.me-south-1.amazonaws.com/tadarab2.0-bahrain/29-faysal-karkary-1.png" alt="trainer image" />
                                </div>
                                <div className={styles["bundle-included-courses__courses-container__course-card__trainer-info-box__info"]}>
                                    <h3 className={styles["bundle-included-courses__courses-container__course-card__trainer-info-box__course-name"]} title="تعلم كيفية تداول الأسهم للمبتدئين من الصفر">
                                        تعلم كيفية تداول الأسهم للمبتدئين من الصفر
                                    </h3>
                                    <div className={styles["bundle-included-courses__courses-container__course-card__trainer-info-box__trainer-name"]}>
                                        فيصل كركري
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className={styles["bundle-included-courses__courses-container__course-card__rating-box"]}>
                                    <span> 4.1 </span>

                                    <ReviewStartIcon color="#ffa120" />

                                    <span> (217 تقييم) </span>
                                </div>
                                <div className={styles["bundle-included-courses__courses-container__course-card__price"]}>
                                    <span> 700 </span>
                                    <span> ج.م </span>
                                </div>
                                {
                                    <div className={styles["bundle-included-courses__courses-container__course-card__old-price"]}>
                                        <span> 800 </span>
                                        <span> ج.م</span>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default memo(BundleIncludedCourses);
