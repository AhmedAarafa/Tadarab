import React, { useState, useEffect } from "react";
import styles from "./course-content.module.css";
import { Accordion, Button, ProgressBar } from "react-bootstrap";
// import {scrollspyHandler} from "./utils"
import { scrollspyHandler } from "../../_Shared/utils/scrollSpy"
import { useDispatch, useSelector } from "react-redux";
import { UnlockIcon, LessonPlayIcon, ClockIcon, LockIcon, AttachmentsIcon, FileDownloadIcon, CheckCircleIcon } from "common/Icons/Icons";
import { TPlayerPlayList } from "common/TPlayer/TPlayer";

export default function CourseContent() {

    const [courseDetails, setCourseDetails] = useState<any>([]);
    const courseDetailsData = useSelector((state: any) => state.courseDetailsData);
    const userStatus = useSelector((state: any) => state.userAuthentication);

    useEffect(() => {
        setCourseDetails(courseDetailsData.data || []);
        // return () => {
        //     setCourseDetails([])
        //   }
    }, [courseDetailsData]);


    useEffect(() => {
        scrollspyHandler("course-content");
        return () => {
            window.removeEventListener("resize", () => {
                return;
            });
            setCourseDetails([])

        }
    }, []);

    //   function durationCalculator(time:any) {

    //     time = Number(time);
    //     let h = Math.floor(time / 3600);
    //     let m = Math.floor(time % 3600 / 60);
    //     let s = Math.floor(time % 3600 % 60);

    // return {h, m, s};

    // }

<<<<<<< HEAD
    return (
        <>
            <div className={styles["course-content"]}>
                <div id="course-content" className={styles["course-content__scrollspy-helper"]}></div>
=======

  return (
    <>
    <div className={styles["course-content"]}>
    <div id="course-content" className={styles["course-content__scrollspy-helper"]}></div>
>>>>>>> bca4bf37b668a15b3f48f35c6ef9d383ab280604

                <div className={styles["course-content__title"]}>
                    محتوي الدورة التدريبية
                </div>

                <div className={styles["course-content__course-duration-box"]}>
                    <div className={styles["course-content__course-duration-box__courses-number"]}>
                        <LessonPlayIcon color="#999" opacity="0.7" />

                        <span> {courseDetailsData?.data?.total_lectures} </span>
                        <span> درس </span>

                    </div>
                    -
                    <div className={styles["course-content__course-duration-box__duration"]}>
                        <ClockIcon color="#999" opacity="0.7" />
                        {
                            courseDetailsData?.data?.total_time?.h !== 0 &&
                            <>
                                <span> {courseDetailsData?.data?.total_time?.h} </span>
                                <span> س: </span>
                            </>
                        }
                        {
                            courseDetailsData?.data?.total_time?.m !== 0 &&
                            <>
                                <span> {courseDetailsData?.data?.total_time?.m} </span>
                                <span> د </span>
                            </>
                        }


                    </div>
                </div>

                <TPlayerPlayList />


                {/* <div className={styles["purchased-course-playlist"]}>
              <div className={styles["purchased-course-playlist__progress-box"]}>
                  <span>  منهج الدورة  </span>
                  <span>  ( 32% مكتمل )  </span>
                <div className={styles["purchased-course-playlist__progress-box__progress-bar"]}>

                    <ProgressBar now={80} />
                </div>
              </div>

            <Accordion defaultActiveKey="" className={styles["course-content__accordion"]}>
                {
                    courseDetailsData.data?.syllabus?.map((syl:any,i:number)=>{
                        return(

                            <Accordion.Item key={i} eventKey={JSON.stringify(i)}  className={styles["purchased-course-content__accordion__item"]}>
                            <Accordion.Header className={styles["purchased-course-content__accordion__header"]}>

                                <div className={styles["course-content__accordion__header__details-box"]}>
                                    <div className={styles["purchased-course-content__accordion__header__group-number"]}>
                                    {syl.title}
                                    <span>(3/5)</span>
                                    </div>
                                
                                </div>
                            </Accordion.Header>
                            <Accordion.Body className={styles["purchased-course-content__accordion__body"]}>
                                {
                                    syl.lectures.map((lec:any,i:number)=>{
                                        return(
                                            <div key={i} className={styles["purchased-course-content__accordion__body__list-item"]}>
                                                <div className={styles["course-content__accordion__body__list-item__lesson-details-box"]}>
                                                    <div className={styles["purchased-course-content__accordion__body__list-item__icon"]}>
                                                        <CheckCircleIcon color="#9E9DA4" />
                                                        
                                                    </div>
                                                    <div className={styles["purchased-course-content__accordion__body__list-item__lesson-name"]}>
                                                        <div>{lec.title}</div>
                                                    </div>
                                                </div>

                                                <div className={styles["purchased-course-content__accordion__body__list-item__duration"]}>
                                                01:34
                                                </div>
                                            </div>

                                        )
                                    })
                                }
                            
                            </Accordion.Body>
                            </Accordion.Item>

                        )

                    })
                }

            
            </Accordion>
          </div> */}

                <Button className={styles["course-content__show-more-btn"]}>
                    أعرض المزيد من الدروس
                </Button>

            </div>
        </>
    );
}
