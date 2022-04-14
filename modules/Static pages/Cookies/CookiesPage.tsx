import React, { useState, useEffect } from 'react';
import styles from "./cookies-page.module.css";
import { Row, Col } from "react-bootstrap";
import { axiosInstance } from "configurations/axios/axiosConfig";
import { toggleLoader } from "modules/_Shared/utils/toggleLoader";

export default function CookiesTermsPage() {
    const [cookiesPolicy, setCookiesPolicy] = useState("");
    toggleLoader("show");

    useEffect(() => {
        axiosInstance
            .get(`static/cookies`)
            .then(function (response: any) {
                setCookiesPolicy(response?.data?.data?.page_html);
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
            <Row className={styles["cookies-terms"]}>
                <Col xs={12}>
                    <div dangerouslySetInnerHTML={{ __html: cookiesPolicy }}></div>
                </Col>
            </Row>

        </>
    )
}
