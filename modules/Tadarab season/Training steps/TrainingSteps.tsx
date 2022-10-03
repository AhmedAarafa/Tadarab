import React from 'react';
import styles from "./training-steps.module.css";
import { Row, Col, Button, Form } from "react-bootstrap";
import { LearnersOutlinedIcon, CoursesIcon, TrainersIcon, ExperienceIcon } from "common/Icons/Icons";
import { TadarabVideoPlayer } from "common/TPlayer/TPlayer";

export default function TrainingSteps() {
    return (
        <>
            <Row>
                <Col xs={12} className={styles["tadarab-steps"]}>
                    <div className={styles["tadarab-steps__title"]}>
                        خطوات تدريب تضمن لك أفضل النتائج
                    </div>
                    <div className={styles["tadarab-steps__steps"]}>
                        <div className={styles["tadarab-steps__steps__step"]}>
                            <div className={styles["tadarab-steps__steps__step__icon"]}>
                                <TrainersIcon color="#af151f" />
                            </div>
                            <div className={styles["tadarab-steps__steps__step__title"]}>تفاعل</div>
                            <div className={styles["tadarab-steps__steps__step__brief"]}>
                                متاحة في أي وقت
                                الدورات تكون في حسابك مدى الحياة
                            </div>
                        </div>
                        <div className={styles["tadarab-steps__steps__step"]}>
                            <div className={styles["tadarab-steps__steps__step__icon"]}>
                                <CoursesIcon color="#af151f" />
                            </div>
                            <div className={styles["tadarab-steps__steps__step__title"]}>تطبيق</div>
                            <div className={styles["tadarab-steps__steps__step__brief"]}>
                                متاحة في أي وقت
                                الدورات تكون في حسابك مدى الحياة
                            </div>
                        </div>
                        <div className={styles["tadarab-steps__steps__step"]}>
                            <div className={styles["tadarab-steps__steps__step__icon"]}>
                                <LearnersOutlinedIcon color="#af151f" />
                            </div>
                            <div className={styles["tadarab-steps__steps__step__title"]}>تعلم</div>
                            <div className={styles["tadarab-steps__steps__step__brief"]}>
                                متاحة في أي وقت
                                الدورات تكون في حسابك مدى الحياة
                            </div>
                        </div>
                    </div>

                    <div className={styles["tadarab-steps__video"]}>
                        <TadarabVideoPlayer Source={"https://vod-progressive.akamaized.net/exp=1664801383~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4532%2F9%2F247664084%2F895955866.mp4~hmac=b6e5b42bcfdeebc9d74652cd7c7af225a2757b4285ecb5b7c05c0a8d1108a42b/vimeo-prod-skyfire-std-us/01/4532/9/247664084/895955866.mp4"} Poster={"https://s3.me-south-1.amazonaws.com/tadarab2.0-bahrain/%D8%A7%D9%84%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D8%A7%D9%84%D8%AF%D8%A7%D8%AE%D9%84%D9%8A-%D9%88%D9%81%D9%86-%D8%A7%D9%84%D8%AF%D9%8A%D9%83%D9%88%D8%B1-%D8%AF%D9%84%D8%A7%D9%84-%D8%A7%D9%84%D9%88%D9%87%D9%8A%D8%A8.jpg"} />
                    </div>
                </Col>
            </Row>
        </>
    )
}
