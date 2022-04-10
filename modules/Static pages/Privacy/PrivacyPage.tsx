import React, { useState, useEffect } from 'react';
import styles from "./privacy-page.module.css";
import { Row, Col } from "react-bootstrap";
import { axiosInstance } from "configurations/axios/axiosConfig";
import { toggleLoader } from "modules/_Shared/utils/toggleLoader";


export default function PrivacyPage() {
    const [privacyPolicy, setPrivacyPolicy] = useState("");
    toggleLoader("show");

    useEffect(() => {
        axiosInstance
            .get(`static/privacy-policy`)
            .then(function (response: any) {
                console.log("response",response);
                setPrivacyPolicy(response?.data?.data?.page_html);
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
            <Row className={styles["privacy-policy"]}>
                <Col xs={12}>
                    <div dangerouslySetInnerHTML={{__html: privacyPolicy }}></div>
                </Col>
            </Row>

        </>
    )
}
