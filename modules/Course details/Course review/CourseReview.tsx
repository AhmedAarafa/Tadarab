/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import styles from "./course-review.module.css";
import { Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore , {Navigation} from 'swiper';
import "swiper/css";
import { Button } from "react-bootstrap";
// import {scrollspyHandler} from "./utils"
import {scrollspyHandler} from "../../_Shared/utils/scrollSpy"
import { axiosInstance } from "configurations/axios/axiosConfig";
import { ReviewStartIcon, PlusIcon, GiftIcon, CartIcon } from "common/Icons/Icons";

export default function CourseReview() { 
    SwiperCore.use([Navigation]);
  const [courseReviews, setCourseReviews] = useState<any>([]);
  const [reviewsSlicer, setReviewsSlicer] = useState<any>(1);

    useEffect(() => {
       scrollspyHandler("reviews-section");
       axiosInstance
        .get(`courses/1540/reviews/?country_code=${localStorage.getItem("countryCode")}`)
        .then(function (response:any) {
            setCourseReviews(response.data.data);
        })
        .catch(function (error) { 
        console.log(error); 
        });

       return () => {
        window.removeEventListener("resize", () => {
          null;
        });
      }
      }, []);

      function timerHandler(date:any) {
        
            // get total seconds between the times
            let delta:any = Math.abs(date - (Math.floor(Date.now() / 1000)));
    
            // calculate (and subtract) whole days
            let days:any = Math.floor(delta / 86400);
            delta -= days * 86400;
    
            // calculate (and subtract) whole hours
            let hours:any = Math.floor(delta / 3600) % 24;
            delta -= hours * 3600;
    
            // calculate (and subtract) whole minutes
            let minutes:any = Math.floor(delta / 60) % 60;
            delta -= minutes * 60;
    
            // what's left is seconds
            let seconds:any = delta ; // in theory the modulus is not required

            return {days, hours , minutes, seconds}

    }

    return (
        <>
        <Col  xs={12} className={styles["course-review"]}>
    <div id="reviews-section" className={styles["course-review__scrollspy-helper"]}></div>

            <div className={styles["course-review__title"]}>التقييم العام للدورة</div>
            <div className={styles["course-review__review-box"]}>
                <div className={styles["course-review__review-box__number"]}>{courseReviews?.reviews_average}</div>
                <div className={styles["course-review__review-box__review"]}>
                    <div className={styles["course-review__review-box__review__stars"]}>
                        {
                            [...Array(5)].map((course:any,i:number)=>{
                                if( i < Math.floor(courseReviews?.reviews_average)){
                                    return(
                                    <ReviewStartIcon key={i}  color="#ffa120"/>
                                    )
                                }else{
                                    return(
                                    <ReviewStartIcon key={i}  color="#ccc"/>
                                    )
                                }
                            })
                        }
                    </div>
                    <div className={styles["course-review__review-box__review__number-of-reviews"]}>
                        <span> {courseReviews?.reviews_count} </span>
                        <span> تقييم من المتعلمين </span>
                    </div>
                </div>
            </div>
        </Col>

        <Col xs={12} className={styles["course-review__mobile-view"]}>
            {
                courseReviews?.reviews?.slice(0,reviewsSlicer).map((review:any,i:number)=>{
                    return(
                          <div key={i} className={styles["course-review__cards-carousel__card"]} >
                                <div className={styles["course-review__cards-carousel__card__reviewer-img"]}>
                                    <img src={review.user_image} alt="male avatar" /> 
                                </div>
                                <div className={styles["course-review__cards-carousel__card__review-box"]}>
                                    <div>

                                    <div className={styles["course-review__cards-carousel__card__review-box__name"]}>
                                    {review.user_full_name}
                                    </div>
                                    <div className={styles["course-review__cards-carousel__card__review-box__rating"]}>
                                        {
                                            [...Array(5)].map((course:any,i:number)=>{
                                                if( i < Math.floor(review.rate)){
                                                    return(
                                                    <ReviewStartIcon key={i}  color="#ffa120"/>
                                                    )
                                                }else{
                                                    return(
                                                    <ReviewStartIcon key={i}  color="#ccc"/>
                                                    )
                                                }
                                            })
                                        }

                                        {
                                            timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).days !== 0 &&
                                            <span>
                                                منذ
                                                
                                                {timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).days == 1 ?
                                                ` يوم `
                                                :
                                                timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).days == 2 ?
                                                `  يومين  `
                                                :
                                                timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).days > 10 ?
                                                ` ${timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).days} يوم `
                                                :
                                                ` ${timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).days} أيام `
                                                }
                                            </span>
                                        }
                                        {
                                            timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).days == 0 &&
                                            (timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).hours !== 0 && 
                                            <span>
                                                
                                                منذ
                                                {timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).hours == 1 ?
                                                ` ساعة `
                                                :
                                                timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).hours == 2 ?
                                                ` ساعتين `
                                                :
                                                timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).hours > 10 ?
                                                ` ${timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).hours} ساعة `
                                                :
                                                ` ${timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).hours} ساعات `
                                                }
                                            </span>)
                                        }
                                        {
                                            timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).days == 0 &&

                                            
                                            (timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).hours == 0 &&

                                                (timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).minutes !== 0 &&
                                            <span>
                                                منذ
                                                
                                                {timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).minutes == 1 ?
                                                ` دقيقة `
                                                :
                                                timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).minutes == 2 ?
                                                ` دقيقتين `
                                                :
                                                timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).minutes > 10 ?
                                                ` ${timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).minutes} دقيقة `
                                                :
                                                ` ${timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).minutes} دقائق `
                                                }
                                            </span>))
                                        }
                                        {
                                            timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).days == 0 &&

                                            
                                            (timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).hours == 0 &&

                                            timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).minutes == 0 &&

                                                ( (timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).seconds !== 0 &&
                                            <span>
                                                منذ
                                                
                                                {timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).seconds == 1 ?
                                                ` ثانية `
                                                :
                                                timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).seconds == 2 ?
                                                ` ثانيتين `
                                                :
                                                timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).seconds > 10 ?
                                                ` ${timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).seconds} ثانية `
                                                :
                                                ` ${timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).seconds} ثواني `
                                                }
                                            </span>))
                                            )
                                        }
                                    
                                    </div>
                                    </div>
                                    <div className={styles["course-review__cards-carousel__card__review-box__review"]}>
                                    {review.comment}
                                    </div>
                                </div>
                            </div>
                    )
                })
            }
            {
                reviewsSlicer < courseReviews?.reviews?.length && 

                <Button onClick={()=> setReviewsSlicer(reviewsSlicer+1)} className={styles["show-all-reviews-btn"]}>
                    اعرض أكثر
                </Button>
            }

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
            {
                courseReviews?.reviews?.map((review:any, i:number)=>{
                    return(

                        <SwiperSlide key={i}>
                            <div className={styles["course-review__cards-carousel__card"]}
                            style={{ alignItems: review.comment == "" ? 'center': 'flex-start'}}>
                                <div className={styles["course-review__cards-carousel__card__reviewer-img"]}>
                                    <img src={review.user_image} alt="male avatar" /> 
                                </div>
                                <div className={styles["course-review__cards-carousel__card__review-box"]}>
                                    <div>

                                    <div className={styles["course-review__cards-carousel__card__review-box__name"]}>
                                    {review.user_full_name}
                                    </div>
                                    <div className={styles["course-review__cards-carousel__card__review-box__rating"]}>
                                        {
                                            [...Array(5)].map((course:any,i:number)=>{
                                                if( i < Math.floor(review.rate)){
                                                    return(
                                                    <ReviewStartIcon key={i}  color="#ffa120"/>
                                                    )
                                                }else{
                                                    return(
                                                    <ReviewStartIcon key={i}  color="#ccc"/>
                                                    )
                                                }
                                            })
                                        }

                                        {
                                            timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).days !== 0 &&
                                            <span>
                                                منذ
                                                 
                                                {timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).days == 1 ?
                                                 ` يوم `
                                                :
                                                timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).days == 2 ?
                                                `  يومين  `
                                                :
                                                timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).days > 10 ?
                                                ` ${timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).days} يوم `
                                                :
                                                ` ${timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).days} أيام `
                                                }
                                            </span>
                                        }
                                        {
                                            timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).days == 0 &&
                                            (timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).hours !== 0 && 
                                            <span>
                                                  
                                                منذ
                                                {timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).hours == 1 ?
                                                 ` ساعة `
                                                :
                                                timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).hours == 2 ?
                                                ` ساعتين `
                                                :
                                                timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).hours > 10 ?
                                                ` ${timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).hours} ساعة `
                                                :
                                                ` ${timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).hours} ساعات `
                                                }
                                            </span>)
                                        }
                                        {
                                            timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).days == 0 &&

                                           
                                            (timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).hours == 0 &&

                                                (timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).minutes !== 0 &&
                                            <span>
                                                منذ
                                                 
                                                {timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).minutes == 1 ?
                                                 ` دقيقة `
                                                :
                                                timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).minutes == 2 ?
                                                ` دقيقتين `
                                                :
                                                timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).minutes > 10 ?
                                                ` ${timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).minutes} دقيقة `
                                                :
                                                ` ${timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).minutes} دقائق `
                                                }
                                            </span>))
                                        }
                                        {
                                            timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).days == 0 &&

                                           
                                            (timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).hours == 0 &&

                                            timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).minutes == 0 &&

                                               ( (timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).seconds !== 0 &&
                                            <span>
                                                منذ
                                                 
                                                {timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).seconds == 1 ?
                                                 ` ثانية `
                                                :
                                                timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).seconds == 2 ?
                                                ` ثانيتين `
                                                :
                                                timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).seconds > 10 ?
                                                ` ${timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).seconds} ثانية `
                                                :
                                                ` ${timerHandler((Math.floor(Date.now() / 1000)) - (review.date/1000)).seconds} ثواني `
                                                }
                                            </span>))
                                            )
                                        }
                                   
                                    </div>
                                    </div>
                                    <div className={styles["course-review__cards-carousel__card__review-box__review"]}>
                                    {review.comment}
                                    </div>
                                </div>
                            </div>
                        
                        </SwiperSlide>

                    )
                })
            }
          
        </Swiper>
        </Col>
            
        </>
    )
}
