import React, { memo } from 'react';
import styles from "./what-you-will-learn.module.css";
import { useSelector } from "react-redux";
import { TickIcon } from 'common/Icons/Icons';

function WhatYouWillLearn() {
    return (
        <div className={styles["what-you-will-learn"]}>
            <div id="what-you-will-learn" className={styles["what-you-will-learn__scrollspy-helper"]}></div>

            <h2 className={styles["what-you-will-learn__title"]}>
                ماذا سوف تتعلم في الباقة؟
            </h2>
            <div className={styles["what-you-will-learn__list-box"]}>

                {
                    <ul className={styles["what-you-will-learn__list"]}>
                        <li>
                            الرسم بالقلم الرصاص والألوان وعمل اسكتشات

                        </li>
                        <li>
                            الرسم بالقلم الرصاص والألوان وعمل اسكتشات اسكتشات

                        </li>
                        <li>
                            الرسم بالقلم الرصاص والألوان وعمل اسكتشات اسكتشات اسكتشات

                        </li>
                        <li>
                            الرسم بالقلم الرصاص والألوان وعمل اسكتشات اسكتشات

                        </li>
                        <li>
                            الرسم بالقلم الرصاص والألوان وعمل اسكتشات

                        </li>
                        <li>
                            الرسم بالقلم الرصاص والألوان وعمل اسكتشات

                        </li>
                        <li>
                            الرسم بالقلم الرصاص والألوان وعمل اسكتشات

                        </li>
                        <li>
                            الرسم بالقلم الرصاص والألوان وعمل اسكتشات

                        </li>
                    </ul>
                }
            </div>

                <input type="checkbox" className={styles["what-you-will-learn__expand-collapse-btn"]} />
        </div>
    )
}

export default memo(WhatYouWillLearn);
