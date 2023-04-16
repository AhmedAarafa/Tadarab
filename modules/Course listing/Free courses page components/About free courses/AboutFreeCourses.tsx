import React, { memo } from 'react';
import { Row, Col } from "react-bootstrap";
import styles from "./about-free-courses.module.css";

function AboutFreeCourses() {
    return (
        <Row className={styles["about-free-courses"]}>
            <Col xs={12}>
                <div className={styles["about-free-courses__title"]}>عن الدورات المجانية</div>
                <div className={styles["about-free-courses__brief"]}>
                    دورات أونلاين مجانية مقدمة من منصة تدرب يضم هذا القسم أيضاً الدورات المباشرة المجانية وملخصات الكتب يمكنك تحميلها مجاناً
                    يضاف شهرياً العديد من الدورات التدريبية المجانية بشهادات يمكنك تحميلها,
                    يضم هذا القسم دورات مجانية في أكثر من 10 مجالات مختلفة.
                </div>
            </Col>
        </Row>
    )
}

export default memo(AboutFreeCourses);