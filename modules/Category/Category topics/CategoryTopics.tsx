import React from 'react'
import { Row, Col } from "react-bootstrap";
import styles from "./category-topics.module.css";

export default function CategoryTopics() {
    return (
        <>
        <Row className={styles["category-topics"]}>
            <Col xs={12}>
                <div className={styles["category-topics__title"]}>
                المواضيع في الفنون
                </div>

                <div className={styles["category-topics__topics"]}>
                    <div>الرسم</div>
                    <div>القراءة</div>
                    <div>الجرافيك</div>
                    <div>الكتابة الإبداعية</div>
                    <div>مهارات يدوية</div>
                    <div>التصوير</div>

                </div>

            </Col>
        </Row>
            
        </>
    )
}
