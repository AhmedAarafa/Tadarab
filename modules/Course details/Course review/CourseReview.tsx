/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react'
import styles from "./course-review.module.css";
import { Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore , {Navigation} from 'swiper';
import "swiper/css";
import { Button } from "react-bootstrap";
// import {scrollspyHandler} from "./utils"
import {scrollspyHandler} from "../../_Shared/utils/scrollSpy"



export default function CourseReview() {
    SwiperCore.use([Navigation]);
    useEffect(() => {
       scrollspyHandler("reviews-section");

       return () => {
        window.removeEventListener("resize", () => {
          console.log('event listener removed from course review component');
        });
      }
      }, []);

    return (
        <>
        <Col  xs={12} className={styles["course-review"]}>
    <div id="reviews-section" className={styles["course-review__scrollspy-helper"]}></div>

            <div className={styles["course-review__title"]}>التقييم العام للدورة</div>
            <div className={styles["course-review__review-box"]}>
                <div className={styles["course-review__review-box__number"]}>4.1</div>
                <div className={styles["course-review__review-box__review"]}>
                    <div className={styles["course-review__review-box__review__stars"]}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="2.063rem" height="1.938rem" viewBox="0 0 33.113 31.165">
                            <path id="yellowStar" d="M16.557,0l4.967,10.462L33.113,11.9l-8.52,7.908,2.2,11.353L16.557,25.59,6.324,31.165l2.2-11.353L0,11.9l11.59-1.442Z" fill="#ffa120"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="2.063rem" height="1.938rem" viewBox="0 0 33.113 31.165">
                            <path id="yellowStar" d="M16.557,0l4.967,10.462L33.113,11.9l-8.52,7.908,2.2,11.353L16.557,25.59,6.324,31.165l2.2-11.353L0,11.9l11.59-1.442Z" fill="#ffa120"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="2.063rem" height="1.938rem" viewBox="0 0 33.113 31.165">
                            <path id="yellowStar" d="M16.557,0l4.967,10.462L33.113,11.9l-8.52,7.908,2.2,11.353L16.557,25.59,6.324,31.165l2.2-11.353L0,11.9l11.59-1.442Z" fill="#ffa120"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="2.063rem" height="1.938rem" viewBox="0 0 33.113 31.165">
                            <path id="yellowStar" d="M16.557,0l4.967,10.462L33.113,11.9l-8.52,7.908,2.2,11.353L16.557,25.59,6.324,31.165l2.2-11.353L0,11.9l11.59-1.442Z" fill="#ffa120"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="2.063rem" height="1.938rem" viewBox="0 0 33.113 31.165">
                            <path id="grayStar" d="M16.557,0l4.967,10.462L33.113,11.9l-8.52,7.908,2.2,11.353L16.557,25.59,6.324,31.165l2.2-11.353L0,11.9l11.59-1.442Z" fill="#ccc"/>
                        </svg>
                    </div>
                    <div className={styles["course-review__review-box__review__number-of-reviews"]}>
                        <span> 1,278 </span>
                        <span> تقييم من المتعلمين </span>
                    </div>
                </div>
            </div>
        </Col>

        <Col xs={12} className={styles["course-review__mobile-view"]}>
        <div className={styles["course-review__cards-carousel__card"]}>
                    <div className={styles["course-review__cards-carousel__card__reviewer-img"]}>
                        <img src="/images/MaleAvatar.svg" alt="male avatar" /> 
                    </div>
                    <div className={styles["course-review__cards-carousel__card__review-box"]}>
                        <div className={styles["course-review__cards-carousel__card__review-box__name"]}>
                        محمد عبدالرحمن
                        </div>
                        <div className={styles["course-review__cards-carousel__card__review-box__rating"]}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.063rem" height="1rem" viewBox="0 0 33.113 31.165">
                                <path id="yellowStar" d="M16.557,0l4.967,10.462L33.113,11.9l-8.52,7.908,2.2,11.353L16.557,25.59,6.324,31.165l2.2-11.353L0,11.9l11.59-1.442Z" fill="#ffa120"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.063rem" height="1rem" viewBox="0 0 33.113 31.165">
                                <path id="yellowStar" d="M16.557,0l4.967,10.462L33.113,11.9l-8.52,7.908,2.2,11.353L16.557,25.59,6.324,31.165l2.2-11.353L0,11.9l11.59-1.442Z" fill="#ffa120"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.063rem" height="1rem" viewBox="0 0 33.113 31.165">
                                <path id="yellowStar" d="M16.557,0l4.967,10.462L33.113,11.9l-8.52,7.908,2.2,11.353L16.557,25.59,6.324,31.165l2.2-11.353L0,11.9l11.59-1.442Z" fill="#ffa120"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.063rem" height="1rem" viewBox="0 0 33.113 31.165">
                                <path id="yellowStar" d="M16.557,0l4.967,10.462L33.113,11.9l-8.52,7.908,2.2,11.353L16.557,25.59,6.324,31.165l2.2-11.353L0,11.9l11.59-1.442Z" fill="#ffa120"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.063rem" height="1rem" viewBox="0 0 33.113 31.165">
                                <path id="grayStar" d="M16.557,0l4.967,10.462L33.113,11.9l-8.52,7.908,2.2,11.353L16.557,25.59,6.324,31.165l2.2-11.353L0,11.9l11.59-1.442Z" fill="#ccc"/>
                            </svg>
                            <span> منذ 8 ساعات </span>
                        </div>
                        <div className={styles["course-review__cards-carousel__card__review-box__review"]}>
                        هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها
                        </div>
                    </div>
                </div>
                <Button className={styles["show-all-reviews-btn"]}>
                اعرض كل التقييمات
                </Button>

        </Col>

        <Col xs={12} className={styles["course-review__cards-carousel"]}>
        <Swiper dir="rtl" slidesPerView={2.1} navigation={true} 
        breakpoints={{
            "50": {
                "slidesPerView": 1.12,
            },
            "576": {
                "slidesPerView": 2.1,
            },
        }} className="mySwiper">
            <SwiperSlide>
                <div className={styles["course-review__cards-carousel__card"]}>
                    <div className={styles["course-review__cards-carousel__card__reviewer-img"]}>
                        <img src="/images/MaleAvatar.svg" alt="male avatar" /> 
                    </div>
                    <div className={styles["course-review__cards-carousel__card__review-box"]}>
                        <div className={styles["course-review__cards-carousel__card__review-box__name"]}>
                        محمد عبدالرحمن
                        </div>
                        <div className={styles["course-review__cards-carousel__card__review-box__rating"]}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.063rem" height="1rem" viewBox="0 0 33.113 31.165">
                                <path id="yellowStar" d="M16.557,0l4.967,10.462L33.113,11.9l-8.52,7.908,2.2,11.353L16.557,25.59,6.324,31.165l2.2-11.353L0,11.9l11.59-1.442Z" fill="#ffa120"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.063rem" height="1rem" viewBox="0 0 33.113 31.165">
                                <path id="yellowStar" d="M16.557,0l4.967,10.462L33.113,11.9l-8.52,7.908,2.2,11.353L16.557,25.59,6.324,31.165l2.2-11.353L0,11.9l11.59-1.442Z" fill="#ffa120"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.063rem" height="1rem" viewBox="0 0 33.113 31.165">
                                <path id="yellowStar" d="M16.557,0l4.967,10.462L33.113,11.9l-8.52,7.908,2.2,11.353L16.557,25.59,6.324,31.165l2.2-11.353L0,11.9l11.59-1.442Z" fill="#ffa120"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.063rem" height="1rem" viewBox="0 0 33.113 31.165">
                                <path id="yellowStar" d="M16.557,0l4.967,10.462L33.113,11.9l-8.52,7.908,2.2,11.353L16.557,25.59,6.324,31.165l2.2-11.353L0,11.9l11.59-1.442Z" fill="#ffa120"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.063rem" height="1rem" viewBox="0 0 33.113 31.165">
                                <path id="grayStar" d="M16.557,0l4.967,10.462L33.113,11.9l-8.52,7.908,2.2,11.353L16.557,25.59,6.324,31.165l2.2-11.353L0,11.9l11.59-1.442Z" fill="#ccc"/>
                            </svg>
                            <span> منذ 8 ساعات </span>
                        </div>
                        <div className={styles["course-review__cards-carousel__card__review-box__review"]}>
                        هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها
                        </div>
                    </div>
                </div>
             
            </SwiperSlide>
            <SwiperSlide>
                <div className={styles["course-review__cards-carousel__card"]}>
                    <div className={styles["course-review__cards-carousel__card__reviewer-img"]}>
                        <img src="/images/MaleAvatar.svg" alt="male avatar" /> 
                    </div>
                    <div className={styles["course-review__cards-carousel__card__review-box"]}>
                        <div className={styles["course-review__cards-carousel__card__review-box__name"]}>
                        محمد عبدالرحمن
                        </div>
                        <div className={styles["course-review__cards-carousel__card__review-box__rating"]}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.063rem" height="1rem" viewBox="0 0 33.113 31.165">
                                <path id="yellowStar" d="M16.557,0l4.967,10.462L33.113,11.9l-8.52,7.908,2.2,11.353L16.557,25.59,6.324,31.165l2.2-11.353L0,11.9l11.59-1.442Z" fill="#ffa120"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.063rem" height="1rem" viewBox="0 0 33.113 31.165">
                                <path id="yellowStar" d="M16.557,0l4.967,10.462L33.113,11.9l-8.52,7.908,2.2,11.353L16.557,25.59,6.324,31.165l2.2-11.353L0,11.9l11.59-1.442Z" fill="#ffa120"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.063rem" height="1rem" viewBox="0 0 33.113 31.165">
                                <path id="yellowStar" d="M16.557,0l4.967,10.462L33.113,11.9l-8.52,7.908,2.2,11.353L16.557,25.59,6.324,31.165l2.2-11.353L0,11.9l11.59-1.442Z" fill="#ffa120"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.063rem" height="1rem" viewBox="0 0 33.113 31.165">
                                <path id="yellowStar" d="M16.557,0l4.967,10.462L33.113,11.9l-8.52,7.908,2.2,11.353L16.557,25.59,6.324,31.165l2.2-11.353L0,11.9l11.59-1.442Z" fill="#ffa120"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.063rem" height="1rem" viewBox="0 0 33.113 31.165">
                                <path id="grayStar" d="M16.557,0l4.967,10.462L33.113,11.9l-8.52,7.908,2.2,11.353L16.557,25.59,6.324,31.165l2.2-11.353L0,11.9l11.59-1.442Z" fill="#ccc"/>
                            </svg>
                            <span> منذ 8 ساعات </span>
                        </div>
                        <div className={styles["course-review__cards-carousel__card__review-box__review"]}>
                        هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها
                        </div>
                    </div>
                </div>
             
            </SwiperSlide>
            <SwiperSlide>
                <div className={styles["course-review__cards-carousel__card"]}>
                    <div className={styles["course-review__cards-carousel__card__reviewer-img"]}>
                        <img src="/images/MaleAvatar.svg" alt="male avatar" /> 
                    </div>
                    <div className={styles["course-review__cards-carousel__card__review-box"]}>
                        <div className={styles["course-review__cards-carousel__card__review-box__name"]}>
                        محمد عبدالرحمن
                        </div>
                        <div className={styles["course-review__cards-carousel__card__review-box__rating"]}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.063rem" height="1rem" viewBox="0 0 33.113 31.165">
                                <path id="yellowStar" d="M16.557,0l4.967,10.462L33.113,11.9l-8.52,7.908,2.2,11.353L16.557,25.59,6.324,31.165l2.2-11.353L0,11.9l11.59-1.442Z" fill="#ffa120"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.063rem" height="1rem" viewBox="0 0 33.113 31.165">
                                <path id="yellowStar" d="M16.557,0l4.967,10.462L33.113,11.9l-8.52,7.908,2.2,11.353L16.557,25.59,6.324,31.165l2.2-11.353L0,11.9l11.59-1.442Z" fill="#ffa120"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.063rem" height="1rem" viewBox="0 0 33.113 31.165">
                                <path id="yellowStar" d="M16.557,0l4.967,10.462L33.113,11.9l-8.52,7.908,2.2,11.353L16.557,25.59,6.324,31.165l2.2-11.353L0,11.9l11.59-1.442Z" fill="#ffa120"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.063rem" height="1rem" viewBox="0 0 33.113 31.165">
                                <path id="yellowStar" d="M16.557,0l4.967,10.462L33.113,11.9l-8.52,7.908,2.2,11.353L16.557,25.59,6.324,31.165l2.2-11.353L0,11.9l11.59-1.442Z" fill="#ffa120"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.063rem" height="1rem" viewBox="0 0 33.113 31.165">
                                <path id="grayStar" d="M16.557,0l4.967,10.462L33.113,11.9l-8.52,7.908,2.2,11.353L16.557,25.59,6.324,31.165l2.2-11.353L0,11.9l11.59-1.442Z" fill="#ccc"/>
                            </svg>
                            <span> منذ 8 ساعات </span>
                        </div>
                        <div className={styles["course-review__cards-carousel__card__review-box__review"]}>
                        هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها
                        </div>
                    </div>
                </div>
             
            </SwiperSlide>
            <SwiperSlide>
                <div className={styles["course-review__cards-carousel__card"]}>
                    <div className={styles["course-review__cards-carousel__card__reviewer-img"]}>
                        <img src="/images/MaleAvatar.svg" alt="male avatar" /> 
                    </div>
                    <div className={styles["course-review__cards-carousel__card__review-box"]}>
                        <div className={styles["course-review__cards-carousel__card__review-box__name"]}>
                        محمد عبدالرحمن
                        </div>
                        <div className={styles["course-review__cards-carousel__card__review-box__rating"]}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.063rem" height="1rem" viewBox="0 0 33.113 31.165">
                                <path id="yellowStar" d="M16.557,0l4.967,10.462L33.113,11.9l-8.52,7.908,2.2,11.353L16.557,25.59,6.324,31.165l2.2-11.353L0,11.9l11.59-1.442Z" fill="#ffa120"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.063rem" height="1rem" viewBox="0 0 33.113 31.165">
                                <path id="yellowStar" d="M16.557,0l4.967,10.462L33.113,11.9l-8.52,7.908,2.2,11.353L16.557,25.59,6.324,31.165l2.2-11.353L0,11.9l11.59-1.442Z" fill="#ffa120"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.063rem" height="1rem" viewBox="0 0 33.113 31.165">
                                <path id="yellowStar" d="M16.557,0l4.967,10.462L33.113,11.9l-8.52,7.908,2.2,11.353L16.557,25.59,6.324,31.165l2.2-11.353L0,11.9l11.59-1.442Z" fill="#ffa120"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.063rem" height="1rem" viewBox="0 0 33.113 31.165">
                                <path id="yellowStar" d="M16.557,0l4.967,10.462L33.113,11.9l-8.52,7.908,2.2,11.353L16.557,25.59,6.324,31.165l2.2-11.353L0,11.9l11.59-1.442Z" fill="#ffa120"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.063rem" height="1rem" viewBox="0 0 33.113 31.165">
                                <path id="grayStar" d="M16.557,0l4.967,10.462L33.113,11.9l-8.52,7.908,2.2,11.353L16.557,25.59,6.324,31.165l2.2-11.353L0,11.9l11.59-1.442Z" fill="#ccc"/>
                            </svg>
                            <span> منذ 8 ساعات </span>
                        </div>
                        <div className={styles["course-review__cards-carousel__card__review-box__review"]}>
                        هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها
                        </div>
                    </div>
                </div>
             
            </SwiperSlide>
        </Swiper>
        </Col>
            
        </>
    )
}
