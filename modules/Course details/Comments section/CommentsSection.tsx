/* eslint-disable @next/next/no-img-element */
import React , { useState, useEffect } from 'react'
import styles from "./comments-section.module.css";
import {Col, Button, Form } from "react-bootstrap";
import { commentsBorderHandler } from "./utils";
import { axiosInstance } from "configurations/axios/axiosConfig";

export default function CommentsSection() {
    const [courseComments, setCourseComments] = useState<any>([]);

    useEffect(() => {
        axiosInstance
        .get(`courses/32720/comments`)
        .then(function (response:any) {
            setCourseComments(response.data.data);


            commentsBorderHandler();
            let rootFontSize = parseFloat(
                window
                .getComputedStyle(document.getElementsByTagName("html")[0])
                .getPropertyValue("font-size")
              );
              
            // const commentBox:any = document.querySelector('#comment-box__replies > li:first-child');
            // const commentsTree:any = document.querySelector('#tree-box-container > #tree-box');
            const commentsTree:any = document.getElementById('tree-box');
            console.log("commentsTree",commentsTree);
            
            window.addEventListener("resize" , ()=>{
                rootFontSize = parseFloat(
                        window
                        .getComputedStyle(document.getElementsByTagName("html")[0])
                        .getPropertyValue("font-size")
                      );
                //   console.log("rootFontSize",rootFontSize);
                  if(window.innerWidth < 576){
    
                    document.styleSheets[0].addRule(`#comment-box__replies > li:first-child:after`,`height: ${(parseInt(getComputedStyle( commentsTree ).getPropertyValue('height')) - (30.3 *rootFontSize))}px`);
                }else{
    
                    document.styleSheets[0].addRule(`#comment-box__replies > li:first-child:after`,`height: ${(parseInt(getComputedStyle( commentsTree ).getPropertyValue('height')) - (13.8*rootFontSize))}px`);
                }
            })
    
            const resize_ob:any = new ResizeObserver(function(entries):any {
                if(window.innerWidth < 576){
    
                    document.styleSheets[0].addRule(`#comment-box__replies > li:first-child:after`,`height: ${(parseInt(getComputedStyle( commentsTree ).getPropertyValue('height')) - (30.3 *rootFontSize))}px`);
                }else{
    
                    document.styleSheets[0].addRule(`#comment-box__replies > li:first-child:after`,`height: ${(parseInt(getComputedStyle( commentsTree ).getPropertyValue('height')) - (13.8*rootFontSize))}px`);
                }
            });
            
            // start observing for resize
            resize_ob.observe(commentsTree);
    
           
        })
        .catch(function (error) { 
        console.log(error); 
        });
    }, []);

    return (
        <>
        <Col xs={12} className={styles["comments-section"]}>
            <div className={styles["comments-section__title"]}> التعليقات </div>

            <div className={styles["comments-section__input-field-container"]}>
                <Form.Control as="textarea" rows={3}
                type="text"
                placeholder="هل لديك تعليقاً او سؤالاً ؟ اكتب تعليقك هنا..."
                className={styles["comments-section__input-field-container__input-field"]}
                /> 
                <Button className={styles["comments-section__input-field-container__btn"]}>
                    <span> إرسال </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 16 16">
                        <path id="send" d="M19.992,22,4,14,19.992,6,20,12.222,8.571,14,20,15.778Z" transform="translate(-4 -6)" fill="#fff"/>
                    </svg>
                </Button>
            </div>
            <div id="tree-box-container" className={styles["comments-section__comments-tree"]}>

                {
                    ['0'].map((comment:any,i:number)=>{
                        return(
                            <ul key={i} id="tree-box" className={styles["comments-section__comments-tree__box"]}>
                                <li id="comment-container">
                                    <div id="comment-box" className={styles["comments-section__comments-tree__comment-box"]}>

                                        <div className={styles["comments-section__comments-tree__comment-box__commenter-img"]}>
                                            <img src="/images/MaleAvatar.svg" alt="male avatar" />
                                        </div>
                                        <div id="details" className={styles["comments-section__comments-tree__comment-box__comment-details"]}>
                                            <div className={styles["comments-section__comments-tree__comment-box__comment-details__name"]}>
                                                <span> هدى عبدالمحسن </span>
                                                <span> متعلم </span>
                                            </div>
                                            <div className={styles["comments-section__comments-tree__comment-box__comment-details__date"]}>
                                                <img src="/images/egypt.png" alt="Egypt flag" />
                                                <span>   8 مارس 2021 , 1:45 ص  </span>
                                                
                                                </div>
                                            <div className={styles["comments-section__comments-tree__comment-box__comment-details__comment"]}>
                                                دورة جميلة جدا واستفدت منها بشكل كبير في تطوير رسوماتي
                                                </div>
                                            <div className={styles["comments-section__comments-tree__comment-box__comment-details__reactions-box"]}>
                                                <span className={styles["comments-section__comments-tree__comment-box__comment-details__reactions-box__likes"]}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="1.125rem" viewBox="0 0 18 18">
                                                        <path id="liked" d="M3.656,7.875H.844A.844.844,0,0,0,0,8.719v8.438A.844.844,0,0,0,.844,18H3.656a.844.844,0,0,0,.844-.844V8.719A.844.844,0,0,0,3.656,7.875ZM2.25,16.594a.844.844,0,1,1,.844-.844A.844.844,0,0,1,2.25,16.594ZM13.5,2.864c0,1.491-.913,2.328-1.17,3.324h3.576A2.1,2.1,0,0,1,18,8.23a2.545,2.545,0,0,1-.683,1.73l0,0a2.937,2.937,0,0,1-.327,2.794,2.78,2.78,0,0,1-.576,2.628,1.866,1.866,0,0,1-.216,1.569c-.718,1.031-2.5,1.045-4,1.045h-.1a10.092,10.092,0,0,1-4.2-1.115,5.533,5.533,0,0,0-1.851-.569.422.422,0,0,1-.414-.422V8.379a.421.421,0,0,1,.125-.3C7.143,6.7,7.742,5.246,8.883,4.1a4.258,4.258,0,0,0,.893-2.071C9.932,1.381,10.259,0,10.969,0,11.813,0,13.5.281,13.5,2.864Z" fill="#af151f"/>
                                                    </svg>
                                                    <span> 5 </span>

                                                </span>
                                                <span className={styles["comments-section__comments-tree__comment-box__comment-details__reactions-box__replies"]}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.313rem" height="1.125rem" viewBox="0 0 20.574 18">
                                                        <path id="reply" d="M10.222,32C4.541,32-.064,35.741-.064,40.357a7.386,7.386,0,0,0,2.125,5.075A10.2,10.2,0,0,1,.2,48.373.965.965,0,0,0,.9,50a9.749,9.749,0,0,0,5.589-1.86,12.409,12.409,0,0,0,3.733.575c5.681,0,10.286-3.741,10.286-8.357S15.9,32,10.222,32Zm0,14.786a10.441,10.441,0,0,1-3.15-.486L6.16,46.01l-.783.554a8.64,8.64,0,0,1-2.31,1.165,10.078,10.078,0,0,0,.8-1.615l.426-1.129-.828-.876a5.526,5.526,0,0,1-1.6-3.753c0-3.544,3.749-6.429,8.357-6.429s8.357,2.885,8.357,6.429S14.83,46.786,10.222,46.786Z" transform="translate(0.066 -32)" fill="#ccc"/>
                                                    </svg>
                                                    <span>
                                                    أكتب تعليق...
                                                    </span>

                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <ul id="comment-box__replies" className={styles["comments-section__comments-tree__comment-box__replies"]}>
                                        <li>
                                            <div className={styles["comments-section__comments-tree__comment-box"]}>

                                                <div className={styles["comments-section__comments-tree__comment-box__commenter-img"]}>
                                                    <img src="/images/MaleAvatar.svg" alt="male avatar" />
                                                </div>
                                                <div id="details" className={styles["comments-section__comments-tree__comment-box__comment-details"]}>
                                                    <div className={styles["comments-section__comments-tree__comment-box__comment-details__name"]}>
                                                        <span> هدى عبدالمحسن </span>
                                                        <span> أدمن </span>
                                                    </div>
                                                    <div className={styles["comments-section__comments-tree__comment-box__comment-details__date"]}>
                                                        
                                                        <span>   8 مارس 2021 , 1:45 ص  </span>
                                                        
                                                        </div>
                                                    <div className={styles["comments-section__comments-tree__comment-box__comment-details__comment"]}>
                                                        دورة جميلة جدا واستفدت منها بشكل كبير في تطوير رسوماتي
                                                        </div>
                                                    <div className={styles["comments-section__comments-tree__comment-box__comment-details__reactions-box"]}>
                                                        <span className={styles["comments-section__comments-tree__comment-box__comment-details__reactions-box__likes"]}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="1.125rem" viewBox="0 0 18 18">
                                                                    <path id="like" d="M3.656,7.875H.844A.844.844,0,0,0,0,8.719v8.438A.844.844,0,0,0,.844,18H3.656a.844.844,0,0,0,.844-.844V8.719A.844.844,0,0,0,3.656,7.875ZM2.25,16.594a.844.844,0,1,1,.844-.844A.844.844,0,0,1,2.25,16.594ZM13.5,2.864c0,1.491-.913,2.328-1.17,3.324h3.576A2.1,2.1,0,0,1,18,8.23a2.545,2.545,0,0,1-.683,1.73l0,0a2.937,2.937,0,0,1-.327,2.794,2.78,2.78,0,0,1-.576,2.628,1.866,1.866,0,0,1-.216,1.569c-.718,1.031-2.5,1.045-4,1.045h-.1a10.092,10.092,0,0,1-4.2-1.115,5.533,5.533,0,0,0-1.851-.569.422.422,0,0,1-.414-.422V8.379a.421.421,0,0,1,.125-.3C7.143,6.7,7.742,5.246,8.883,4.1a4.258,4.258,0,0,0,.893-2.071C9.932,1.381,10.259,0,10.969,0,11.813,0,13.5.281,13.5,2.864Z" opacity="0.2"/>
                                                            </svg>
                                                            <span> 1 </span>

                                                        </span>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={styles["comments-section__comments-tree__comment-box"]}>

                                                <div className={styles["comments-section__comments-tree__comment-box__commenter-img"]}>
                                                    <img src="/images/MaleAvatar.svg" alt="male avatar" />
                                                </div>
                                                <div id="details" className={styles["comments-section__comments-tree__comment-box__comment-details"]}>
                                                    <div className={styles["comments-section__comments-tree__comment-box__comment-details__name"]}>
                                                        <span> هدى عبدالمحسن </span>
                                                        <span> مدرب </span>
                                                    </div>
                                                    <div className={styles["comments-section__comments-tree__comment-box__comment-details__date"]}>
                                                        
                                                        <span>   8 مارس 2021 , 1:45 ص  </span>
                                                        
                                                        </div>
                                                    <div className={styles["comments-section__comments-tree__comment-box__comment-details__comment"]}>
                                                        دورة جميلة جدا واستفدت منها بشكل كبير في تطوير رسوماتي
                                                        </div>
                                                    <div className={styles["comments-section__comments-tree__comment-box__comment-details__reactions-box"]}>
                                                        <span className={styles["comments-section__comments-tree__comment-box__comment-details__reactions-box__likes"]}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="1.125rem" viewBox="0 0 18 18">
                                                                    <path id="like" d="M3.656,7.875H.844A.844.844,0,0,0,0,8.719v8.438A.844.844,0,0,0,.844,18H3.656a.844.844,0,0,0,.844-.844V8.719A.844.844,0,0,0,3.656,7.875ZM2.25,16.594a.844.844,0,1,1,.844-.844A.844.844,0,0,1,2.25,16.594ZM13.5,2.864c0,1.491-.913,2.328-1.17,3.324h3.576A2.1,2.1,0,0,1,18,8.23a2.545,2.545,0,0,1-.683,1.73l0,0a2.937,2.937,0,0,1-.327,2.794,2.78,2.78,0,0,1-.576,2.628,1.866,1.866,0,0,1-.216,1.569c-.718,1.031-2.5,1.045-4,1.045h-.1a10.092,10.092,0,0,1-4.2-1.115,5.533,5.533,0,0,0-1.851-.569.422.422,0,0,1-.414-.422V8.379a.421.421,0,0,1,.125-.3C7.143,6.7,7.742,5.246,8.883,4.1a4.258,4.258,0,0,0,.893-2.071C9.932,1.381,10.259,0,10.969,0,11.813,0,13.5.281,13.5,2.864Z" opacity="0.2"/>
                                                            </svg>
                                                            <span> 0 </span>

                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        )
                    })
                }
              

            </div>
        </Col>
            
        </>
    )
}
