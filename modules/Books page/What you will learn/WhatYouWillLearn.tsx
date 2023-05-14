import React, { useState, useEffect, memo } from "react";
import styles from "./what-you-will-learn.module.css";
import { TickIcon } from "common/Icons/Icons";

function WhatYouWillLearn(props: any) {

    return (
        <>
            <div className={styles["what-you-will-learn"]}>
                <div id="what-you-will-learn" className={styles["what-you-will-learn__scrollspy-helper"]}></div>

                <div className={styles["what-you-will-learn__title"]}>
                    ماذا سوف تتعلم؟
                </div>
                <div className={styles["what-you-will-learn__list-box"]}>

                    {
                        props?.data?.key_points?.map((kp: any, i: number) => {
                            return (
                                <div key={i} className={styles["what-you-will-learn__list"]}>
                                    <div>
                                        <TickIcon />
                                    </div>

                                    <span>
                                        {kp}
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
