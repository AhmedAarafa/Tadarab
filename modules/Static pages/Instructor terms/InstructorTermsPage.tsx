import React, { useState, useEffect } from 'react';
import styles from "./instructor-terms-page.module.css";
import { Row, Col } from "react-bootstrap";
import { axiosInstance } from "configurations/axios/axiosConfig";
import { toggleLoader } from "modules/_Shared/utils/toggleLoader";

export default function InstructorTerms() {
    const [instructorTerms, setInstructorTerms] = useState("");
    toggleLoader("show");

    useEffect(() => {
        axiosInstance
            .get(`static/instructor-terms`)
            .then(function (response: any) {
                setInstructorTerms(response?.data?.data?.page_html);
                toggleLoader("hide");
            })
            .catch(function (error) {
                toggleLoader("hide");
                console.log(error);
            });


        return () => {

        }
    }, [])

    return (
        <>
            <Row className={styles["instructor-terms"]}>
                <Col xs={12}>
                    <div dangerouslySetInnerHTML={{ __html: instructorTerms }}></div>
                </Col>
            </Row>

        </>
    )
}
