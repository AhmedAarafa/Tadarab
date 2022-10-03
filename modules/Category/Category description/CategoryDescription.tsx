/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import { Row, Col, Button } from "react-bootstrap";
import styles from "./category-description.module.css";
import Image from 'next/image';
import { DropDownIcon } from "common/Icons/Icons";

export default function CategoryDescription(props: any) {
    const [showMore, setShowMore] = useState(true);
    const [isTooMuchContent, setIsTooMuchContent] = useState(false);


    useEffect(() => {

        const showMoreIcon: any = document.querySelector("#read-more-icon3 > svg");
        const fadeOut: any = document.getElementById("fadeout3");
        const briefAboutCategory: any = document.getElementById("brief-about-category");
        let el: any = document.getElementById('categoryBrief');
        let divHeight = el?.offsetHeight;
        let lines = Math.ceil(divHeight / 24);

        window.addEventListener("resize", () => {
            let el: any = document.getElementById('categoryBrief');
            let divHeight = el?.offsetHeight;
            let lines = Math.ceil(divHeight / 24);

            if (lines > 6) {
                setIsTooMuchContent(true);
                if (showMore == true) {
                    showMoreIcon ? showMoreIcon.style.cssText = `transform:rotate(180deg) ; transition:all 0.4s ease` : null;
                    fadeOut ? fadeOut.style.cssText = "display:none" : null;
                    briefAboutCategory ? briefAboutCategory.style.cssText = `height:fit-content ; overflow:visible ` : null;
                } else {
                    showMoreIcon ? showMoreIcon.style.cssText = `transform:none ; transition:all 0.4s ease` : null;
                    fadeOut ? fadeOut.style.cssText = "display:block" : null;
                    if (screen.width < 576) {
                        briefAboutCategory ? briefAboutCategory.style.cssText = `height:20rem ; overflow:hidden ` : null;
                    } else {
                        briefAboutCategory ? briefAboutCategory.style.cssText = `height:14rem ; overflow:hidden ` : null;
                    }
                }
            } else {
                setIsTooMuchContent(false);
                briefAboutCategory ? briefAboutCategory.style.cssText = `height:fit-content ; overflow:visible ` : null;
            }
        });

        if (lines > 6) {
            setIsTooMuchContent(true);
            if (showMore == false) {
                showMoreIcon ? showMoreIcon.style.cssText = `transform:rotate(180deg) ; transition:all 0.4s ease` : null;
                fadeOut ? fadeOut.style.cssText = "display:none" : null;
                briefAboutCategory ? briefAboutCategory.style.cssText = `height:fit-content ; overflow:visible ` : null;
            } else {
                showMoreIcon ? showMoreIcon.style.cssText = `transform:none ; transition:all 0.4s ease` : null;
                fadeOut ? fadeOut.style.cssText = "display:block" : null;
                if (screen.width < 576) {
                    briefAboutCategory ? briefAboutCategory.style.cssText = `height:20rem ; overflow:hidden ` : null;
                } else {
                    briefAboutCategory ? briefAboutCategory.style.cssText = `height:14rem ; overflow:hidden ` : null;
                }
            }
        } else {
            setIsTooMuchContent(false);
            briefAboutCategory ? briefAboutCategory.style.cssText = `height:fit-content ; overflow:visible ` : null;
        }

        return () => {
            window.removeEventListener("resize", () => {
                return;
            })
        };
    }, []);


    useEffect(() => {
        const briefAboutCategory: any = document.getElementById("brief-about-category");
        const showMoreIcon: any = document.querySelector("#read-more-icon3 > svg");
        const fadeOut: any = document.getElementById("fadeout3");
        let el: any = document.getElementById('categoryBrief');
        let divHeight = el?.offsetHeight;
        let lines = Math.ceil(divHeight / 24);

        if (lines > 6) {
            setIsTooMuchContent(true);
            if (showMore == false) {
                showMoreIcon ? showMoreIcon.style.cssText = `transform:rotate(180deg) ; transition:all 0.4s ease` : null;
                fadeOut ? fadeOut.style.cssText = "display:none" : null;
                briefAboutCategory ? briefAboutCategory.style.cssText = `height:fit-content ; overflow:visible ` : null;
            } else {
                showMoreIcon ? showMoreIcon.style.cssText = `transform:none ; transition:all 0.4s ease` : null;
                fadeOut ? fadeOut.style.cssText = "display:block" : null;
                if (screen.width < 576) {
                    briefAboutCategory ? briefAboutCategory.style.cssText = `height:20rem ; overflow:hidden ` : null;
                } else {
                    briefAboutCategory ? briefAboutCategory.style.cssText = `height:14rem ; overflow:hidden ` : null;
                }
            }
        } else {
            setIsTooMuchContent(false);
            briefAboutCategory ? briefAboutCategory.style.cssText = `height:fit-content ; overflow:visible ` : null;
        }

    }, [props]);


    function showMoreHandler() {
        const showMoreIcon: any = document.querySelector("#read-more-icon3 > svg");
        const fadeOut: any = document.getElementById("fadeout3");
        const briefAboutCategory: any = document.getElementById("brief-about-category");

        if (showMore == true) {
            showMoreIcon ? showMoreIcon.style.cssText = `transform:rotate(180deg) ; transition:all 0.4s ease` : null;
            fadeOut ? fadeOut.style.cssText = "display:none" : null;
            briefAboutCategory ? briefAboutCategory.style.cssText = `height:fit-content ; overflow:visible ` : null;
            setShowMore(!showMore);
        } else {
            showMoreIcon ? showMoreIcon.style.cssText = `transform:none ; transition:all 0.4s ease` : null;
            fadeOut ? fadeOut.style.cssText = "display:block" : null;
            if (screen.width <= 576) {
                briefAboutCategory ? briefAboutCategory.style.cssText = `height:20rem ; overflow:hidden ` : null;
            } else {
                briefAboutCategory ? briefAboutCategory.style.cssText = `height:14rem ; overflow:hidden ` : null;
            }
            setShowMore(!showMore);
        }

    }

    return (
        <>
            <Row>
                <Col xs={12} className={styles["category-description"]}>
                    <div className={styles["category-description__description"]}>
                        <div className={styles["category-description__img"]} style={{ backgroundColor: `${(props.data?.color)}` }}>
                            <img loading="lazy" src={`/images/${props.data?.parent_icon || props.data?.icon}.svg`}
                                alt={props.data?.parent_icon || props.data?.icon}
                                id={styles[props.data?.parent_icon || props.data?.icon]} />

                        </div>
                        <div className={styles["category-description__info"]}>
                            <div> تخصص </div>
                            <h1> {props.data?.title} </h1>
                            <div>
                                {props.data?.parent_id == 0 &&
                                    <>
                                        <span> {props.data?.subcategories_count} </span>
                                        مواضيع
                                        -
                                    </>
                                }
                                <span> {props.data?.courses_count} </span>
                                دورة
                            </div>
                        </div>
                    </div>
                    <div id="brief-about-category" className={styles["category-description__brief-about-trainer"]}>
                        <p id="categoryBrief" className={styles["category-description__brief"]} dangerouslySetInnerHTML={{ __html: props.data?.description }}></p>
                        {isTooMuchContent &&
                            <>
                                <div className={styles["category-description__brief__read-more"]} onClick={showMoreHandler}>

                                    <span>{showMore ? "اقرأ المزيد" : "اقرأ أقل"}</span>

                                    <span id="read-more-icon3">

                                        <DropDownIcon color="#af151f" />
                                    </span>
                                </div>
                            </>
                        }
                        {isTooMuchContent &&
                            <div id="fadeout3" className={styles["category-description__brief--fadeout-effect"]}>
                            </div>}
                    </div>
                </Col>
            </Row>

        </>
    )
}
