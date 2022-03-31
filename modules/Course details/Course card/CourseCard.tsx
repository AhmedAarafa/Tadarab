/* eslint-disable @next/next/no-img-element */
import React, { useState,useEffect } from "react";
import styles from "./course-card.module.css";
import { Button } from "react-bootstrap";
import { stickyCardHandler } from "./utils";
import  useResize from "custom hooks/useResize";
import { useDispatch, useSelector } from "react-redux";  
import { CartIcon,FavouriteIcon,ShareIcon,GuaranteeIcon } from "common/Icons/Icons"

export default function CourseCard() {

  const [courseDetails, setCourseDetails] = useState<any>([]);
  const courseDetailsData = useSelector((state:any) => state.courseDetailsData);
  const userStatus = useSelector((state:any) => state.userAuthentication);
  
  useEffect(() => {
    // console.log("courseDetailsData",courseDetailsData);
    setCourseDetails(courseDetailsData.data || []);
  
  }, [courseDetailsData]);
  
  useResize(stickyCardHandler);

  return (
    <>
      <div className={styles["course-details__course-card"]} id="sticky-card">
        <h1
          id="course-card__title"
          className={styles["course-details__course-card__title"]}
        >
          {courseDetails.course_details?.title}
        </h1>
        <div id="course-card__prices-box">
          <div className={styles["course-details__course-card__price-box"]}>
            <span
              className={
                styles["course-details__course-card__price-box__price"]
              }
            >
              {courseDetails.course_details?.discounted_price}
            </span>
            <span
              className={
                styles["course-details__course-card__price-box__currency"]
              }
            >
              {courseDetails.course_details?.currency_code}
            </span>
          </div>
         { courseDetails.course_details?.price !== courseDetails.course_details?.discounted_price  &&
           <div className={styles["course-details__course-card__old-price-box"]}>
            <div
              className={
                styles[
                  "course-details__course-card__old-price-box--line-through"
                ]
              }
            >
              <span
                className={
                  styles["course-details__course-card__old-price-box__price"]
                }
              >
                {courseDetails.course_details?.price}
              </span>
              <span
                className={
                  styles["course-details__course-card__old-price-box__currency"]
                }
              >
                {" "}
                {courseDetails.course_details?.currency_code}{" "}
              </span>
            </div>
            <span
              className={
                styles["course-details__course-card__old-price-box__discount"]
              }
            >
              {" "}
              (خصم {Math.ceil(100-((courseDetails.course_details?.discounted_price/courseDetails.course_details?.price)*100))}%){" "}
            </span>
          </div>}
        </div>

        <div
          id="course-card__action-btns"
          className={styles["course-details__course-card__actions-btns"]}
        >
          <Button id="add-to-cart-btn"
            className={
              styles[
                "course-details__course-card__actions-btns__add-to-cart-btn"
              ]
            }
          >
           <CartIcon color={"#fff"}/>
            <span>أضف للسلة</span>
          </Button>
          <Button
            className={
              styles["course-details__course-card__actions-btns__fav-btn"]
            }
          >
            <FavouriteIcon color={"#222"}/>
          </Button>
          <Button
            className={
              styles["course-details__course-card__actions-btns__share-btn"]
            }
          >
            <ShareIcon/>
          </Button>
        </div>

        <div
          id="course-card__guarantee-card"
          className={styles["course-details__course-card__guarantee-box"]}
        >
          <div
            className={
              styles["course-details__course-card__guarantee-box__icon"]
            }
          >
            <GuaranteeIcon/>
          </div>
          <div
            className={
              styles["course-details__course-card__guarantee-box__text-box"]
            }
          >
            <div
              className={
                styles[
                  "course-details__course-card__guarantee-box__text-box__major"
                ]
              }
            >
              ٣٠ يوم ضمان ذهبي استرداد كامل المبلغ
            </div>
            <div
              className={
                styles[
                  "course-details__course-card__guarantee-box__text-box__minor"
                ]
              }
            >
              اذا لم تكن راضي عن محتوى الدورة
            </div>
          </div>
        </div>
        <div
          id="course-card__details-list"
          className={styles["course-details__course-card__details-list"]}
        >
          {courseDetails.course_details?.key_features?.map((kf:any,i:number)=>{

            return(
              <div key={i}
                className={
                  styles["course-details__course-card__details-list__item"]
                }>
                <img src={`/images/${kf.icon}.svg`} alt={`${kf.icon} icon`} />

                <span>{kf.text}</span>
              </div>
            )
            
          })}
        
        </div>

        <div
          id="course-card__promo-code"
          className={styles["course-details__course-card__promo-code"]}
        >
          <span>هل لديك كوبون خصم؟</span>
          <span> ادخل الكوبون </span>
        </div>
      </div>


      <div className={styles["course-details__sticky-top-course-card"]} id="sticky-top-course-card">
      <div className={styles["course-details__sticky-top-course-card__course-details-box"]}>

      <div className={styles["course-details__sticky-top-course-card__course-img"]}>
              <img src={courseDetails.course_details?.image} alt="course image" />
      </div>
      <div className={styles["course-details__sticky-top-course-card__course-details"]}>
          <div >{courseDetails.course_details?.title}</div>
          <div >{courseDetails.course_details?.trainer.name_ar}</div>
      </div>
      </div>
        <div className={styles["course-details__sticky-top-course-card__checkout-box"]}>
          <div >
            <div className={styles["course-details__course-card__price-box"]}>
              <span
                className={
                  styles["course-details__course-card__price-box__price"]
                }
              >
                {courseDetails.course_details?.price}
              </span>
              <span
                className={
                  styles["course-details__course-card__price-box__currency"]
                }
              >
                {courseDetails.course_details?.currency_code}
              </span>
            </div>
          { courseDetails.course_details?.price !== courseDetails.course_details?.discounted_price  &&
            <div className={styles["course-details__course-card__old-price-box"]}>
              <div
                className={
                  styles[
                    "course-details__course-card__old-price-box--line-through"
                  ]
                }
              >
                <span
                  className={
                    styles["course-details__course-card__old-price-box__price"]
                  }
                >
                  {courseDetails.course_details?.discounted_price}
                </span>
                <span
                  className={
                    styles["course-details__course-card__old-price-box__currency"]
                  }
                >
                  {" "}
                  {courseDetails.course_details?.currency_code}{" "}
                </span>
              </div>
              <span
                className={
                  styles["course-details__course-card__old-price-box__discount"]
                }
              >
                {" "}
                (خصم {Math.ceil(100-((courseDetails.course_details?.discounted_price/courseDetails.course_details?.price)*100))}%){" "}
              </span>
            </div>}
          </div>
          <div  className={styles["course-details__course-card__actions-btns"]}
          >
            <Button id="add-to-cart-btn"
              className={
                styles[
                  "course-details__course-card__actions-btns__add-to-cart-btn"
                ]
              }
            >
               <CartIcon color={"#fff"}/>
              <span>أضف للسلة</span>
            </Button>
            <Button
              className={
                styles["course-details__course-card__actions-btns__fav-btn"]
              }
            >
              <FavouriteIcon color={"#222"}/>
            </Button>
            <Button
              className={
                styles["course-details__course-card__actions-btns__share-btn"]
              }
            >
              <ShareIcon/>

            </Button>
          </div>
         
        </div>
       
      </div>
    </>
  );
}
