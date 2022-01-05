import React from 'react'
import styles from "./course-keywords.module.css";

export default function CourseKeywords() {
    return (
        <>
        <div className={styles["course-keywords"]}>
            <div className={styles["course-keywords__title"]}>
            الكلمات المفتاحية للدورة
            </div>
            <div className={styles["course-keywords__tags"]}>
                <span> الرسم للمبتدئين </span>
                <span> الرسم </span>
                <span> التلوين </span>
                <span> الألوان </span>
                <span> الفنون </span>
            </div>
        </div>
            
        </>
    )
}
