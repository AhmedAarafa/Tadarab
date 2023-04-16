import React, { useState, useEffect, memo } from 'react';
import styles from "./terms-page.module.css";
import { Row, Col } from "react-bootstrap";
import { axiosInstance } from "configurations/axios/axiosConfig";
import { toggleLoader } from "modules/_Shared/utils/toggleLoader";


function TermsPage() {
    const [termsAndConditions, setTermsAndConditions] = useState("");
    toggleLoader("show");

    useEffect(() => {
        axiosInstance
            .get(`static/terms`)
            .then(function (response: any) {
                setTermsAndConditions(response?.data?.data?.page_html);
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
            <Row className={styles["terms-and-conditions"]}>
                <Col xs={12}>
                    <div dangerouslySetInnerHTML={{__html: termsAndConditions }}></div>
                </Col>
            </Row>

        </>
    )
}

export default memo(TermsPage);
