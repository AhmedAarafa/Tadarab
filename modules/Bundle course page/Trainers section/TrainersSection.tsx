/* eslint-disable @next/next/no-img-element */
import React, { memo } from 'react';
import styles from "./trainers-section.module.css";
import { LearnersIcon, CoursesNumberIcon } from "common/Icons/Icons";

function TrainersSection() {
    return (
        <div className={styles["trainers-section"]}>
            <h2 className={styles["trainers-section__title"]}>
                المدربين
            </h2>

            <div className={styles["trainers-section__trainers-list"]}>

                <div className={styles["trainers-section__trainers-list__trainer-box"]}>
                    <img src="https://s3.me-south-1.amazonaws.com/tadarab2.0-bahrain/29-faysal-karkary-1.png" alt="" className={styles["trainers-section__trainers-list__trainer-box__trainer-img"]} />
                    <div className={styles["trainers-section__trainers-list__trainer-box__trainer-info"]}>
                        <div className={styles["trainers-section__trainers-list__trainer-box__trainer-info__name"]}>أ/ عبدالحميد مصطفى</div>
                        <div className={styles["trainers-section__trainers-list__trainer-box__trainer-info__title"]}>مهندس معماري</div>
                        <div className={styles["trainers-section__trainers-list__trainer-box__trainer-info__courses-learners-count"]}>
                            <CoursesNumberIcon color="#b4b4b4" />
                            {" "}
                            <span> 5 </span>
                            دورات
                            -
                            {" "}
                            <LearnersIcon color="#b4b4b4" />
                            <span> 2,930 </span>
                            متعلم
                        </div>

                    </div>

                </div>
                <div className={styles["trainers-section__trainers-list__trainer-box"]}>
                    <img src="https://s3.me-south-1.amazonaws.com/tadarab2.0-bahrain/29-faysal-karkary-1.png" alt="" className={styles["trainers-section__trainers-list__trainer-box__trainer-img"]} />
                    <div className={styles["trainers-section__trainers-list__trainer-box__trainer-info"]}>
                        <div className={styles["trainers-section__trainers-list__trainer-box__trainer-info__name"]}>أ/ عبدالحميد مصطفى</div>
                        <div className={styles["trainers-section__trainers-list__trainer-box__trainer-info__title"]}>مهندس معماري</div>
                        <div className={styles["trainers-section__trainers-list__trainer-box__trainer-info__courses-learners-count"]}>
                            <CoursesNumberIcon color="#b4b4b4" />
                            {" "}
                            <span> 5 </span>
                            دورات
                            -
                            {" "}
                            <LearnersIcon color="#b4b4b4" />
                            <span> 2,930 </span>
                            متعلم
                        </div>

                    </div>

                </div>
                <div className={styles["trainers-section__trainers-list__trainer-box"]}>
                    <img src="https://s3.me-south-1.amazonaws.com/tadarab2.0-bahrain/29-faysal-karkary-1.png" alt="" className={styles["trainers-section__trainers-list__trainer-box__trainer-img"]} />
                    <div className={styles["trainers-section__trainers-list__trainer-box__trainer-info"]}>
                        <div className={styles["trainers-section__trainers-list__trainer-box__trainer-info__name"]}>أ/ عبدالحميد مصطفى</div>
                        <div className={styles["trainers-section__trainers-list__trainer-box__trainer-info__title"]}>مهندس معماري</div>
                        <div className={styles["trainers-section__trainers-list__trainer-box__trainer-info__courses-learners-count"]}>
                            <CoursesNumberIcon color="#b4b4b4" />
                            {" "}
                            <span> 5 </span>
                            دورات
                            -
                            {" "}
                            <LearnersIcon color="#b4b4b4" />
                            <span> 2,930 </span>
                            متعلم
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default memo(TrainersSection);
