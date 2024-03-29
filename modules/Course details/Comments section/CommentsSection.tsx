/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, memo } from 'react'
import styles from "./comments-section.module.css";
import { Col, Button, Form } from "react-bootstrap";
import { commentsBorderHandler } from "./utils";
import { axiosInstance } from "configurations/axios/axiosConfig";
import { SendIcon, LikeIcon, CommentIcon } from "common/Icons/Icons";
import Router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import SignupPopup from "common/Signup popup/SignupPopup";


function CommentsSection(props: any) {
    const [courseComments, setCourseComments] = useState<any>([]);
    const [commentContent, setCommentContent] = useState<any>("");
    const [isSignupModalVisible, setIsSignupModalVisible] = useState(false);
    const [replyTo, setReplyTo] = useState(0);
    const [isCommentTextAreaEmpty, setIsCommentTextAreaEmpty] = useState(true);
    const userStatus = useSelector((state: any) => state.userAuthentication);
    const [commentsSlicer, setCommentsSlicer] = useState<any>(5);
    const themeState = useSelector((state: any) => state.themeState.theme);

    useEffect(() => {
        let cancel = false;

        if (props.Cid !== "") {
            axiosInstance
                .get(`course/${props.Cid}/comments`)
                .then(function (response: any) {
                    if (cancel) return;
                    setCourseComments(response.data.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        return () => {
            cancel = true;
            window.removeEventListener("resize", () => {
            })
        }
    }, [props.Cid]);

    const handleLikes = (commentId: number) => {
        if (userStatus.isUserAuthenticated == true) {

            axiosInstance
                .post(`course/comments/${commentId}/likes`)
                .then((response: any) => {
                    axiosInstance
                        .get(`course/${props.Cid}/comments`)
                        .then(function (response: any) {
                            setCourseComments(response.data.data);

                            commentsBorderHandler();
                            let rootFontSize = parseFloat(
                                window
                                    .getComputedStyle(document.getElementsByTagName("html")[0])
                                    .getPropertyValue("font-size")
                            );

                            const noOfComments: any = response.data.data.filter((comm: any) => {
                                return comm.reply_to_comment_id == 0
                            });
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                })
                .catch((error: any) => {
                    console.log("error", error);
                })

        } else {
            // Router.push({
            //     pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}sign-in`,
            //     query: { from: "course" }
            // })
            setIsSignupModalVisible(true);
        }

    }

    const handleCommentsTextArea = (e: any) => {
        e.target.value == "" ? setIsCommentTextAreaEmpty(true) : setIsCommentTextAreaEmpty(false);
        setCommentContent(e.target.value);
        localStorage.setItem("comment_content", e.target.value);
    }

    const isUserAuthorizedToWriteComment = () => {
        if (userStatus.isUserAuthenticated == true) {
        } else {
            setIsSignupModalVisible(true);
        }
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (userStatus.isUserAuthenticated == true) {
            axiosInstance
                .post(`course/${props.Cid}/comments`, { comment: e.target['0'].value, reply_to_comment_id: replyTo })
                .then((response: any) => {
                    const CommentTextBox: any = document.querySelector('[name="commentTextArea"]');
                    CommentTextBox.value = "";
                    localStorage.setItem("comment_content", "");
                    setCommentContent("");
                    setIsCommentTextAreaEmpty(true);
                    setReplyTo(0);
                    const replyIcons: any = document.querySelectorAll(`[id^="reply-icon-box"] > svg > path`);
                    const replyTexts: any = document.querySelectorAll(`[id^="reply-icon-box"] > span`);


                    replyIcons?.forEach((icon: any) => {
                        icon.style.cssText = `fill:#ccc`;
                    });
                    replyTexts?.forEach((text: any) => {
                        text.style.cssText = `color:#777`;
                    });

                    axiosInstance
                        .get(`course/${props.Cid}/comments`)
                        .then(function (response: any) {
                            setCourseComments(response.data.data);
                            commentsBorderHandler();
                            let rootFontSize = parseFloat(
                                window
                                    .getComputedStyle(document.getElementsByTagName("html")[0])
                                    .getPropertyValue("font-size")
                            );

                            const noOfComments: any = response.data.data.filter((comm: any) => {
                                return comm.reply_to_comment_id == 0
                            });
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                })
                .catch((error: any) => {
                    console.log("error", error);
                })
        } else {
            setIsSignupModalVisible(true);
        }
    }

    const writingCommentHandler = (i: number, commentId: number) => {
        const CommentTextBox: any = document.querySelector('[name="commentTextArea"]');
        const replyIcon: any = document.querySelector(`[id="reply-icon-box${i}"] > svg > path`);
        const replyText: any = document.querySelector(`[id="reply-icon-box${i}"] > span`);

        if (window.getComputedStyle(replyIcon).fill == "rgb(34, 34, 34)") {

            replyText.style.cssText = `color:#777`;
            replyIcon.style.cssText = `fill:#ccc`;
            setReplyTo(0);

        } else if (window.getComputedStyle(replyIcon).fill == "rgb(204, 204, 204)") {

            replyText.style.cssText = `color: ${themeState == "light" ? "#222" : "#777"}`;
            replyIcon.style.cssText = `fill: ${themeState == "light" ? "#222" : "#ccc"}`;
            CommentTextBox.focus();
            CommentTextBox.select();
            setReplyTo(commentId);
        }
    }

    useEffect(() => {
        const commentContent: any = localStorage.getItem("comment_content");
        setCommentContent(commentContent ? commentContent : "");
        commentContent == "" ? setIsCommentTextAreaEmpty(true) : setIsCommentTextAreaEmpty(false);
        return () => {

        }
    }, [])


    return (
        <>
            <Col xs={12} className={styles["comments-section"]}>
                <div className={styles["comments-section__title"]}> التعليقات </div>

                <div className={styles["comments-section__input-field-container"]}>
                    <Form onSubmit={() => handleSubmit(event)}>
                        <Form.Control as="textarea" rows={3}
                            value={commentContent}
                            type="text" name="commentTextArea"
                            placeholder="هل لديك تعليقاً او سؤالاً ؟ اكتب تعليقك هنا..."
                            className={styles["comments-section__input-field-container__input-field"]}
                            onChange={() => { handleCommentsTextArea(event) }}
                        // onFocus={() => { isUserAuthorizedToWriteComment() }}
                        />
                        <Button id="comments-send-btn" type="submit" className={`${isCommentTextAreaEmpty ?
                            styles["comments-section__input-field-container__btn--dimmed"]
                            :
                            styles["comments-section__input-field-container__btn"]
                            }`}>
                            <span> إرسال </span>
                            <SendIcon />
                        </Button>

                    </Form>
                </div>
                <div id="tree-box-container" className={styles["comments-section__comments-tree"]}>

                    {
                        courseComments?.filter((comm: any) => {
                            return comm.reply_to_comment_id == 0
                        }).slice(0, commentsSlicer).map((comment: any, i: number) => {
                            return (
                                <ul key={i} id={`tree-box${i}`} className={styles["comments-section__comments-tree__box"]}>
                                    <li id={`comment-container${i}`}>
                                        <div id={`comment-box${i}`} className={styles["comments-section__comments-tree__comment-box"]}>

                                            <div className={styles["comments-section__comments-tree__comment-box__commenter-img"]}>
                                                <img loading="lazy" src={comment.author_image} alt="commenter image" />
                                            </div>
                                            <div id="details" className={styles["comments-section__comments-tree__comment-box__comment-details"]}>
                                                <div className={styles["comments-section__comments-tree__comment-box__comment-details__name"]}>
                                                    <span> {comment.author} </span>
                                                    <span> {comment.role} </span>
                                                </div>
                                                <div className={styles["comments-section__comments-tree__comment-box__comment-details__date"]}>
                                                    {
                                                        comment.country_code !== null && comment.country_code !== "" && comment.country_code !== undefined &&
                                                        <img loading="lazy" src={`/images/svg flags/${(comment.country_code)?.toLowerCase()}.svg`} alt="Country flag" />
                                                    }
                                                    <span>   {comment.date_ar} </span>

                                                </div>
                                                <div className={styles["comments-section__comments-tree__comment-box__comment-details__comment"]}>
                                                    {comment.content}
                                                </div>
                                                <div className={styles["comments-section__comments-tree__comment-box__comment-details__reactions-box"]}>
                                                    <span className={styles["comments-section__comments-tree__comment-box__comment-details__reactions-box__likes"]}>
                                                        <span onClick={() => handleLikes(comment.id)}>
                                                            <LikeIcon color={comment.is_liked_by_me ? "#af151f" : "#ccc"} />
                                                        </span>
                                                        <span> {comment.likes_count !== 0 ? comment.likes_count : ""} </span>

                                                    </span>
                                                    <span onClick={() => { writingCommentHandler(i, comment.id) }} id={`reply-icon-box${i}`}
                                                        className={styles["comments-section__comments-tree__comment-box__comment-details__reactions-box__replies"]}>
                                                        <CommentIcon color="#ccc" />
                                                        <span >
                                                            أكتب رد...
                                                        </span>
                                                        {/* style={{color: isWritingComment == false ? "#222" : "#777"}} */}

                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {
                                            courseComments.filter((c: any, i: number) => {
                                                return c.reply_to_comment_id == comment.id
                                            }).map((reply: any) => {
                                                return (

                                                    <ul key={i} id={`comment-box__replies${i}`} className={styles["comments-section__comments-tree__comment-box__replies"]}>
                                                        <li>
                                                            <div className={styles["comments-section__comments-tree__comment-box"]}>

                                                                <div className={styles["comments-section__comments-tree__comment-box__commenter-img"]}>
                                                                    <img loading="lazy" src={reply.author_image} alt="male avatar" />
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
                                                                            <span onClick={() => handleLikes(reply.id)}>
                                                                                <LikeIcon color={reply.is_liked_by_me ? "#af151f" : "#ccc"} />
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

                    {
                        commentsSlicer < courseComments?.filter((comm: any) => { return comm.reply_to_comment_id == 0 }).length &&

                        <Button onClick={() => setCommentsSlicer(commentsSlicer + 5)} className={styles["show-all-comments-btn"]}>
                            اعرض تعليقات أكثر
                        </Button>
                    }


                </div>
            </Col>
            <SignupPopup isSignupModalVisible={isSignupModalVisible} setIsSignupModalVisible={setIsSignupModalVisible} from={'comments-section'} />

        </>
    )
}

export default memo(CommentsSection);
