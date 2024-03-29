import React, { useState, useEffect, memo } from "react";
import styles from "./course-keywords.module.css";
import { useDispatch, useSelector } from "react-redux";

function CourseKeywords() {

    const courseDetailsData = useSelector((state: any) => state.courseDetailsData);
    const userStatus = useSelector((state: any) => state.userAuthentication);
    const [courseDetails, setCourseDetails] = useState<any>([]);

    useEffect(() => {
        setCourseDetails(courseDetailsData.data || []);
    }, [courseDetailsData]);

    return (
        <>
            <div className={styles["course-keywords"]}>
                <div className={styles["course-keywords__title"]}>
                    الكلمات المفتاحية للدورة
                </div>
                <div className={styles["course-keywords__tags"]}>
                    {courseDetailsData.data?.course_details?.tags?.map((tag: any, i: number) => {
                        return (
                            <div key={i}> {tag?.title} </div>
                        )
                    })}

                </div>
            </div>

        </>
    )
}

export default memo(CourseKeywords);
