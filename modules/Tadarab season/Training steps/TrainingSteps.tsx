import React from 'react';
import styles from "./training-steps.module.css";
import { Row, Col, Button, Form } from "react-bootstrap";
import { LearnersOutlinedIcon, LearnIcon, InteractIcon, ApplyIcon } from "common/Icons/Icons";
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
                                <LearnIcon />
                            </div>
                            <div className={styles["tadarab-steps__steps__step__title"]}>تعلم</div>
                            <div className={styles["tadarab-steps__steps__step__brief"]}>
                                كل ما تطلبه لتطورك المهني والشخصي تجده مقترناً بالعلم ممزوجاً بالخبرة اللازمة لنجاحك.
                            </div>
                        </div>
                        <div className={styles["tadarab-steps__steps__step"]}>
                            <div className={styles["tadarab-steps__steps__step__icon"]}>
                                <InteractIcon />
                            </div>
                            <div className={styles["tadarab-steps__steps__step__title"]}>تفاعل</div>
                            <div className={styles["tadarab-steps__steps__step__brief"]}>
                                فتح قنوات اتصال مباشرةً مع المدرب من خلال البث المباشر لإجابة على جميع أسئلتك.
                            </div>
                        </div>
                        <div className={styles["tadarab-steps__steps__step"]}>
                            <div className={styles["tadarab-steps__steps__step__icon"]}>
                                <ApplyIcon />
                            </div>
                            <div className={styles["tadarab-steps__steps__step__title"]}>تطبيق</div>
                            <div className={styles["tadarab-steps__steps__step__brief"]}>
                                كل دورة سوف تجد بداخلها مرفقات وتطبيقات حصرية لمساعدتك لفهم المادة العلمية المقدمة.
                            </div>
                        </div>
                    </div>


                    <div className={styles["tadarab-steps__video"]}>
                        <div className={styles["tadarab-steps__video-title"]}>
                            تعلم ما تريد
                        </div>
                        <TadarabVideoPlayer Poster={"/images/TadarabSeasonVideoThumbnail.png"}
                         Source={"https://player.vimeo.com/progressive_redirect/playback/758651474/rendition/1080p/file.mp4?loc=external&signature=c20325feabed8d5eccfc84d5565f47c05733ad089ccd05d35a7cc2b753c37a35"} />
                    </div>
                </Col>
            </Row>
        </>
    )
}
