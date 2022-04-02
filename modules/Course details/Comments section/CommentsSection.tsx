/* eslint-disable @next/next/no-img-element */
import React , { useState, useEffect } from 'react'
import styles from "./comments-section.module.css";
import {Col, Button, Form } from "react-bootstrap";
import { commentsBorderHandler } from "./utils";
import { axiosInstance } from "configurations/axios/axiosConfig";
import { SendIcon, LikeIcon,CommentIcon } from "common/Icons/Icons";
import Router from "next/router";
import { useDispatch, useSelector } from "react-redux";  

export default function CommentsSection(props:{id:string}) {
    const [courseComments, setCourseComments] = useState<any>([]);
    const [replyTo, setReplyTo] = useState(0);
    const [isCommentTextAreaEmpty, setIsCommentTextAreaEmpty] = useState(true);
    const userStatus = useSelector((state:any) => state.userAuthentication);

    useEffect(() => {
        
      if(props.id && props.id !== ""){
           axiosInstance
        .get(`courses/${props.id}/comments`)
        .then(function (response:any) {
            setCourseComments(response.data.data);
            
            // let rootFontSize = parseFloat(
            //     window
            //     .getComputedStyle(document.getElementsByTagName("html")[0])
            //     .getPropertyValue("font-size")
            //     );
            //     commentsBorderHandler();

            // const noOfComments:any = response.data.data.filter((comm:any) => {
            //     return comm.reply_to_comment_id == 0
            //   }) ;

            //   for (let index = 0; index < noOfComments.length; index++) {
                  
            //       let commentsTree:any = document.getElementById(`tree-box${index}`);
            //       let commentsBox:any = document.getElementById(`comment-box${index}`);
            //       let firstReply:any = document.querySelector(`#comment-box__replies${index} > li:first-child`);
                  
                  
            //       window.addEventListener("resize" , ()=>{
            //           rootFontSize = parseFloat(
            //                   window
            //                   .getComputedStyle(document.getElementsByTagName("html")[0])
            //                   .getPropertyValue("font-size")
            //                 );
            //             if(window.innerWidth < 576){
          
            //               document.styleSheets[0].addRule(`#comment-box__replies${index} > li:first-child:after`,`height: ${(parseInt(getComputedStyle( commentsTree ).getPropertyValue('height')) - (37 *rootFontSize))}px`);
            //             document.styleSheets[0].addRule(`#comment-box__replies${index} > li:first-child:after`,`bottom: ${ firstReply && ((parseInt(getComputedStyle( firstReply ).getPropertyValue('height'))) * 0.74) }px`);                      
            //         }else{
          
            //               document.styleSheets[0].addRule(`#comment-box__replies${index} > li:first-child:after`,`height: ${(parseInt(getComputedStyle( commentsTree ).getPropertyValue('height')) - (14.41*rootFontSize))}px`);
            //               document.styleSheets[0].addRule(`#comment-box__replies${index} > li:first-child:after`,`bottom: ${ firstReply && ((parseInt(getComputedStyle( firstReply ).getPropertyValue('height'))) * 0.66) }px`);
            //           }
            //       })
          
            //       const resize_ob:any = new ResizeObserver(function(entries):any {
            //           if(window.innerWidth < 576){
          
            //               document.styleSheets[0].addRule(`#comment-box__replies${index} > li:first-child:after`,`height: ${(parseInt(getComputedStyle( commentsTree ).getPropertyValue('height')) - (37 *rootFontSize))}px`);
            //             document.styleSheets[0].addRule(`#comment-box__replies${index} > li:first-child:after`,`bottom: ${ firstReply && ((parseInt(getComputedStyle( firstReply ).getPropertyValue('height'))) * 0.74) }px`);
            //           }else{
          
            //               document.styleSheets[0].addRule(`#comment-box__replies${index} > li:first-child:after`,`height: ${(parseInt(getComputedStyle( commentsTree ).getPropertyValue('height')) - (14.41*rootFontSize))}px`);
            //               document.styleSheets[0].addRule(`#comment-box__replies${index} > li:first-child:after`,`bottom: ${ firstReply && ((parseInt(getComputedStyle( firstReply ).getPropertyValue('height'))) * 0.66) }px`);
            //           }
            //       });
                  
            //       // start observing for resize
            //       resize_ob.observe(commentsTree);
          
            //   }
        })
        .catch(function (error) { 
        console.log(error); 
        });
    }


        return () => {
            window.removeEventListener("resize" , ()=>{
                null;
            })
          }
    }, [props])
    

    const handleLikes = (commentId:number)=>{
        if(userStatus.isUserAuthenticated == true){

            axiosInstance
            .post(`courses/comments/${commentId}/likes`)
            .then((response:any) => {
                axiosInstance
                .get(`courses/1540/comments`)
                .then(function (response:any) {
                    setCourseComments(response.data.data);
        
        
                    commentsBorderHandler();
                    let rootFontSize = parseFloat(
                        window
                        .getComputedStyle(document.getElementsByTagName("html")[0])
                        .getPropertyValue("font-size")
                      );
                      
                      const noOfComments:any = response.data.data.filter((comm:any) => {
                        return comm.reply_to_comment_id == 0
                      }) ;
        
                      for (let index = 0; index < noOfComments.length; index++) {
                      
                        let commentsTree:any = document.getElementById(`tree-box${index}`);
                        let commentsBox:any = document.getElementById(`comment-box${index}`);
                        let firstReply:any = document.querySelector(`#comment-box__replies${index} > li:first-child`);
                        console.log("sdsdsd",(parseInt(getComputedStyle( commentsBox ).getPropertyValue('height'))) * -0.25);
                        
                        
                        window.addEventListener("resize" , ()=>{
                            rootFontSize = parseFloat(
                                    window
                                    .getComputedStyle(document.getElementsByTagName("html")[0])
                                    .getPropertyValue("font-size")
                                  );
                              if(window.innerWidth < 576){
                
                                document.styleSheets[0].addRule(`#comment-box__replies${index} > li:first-child:after`,`height: ${(parseInt(getComputedStyle( commentsTree ).getPropertyValue('height')) - (30.3 *rootFontSize))}px`);
                              document.styleSheets[0].addRule(`#comment-box__replies${index} > li:first-child:after`,`bottom: ${ firstReply && ((parseInt(getComputedStyle( firstReply ).getPropertyValue('height'))) * 0.66) }px`);                      }else{
                
                                document.styleSheets[0].addRule(`#comment-box__replies${index} > li:first-child:after`,`height: ${(parseInt(getComputedStyle( commentsTree ).getPropertyValue('height')) - (14.41*rootFontSize))}px`);
                                document.styleSheets[0].addRule(`#comment-box__replies${index} > li:first-child:after`,`bottom: ${ firstReply && ((parseInt(getComputedStyle( firstReply ).getPropertyValue('height'))) * 0.66) }px`);
                            }
                        })
                
                        const resize_ob:any = new ResizeObserver(function(entries):any {
                            if(window.innerWidth < 576){
                
                                document.styleSheets[0].addRule(`#comment-box__replies${index} > li:first-child:after`,`height: ${(parseInt(getComputedStyle( commentsTree ).getPropertyValue('height')) - (30.3 *rootFontSize))}px`);
                              document.styleSheets[0].addRule(`#comment-box__replies${index} > li:first-child:after`,`bottom: ${ firstReply && ((parseInt(getComputedStyle( firstReply ).getPropertyValue('height'))) * 0.66) }px`);
                            }else{
                
                                document.styleSheets[0].addRule(`#comment-box__replies${index} > li:first-child:after`,`height: ${(parseInt(getComputedStyle( commentsTree ).getPropertyValue('height')) - (14.41*rootFontSize))}px`);
                                document.styleSheets[0].addRule(`#comment-box__replies${index} > li:first-child:after`,`bottom: ${ firstReply && ((parseInt(getComputedStyle( firstReply ).getPropertyValue('height'))) * 0.66) }px`);
                            }
                        });
                        
                        // start observing for resize
                        resize_ob.observe(commentsTree);
                
                    }
                })
                .catch(function (error) { 
                console.log(error); 
                });
            })
            .catch((error:any)=>{
              console.log("error", error);
            })

        }else{
            Router.push({
                pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}signin`,
                query: { from: "/HomePage" }
              })
        }
      
    }

    const handleCommentsTextArea = (e:any)=>{
        e.target.value == "" ? setIsCommentTextAreaEmpty(true) : setIsCommentTextAreaEmpty(false);
    }

    const isUserAuthorizedToWriteComment = ()=>{
        if(userStatus.isUserAuthenticated == true){
        }else{
            Router.push({
                pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}signin`,
                query: { from: "/HomePage" }
              })
        }
        
    }

    const handleSubmit = (e:any)=>{
        e.preventDefault();
        console.log("replyTo",replyTo);
        

        axiosInstance
        .post(`courses/1540/comments`,{comment:e.target['0'].value ,reply_to_comment_id:replyTo})
        .then((response:any) => {
            const CommentTextBox:any = document.querySelector('[name="commentTextArea"]');
            CommentTextBox.value ="";
            setIsCommentTextAreaEmpty(true);
            setReplyTo(0);
            const replyIcons:any = document.querySelector(`[id^="reply-icon-box"] > svg > path`);
            const replyTexts:any = document.querySelector(`[id^="reply-icon-box"] > span`);

            replyIcons.forEach((icon:any) => {
                icon.style.cssText=`fill:#ccc`;
            });
            replyTexts.forEach((text:any) => {
                text.style.cssText=`color:#777`;
            });

            axiosInstance
            .get(`courses/1540/comments`)
            .then(function (response:any) {

                setCourseComments(response.data.data);
    
    
                commentsBorderHandler();
                let rootFontSize = parseFloat(
                    window
                    .getComputedStyle(document.getElementsByTagName("html")[0])
                    .getPropertyValue("font-size")
                  );
                  
                  const noOfComments:any = response.data.data.filter((comm:any) => {
                    return comm.reply_to_comment_id == 0
                  }) ;
    
                  for (let index = 0; index < noOfComments.length; index++) {
                  
                    let commentsTree:any = document.getElementById(`tree-box${index}`);
                    let commentsBox:any = document.getElementById(`comment-box${index}`);
                    let firstReply:any = document.querySelector(`#comment-box__replies${index} > li:first-child`);
                    console.log("sdsdsd",(parseInt(getComputedStyle( commentsBox ).getPropertyValue('height'))) * -0.25);
                    
                    
                    window.addEventListener("resize" , ()=>{
                        rootFontSize = parseFloat(
                                window
                                .getComputedStyle(document.getElementsByTagName("html")[0])
                                .getPropertyValue("font-size")
                              );
                          if(window.innerWidth < 576){
            
                            document.styleSheets[0].addRule(`#comment-box__replies${index} > li:first-child:after`,`height: ${(parseInt(getComputedStyle( commentsTree ).getPropertyValue('height')) - (30.3 *rootFontSize))}px`);
                          document.styleSheets[0].addRule(`#comment-box__replies${index} > li:first-child:after`,`bottom: ${ firstReply && ((parseInt(getComputedStyle( firstReply ).getPropertyValue('height'))) * 0.66) }px`);                      }else{
            
                            document.styleSheets[0].addRule(`#comment-box__replies${index} > li:first-child:after`,`height: ${(parseInt(getComputedStyle( commentsTree ).getPropertyValue('height')) - (14.41*rootFontSize))}px`);
                            document.styleSheets[0].addRule(`#comment-box__replies${index} > li:first-child:after`,`bottom: ${ firstReply && ((parseInt(getComputedStyle( firstReply ).getPropertyValue('height'))) * 0.66) }px`);
                        }
                    })
            
                    const resize_ob:any = new ResizeObserver(function(entries):any {
                        if(window.innerWidth < 576){
            
                            document.styleSheets[0].addRule(`#comment-box__replies${index} > li:first-child:after`,`height: ${(parseInt(getComputedStyle( commentsTree ).getPropertyValue('height')) - (30.3 *rootFontSize))}px`);
                          document.styleSheets[0].addRule(`#comment-box__replies${index} > li:first-child:after`,`bottom: ${ firstReply && ((parseInt(getComputedStyle( firstReply ).getPropertyValue('height'))) * 0.66) }px`);
                        }else{
            
                            document.styleSheets[0].addRule(`#comment-box__replies${index} > li:first-child:after`,`height: ${(parseInt(getComputedStyle( commentsTree ).getPropertyValue('height')) - (14.41*rootFontSize))}px`);
                            document.styleSheets[0].addRule(`#comment-box__replies${index} > li:first-child:after`,`bottom: ${ firstReply && ((parseInt(getComputedStyle( firstReply ).getPropertyValue('height'))) * 0.66) }px`);
                        }
                    });
                    
                    // start observing for resize
                    resize_ob.observe(commentsTree);
            
                }
            })
            .catch(function (error) { 
            console.log(error); 
            });
        })
        .catch((error:any)=>{
          console.log("error", error);
        })

    }

    const writingCommentHandler = (i:number,commentId:number)=>{
        const CommentTextBox:any = document.querySelector('[name="commentTextArea"]');
        const replyIcon:any = document.querySelector(`[id="reply-icon-box${i}"] > svg > path`);
        const replyText:any = document.querySelector(`[id="reply-icon-box${i}"] > span`);

        if(window.getComputedStyle(replyIcon).fill == "rgb(34, 34, 34)"){
            
            replyText.style.cssText=`color:#777`;
            replyIcon.style.cssText=`fill:#ccc`;
            setReplyTo(0);

        }else if(window.getComputedStyle(replyIcon).fill == "rgb(204, 204, 204)"){

            replyText.style.cssText=`color:#222`;
            replyIcon.style.cssText=`fill:#222`;
            CommentTextBox.focus();
            CommentTextBox.select(); 
            setReplyTo(commentId);
        }
    }

    return (
        <>
        <Col xs={12} className={styles["comments-section"]}>
            <div className={styles["comments-section__title"]}> التعليقات </div>

            <div className={styles["comments-section__input-field-container"]}>
                <Form onSubmit={()=>handleSubmit(event)}>
                    <Form.Control as="textarea" rows={3}
                    type="text" name="commentTextArea"
                    placeholder="هل لديك تعليقاً او سؤالاً ؟ اكتب تعليقك هنا..."
                    className={styles["comments-section__input-field-container__input-field"]}
                    onChange={()=>{handleCommentsTextArea(event)}}
                    onFocus={()=>{isUserAuthorizedToWriteComment()}}
                    /> 
                        <Button type="submit" className={`${ isCommentTextAreaEmpty ? 
                        styles["comments-section__input-field-container__btn--dimmed"]
                        :
                        styles["comments-section__input-field-container__btn"]
                    }`}>
                            <span> إرسال </span>
                            <SendIcon/>
                        </Button>

                </Form>
            </div>
            <div id="tree-box-container" className={styles["comments-section__comments-tree"]}>

                {
                    courseComments?.filter((comm:any) => {
                        return comm.reply_to_comment_id == 0
                      }).map((comment:any,i:number)=>{
                        return(
                            <ul key={i} id={`tree-box${i}`} className={styles["comments-section__comments-tree__box"]}>
                                <li id={`comment-container${i}`}>
                                    <div id={`comment-box${i}`} className={styles["comments-section__comments-tree__comment-box"]}>

                                        <div className={styles["comments-section__comments-tree__comment-box__commenter-img"]}>
                                            <img src={comment.author_image} alt="commenter image" />
                                        </div>
                                        <div id="details" className={styles["comments-section__comments-tree__comment-box__comment-details"]}>
                                            <div className={styles["comments-section__comments-tree__comment-box__comment-details__name"]}>
                                                <span> {comment.author} </span>
                                                <span> {comment.role} </span>
                                            </div>
                                            <div className={styles["comments-section__comments-tree__comment-box__comment-details__date"]}>
                                                {
                                                    comment.country_code !== null && comment.country_code !== "" && comment.country_code !== undefined  &&
                                                <img src={`/images/svg flags/${(comment.country_code)?.toLowerCase()}.svg`} alt="Country flag" />
                                                }
                                                <span>   {comment.date_ar} </span>
                                                
                                                </div>
                                            <div className={styles["comments-section__comments-tree__comment-box__comment-details__comment"]}>
                                                {comment.content}
                                                </div>
                                            <div className={styles["comments-section__comments-tree__comment-box__comment-details__reactions-box"]}>
                                                <span className={styles["comments-section__comments-tree__comment-box__comment-details__reactions-box__likes"]}>
                                                    <span onClick={()=> handleLikes(comment.id)}>
                                                     <LikeIcon color={comment.is_liked_by_me ? "#af151f" : "#ccc"}/>
                                                    </span>
                                                    <span> {comment.likes_count !== 0 ? comment.likes_count : ""} </span>

                                                </span>
                                                <span onClick={()=>{writingCommentHandler(i,comment.id)}} id={`reply-icon-box${i}`}
                                                className={styles["comments-section__comments-tree__comment-box__comment-details__reactions-box__replies"]}>
                                                    <CommentIcon color="#ccc"/>
                                                    <span >
                                                       أكتب رد...
                                                    </span>
                                                    {/* style={{color: isWritingComment == false ? "#222" : "#777"}} */}

                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {
                                        courseComments.filter((c:any,i:number) => {
                                            return c.reply_to_comment_id == comment.id
                                          }).map((reply:any)=>{
                                              return(

                                                <ul key={i} id={`comment-box__replies${i}`} className={styles["comments-section__comments-tree__comment-box__replies"]}>
                                                    <li>
                                                        <div className={styles["comments-section__comments-tree__comment-box"]}>

                                                            <div className={styles["comments-section__comments-tree__comment-box__commenter-img"]}>
                                                                <img src={reply.author_image} alt="male avatar" />
                                                            </div>
                                                            <div id="details" className={styles["comments-section__comments-tree__comment-box__comment-details"]}>
                                                                <div className={styles["comments-section__comments-tree__comment-box__comment-details__name"]}>
                                                                    <span> {reply.author} </span>
                                                                    <span> {reply.role} </span>
                                                                </div>
                                                                <div className={styles["comments-section__comments-tree__comment-box__comment-details__date"]}>
                                                                    
                                                                    <span>   {reply.date_ar} </span>
                                                                    
                                                                    </div>
                                                                <div className={styles["comments-section__comments-tree__comment-box__comment-details__comment"]}>
                                                                   {reply.content}
                                                                    </div>
                                                                <div className={styles["comments-section__comments-tree__comment-box__comment-details__reactions-box"]}>
                                                                    <span className={styles["comments-section__comments-tree__comment-box__comment-details__reactions-box__likes"]}>
                                                                        <span onClick={()=> handleLikes(reply.id)}>
                                                                         <LikeIcon color={reply.is_liked_by_me ? "#af151f" : "#ccc"}/>
                                                                        </span>
                                                                        
                                                                        <span> {reply.likes_count !== 0 ? reply.likes_count : ""} </span>

                                                                    </span>
                                                                    
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                              )
                                          })
                                    }

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
