import React, { useEffect } from "react";
import styles from "./course-content.module.css";
import { Accordion , Button} from "react-bootstrap";
// import {scrollspyHandler} from "./utils"
import {scrollspyHandler} from "../../_Shared/utils/scrollSpy"

export default function CourseContent() {
    useEffect(() => {
       scrollspyHandler("course-content");
       return () => {
        window.removeEventListener("resize", () => {
          return;
        });
      }
      }, []);
  return (
    <>
    <div  className={styles["course-content"]}>
    <div id="course-content" className={styles["course-content__scrollspy-helper"]}></div>

        <div className={styles["course-content__title"]}>
        محتوي الدورة التدريبية
        </div>
        <div className={styles["course-content__course-duration-box"]}>
            <div className={styles["course-content__course-duration-box__courses-number"]}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.563rem" height="1.563rem" viewBox="0 0 25.103 25.103">
                    <path id="lessons" d="M20.552,8A12.552,12.552,0,1,0,33.1,20.552,12.549,12.549,0,0,0,20.552,8Zm5.856,13.766L17.5,26.878a1.217,1.217,0,0,1-1.807-1.063V15.288A1.218,1.218,0,0,1,17.5,14.225l8.908,5.415A1.219,1.219,0,0,1,26.407,21.766Z" transform="translate(-8 -8)" fill="#999" opacity="0.7"/>
                </svg>
                <span> 21 </span>
                <span> درس </span>


            </div>
            -
            <div className={styles["course-content__course-duration-box__duration"]}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.563rem" height="1.563rem" viewBox="0 0 25.103 25.103">
                  <path id="time" d="M20.552,8A12.552,12.552,0,1,0,33.1,20.552,12.549,12.549,0,0,0,20.552,8Zm4.681,15.841h0L24.22,25.107a.81.81,0,0,1-1.138.127h0l-3.391-2.516a2.024,2.024,0,0,1-.759-1.581V13.264a.81.81,0,0,1,.81-.81h1.62a.81.81,0,0,1,.81.81v7.288L25.107,22.7A.81.81,0,0,1,25.233,23.841Z" transform="translate(-8 -8)" fill="#999" opacity="0.7"/>
                </svg>
                <span> 6 </span>
                <span> س: </span>
                <span> 48 </span>
                <span> د </span>

            </div>
        </div>

      <Accordion defaultActiveKey="0" className={styles["course-content__accordion"]}>
        <Accordion.Item eventKey="0"  className={styles["course-content__accordion__item"]}>
          <Accordion.Header className={styles["course-content__accordion__header"]}>

              <div className={styles["course-content__accordion__header__details-box"]}>
                <div className={styles["course-content__accordion__header__group-number"]}>
                اسم المجموعة 1
                </div>
                <div className={styles["course-content__accordion__header__details"]}>
                    <span className={styles["course-content__accordion__header__details__lessons-number"]}>
                        <span> 4 </span>
                        <span> دروس </span>
                    </span>
                    <span className={styles["course-content__accordion__header__details__duration"]}>
                        (
                        <span> 2 </span>  
                            س
                            :
                            <span> 45 </span>  
                            د
                        )
                    </span>
                </div>
              </div>
          </Accordion.Header>
          <Accordion.Body className={styles["course-content__accordion__body"]}>
            <div className={styles["course-content__accordion__body__list-item"]}>
                <div className={styles["course-content__accordion__body__list-item__lesson-details-box"]}>
                    <div className={styles["course-content__accordion__body__list-item__icon"]}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.875rem" viewBox="0 0 30 30">
                             <path id="lessonVideo" d="M23,8A15,15,0,1,0,38,23,15,15,0,0,0,23,8Zm7,16.452L19.353,30.56a1.454,1.454,0,0,1-2.159-1.27V16.71a1.455,1.455,0,0,1,2.159-1.27L30,21.911A1.456,1.456,0,0,1,30,24.452Z" transform="translate(-8 -8)" fill="#be1622"/>
                        </svg>
                        
                    </div>
                    <div className={styles["course-content__accordion__body__list-item__lesson-name-duration"]}>
                        <div>اسم الدرس والفيديو</div>
                        <div>03:45</div>
                    </div>
                </div>

                <div className={styles["course-content__accordion__body__list-item__watch-free"]}>
                    <span> شاهد مجاناً </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="1.25rem" viewBox="0 0 17.5 19.969">
                         <path id="freeLesson" d="M15.625,10H5.937V5.972a2.813,2.813,0,1,1,5.625-.035v.625A.935.935,0,0,0,12.5,7.5h1.25a.935.935,0,0,0,.937-.937V5.937A5.938,5.938,0,1,0,2.812,6v4H1.875A1.875,1.875,0,0,0,0,11.874v6.25A1.875,1.875,0,0,0,1.875,20h13.75A1.875,1.875,0,0,0,17.5,18.124v-6.25A1.875,1.875,0,0,0,15.625,10Z" transform="translate(0 -0.031)" fill="#af151f"/>
                    </svg>

                </div>
            </div>
            <div className={styles["course-content__accordion__body__list-item"]}>
                <div className={styles["course-content__accordion__body__list-item__lesson-details-box"]}>
                    <div className={styles["course-content__accordion__body__list-item__icon"]}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.875rem" viewBox="0 0 30 30">
                             <path id="lessonVideo" d="M23,8A15,15,0,1,0,38,23,15,15,0,0,0,23,8Zm7,16.452L19.353,30.56a1.454,1.454,0,0,1-2.159-1.27V16.71a1.455,1.455,0,0,1,2.159-1.27L30,21.911A1.456,1.456,0,0,1,30,24.452Z" transform="translate(-8 -8)" fill="#be1622"/>
                        </svg>
                    </div>
                    <div className={styles["course-content__accordion__body__list-item__lesson-name-duration"]}>
                        <div>اسم الدرس والفيديو</div>
                        <div>03:45</div>
                    </div>
                </div>

                <div className={styles["course-content__accordion__body__list-item__watch-free"]}>
                    <span> شاهد مجاناً </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="1.25rem" viewBox="0 0 17.5 19.969">
                         <path id="freeLesson" d="M15.625,10H5.937V5.972a2.813,2.813,0,1,1,5.625-.035v.625A.935.935,0,0,0,12.5,7.5h1.25a.935.935,0,0,0,.937-.937V5.937A5.938,5.938,0,1,0,2.812,6v4H1.875A1.875,1.875,0,0,0,0,11.874v6.25A1.875,1.875,0,0,0,1.875,20h13.75A1.875,1.875,0,0,0,17.5,18.124v-6.25A1.875,1.875,0,0,0,15.625,10Z" transform="translate(0 -0.031)" fill="#af151f"/>
                    </svg>


                </div>
            </div>
            <div className={styles["course-content__accordion__body__list-item"]}>
                <div className={styles["course-content__accordion__body__list-item__lesson-details-box"]}>
                    <div className={styles["course-content__accordion__body__list-item__icon"]}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.875rem" viewBox="0 0 30 30">
                             <path id="lessonVideo" d="M23,8A15,15,0,1,0,38,23,15,15,0,0,0,23,8Zm7,16.452L19.353,30.56a1.454,1.454,0,0,1-2.159-1.27V16.71a1.455,1.455,0,0,1,2.159-1.27L30,21.911A1.456,1.456,0,0,1,30,24.452Z" transform="translate(-8 -8)" fill="#be1622"/>
                        </svg>
                        

                    </div>
                    <div className={styles["course-content__accordion__body__list-item__lesson-name-duration"]}>
                        <div>اسم الدرس والفيديو</div>
                        <div>03:45</div>
                    </div>
                </div>

                <div className={styles["course-content__accordion__body__list-item__watch-free"]}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="1.25rem" viewBox="0 0 17.5 20">
                             <path id="locked" d="M15.625,8.75h-.937V5.938a5.938,5.938,0,1,0-11.876,0V8.75H1.875A1.875,1.875,0,0,0,0,10.625v7.5A1.875,1.875,0,0,0,1.875,20h13.75A1.875,1.875,0,0,0,17.5,18.125v-7.5A1.875,1.875,0,0,0,15.625,8.75Zm-4.062,0H5.938V5.938a2.813,2.813,0,1,1,5.625,0Z" opacity="0.36"/>
                    </svg>


                </div>
            </div>
            <div className={styles["course-content__accordion__body__list-item"]}>
                <div className={styles["course-content__accordion__body__list-item__lesson-details-box"]}>
                    <div className={styles["course-content__accordion__body__list-item__icon"]}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.875rem" viewBox="0 0 30 34.286">
                      <path id="docs" d="M21.429,30v2.679a1.607,1.607,0,0,1-1.607,1.607H1.607A1.607,1.607,0,0,1,0,32.679V8.036A1.607,1.607,0,0,1,1.607,6.429H6.429V26.25A3.754,3.754,0,0,0,10.179,30Zm0-23.036V0H10.179A1.607,1.607,0,0,0,8.571,1.607V26.25a1.607,1.607,0,0,0,1.607,1.607H28.393A1.607,1.607,0,0,0,30,26.25V8.571H23.036A1.612,1.612,0,0,1,21.429,6.964Zm8.1-2.078L25.114.471A1.607,1.607,0,0,0,23.977,0h-.406V6.429H30V6.023a1.607,1.607,0,0,0-.471-1.136Z" fill="#be1622"/>
                    </svg>
                    </div>
                    <div className={styles["course-content__accordion__body__list-item__lesson-name-duration"]}>
                        <div>اسم الدرس والفيديو</div>
                        <div>03:45</div>
                    </div>
                </div>

                <div className={styles["course-content__accordion__body__list-item__watch-free"]}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="1.25rem" viewBox="0 0 17.5 20">
                             <path id="locked" d="M15.625,8.75h-.937V5.938a5.938,5.938,0,1,0-11.876,0V8.75H1.875A1.875,1.875,0,0,0,0,10.625v7.5A1.875,1.875,0,0,0,1.875,20h13.75A1.875,1.875,0,0,0,17.5,18.125v-7.5A1.875,1.875,0,0,0,15.625,8.75Zm-4.062,0H5.938V5.938a2.813,2.813,0,1,1,5.625,0Z" opacity="0.36"/>
                    </svg>

                </div>
            </div>
            <div className={styles["course-content__accordion__body__list-item"]}>
                <div className={styles["course-content__accordion__body__list-item__lesson-details-box"]}>
                    <div className={styles["course-content__accordion__body__list-item__icon"]}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.875rem" viewBox="0 0 30 30">
                        <path id="quiz" d="M38,23A15,15,0,1,1,23,8,15,15,0,0,1,38,23ZM23.4,12.96a7.834,7.834,0,0,0-7.049,3.856.727.727,0,0,0,.164.983l2.1,1.591a.726.726,0,0,0,1.008-.128c1.08-1.37,1.821-2.165,3.466-2.165,1.236,0,2.764.8,2.764,1.993,0,.906-.748,1.371-1.968,2.055-1.423.8-3.306,1.79-3.306,4.274v.242a.726.726,0,0,0,.726.726h3.387a.726.726,0,0,0,.726-.726v-.081c0-1.721,5.031-1.793,5.031-6.452C30.451,15.621,26.812,12.96,23.4,12.96Zm-.4,15a2.782,2.782,0,1,0,2.782,2.782A2.785,2.785,0,0,0,23,27.96Z" transform="translate(-8 -8)" fill="#be1622"/>
                    </svg>
                    </div>
                    <div className={styles["course-content__accordion__body__list-item__lesson-name-duration"]}>
                        <div>اسم الدرس والفيديو</div>
                        <div>03:45</div>
                    </div>
                </div>

                <div className={styles["course-content__accordion__body__list-item__watch-free"]}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="1.25rem" viewBox="0 0 17.5 20">
                            <path id="locked" d="M15.625,8.75h-.937V5.938a5.938,5.938,0,1,0-11.876,0V8.75H1.875A1.875,1.875,0,0,0,0,10.625v7.5A1.875,1.875,0,0,0,1.875,20h13.75A1.875,1.875,0,0,0,17.5,18.125v-7.5A1.875,1.875,0,0,0,15.625,8.75Zm-4.062,0H5.938V5.938a2.813,2.813,0,1,1,5.625,0Z" opacity="0.36"/>
                    </svg>
                </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1"  className={styles["course-content__accordion__item"]}>
          <Accordion.Header className={styles["course-content__accordion__header"]}>

              <div className={styles["course-content__accordion__header__details-box"]}>
                <div className={styles["course-content__accordion__header__group-number"]}>
                اسم المجموعة 2
                </div>
                <div className={styles["course-content__accordion__header__details"]}>
                    <span className={styles["course-content__accordion__header__details__lessons-number"]}>
                        <span> 4 </span>
                        <span> دروس </span>
                    </span>
                    <span className={styles["course-content__accordion__header__details__duration"]}>
                        (
                        <span> 2 </span>  
                            س
                            :
                            <span> 45 </span>  
                            د
                        )
                    </span>
                </div>
              </div>
          </Accordion.Header>
          <Accordion.Body className={styles["course-content__accordion__body"]}>
            <div className={styles["course-content__accordion__body__list-item"]}>
                <div className={styles["course-content__accordion__body__list-item__lesson-details-box"]}>
                    <div className={styles["course-content__accordion__body__list-item__icon"]}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.875rem" viewBox="0 0 30 30">
                             <path id="lessonVideo" d="M23,8A15,15,0,1,0,38,23,15,15,0,0,0,23,8Zm7,16.452L19.353,30.56a1.454,1.454,0,0,1-2.159-1.27V16.71a1.455,1.455,0,0,1,2.159-1.27L30,21.911A1.456,1.456,0,0,1,30,24.452Z" transform="translate(-8 -8)" fill="#be1622"/>
                        </svg>
                        
                    </div>
                    <div className={styles["course-content__accordion__body__list-item__lesson-name-duration"]}>
                        <div>اسم الدرس والفيديو</div>
                        <div>03:45</div>
                    </div>
                </div>

                <div className={styles["course-content__accordion__body__list-item__watch-free"]}>
                    <span> شاهد مجاناً </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="1.25rem" viewBox="0 0 17.5 19.969">
                         <path id="freeLesson" d="M15.625,10H5.937V5.972a2.813,2.813,0,1,1,5.625-.035v.625A.935.935,0,0,0,12.5,7.5h1.25a.935.935,0,0,0,.937-.937V5.937A5.938,5.938,0,1,0,2.812,6v4H1.875A1.875,1.875,0,0,0,0,11.874v6.25A1.875,1.875,0,0,0,1.875,20h13.75A1.875,1.875,0,0,0,17.5,18.124v-6.25A1.875,1.875,0,0,0,15.625,10Z" transform="translate(0 -0.031)" fill="#af151f"/>
                    </svg>

                </div>
            </div>
            <div className={styles["course-content__accordion__body__list-item"]}>
                <div className={styles["course-content__accordion__body__list-item__lesson-details-box"]}>
                    <div className={styles["course-content__accordion__body__list-item__icon"]}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.875rem" viewBox="0 0 30 30">
                             <path id="lessonVideo" d="M23,8A15,15,0,1,0,38,23,15,15,0,0,0,23,8Zm7,16.452L19.353,30.56a1.454,1.454,0,0,1-2.159-1.27V16.71a1.455,1.455,0,0,1,2.159-1.27L30,21.911A1.456,1.456,0,0,1,30,24.452Z" transform="translate(-8 -8)" fill="#be1622"/>
                        </svg>
                    </div>
                    <div className={styles["course-content__accordion__body__list-item__lesson-name-duration"]}>
                        <div>اسم الدرس والفيديو</div>
                        <div>03:45</div>
                    </div>
                </div>

                <div className={styles["course-content__accordion__body__list-item__watch-free"]}>
                    <span> شاهد مجاناً </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="1.25rem" viewBox="0 0 17.5 19.969">
                         <path id="freeLesson" d="M15.625,10H5.937V5.972a2.813,2.813,0,1,1,5.625-.035v.625A.935.935,0,0,0,12.5,7.5h1.25a.935.935,0,0,0,.937-.937V5.937A5.938,5.938,0,1,0,2.812,6v4H1.875A1.875,1.875,0,0,0,0,11.874v6.25A1.875,1.875,0,0,0,1.875,20h13.75A1.875,1.875,0,0,0,17.5,18.124v-6.25A1.875,1.875,0,0,0,15.625,10Z" transform="translate(0 -0.031)" fill="#af151f"/>
                    </svg>


                </div>
            </div>
            <div className={styles["course-content__accordion__body__list-item"]}>
                <div className={styles["course-content__accordion__body__list-item__lesson-details-box"]}>
                    <div className={styles["course-content__accordion__body__list-item__icon"]}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.875rem" viewBox="0 0 30 30">
                             <path id="lessonVideo" d="M23,8A15,15,0,1,0,38,23,15,15,0,0,0,23,8Zm7,16.452L19.353,30.56a1.454,1.454,0,0,1-2.159-1.27V16.71a1.455,1.455,0,0,1,2.159-1.27L30,21.911A1.456,1.456,0,0,1,30,24.452Z" transform="translate(-8 -8)" fill="#be1622"/>
                        </svg>
                        

                    </div>
                    <div className={styles["course-content__accordion__body__list-item__lesson-name-duration"]}>
                        <div>اسم الدرس والفيديو</div>
                        <div>03:45</div>
                    </div>
                </div>

                <div className={styles["course-content__accordion__body__list-item__watch-free"]}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="1.25rem" viewBox="0 0 17.5 20">
                             <path id="locked" d="M15.625,8.75h-.937V5.938a5.938,5.938,0,1,0-11.876,0V8.75H1.875A1.875,1.875,0,0,0,0,10.625v7.5A1.875,1.875,0,0,0,1.875,20h13.75A1.875,1.875,0,0,0,17.5,18.125v-7.5A1.875,1.875,0,0,0,15.625,8.75Zm-4.062,0H5.938V5.938a2.813,2.813,0,1,1,5.625,0Z" opacity="0.36"/>
                    </svg>


                </div>
            </div>
            <div className={styles["course-content__accordion__body__list-item"]}>
                <div className={styles["course-content__accordion__body__list-item__lesson-details-box"]}>
                    <div className={styles["course-content__accordion__body__list-item__icon"]}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.875rem" viewBox="0 0 30 34.286">
                      <path id="docs" d="M21.429,30v2.679a1.607,1.607,0,0,1-1.607,1.607H1.607A1.607,1.607,0,0,1,0,32.679V8.036A1.607,1.607,0,0,1,1.607,6.429H6.429V26.25A3.754,3.754,0,0,0,10.179,30Zm0-23.036V0H10.179A1.607,1.607,0,0,0,8.571,1.607V26.25a1.607,1.607,0,0,0,1.607,1.607H28.393A1.607,1.607,0,0,0,30,26.25V8.571H23.036A1.612,1.612,0,0,1,21.429,6.964Zm8.1-2.078L25.114.471A1.607,1.607,0,0,0,23.977,0h-.406V6.429H30V6.023a1.607,1.607,0,0,0-.471-1.136Z" fill="#be1622"/>
                    </svg>
                    </div>
                    <div className={styles["course-content__accordion__body__list-item__lesson-name-duration"]}>
                        <div>اسم الدرس والفيديو</div>
                        <div>03:45</div>
                    </div>
                </div>

                <div className={styles["course-content__accordion__body__list-item__watch-free"]}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="1.25rem" viewBox="0 0 17.5 20">
                             <path id="locked" d="M15.625,8.75h-.937V5.938a5.938,5.938,0,1,0-11.876,0V8.75H1.875A1.875,1.875,0,0,0,0,10.625v7.5A1.875,1.875,0,0,0,1.875,20h13.75A1.875,1.875,0,0,0,17.5,18.125v-7.5A1.875,1.875,0,0,0,15.625,8.75Zm-4.062,0H5.938V5.938a2.813,2.813,0,1,1,5.625,0Z" opacity="0.36"/>
                    </svg>

                </div>
            </div>
            <div className={styles["course-content__accordion__body__list-item"]}>
                <div className={styles["course-content__accordion__body__list-item__lesson-details-box"]}>
                    <div className={styles["course-content__accordion__body__list-item__icon"]}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.875rem" viewBox="0 0 30 30">
                        <path id="quiz" d="M38,23A15,15,0,1,1,23,8,15,15,0,0,1,38,23ZM23.4,12.96a7.834,7.834,0,0,0-7.049,3.856.727.727,0,0,0,.164.983l2.1,1.591a.726.726,0,0,0,1.008-.128c1.08-1.37,1.821-2.165,3.466-2.165,1.236,0,2.764.8,2.764,1.993,0,.906-.748,1.371-1.968,2.055-1.423.8-3.306,1.79-3.306,4.274v.242a.726.726,0,0,0,.726.726h3.387a.726.726,0,0,0,.726-.726v-.081c0-1.721,5.031-1.793,5.031-6.452C30.451,15.621,26.812,12.96,23.4,12.96Zm-.4,15a2.782,2.782,0,1,0,2.782,2.782A2.785,2.785,0,0,0,23,27.96Z" transform="translate(-8 -8)" fill="#be1622"/>
                    </svg>
                    </div>
                    <div className={styles["course-content__accordion__body__list-item__lesson-name-duration"]}>
                        <div>اسم الدرس والفيديو</div>
                        <div>03:45</div>
                    </div>
                </div>

                <div className={styles["course-content__accordion__body__list-item__watch-free"]}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="1.25rem" viewBox="0 0 17.5 20">
                            <path id="locked" d="M15.625,8.75h-.937V5.938a5.938,5.938,0,1,0-11.876,0V8.75H1.875A1.875,1.875,0,0,0,0,10.625v7.5A1.875,1.875,0,0,0,1.875,20h13.75A1.875,1.875,0,0,0,17.5,18.125v-7.5A1.875,1.875,0,0,0,15.625,8.75Zm-4.062,0H5.938V5.938a2.813,2.813,0,1,1,5.625,0Z" opacity="0.36"/>
                    </svg>
                </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2"  className={styles["course-content__accordion__item"]}>
          <Accordion.Header className={styles["course-content__accordion__header"]}>

              <div className={styles["course-content__accordion__header__details-box"]}>
                <div className={styles["course-content__accordion__header__group-number"]}>
                اسم المجموعة 3
                </div>
                <div className={styles["course-content__accordion__header__details"]}>
                    <span className={styles["course-content__accordion__header__details__lessons-number"]}>
                        <span> 4 </span>
                        <span> دروس </span>
                    </span>
                    <span className={styles["course-content__accordion__header__details__duration"]}>
                        (
                        <span> 2 </span>  
                            س
                            :
                            <span> 45 </span>  
                            د
                        )
                    </span>
                </div>
              </div>
          </Accordion.Header>
          <Accordion.Body className={styles["course-content__accordion__body"]}>
            <div className={styles["course-content__accordion__body__list-item"]}>
                <div className={styles["course-content__accordion__body__list-item__lesson-details-box"]}>
                    <div className={styles["course-content__accordion__body__list-item__icon"]}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.875rem" viewBox="0 0 30 30">
                             <path id="lessonVideo" d="M23,8A15,15,0,1,0,38,23,15,15,0,0,0,23,8Zm7,16.452L19.353,30.56a1.454,1.454,0,0,1-2.159-1.27V16.71a1.455,1.455,0,0,1,2.159-1.27L30,21.911A1.456,1.456,0,0,1,30,24.452Z" transform="translate(-8 -8)" fill="#be1622"/>
                        </svg>
                        
                    </div>
                    <div className={styles["course-content__accordion__body__list-item__lesson-name-duration"]}>
                        <div>اسم الدرس والفيديو</div>
                        <div>03:45</div>
                    </div>
                </div>

                <div className={styles["course-content__accordion__body__list-item__watch-free"]}>
                    <span> شاهد مجاناً </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="1.25rem" viewBox="0 0 17.5 19.969">
                         <path id="freeLesson" d="M15.625,10H5.937V5.972a2.813,2.813,0,1,1,5.625-.035v.625A.935.935,0,0,0,12.5,7.5h1.25a.935.935,0,0,0,.937-.937V5.937A5.938,5.938,0,1,0,2.812,6v4H1.875A1.875,1.875,0,0,0,0,11.874v6.25A1.875,1.875,0,0,0,1.875,20h13.75A1.875,1.875,0,0,0,17.5,18.124v-6.25A1.875,1.875,0,0,0,15.625,10Z" transform="translate(0 -0.031)" fill="#af151f"/>
                    </svg>

                </div>
            </div>
            <div className={styles["course-content__accordion__body__list-item"]}>
                <div className={styles["course-content__accordion__body__list-item__lesson-details-box"]}>
                    <div className={styles["course-content__accordion__body__list-item__icon"]}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.875rem" viewBox="0 0 30 30">
                             <path id="lessonVideo" d="M23,8A15,15,0,1,0,38,23,15,15,0,0,0,23,8Zm7,16.452L19.353,30.56a1.454,1.454,0,0,1-2.159-1.27V16.71a1.455,1.455,0,0,1,2.159-1.27L30,21.911A1.456,1.456,0,0,1,30,24.452Z" transform="translate(-8 -8)" fill="#be1622"/>
                        </svg>
                    </div>
                    <div className={styles["course-content__accordion__body__list-item__lesson-name-duration"]}>
                        <div>اسم الدرس والفيديو</div>
                        <div>03:45</div>
                    </div>
                </div>

                <div className={styles["course-content__accordion__body__list-item__watch-free"]}>
                    <span> شاهد مجاناً </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="1.25rem" viewBox="0 0 17.5 19.969">
                         <path id="freeLesson" d="M15.625,10H5.937V5.972a2.813,2.813,0,1,1,5.625-.035v.625A.935.935,0,0,0,12.5,7.5h1.25a.935.935,0,0,0,.937-.937V5.937A5.938,5.938,0,1,0,2.812,6v4H1.875A1.875,1.875,0,0,0,0,11.874v6.25A1.875,1.875,0,0,0,1.875,20h13.75A1.875,1.875,0,0,0,17.5,18.124v-6.25A1.875,1.875,0,0,0,15.625,10Z" transform="translate(0 -0.031)" fill="#af151f"/>
                    </svg>


                </div>
            </div>
            <div className={styles["course-content__accordion__body__list-item"]}>
                <div className={styles["course-content__accordion__body__list-item__lesson-details-box"]}>
                    <div className={styles["course-content__accordion__body__list-item__icon"]}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.875rem" viewBox="0 0 30 30">
                             <path id="lessonVideo" d="M23,8A15,15,0,1,0,38,23,15,15,0,0,0,23,8Zm7,16.452L19.353,30.56a1.454,1.454,0,0,1-2.159-1.27V16.71a1.455,1.455,0,0,1,2.159-1.27L30,21.911A1.456,1.456,0,0,1,30,24.452Z" transform="translate(-8 -8)" fill="#be1622"/>
                        </svg>
                        

                    </div>
                    <div className={styles["course-content__accordion__body__list-item__lesson-name-duration"]}>
                        <div>اسم الدرس والفيديو</div>
                        <div>03:45</div>
                    </div>
                </div>

                <div className={styles["course-content__accordion__body__list-item__watch-free"]}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="1.25rem" viewBox="0 0 17.5 20">
                             <path id="locked" d="M15.625,8.75h-.937V5.938a5.938,5.938,0,1,0-11.876,0V8.75H1.875A1.875,1.875,0,0,0,0,10.625v7.5A1.875,1.875,0,0,0,1.875,20h13.75A1.875,1.875,0,0,0,17.5,18.125v-7.5A1.875,1.875,0,0,0,15.625,8.75Zm-4.062,0H5.938V5.938a2.813,2.813,0,1,1,5.625,0Z" opacity="0.36"/>
                    </svg>


                </div>
            </div>
            <div className={styles["course-content__accordion__body__list-item"]}>
                <div className={styles["course-content__accordion__body__list-item__lesson-details-box"]}>
                    <div className={styles["course-content__accordion__body__list-item__icon"]}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.875rem" viewBox="0 0 30 34.286">
                      <path id="docs" d="M21.429,30v2.679a1.607,1.607,0,0,1-1.607,1.607H1.607A1.607,1.607,0,0,1,0,32.679V8.036A1.607,1.607,0,0,1,1.607,6.429H6.429V26.25A3.754,3.754,0,0,0,10.179,30Zm0-23.036V0H10.179A1.607,1.607,0,0,0,8.571,1.607V26.25a1.607,1.607,0,0,0,1.607,1.607H28.393A1.607,1.607,0,0,0,30,26.25V8.571H23.036A1.612,1.612,0,0,1,21.429,6.964Zm8.1-2.078L25.114.471A1.607,1.607,0,0,0,23.977,0h-.406V6.429H30V6.023a1.607,1.607,0,0,0-.471-1.136Z" fill="#be1622"/>
                    </svg>
                    </div>
                    <div className={styles["course-content__accordion__body__list-item__lesson-name-duration"]}>
                        <div>اسم الدرس والفيديو</div>
                        <div>03:45</div>
                    </div>
                </div>

                <div className={styles["course-content__accordion__body__list-item__watch-free"]}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="1.25rem" viewBox="0 0 17.5 20">
                             <path id="locked" d="M15.625,8.75h-.937V5.938a5.938,5.938,0,1,0-11.876,0V8.75H1.875A1.875,1.875,0,0,0,0,10.625v7.5A1.875,1.875,0,0,0,1.875,20h13.75A1.875,1.875,0,0,0,17.5,18.125v-7.5A1.875,1.875,0,0,0,15.625,8.75Zm-4.062,0H5.938V5.938a2.813,2.813,0,1,1,5.625,0Z" opacity="0.36"/>
                    </svg>

                </div>
            </div>
            <div className={styles["course-content__accordion__body__list-item"]}>
                <div className={styles["course-content__accordion__body__list-item__lesson-details-box"]}>
                    <div className={styles["course-content__accordion__body__list-item__icon"]}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.875rem" viewBox="0 0 30 30">
                        <path id="quiz" d="M38,23A15,15,0,1,1,23,8,15,15,0,0,1,38,23ZM23.4,12.96a7.834,7.834,0,0,0-7.049,3.856.727.727,0,0,0,.164.983l2.1,1.591a.726.726,0,0,0,1.008-.128c1.08-1.37,1.821-2.165,3.466-2.165,1.236,0,2.764.8,2.764,1.993,0,.906-.748,1.371-1.968,2.055-1.423.8-3.306,1.79-3.306,4.274v.242a.726.726,0,0,0,.726.726h3.387a.726.726,0,0,0,.726-.726v-.081c0-1.721,5.031-1.793,5.031-6.452C30.451,15.621,26.812,12.96,23.4,12.96Zm-.4,15a2.782,2.782,0,1,0,2.782,2.782A2.785,2.785,0,0,0,23,27.96Z" transform="translate(-8 -8)" fill="#be1622"/>
                    </svg>
                    </div>
                    <div className={styles["course-content__accordion__body__list-item__lesson-name-duration"]}>
                        <div>اسم الدرس والفيديو</div>
                        <div>03:45</div>
                    </div>
                </div>

                <div className={styles["course-content__accordion__body__list-item__watch-free"]}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="1.25rem" viewBox="0 0 17.5 20">
                            <path id="locked" d="M15.625,8.75h-.937V5.938a5.938,5.938,0,1,0-11.876,0V8.75H1.875A1.875,1.875,0,0,0,0,10.625v7.5A1.875,1.875,0,0,0,1.875,20h13.75A1.875,1.875,0,0,0,17.5,18.125v-7.5A1.875,1.875,0,0,0,15.625,8.75Zm-4.062,0H5.938V5.938a2.813,2.813,0,1,1,5.625,0Z" opacity="0.36"/>
                    </svg>
                </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
       
      </Accordion>

      <Button className={styles["course-content__show-more-btn"]}>
      أعرض المزيد من الدروس
      </Button>

    </div>
    </>
  );
}
