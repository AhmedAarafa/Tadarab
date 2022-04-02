import React , { useState,useEffect} from "react";
import styles from "./course-requirements.module.css";
import { useDispatch, useSelector } from "react-redux";  
import { LevelIcon } from "common/Icons/Icons";

export default function CourseRequirements() {
    const courseDetailsData = useSelector((state:any) => state.courseDetailsData);
    const userStatus = useSelector((state:any) => state.userAuthentication);
    const [courseDetails, setCourseDetails] = useState<any>([]);

    useEffect(() => {

        setCourseDetails(courseDetailsData.data || []);
        
        
      }, [courseDetailsData]);

    return (
        <>
        <div className={styles["course-requirements"]}>
            <div className={styles["course-requirements__mid-level"]}>

                <LevelIcon level={courseDetails.course_details?.level}/>
             


                <span >
                    {courseDetails.course_details?.level == 1 && "مستوى مبتدئ" }
                    {courseDetails.course_details?.level == 2 && "مستوى متوسط" }
                    {courseDetails.course_details?.level == 3 && "مستوى محترف" }
                    {courseDetails.course_details?.level == 4 && "كل المستويات" }
                </span>

            </div>
            <div className={styles["course-requirements__box"]}>
                <div className={styles["course-requirements__box__title"]}>
                    متطلبات البدء في الدورة         
                </div>
                <ul className={styles["course-requirements__box__requirements"]}>
                    { courseDetails.course_details?.requirements?.map((req:any,i:number)=>{
                        return(
                            <li key={i}> {req} </li>
                        )
                    })
                    }
                </ul>
            </div>
        </div>
            
        </>
    )
}
