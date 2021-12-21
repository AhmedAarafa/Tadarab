import React from 'react'
import styles from "./course-requirements.module.css";

export default function CourseRequirements() {
    return (
        <>
        <div className={styles["course-requirements"]}>
            <div className={styles["course-requirements__mid-level"]}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.7rem" viewBox="0 0 30 24">
                    <g id="level" transform="translate(-1157 -5536)">
                        <rect id="Rectangle_3357" data-name="Rectangle 3357" width="8" height="24" rx="3" transform="translate(1179 5536)" fill="#c1121f" opacity="0.2"/>
                        <rect id="Rectangle_3358" data-name="Rectangle 3358" width="8" height="18" rx="3" transform="translate(1168 5542)" fill="#c1121f"/>
                        <rect id="Rectangle_3359" data-name="Rectangle 3359" width="8" height="10" rx="3" transform="translate(1157 5550)" fill="#c1121f"/>
                    </g>
                </svg>


                <span >
                مستوى متوسط
                </span>

            </div>
            <div className={styles["course-requirements__box"]}>
                <div className={styles["course-requirements__box__title"]}>
                    متطلبات البدء في الدورة         
                </div>
                <ul className={styles["course-requirements__box__requirements"]}>
                    <li> كشكول رسم </li>
                    <li>  ألوان   </li>
                </ul>
            </div>
        </div>
            
        </>
    )
}
