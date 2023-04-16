import React, { useState, useEffect, memo } from "react";
import styles from "./what-you-will-learn.module.css";
import { scrollspyHandler } from "../../_Shared/utils/scrollSpy";
import { useSelector } from "react-redux";


function WhatYouWillLearn() {
    const [showMore, setShowMore] = useState(false);
    const courseDetailsData = useSelector((state: any) => state.courseDetailsData);
    const userStatus = useSelector((state: any) => state.userAuthentication);
    const [courseDetails, setCourseDetails] = useState<any>([]);


    useEffect(() => {
        scrollspyHandler("what-you-will-learn");
    }, []);

    useEffect(() => {
        setCourseDetails(courseDetailsData.data || []);
    }, [courseDetailsData]);

    return (
        <>
            <div id="what-you-will-learn-list" className={styles["what-you-will-learn"]}>
                <div id="what-you-will-learn" className={styles["what-you-will-learn__scrollspy-helper"]}></div>

                <h2 className={styles["what-you-will-learn__title"]}>
                    ماذا سوف تتعلم في الدورة؟
                </h2>
                <div className={styles["what-you-will-learn__list-box"]}>

                    {
                        courseDetails?.course_details?.key_points?.map((course: any, i: number) => {
                            return (
                                <div key={i} className={styles["what-you-will-learn__list"]}>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="0.75rem" viewBox="0 0 18.029 14">
                                            <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754" />
                                        </svg>
                                    </div>

                                    <span>
                                        {course}
                                    </span>
                                </div>
                            )
                        })
                    }
                </div>

                <input type="checkbox" className={styles["what-you-will-learn__expand-collapse-btn"]} />
            </div>
        </>
    );
}

export default memo(WhatYouWillLearn);
