import React, { memo } from 'react'
import styles from "./guarantee-card.module.css";

function GuaranteeCard() {
    return (
        <>
            <div className={styles["guarantee-card"]}>
                <div className={styles["guarantee-card__icon"]}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2.25rem" height="2.5rem" viewBox="0 0 21.603 24">
                        <g id="guarantee" transform="translate(-4 -3.15)">
                            <g id="Group_11536" data-name="Group 11536" transform="translate(4 3.15)">
                                <path id="Path_13195" data-name="Path 13195" d="M4,5.783V20.365A2.551,2.551,0,0,0,5.485,22.8l8.1,4.051a2.582,2.582,0,0,0,2.43,0l8.1-4.051a2.551,2.551,0,0,0,1.485-2.43V5.783A23.474,23.474,0,0,0,4,5.783Zm17.148,6.346L14.4,18.88a1.226,1.226,0,0,1-.945.405,1.919,1.919,0,0,1-.81-.27l-4.051-2.7a1.428,1.428,0,0,1-.27-1.89,1.328,1.328,0,0,1,1.89-.405l3.105,2.025L19.257,10.1a1.305,1.305,0,0,1,1.89,0A1.468,1.468,0,0,1,21.148,12.129Z" transform="translate(-4 -3.15)" fill="#198754" />
                            </g>
                        </g>
                    </svg>
                </div>
                <div className={styles["guarantee-card__brief"]}>
                    <div> رضائك يهمنا نقدم لك ٣٠ يوم ضمان ذهبي </div>
                    <div> استرداد كامل المبلغ اذا لم تكن راضي عن محتوى الدورة </div>
                </div>
            </div>
        </>
    )
}

export default memo(GuaranteeCard);
