import React, { useState, useEffect } from "react";
import styles from "./what-you-will-learn.module.css";
import { TickIcon } from "common/Icons/Icons";

export default function WhatYouWillLearn(props: any) {
    const [showMore, setShowMore] = useState(true);

    function showMoreHandler() {
        const showMoreIcon: any = document.getElementById("what-you-will-learn-read-more-icon");
        const fadeOut: any = document.getElementById("what-you-will-learn-fadeout");
        const whatYouWillLearnList: any = document.getElementById("what-you-will-learn-list");

        setShowMore(!showMore);

        if (showMore == true) {
            showMoreIcon ? showMoreIcon.style.cssText = `transform:rotate(180deg) ; transition:all 0.4s ease` : null;
            fadeOut ? fadeOut.style.cssText = "display:none" : null;
            whatYouWillLearnList ? whatYouWillLearnList.style.cssText = `height:fit-content ; overflow:visible` : null;
        } else {
            showMoreIcon ? showMoreIcon.style.cssText = `transform:none ; transition:all 0.4s ease` : null;
            fadeOut ? fadeOut.style.cssText = "display:block" : null;
            if (screen.width <= 576) {
                whatYouWillLearnList ? whatYouWillLearnList.style.cssText = `height:52rem ; overflow:hidden` : null;
            } else {
                whatYouWillLearnList ? whatYouWillLearnList.style.cssText = `height:19rem ; overflow:hidden` : null;
            }
        }
        window.addEventListener("resize", () => {
            if (showMore == true) {
                showMoreIcon ? showMoreIcon.style.cssText = `transform:rotate(180deg) ; transition:all 0.4s ease` : null;
                fadeOut ? fadeOut.style.cssText = "display:none" : null;
                whatYouWillLearnList ? whatYouWillLearnList.style.cssText = `height:fit-content ; overflow:visible` : null;
            } else {
                showMoreIcon ? showMoreIcon.style.cssText = `transform:none ; transition:all 0.4s ease` : null;
                fadeOut ? fadeOut.style.cssText = "display:block" : null;
                if (screen.width < 576) {
                    whatYouWillLearnList ? whatYouWillLearnList.style.cssText = `height:52rem ; overflow:hidden` : null;
                } else {
                    whatYouWillLearnList ? whatYouWillLearnList.style.cssText = `height:19rem ; overflow:hidden` : null;
                }
            }
        })
    }

    return (
        <>
            <div id="what-you-will-learn-list" className={styles["what-you-will-learn"]}>
                <div id="what-you-will-learn" className={styles["what-you-will-learn__scrollspy-helper"]}></div>

                <div className={styles["what-you-will-learn__title"]}>
                    ماذا سوف تتعلم؟
                </div>
                {
                    props?.data?.key_points?.map((kp:any, i:number) => {
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

                <div className={styles["what-you-will-learn__read-more"]} onClick={showMoreHandler}>
                    {
                        showMore ?
                            <>
                                <span>اقرأ المزيد</span>
                                <svg id="what-you-will-learn-read-more-icon" xmlns="http://www.w3.org/2000/svg" width="0.625rem" height="0.375rem" viewBox="0 0 10 5.993">
                                    <g id="more" transform="translate(0 5.993) rotate(-90)">
                                        <path id="Path_12841" data-name="Path 12841" d="M11.454,4.29a.961.961,0,0,1,.164-.13L15.494.284a.969.969,0,0,1,1.37,1.37L13.525,4.992,16.88,8.347a.968.968,0,1,1-1.369,1.369L11.618,5.824a1.005,1.005,0,0,1-.164-1.534Z" transform="translate(-11.171 -0.001)" fill="#af151f" />
                                    </g>
                                </svg>
                            </>
                            :
                            <>
                                <span>اقرأ أقل</span>
                                <svg id="what-you-will-learn-read-more-icon" xmlns="http://www.w3.org/2000/svg" width="0.625rem" height="0.375rem" viewBox="0 0 10 5.993">
                                    <g id="more" transform="translate(0 5.993) rotate(-90)">
                                        <path id="Path_12841" data-name="Path 12841" d="M11.454,4.29a.961.961,0,0,1,.164-.13L15.494.284a.969.969,0,0,1,1.37,1.37L13.525,4.992,16.88,8.347a.968.968,0,1,1-1.369,1.369L11.618,5.824a1.005,1.005,0,0,1-.164-1.534Z" transform="translate(-11.171 -0.001)" fill="#af151f" />
                                    </g>
                                </svg>
                            </>
                    }

                </div>
                <div id="what-you-will-learn-fadeout" className={styles["what-you-will-learn--fadeout-effect"]}></div>
            </div>
        </>
    );
}
