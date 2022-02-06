/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./consultations.module.css";
import { Row, Col, Button, Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';
import "swiper/css";

export default function Consultation() {
  SwiperCore.use([Navigation]);

  return (
    <>
      <Row>
        <Col xs={{span:12 , order:1}} sm={{span:12 , order:1}} className={styles["consultations__title"]}>
          <span> الاستشارات و </span>
          <span> المواعيد </span>
        </Col>
        <Col xs={{span:12 , order:2}} sm={{span:9 , order:2}} className={styles["consultations__minor-title-container"]}>
          <span className={styles["consultations__minor-title-container__para"]}>
            احجز استشارة هاتفية أو نصية مع خبرائنا في كل المجالات
          </span>
        </Col>
      <Col xs={{span:12, order:4}} sm={{span:3 , order:3}} className={styles["consultations__show-all-btn-col"]}>

          <Button className={styles["consultations__minor-title-container__btn"]}>
            اعرض كل المستشارين
            <svg
              id="previous"
              xmlns="http://www.w3.org/2000/svg"
              width="9.588"
              height="16"
              viewBox="0 0 9.588 16"
            >
              <path
                id="Path_12841"
                data-name="Path 12841"
                d="M11.623,6.864a1.538,1.538,0,0,1,.262-.209l6.2-6.2a1.55,1.55,0,0,1,2.192,2.192L14.937,7.987l5.368,5.369a1.549,1.549,0,1,1-2.191,2.191L11.885,9.318a1.608,1.608,0,0,1-.262-2.454Z"
                transform="translate(-11.172 -0.001)"
                fill="#fff"
              />
            </svg>
          </Button>
      </Col>
        <Col xs={{span:12, order:3}} sm={{span:12 , order:4}} className={styles["consultations__cards-carousel"]}>
        <Swiper dir="rtl" slidesPerView={4} navigation={true} pagination={{"clickable": true}} 
        breakpoints={{
            "50": {
            slidesPerView: 1,
          },
          "576": {
            slidesPerView: 3,
          },
          "981": {
            slidesPerView: 4,
          },
          "1201": {
            slidesPerView: 5,
          },
        }} className="mySwiper">
            <SwiperSlide> 
              <Card
                  className={
                    styles["consultations__cards-carousel__card"]
                  }
                >
                    <div className={styles["consultations__cards-carousel__card__card-body"]}>
                        <div className="text-center">
                            <div className={styles["consultations__cards-carousel__card__trainer"]}>د. حسين عبدالكريم</div>
                            <div className={styles["consultations__cards-carousel__card__job-title"]}>مستشار عقاري</div>
                            <div className={styles["consultations__cards-carousel__card__job-history"]}>مؤسس شركه إعمار </div>
                            <div className="w-100">
                                <Button className={styles["consultations__cards-carousel__card__btn"]}>
                                    


                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24.464 24">
  <g id="Calendar" transform="translate(-2.5 -3.4)">
    <g id="Group_10013" data-name="Group 10013" transform="translate(2.5 3.4)">
      <path id="Path_12850" data-name="Path 12850" d="M41.71,60.3H39.573a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H41.71a.775.775,0,0,0,.773-.773V61.073A.792.792,0,0,0,41.71,60.3Z" transform="translate(-29.452 -45.648)" fill="#fff"/>
      <path id="Path_12851" data-name="Path 12851" d="M20.31,60.3H18.173a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H20.31a.775.775,0,0,0,.773-.773V61.073A.792.792,0,0,0,20.31,60.3Z" transform="translate(-13.563 -45.648)" fill="#fff"/>
      <path id="Path_12852" data-name="Path 12852" d="M41.71,41.6H39.573a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H41.71a.775.775,0,0,0,.773-.773V42.373A.792.792,0,0,0,41.71,41.6Z" transform="translate(-29.452 -31.763)" fill="#fff"/>
      <path id="Path_12853" data-name="Path 12853" d="M20.31,41.6H18.173a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H20.31a.775.775,0,0,0,.773-.773V42.373A.792.792,0,0,0,20.31,41.6Z" transform="translate(-13.563 -31.763)" fill="#fff"/>
      <path id="Path_12854" data-name="Path 12854" d="M63.11,41.6H60.973a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H63.11a.775.775,0,0,0,.773-.773V42.373A.792.792,0,0,0,63.11,41.6Z" transform="translate(-45.342 -31.763)" fill="#fff"/>
      <path id="Path_12855" data-name="Path 12855" d="M24.878,18.284V8.061a2.575,2.575,0,0,0-.67-1.725V6.31h-.026a2.629,2.629,0,0,0-1.957-.876H20.294V4.276a.868.868,0,0,0-.876-.876H18.105a.868.868,0,0,0-.876.876V5.434H10.122V4.276A.868.868,0,0,0,9.247,3.4H7.933a.868.868,0,0,0-.876.876V5.434H5.127A2.629,2.629,0,0,0,3.17,6.31h0v.026A2.575,2.575,0,0,0,2.5,8.061V22.1a2.638,2.638,0,0,0,2.627,2.627H17.461a5.042,5.042,0,1,0,7.416-6.438Zm-8.009,4.069a5,5,0,0,0,.052.618H5.127a.868.868,0,0,1-.876-.876V11.383H23.1V17.46a4.53,4.53,0,0,0-1.185-.155A5.055,5.055,0,0,0,16.869,22.353ZM24,21.838l-2.086,2.24a.684.684,0,0,1-.979,0L19.7,22.739a.656.656,0,1,1,.953-.9l.773.824,1.6-1.725a.653.653,0,0,1,.927-.026A.633.633,0,0,1,24,21.838Z" transform="translate(-2.5 -3.4)" fill="#fff"/>
    </g>
  </g>
                                  </svg>
                                    
                                    
                                      <span>حجز جلسة</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                
              </Card> 
            </SwiperSlide>
            <SwiperSlide> 
              <Card
                  className={
                    styles["consultations__cards-carousel__card"]
                  }
                >
                    <div className={styles["consultations__cards-carousel__card__card-body"]}>
                        <div className="text-center">
                            <div className={styles["consultations__cards-carousel__card__trainer"]}>د. حسين عبدالكريم</div>
                            <div className={styles["consultations__cards-carousel__card__job-title"]}>مستشار عقاري</div>
                            <div className={styles["consultations__cards-carousel__card__job-history"]}>مؤسس شركه إعمار </div>
                            <div className="w-100">
                                <Button className={styles["consultations__cards-carousel__card__btn"]}>
                                    

                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24.464 24">
  <g id="Calendar" transform="translate(-2.5 -3.4)">
    <g id="Group_10013" data-name="Group 10013" transform="translate(2.5 3.4)">
      <path id="Path_12850" data-name="Path 12850" d="M41.71,60.3H39.573a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H41.71a.775.775,0,0,0,.773-.773V61.073A.792.792,0,0,0,41.71,60.3Z" transform="translate(-29.452 -45.648)" fill="#fff"/>
      <path id="Path_12851" data-name="Path 12851" d="M20.31,60.3H18.173a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H20.31a.775.775,0,0,0,.773-.773V61.073A.792.792,0,0,0,20.31,60.3Z" transform="translate(-13.563 -45.648)" fill="#fff"/>
      <path id="Path_12852" data-name="Path 12852" d="M41.71,41.6H39.573a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H41.71a.775.775,0,0,0,.773-.773V42.373A.792.792,0,0,0,41.71,41.6Z" transform="translate(-29.452 -31.763)" fill="#fff"/>
      <path id="Path_12853" data-name="Path 12853" d="M20.31,41.6H18.173a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H20.31a.775.775,0,0,0,.773-.773V42.373A.792.792,0,0,0,20.31,41.6Z" transform="translate(-13.563 -31.763)" fill="#fff"/>
      <path id="Path_12854" data-name="Path 12854" d="M63.11,41.6H60.973a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H63.11a.775.775,0,0,0,.773-.773V42.373A.792.792,0,0,0,63.11,41.6Z" transform="translate(-45.342 -31.763)" fill="#fff"/>
      <path id="Path_12855" data-name="Path 12855" d="M24.878,18.284V8.061a2.575,2.575,0,0,0-.67-1.725V6.31h-.026a2.629,2.629,0,0,0-1.957-.876H20.294V4.276a.868.868,0,0,0-.876-.876H18.105a.868.868,0,0,0-.876.876V5.434H10.122V4.276A.868.868,0,0,0,9.247,3.4H7.933a.868.868,0,0,0-.876.876V5.434H5.127A2.629,2.629,0,0,0,3.17,6.31h0v.026A2.575,2.575,0,0,0,2.5,8.061V22.1a2.638,2.638,0,0,0,2.627,2.627H17.461a5.042,5.042,0,1,0,7.416-6.438Zm-8.009,4.069a5,5,0,0,0,.052.618H5.127a.868.868,0,0,1-.876-.876V11.383H23.1V17.46a4.53,4.53,0,0,0-1.185-.155A5.055,5.055,0,0,0,16.869,22.353ZM24,21.838l-2.086,2.24a.684.684,0,0,1-.979,0L19.7,22.739a.656.656,0,1,1,.953-.9l.773.824,1.6-1.725a.653.653,0,0,1,.927-.026A.633.633,0,0,1,24,21.838Z" transform="translate(-2.5 -3.4)" fill="#fff"/>
    </g>
  </g>
                                  </svg>

                                      <span>حجز جلسة</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                
              </Card> 
            </SwiperSlide>
            <SwiperSlide> 
              <Card
                  className={
                    styles["consultations__cards-carousel__card"]
                  }
                >
                    <div className={styles["consultations__cards-carousel__card__card-body"]}>
                        <div className="text-center">
                            <div className={styles["consultations__cards-carousel__card__trainer"]}>د. حسين عبدالكريم</div>
                            <div className={styles["consultations__cards-carousel__card__job-title"]}>مستشار عقاري</div>
                            <div className={styles["consultations__cards-carousel__card__job-history"]}>مؤسس شركه إعمار </div>
                            <div className="w-100">
                                <Button className={styles["consultations__cards-carousel__card__btn"]}>
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24.464 24">
  <g id="Calendar" transform="translate(-2.5 -3.4)">
    <g id="Group_10013" data-name="Group 10013" transform="translate(2.5 3.4)">
      <path id="Path_12850" data-name="Path 12850" d="M41.71,60.3H39.573a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H41.71a.775.775,0,0,0,.773-.773V61.073A.792.792,0,0,0,41.71,60.3Z" transform="translate(-29.452 -45.648)" fill="#fff"/>
      <path id="Path_12851" data-name="Path 12851" d="M20.31,60.3H18.173a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H20.31a.775.775,0,0,0,.773-.773V61.073A.792.792,0,0,0,20.31,60.3Z" transform="translate(-13.563 -45.648)" fill="#fff"/>
      <path id="Path_12852" data-name="Path 12852" d="M41.71,41.6H39.573a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H41.71a.775.775,0,0,0,.773-.773V42.373A.792.792,0,0,0,41.71,41.6Z" transform="translate(-29.452 -31.763)" fill="#fff"/>
      <path id="Path_12853" data-name="Path 12853" d="M20.31,41.6H18.173a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H20.31a.775.775,0,0,0,.773-.773V42.373A.792.792,0,0,0,20.31,41.6Z" transform="translate(-13.563 -31.763)" fill="#fff"/>
      <path id="Path_12854" data-name="Path 12854" d="M63.11,41.6H60.973a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H63.11a.775.775,0,0,0,.773-.773V42.373A.792.792,0,0,0,63.11,41.6Z" transform="translate(-45.342 -31.763)" fill="#fff"/>
      <path id="Path_12855" data-name="Path 12855" d="M24.878,18.284V8.061a2.575,2.575,0,0,0-.67-1.725V6.31h-.026a2.629,2.629,0,0,0-1.957-.876H20.294V4.276a.868.868,0,0,0-.876-.876H18.105a.868.868,0,0,0-.876.876V5.434H10.122V4.276A.868.868,0,0,0,9.247,3.4H7.933a.868.868,0,0,0-.876.876V5.434H5.127A2.629,2.629,0,0,0,3.17,6.31h0v.026A2.575,2.575,0,0,0,2.5,8.061V22.1a2.638,2.638,0,0,0,2.627,2.627H17.461a5.042,5.042,0,1,0,7.416-6.438Zm-8.009,4.069a5,5,0,0,0,.052.618H5.127a.868.868,0,0,1-.876-.876V11.383H23.1V17.46a4.53,4.53,0,0,0-1.185-.155A5.055,5.055,0,0,0,16.869,22.353ZM24,21.838l-2.086,2.24a.684.684,0,0,1-.979,0L19.7,22.739a.656.656,0,1,1,.953-.9l.773.824,1.6-1.725a.653.653,0,0,1,.927-.026A.633.633,0,0,1,24,21.838Z" transform="translate(-2.5 -3.4)" fill="#fff"/>
    </g>
  </g>
                                  </svg>


                                    
                                    
                                    
                                      <span>حجز جلسة</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                
              </Card> 
            </SwiperSlide>
            <SwiperSlide> 
              <Card
                  className={
                    styles["consultations__cards-carousel__card"]
                  }
                >
                    <div className={styles["consultations__cards-carousel__card__card-body"]}>
                        <div className="text-center">
                            <div className={styles["consultations__cards-carousel__card__trainer"]}>د. حسين عبدالكريم</div>
                            <div className={styles["consultations__cards-carousel__card__job-title"]}>مستشار عقاري</div>
                            <div className={styles["consultations__cards-carousel__card__job-history"]}>مؤسس شركه إعمار </div>
                            <div className="w-100">
                                <Button className={styles["consultations__cards-carousel__card__btn"]}>
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24.464 24">
  <g id="Calendar" transform="translate(-2.5 -3.4)">
    <g id="Group_10013" data-name="Group 10013" transform="translate(2.5 3.4)">
      <path id="Path_12850" data-name="Path 12850" d="M41.71,60.3H39.573a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H41.71a.775.775,0,0,0,.773-.773V61.073A.792.792,0,0,0,41.71,60.3Z" transform="translate(-29.452 -45.648)" fill="#fff"/>
      <path id="Path_12851" data-name="Path 12851" d="M20.31,60.3H18.173a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H20.31a.775.775,0,0,0,.773-.773V61.073A.792.792,0,0,0,20.31,60.3Z" transform="translate(-13.563 -45.648)" fill="#fff"/>
      <path id="Path_12852" data-name="Path 12852" d="M41.71,41.6H39.573a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H41.71a.775.775,0,0,0,.773-.773V42.373A.792.792,0,0,0,41.71,41.6Z" transform="translate(-29.452 -31.763)" fill="#fff"/>
      <path id="Path_12853" data-name="Path 12853" d="M20.31,41.6H18.173a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H20.31a.775.775,0,0,0,.773-.773V42.373A.792.792,0,0,0,20.31,41.6Z" transform="translate(-13.563 -31.763)" fill="#fff"/>
      <path id="Path_12854" data-name="Path 12854" d="M63.11,41.6H60.973a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H63.11a.775.775,0,0,0,.773-.773V42.373A.792.792,0,0,0,63.11,41.6Z" transform="translate(-45.342 -31.763)" fill="#fff"/>
      <path id="Path_12855" data-name="Path 12855" d="M24.878,18.284V8.061a2.575,2.575,0,0,0-.67-1.725V6.31h-.026a2.629,2.629,0,0,0-1.957-.876H20.294V4.276a.868.868,0,0,0-.876-.876H18.105a.868.868,0,0,0-.876.876V5.434H10.122V4.276A.868.868,0,0,0,9.247,3.4H7.933a.868.868,0,0,0-.876.876V5.434H5.127A2.629,2.629,0,0,0,3.17,6.31h0v.026A2.575,2.575,0,0,0,2.5,8.061V22.1a2.638,2.638,0,0,0,2.627,2.627H17.461a5.042,5.042,0,1,0,7.416-6.438Zm-8.009,4.069a5,5,0,0,0,.052.618H5.127a.868.868,0,0,1-.876-.876V11.383H23.1V17.46a4.53,4.53,0,0,0-1.185-.155A5.055,5.055,0,0,0,16.869,22.353ZM24,21.838l-2.086,2.24a.684.684,0,0,1-.979,0L19.7,22.739a.656.656,0,1,1,.953-.9l.773.824,1.6-1.725a.653.653,0,0,1,.927-.026A.633.633,0,0,1,24,21.838Z" transform="translate(-2.5 -3.4)" fill="#fff"/>
    </g>
  </g>
                                  </svg>

                                    
                                    
                                    
                                      <span>حجز جلسة</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                
              </Card> 
            </SwiperSlide>
            <SwiperSlide> 
              <Card
                  className={
                    styles["consultations__cards-carousel__card"]
                  }
                >
                    <div className={styles["consultations__cards-carousel__card__card-body"]}>
                        <div className="text-center">
                            <div className={styles["consultations__cards-carousel__card__trainer"]}>د. حسين عبدالكريم</div>
                            <div className={styles["consultations__cards-carousel__card__job-title"]}>مستشار عقاري</div>
                            <div className={styles["consultations__cards-carousel__card__job-history"]}>مؤسس شركه إعمار </div>
                            <div className="w-100">
                                <Button className={styles["consultations__cards-carousel__card__btn"]}>
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24.464 24">
  <g id="Calendar" transform="translate(-2.5 -3.4)">
    <g id="Group_10013" data-name="Group 10013" transform="translate(2.5 3.4)">
      <path id="Path_12850" data-name="Path 12850" d="M41.71,60.3H39.573a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H41.71a.775.775,0,0,0,.773-.773V61.073A.792.792,0,0,0,41.71,60.3Z" transform="translate(-29.452 -45.648)" fill="#fff"/>
      <path id="Path_12851" data-name="Path 12851" d="M20.31,60.3H18.173a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H20.31a.775.775,0,0,0,.773-.773V61.073A.792.792,0,0,0,20.31,60.3Z" transform="translate(-13.563 -45.648)" fill="#fff"/>
      <path id="Path_12852" data-name="Path 12852" d="M41.71,41.6H39.573a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H41.71a.775.775,0,0,0,.773-.773V42.373A.792.792,0,0,0,41.71,41.6Z" transform="translate(-29.452 -31.763)" fill="#fff"/>
      <path id="Path_12853" data-name="Path 12853" d="M20.31,41.6H18.173a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H20.31a.775.775,0,0,0,.773-.773V42.373A.792.792,0,0,0,20.31,41.6Z" transform="translate(-13.563 -31.763)" fill="#fff"/>
      <path id="Path_12854" data-name="Path 12854" d="M63.11,41.6H60.973a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H63.11a.775.775,0,0,0,.773-.773V42.373A.792.792,0,0,0,63.11,41.6Z" transform="translate(-45.342 -31.763)" fill="#fff"/>
      <path id="Path_12855" data-name="Path 12855" d="M24.878,18.284V8.061a2.575,2.575,0,0,0-.67-1.725V6.31h-.026a2.629,2.629,0,0,0-1.957-.876H20.294V4.276a.868.868,0,0,0-.876-.876H18.105a.868.868,0,0,0-.876.876V5.434H10.122V4.276A.868.868,0,0,0,9.247,3.4H7.933a.868.868,0,0,0-.876.876V5.434H5.127A2.629,2.629,0,0,0,3.17,6.31h0v.026A2.575,2.575,0,0,0,2.5,8.061V22.1a2.638,2.638,0,0,0,2.627,2.627H17.461a5.042,5.042,0,1,0,7.416-6.438Zm-8.009,4.069a5,5,0,0,0,.052.618H5.127a.868.868,0,0,1-.876-.876V11.383H23.1V17.46a4.53,4.53,0,0,0-1.185-.155A5.055,5.055,0,0,0,16.869,22.353ZM24,21.838l-2.086,2.24a.684.684,0,0,1-.979,0L19.7,22.739a.656.656,0,1,1,.953-.9l.773.824,1.6-1.725a.653.653,0,0,1,.927-.026A.633.633,0,0,1,24,21.838Z" transform="translate(-2.5 -3.4)" fill="#fff"/>
    </g>
  </g>
                                  </svg>

                                    
                                    
                                    
                                      <span>حجز جلسة</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                
              </Card> 
            </SwiperSlide>
            <SwiperSlide> 
              <Card
                  className={
                    styles["consultations__cards-carousel__card"]
                  }
                >
                    <div className={styles["consultations__cards-carousel__card__card-body"]}>
                        <div className="text-center">
                            <div className={styles["consultations__cards-carousel__card__trainer"]}>د. حسين عبدالكريم</div>
                            <div className={styles["consultations__cards-carousel__card__job-title"]}>مستشار عقاري</div>
                            <div className={styles["consultations__cards-carousel__card__job-history"]}>مؤسس شركه إعمار </div>
                            <div className="w-100">
                                <Button className={styles["consultations__cards-carousel__card__btn"]}>
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24.464 24">
  <g id="Calendar" transform="translate(-2.5 -3.4)">
    <g id="Group_10013" data-name="Group 10013" transform="translate(2.5 3.4)">
      <path id="Path_12850" data-name="Path 12850" d="M41.71,60.3H39.573a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H41.71a.775.775,0,0,0,.773-.773V61.073A.792.792,0,0,0,41.71,60.3Z" transform="translate(-29.452 -45.648)" fill="#fff"/>
      <path id="Path_12851" data-name="Path 12851" d="M20.31,60.3H18.173a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H20.31a.775.775,0,0,0,.773-.773V61.073A.792.792,0,0,0,20.31,60.3Z" transform="translate(-13.563 -45.648)" fill="#fff"/>
      <path id="Path_12852" data-name="Path 12852" d="M41.71,41.6H39.573a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H41.71a.775.775,0,0,0,.773-.773V42.373A.792.792,0,0,0,41.71,41.6Z" transform="translate(-29.452 -31.763)" fill="#fff"/>
      <path id="Path_12853" data-name="Path 12853" d="M20.31,41.6H18.173a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H20.31a.775.775,0,0,0,.773-.773V42.373A.792.792,0,0,0,20.31,41.6Z" transform="translate(-13.563 -31.763)" fill="#fff"/>
      <path id="Path_12854" data-name="Path 12854" d="M63.11,41.6H60.973a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H63.11a.775.775,0,0,0,.773-.773V42.373A.792.792,0,0,0,63.11,41.6Z" transform="translate(-45.342 -31.763)" fill="#fff"/>
      <path id="Path_12855" data-name="Path 12855" d="M24.878,18.284V8.061a2.575,2.575,0,0,0-.67-1.725V6.31h-.026a2.629,2.629,0,0,0-1.957-.876H20.294V4.276a.868.868,0,0,0-.876-.876H18.105a.868.868,0,0,0-.876.876V5.434H10.122V4.276A.868.868,0,0,0,9.247,3.4H7.933a.868.868,0,0,0-.876.876V5.434H5.127A2.629,2.629,0,0,0,3.17,6.31h0v.026A2.575,2.575,0,0,0,2.5,8.061V22.1a2.638,2.638,0,0,0,2.627,2.627H17.461a5.042,5.042,0,1,0,7.416-6.438Zm-8.009,4.069a5,5,0,0,0,.052.618H5.127a.868.868,0,0,1-.876-.876V11.383H23.1V17.46a4.53,4.53,0,0,0-1.185-.155A5.055,5.055,0,0,0,16.869,22.353ZM24,21.838l-2.086,2.24a.684.684,0,0,1-.979,0L19.7,22.739a.656.656,0,1,1,.953-.9l.773.824,1.6-1.725a.653.653,0,0,1,.927-.026A.633.633,0,0,1,24,21.838Z" transform="translate(-2.5 -3.4)" fill="#fff"/>
    </g>
  </g>
                                  </svg>

                                    
                                    
                                    
                                      <span>حجز جلسة</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                
              </Card> 
            </SwiperSlide>
            <SwiperSlide> 
              <Card
                  className={
                    styles["consultations__cards-carousel__card"]
                  }
                >
                    <div className={styles["consultations__cards-carousel__card__card-body"]}>
                        <div className="text-center">
                            <div className={styles["consultations__cards-carousel__card__trainer"]}>د. حسين عبدالكريم</div>
                            <div className={styles["consultations__cards-carousel__card__job-title"]}>مستشار عقاري</div>
                            <div className={styles["consultations__cards-carousel__card__job-history"]}>مؤسس شركه إعمار </div>
                            <div className="w-100">
                                <Button className={styles["consultations__cards-carousel__card__btn"]}>
                                    

                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24.464 24">
  <g id="Calendar" transform="translate(-2.5 -3.4)">
    <g id="Group_10013" data-name="Group 10013" transform="translate(2.5 3.4)">
      <path id="Path_12850" data-name="Path 12850" d="M41.71,60.3H39.573a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H41.71a.775.775,0,0,0,.773-.773V61.073A.792.792,0,0,0,41.71,60.3Z" transform="translate(-29.452 -45.648)" fill="#fff"/>
      <path id="Path_12851" data-name="Path 12851" d="M20.31,60.3H18.173a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H20.31a.775.775,0,0,0,.773-.773V61.073A.792.792,0,0,0,20.31,60.3Z" transform="translate(-13.563 -45.648)" fill="#fff"/>
      <path id="Path_12852" data-name="Path 12852" d="M41.71,41.6H39.573a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H41.71a.775.775,0,0,0,.773-.773V42.373A.792.792,0,0,0,41.71,41.6Z" transform="translate(-29.452 -31.763)" fill="#fff"/>
      <path id="Path_12853" data-name="Path 12853" d="M20.31,41.6H18.173a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H20.31a.775.775,0,0,0,.773-.773V42.373A.792.792,0,0,0,20.31,41.6Z" transform="translate(-13.563 -31.763)" fill="#fff"/>
      <path id="Path_12854" data-name="Path 12854" d="M63.11,41.6H60.973a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H63.11a.775.775,0,0,0,.773-.773V42.373A.792.792,0,0,0,63.11,41.6Z" transform="translate(-45.342 -31.763)" fill="#fff"/>
      <path id="Path_12855" data-name="Path 12855" d="M24.878,18.284V8.061a2.575,2.575,0,0,0-.67-1.725V6.31h-.026a2.629,2.629,0,0,0-1.957-.876H20.294V4.276a.868.868,0,0,0-.876-.876H18.105a.868.868,0,0,0-.876.876V5.434H10.122V4.276A.868.868,0,0,0,9.247,3.4H7.933a.868.868,0,0,0-.876.876V5.434H5.127A2.629,2.629,0,0,0,3.17,6.31h0v.026A2.575,2.575,0,0,0,2.5,8.061V22.1a2.638,2.638,0,0,0,2.627,2.627H17.461a5.042,5.042,0,1,0,7.416-6.438Zm-8.009,4.069a5,5,0,0,0,.052.618H5.127a.868.868,0,0,1-.876-.876V11.383H23.1V17.46a4.53,4.53,0,0,0-1.185-.155A5.055,5.055,0,0,0,16.869,22.353ZM24,21.838l-2.086,2.24a.684.684,0,0,1-.979,0L19.7,22.739a.656.656,0,1,1,.953-.9l.773.824,1.6-1.725a.653.653,0,0,1,.927-.026A.633.633,0,0,1,24,21.838Z" transform="translate(-2.5 -3.4)" fill="#fff"/>
    </g>
  </g>
                                  </svg>
                                    
                                    
                                    
                                      <span>حجز جلسة</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                
              </Card> 
            </SwiperSlide>
            <SwiperSlide> 
              <Card
                  className={
                    styles["consultations__cards-carousel__card"]
                  }
                >
                    <div className={styles["consultations__cards-carousel__card__card-body"]}>
                        <div className="text-center">
                            <div className={styles["consultations__cards-carousel__card__trainer"]}>د. حسين عبدالكريم</div>
                            <div className={styles["consultations__cards-carousel__card__job-title"]}>مستشار عقاري</div>
                            <div className={styles["consultations__cards-carousel__card__job-history"]}>مؤسس شركه إعمار </div>
                            <div className="w-100">
                                <Button className={styles["consultations__cards-carousel__card__btn"]}>
                                    

                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24.464 24">
  <g id="Calendar" transform="translate(-2.5 -3.4)">
    <g id="Group_10013" data-name="Group 10013" transform="translate(2.5 3.4)">
      <path id="Path_12850" data-name="Path 12850" d="M41.71,60.3H39.573a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H41.71a.775.775,0,0,0,.773-.773V61.073A.792.792,0,0,0,41.71,60.3Z" transform="translate(-29.452 -45.648)" fill="#fff"/>
      <path id="Path_12851" data-name="Path 12851" d="M20.31,60.3H18.173a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H20.31a.775.775,0,0,0,.773-.773V61.073A.792.792,0,0,0,20.31,60.3Z" transform="translate(-13.563 -45.648)" fill="#fff"/>
      <path id="Path_12852" data-name="Path 12852" d="M41.71,41.6H39.573a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H41.71a.775.775,0,0,0,.773-.773V42.373A.792.792,0,0,0,41.71,41.6Z" transform="translate(-29.452 -31.763)" fill="#fff"/>
      <path id="Path_12853" data-name="Path 12853" d="M20.31,41.6H18.173a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H20.31a.775.775,0,0,0,.773-.773V42.373A.792.792,0,0,0,20.31,41.6Z" transform="translate(-13.563 -31.763)" fill="#fff"/>
      <path id="Path_12854" data-name="Path 12854" d="M63.11,41.6H60.973a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H63.11a.775.775,0,0,0,.773-.773V42.373A.792.792,0,0,0,63.11,41.6Z" transform="translate(-45.342 -31.763)" fill="#fff"/>
      <path id="Path_12855" data-name="Path 12855" d="M24.878,18.284V8.061a2.575,2.575,0,0,0-.67-1.725V6.31h-.026a2.629,2.629,0,0,0-1.957-.876H20.294V4.276a.868.868,0,0,0-.876-.876H18.105a.868.868,0,0,0-.876.876V5.434H10.122V4.276A.868.868,0,0,0,9.247,3.4H7.933a.868.868,0,0,0-.876.876V5.434H5.127A2.629,2.629,0,0,0,3.17,6.31h0v.026A2.575,2.575,0,0,0,2.5,8.061V22.1a2.638,2.638,0,0,0,2.627,2.627H17.461a5.042,5.042,0,1,0,7.416-6.438Zm-8.009,4.069a5,5,0,0,0,.052.618H5.127a.868.868,0,0,1-.876-.876V11.383H23.1V17.46a4.53,4.53,0,0,0-1.185-.155A5.055,5.055,0,0,0,16.869,22.353ZM24,21.838l-2.086,2.24a.684.684,0,0,1-.979,0L19.7,22.739a.656.656,0,1,1,.953-.9l.773.824,1.6-1.725a.653.653,0,0,1,.927-.026A.633.633,0,0,1,24,21.838Z" transform="translate(-2.5 -3.4)" fill="#fff"/>
    </g>
  </g>
                                  </svg>
                                    
                                    
                                    
                                      <span>حجز جلسة</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                
              </Card> 
            </SwiperSlide>
            <SwiperSlide> 
              <Card
                  className={
                    styles["consultations__cards-carousel__card"]
                  }
                >
                    <div className={styles["consultations__cards-carousel__card__card-body"]}>
                        <div className="text-center">
                            <div className={styles["consultations__cards-carousel__card__trainer"]}>د. حسين عبدالكريم</div>
                            <div className={styles["consultations__cards-carousel__card__job-title"]}>مستشار عقاري</div>
                            <div className={styles["consultations__cards-carousel__card__job-history"]}>مؤسس شركه إعمار </div>
                            <div className="w-100">
                                <Button className={styles["consultations__cards-carousel__card__btn"]}>
                                    

                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24.464 24">
  <g id="Calendar" transform="translate(-2.5 -3.4)">
    <g id="Group_10013" data-name="Group 10013" transform="translate(2.5 3.4)">
      <path id="Path_12850" data-name="Path 12850" d="M41.71,60.3H39.573a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H41.71a.775.775,0,0,0,.773-.773V61.073A.792.792,0,0,0,41.71,60.3Z" transform="translate(-29.452 -45.648)" fill="#fff"/>
      <path id="Path_12851" data-name="Path 12851" d="M20.31,60.3H18.173a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H20.31a.775.775,0,0,0,.773-.773V61.073A.792.792,0,0,0,20.31,60.3Z" transform="translate(-13.563 -45.648)" fill="#fff"/>
      <path id="Path_12852" data-name="Path 12852" d="M41.71,41.6H39.573a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H41.71a.775.775,0,0,0,.773-.773V42.373A.792.792,0,0,0,41.71,41.6Z" transform="translate(-29.452 -31.763)" fill="#fff"/>
      <path id="Path_12853" data-name="Path 12853" d="M20.31,41.6H18.173a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H20.31a.775.775,0,0,0,.773-.773V42.373A.792.792,0,0,0,20.31,41.6Z" transform="translate(-13.563 -31.763)" fill="#fff"/>
      <path id="Path_12854" data-name="Path 12854" d="M63.11,41.6H60.973a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H63.11a.775.775,0,0,0,.773-.773V42.373A.792.792,0,0,0,63.11,41.6Z" transform="translate(-45.342 -31.763)" fill="#fff"/>
      <path id="Path_12855" data-name="Path 12855" d="M24.878,18.284V8.061a2.575,2.575,0,0,0-.67-1.725V6.31h-.026a2.629,2.629,0,0,0-1.957-.876H20.294V4.276a.868.868,0,0,0-.876-.876H18.105a.868.868,0,0,0-.876.876V5.434H10.122V4.276A.868.868,0,0,0,9.247,3.4H7.933a.868.868,0,0,0-.876.876V5.434H5.127A2.629,2.629,0,0,0,3.17,6.31h0v.026A2.575,2.575,0,0,0,2.5,8.061V22.1a2.638,2.638,0,0,0,2.627,2.627H17.461a5.042,5.042,0,1,0,7.416-6.438Zm-8.009,4.069a5,5,0,0,0,.052.618H5.127a.868.868,0,0,1-.876-.876V11.383H23.1V17.46a4.53,4.53,0,0,0-1.185-.155A5.055,5.055,0,0,0,16.869,22.353ZM24,21.838l-2.086,2.24a.684.684,0,0,1-.979,0L19.7,22.739a.656.656,0,1,1,.953-.9l.773.824,1.6-1.725a.653.653,0,0,1,.927-.026A.633.633,0,0,1,24,21.838Z" transform="translate(-2.5 -3.4)" fill="#fff"/>
    </g>
  </g>
                                  </svg>
                                    
                                    
                                    
                                      <span>حجز جلسة</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                
              </Card> 
            </SwiperSlide>
            <SwiperSlide> 
              <Card
                  className={
                    styles["consultations__cards-carousel__card"]
                  }
                >
                    <div className={styles["consultations__cards-carousel__card__card-body"]}>
                        <div className="text-center">
                            <div className={styles["consultations__cards-carousel__card__trainer"]}>د. حسين عبدالكريم</div>
                            <div className={styles["consultations__cards-carousel__card__job-title"]}>مستشار عقاري</div>
                            <div className={styles["consultations__cards-carousel__card__job-history"]}>مؤسس شركه إعمار </div>
                            <div className="w-100">
                                <Button className={styles["consultations__cards-carousel__card__btn"]}>
                                    

                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24.464 24">
  <g id="Calendar" transform="translate(-2.5 -3.4)">
    <g id="Group_10013" data-name="Group 10013" transform="translate(2.5 3.4)">
      <path id="Path_12850" data-name="Path 12850" d="M41.71,60.3H39.573a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H41.71a.775.775,0,0,0,.773-.773V61.073A.792.792,0,0,0,41.71,60.3Z" transform="translate(-29.452 -45.648)" fill="#fff"/>
      <path id="Path_12851" data-name="Path 12851" d="M20.31,60.3H18.173a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H20.31a.775.775,0,0,0,.773-.773V61.073A.792.792,0,0,0,20.31,60.3Z" transform="translate(-13.563 -45.648)" fill="#fff"/>
      <path id="Path_12852" data-name="Path 12852" d="M41.71,41.6H39.573a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H41.71a.775.775,0,0,0,.773-.773V42.373A.792.792,0,0,0,41.71,41.6Z" transform="translate(-29.452 -31.763)" fill="#fff"/>
      <path id="Path_12853" data-name="Path 12853" d="M20.31,41.6H18.173a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H20.31a.775.775,0,0,0,.773-.773V42.373A.792.792,0,0,0,20.31,41.6Z" transform="translate(-13.563 -31.763)" fill="#fff"/>
      <path id="Path_12854" data-name="Path 12854" d="M63.11,41.6H60.973a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H63.11a.775.775,0,0,0,.773-.773V42.373A.792.792,0,0,0,63.11,41.6Z" transform="translate(-45.342 -31.763)" fill="#fff"/>
      <path id="Path_12855" data-name="Path 12855" d="M24.878,18.284V8.061a2.575,2.575,0,0,0-.67-1.725V6.31h-.026a2.629,2.629,0,0,0-1.957-.876H20.294V4.276a.868.868,0,0,0-.876-.876H18.105a.868.868,0,0,0-.876.876V5.434H10.122V4.276A.868.868,0,0,0,9.247,3.4H7.933a.868.868,0,0,0-.876.876V5.434H5.127A2.629,2.629,0,0,0,3.17,6.31h0v.026A2.575,2.575,0,0,0,2.5,8.061V22.1a2.638,2.638,0,0,0,2.627,2.627H17.461a5.042,5.042,0,1,0,7.416-6.438Zm-8.009,4.069a5,5,0,0,0,.052.618H5.127a.868.868,0,0,1-.876-.876V11.383H23.1V17.46a4.53,4.53,0,0,0-1.185-.155A5.055,5.055,0,0,0,16.869,22.353ZM24,21.838l-2.086,2.24a.684.684,0,0,1-.979,0L19.7,22.739a.656.656,0,1,1,.953-.9l.773.824,1.6-1.725a.653.653,0,0,1,.927-.026A.633.633,0,0,1,24,21.838Z" transform="translate(-2.5 -3.4)" fill="#fff"/>
    </g>
  </g>
                                  </svg>
                                    
                                    
                                    
                                      <span>حجز جلسة</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                
              </Card> 
            </SwiperSlide>
            <SwiperSlide> 
              <Card
                  className={
                    styles["consultations__cards-carousel__card"]
                  }
                >
                    <div className={styles["consultations__cards-carousel__card__card-body"]}>
                        <div className="text-center">
                            <div className={styles["consultations__cards-carousel__card__trainer"]}>د. حسين عبدالكريم</div>
                            <div className={styles["consultations__cards-carousel__card__job-title"]}>مستشار عقاري</div>
                            <div className={styles["consultations__cards-carousel__card__job-history"]}>مؤسس شركه إعمار </div>
                            <div className="w-100">
                                <Button className={styles["consultations__cards-carousel__card__btn"]}>
                                    


                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24.464 24">
  <g id="Calendar" transform="translate(-2.5 -3.4)">
    <g id="Group_10013" data-name="Group 10013" transform="translate(2.5 3.4)">
      <path id="Path_12850" data-name="Path 12850" d="M41.71,60.3H39.573a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H41.71a.775.775,0,0,0,.773-.773V61.073A.792.792,0,0,0,41.71,60.3Z" transform="translate(-29.452 -45.648)" fill="#fff"/>
      <path id="Path_12851" data-name="Path 12851" d="M20.31,60.3H18.173a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H20.31a.775.775,0,0,0,.773-.773V61.073A.792.792,0,0,0,20.31,60.3Z" transform="translate(-13.563 -45.648)" fill="#fff"/>
      <path id="Path_12852" data-name="Path 12852" d="M41.71,41.6H39.573a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H41.71a.775.775,0,0,0,.773-.773V42.373A.792.792,0,0,0,41.71,41.6Z" transform="translate(-29.452 -31.763)" fill="#fff"/>
      <path id="Path_12853" data-name="Path 12853" d="M20.31,41.6H18.173a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H20.31a.775.775,0,0,0,.773-.773V42.373A.792.792,0,0,0,20.31,41.6Z" transform="translate(-13.563 -31.763)" fill="#fff"/>
      <path id="Path_12854" data-name="Path 12854" d="M63.11,41.6H60.973a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H63.11a.775.775,0,0,0,.773-.773V42.373A.792.792,0,0,0,63.11,41.6Z" transform="translate(-45.342 -31.763)" fill="#fff"/>
      <path id="Path_12855" data-name="Path 12855" d="M24.878,18.284V8.061a2.575,2.575,0,0,0-.67-1.725V6.31h-.026a2.629,2.629,0,0,0-1.957-.876H20.294V4.276a.868.868,0,0,0-.876-.876H18.105a.868.868,0,0,0-.876.876V5.434H10.122V4.276A.868.868,0,0,0,9.247,3.4H7.933a.868.868,0,0,0-.876.876V5.434H5.127A2.629,2.629,0,0,0,3.17,6.31h0v.026A2.575,2.575,0,0,0,2.5,8.061V22.1a2.638,2.638,0,0,0,2.627,2.627H17.461a5.042,5.042,0,1,0,7.416-6.438Zm-8.009,4.069a5,5,0,0,0,.052.618H5.127a.868.868,0,0,1-.876-.876V11.383H23.1V17.46a4.53,4.53,0,0,0-1.185-.155A5.055,5.055,0,0,0,16.869,22.353ZM24,21.838l-2.086,2.24a.684.684,0,0,1-.979,0L19.7,22.739a.656.656,0,1,1,.953-.9l.773.824,1.6-1.725a.653.653,0,0,1,.927-.026A.633.633,0,0,1,24,21.838Z" transform="translate(-2.5 -3.4)" fill="#fff"/>
    </g>
  </g>
                                  </svg>
                                    
                                    
                                      <span>حجز جلسة</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                
              </Card> 
            </SwiperSlide>
            <SwiperSlide> 
              <Card
                  className={
                    styles["consultations__cards-carousel__card"]
                  }
                >
                    <div className={styles["consultations__cards-carousel__card__card-body"]}>
                        <div className="text-center">
                            <div className={styles["consultations__cards-carousel__card__trainer"]}>د. حسين عبدالكريم</div>
                            <div className={styles["consultations__cards-carousel__card__job-title"]}>مستشار عقاري</div>
                            <div className={styles["consultations__cards-carousel__card__job-history"]}>مؤسس شركه إعمار </div>
                            <div className="w-100">
                                <Button className={styles["consultations__cards-carousel__card__btn"]}>
                                    

                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24.464 24">
  <g id="Calendar" transform="translate(-2.5 -3.4)">
    <g id="Group_10013" data-name="Group 10013" transform="translate(2.5 3.4)">
      <path id="Path_12850" data-name="Path 12850" d="M41.71,60.3H39.573a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H41.71a.775.775,0,0,0,.773-.773V61.073A.792.792,0,0,0,41.71,60.3Z" transform="translate(-29.452 -45.648)" fill="#fff"/>
      <path id="Path_12851" data-name="Path 12851" d="M20.31,60.3H18.173a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H20.31a.775.775,0,0,0,.773-.773V61.073A.792.792,0,0,0,20.31,60.3Z" transform="translate(-13.563 -45.648)" fill="#fff"/>
      <path id="Path_12852" data-name="Path 12852" d="M41.71,41.6H39.573a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H41.71a.775.775,0,0,0,.773-.773V42.373A.792.792,0,0,0,41.71,41.6Z" transform="translate(-29.452 -31.763)" fill="#fff"/>
      <path id="Path_12853" data-name="Path 12853" d="M20.31,41.6H18.173a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H20.31a.775.775,0,0,0,.773-.773V42.373A.792.792,0,0,0,20.31,41.6Z" transform="translate(-13.563 -31.763)" fill="#fff"/>
      <path id="Path_12854" data-name="Path 12854" d="M63.11,41.6H60.973a.775.775,0,0,0-.773.773v1.313a.775.775,0,0,0,.773.773H63.11a.775.775,0,0,0,.773-.773V42.373A.792.792,0,0,0,63.11,41.6Z" transform="translate(-45.342 -31.763)" fill="#fff"/>
      <path id="Path_12855" data-name="Path 12855" d="M24.878,18.284V8.061a2.575,2.575,0,0,0-.67-1.725V6.31h-.026a2.629,2.629,0,0,0-1.957-.876H20.294V4.276a.868.868,0,0,0-.876-.876H18.105a.868.868,0,0,0-.876.876V5.434H10.122V4.276A.868.868,0,0,0,9.247,3.4H7.933a.868.868,0,0,0-.876.876V5.434H5.127A2.629,2.629,0,0,0,3.17,6.31h0v.026A2.575,2.575,0,0,0,2.5,8.061V22.1a2.638,2.638,0,0,0,2.627,2.627H17.461a5.042,5.042,0,1,0,7.416-6.438Zm-8.009,4.069a5,5,0,0,0,.052.618H5.127a.868.868,0,0,1-.876-.876V11.383H23.1V17.46a4.53,4.53,0,0,0-1.185-.155A5.055,5.055,0,0,0,16.869,22.353ZM24,21.838l-2.086,2.24a.684.684,0,0,1-.979,0L19.7,22.739a.656.656,0,1,1,.953-.9l.773.824,1.6-1.725a.653.653,0,0,1,.927-.026A.633.633,0,0,1,24,21.838Z" transform="translate(-2.5 -3.4)" fill="#fff"/>
    </g>
  </g>
                                  </svg>
                                    
                                    
                                    
                                      <span>حجز جلسة</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                
              </Card> 
            </SwiperSlide>
           
        </Swiper>
        </Col>
      </Row>
    </>
  );
}

 
