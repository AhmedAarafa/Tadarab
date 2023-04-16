/* eslint-disable @next/next/link-passhref */
import React, { memo } from 'react'
import styles from "./join-as-a-trainer.module.css";
import { Row, Col, Button } from "react-bootstrap";
import Link from "next/link";


function JoinAsATrainer() {
    return (
        <>
            <Row>
                <Col xs={12} className={styles["join-as-a-trainer"]}>

                    <div className={styles["join-as-a-trainer__title"]}>
                        <span>  هل تريد الانضمام </span>
                        <span>  كمدرب؟   </span>
                    </div>
                    <div className={styles["join-as-a-trainer__para"]}>
                    نساعدك على تقديم دورة مميزة لإثراء المحتوى العربي بشيءٍ جديدٍ ذي قيمة.
                        </div>
                        <Link href="/join-as-trainer">
                            <Button className={styles["join-as-a-trainer__btn"]}>
                                    انضم إلينا الآن 

                            </Button> 
                        </Link>
                </Col>
            </Row>
        </>
    )
}

export default memo(JoinAsATrainer);
