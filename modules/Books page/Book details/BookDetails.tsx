/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from "react-bootstrap";
import styles from "./book-details.module.css";
import { ShareIcon, FileDownloadIcon, StarIcon, DropDownIcon } from "common/Icons/Icons";
import dynamic from 'next/dynamic';
import { useSelector } from "react-redux";
import Router from "next/router";

const WhatYouWillLearn = dynamic(() => import("modules/Books page/What you will learn/WhatYouWillLearn"));
const TadarabUnlimited = dynamic(() => import("common/Tadarab unlimited/TadarabUnlimited"));

export default function BookDetails(props: any) {
    const [showMore, setShowMore] = useState(true);
    const [isTooMuchContent, setIsTooMuchContent] = useState(false);
    const userStatus = useSelector((state: any) => state.userAuthentication);
    const themeState = useSelector((state: any) => state.themeState.theme);

    useEffect(() => {

        const showMoreIcon: any = document.querySelector("#book-brief-read-more-icon > svg");
        const fadeOut: any = document.getElementById("book-brief-fadeout");
        const briefAboutBook: any = document.getElementById("brief-about-book");
        let el: any = document.getElementById('book-brief');
        let divHeight = el?.offsetHeight;
        let lines = Math.ceil(divHeight / 24);

        window.addEventListener("resize", () => {
            let el: any = document.getElementById('book-brief');
            let divHeight = el?.offsetHeight;
            // console.log("divHeight",divHeight);
            let lines = Math.ceil(divHeight / 24);
            // console.log("Lines: " + lines);

            if (lines > 9) {
                setIsTooMuchContent(true);
                if (showMore == true) {
                    showMoreIcon ? showMoreIcon.style.cssText = `transform:rotate(180deg) ; transition:all 0.4s ease` : null;
                    fadeOut ? fadeOut.style.cssText = "display:none" : null;
                    briefAboutBook ? briefAboutBook.style.cssText = `height:fit-content ; overflow:visible ` : null;
                } else {
                    showMoreIcon ? showMoreIcon.style.cssText = `transform:none ; transition:all 0.4s ease` : null;
                    fadeOut ? fadeOut.style.cssText = "display:block" : null;
                    if (screen.width < 576) {
                        briefAboutBook ? briefAboutBook.style.cssText = `height:36rem ; overflow:hidden ` : null;
                    } else {
                        briefAboutBook ? briefAboutBook.style.cssText = `height:16rem ; overflow:hidden ` : null;
                    }
                }
            } else {
                setIsTooMuchContent(false);
                briefAboutBook ? briefAboutBook.style.cssText = `height:fit-content ; overflow:visible ` : null;
            }

        });

        if (lines > 9) {
            setIsTooMuchContent(true);
            if (showMore == false) {
                showMoreIcon ? showMoreIcon.style.cssText = `transform:rotate(180deg) ; transition:all 0.4s ease` : null;
                fadeOut ? fadeOut.style.cssText = "display:none" : null;
                briefAboutBook ? briefAboutBook.style.cssText = `height:fit-content ; overflow:visible ` : null;
            } else {
                showMoreIcon ? showMoreIcon.style.cssText = `transform:none ; transition:all 0.4s ease` : null;
                fadeOut ? fadeOut.style.cssText = "display:block" : null;
                if (screen.width < 576) {
                    briefAboutBook ? briefAboutBook.style.cssText = `height:36rem ; overflow:hidden ` : null;
                } else {
                    briefAboutBook ? briefAboutBook.style.cssText = `height:16rem ; overflow:hidden ` : null;
                }
            }
        } else {
            setIsTooMuchContent(false);
            briefAboutBook ? briefAboutBook.style.cssText = `height:fit-content ; overflow:visible ` : null;
        }

        return () => {
            window.removeEventListener("resize", () => {
                return;
            })
        };
    }, []);


    function showMoreHandler() {
        const showMoreIcon: any = document.querySelector("#book-brief-read-more-icon > svg");
        const fadeOut: any = document.getElementById("book-brief-fadeout");
        const briefAboutBook: any = document.getElementById("brief-about-book");

        if (showMore == true) {
            showMoreIcon ? showMoreIcon.style.cssText = `transform:rotate(180deg) ; transition:all 0.4s ease` : null;
            fadeOut ? fadeOut.style.cssText = "display:none" : null;
            briefAboutBook ? briefAboutBook.style.cssText = `height:fit-content ; overflow:visible ` : null;
            setShowMore(!showMore);
        } else {
            showMoreIcon ? showMoreIcon.style.cssText = `transform:none ; transition:all 0.4s ease` : null;
            fadeOut ? fadeOut.style.cssText = "display:block" : null;
            if (screen.width <= 576) {
                briefAboutBook ? briefAboutBook.style.cssText = `height:36rem ; overflow:hidden ` : null;
            } else {
                briefAboutBook ? briefAboutBook.style.cssText = `height:16rem ; overflow:hidden ` : null;
            }
            setShowMore(!showMore);
        }

    }

    const ebookDownloadHandler = () => {
        Router.push({
            pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}sign-in`,
            query: { from: "ebook" }
        })
    }

    useEffect(() => {
        const showMoreIcon: any = document.querySelector("#book-brief-read-more-icon > svg");
        const fadeOut: any = document.getElementById("book-brief-fadeout");
        const briefAboutBook: any = document.getElementById("brief-about-book");
        let el: any = document.getElementById('book-brief');
        let divHeight = el?.offsetHeight;
        let lines = Math.ceil(divHeight / 24);

        if (lines > 9) {
            setIsTooMuchContent(true);
            if (showMore == false) {
                showMoreIcon ? showMoreIcon.style.cssText = `transform:rotate(180deg) ; transition:all 0.4s ease` : null;
                fadeOut ? fadeOut.style.cssText = "display:none" : null;
                briefAboutBook ? briefAboutBook.style.cssText = `height:fit-content ; overflow:visible ` : null;
            } else {
                showMoreIcon ? showMoreIcon.style.cssText = `transform:none ; transition:all 0.4s ease` : null;
                fadeOut ? fadeOut.style.cssText = "display:block" : null;
                if (screen.width < 576) {
                    briefAboutBook ? briefAboutBook.style.cssText = `height:36rem ; overflow:hidden ` : null;
                } else {
                    briefAboutBook ? briefAboutBook.style.cssText = `height:16rem ; overflow:hidden ` : null;
                }
            }
        } else {
            setIsTooMuchContent(false);
            briefAboutBook ? briefAboutBook.style.cssText = `height:fit-content ; overflow:visible ` : null;
        }
    }, [props.data])

    return (
        <>
            <Row data-theme={themeState} className={styles["book-details"]}>
                <Col sm={{ span: 3, order: 1 }} xs={{ span: 12, order: 1 }}>
                    <div className={styles["book-details__book-preview"]}>
                        <img loading="lazy" src={props?.data?.image} alt="ebook image" />
                        <Button>
                            {
                                userStatus.isUserAuthenticated ?
                                    <a href={props?.data?.ebook_link}
                                        target="_blank" rel="noreferrer">
                                        <FileDownloadIcon color="#fff" />
                                        تحميل مجاني
                                    </a>
                                    :
                                    <a onClick={() => { ebookDownloadHandler() }}>
                                        <FileDownloadIcon color="#fff" />
                                        تحميل مجاني
                                    </a>

                            }
                        </Button>
                        <Button>
                            <ShareIcon />
                        </Button>
                        <div>أحصل عليه مجاناً فقط علي تدرب</div>

                    </div>
                </Col>

                <Col sm={{ span: 9, order: 2 }} xs={{ span: 12, order: 1 }}>
                    <div className={styles["book-details__book-info"]}>
                        <div className={styles["book-details__book-info__book-chip"]}>
                            كتيب
                        </div>
                        <h1 className={styles["book-details__book-info__book-title"]}>
                            {props?.data?.title}
                        </h1>
                        <div className={styles["book-details__book-info__book-author"]}>
                            {props?.data?.author}
                        </div>
                        <div className={styles["book-details__book-info__downloads-details"]}>
                            {props?.data?.downloads > 0 &&
                                <>
                                    <FileDownloadIcon color="#af151f" />
                                    <div className={styles["book-details__book-info__downloads-details__downloads-number"]}>
                                        <div>عدد التحميلات</div>
                                        <div>{props?.data?.downloads}</div>
                                    </div>
                                </>
                            }
                            <div className={styles["book-details__book-info__downloads-details__manufacturer"]}>
                                <StarIcon color="#af151f" />
                                من انتاج منصة
                                <span> tadarab </span>
                            </div>

                        </div>

                        <div className="d-flex d-sm-none">
                            <TadarabUnlimited />
                        </div>

                        <WhatYouWillLearn data={props?.data} />

                        <div id="brief-about-book" className={styles["book-details__book-info__book-brief"]}>
                            <div className={styles["book-details__book-info__book-brief__title"]}>نبذة عن الكتيب</div>
                            <p id="book-brief" className={styles["book-details__book-info__book-brief__title__para"]}
                                dangerouslySetInnerHTML={{ __html: props?.data?.description }}></p>
                            {isTooMuchContent &&
                                <>
                                    <div className={styles["book-details__book-info__book-brief__brief__read-more"]} onClick={showMoreHandler}>

                                        <span>{showMore ? "اقرأ المزيد" : "اقرأ أقل"}</span>

                                        <span id="book-brief-read-more-icon">

                                            <DropDownIcon color="#af151f" />
                                        </span>
                                    </div>
                                </>
                            }

                            {isTooMuchContent && <div id="book-brief-fadeout" className={styles["book-details__book-info__book-brief__brief--fadeout-effect"]}></div>}
                        </div>

                        <div className={styles["mobile-download-bar"]}>
                            <Button >
                                {
                                    userStatus.isUserAuthenticated ?
                                        <a href={props?.data?.ebook_link}
                                            target="_blank" rel="noreferrer">
                                            <FileDownloadIcon color="#fff" />
                                            تحميل مجاني
                                        </a>
                                        :
                                        <a onClick={() => { ebookDownloadHandler() }}>
                                            <FileDownloadIcon color="#fff" />
                                            تحميل مجاني
                                        </a>

                                }
                            </Button>
                            <Button>
                                <ShareIcon />
                            </Button>
                            <div>أحصل عليه مجاناً فقط علي تدرب</div>

                        </div>


                    </div>
                </Col>

            </Row>
        </>
    )
}
