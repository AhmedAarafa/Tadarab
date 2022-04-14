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
        // return () => { setCourseDetails([]) }
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

    /**
    *   Duration calcculation
    */ 
    function duration_calculator(time:any) {      
        time=Number(time);
        let h=(Math.floor(time/3600)),m=(Math.floor(time%3600/60)),s=(Math.floor(time%3600%60));
        return {h,m,s};
    }
    var hours=0,minutes=0;
    if(typeof(courseDetailsData.data)!=='undefined'){
        var total_duration = courseDetailsData.data?.total_duration,total_lectures = courseDetailsData.data?.total_lectures;
            hours=(duration_calculator(total_duration).h),minutes=(duration_calculator(total_duration).m);
    }

    return (
        <>
            <div className={styles["course-content"]}>
                <div id="course-content" className={styles["course-content__scrollspy-helper"]}></div>

                {/* Course lecture heading */}
                <div className={styles["course-content__title"]}>
                    محتوي الدورة التدريبية
                </div>

                {/* Course total hours & minutes */}
                <div className={styles["course-content__course-duration-box"]}>
                    <div className={styles["course-content__course-duration-box__courses-number"]}>
                        <LessonPlayIcon color="#999" opacity="0.7"/>
                        { <span> {total_lectures} </span> }
                        <span> درس </span>
                    </div>
                    -
                    <div className={styles["course-content__course-duration-box__duration"]}>
                        <ClockIcon color="#999" opacity="0.7"/>
                        {
                            hours !== 0 &&
                            <>
                                <span> {hours} </span>
                                <span> س: </span>
                            </>
                        }
                        {
                            minutes !== 0 &&
                            <>
                                <span> {minutes} </span>
                                <span> د </span>
                            </>
                        }
                    </div>
                </div>

                {/* Courses lectures playlist */}
                <TPlayerPlayList />

                {/* Courses Attachments */}
                <Accordion defaultActiveKey="" className={styles["course-content__accordion"]}>
                    {
                        <Accordion.Item  eventKey="20"  className={styles["course-content__accordion__item"]}>
                            <Accordion.Header className={styles["course-content__accordion__header"]}>
                                <div className={styles["course-content__accordion__header__details-box"]}>
                                    <div style={{color:"#af151f"}} className={styles["course-content__accordion__header__group-number"]}>
                                    ملفات شرح
                                    </div>
                                </div>
                            </Accordion.Header>
                            <Accordion.Body className={styles["course-content__accordion__body"]}>
                                {console.log(courseDetailsData.data?.attachments)
                                }
                                { courseDetailsData.data?.attachments !== undefined && courseDetailsData.data?.attachments !== null &&
                                    Object.keys(courseDetailsData.data?.attachments)?.map((att:any,i:number)=>{
                                        return(
                                            <div key={i} className={styles["course-content__accordion__body__list-item"]}>
                                                <div className={styles["course-content__accordion__body__list-item__lesson-details-box"]}>
                                                    <div className={styles["course-content__accordion__body__list-item__icon"]}>
                                                        <AttachmentsIcon />
                                                    </div>
                                                    <div className={styles["course-content__accordion__body__list-item__lesson-name-duration"]}>
                                                        <div>{att.title}</div>
                                                    </div>
                                                </div>
                                                <div style={{cursor:"pointer"}} className={styles["course-content__accordion__body__list-item__download"]}>
                                                    <FileDownloadIcon color="#af151f"/>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </Accordion.Body>
                        </Accordion.Item>
                    }
                </Accordion>

                <Button className={styles["course-content__show-more-btn"]}>
                    أعرض المزيد من الدروس
                </Button>
            </div>
        </>
    );
}