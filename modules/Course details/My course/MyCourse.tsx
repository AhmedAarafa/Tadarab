/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import styles from "./my-course.module.css";
import { Row, Col, Button, Card, Accordion, ProgressBar } from "react-bootstrap";
import { CheckCircleIcon, AttachmentsIcon, CongratulationsIcon, FileDownloadIcon, ShareIcon } from 'common/Icons/Icons';
import { useDispatch, useSelector } from "react-redux";  
import { axiosInstance } from "configurations/axios/axiosConfig";

export default function MyCourse() {
    const [courseDetails, setCourseDetails] = useState<any>([]);
    const [todaysDate, setTodaysDate] = useState<any>("");
    const [userInfo, setUserInfo] = useState<any>({});
    const courseDetailsData = useSelector((state:any) => state.courseDetailsData);
    const myCourseNavigator = useSelector((state:any) => state.myCourseNavigator);

    useEffect(() => {
        let today:any = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();

        today = dd + '/' + mm + '/' + yyyy;
        setTodaysDate(today);

        axiosInstance
        .get(`users/profile`)
        .then(function (response:any) {
            setUserInfo(response.data.data);
        })
        .catch(function (error) {
          console.log(error); 
        });
      }, []);

    useEffect(() => {
        setCourseDetails(courseDetailsData.data || []);
        // return () => {
        //     setCourseDetails([])
        //   }
      }, [courseDetailsData]);

    return (
        <>
            <Row className={styles["my-course"]}>
              { myCourseNavigator == "curriculum" && 
                <>
                <Col xs={{span:12 , order:2}} sm={4}>
                    <div className={styles["purchased-course-playlist"]}>
                <div className={styles["purchased-course-playlist__progress-box"]}>
                    <span>  منهج الدورة  </span>
                    <span>  ( 32% مكتمل )  </span>
                    <div className={styles["purchased-course-playlist__progress-box__progress-bar"]}>

                        <ProgressBar now={32} />
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
                                        syl.lectures?.map((lec:any,i:number)=>{
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

            </div>
                <Accordion defaultActiveKey="" 
                        className={`${styles["course-content__attachments-accordion"]}`}>

                            <Accordion.Item  eventKey="20"  className={styles["course-content__accordion__item"]}>
                            <Accordion.Header className={styles["course-content__accordion__header"]}>

                                <div className={styles["course-content__accordion__header__details-box"]}>
                                    <div style={{color:"#af151f"}} className={styles["course-content__accordion__header__group-number"]}>
                                    ملفات شرح
                                    </div>
                                </div>
                            </Accordion.Header>
                            <Accordion.Body className={styles["course-content__accordion__body"]}>
                                {
                                    courseDetailsData.data?.attachments?.map((att:any,i:number)=>{
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

                        </Accordion>
                    </Col>
                    <Col xs={12} sm={8} className="d-sm-none">
                        <div className={styles["my-course__video-player"]}>

                            <img src="/images/VideoPlaceholder.png" alt="" />

                        </div>

                        <Accordion defaultActiveKey="" 
                        className={`${styles["course-content__attachments-accordion"]} d-none`}>

                            <Accordion.Item  eventKey="20"  className={styles["course-content__accordion__item"]}>
                            <Accordion.Header className={styles["course-content__accordion__header"]}>

                                <div className={styles["course-content__accordion__header__details-box"]}>
                                    <div style={{color:"#af151f"}} className={styles["course-content__accordion__header__group-number"]}>
                                    ملفات شرح
                                    </div>
                                </div>
                            </Accordion.Header>
                            <Accordion.Body className={styles["course-content__accordion__body"]}>
                                {
                                    courseDetailsData.data?.attachments?.map((att:any,i:number)=>{
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

                        </Accordion>




                    </Col>
                </>
                }

                { myCourseNavigator == "certificate" && 
                    <>
                        <Col xs={12} sm={8} className={styles["my-course__certificate"]}>
                            <div>
                                <img src="/images/شهادة3 website.jpg" alt="course certificate" />
                                <div className={styles["my-course__certificate__date"]}>{todaysDate}</div>
                                <div className={styles["my-course__certificate__course-name"]}>{courseDetailsData.data?.course_details?.title}</div>
                                <div className={styles["my-course__certificate__trainer-name"]}>{courseDetailsData.data?.course_details?.trainer?.name_ar}</div>
                                <div className={styles["my-course__certificate__learner-name"]}>{userInfo?.first_name}</div>

                            </div>
                        </Col>
                        <Col xs={12} sm={4} className={styles["my-course__actions-box"]}>
                            <div className={styles["my-course__actions-box__texts"]}>
                                <CongratulationsIcon/>
                                <div>شهادة اتمام الدورة</div>
                                <div>
                                     مبرووووك يا  
                                    <span>
                                      {userInfo?.first_name} 
                                    </span>

                                </div>
                                <div>لقد فعلتها ! لقد نجحت في إتمام الدورة بنجاح يمكنك الآن تحميل الشهادة ومشاركتها مع أصدقائك</div>

                            </div>
                            <div className={styles["my-course__actions-box__action-btns"]}>
                                <Button>
                                    <FileDownloadIcon color="#fff"/>
                                    <span>
                                    تحميل الشهادة
                                    </span>

                                </Button>
                                <Button>
                                    <ShareIcon />
                                    <span>
                                    مشاركة الشهادة
                                    </span>

                                </Button>
                            </div>
                        </Col>
                    </>
                }
            </Row>
        </>
    )
}
