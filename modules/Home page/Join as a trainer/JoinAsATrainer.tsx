/* eslint-disable @next/next/link-passhref */
import React from 'react'
import styles from "./join-as-a-trainer.module.css";
import { Row, Col, Button } from "react-bootstrap";
import Link from "next/link";


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
                    منصة تدرب هي الخيار الأمثل للاستفادة من أفضل المدربين والخبراء في الوطن العربي
                        </div>
                        <Link href="/joinusasatrainer">
                            <Button className={styles["join-as-a-trainer__btn"]}>
                                    انضم إلينا الآن 

                            </Button> 
                        </Link>
                </Col>
            </Row>
        </>
    )
}
