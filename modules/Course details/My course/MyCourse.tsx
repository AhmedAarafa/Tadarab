/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useCallback } from 'react'
import styles from "./my-course.module.css";
import { Row, Col, Button, Modal, Accordion, ProgressBar } from "react-bootstrap";
import { CheckCircleIcon, AttachmentsIcon, CongratulationsIcon, FileDownloadIcon, ShareIcon } from 'common/Icons/Icons';
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "configurations/axios/axiosConfig";
import { TadarabVideoPlayer, TPlayerPaidPlayList } from "common/TPlayer/TPlayer";
import { setMyCourseNavigator } from "configurations/redux/actions/myCourseNavigator";
import Link from "next/link";
import useResize from "custom hooks/useResize";
import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';
import { toggleLoader } from "modules/_Shared/utils/toggleLoader";
import CommentsSection from "../Comments section/CommentsSection"

export default function MyCourse(props: any) {
    const [courseDetails, setCourseDetails] = useState<any>([]);
    const [todaysDate, setTodaysDate] = useState<any>("");
    const [progressPercentage, setProgressPercentage] = useState(0);
    const [userInfo, setUserInfo] = useState<any>({});
    const [isMobileView, setIsMobileView] = useState(false);
    const [downloadLink, setDownloadLink] = useState<any>("");
    const courseDetailsData = useSelector((state: any) => state.courseDetailsData);
    const myCourseNavigator = useSelector((state: any) => state.myCourseNavigator);
    const dispatch = useDispatch();
    const themeState = useSelector((state: any) => state.themeState.theme);


    const viewportWidthDetector = () => {
        if (window.innerWidth >= 576) {
            setIsMobileView(false);
        } else {
            setIsMobileView(true);
        }
    }
    useResize(viewportWidthDetector);

    useEffect(() => {
        let today: any = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();

        today = dd + '/' + mm + '/' + yyyy;
        setTodaysDate(today);

        axiosInstance.get(`users/profile`).then(function (response: any) {
            setUserInfo(response.data.data);
        }).catch(function (error: any) {
            //console.log(error); 
        });

        return () => {
            dispatch(setMyCourseNavigator("curriculum"));
        }

    }, []);

    useEffect(() => {
        setCourseDetails(courseDetailsData?.data);
        setProgressPercentage((courseDetailsData.data?.progress_percentage) ? courseDetailsData.data?.progress_percentage : 0)
        // return () => {
        //     dispatch(setMyCourseNavigator("curriculum"));
        //   }
    }, [courseDetailsData]);

    // let progress_pr = ((courseDetailsData.data?.progress_percentage) ? courseDetailsData.data?.progress_percentage : 0);

    const handleCaptureClick = useCallback(async () => {
        // toggleLoader("show");
        let win: any = window.open("", '_blank');
        const certificate: any = document.querySelector("#course-certificate");
        certificate.style.cssText = "display:block";

        if (certificate.style.display == "block") {
            const canvas = await html2canvas(certificate);
            const dataURL = canvas.toDataURL('image/png');
            downloadjs(dataURL, 'certificate.png', 'image/png');
            certificate.style.cssText = "display:none";
            // toggleLoader("hide");
            win.close();
        }

    }, []);

    return (
        <>
            <Row className={styles["my-course"]}>
                {myCourseNavigator == "curriculum" &&
                    <>
                        <Col xs={{ span: 12, order: 2 }} sm={{ span: 4, order: 1 }}>
                            <div className={styles["purchased-course-playlist"]}>
                                { /** Course progress **/}

                                <div className={styles["purchased-course-playlist__progress-box"]}>
                                    <span>  منهج الدورة  </span>
                                    <span>  ( {progressPercentage}% مكتمل )  </span>
                                    <div className={styles["purchased-course-playlist__progress-box__progress-bar"]}>
                                        <ProgressBar now={progressPercentage} />
                                    </div>
                                </div>

                                { /** Course Lesions **/}
                                <TPlayerPaidPlayList />
                            </div>
                        </Col>

                        <Col xs={{ span: 12, order: 1 }} sm={{ span: 8, order: 2 }}>
                            { /** Player section **/}
                            <div id="video-player-container" className={`${styles["course-ad__course-ad-video"]}`}>
                                {/* <div className={`${styles["course-ad__course-ad-video__vid-container"]}`}> */}

                                <TadarabVideoPlayer />
                                {/* </div> */}
                                {/** Attachments **/}
                                {courseDetailsData.data?.attachments.length !== 0 && courseDetailsData.data?.attachments !== undefined && courseDetailsData.data?.attachments !== null &&
                                    !isMobileView &&
                                    <Accordion defaultActiveKey="20" className={`${styles["course-content__attachments-accordion"]}`}>
                                        <Accordion.Item eventKey="20" className={styles["course-content__accordion__item"]}>
                                            <Accordion.Header className={styles["course-content__accordion__header"]}>
                                                <div className={styles["course-content__accordion__header__details-box"]}>
                                                    <div style={{ color: "#af151f" }} className={styles["course-content__accordion__header__group-number"]}>
                                                        ملفات شرح
                                                    </div>
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body className={styles["course-content__accordion__body"]}>
                                                {courseDetailsData.data?.attachments !== undefined && courseDetailsData.data?.attachments !== null &&
                                                    (courseDetailsData.data?.attachments).map((att: any, i: number) => {

                                                        return (
                                                            <div key={i} className={styles["course-content__accordion__body__list-item"]}>
                                                                <div className={styles["course-content__accordion__body__list-item__lesson-details-box"]}>
                                                                    <div className={styles["course-content__accordion__body__list-item__icon"]}>
                                                                        <AttachmentsIcon color={themeState == "light" ? "#af151f" : "#f5f5f5"} />
                                                                    </div>
                                                                    <div className={styles["course-content__accordion__body__list-item__lesson-name-duration"]}>
                                                                        <div>{att?.title}</div>
                                                                    </div>
                                                                </div>
                                                                <div style={{ cursor: "pointer" }} className={styles["course-content__accordion__body__list-item__download"]}>
                                                                    {att.is_trainer_certificate ?

                                                                        <div onClick={() => { handleCaptureClick() }}>
                                                                            <FileDownloadIcon color={themeState == "light" ? "#af151f" : "#f5f5f5"} />
                                                                        </div>
                                                                        :
                                                                        <Link href={att.link} passHref>
                                                                            <a target="_blank" rel="noopener">
                                                                                <FileDownloadIcon color={themeState == "light" ? "#af151f" : "#f5f5f5"} />
                                                                            </a>
                                                                        </Link>
                                                                    }
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                }
                            </div>

                        </Col>
                        <Col xs={{ span: 12, order: 3 }} sm={{ span: 4 }}></Col>

                        <Col xs={{ span: 12, order: 3 }} sm={{ span: 8, order: 3 }}>

                            {/** Attachments **/}
                            {isMobileView && courseDetailsData.data?.attachments.length !== 0 && courseDetailsData.data?.attachments !== undefined && courseDetailsData.data?.attachments !== null &&
                                <Accordion defaultActiveKey="20" className={`${styles["course-content__attachments-accordion"]}`}>
                                    <Accordion.Item eventKey="20" className={styles["course-content__accordion__item"]}>
                                        <Accordion.Header className={styles["course-content__accordion__header"]}>
                                            <div className={styles["course-content__accordion__header__details-box"]}>
                                                <div style={{ color: "#af151f" }} className={styles["course-content__accordion__header__group-number"]}>
                                                    ملفات شرح
                                                </div>
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body className={styles["course-content__accordion__body"]}>
                                            {courseDetailsData.data?.attachments !== undefined && courseDetailsData.data?.attachments !== null &&
                                                (courseDetailsData.data?.attachments).map((att: any, i: number) => {

                                                    return (
                                                        <div key={i} className={styles["course-content__accordion__body__list-item"]}>
                                                            <div className={styles["course-content__accordion__body__list-item__lesson-details-box"]}>
                                                                <div className={styles["course-content__accordion__body__list-item__icon"]}>
                                                                    <AttachmentsIcon color={themeState == "light" ? "#af151f" : "#f5f5f5"} />
                                                                </div>
                                                                <div className={styles["course-content__accordion__body__list-item__lesson-name-duration"]}>
                                                                    <div>{att?.title}</div>
                                                                </div>
                                                            </div>
                                                            <div style={{ cursor: "pointer" }} className={styles["course-content__accordion__body__list-item__download"]}>
                                                                {att.is_trainer_certificate ?

                                                                    <div onClick={() => { handleCaptureClick() }}>
                                                                        <FileDownloadIcon color={themeState == "light" ? "#af151f" : "#f5f5f5"} />
                                                                    </div>
                                                                    :
                                                                    <Link href={att.link} passHref>
                                                                        <a target="_blank" rel="noopener">
                                                                            <FileDownloadIcon color={themeState == "light" ? "#af151f" : "#f5f5f5"} />
                                                                        </a>
                                                                    </Link>
                                                                }
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>}
                        </Col>

                        <Col className={styles["my-course__comments-section"]} xs={{ span: 12, order: 5 }} sm={{ span: 12, order: 5 }}>
                            <CommentsSection Cid={props.Cid} />
                        </Col>
                    </>
                }
            </Row>


            <div className={styles["my-course__certificate"]} style={{ display: "none", position: "fixed", bottom: "0", left: "0" }} id="course-certificate">
                <img src="/images/شهادة3 website.jpg" alt="course certificate" />
                <div className={styles["my-course__certificate__date"]}>{todaysDate}</div>
                <div className={styles["my-course__certificate__course-name"]}>{courseDetailsData.data?.course_details?.title}</div>
                <div className={styles["my-course__certificate__trainer-name"]}>{courseDetailsData.data?.course_details?.trainer?.name_ar}</div>
                <div className={styles["my-course__certificate__learner-name"]}>{userInfo?.first_name}</div>
            </div>

        </>
    )
}
