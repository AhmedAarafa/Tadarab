import React from 'react'
import styles from "./course-review.module.css";
import { Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore , {Navigation} from 'swiper';
import "swiper/css";

export default function CourseReview() {
    SwiperCore.use([Navigation]);

    return (
        <>
        <Col xs={12} className={styles["course-review"]}>
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

        <Col xs={12} className={styles["course-review__cards-carousel"]}>
        <Swiper dir="rtl" slidesPerView={2.1} navigation={true} 
        breakpoints={{
            "751": {
                "slidesPerView": 2.1,
            },
        }} className="mySwiper">
            <SwiperSlide>
                <div className={styles["course-review__cards-carousel__card"]}>
                    <div className={styles["course-review__cards-carousel__card__reviewer-img"]}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="3.125rem" height="3.125rem" viewBox="0 0 50 50.186">
                                <defs>
                                    <clipPath id="clip-path">
                                    <rect id="NoPath_-_Copy_48_" data-name="NoPath - Copy (48)" width="50" height="50" rx="25" transform="translate(1161 5677)" fill="#f2f2f2"/>
                                    </clipPath>
                                </defs>
                                <g id="MaleAvatar" transform="translate(-1161 -7558)">
                                    <rect id="NoPath_-_Copy_48_2" data-name="NoPath - Copy (48)" width="50" height="50" rx="25" transform="translate(1161 7558)" fill="#f2f2f2"/>
                                    <g id="Mask_Group_11" data-name="Mask Group 11" transform="translate(0 1881.186)" opacity="0.2" clipPath="url(#clip-path)">
                                    <g id="_172625_male_user_icon" data-name="172625_male_user_icon" transform="translate(1161 5682)">
                                        <rect id="Rectangle_3182" data-name="Rectangle 3182" width="50" height="50" fill="none"/>
                                        <path id="Path_13162" data-name="Path 13162" d="M30.933,32.528a41.335,41.335,0,0,1-.09-4.21c.73-.383,2.038-2.825,2.259-4.888.574-.047,1.479-.607,1.744-2.818a2.064,2.064,0,0,0-.771-2.065c.934-2.809,2.874-11.5-3.588-12.4-.665-1.168-2.368-1.759-4.581-1.759-8.854.163-9.922,6.686-7.981,14.156a2.068,2.068,0,0,0-.771,2.065c.266,2.211,1.17,2.771,1.744,2.818.22,2.062,1.58,4.505,2.312,4.888a41.346,41.346,0,0,1-.091,4.21C19.367,37.238,7.546,35.916,7,45H45C44.455,35.916,32.685,37.238,30.933,32.528Z"/>
                                    </g>
                                    </g>
                                </g>
                        </svg> 
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="3.125rem" height="3.125rem" viewBox="0 0 50 50.186">
                                <defs>
                                    <clipPath id="clip-path">
                                    <rect id="NoPath_-_Copy_48_" data-name="NoPath - Copy (48)" width="50" height="50" rx="25" transform="translate(1161 5677)" fill="#f2f2f2"/>
                                    </clipPath>
                                </defs>
                                <g id="MaleAvatar" transform="translate(-1161 -7558)">
                                    <rect id="NoPath_-_Copy_48_2" data-name="NoPath - Copy (48)" width="50" height="50" rx="25" transform="translate(1161 7558)" fill="#f2f2f2"/>
                                    <g id="Mask_Group_11" data-name="Mask Group 11" transform="translate(0 1881.186)" opacity="0.2" clipPath="url(#clip-path)">
                                    <g id="_172625_male_user_icon" data-name="172625_male_user_icon" transform="translate(1161 5682)">
                                        <rect id="Rectangle_3182" data-name="Rectangle 3182" width="50" height="50" fill="none"/>
                                        <path id="Path_13162" data-name="Path 13162" d="M30.933,32.528a41.335,41.335,0,0,1-.09-4.21c.73-.383,2.038-2.825,2.259-4.888.574-.047,1.479-.607,1.744-2.818a2.064,2.064,0,0,0-.771-2.065c.934-2.809,2.874-11.5-3.588-12.4-.665-1.168-2.368-1.759-4.581-1.759-8.854.163-9.922,6.686-7.981,14.156a2.068,2.068,0,0,0-.771,2.065c.266,2.211,1.17,2.771,1.744,2.818.22,2.062,1.58,4.505,2.312,4.888a41.346,41.346,0,0,1-.091,4.21C19.367,37.238,7.546,35.916,7,45H45C44.455,35.916,32.685,37.238,30.933,32.528Z"/>
                                    </g>
                                    </g>
                                </g>
                        </svg> 
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="3.125rem" height="3.125rem" viewBox="0 0 50 50.186">
                                <defs>
                                    <clipPath id="clip-path">
                                    <rect id="NoPath_-_Copy_48_" data-name="NoPath - Copy (48)" width="50" height="50" rx="25" transform="translate(1161 5677)" fill="#f2f2f2"/>
                                    </clipPath>
                                </defs>
                                <g id="MaleAvatar" transform="translate(-1161 -7558)">
                                    <rect id="NoPath_-_Copy_48_2" data-name="NoPath - Copy (48)" width="50" height="50" rx="25" transform="translate(1161 7558)" fill="#f2f2f2"/>
                                    <g id="Mask_Group_11" data-name="Mask Group 11" transform="translate(0 1881.186)" opacity="0.2" clipPath="url(#clip-path)">
                                    <g id="_172625_male_user_icon" data-name="172625_male_user_icon" transform="translate(1161 5682)">
                                        <rect id="Rectangle_3182" data-name="Rectangle 3182" width="50" height="50" fill="none"/>
                                        <path id="Path_13162" data-name="Path 13162" d="M30.933,32.528a41.335,41.335,0,0,1-.09-4.21c.73-.383,2.038-2.825,2.259-4.888.574-.047,1.479-.607,1.744-2.818a2.064,2.064,0,0,0-.771-2.065c.934-2.809,2.874-11.5-3.588-12.4-.665-1.168-2.368-1.759-4.581-1.759-8.854.163-9.922,6.686-7.981,14.156a2.068,2.068,0,0,0-.771,2.065c.266,2.211,1.17,2.771,1.744,2.818.22,2.062,1.58,4.505,2.312,4.888a41.346,41.346,0,0,1-.091,4.21C19.367,37.238,7.546,35.916,7,45H45C44.455,35.916,32.685,37.238,30.933,32.528Z"/>
                                    </g>
                                    </g>
                                </g>
                        </svg> 
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="3.125rem" height="3.125rem" viewBox="0 0 50 50.186">
                                <defs>
                                    <clipPath id="clip-path">
                                    <rect id="NoPath_-_Copy_48_" data-name="NoPath - Copy (48)" width="50" height="50" rx="25" transform="translate(1161 5677)" fill="#f2f2f2"/>
                                    </clipPath>
                                </defs>
                                <g id="MaleAvatar" transform="translate(-1161 -7558)">
                                    <rect id="NoPath_-_Copy_48_2" data-name="NoPath - Copy (48)" width="50" height="50" rx="25" transform="translate(1161 7558)" fill="#f2f2f2"/>
                                    <g id="Mask_Group_11" data-name="Mask Group 11" transform="translate(0 1881.186)" opacity="0.2" clipPath="url(#clip-path)">
                                    <g id="_172625_male_user_icon" data-name="172625_male_user_icon" transform="translate(1161 5682)">
                                        <rect id="Rectangle_3182" data-name="Rectangle 3182" width="50" height="50" fill="none"/>
                                        <path id="Path_13162" data-name="Path 13162" d="M30.933,32.528a41.335,41.335,0,0,1-.09-4.21c.73-.383,2.038-2.825,2.259-4.888.574-.047,1.479-.607,1.744-2.818a2.064,2.064,0,0,0-.771-2.065c.934-2.809,2.874-11.5-3.588-12.4-.665-1.168-2.368-1.759-4.581-1.759-8.854.163-9.922,6.686-7.981,14.156a2.068,2.068,0,0,0-.771,2.065c.266,2.211,1.17,2.771,1.744,2.818.22,2.062,1.58,4.505,2.312,4.888a41.346,41.346,0,0,1-.091,4.21C19.367,37.238,7.546,35.916,7,45H45C44.455,35.916,32.685,37.238,30.933,32.528Z"/>
                                    </g>
                                    </g>
                                </g>
                        </svg> 
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
