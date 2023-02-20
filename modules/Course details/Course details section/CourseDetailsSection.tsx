import React, { useState, useEffect } from "react";
import styles from "./course-details-section.module.css";
import { useDispatch, useSelector } from "react-redux";
import { DropDownIcon } from "common/Icons/Icons";

export default function CourseDetailsSection() {
    const [showMore, setShowMore] = useState(true);
    const courseDetailsData = useSelector((state: any) => state.courseDetailsData);
    const userStatus = useSelector((state: any) => state.userAuthentication);
    const [courseDetails, setCourseDetails] = useState<any>([]);

    useEffect(() => {
        setCourseDetails(courseDetailsData.data || []);
    }, [courseDetailsData]);


    return (
        <>
            <div id="course-details" className={styles["course-details-section"]}>
                <h2 className={styles["course-details-section__title"]}>تفاصيل الدورة</h2>
                <p className={styles["course-details-section__para"]}
                    dangerouslySetInnerHTML={{ __html: courseDetailsData.data?.course_details?.description }}>
                </p>
                <input type="checkbox" className={styles["course-details-section__expand-collapse-btn"]} />
            </div>
        </>
    );
}
