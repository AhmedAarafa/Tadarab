/* eslint-disable @next/next/no-img-element */
import React ,{ useState,useEffect } from "react";
import styles from "./trainer-info.module.css";
// import {scrollspyHandler} from "./utils"
import {scrollspyHandler} from "../../_Shared/utils/scrollSpy";
import { useDispatch, useSelector } from "react-redux";  
import { LearnersIcon, CoursesNumberIcon,ChevronLeftIcon } from "common/Icons/Icons";


export default function TrainerInfo() {
  const courseDetailsData = useSelector((state:any) => state.courseDetailsData);
  const userStatus = useSelector((state:any) => state.userAuthentication);
  const [courseDetails, setCourseDetails] = useState<any>([]);

  useEffect(() => {
   scrollspyHandler("trainer-info");
  }, []);

  useEffect(() => {

    setCourseDetails(courseDetailsData.data || []);

  }, [courseDetailsData]);

  return (
    <>
      <div  className={styles["trainer-info-section"]}>
        <div id="trainer-info" className={styles["trainer-info-section__scrollspy-helper"]}></div>
        <div className={styles["trainer-info-section__trainer-box"]}>
          <div className={styles["trainer-info-section__trainer-img"]}>
            <img src={courseDetailsData.data?.course_details?.trainer.image} alt="trainer image" />
          </div>
          <div className={styles["trainer-info-section__trainer-info"]}>
            <div className={styles["trainer-info-section__trainer-info__name"]}>
              {courseDetailsData.data?.course_details?.trainer.name_ar}
            </div>
            <div
              className={styles["trainer-info-section__trainer-info__title"]}
            >
             {courseDetailsData.data?.course_details?.trainer.title}
            </div>
            <div
              className={
                styles["trainer-info-section__trainer-info__courses-number-box"]
              }
            >
              <CoursesNumberIcon color="#b4b4b4"/>

              <span> {courseDetailsData.data?.course_details?.trainer.courses_count} </span>
              دورات
              <span
                className={
                  styles[
                    "trainer-info-section__trainer-info__courses-number-box__separator"
                  ]
                }
              >
                {" "}
                -{" "} 
              </span>
             <LearnersIcon color="#b4b4b4"/>

              <span> {courseDetailsData.data?.course_details?.trainer.buyers_count} </span>
              متعلم
            </div>
          </div>
        </div>
        <p className={styles["trainer-info-section__para"]}>
        {courseDetailsData.data?.course_details?.trainer.bio}
        </p>
        <div className={styles["trainer-info-section__view-trainer-account"]}>
            <span>اعرض حساب المدرب</span>
            <ChevronLeftIcon  color="#af151f"/>

        </div>
      </div>
    </>
  );
}
