import React, { useState, useEffect } from "react";
import styles from "./course-content.module.css";
import { Accordion , Button} from "react-bootstrap";
// import {scrollspyHandler} from "./utils"
import {scrollspyHandler} from "../../_Shared/utils/scrollSpy"
import { useDispatch, useSelector } from "react-redux";  
import { UnlockIcon,LessonPlayIcon,ClockIcon,LockIcon } from "common/Icons/Icons";

export default function CourseContent() {

    const [courseDetails, setCourseDetails] = useState<any>([]);
    const courseDetailsData = useSelector((state:any) => state.courseDetailsData);
    const userStatus = useSelector((state:any) => state.userAuthentication);

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

      function durationCalculator(time:any) {
        
        time = Number(time);
        let h = Math.floor(time / 3600);
        let m = Math.floor(time % 3600 / 60);
        let s = Math.floor(time % 3600 % 60);

    return {h, m, s};

    }

  return (
    <>
    <div  className={styles["course-content"]}>
    <div id="course-content" className={styles["course-content__scrollspy-helper"]}></div>

        <div className={styles["course-content__title"]}>
        محتوي الدورة التدريبية
        </div>
        <div className={styles["course-content__course-duration-box"]}>
            <div className={styles["course-content__course-duration-box__courses-number"]}>
                <LessonPlayIcon color="#999" opacity="0.7"/>
                <span> {courseDetailsData.data?.syllabus.map((item:any)=> item.lectures.length).reduce((prev:any, curr:any) => prev + curr, 0)} </span>
                <span> درس </span>


            </div>
            -
            <div className={styles["course-content__course-duration-box__duration"]}>
               <ClockIcon color="#999" opacity="0.7"/>
                {
                    durationCalculator(
                        courseDetailsData.data?.syllabus.map((item:any)=> item.total_duration).reduce((prev:any, curr:any) => prev + curr, 0)
                        ).h !== 0 &&
                        <>
                    <span> {durationCalculator(
                    courseDetailsData.data?.syllabus.map((item:any)=> item.total_duration).reduce((prev:any, curr:any) => prev + curr, 0)
                    ).h
                    } </span>
                    <span> س: </span>
                    </>
                }
                {
                    durationCalculator(
                        courseDetailsData.data?.syllabus.map((item:any)=> item.total_duration).reduce((prev:any, curr:any) => prev + curr, 0)
                        ).m !== 0 &&
                        <>
                    <span> {durationCalculator(
                    courseDetailsData.data?.syllabus.map((item:any)=> item.total_duration).reduce((prev:any, curr:any) => prev + curr, 0)
                    ).m
                    } </span>
                    <span> د </span>
                    </>
                }
               

            </div>
        </div>

      <Accordion defaultActiveKey="0" className={styles["course-content__accordion"]}>

          {
              courseDetailsData.data?.syllabus.map((syl:any,i:number)=>{
                  return(

                    <Accordion.Item key={i} eventKey={JSON.stringify(i)}  className={styles["course-content__accordion__item"]}>
                    <Accordion.Header className={styles["course-content__accordion__header"]}>

                        <div className={styles["course-content__accordion__header__details-box"]}>
                            <div className={styles["course-content__accordion__header__group-number"]}>
                            اسم المجموعة 1
                            </div>
                            <div className={styles["course-content__accordion__header__details"]}>
                                <span className={styles["course-content__accordion__header__details__lessons-number"]}>
                                    <span> {syl.lectures.length} </span>
                                    <span> دروس </span>
                                </span>
                                <span className={styles["course-content__accordion__header__details__duration"]}>

                                    (
                                    <span> {durationCalculator(syl.total_duration).h !== 0 && durationCalculator(syl.total_duration).h} </span>  
                                       {durationCalculator(syl.total_duration).h !== 0 && " س : "}
                                        
                                        <span> {durationCalculator(syl.total_duration).m !== 0 && durationCalculator(syl.total_duration).m} </span>  
                                        {durationCalculator(syl.total_duration).m !== 0 && " د "}
                                    )
                                    
                                </span>
                            </div>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body className={styles["course-content__accordion__body"]}>
                        {
                            syl.lectures.map((lec:any,i:number)=>{
                                return(
                                    <div key={i} className={styles["course-content__accordion__body__list-item"]}>
                                        <div className={styles["course-content__accordion__body__list-item__lesson-details-box"]}>
                                            <div className={styles["course-content__accordion__body__list-item__icon"]}>
                                                <LessonPlayIcon color="#be1622" opacity="1"/>
                                                
                                            </div>
                                            <div className={styles["course-content__accordion__body__list-item__lesson-name-duration"]}>
                                                <div>{lec.title}</div>
                                                    <div>
                                                        {durationCalculator(lec.duration).h !==0 &&
                                                         (
                                                        durationCalculator(lec.duration).h.toString().length == 1 ?
                                                         `0${durationCalculator(lec.duration).h}:` 
                                                         :
                                                         `${durationCalculator(lec.duration).h}:`
                                                         ) 
                                                         }
                                                        {durationCalculator(lec.duration).m !==0 &&
                                                         (
                                                        durationCalculator(lec.duration).m.toString().length == 1 ?
                                                         `0${durationCalculator(lec.duration).m}:` 
                                                         :
                                                         `${durationCalculator(lec.duration).m}:`
                                                         ) 
                                                         }
                                                        {durationCalculator(lec.duration).s !==0 &&
                                                         (
                                                        durationCalculator(lec.duration).s.toString().length == 1 ?
                                                         `0${durationCalculator(lec.duration).s}` 
                                                         :
                                                         `${durationCalculator(lec.duration).s}`
                                                         ) 
                                                         }
                                                    
                                                    </div>
                                            </div>
                                        </div>

                                        <div className={styles["course-content__accordion__body__list-item__watch-free"]}>
                                           {
                                               syl.lectures.free && JSON.parse(syl.lectures.free) == true ?
                                               <>
                                               <span> شاهد مجاناً </span>
                                               <UnlockIcon color="#af151f"/>
                                               </>
                                               :
                                               <LockIcon/>
                                           }

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

      <Button className={styles["course-content__show-more-btn"]}>
      أعرض المزيد من الدروس
      </Button>

    </div>
    </>
  );
}
