import React from 'react'
import styles from "./join-as-a-trainer.module.css";
import { Row, Col, Button } from "react-bootstrap";

export default function JoinAsATrainer() {
    return (
        <>
            <Row>
                <Col xs={12} className={styles["join-as-a-trainer"]}>

                    <div className={styles["join-as-a-trainer__title"]}>
                        <span>  هل تريد الانضمام </span>
                        <span>  كمدرب؟   </span>
                    </div>
                    <div className={styles["join-as-a-trainer__para"]}>
                        تحصل منصة تدرب علي اختيار افضل المدربين المعتمدين في الخليج والعالم العربي
                        </div>
                    <Button className={styles["join-as-a-trainer__btn"]}>
                    أنضم إلينا الأن
                    </Button>
                </Col>
            </Row>
        </>
    )
}
