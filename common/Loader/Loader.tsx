import React from 'react';
import styles from "./loader.module.css";

export default function Loader() {
    return (
        <div id="overlay-loader" className={styles["overlay-loader"]}>
            <div>tadarab</div>
            <div>ماذا تريد أن تتعلم اليوم؟</div>
            <div className={styles["bouncing-dots"]}>
                <div className={styles["dot1"]}></div>
                <div className={styles["dot2"]}></div>
                <div className={styles["dot3"]}></div>
                <div className={styles["dot4"]}></div>
                <div className={styles["dot5"]}></div>
            </div>
        </div>
    )
}
