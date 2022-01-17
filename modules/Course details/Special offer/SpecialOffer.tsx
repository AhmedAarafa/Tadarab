/* eslint-disable @next/next/no-img-element */
import React ,{ useEffect} from "react";
import styles from "./special-offer.module.css";
import { Button } from "react-bootstrap";

export default function SpecialOffer() {
    
  return (
    <>
      <div className={styles["special-offer"]}>
        <div className={styles["special-offer__title"]}>
        <svg id="gift" xmlns="http://www.w3.org/2000/svg" width="2.5rem" height="2.5rem" viewBox="0 0 39.193 39.779">
            <g id="Group_10871" data-name="Group 10871">
                <path id="Path_12969" data-name="Path 12969" d="M39.881,11.251H36.447A6.209,6.209,0,0,0,30.752,2.5c-4.187,0-6.281,2.387-7.956,5.192C21.122,4.887,19.028,2.5,14.841,2.5a6.209,6.209,0,0,0-5.695,8.751H5.712A2.52,2.52,0,0,0,3.2,13.764v5.108a1.215,1.215,0,0,0,1.214,1.214H41.179a1.215,1.215,0,0,0,1.214-1.214V13.764A2.52,2.52,0,0,0,39.881,11.251ZM30.752,6.227a2.512,2.512,0,1,1,0,5.025H25.058C26.9,7.86,27.989,6.227,30.752,6.227ZM12.328,8.739a2.52,2.52,0,0,1,2.512-2.512c2.764,0,3.852,1.633,5.695,5.025H14.841A2.52,2.52,0,0,1,12.328,8.739Z" transform="translate(-3.2 -2.5)" fill="#af151f"/>
                <path id="Path_12970" data-name="Path 12970" d="M9.2,68.767a3.092,3.092,0,0,0,3.1,3.1H24.442V53.4H9.2Z" transform="translate(-6.688 -32.087)" fill="#af151f"/>
                <path id="Path_12971" data-name="Path 12971" d="M54.4,71.866H66.543a3.092,3.092,0,0,0,3.1-3.1V53.4H54.4Z" transform="translate(-32.961 -32.087)" fill="#af151f"/>
            </g>
        </svg> 
        <span>
        عرض خاص جدااا لفترة محدودة
        </span>

        </div>

        <div className={styles["special-offer__cards-outer-box"]}>
            <div className={styles["special-offer__cards-outer-box__card"]}>
                <div className={styles["special-offer__cards-outer-box__card__course-img"]}>
                    <img src="/images/course2cropped.png" alt="course image" />
                    <div className={styles["special-offer__cards-outer-box__card__category-chip"]}>
                        فنون
                    </div>
                </div>

                <div className={styles["special-offer__cards-outer-box__card__trainer-info-box-container"]}>

                    <div className={styles["special-offer__cards-outer-box__card__trainer-info-box"]}>
                        <div className={styles["special-offer__cards-outer-box__card__trainer-info-box__trainer-img"]}>
                            <img src="/images/trainer img.png" alt="trainer image" />
                        </div>
                        <div className={styles["special-offer__cards-outer-box__card__trainer-info-box__info"]}>
                            <h1 className={styles["special-offer__cards-outer-box__card__trainer-info-box__course-name"]} title=" تعليم الرسم بالقلم الرصاصصصص">
                            تعليم الرسم بالقلم الرصاصصصصصص
                            </h1>
                            <div className={styles["special-offer__cards-outer-box__card__trainer-info-box__trainer-name"]}>
                            أ/ مروة عبدالله
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles["special-offer__cards-outer-box__card__rating-box"]}>
                            <span> 4.1 </span>
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

                            <span> (217 تقييم) </span>
                        </div>
                        <div className={styles["special-offer__cards-outer-box__card__price"]}>
                            <span> 800 </span>
                            <span> جنية مصري </span>
                        </div>
                        <div className={styles["special-offer__cards-outer-box__card__old-price"]}>
                            <span> 860 </span>
                            <span> جنية مصري </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles["special-offer__cards-outer-box__plus"]}>
                <div>

                <svg xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="1.25rem" viewBox="0 0 20 20">
                    <path id="plus-solid" d="M18.571,39.857H12.143V33.429A1.429,1.429,0,0,0,10.714,32H9.286a1.429,1.429,0,0,0-1.429,1.429v6.429H1.429A1.429,1.429,0,0,0,0,41.286v1.429a1.429,1.429,0,0,0,1.429,1.429H7.857v6.429A1.429,1.429,0,0,0,9.286,52h1.429a1.429,1.429,0,0,0,1.429-1.429V44.143h6.429A1.429,1.429,0,0,0,20,42.714V41.286A1.429,1.429,0,0,0,18.571,39.857Z" transform="translate(0 -32)" fill="#be1622"/>
                </svg>
                </div>
            </div>
            <div className={styles["special-offer__cards-outer-box__card"]}>
                <div className={styles["special-offer__cards-outer-box__card__course-img"]}>
                    <img src="/images/course2cropped.png" alt="course image" />
                    <div className={styles["special-offer__cards-outer-box__card__category-chip"]}>
                        فنون
                    </div>
                </div>

                <div className={styles["special-offer__cards-outer-box__card__trainer-info-box-container"]}>

                    <div className={styles["special-offer__cards-outer-box__card__trainer-info-box"]}>
                        <div className={styles["special-offer__cards-outer-box__card__trainer-info-box__trainer-img"]}>
                            <img src="/images/trainer img.png" alt="trainer image" />
                        </div>
                        <div className={styles["special-offer__cards-outer-box__card__trainer-info-box__info"]}>
                            <h1 className={styles["special-offer__cards-outer-box__card__trainer-info-box__course-name"]}>
                            تعليم الرسم والتلوين
                            </h1>
                            <div className={styles["special-offer__cards-outer-box__card__trainer-info-box__trainer-name"]}>
                            أ/ مروة عبدالله
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles["special-offer__cards-outer-box__card__rating-box"]}>
                            <span> 4.1 </span>
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

                            <span> (217 تقييم) </span>
                        </div>
                        <div className={styles["special-offer__cards-outer-box__card__price"]}>
                            <span> 800 </span>
                            <span> جنية مصري </span>
                        </div>
                        <div className={styles["special-offer__cards-outer-box__card__old-price"]}>
                            <span> 860 </span>
                            <span> جنية مصري </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles["special-offer__cards-outer-box__plus"]}>
                <div>

                <svg xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="1.25rem" viewBox="0 0 20 20">
                    <path id="plus-solid" d="M18.571,39.857H12.143V33.429A1.429,1.429,0,0,0,10.714,32H9.286a1.429,1.429,0,0,0-1.429,1.429v6.429H1.429A1.429,1.429,0,0,0,0,41.286v1.429a1.429,1.429,0,0,0,1.429,1.429H7.857v6.429A1.429,1.429,0,0,0,9.286,52h1.429a1.429,1.429,0,0,0,1.429-1.429V44.143h6.429A1.429,1.429,0,0,0,20,42.714V41.286A1.429,1.429,0,0,0,18.571,39.857Z" transform="translate(0 -32)" fill="#be1622"/>
                </svg>
                </div>
            </div>
            <div className={styles["special-offer__cards-outer-box__card"]}>
                <div className={styles["special-offer__cards-outer-box__card__course-img"]}>
                    <img src="/images/course2cropped.png" alt="course image" />
                    <div className={styles["special-offer__cards-outer-box__card__category-chip"]}>
                        فنون
                    </div>
                </div>

                <div className={styles["special-offer__cards-outer-box__card__trainer-info-box-container"]}>

                    <div className={styles["special-offer__cards-outer-box__card__trainer-info-box"]}>
                        <div className={styles["special-offer__cards-outer-box__card__trainer-info-box__trainer-img"]}>
                            <img src="/images/trainer img.png" alt="trainer image" />
                        </div>
                        <div className={styles["special-offer__cards-outer-box__card__trainer-info-box__info"]}>
                            <h1 className={styles["special-offer__cards-outer-box__card__trainer-info-box__course-name"]}>
                            تعليم الرسم للأطفال
                            </h1>
                            <div className={styles["special-offer__cards-outer-box__card__trainer-info-box__trainer-name"]}>
                            أ/ مروة عبدالله
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles["special-offer__cards-outer-box__card__rating-box"]}>
                            <span> 4.1 </span>
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

                            <span> (217 تقييم) </span>
                        </div>
                        <div className={styles["special-offer__cards-outer-box__card__price"]}>
                            <span> 800 </span>
                            <span> جنية مصري </span>
                        </div>
                        <div className={styles["special-offer__cards-outer-box__card__old-price"]}>
                            <span> 860 </span>
                            <span> جنية مصري </span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className={styles["special-offer__cards-outer-box__card__checkout-box"]}>
                <div className={styles["special-offer__cards-outer-box__card__checkout-box__prices-box"]}>
                    <div className={styles["special-offer__cards-outer-box__card__checkout-box__prices-box__price"]}>
                        <span> 1600 </span>
                        <span> جنيه مصري </span>
                    </div>
                    <div className={styles["special-offer__cards-outer-box__card__checkout-box__prices-box__old-price"]}>
                  <span> بدلاً من </span>  
                    <span>3000</span>
                      <span> جنيه مصري </span>  
                    </div>
                    <div className={styles["special-offer__cards-outer-box__card__checkout-box__prices-box__discount"]}>
                    هتوفر
                    <span> 60 % </span>
                    من خلال العرض
                    </div>
                </div>

                <div className={styles["special-offer__cards-outer-box__card__offer-duration-checkout-box"]}>
                    <div className={styles["special-offer__cards-outer-box__card__offer-duration-box"]}>
                        <div className={styles["special-offer__cards-outer-box__card__offer-duration-box__offer-available"]}>
                            <div>العرض</div>
                            <div>متاح خلال</div>
                        </div>
                        <div>
                            <div className={styles["special-offer__cards-outer-box__card__offer-duration-box__countdown-box"]}>
                                <div className={styles["special-offer__cards-outer-box__card__offer-duration-box__countdown-box__countdown"]}>
                                    <div>يوم</div>
                                    <div>00</div>
                                </div>
                                <div className={styles["special-offer__cards-outer-box__card__offer-duration-box__countdown-box__separator"]}>
                                    :
                                </div>
                                <div className={styles["special-offer__cards-outer-box__card__offer-duration-box__countdown-box__countdown"]}>
                                    <div>ساعة</div>
                                    <div>02</div>
                                </div>
                                <div className={styles["special-offer__cards-outer-box__card__offer-duration-box__countdown-box__separator"]}>
                                    :
                                </div>
                                <div className={styles["special-offer__cards-outer-box__card__offer-duration-box__countdown-box__countdown"]}>
                                    <div>دقيقة</div>
                                    <div>34</div>
                                </div>
                                <div className={styles["special-offer__cards-outer-box__card__offer-duration-box__countdown-box__separator"]}>
                                    :
                                </div>
                                <div className={styles["special-offer__cards-outer-box__card__offer-duration-box__countdown-box__countdown"]}>
                                    <div>ثانية</div>
                                    <div>53</div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="w-100">
                        <Button className={styles["special-offer__cards-outer-box__card__add-to-cart-btn"]}>
                        <svg id="add_to_cart" data-name="add to cart" xmlns="http://www.w3.org/2000/svg" width="1.375rem" height="1.25rem" viewBox="0 0 22 20.135">
                            <g id="Group_10771" data-name="Group 10771" transform="translate(14.676 14.648)">
                                <g id="Group_9975" data-name="Group 9975" transform="translate(0 0)">
                                <path id="Path_12759" data-name="Path 12759" d="M344.29,362.612a2.743,2.743,0,1,0,2.743,2.743A2.746,2.746,0,0,0,344.29,362.612Zm0,3.84a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,344.29,366.452Z" transform="translate(-341.547 -362.612)" fill="#fff"/>
                                </g>
                            </g>
                            <g id="Group_10770" data-name="Group 10770">
                                <g id="Group_9977" data-name="Group 9977" transform="translate(0 0)">
                                <path id="Path_12760" data-name="Path 12760" d="M21.825,25.751a.822.822,0,0,0-.648-.316H5.08l-.741-3.1a.823.823,0,0,0-.8-.632H.823a.823.823,0,1,0,0,1.646H2.889L5.564,34.542a.823.823,0,0,0,.8.632H19.175a.823.823,0,0,0,.8-.625l2-8.092A.824.824,0,0,0,21.825,25.751Zm-3.294,7.776H7.014L5.473,27.082H20.126Z" transform="translate(0 -21.705)" fill="#fff"/>
                                </g>
                            </g>
                            <g id="Group_10772" data-name="Group 10772" transform="translate(4.719 14.648)">
                                <g id="Group_9979" data-name="Group 9979" transform="translate(0 0)">
                                <path id="Path_12761" data-name="Path 12761" d="M112.549,362.612a2.743,2.743,0,1,0,2.743,2.743A2.746,2.746,0,0,0,112.549,362.612Zm0,3.84a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,112.549,366.452Z" transform="translate(-109.806 -362.612)" fill="#fff"/>
                                </g>
                            </g>
                        </svg>

                        <span>
                        احصل على العرض
                        </span>

                        </Button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
