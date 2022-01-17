/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { Row, Col, Button, Form, Card } from "react-bootstrap";
import styles from "./checkout-page.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import SuccessState from "../Success state/SuccessState";
import FailedState from "../Failed state/FailedState";

export default function CheckoutPage() {
  SwiperCore.use([Navigation]);
  const [step, setStep] = useState("added-courses");
  const [mobileView, setMobileView] = useState(false);

  
  const radioBtnsHandler = ()=>{
    const checkedRadioBtn:any = document.querySelector('input[name="payment-type"]:checked');
    const unCheckedRadioBtns:any = document.querySelectorAll('input[name="payment-type"]:not(:checked)');
    const infoBox:any = document.getElementById('card-info-box');

        if(window.innerWidth <= 576){

            unCheckedRadioBtns.forEach((radBtn:any) => {
                radBtn.parentElement.parentElement.style.cssText=`
                height: 12.5rem;
                overflow: hidden;
                box-shadow: 0 0 1.25rem #0000001A;
                border:none;
                `;
                const relatedInfoBox:any= document.querySelector(`#${radBtn.parentElement.parentElement.id}  div#card-info-box`) ;
                relatedInfoBox.style.cssText=`
                display:none;
                `
                
            });
    
            checkedRadioBtn.parentElement.parentElement.style.cssText=`
            height: 51.56rem;
            overflow: visible;
            box-shadow: 0 0 1.25rem #AF2B3633;
            border: 0.3125rem solid #AF151F;
            `

        }else{

            unCheckedRadioBtns.forEach((radBtn:any) => {
                radBtn.parentElement.parentElement.style.cssText=`
                height: 5rem;
                overflow: hidden;
                box-shadow: 0rem 0rem 1.25rem #0000001A;
                border:none;
                `;
                const relatedInfoBox:any= document.querySelector(`#${radBtn.parentElement.parentElement.id}  div#card-info-box`) ;
                relatedInfoBox.style.cssText=`
                display:none;
                `
                
            });
    
            checkedRadioBtn.parentElement.parentElement.style.cssText=`
            height: 20.625rem;
            overflow: visible;
            box-shadow: 0rem 0rem 1.25rem #AF2B3633;
            border: 0.125rem solid #AF151F;
            `

        }

        const relatedInfoBox:any= document.querySelector(`#${checkedRadioBtn.parentElement.parentElement.id}  div#card-info-box`) ;
        relatedInfoBox.style.cssText=`
        display:block;
        `
  };

  useEffect(() => {
    const navbar: any = document.getElementById("nav");
    const stepperBox: any = document.getElementById("stepper-box");
    const list: any = document.getElementsByTagName("ol")[0];
    const checkedRadioBtn:any = document.querySelector('input[name="payment-type"]:checked');
    // const unCheckedRadioBtns:any = document.querySelectorAll('input[name="payment-type"]:not(:checked)');
    stepperBox.style.cssText = `top:${navbar.offsetHeight}px`;

    if(window.innerWidth <= 576){
        const checkedRadioBtn:any = document.querySelector('input[name="payment-type"]:checked');
    const unCheckedRadioBtns:any = document.querySelectorAll('input[name="payment-type"]:not(:checked)');
        setMobileView(true);
        
        unCheckedRadioBtns.forEach((radBtn:any) => {
            radBtn.parentElement.parentElement.style.cssText=`
            height: 12.5rem;
            overflow: hidden;
            box-shadow: 0 0 1.25rem #0000001A;
            border:none;
            `;
            const relatedInfoBox:any= document.querySelector(`#${radBtn.parentElement.parentElement.id}  div#card-info-box`) ;
            relatedInfoBox.style.cssText=`
            display:none;
            `
            
        });

        checkedRadioBtn ?  checkedRadioBtn.parentElement.parentElement.style.cssText=`
        height: 51.56rem;
        overflow: visible;
        box-shadow: 0 0 1.25rem #AF2B3633;
        border: 0.3125rem solid #AF151F;
        ` : null ;

    }else{
        const checkedRadioBtn:any = document.querySelector('input[name="payment-type"]:checked');
    const unCheckedRadioBtns:any = document.querySelectorAll('input[name="payment-type"]:not(:checked)');
        setMobileView(false);
        unCheckedRadioBtns.forEach((radBtn:any) => {
            radBtn.parentElement.parentElement.style.cssText=`
            height: 5rem;
            overflow: hidden;
            box-shadow: 0rem 0rem 1.25rem #0000001A;
            border:none;
            `;
            const relatedInfoBox:any= document.querySelector(`#${radBtn.parentElement.parentElement.id}  div#card-info-box`) ;
            relatedInfoBox.style.cssText=`
            display:none;
            `
            
        });

        checkedRadioBtn ? checkedRadioBtn.parentElement.parentElement.style.cssText=`
        height: 20.625rem;
        overflow: visible;
        box-shadow: 0rem 0rem 1.25rem #AF2B3633;
        border: 0.125rem solid #AF151F;
        `:null ;

    }
    if(checkedRadioBtn){
        const relatedInfoBox:any= document.querySelector(`#${checkedRadioBtn.parentElement.parentElement.id}  div#card-info-box`) ;
        relatedInfoBox.style.cssText=`
        display:block;
        `
    }

    window.addEventListener("resize" ,()=>{
        const checkedRadioBtn:any = document.querySelector('input[name="payment-type"]:checked');
        const unCheckedRadioBtns:any = document.querySelectorAll('input[name="payment-type"]:not(:checked)');
        stepperBox.style.cssText = `top:${navbar.offsetHeight}px`;
        if(window.innerWidth <= 576){
            setMobileView(true);

            unCheckedRadioBtns.forEach((radBtn:any) => {
                radBtn.parentElement.parentElement.style.cssText=`
                height: 12.5rem;
                overflow: hidden;
                box-shadow: 0 0 1.25rem #0000001A;
                border:none;
                `;
                const relatedInfoBox:any= document.querySelector(`#${radBtn.parentElement.parentElement.id}  div#card-info-box`) ;
                relatedInfoBox.style.cssText=`
                display:none;
                `
                
            });
    
            checkedRadioBtn ? checkedRadioBtn.parentElement.parentElement.style.cssText=`
            height: 51.56rem;
            overflow: visible;
            box-shadow: 0 0 1.25rem #AF2B3633;
            border: 0.3125rem solid #AF151F;
            `
            :
            null;

        }else{
            
            setMobileView(false);
            unCheckedRadioBtns.forEach((radBtn:any) => {
                radBtn.parentElement.parentElement.style.cssText=`
                height: 5rem;
                overflow: hidden;
                box-shadow: 0rem 0rem 1.25rem #0000001A;
                border:none;
                `;
                const relatedInfoBox:any= document.querySelector(`#${radBtn.parentElement.parentElement.id}  div#card-info-box`) ;
                relatedInfoBox.style.cssText=`
                display:none;
                `
                
            });
    
          checkedRadioBtn ?  checkedRadioBtn.parentElement.parentElement.style.cssText=`
            height: 20.625rem;
            overflow: visible;
            box-shadow: 0rem 0rem 1.25rem #AF2B3633;
            border: 0.125rem solid #AF151F;
            `
            :
            null;

        }

        if(checkedRadioBtn){
            const relatedInfoBox:any= document.querySelector(`#${checkedRadioBtn.parentElement.parentElement.id}  div#card-info-box`) ;
            relatedInfoBox.style.cssText=`
            display:block;
            `
        }
    });

    list.addEventListener("click", (e: any) => {
      switch (e.target.id) {
        case "added-courses":
          setStep("added-courses");
          break;
        case "payment-types":
          setStep("payment-types");
          break;
        case "begin-learning":
          setStep("begin-learning");
          break;
        default:
          break;
      }
    });


    return () => {
      list.removeEventListener("click", () => {
        return;
      });

      window.removeEventListener("resize",()=>{
        return;
      });
    };
  }, []);

  useEffect(() => {
    const firstStepBox:any = document.getElementById("added-courses");
    const secondStepBox:any = document.getElementById("payment-types");
    const thirdStepBox:any = document.getElementById("begin-learning");
    
    switch (step) {
        case "added-courses":
            firstStepBox.innerHTML = '1';
            secondStepBox.innerHTML = '2';
            thirdStepBox.innerHTML = '3';
          break;
        case "payment-types":
            firstStepBox.innerHTML = 
            `<svg id="added-courses" xmlns="http://www.w3.org/2000/svg" width="1rem" height="0.75rem" viewBox="0 0 15.629 12">
            <g id="added-courses"  transform="translate(-7.983 -9.033)">
              <path id="added-courses" data-name="Path 13142" d="M8.546,16.842a1.922,1.922,0,0,1,2.718-2.718l2.27,2.269,6.8-6.8a1.922,1.922,0,1,1,2.718,2.718l-8.16,8.154a1.918,1.918,0,0,1-2.718,0L8.546,16.842Z" transform="translate(0)" fill="#fff"/>
            </g>
          </svg>
          `;
            secondStepBox.innerHTML = '2';
            thirdStepBox.innerHTML = '3';
          break;
        case "begin-learning":
            firstStepBox.innerHTML = `<svg id="added-courses" xmlns="http://www.w3.org/2000/svg" width="1rem" height="0.75rem" viewBox="0 0 15.629 12">
            <g  id="added-courses" transform="translate(-7.983 -9.033)">
              <path id="added-courses" data-name="Path 13142" d="M8.546,16.842a1.922,1.922,0,0,1,2.718-2.718l2.27,2.269,6.8-6.8a1.922,1.922,0,1,1,2.718,2.718l-8.16,8.154a1.918,1.918,0,0,1-2.718,0L8.546,16.842Z" transform="translate(0)" fill="#fff"/>
            </g>
          </svg>
          `;
            secondStepBox.innerHTML = `<svg id="payment-types" xmlns="http://www.w3.org/2000/svg" width="1rem" height="0.75rem" viewBox="0 0 15.629 12">
            <g id="payment-types" transform="translate(-7.983 -9.033)">
              <path id="payment-types" data-name="Path 13142" d="M8.546,16.842a1.922,1.922,0,0,1,2.718-2.718l2.27,2.269,6.8-6.8a1.922,1.922,0,1,1,2.718,2.718l-8.16,8.154a1.918,1.918,0,0,1-2.718,0L8.546,16.842Z" transform="translate(0)" fill="#fff"/>
            </g>
          </svg>
          `;
            thirdStepBox.innerHTML = `3`;
          break;
        default:
          break;
      }
  }, [step])

  return (
    <>
      <div id="stepper-box" className={styles["checkout__stepper-box"]}>
        <ol
          id="stepper-list"
          className={styles["checkout__stepper-box__stepper"]}
        >
          <li
            className={`${
              step == "added-courses" || step == "payment-types" || step == "begin-learning"
                ? styles["checkout__stepper-box__stepper__item--active"]
                : styles["checkout__stepper-box__stepper__item"]
            }`}
          >
            <div
              id="added-courses"
              className={styles["checkout__stepper-box__stepper__step-number"]}
            >
              1
            </div>
            <div className={styles["c-stepper__title"]}>الدورات المضافة</div>
          </li>
          <li
            className={`${
              step == "payment-types" || step == "begin-learning"
                ? styles["checkout__stepper-box__stepper__item--active"]
                : styles["checkout__stepper-box__stepper__item"]
            }`}
          >
            <div
              id="payment-types"
              className={styles["checkout__stepper-box__stepper__step-number"]}
            >
              2
            </div>
            <div className={styles["c-stepper__title"]}>وسائل الدفع</div>
          </li>
          <li
            className={`${
              step == "begin-learning"
                ? styles["checkout__stepper-box__stepper__item--active"]
                : styles["checkout__stepper-box__stepper__item"]
            }`}
          >
            <div
              id="begin-learning"
              className={styles["checkout__stepper-box__stepper__step-number"]}
            >
              3
            </div>
            <div className={styles["c-stepper__title"]}>ابدأ التعلم</div>
          </li>
        </ol>
      </div>
      {(step == "added-courses" || step == "payment-types") && <Row className={styles["checkout"]}>
        <Col className={styles["checkout__course-content"]}>

            {step == "payment-types" && <div className={styles["checkout__payment-method-box"]}>
                <div className={styles["checkout__payment-method-box__title"]}>
                    حدد وسيلة الدفع المناسبة لك         
                </div>

                <div id="payment-method1" className={styles["checkout__payment-method-box__payment-method"]}>
                    <div className="d-flex align-items-center">
                    <input onClick={()=> radioBtnsHandler()} type="radio" id="visa" name="payment-type" value="VISA" className="form-check-input"/>
                    <label htmlFor="visa">
                        <div className={styles["checkout__payment-method-box__payment-method__images"]}>
                            <img className={styles["checkout__payment-method-box__payment-method__images__visa"]} src="/images/Visa_Inc.png" alt="VISA" />
                            <img className={styles["checkout__payment-method-box__payment-method__images__master-card"]} src="/images/Mastercard.png" alt="MASTER CARD" />
                        </div>
                        <div className={styles["checkout__payment-method-box__payment-method__text"]}>
                            بطاقات الائتمان / الخصم المباشر
                        </div>

                    </label>
                    </div>

                    <div id="card-info-box" className={styles["checkout__payment-method-box__payment-method__card-info"]}>
                        <div>
                        <Form.Label>رقم البطاقة</Form.Label>
                        <Form.Control className={styles["checkout__payment-method-box__payment-method__card-info__card-number-field"]}  type="number" placeholder="XXXX XXXX XXXX XXXX" />
                        </div>
                        
                        <div className="d-flex align-items-center">
                        <div className={styles["checkout__payment-method-box__payment-method__card-info__card-exp-date-box"]}>
                        <Form.Label>تاريخ انتهاء البطاقة</Form.Label>
                        <Form.Control className={styles["checkout__payment-method-box__payment-method__card-info__card-exp-date"]}  type="number" placeholder="MM / YY" />
                        </div>
                        
                        <div className={styles["checkout__payment-method-box__payment-method__card-info__card-cvv-box"]}>
                        <Form.Label> الرقم السري (CVV) </Form.Label>
                        <Form.Control className={styles["checkout__payment-method-box__payment-method__card-info__card-cvv"]}  type="number" placeholder="XXX" />
                        </div>

                        </div>

                        <div className={styles["checkout__payment-method-box__payment-method__card-info__save-card-info"]}>
                            <input className="form-check-input" type="checkbox" name="save-your-card-info" id="save-your-card-info" />
                            <span >
                            احتفظ بمعلومات البطاقة للمرة القادمة
                            </span>
                        </div>
                    
                    </div>
                </div>
                <div id="payment-method2" className={styles["checkout__payment-method-box__payment-method"]}>
                <div className="d-flex align-items-center">

                    <input onClick={()=> radioBtnsHandler()} type="radio" id="paypal" name="payment-type" value="PAYPAL" className="form-check-input"/>
                    <label htmlFor="paypal">
                        <div className={styles["checkout__payment-method-box__payment-method__images"]}>
                            <img className={styles["checkout__payment-method-box__payment-method__images__paypal"]} src="/images/paypal.png" alt="PAYPAL" />
                        </div>
                        <div className={styles["checkout__payment-method-box__payment-method__text"]}>
                        الدفع عن طريق باي بال
                        </div>

                    </label>
                    </div>
                    <div id="card-info-box" className={styles["checkout__payment-method-box__payment-method__card-info"]}>
                        <div>
                        <Form.Label>رقم البطاقة</Form.Label>
                        <Form.Control className={styles["checkout__payment-method-box__payment-method__card-info__card-number-field"]}  type="number" placeholder="XXXX XXXX XXXX XXXX" />
                        </div>
                        
                        <div className="d-flex align-items-center">
                        <div className={styles["checkout__payment-method-box__payment-method__card-info__card-exp-date-box"]}>
                        <Form.Label>تاريخ انتهاء البطاقة</Form.Label>
                        <Form.Control className={styles["checkout__payment-method-box__payment-method__card-info__card-exp-date"]}  type="number" placeholder="MM / YY" />
                        </div>
                        
                        <div className={styles["checkout__payment-method-box__payment-method__card-info__card-cvv-box"]}>
                        <Form.Label> الرقم السري (CVV) </Form.Label>
                        <Form.Control className={styles["checkout__payment-method-box__payment-method__card-info__card-cvv"]}  type="number" placeholder="XXX" />
                        </div>

                        </div>

                        <div className={styles["checkout__payment-method-box__payment-method__card-info__save-card-info"]}>
                            <input className="form-check-input" type="checkbox" name="save-your-card-info" id="save-your-card-info" />
                            <span >
                            احتفظ بمعلومات البطاقة للمرة القادمة
                            </span>
                        </div>
                    
                    </div>
                </div>
                <div id="payment-method3" className={styles["checkout__payment-method-box__payment-method"]}>
                <div className="d-flex align-items-center">

                    <input onClick={()=> radioBtnsHandler()} type="radio" id="knet" name="payment-type" value="KNET" className="form-check-input"/>
                    <label htmlFor="knet">
                        <div className={styles["checkout__payment-method-box__payment-method__images"]}>
                            <img className={styles["checkout__payment-method-box__payment-method__images__knet"]} src="/images/knet.png" alt="PAYPAL" />
                        </div>
                        <div className={styles["checkout__payment-method-box__payment-method__text"]}>
                        الدفع عن طريق كي - نت
                        </div>

                    </label>
                    </div>
                    <div id="card-info-box" className={styles["checkout__payment-method-box__payment-method__card-info"]}>
                        <div>
                        <Form.Label>رقم البطاقة</Form.Label>
                        <Form.Control className={styles["checkout__payment-method-box__payment-method__card-info__card-number-field"]}  type="number" placeholder="XXXX XXXX XXXX XXXX" />
                        </div>
                        
                        <div className="d-flex align-items-center">
                        <div className={styles["checkout__payment-method-box__payment-method__card-info__card-exp-date-box"]}>
                        <Form.Label>تاريخ انتهاء البطاقة</Form.Label>
                        <Form.Control className={styles["checkout__payment-method-box__payment-method__card-info__card-exp-date"]}  type="number" placeholder="MM / YY" />
                        </div>
                        
                        <div className={styles["checkout__payment-method-box__payment-method__card-info__card-cvv-box"]}>
                        <Form.Label> الرقم السري (CVV) </Form.Label>
                        <Form.Control className={styles["checkout__payment-method-box__payment-method__card-info__card-cvv"]}  type="number" placeholder="XXX" />
                        </div>

                        </div>

                        <div className={styles["checkout__payment-method-box__payment-method__card-info__save-card-info"]}>
                            <input className="form-check-input" type="checkbox" name="save-your-card-info" id="save-your-card-info" />
                            <span >
                            احتفظ بمعلومات البطاقة للمرة القادمة
                            </span>
                        </div>
                    
                    </div>
                </div>

            </div>}

            {mobileView == true && <div className={styles["checkout__cart-sticky-card-div"]}>

            <div className={styles["checkout__cart-sticky-card"]}>
                <div className={styles["checkout__cart-sticky-card__title"]}>ملخص السلة</div>
                <div className={styles["checkout__cart-sticky-card__do-you-have-coupon"]}>هل لديك كوبون خصم؟</div>

                <div className={styles["checkout__cart-sticky-card__search-bar-container"]}>
              <Form.Control
                type="text"
                placeholder="ادخل الكوبون هنا"
                className={
                  styles["checkout__cart-sticky-card__search-bar-container__search-bar"]
                }
              />
              <Button className={styles["checkout__cart-sticky-card__search-bar__btn"]}>
              تطبيق
              </Button>
                
                
                </div>

                <div className={styles["checkout__cart-sticky-card__total-price-box"]}>
                    <div className={styles["checkout__cart-sticky-card__total-price-box__total-price-text"]}>
                    السعر الإجمالي
                    </div>
                    <div className={styles["checkout__cart-sticky-card__total-price-box__total-price"]}>
                        <span> 1200 </span>
                        <span>جنيه</span>
                    </div>

                </div>

                <div className={styles["checkout__cart-sticky-card__coupon-box"]}>
                    <div className={styles["checkout__cart-sticky-card__coupon-text"]}>
                    الكوبون
                    </div>
                    <div className={styles["checkout__cart-sticky-card__coupon-value"]}>
                        <span> -100 </span>
                        <span>جنيه</span>
                    </div>

                </div>

                <div className={styles["checkout__cart-sticky-card__guarantee-box"]}
                    >
                    <div
                        className={
                        styles["checkout__cart-sticky-card__guarantee-box__icon"]
                        }
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.375rem"
                        height="1.5rem"
                        viewBox="0 0 21.603 24"
                        >
                        <g id="guarantee" transform="translate(-4 -3.15)">
                            <g
                            id="Group_11536"
                            data-name="Group 11536"
                            transform="translate(4 3.15)"
                            >
                            <path
                                id="Path_13195"
                                data-name="Path 13195"
                                d="M4,5.783V20.365A2.551,2.551,0,0,0,5.485,22.8l8.1,4.051a2.582,2.582,0,0,0,2.43,0l8.1-4.051a2.551,2.551,0,0,0,1.485-2.43V5.783A23.474,23.474,0,0,0,4,5.783Zm17.148,6.346L14.4,18.88a1.226,1.226,0,0,1-.945.405,1.919,1.919,0,0,1-.81-.27l-4.051-2.7a1.428,1.428,0,0,1-.27-1.89,1.328,1.328,0,0,1,1.89-.405l3.105,2.025L19.257,10.1a1.305,1.305,0,0,1,1.89,0A1.468,1.468,0,0,1,21.148,12.129Z"
                                transform="translate(-4 -3.15)"
                                fill="#198754"
                            />
                            </g>
                        </g>
                        </svg>
                    </div>
                    <div
                        className={
                        styles["checkout__cart-sticky-card__guarantee-box__text-box"]
                        }
                    >
                        <div
                        className={
                            styles[
                            "checkout__cart-sticky-card__guarantee-box__text-box__major"
                            ]
                        }
                        >
                        ٣٠ يوم ضمان ذهبي استرداد كامل المبلغ
                        </div>
                        <div
                        className={
                            styles[
                            "checkout__cart-sticky-card__guarantee-box__text-box__minor"
                            ]
                        }
                        >
                        اذا لم تكن راضي عن محتوى الدورة
                        </div>
                    </div>
                </div>

                <div className={styles["checkout__cart-sticky-card__final-price-box"]}>
                    <div className={styles["checkout__cart-sticky-card__final-price-box__final-price-text"]}>
                    السعر الإجمالي
                    </div>
                    <div className={styles["checkout__cart-sticky-card__final-price-box__final-price"]}>
                        <span> 1200 </span>
                        <span>جنيه</span>
                    </div>

                </div>

                <Button className={styles["checkout__cart-sticky-card__purchasing-btn"]}>
                إتمام الشراء
                </Button>

                {step == "added-courses" &&  <div className={styles["checkout__cart-sticky-card__complete-surfing-courses"]}>
                    <span>
                    اكمل البحث عن دورات أخرى
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14.364" height="14" viewBox="0 0 14.364 14">
                        <path id="goArrow" d="M8.207,50.712l-.712.712a.766.766,0,0,1-1.087,0L.176,45.195a.766.766,0,0,1,0-1.087l6.232-6.232a.766.766,0,0,1,1.087,0l.712.712a.77.77,0,0,1-.013,1.1l-3.863,3.68h9.214a.768.768,0,0,1,.769.769v1.026a.768.768,0,0,1-.769.769H4.331l3.863,3.68A.765.765,0,0,1,8.207,50.712Z" transform="translate(0.05 -37.65)" fill="#AF151F"/>
                    </svg>

                </div>}

                { step == "payment-types" && <div className={styles["checkout__cart-sticky-card__pay-safely"]}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17.268" height="20" viewBox="0 0 17.268 20">
                        <path id="secure" d="M41.018,15.974a16.841,16.841,0,0,1-3.5-.86,7.5,7.5,0,0,1-3.212-1.95l-.057-.057-.057-.057c-.057,0-.057-.057-.115-.057s-.057-.057-.115-.057-.057-.057-.115-.057-.057-.057-.115-.057h-.688c-.057,0-.057,0-.115.057-.057,0-.057,0-.115.057-.057,0-.057.057-.115.057s-.057.057-.115.057l-.057.057-.057.057a8.278,8.278,0,0,1-3.212,1.95,20.252,20.252,0,0,1-3.5.86,1.173,1.173,0,0,0-1.032,1.147,24.925,24.925,0,0,0,1.262,8.889,11.45,11.45,0,0,0,3.5,4.875,7.592,7.592,0,0,0,1.835,1.147c.746.4,1.663,1.032,2.523.688a11.915,11.915,0,0,0,5.62-4.3,12.49,12.49,0,0,0,1.262-2.466,24.925,24.925,0,0,0,1.262-8.889A1.1,1.1,0,0,0,41.018,15.974Zm-2.351,9.234a8.9,8.9,0,0,1-5.219,5.276,8.9,8.9,0,0,1-5.219-5.276,21.759,21.759,0,0,1-1.09-7.112,19.58,19.58,0,0,0,2.982-.8,10.978,10.978,0,0,0,3.326-1.778,10.978,10.978,0,0,0,3.326,1.778,17.964,17.964,0,0,0,2.982.8,21.758,21.758,0,0,1-1.09,7.112ZM32.989,23.6l-2.294-1.663a1.147,1.147,0,0,0-1.376,1.835l3.154,2.294a1.192,1.192,0,0,0,1.721-.4c1.262-1.548,2.581-3.1,3.843-4.645a1.142,1.142,0,1,0-1.778-1.434L32.989,23.6Z" transform="translate(-24.73 -12.82)" fill="#6c757d"/>
                    </svg>

                    <span> ادفع بأمان وسهولة عبر تدرب </span>
                </div>}

            </div>

            </div>}

          <div className={styles["checkout__course-content__title"]}>
              <span> محتويات السلة </span>
              <span>  (4 دورة) </span>
          </div>
          <div className={styles["checkout__cards-outer-box__card"]}>
                <div className={styles["checkout__cards-outer-box__card__course-img"]}>
                    <img src="/images/course2cropped.png" alt="course image" />
                    <div className={styles["checkout__cards-outer-box__card__category-chip"]}>
                        فنون
                    </div>
                </div>

                <div className={styles["checkout__cards-outer-box__card__trainer-info-box-container"]}>

                    <div className={styles["checkout__cards-outer-box__card__trainer-info-box"]}>
                        <div className={styles["checkout__cards-outer-box__card__trainer-info-box__trainer-img"]}>
                            <img src="/images/trainer img.png" alt="trainer image" />
                        </div>
                        <div className={styles["checkout__cards-outer-box__card__trainer-info-box__info"]}>
                            <h1 className={styles["checkout__cards-outer-box__card__trainer-info-box__course-name"]} title=" تعليم الرسم بالقلم الرصاصصصص">
                            تعليم الرسم بالقلم الرصاص
                            </h1>
                            <div className={styles["checkout__cards-outer-box__card__trainer-info-box__trainer-name"]}>
                            أ/ مروة عبدالله
                            </div>
                        </div>
                    </div>
                    <div className={styles["checkout__cards-outer-box__card__prices-box"]}>
                        <div className={styles["checkout__cards-outer-box__card__price"]}>
                            <span> 800 </span>
                            <span> جنية مصري </span>
                        </div>
                        <div className={styles["checkout__cards-outer-box__card__old-price"]}>
                            <span> 860 </span>
                            <span> جنية مصري </span>
                        </div>
                    </div>
                </div>

                <div className={styles["checkout__cards-outer-box__card__action-btns"]}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <g id="remove" transform="translate(28.585 12)">
                            <path id="Path_15221" data-name="Path 15221" d="M15.343,30.657a1.1,1.1,0,0,0,1.6,0L23,24.6l6.057,6.057a1.1,1.1,0,0,0,1.6,0,1.1,1.1,0,0,0,0-1.6L24.6,23l6.057-6.057a1.131,1.131,0,0,0-1.6-1.6L23,21.4l-6.057-6.057a1.131,1.131,0,0,0-1.6,1.6L21.4,23l-6.057,6.057a1.1,1.1,0,0,0,0,1.6Z" transform="translate(-43.585 -27)" fill="#222"/>
                        </g>
                    </svg>

                </div>
            </div>
          <div className={styles["checkout__cards-outer-box__card"]}>
                <div className={styles["checkout__cards-outer-box__card__course-img"]}>
                    <img src="/images/course2cropped.png" alt="course image" />
                    <div className={styles["checkout__cards-outer-box__card__category-chip"]}>
                        فنون
                    </div>
                </div>

                <div className={styles["checkout__cards-outer-box__card__trainer-info-box-container"]}>

                    <div className={styles["checkout__cards-outer-box__card__trainer-info-box"]}>
                        <div className={styles["checkout__cards-outer-box__card__trainer-info-box__trainer-img"]}>
                            <img src="/images/trainer img.png" alt="trainer image" />
                        </div>
                        <div className={styles["checkout__cards-outer-box__card__trainer-info-box__info"]}>
                            <h1 className={styles["checkout__cards-outer-box__card__trainer-info-box__course-name"]} title=" تعليم الرسم بالقلم الرصاصصصص">
                            تعليم الرسم بالقلم الرصاص
                            </h1>
                            <div className={styles["checkout__cards-outer-box__card__trainer-info-box__trainer-name"]}>
                            أ/ مروة عبدالله
                            </div>
                        </div>
                    </div>
                    <div className={styles["checkout__cards-outer-box__card__prices-box"]}>
                        <div className={styles["checkout__cards-outer-box__card__price"]}>
                            <span> 800 </span>
                            <span> جنية مصري </span>
                        </div>
                        <div className={styles["checkout__cards-outer-box__card__old-price"]}>
                            <span> 860 </span>
                            <span> جنية مصري </span>
                        </div>
                    </div>
                </div>

                <div className={styles["checkout__cards-outer-box__card__action-btns"]}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <g id="remove" transform="translate(28.585 12)">
                            <path id="Path_15221" data-name="Path 15221" d="M15.343,30.657a1.1,1.1,0,0,0,1.6,0L23,24.6l6.057,6.057a1.1,1.1,0,0,0,1.6,0,1.1,1.1,0,0,0,0-1.6L24.6,23l6.057-6.057a1.131,1.131,0,0,0-1.6-1.6L23,21.4l-6.057-6.057a1.131,1.131,0,0,0-1.6,1.6L21.4,23l-6.057,6.057a1.1,1.1,0,0,0,0,1.6Z" transform="translate(-43.585 -27)" fill="#222"/>
                        </g>
                    </svg>

                </div>
            </div>
          <div className={styles["checkout__cards-outer-box__card"]}>
                <div className={styles["checkout__cards-outer-box__card__course-img"]}>
                    <img src="/images/course2cropped.png" alt="course image" />
                    <div className={styles["checkout__cards-outer-box__card__category-chip"]}>
                        فنون
                    </div>
                </div>

                <div className={styles["checkout__cards-outer-box__card__trainer-info-box-container"]}>

                    <div className={styles["checkout__cards-outer-box__card__trainer-info-box"]}>
                        <div className={styles["checkout__cards-outer-box__card__trainer-info-box__trainer-img"]}>
                            <img src="/images/trainer img.png" alt="trainer image" />
                        </div>
                        <div className={styles["checkout__cards-outer-box__card__trainer-info-box__info"]}>
                            <h1 className={styles["checkout__cards-outer-box__card__trainer-info-box__course-name"]} title=" تعليم الرسم بالقلم الرصاصصصص">
                            تعليم الرسم بالقلم الرصاص
                            </h1>
                            <div className={styles["checkout__cards-outer-box__card__trainer-info-box__trainer-name"]}>
                            أ/ مروة عبدالله
                            </div>
                        </div>
                    </div>
                    <div className={styles["checkout__cards-outer-box__card__prices-box"]}>
                        <div className={styles["checkout__cards-outer-box__card__price"]}>
                            <span> 800 </span>
                            <span> جنية مصري </span>
                        </div>
                        <div className={styles["checkout__cards-outer-box__card__old-price"]}>
                            <span> 860 </span>
                            <span> جنية مصري </span>
                        </div>
                    </div>
                </div>

                <div className={styles["checkout__cards-outer-box__card__action-btns"]}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <g id="remove" transform="translate(28.585 12)">
                            <path id="Path_15221" data-name="Path 15221" d="M15.343,30.657a1.1,1.1,0,0,0,1.6,0L23,24.6l6.057,6.057a1.1,1.1,0,0,0,1.6,0,1.1,1.1,0,0,0,0-1.6L24.6,23l6.057-6.057a1.131,1.131,0,0,0-1.6-1.6L23,21.4l-6.057-6.057a1.131,1.131,0,0,0-1.6,1.6L21.4,23l-6.057,6.057a1.1,1.1,0,0,0,0,1.6Z" transform="translate(-43.585 -27)" fill="#222"/>
                        </g>
                    </svg>

                </div>
            </div>
          <div className={styles["checkout__cards-outer-box__card"]}>
                <div className={styles["checkout__cards-outer-box__card__course-img"]}>
                    <img src="/images/course2cropped.png" alt="course image" />
                    <div className={styles["checkout__cards-outer-box__card__category-chip"]}>
                        فنون
                    </div>
                </div>

                <div className={styles["checkout__cards-outer-box__card__trainer-info-box-container"]}>

                    <div className={styles["checkout__cards-outer-box__card__trainer-info-box"]}>
                        <div className={styles["checkout__cards-outer-box__card__trainer-info-box__trainer-img"]}>
                            <img src="/images/trainer img.png" alt="trainer image" />
                        </div>
                        <div className={styles["checkout__cards-outer-box__card__trainer-info-box__info"]}>
                            <h1 className={styles["checkout__cards-outer-box__card__trainer-info-box__course-name"]} title=" تعليم الرسم بالقلم الرصاصصصص">
                            تعليم الرسم بالقلم الرصاص
                            </h1>
                            <div className={styles["checkout__cards-outer-box__card__trainer-info-box__trainer-name"]}>
                            أ/ مروة عبدالله
                            </div>
                        </div>
                    </div>
                    <div className={styles["checkout__cards-outer-box__card__prices-box"]}>
                        <div className={styles["checkout__cards-outer-box__card__price"]}>
                            <span> 800 </span>
                            <span> جنية مصري </span>
                        </div>
                        <div className={styles["checkout__cards-outer-box__card__old-price"]}>
                            <span> 860 </span>
                            <span> جنية مصري </span>
                        </div>
                    </div>
                </div>

                <div className={styles["checkout__cards-outer-box__card__action-btns"]}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <g id="remove" transform="translate(28.585 12)">
                            <path id="Path_15221" data-name="Path 15221" d="M15.343,30.657a1.1,1.1,0,0,0,1.6,0L23,24.6l6.057,6.057a1.1,1.1,0,0,0,1.6,0,1.1,1.1,0,0,0,0-1.6L24.6,23l6.057-6.057a1.131,1.131,0,0,0-1.6-1.6L23,21.4l-6.057-6.057a1.131,1.131,0,0,0-1.6,1.6L21.4,23l-6.057,6.057a1.1,1.1,0,0,0,0,1.6Z" transform="translate(-43.585 -27)" fill="#222"/>
                        </g>
                    </svg>

                </div>
            </div>

        </Col>
        { mobileView == false && <Col className={styles["checkout__cart-sticky-card-col"]}>

            <div className={styles["checkout__cart-sticky-card"]}>
                <div className={styles["checkout__cart-sticky-card__title"]}>ملخص السلة</div>
                <div className={styles["checkout__cart-sticky-card__do-you-have-coupon"]}>هل لديك كوبون خصم؟</div>

                <div className={styles["checkout__cart-sticky-card__search-bar-container"]}>
              <Form.Control
                type="text"
                placeholder="ادخل الكوبون هنا"
                className={
                  styles["checkout__cart-sticky-card__search-bar-container__search-bar"]
                }
              />
              <Button className={styles["checkout__cart-sticky-card__search-bar__btn"]}>
              تطبيق
              </Button>
                
                
                </div>

                <div className={styles["checkout__cart-sticky-card__total-price-box"]}>
                    <div className={styles["checkout__cart-sticky-card__total-price-box__total-price-text"]}>
                    السعر الإجمالي
                    </div>
                    <div className={styles["checkout__cart-sticky-card__total-price-box__total-price"]}>
                        <span> 1200 </span>
                        <span>جنيه</span>
                    </div>

                </div>

                <div className={styles["checkout__cart-sticky-card__coupon-box"]}>
                    <div className={styles["checkout__cart-sticky-card__coupon-text"]}>
                    الكوبون
                    </div>
                    <div className={styles["checkout__cart-sticky-card__coupon-value"]}>
                        <span> -100 </span>
                        <span>جنيه</span>
                    </div>

                </div>

                <div className={styles["checkout__cart-sticky-card__guarantee-box"]}
                    >
                    <div
                        className={
                        styles["checkout__cart-sticky-card__guarantee-box__icon"]
                        }
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.375rem"
                        height="1.5rem"
                        viewBox="0 0 21.603 24"
                        >
                        <g id="guarantee" transform="translate(-4 -3.15)">
                            <g
                            id="Group_11536"
                            data-name="Group 11536"
                            transform="translate(4 3.15)"
                            >
                            <path
                                id="Path_13195"
                                data-name="Path 13195"
                                d="M4,5.783V20.365A2.551,2.551,0,0,0,5.485,22.8l8.1,4.051a2.582,2.582,0,0,0,2.43,0l8.1-4.051a2.551,2.551,0,0,0,1.485-2.43V5.783A23.474,23.474,0,0,0,4,5.783Zm17.148,6.346L14.4,18.88a1.226,1.226,0,0,1-.945.405,1.919,1.919,0,0,1-.81-.27l-4.051-2.7a1.428,1.428,0,0,1-.27-1.89,1.328,1.328,0,0,1,1.89-.405l3.105,2.025L19.257,10.1a1.305,1.305,0,0,1,1.89,0A1.468,1.468,0,0,1,21.148,12.129Z"
                                transform="translate(-4 -3.15)"
                                fill="#198754"
                            />
                            </g>
                        </g>
                        </svg>
                    </div>
                    <div
                        className={
                        styles["checkout__cart-sticky-card__guarantee-box__text-box"]
                        }
                    >
                        <div
                        className={
                            styles[
                            "checkout__cart-sticky-card__guarantee-box__text-box__major"
                            ]
                        }
                        >
                        ٣٠ يوم ضمان ذهبي استرداد كامل المبلغ
                        </div>
                        <div
                        className={
                            styles[
                            "checkout__cart-sticky-card__guarantee-box__text-box__minor"
                            ]
                        }
                        >
                        اذا لم تكن راضي عن محتوى الدورة
                        </div>
                    </div>
                </div>

                <div className={styles["checkout__cart-sticky-card__final-price-box"]}>
                    <div className={styles["checkout__cart-sticky-card__final-price-box__final-price-text"]}>
                    السعر الإجمالي
                    </div>
                    <div className={styles["checkout__cart-sticky-card__final-price-box__final-price"]}>
                        <span> 1200 </span>
                        <span>جنيه</span>
                    </div>

                </div>

                <Button className={styles["checkout__cart-sticky-card__purchasing-btn"]}>
                إتمام الشراء
                </Button>

                { step == "added-courses" &&  <div className={styles["checkout__cart-sticky-card__complete-surfing-courses"]}>
                    <span>
                    اكمل البحث عن دورات أخرى
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14.364" height="14" viewBox="0 0 14.364 14">
                        <path id="goArrow" d="M8.207,50.712l-.712.712a.766.766,0,0,1-1.087,0L.176,45.195a.766.766,0,0,1,0-1.087l6.232-6.232a.766.766,0,0,1,1.087,0l.712.712a.77.77,0,0,1-.013,1.1l-3.863,3.68h9.214a.768.768,0,0,1,.769.769v1.026a.768.768,0,0,1-.769.769H4.331l3.863,3.68A.765.765,0,0,1,8.207,50.712Z" transform="translate(0.05 -37.65)" fill="#AF151F"/>
                    </svg>

                </div>}

                { step == "payment-types" && <div className={styles["checkout__cart-sticky-card__pay-safely"]}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17.268" height="20" viewBox="0 0 17.268 20">
                        <path id="secure" d="M41.018,15.974a16.841,16.841,0,0,1-3.5-.86,7.5,7.5,0,0,1-3.212-1.95l-.057-.057-.057-.057c-.057,0-.057-.057-.115-.057s-.057-.057-.115-.057-.057-.057-.115-.057-.057-.057-.115-.057h-.688c-.057,0-.057,0-.115.057-.057,0-.057,0-.115.057-.057,0-.057.057-.115.057s-.057.057-.115.057l-.057.057-.057.057a8.278,8.278,0,0,1-3.212,1.95,20.252,20.252,0,0,1-3.5.86,1.173,1.173,0,0,0-1.032,1.147,24.925,24.925,0,0,0,1.262,8.889,11.45,11.45,0,0,0,3.5,4.875,7.592,7.592,0,0,0,1.835,1.147c.746.4,1.663,1.032,2.523.688a11.915,11.915,0,0,0,5.62-4.3,12.49,12.49,0,0,0,1.262-2.466,24.925,24.925,0,0,0,1.262-8.889A1.1,1.1,0,0,0,41.018,15.974Zm-2.351,9.234a8.9,8.9,0,0,1-5.219,5.276,8.9,8.9,0,0,1-5.219-5.276,21.759,21.759,0,0,1-1.09-7.112,19.58,19.58,0,0,0,2.982-.8,10.978,10.978,0,0,0,3.326-1.778,10.978,10.978,0,0,0,3.326,1.778,17.964,17.964,0,0,0,2.982.8,21.758,21.758,0,0,1-1.09,7.112ZM32.989,23.6l-2.294-1.663a1.147,1.147,0,0,0-1.376,1.835l3.154,2.294a1.192,1.192,0,0,0,1.721-.4c1.262-1.548,2.581-3.1,3.843-4.645a1.142,1.142,0,1,0-1.778-1.434L32.989,23.6Z" transform="translate(-24.73 -12.82)" fill="#6c757d"/>
                    </svg>

                    <span> ادفع بأمان وسهولة عبر تدرب </span>
                </div>}

            </div>

        </Col>}

      </Row>}

      {step == "added-courses" && <Row id="similar-courses-row" className={styles["checkout__similar-courses-row"]}>
      <Col xs={12} className={styles["checkout__similar-courses"]}>
        <div className={styles["checkout__similar-courses__title"]}>
            <div>الدورات مشابه قد تعجبك</div>
        </div>
      </Col>
        <Col xs={12} className={styles["checkout__similar-courses__cards-carousel"]}>
        <Swiper dir="rtl" slidesPerView={3.8} navigation={true} 
        breakpoints={{
            "50": {
                slidesPerView: 1.1,
              },
              "576": {
                slidesPerView: 2.8,
              },
              "981": {
                slidesPerView: 3.8,
              },
              "1201": {
                slidesPerView: 4.8,
              },
        }} className="mySwiper">
            <SwiperSlide>
                <Card
                    className={
                        styles["checkout__similar-courses__cards-carousel__course-card"]
                    }
                    >
                    <div
                        className={
                        styles[
                            "checkout__similar-courses__cards-carousel__course-card__category-chip"
                        ]
                        }
                    > 
                        الفنون 
                    </div>
                    <Card.Img
                        variant="top"
                        src="/images/course2cropped.png"
                        alt="course image"
                        className={
                        styles[
                            "checkout__similar-courses__cards-carousel__course-card__course-img"
                        ]
                        }
                    />
                    <Card.Body
                        className={
                        styles[
                            "checkout__similar-courses__cards-carousel__course-card__card-body"
                        ]
                        }
                    >
                        <div
                        className={
                            styles[
                            "checkout__similar-courses__cards-carousel__course-card__card-body__card-header"
                            ]
                        }
                        >
                        <div
                            className={
                            styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__card-header__trainer-img-box"
                            ]
                            }
                        >
                            <img
                            src="/images/trainer img.png"
                            alt="trainer image"
                            />
                        </div>
                        <div
                            className={
                            styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__card-header__course-details"
                            ]
                            }
                        >
                            <h1
                            className={
                                styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__card-header__course-details__title"
                                ]
                            }
                            >
                            إحتراف التصوير بالكاميرا
                            </h1>
                            <div
                            className={
                                styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__card-header__course-details__author"
                                ]
                            }
                            >
                            م. محمد مصطفي
                            </div>
                        </div>
                        </div>

                        <div
                        className={
                            styles[
                            "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details"
                            ]
                        }
                        >
                        <div className="d-inline-block">
                            <div
                            className={
                                styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__price-container"
                                ]
                            }
                            >
                            <span
                                className={
                                styles[
                                    "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__price-container__price"
                                ]
                                }
                            >
                                850
                            </span>
                            <span
                                className={
                                styles[
                                    "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__price-container__currency"
                                ]
                                }
                            >
                                جنية مصري
                            </span>
                            </div>
                            <div
                            className={
                                styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container"
                                ]
                            }
                            >
                            <span
                                className={
                                styles[
                                    "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__price"
                                ]
                                }
                            >
                                950
                            </span>
                            <span
                                className={
                                styles[
                                    "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__currency"
                                ]
                                }
                            >
                                جنية مصري
                            </span>
                            </div>
                        </div>

                        <div className="d-inline-block">
                            <Button
                            className={
                                styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                                ]
                            }
                            >
                            <svg className={styles["checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__cart-icon"]}  
                            xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 25 22.135">
                            <g id="add_to_cart" data-name="add to cart" transform="translate(-989 -650)">
                                <g id="Group_10771" data-name="Group 10771" transform="translate(1003.676 664.648)">
                                <g id="Group_9975" data-name="Group 9975" transform="translate(0 0)">
                                    <path id="Path_12759" data-name="Path 12759" d="M344.29,362.612a2.743,2.743,0,1,0,2.743,2.743A2.746,2.746,0,0,0,344.29,362.612Zm0,3.84a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,344.29,366.452Z" transform="translate(-341.547 -362.612)" fill="#222"/>
                                </g>
                                </g>
                                <g id="Group_10770" data-name="Group 10770" transform="translate(989 650)">
                                <g id="Group_9977" data-name="Group 9977" transform="translate(0 0)">
                                    <path id="Path_12760" data-name="Path 12760" d="M21.825,25.751a.822.822,0,0,0-.648-.316H5.08l-.741-3.1a.823.823,0,0,0-.8-.632H.823a.823.823,0,1,0,0,1.646H2.889L5.564,34.542a.823.823,0,0,0,.8.632H19.175a.823.823,0,0,0,.8-.625l2-8.092A.824.824,0,0,0,21.825,25.751Zm-3.294,7.776H7.014L5.473,27.082H20.126Z" transform="translate(0 -21.705)" fill="#222"/>
                                </g>
                                </g>
                                <g id="Group_10772" data-name="Group 10772" transform="translate(993.719 664.648)">
                                <g id="Group_9979" data-name="Group 9979" transform="translate(0 0)">
                                    <path id="Path_12761" data-name="Path 12761" d="M112.549,362.612a2.743,2.743,0,1,0,2.743,2.743A2.746,2.746,0,0,0,112.549,362.612Zm0,3.84a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,112.549,366.452Z" transform="translate(-109.806 -362.612)" fill="#222"/>
                                </g>
                                </g>
                            </g>
                            </svg>

                            </Button>
                            <Button
                            className={
                                styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                                ]
                            }
                            >
                            
                            <svg className={styles["checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__fav-icon"]} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20.571 18">
    <g id="favorite" transform="translate(0.012 -31.967)" fill="none">
        <path d="M18.562,33.2a5.494,5.494,0,0,0-7.5.546l-.792.816-.792-.816a5.494,5.494,0,0,0-7.5-.546,5.769,5.769,0,0,0-.4,8.353l7.774,8.028a1.26,1.26,0,0,0,1.82,0l7.774-8.028A5.766,5.766,0,0,0,18.562,33.2Z" stroke="none"/>
        <path d="M 5.35462474822998 33.66680526733398 C 4.504674911499023 33.66680526733398 3.720794677734375 33.95197296142578 3.088695526123047 34.49063491821289 C 2.242284774780273 35.21304321289062 1.746435165405273 36.23271560668945 1.692474365234375 37.36181259155273 C 1.638875961303711 38.48357391357422 2.045904159545898 39.57950592041016 2.80848503112793 40.36787414550781 L 10.27174949645996 48.07412719726562 L 17.7353458404541 40.36752319335938 C 18.49968528747559 39.5787353515625 18.90761566162109 38.48318481445312 18.85453414916992 37.36177444458008 C 18.80109596252441 36.23286437988281 18.30541610717773 35.21321487426758 17.45979499816895 34.49146270751953 C 16.82672500610352 33.95196533203125 16.04329490661621 33.66680526733398 15.19420528411865 33.66680526733398 C 14.12225532531738 33.66680526733398 13.06226539611816 34.12616348266602 12.28523540496826 34.92791366577148 L 10.2737455368042 37.00065231323242 L 8.26032543182373 34.92589569091797 C 7.48636531829834 34.12572479248047 6.427274703979492 33.66680526733398 5.35462474822998 33.66680526733398 M 5.354625701904297 31.96680068969727 C 6.852423667907715 31.96680068969727 8.36213493347168 32.58594131469727 9.482254981994629 33.74399566650391 L 10.27375507354736 34.55960464477539 L 11.06526470184326 33.74399566650391 C 13.08620452880859 31.65876007080078 16.36069488525391 31.32126617431641 18.56244468688965 33.19757461547852 C 21.08560562133789 35.35110473632812 21.21819496154785 39.21621322631836 18.95618438720703 41.55054473876953 L 11.18177509307861 49.57808685302734 C 10.67955589294434 50.09637069702148 9.863945960998535 50.09637451171875 9.361715316772461 49.57808685302734 L 1.587305068969727 41.55054473876953 C -0.670684814453125 39.21621322631836 -0.5381050109863281 35.35110473632812 1.985065460205078 33.19757461547852 C 2.964054107666016 32.3632926940918 4.155433654785156 31.96680068969727 5.354625701904297 31.96680068969727 Z" stroke="none" fill="#222"/>
    </g>
    </svg>

                            </Button>
                        </div>
                        </div>
                    </Card.Body>
                </Card>
            </SwiperSlide>
            <SwiperSlide>
                <Card
                    className={
                        styles["checkout__similar-courses__cards-carousel__course-card"]
                    }
                    >
                    <div
                        className={
                        styles[
                            "checkout__similar-courses__cards-carousel__course-card__category-chip"
                        ]
                        }
                    > 
                        الفنون 
                    </div>
                    <Card.Img
                        variant="top"
                        src="/images/course2cropped.png"
                        alt="course image"
                        className={
                        styles[
                            "checkout__similar-courses__cards-carousel__course-card__course-img"
                        ]
                        }
                    />
                    <Card.Body
                        className={
                        styles[
                            "checkout__similar-courses__cards-carousel__course-card__card-body"
                        ]
                        }
                    >
                        <div
                        className={
                            styles[
                            "checkout__similar-courses__cards-carousel__course-card__card-body__card-header"
                            ]
                        }
                        >
                        <div
                            className={
                            styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__card-header__trainer-img-box"
                            ]
                            }
                        >
                            <img
                            src="/images/trainer img.png"
                            alt="trainer image"
                            />
                        </div>
                        <div
                            className={
                            styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__card-header__course-details"
                            ]
                            }
                        >
                            <h1
                            className={
                                styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__card-header__course-details__title"
                                ]
                            }
                            >
                            إحتراف التصوير بالكاميرا
                            </h1>
                            <div
                            className={
                                styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__card-header__course-details__author"
                                ]
                            }
                            >
                            م. محمد مصطفي
                            </div>
                        </div>
                        </div>

                        <div
                        className={
                            styles[
                            "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details"
                            ]
                        }
                        >
                        <div className="d-inline-block">
                            <div
                            className={
                                styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__price-container"
                                ]
                            }
                            >
                            <span
                                className={
                                styles[
                                    "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__price-container__price"
                                ]
                                }
                            >
                                850
                            </span>
                            <span
                                className={
                                styles[
                                    "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__price-container__currency"
                                ]
                                }
                            >
                                جنية مصري
                            </span>
                            </div>
                            <div
                            className={
                                styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container"
                                ]
                            }
                            >
                            <span
                                className={
                                styles[
                                    "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__price"
                                ]
                                }
                            >
                                950
                            </span>
                            <span
                                className={
                                styles[
                                    "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__currency"
                                ]
                                }
                            >
                                جنية مصري
                            </span>
                            </div>
                        </div>

                        <div className="d-inline-block">
                            <Button
                            className={
                                styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                                ]
                            }
                            >
                            <svg className={styles["checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__cart-icon"]}  
                            xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 25 22.135">
                            <g id="add_to_cart" data-name="add to cart" transform="translate(-989 -650)">
                                <g id="Group_10771" data-name="Group 10771" transform="translate(1003.676 664.648)">
                                <g id="Group_9975" data-name="Group 9975" transform="translate(0 0)">
                                    <path id="Path_12759" data-name="Path 12759" d="M344.29,362.612a2.743,2.743,0,1,0,2.743,2.743A2.746,2.746,0,0,0,344.29,362.612Zm0,3.84a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,344.29,366.452Z" transform="translate(-341.547 -362.612)" fill="#222"/>
                                </g>
                                </g>
                                <g id="Group_10770" data-name="Group 10770" transform="translate(989 650)">
                                <g id="Group_9977" data-name="Group 9977" transform="translate(0 0)">
                                    <path id="Path_12760" data-name="Path 12760" d="M21.825,25.751a.822.822,0,0,0-.648-.316H5.08l-.741-3.1a.823.823,0,0,0-.8-.632H.823a.823.823,0,1,0,0,1.646H2.889L5.564,34.542a.823.823,0,0,0,.8.632H19.175a.823.823,0,0,0,.8-.625l2-8.092A.824.824,0,0,0,21.825,25.751Zm-3.294,7.776H7.014L5.473,27.082H20.126Z" transform="translate(0 -21.705)" fill="#222"/>
                                </g>
                                </g>
                                <g id="Group_10772" data-name="Group 10772" transform="translate(993.719 664.648)">
                                <g id="Group_9979" data-name="Group 9979" transform="translate(0 0)">
                                    <path id="Path_12761" data-name="Path 12761" d="M112.549,362.612a2.743,2.743,0,1,0,2.743,2.743A2.746,2.746,0,0,0,112.549,362.612Zm0,3.84a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,112.549,366.452Z" transform="translate(-109.806 -362.612)" fill="#222"/>
                                </g>
                                </g>
                            </g>
                            </svg>

                            </Button>
                            <Button
                            className={
                                styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                                ]
                            }
                            >
                            
                            <svg className={styles["checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__fav-icon"]} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20.571 18">
    <g id="favorite" transform="translate(0.012 -31.967)" fill="none">
        <path d="M18.562,33.2a5.494,5.494,0,0,0-7.5.546l-.792.816-.792-.816a5.494,5.494,0,0,0-7.5-.546,5.769,5.769,0,0,0-.4,8.353l7.774,8.028a1.26,1.26,0,0,0,1.82,0l7.774-8.028A5.766,5.766,0,0,0,18.562,33.2Z" stroke="none"/>
        <path d="M 5.35462474822998 33.66680526733398 C 4.504674911499023 33.66680526733398 3.720794677734375 33.95197296142578 3.088695526123047 34.49063491821289 C 2.242284774780273 35.21304321289062 1.746435165405273 36.23271560668945 1.692474365234375 37.36181259155273 C 1.638875961303711 38.48357391357422 2.045904159545898 39.57950592041016 2.80848503112793 40.36787414550781 L 10.27174949645996 48.07412719726562 L 17.7353458404541 40.36752319335938 C 18.49968528747559 39.5787353515625 18.90761566162109 38.48318481445312 18.85453414916992 37.36177444458008 C 18.80109596252441 36.23286437988281 18.30541610717773 35.21321487426758 17.45979499816895 34.49146270751953 C 16.82672500610352 33.95196533203125 16.04329490661621 33.66680526733398 15.19420528411865 33.66680526733398 C 14.12225532531738 33.66680526733398 13.06226539611816 34.12616348266602 12.28523540496826 34.92791366577148 L 10.2737455368042 37.00065231323242 L 8.26032543182373 34.92589569091797 C 7.48636531829834 34.12572479248047 6.427274703979492 33.66680526733398 5.35462474822998 33.66680526733398 M 5.354625701904297 31.96680068969727 C 6.852423667907715 31.96680068969727 8.36213493347168 32.58594131469727 9.482254981994629 33.74399566650391 L 10.27375507354736 34.55960464477539 L 11.06526470184326 33.74399566650391 C 13.08620452880859 31.65876007080078 16.36069488525391 31.32126617431641 18.56244468688965 33.19757461547852 C 21.08560562133789 35.35110473632812 21.21819496154785 39.21621322631836 18.95618438720703 41.55054473876953 L 11.18177509307861 49.57808685302734 C 10.67955589294434 50.09637069702148 9.863945960998535 50.09637451171875 9.361715316772461 49.57808685302734 L 1.587305068969727 41.55054473876953 C -0.670684814453125 39.21621322631836 -0.5381050109863281 35.35110473632812 1.985065460205078 33.19757461547852 C 2.964054107666016 32.3632926940918 4.155433654785156 31.96680068969727 5.354625701904297 31.96680068969727 Z" stroke="none" fill="#222"/>
    </g>
    </svg>

                            </Button>
                        </div>
                        </div>
                    </Card.Body>
                </Card>
            </SwiperSlide>
            <SwiperSlide>
                <Card
                    className={
                        styles["checkout__similar-courses__cards-carousel__course-card"]
                    }
                    >
                    <div
                        className={
                        styles[
                            "checkout__similar-courses__cards-carousel__course-card__category-chip"
                        ]
                        }
                    > 
                        الفنون 
                    </div>
                    <Card.Img
                        variant="top"
                        src="/images/course2cropped.png"
                        alt="course image"
                        className={
                        styles[
                            "checkout__similar-courses__cards-carousel__course-card__course-img"
                        ]
                        }
                    />
                    <Card.Body
                        className={
                        styles[
                            "checkout__similar-courses__cards-carousel__course-card__card-body"
                        ]
                        }
                    >
                        <div
                        className={
                            styles[
                            "checkout__similar-courses__cards-carousel__course-card__card-body__card-header"
                            ]
                        }
                        >
                        <div
                            className={
                            styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__card-header__trainer-img-box"
                            ]
                            }
                        >
                            <img
                            src="/images/trainer img.png"
                            alt="trainer image"
                            />
                        </div>
                        <div
                            className={
                            styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__card-header__course-details"
                            ]
                            }
                        >
                            <h1
                            className={
                                styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__card-header__course-details__title"
                                ]
                            }
                            >
                            إحتراف التصوير بالكاميرا
                            </h1>
                            <div
                            className={
                                styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__card-header__course-details__author"
                                ]
                            }
                            >
                            م. محمد مصطفي
                            </div>
                        </div>
                        </div>

                        <div
                        className={
                            styles[
                            "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details"
                            ]
                        }
                        >
                        <div className="d-inline-block">
                            <div
                            className={
                                styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__price-container"
                                ]
                            }
                            >
                            <span
                                className={
                                styles[
                                    "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__price-container__price"
                                ]
                                }
                            >
                                850
                            </span>
                            <span
                                className={
                                styles[
                                    "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__price-container__currency"
                                ]
                                }
                            >
                                جنية مصري
                            </span>
                            </div>
                            <div
                            className={
                                styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container"
                                ]
                            }
                            >
                            <span
                                className={
                                styles[
                                    "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__price"
                                ]
                                }
                            >
                                950
                            </span>
                            <span
                                className={
                                styles[
                                    "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__currency"
                                ]
                                }
                            >
                                جنية مصري
                            </span>
                            </div>
                        </div>

                        <div className="d-inline-block">
                            <Button
                            className={
                                styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                                ]
                            }
                            >
                            <svg className={styles["checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__cart-icon"]}  
                            xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 25 22.135">
                            <g id="add_to_cart" data-name="add to cart" transform="translate(-989 -650)">
                                <g id="Group_10771" data-name="Group 10771" transform="translate(1003.676 664.648)">
                                <g id="Group_9975" data-name="Group 9975" transform="translate(0 0)">
                                    <path id="Path_12759" data-name="Path 12759" d="M344.29,362.612a2.743,2.743,0,1,0,2.743,2.743A2.746,2.746,0,0,0,344.29,362.612Zm0,3.84a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,344.29,366.452Z" transform="translate(-341.547 -362.612)" fill="#222"/>
                                </g>
                                </g>
                                <g id="Group_10770" data-name="Group 10770" transform="translate(989 650)">
                                <g id="Group_9977" data-name="Group 9977" transform="translate(0 0)">
                                    <path id="Path_12760" data-name="Path 12760" d="M21.825,25.751a.822.822,0,0,0-.648-.316H5.08l-.741-3.1a.823.823,0,0,0-.8-.632H.823a.823.823,0,1,0,0,1.646H2.889L5.564,34.542a.823.823,0,0,0,.8.632H19.175a.823.823,0,0,0,.8-.625l2-8.092A.824.824,0,0,0,21.825,25.751Zm-3.294,7.776H7.014L5.473,27.082H20.126Z" transform="translate(0 -21.705)" fill="#222"/>
                                </g>
                                </g>
                                <g id="Group_10772" data-name="Group 10772" transform="translate(993.719 664.648)">
                                <g id="Group_9979" data-name="Group 9979" transform="translate(0 0)">
                                    <path id="Path_12761" data-name="Path 12761" d="M112.549,362.612a2.743,2.743,0,1,0,2.743,2.743A2.746,2.746,0,0,0,112.549,362.612Zm0,3.84a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,112.549,366.452Z" transform="translate(-109.806 -362.612)" fill="#222"/>
                                </g>
                                </g>
                            </g>
                            </svg>

                            </Button>
                            <Button
                            className={
                                styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                                ]
                            }
                            >
                            
                            <svg className={styles["checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__fav-icon"]} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20.571 18">
    <g id="favorite" transform="translate(0.012 -31.967)" fill="none">
        <path d="M18.562,33.2a5.494,5.494,0,0,0-7.5.546l-.792.816-.792-.816a5.494,5.494,0,0,0-7.5-.546,5.769,5.769,0,0,0-.4,8.353l7.774,8.028a1.26,1.26,0,0,0,1.82,0l7.774-8.028A5.766,5.766,0,0,0,18.562,33.2Z" stroke="none"/>
        <path d="M 5.35462474822998 33.66680526733398 C 4.504674911499023 33.66680526733398 3.720794677734375 33.95197296142578 3.088695526123047 34.49063491821289 C 2.242284774780273 35.21304321289062 1.746435165405273 36.23271560668945 1.692474365234375 37.36181259155273 C 1.638875961303711 38.48357391357422 2.045904159545898 39.57950592041016 2.80848503112793 40.36787414550781 L 10.27174949645996 48.07412719726562 L 17.7353458404541 40.36752319335938 C 18.49968528747559 39.5787353515625 18.90761566162109 38.48318481445312 18.85453414916992 37.36177444458008 C 18.80109596252441 36.23286437988281 18.30541610717773 35.21321487426758 17.45979499816895 34.49146270751953 C 16.82672500610352 33.95196533203125 16.04329490661621 33.66680526733398 15.19420528411865 33.66680526733398 C 14.12225532531738 33.66680526733398 13.06226539611816 34.12616348266602 12.28523540496826 34.92791366577148 L 10.2737455368042 37.00065231323242 L 8.26032543182373 34.92589569091797 C 7.48636531829834 34.12572479248047 6.427274703979492 33.66680526733398 5.35462474822998 33.66680526733398 M 5.354625701904297 31.96680068969727 C 6.852423667907715 31.96680068969727 8.36213493347168 32.58594131469727 9.482254981994629 33.74399566650391 L 10.27375507354736 34.55960464477539 L 11.06526470184326 33.74399566650391 C 13.08620452880859 31.65876007080078 16.36069488525391 31.32126617431641 18.56244468688965 33.19757461547852 C 21.08560562133789 35.35110473632812 21.21819496154785 39.21621322631836 18.95618438720703 41.55054473876953 L 11.18177509307861 49.57808685302734 C 10.67955589294434 50.09637069702148 9.863945960998535 50.09637451171875 9.361715316772461 49.57808685302734 L 1.587305068969727 41.55054473876953 C -0.670684814453125 39.21621322631836 -0.5381050109863281 35.35110473632812 1.985065460205078 33.19757461547852 C 2.964054107666016 32.3632926940918 4.155433654785156 31.96680068969727 5.354625701904297 31.96680068969727 Z" stroke="none" fill="#222"/>
    </g>
    </svg>

                            </Button>
                        </div>
                        </div>
                    </Card.Body>
                </Card>
            </SwiperSlide>
            <SwiperSlide>
                <Card
                    className={
                        styles["checkout__similar-courses__cards-carousel__course-card"]
                    }
                    >
                    <div
                        className={
                        styles[
                            "checkout__similar-courses__cards-carousel__course-card__category-chip"
                        ]
                        }
                    > 
                        الفنون 
                    </div>
                    <Card.Img
                        variant="top"
                        src="/images/course2cropped.png"
                        alt="course image"
                        className={
                        styles[
                            "checkout__similar-courses__cards-carousel__course-card__course-img"
                        ]
                        }
                    />
                    <Card.Body
                        className={
                        styles[
                            "checkout__similar-courses__cards-carousel__course-card__card-body"
                        ]
                        }
                    >
                        <div
                        className={
                            styles[
                            "checkout__similar-courses__cards-carousel__course-card__card-body__card-header"
                            ]
                        }
                        >
                        <div
                            className={
                            styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__card-header__trainer-img-box"
                            ]
                            }
                        >
                            <img
                            src="/images/trainer img.png"
                            alt="trainer image"
                            />
                        </div>
                        <div
                            className={
                            styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__card-header__course-details"
                            ]
                            }
                        >
                            <h1
                            className={
                                styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__card-header__course-details__title"
                                ]
                            }
                            >
                            إحتراف التصوير بالكاميرا
                            </h1>
                            <div
                            className={
                                styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__card-header__course-details__author"
                                ]
                            }
                            >
                            م. محمد مصطفي
                            </div>
                        </div>
                        </div>

                        <div
                        className={
                            styles[
                            "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details"
                            ]
                        }
                        >
                        <div className="d-inline-block">
                            <div
                            className={
                                styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__price-container"
                                ]
                            }
                            >
                            <span
                                className={
                                styles[
                                    "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__price-container__price"
                                ]
                                }
                            >
                                850
                            </span>
                            <span
                                className={
                                styles[
                                    "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__price-container__currency"
                                ]
                                }
                            >
                                جنية مصري
                            </span>
                            </div>
                            <div
                            className={
                                styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container"
                                ]
                            }
                            >
                            <span
                                className={
                                styles[
                                    "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__price"
                                ]
                                }
                            >
                                950
                            </span>
                            <span
                                className={
                                styles[
                                    "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__currency"
                                ]
                                }
                            >
                                جنية مصري
                            </span>
                            </div>
                        </div>

                        <div className="d-inline-block">
                            <Button
                            className={
                                styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                                ]
                            }
                            >
                            <svg className={styles["checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__cart-icon"]}  
                            xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 25 22.135">
                            <g id="add_to_cart" data-name="add to cart" transform="translate(-989 -650)">
                                <g id="Group_10771" data-name="Group 10771" transform="translate(1003.676 664.648)">
                                <g id="Group_9975" data-name="Group 9975" transform="translate(0 0)">
                                    <path id="Path_12759" data-name="Path 12759" d="M344.29,362.612a2.743,2.743,0,1,0,2.743,2.743A2.746,2.746,0,0,0,344.29,362.612Zm0,3.84a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,344.29,366.452Z" transform="translate(-341.547 -362.612)" fill="#222"/>
                                </g>
                                </g>
                                <g id="Group_10770" data-name="Group 10770" transform="translate(989 650)">
                                <g id="Group_9977" data-name="Group 9977" transform="translate(0 0)">
                                    <path id="Path_12760" data-name="Path 12760" d="M21.825,25.751a.822.822,0,0,0-.648-.316H5.08l-.741-3.1a.823.823,0,0,0-.8-.632H.823a.823.823,0,1,0,0,1.646H2.889L5.564,34.542a.823.823,0,0,0,.8.632H19.175a.823.823,0,0,0,.8-.625l2-8.092A.824.824,0,0,0,21.825,25.751Zm-3.294,7.776H7.014L5.473,27.082H20.126Z" transform="translate(0 -21.705)" fill="#222"/>
                                </g>
                                </g>
                                <g id="Group_10772" data-name="Group 10772" transform="translate(993.719 664.648)">
                                <g id="Group_9979" data-name="Group 9979" transform="translate(0 0)">
                                    <path id="Path_12761" data-name="Path 12761" d="M112.549,362.612a2.743,2.743,0,1,0,2.743,2.743A2.746,2.746,0,0,0,112.549,362.612Zm0,3.84a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,112.549,366.452Z" transform="translate(-109.806 -362.612)" fill="#222"/>
                                </g>
                                </g>
                            </g>
                            </svg>

                            </Button>
                            <Button
                            className={
                                styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                                ]
                            }
                            >
                            
                            <svg className={styles["checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__fav-icon"]} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20.571 18">
    <g id="favorite" transform="translate(0.012 -31.967)" fill="none">
        <path d="M18.562,33.2a5.494,5.494,0,0,0-7.5.546l-.792.816-.792-.816a5.494,5.494,0,0,0-7.5-.546,5.769,5.769,0,0,0-.4,8.353l7.774,8.028a1.26,1.26,0,0,0,1.82,0l7.774-8.028A5.766,5.766,0,0,0,18.562,33.2Z" stroke="none"/>
        <path d="M 5.35462474822998 33.66680526733398 C 4.504674911499023 33.66680526733398 3.720794677734375 33.95197296142578 3.088695526123047 34.49063491821289 C 2.242284774780273 35.21304321289062 1.746435165405273 36.23271560668945 1.692474365234375 37.36181259155273 C 1.638875961303711 38.48357391357422 2.045904159545898 39.57950592041016 2.80848503112793 40.36787414550781 L 10.27174949645996 48.07412719726562 L 17.7353458404541 40.36752319335938 C 18.49968528747559 39.5787353515625 18.90761566162109 38.48318481445312 18.85453414916992 37.36177444458008 C 18.80109596252441 36.23286437988281 18.30541610717773 35.21321487426758 17.45979499816895 34.49146270751953 C 16.82672500610352 33.95196533203125 16.04329490661621 33.66680526733398 15.19420528411865 33.66680526733398 C 14.12225532531738 33.66680526733398 13.06226539611816 34.12616348266602 12.28523540496826 34.92791366577148 L 10.2737455368042 37.00065231323242 L 8.26032543182373 34.92589569091797 C 7.48636531829834 34.12572479248047 6.427274703979492 33.66680526733398 5.35462474822998 33.66680526733398 M 5.354625701904297 31.96680068969727 C 6.852423667907715 31.96680068969727 8.36213493347168 32.58594131469727 9.482254981994629 33.74399566650391 L 10.27375507354736 34.55960464477539 L 11.06526470184326 33.74399566650391 C 13.08620452880859 31.65876007080078 16.36069488525391 31.32126617431641 18.56244468688965 33.19757461547852 C 21.08560562133789 35.35110473632812 21.21819496154785 39.21621322631836 18.95618438720703 41.55054473876953 L 11.18177509307861 49.57808685302734 C 10.67955589294434 50.09637069702148 9.863945960998535 50.09637451171875 9.361715316772461 49.57808685302734 L 1.587305068969727 41.55054473876953 C -0.670684814453125 39.21621322631836 -0.5381050109863281 35.35110473632812 1.985065460205078 33.19757461547852 C 2.964054107666016 32.3632926940918 4.155433654785156 31.96680068969727 5.354625701904297 31.96680068969727 Z" stroke="none" fill="#222"/>
    </g>
    </svg>

                            </Button>
                        </div>
                        </div>
                    </Card.Body>
                </Card>
            </SwiperSlide>
            <SwiperSlide>
                <Card
                    className={
                        styles["checkout__similar-courses__cards-carousel__course-card"]
                    }
                    >
                    <div
                        className={
                        styles[
                            "checkout__similar-courses__cards-carousel__course-card__category-chip"
                        ]
                        }
                    > 
                        الفنون 
                    </div>
                    <Card.Img
                        variant="top"
                        src="/images/course2cropped.png"
                        alt="course image"
                        className={
                        styles[
                            "checkout__similar-courses__cards-carousel__course-card__course-img"
                        ]
                        }
                    />
                    <Card.Body
                        className={
                        styles[
                            "checkout__similar-courses__cards-carousel__course-card__card-body"
                        ]
                        }
                    >
                        <div
                        className={
                            styles[
                            "checkout__similar-courses__cards-carousel__course-card__card-body__card-header"
                            ]
                        }
                        >
                        <div
                            className={
                            styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__card-header__trainer-img-box"
                            ]
                            }
                        >
                            <img
                            src="/images/trainer img.png"
                            alt="trainer image"
                            />
                        </div>
                        <div
                            className={
                            styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__card-header__course-details"
                            ]
                            }
                        >
                            <h1
                            className={
                                styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__card-header__course-details__title"
                                ]
                            }
                            >
                            إحتراف التصوير بالكاميرا
                            </h1>
                            <div
                            className={
                                styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__card-header__course-details__author"
                                ]
                            }
                            >
                            م. محمد مصطفي
                            </div>
                        </div>
                        </div>

                        <div
                        className={
                            styles[
                            "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details"
                            ]
                        }
                        >
                        <div className="d-inline-block">
                            <div
                            className={
                                styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__price-container"
                                ]
                            }
                            >
                            <span
                                className={
                                styles[
                                    "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__price-container__price"
                                ]
                                }
                            >
                                850
                            </span>
                            <span
                                className={
                                styles[
                                    "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__price-container__currency"
                                ]
                                }
                            >
                                جنية مصري
                            </span>
                            </div>
                            <div
                            className={
                                styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container"
                                ]
                            }
                            >
                            <span
                                className={
                                styles[
                                    "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__price"
                                ]
                                }
                            >
                                950
                            </span>
                            <span
                                className={
                                styles[
                                    "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__currency"
                                ]
                                }
                            >
                                جنية مصري
                            </span>
                            </div>
                        </div>

                        <div className="d-inline-block">
                            <Button
                            className={
                                styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                                ]
                            }
                            >
                            <svg className={styles["checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__cart-icon"]}  
                            xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 25 22.135">
                            <g id="add_to_cart" data-name="add to cart" transform="translate(-989 -650)">
                                <g id="Group_10771" data-name="Group 10771" transform="translate(1003.676 664.648)">
                                <g id="Group_9975" data-name="Group 9975" transform="translate(0 0)">
                                    <path id="Path_12759" data-name="Path 12759" d="M344.29,362.612a2.743,2.743,0,1,0,2.743,2.743A2.746,2.746,0,0,0,344.29,362.612Zm0,3.84a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,344.29,366.452Z" transform="translate(-341.547 -362.612)" fill="#222"/>
                                </g>
                                </g>
                                <g id="Group_10770" data-name="Group 10770" transform="translate(989 650)">
                                <g id="Group_9977" data-name="Group 9977" transform="translate(0 0)">
                                    <path id="Path_12760" data-name="Path 12760" d="M21.825,25.751a.822.822,0,0,0-.648-.316H5.08l-.741-3.1a.823.823,0,0,0-.8-.632H.823a.823.823,0,1,0,0,1.646H2.889L5.564,34.542a.823.823,0,0,0,.8.632H19.175a.823.823,0,0,0,.8-.625l2-8.092A.824.824,0,0,0,21.825,25.751Zm-3.294,7.776H7.014L5.473,27.082H20.126Z" transform="translate(0 -21.705)" fill="#222"/>
                                </g>
                                </g>
                                <g id="Group_10772" data-name="Group 10772" transform="translate(993.719 664.648)">
                                <g id="Group_9979" data-name="Group 9979" transform="translate(0 0)">
                                    <path id="Path_12761" data-name="Path 12761" d="M112.549,362.612a2.743,2.743,0,1,0,2.743,2.743A2.746,2.746,0,0,0,112.549,362.612Zm0,3.84a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,112.549,366.452Z" transform="translate(-109.806 -362.612)" fill="#222"/>
                                </g>
                                </g>
                            </g>
                            </svg>

                            </Button>
                            <Button
                            className={
                                styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                                ]
                            }
                            >
                            
                            <svg className={styles["checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__fav-icon"]} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20.571 18">
    <g id="favorite" transform="translate(0.012 -31.967)" fill="none">
        <path d="M18.562,33.2a5.494,5.494,0,0,0-7.5.546l-.792.816-.792-.816a5.494,5.494,0,0,0-7.5-.546,5.769,5.769,0,0,0-.4,8.353l7.774,8.028a1.26,1.26,0,0,0,1.82,0l7.774-8.028A5.766,5.766,0,0,0,18.562,33.2Z" stroke="none"/>
        <path d="M 5.35462474822998 33.66680526733398 C 4.504674911499023 33.66680526733398 3.720794677734375 33.95197296142578 3.088695526123047 34.49063491821289 C 2.242284774780273 35.21304321289062 1.746435165405273 36.23271560668945 1.692474365234375 37.36181259155273 C 1.638875961303711 38.48357391357422 2.045904159545898 39.57950592041016 2.80848503112793 40.36787414550781 L 10.27174949645996 48.07412719726562 L 17.7353458404541 40.36752319335938 C 18.49968528747559 39.5787353515625 18.90761566162109 38.48318481445312 18.85453414916992 37.36177444458008 C 18.80109596252441 36.23286437988281 18.30541610717773 35.21321487426758 17.45979499816895 34.49146270751953 C 16.82672500610352 33.95196533203125 16.04329490661621 33.66680526733398 15.19420528411865 33.66680526733398 C 14.12225532531738 33.66680526733398 13.06226539611816 34.12616348266602 12.28523540496826 34.92791366577148 L 10.2737455368042 37.00065231323242 L 8.26032543182373 34.92589569091797 C 7.48636531829834 34.12572479248047 6.427274703979492 33.66680526733398 5.35462474822998 33.66680526733398 M 5.354625701904297 31.96680068969727 C 6.852423667907715 31.96680068969727 8.36213493347168 32.58594131469727 9.482254981994629 33.74399566650391 L 10.27375507354736 34.55960464477539 L 11.06526470184326 33.74399566650391 C 13.08620452880859 31.65876007080078 16.36069488525391 31.32126617431641 18.56244468688965 33.19757461547852 C 21.08560562133789 35.35110473632812 21.21819496154785 39.21621322631836 18.95618438720703 41.55054473876953 L 11.18177509307861 49.57808685302734 C 10.67955589294434 50.09637069702148 9.863945960998535 50.09637451171875 9.361715316772461 49.57808685302734 L 1.587305068969727 41.55054473876953 C -0.670684814453125 39.21621322631836 -0.5381050109863281 35.35110473632812 1.985065460205078 33.19757461547852 C 2.964054107666016 32.3632926940918 4.155433654785156 31.96680068969727 5.354625701904297 31.96680068969727 Z" stroke="none" fill="#222"/>
    </g>
    </svg>

                            </Button>
                        </div>
                        </div>
                    </Card.Body>
                </Card>
            </SwiperSlide>
            <SwiperSlide>
                <Card
                    className={
                        styles["checkout__similar-courses__cards-carousel__course-card"]
                    }
                    >
                    <div
                        className={
                        styles[
                            "checkout__similar-courses__cards-carousel__course-card__category-chip"
                        ]
                        }
                    > 
                        الفنون 
                    </div>
                    <Card.Img
                        variant="top"
                        src="/images/course2cropped.png"
                        alt="course image"
                        className={
                        styles[
                            "checkout__similar-courses__cards-carousel__course-card__course-img"
                        ]
                        }
                    />
                    <Card.Body
                        className={
                        styles[
                            "checkout__similar-courses__cards-carousel__course-card__card-body"
                        ]
                        }
                    >
                        <div
                        className={
                            styles[
                            "checkout__similar-courses__cards-carousel__course-card__card-body__card-header"
                            ]
                        }
                        >
                        <div
                            className={
                            styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__card-header__trainer-img-box"
                            ]
                            }
                        >
                            <img
                            src="/images/trainer img.png"
                            alt="trainer image"
                            />
                        </div>
                        <div
                            className={
                            styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__card-header__course-details"
                            ]
                            }
                        >
                            <h1
                            className={
                                styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__card-header__course-details__title"
                                ]
                            }
                            >
                            إحتراف التصوير بالكاميرا
                            </h1>
                            <div
                            className={
                                styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__card-header__course-details__author"
                                ]
                            }
                            >
                            م. محمد مصطفي
                            </div>
                        </div>
                        </div>

                        <div
                        className={
                            styles[
                            "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details"
                            ]
                        }
                        >
                        <div className="d-inline-block">
                            <div
                            className={
                                styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__price-container"
                                ]
                            }
                            >
                            <span
                                className={
                                styles[
                                    "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__price-container__price"
                                ]
                                }
                            >
                                850
                            </span>
                            <span
                                className={
                                styles[
                                    "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__price-container__currency"
                                ]
                                }
                            >
                                جنية مصري
                            </span>
                            </div>
                            <div
                            className={
                                styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container"
                                ]
                            }
                            >
                            <span
                                className={
                                styles[
                                    "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__price"
                                ]
                                }
                            >
                                950
                            </span>
                            <span
                                className={
                                styles[
                                    "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__currency"
                                ]
                                }
                            >
                                جنية مصري
                            </span>
                            </div>
                        </div>

                        <div className="d-inline-block">
                            <Button
                            className={
                                styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                                ]
                            }
                            >
                            <svg className={styles["checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__cart-icon"]}  
                            xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 25 22.135">
                            <g id="add_to_cart" data-name="add to cart" transform="translate(-989 -650)">
                                <g id="Group_10771" data-name="Group 10771" transform="translate(1003.676 664.648)">
                                <g id="Group_9975" data-name="Group 9975" transform="translate(0 0)">
                                    <path id="Path_12759" data-name="Path 12759" d="M344.29,362.612a2.743,2.743,0,1,0,2.743,2.743A2.746,2.746,0,0,0,344.29,362.612Zm0,3.84a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,344.29,366.452Z" transform="translate(-341.547 -362.612)" fill="#222"/>
                                </g>
                                </g>
                                <g id="Group_10770" data-name="Group 10770" transform="translate(989 650)">
                                <g id="Group_9977" data-name="Group 9977" transform="translate(0 0)">
                                    <path id="Path_12760" data-name="Path 12760" d="M21.825,25.751a.822.822,0,0,0-.648-.316H5.08l-.741-3.1a.823.823,0,0,0-.8-.632H.823a.823.823,0,1,0,0,1.646H2.889L5.564,34.542a.823.823,0,0,0,.8.632H19.175a.823.823,0,0,0,.8-.625l2-8.092A.824.824,0,0,0,21.825,25.751Zm-3.294,7.776H7.014L5.473,27.082H20.126Z" transform="translate(0 -21.705)" fill="#222"/>
                                </g>
                                </g>
                                <g id="Group_10772" data-name="Group 10772" transform="translate(993.719 664.648)">
                                <g id="Group_9979" data-name="Group 9979" transform="translate(0 0)">
                                    <path id="Path_12761" data-name="Path 12761" d="M112.549,362.612a2.743,2.743,0,1,0,2.743,2.743A2.746,2.746,0,0,0,112.549,362.612Zm0,3.84a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,112.549,366.452Z" transform="translate(-109.806 -362.612)" fill="#222"/>
                                </g>
                                </g>
                            </g>
                            </svg>

                            </Button>
                            <Button
                            className={
                                styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                                ]
                            }
                            >
                            
                            <svg className={styles["checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__fav-icon"]} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20.571 18">
    <g id="favorite" transform="translate(0.012 -31.967)" fill="none">
        <path d="M18.562,33.2a5.494,5.494,0,0,0-7.5.546l-.792.816-.792-.816a5.494,5.494,0,0,0-7.5-.546,5.769,5.769,0,0,0-.4,8.353l7.774,8.028a1.26,1.26,0,0,0,1.82,0l7.774-8.028A5.766,5.766,0,0,0,18.562,33.2Z" stroke="none"/>
        <path d="M 5.35462474822998 33.66680526733398 C 4.504674911499023 33.66680526733398 3.720794677734375 33.95197296142578 3.088695526123047 34.49063491821289 C 2.242284774780273 35.21304321289062 1.746435165405273 36.23271560668945 1.692474365234375 37.36181259155273 C 1.638875961303711 38.48357391357422 2.045904159545898 39.57950592041016 2.80848503112793 40.36787414550781 L 10.27174949645996 48.07412719726562 L 17.7353458404541 40.36752319335938 C 18.49968528747559 39.5787353515625 18.90761566162109 38.48318481445312 18.85453414916992 37.36177444458008 C 18.80109596252441 36.23286437988281 18.30541610717773 35.21321487426758 17.45979499816895 34.49146270751953 C 16.82672500610352 33.95196533203125 16.04329490661621 33.66680526733398 15.19420528411865 33.66680526733398 C 14.12225532531738 33.66680526733398 13.06226539611816 34.12616348266602 12.28523540496826 34.92791366577148 L 10.2737455368042 37.00065231323242 L 8.26032543182373 34.92589569091797 C 7.48636531829834 34.12572479248047 6.427274703979492 33.66680526733398 5.35462474822998 33.66680526733398 M 5.354625701904297 31.96680068969727 C 6.852423667907715 31.96680068969727 8.36213493347168 32.58594131469727 9.482254981994629 33.74399566650391 L 10.27375507354736 34.55960464477539 L 11.06526470184326 33.74399566650391 C 13.08620452880859 31.65876007080078 16.36069488525391 31.32126617431641 18.56244468688965 33.19757461547852 C 21.08560562133789 35.35110473632812 21.21819496154785 39.21621322631836 18.95618438720703 41.55054473876953 L 11.18177509307861 49.57808685302734 C 10.67955589294434 50.09637069702148 9.863945960998535 50.09637451171875 9.361715316772461 49.57808685302734 L 1.587305068969727 41.55054473876953 C -0.670684814453125 39.21621322631836 -0.5381050109863281 35.35110473632812 1.985065460205078 33.19757461547852 C 2.964054107666016 32.3632926940918 4.155433654785156 31.96680068969727 5.354625701904297 31.96680068969727 Z" stroke="none" fill="#222"/>
    </g>
    </svg>

                            </Button>
                        </div>
                        </div>
                    </Card.Body>
                </Card>
            </SwiperSlide>
            <SwiperSlide>
                <Card
                    className={
                        styles["checkout__similar-courses__cards-carousel__course-card"]
                    }
                    >
                    <div
                        className={
                        styles[
                            "checkout__similar-courses__cards-carousel__course-card__category-chip"
                        ]
                        }
                    > 
                        الفنون 
                    </div>
                    <Card.Img
                        variant="top"
                        src="/images/course2cropped.png"
                        alt="course image"
                        className={
                        styles[
                            "checkout__similar-courses__cards-carousel__course-card__course-img"
                        ]
                        }
                    />
                    <Card.Body
                        className={
                        styles[
                            "checkout__similar-courses__cards-carousel__course-card__card-body"
                        ]
                        }
                    >
                        <div
                        className={
                            styles[
                            "checkout__similar-courses__cards-carousel__course-card__card-body__card-header"
                            ]
                        }
                        >
                        <div
                            className={
                            styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__card-header__trainer-img-box"
                            ]
                            }
                        >
                            <img
                            src="/images/trainer img.png"
                            alt="trainer image"
                            />
                        </div>
                        <div
                            className={
                            styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__card-header__course-details"
                            ]
                            }
                        >
                            <h1
                            className={
                                styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__card-header__course-details__title"
                                ]
                            }
                            >
                            إحتراف التصوير بالكاميرا
                            </h1>
                            <div
                            className={
                                styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__card-header__course-details__author"
                                ]
                            }
                            >
                            م. محمد مصطفي
                            </div>
                        </div>
                        </div>

                        <div
                        className={
                            styles[
                            "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details"
                            ]
                        }
                        >
                        <div className="d-inline-block">
                            <div
                            className={
                                styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__price-container"
                                ]
                            }
                            >
                            <span
                                className={
                                styles[
                                    "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__price-container__price"
                                ]
                                }
                            >
                                850
                            </span>
                            <span
                                className={
                                styles[
                                    "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__price-container__currency"
                                ]
                                }
                            >
                                جنية مصري
                            </span>
                            </div>
                            <div
                            className={
                                styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container"
                                ]
                            }
                            >
                            <span
                                className={
                                styles[
                                    "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__price"
                                ]
                                }
                            >
                                950
                            </span>
                            <span
                                className={
                                styles[
                                    "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__currency"
                                ]
                                }
                            >
                                جنية مصري
                            </span>
                            </div>
                        </div>

                        <div className="d-inline-block">
                            <Button
                            className={
                                styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                                ]
                            }
                            >
                            <svg className={styles["checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__cart-icon"]}  
                            xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 25 22.135">
                            <g id="add_to_cart" data-name="add to cart" transform="translate(-989 -650)">
                                <g id="Group_10771" data-name="Group 10771" transform="translate(1003.676 664.648)">
                                <g id="Group_9975" data-name="Group 9975" transform="translate(0 0)">
                                    <path id="Path_12759" data-name="Path 12759" d="M344.29,362.612a2.743,2.743,0,1,0,2.743,2.743A2.746,2.746,0,0,0,344.29,362.612Zm0,3.84a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,344.29,366.452Z" transform="translate(-341.547 -362.612)" fill="#222"/>
                                </g>
                                </g>
                                <g id="Group_10770" data-name="Group 10770" transform="translate(989 650)">
                                <g id="Group_9977" data-name="Group 9977" transform="translate(0 0)">
                                    <path id="Path_12760" data-name="Path 12760" d="M21.825,25.751a.822.822,0,0,0-.648-.316H5.08l-.741-3.1a.823.823,0,0,0-.8-.632H.823a.823.823,0,1,0,0,1.646H2.889L5.564,34.542a.823.823,0,0,0,.8.632H19.175a.823.823,0,0,0,.8-.625l2-8.092A.824.824,0,0,0,21.825,25.751Zm-3.294,7.776H7.014L5.473,27.082H20.126Z" transform="translate(0 -21.705)" fill="#222"/>
                                </g>
                                </g>
                                <g id="Group_10772" data-name="Group 10772" transform="translate(993.719 664.648)">
                                <g id="Group_9979" data-name="Group 9979" transform="translate(0 0)">
                                    <path id="Path_12761" data-name="Path 12761" d="M112.549,362.612a2.743,2.743,0,1,0,2.743,2.743A2.746,2.746,0,0,0,112.549,362.612Zm0,3.84a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,112.549,366.452Z" transform="translate(-109.806 -362.612)" fill="#222"/>
                                </g>
                                </g>
                            </g>
                            </svg>

                            </Button>
                            <Button
                            className={
                                styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                                ]
                            }
                            >
                            
                            <svg className={styles["checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__fav-icon"]} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20.571 18">
    <g id="favorite" transform="translate(0.012 -31.967)" fill="none">
        <path d="M18.562,33.2a5.494,5.494,0,0,0-7.5.546l-.792.816-.792-.816a5.494,5.494,0,0,0-7.5-.546,5.769,5.769,0,0,0-.4,8.353l7.774,8.028a1.26,1.26,0,0,0,1.82,0l7.774-8.028A5.766,5.766,0,0,0,18.562,33.2Z" stroke="none"/>
        <path d="M 5.35462474822998 33.66680526733398 C 4.504674911499023 33.66680526733398 3.720794677734375 33.95197296142578 3.088695526123047 34.49063491821289 C 2.242284774780273 35.21304321289062 1.746435165405273 36.23271560668945 1.692474365234375 37.36181259155273 C 1.638875961303711 38.48357391357422 2.045904159545898 39.57950592041016 2.80848503112793 40.36787414550781 L 10.27174949645996 48.07412719726562 L 17.7353458404541 40.36752319335938 C 18.49968528747559 39.5787353515625 18.90761566162109 38.48318481445312 18.85453414916992 37.36177444458008 C 18.80109596252441 36.23286437988281 18.30541610717773 35.21321487426758 17.45979499816895 34.49146270751953 C 16.82672500610352 33.95196533203125 16.04329490661621 33.66680526733398 15.19420528411865 33.66680526733398 C 14.12225532531738 33.66680526733398 13.06226539611816 34.12616348266602 12.28523540496826 34.92791366577148 L 10.2737455368042 37.00065231323242 L 8.26032543182373 34.92589569091797 C 7.48636531829834 34.12572479248047 6.427274703979492 33.66680526733398 5.35462474822998 33.66680526733398 M 5.354625701904297 31.96680068969727 C 6.852423667907715 31.96680068969727 8.36213493347168 32.58594131469727 9.482254981994629 33.74399566650391 L 10.27375507354736 34.55960464477539 L 11.06526470184326 33.74399566650391 C 13.08620452880859 31.65876007080078 16.36069488525391 31.32126617431641 18.56244468688965 33.19757461547852 C 21.08560562133789 35.35110473632812 21.21819496154785 39.21621322631836 18.95618438720703 41.55054473876953 L 11.18177509307861 49.57808685302734 C 10.67955589294434 50.09637069702148 9.863945960998535 50.09637451171875 9.361715316772461 49.57808685302734 L 1.587305068969727 41.55054473876953 C -0.670684814453125 39.21621322631836 -0.5381050109863281 35.35110473632812 1.985065460205078 33.19757461547852 C 2.964054107666016 32.3632926940918 4.155433654785156 31.96680068969727 5.354625701904297 31.96680068969727 Z" stroke="none" fill="#222"/>
    </g>
    </svg>

                            </Button>
                        </div>
                        </div>
                    </Card.Body>
                </Card>
            </SwiperSlide>
            <SwiperSlide>
                <Card
                    className={
                        styles["checkout__similar-courses__cards-carousel__course-card"]
                    }
                    >
                    <div
                        className={
                        styles[
                            "checkout__similar-courses__cards-carousel__course-card__category-chip"
                        ]
                        }
                    > 
                        الفنون 
                    </div>
                    <Card.Img
                        variant="top"
                        src="/images/course2cropped.png"
                        alt="course image"
                        className={
                        styles[
                            "checkout__similar-courses__cards-carousel__course-card__course-img"
                        ]
                        }
                    />
                    <Card.Body
                        className={
                        styles[
                            "checkout__similar-courses__cards-carousel__course-card__card-body"
                        ]
                        }
                    >
                        <div
                        className={
                            styles[
                            "checkout__similar-courses__cards-carousel__course-card__card-body__card-header"
                            ]
                        }
                        >
                        <div
                            className={
                            styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__card-header__trainer-img-box"
                            ]
                            }
                        >
                            <img
                            src="/images/trainer img.png"
                            alt="trainer image"
                            />
                        </div>
                        <div
                            className={
                            styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__card-header__course-details"
                            ]
                            }
                        >
                            <h1
                            className={
                                styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__card-header__course-details__title"
                                ]
                            }
                            >
                            إحتراف التصوير بالكاميرا
                            </h1>
                            <div
                            className={
                                styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__card-header__course-details__author"
                                ]
                            }
                            >
                            م. محمد مصطفي
                            </div>
                        </div>
                        </div>

                        <div
                        className={
                            styles[
                            "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details"
                            ]
                        }
                        >
                        <div className="d-inline-block">
                            <div
                            className={
                                styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__price-container"
                                ]
                            }
                            >
                            <span
                                className={
                                styles[
                                    "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__price-container__price"
                                ]
                                }
                            >
                                850
                            </span>
                            <span
                                className={
                                styles[
                                    "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__price-container__currency"
                                ]
                                }
                            >
                                جنية مصري
                            </span>
                            </div>
                            <div
                            className={
                                styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container"
                                ]
                            }
                            >
                            <span
                                className={
                                styles[
                                    "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__price"
                                ]
                                }
                            >
                                950
                            </span>
                            <span
                                className={
                                styles[
                                    "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__currency"
                                ]
                                }
                            >
                                جنية مصري
                            </span>
                            </div>
                        </div>

                        <div className="d-inline-block">
                            <Button
                            className={
                                styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                                ]
                            }
                            >
                            <svg className={styles["checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__cart-icon"]}  
                            xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 25 22.135">
                            <g id="add_to_cart" data-name="add to cart" transform="translate(-989 -650)">
                                <g id="Group_10771" data-name="Group 10771" transform="translate(1003.676 664.648)">
                                <g id="Group_9975" data-name="Group 9975" transform="translate(0 0)">
                                    <path id="Path_12759" data-name="Path 12759" d="M344.29,362.612a2.743,2.743,0,1,0,2.743,2.743A2.746,2.746,0,0,0,344.29,362.612Zm0,3.84a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,344.29,366.452Z" transform="translate(-341.547 -362.612)" fill="#222"/>
                                </g>
                                </g>
                                <g id="Group_10770" data-name="Group 10770" transform="translate(989 650)">
                                <g id="Group_9977" data-name="Group 9977" transform="translate(0 0)">
                                    <path id="Path_12760" data-name="Path 12760" d="M21.825,25.751a.822.822,0,0,0-.648-.316H5.08l-.741-3.1a.823.823,0,0,0-.8-.632H.823a.823.823,0,1,0,0,1.646H2.889L5.564,34.542a.823.823,0,0,0,.8.632H19.175a.823.823,0,0,0,.8-.625l2-8.092A.824.824,0,0,0,21.825,25.751Zm-3.294,7.776H7.014L5.473,27.082H20.126Z" transform="translate(0 -21.705)" fill="#222"/>
                                </g>
                                </g>
                                <g id="Group_10772" data-name="Group 10772" transform="translate(993.719 664.648)">
                                <g id="Group_9979" data-name="Group 9979" transform="translate(0 0)">
                                    <path id="Path_12761" data-name="Path 12761" d="M112.549,362.612a2.743,2.743,0,1,0,2.743,2.743A2.746,2.746,0,0,0,112.549,362.612Zm0,3.84a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,112.549,366.452Z" transform="translate(-109.806 -362.612)" fill="#222"/>
                                </g>
                                </g>
                            </g>
                            </svg>

                            </Button>
                            <Button
                            className={
                                styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                                ]
                            }
                            >
                            
                            <svg className={styles["checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__fav-icon"]} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20.571 18">
    <g id="favorite" transform="translate(0.012 -31.967)" fill="none">
        <path d="M18.562,33.2a5.494,5.494,0,0,0-7.5.546l-.792.816-.792-.816a5.494,5.494,0,0,0-7.5-.546,5.769,5.769,0,0,0-.4,8.353l7.774,8.028a1.26,1.26,0,0,0,1.82,0l7.774-8.028A5.766,5.766,0,0,0,18.562,33.2Z" stroke="none"/>
        <path d="M 5.35462474822998 33.66680526733398 C 4.504674911499023 33.66680526733398 3.720794677734375 33.95197296142578 3.088695526123047 34.49063491821289 C 2.242284774780273 35.21304321289062 1.746435165405273 36.23271560668945 1.692474365234375 37.36181259155273 C 1.638875961303711 38.48357391357422 2.045904159545898 39.57950592041016 2.80848503112793 40.36787414550781 L 10.27174949645996 48.07412719726562 L 17.7353458404541 40.36752319335938 C 18.49968528747559 39.5787353515625 18.90761566162109 38.48318481445312 18.85453414916992 37.36177444458008 C 18.80109596252441 36.23286437988281 18.30541610717773 35.21321487426758 17.45979499816895 34.49146270751953 C 16.82672500610352 33.95196533203125 16.04329490661621 33.66680526733398 15.19420528411865 33.66680526733398 C 14.12225532531738 33.66680526733398 13.06226539611816 34.12616348266602 12.28523540496826 34.92791366577148 L 10.2737455368042 37.00065231323242 L 8.26032543182373 34.92589569091797 C 7.48636531829834 34.12572479248047 6.427274703979492 33.66680526733398 5.35462474822998 33.66680526733398 M 5.354625701904297 31.96680068969727 C 6.852423667907715 31.96680068969727 8.36213493347168 32.58594131469727 9.482254981994629 33.74399566650391 L 10.27375507354736 34.55960464477539 L 11.06526470184326 33.74399566650391 C 13.08620452880859 31.65876007080078 16.36069488525391 31.32126617431641 18.56244468688965 33.19757461547852 C 21.08560562133789 35.35110473632812 21.21819496154785 39.21621322631836 18.95618438720703 41.55054473876953 L 11.18177509307861 49.57808685302734 C 10.67955589294434 50.09637069702148 9.863945960998535 50.09637451171875 9.361715316772461 49.57808685302734 L 1.587305068969727 41.55054473876953 C -0.670684814453125 39.21621322631836 -0.5381050109863281 35.35110473632812 1.985065460205078 33.19757461547852 C 2.964054107666016 32.3632926940918 4.155433654785156 31.96680068969727 5.354625701904297 31.96680068969727 Z" stroke="none" fill="#222"/>
    </g>
    </svg>

                            </Button>
                        </div>
                        </div>
                    </Card.Body>
                </Card>
            </SwiperSlide>
            <SwiperSlide>
                <Card
                    className={
                        styles["checkout__similar-courses__cards-carousel__course-card"]
                    }
                    >
                    <div
                        className={
                        styles[
                            "checkout__similar-courses__cards-carousel__course-card__category-chip"
                        ]
                        }
                    > 
                        الفنون 
                    </div>
                    <Card.Img
                        variant="top"
                        src="/images/course2cropped.png"
                        alt="course image"
                        className={
                        styles[
                            "checkout__similar-courses__cards-carousel__course-card__course-img"
                        ]
                        }
                    />
                    <Card.Body
                        className={
                        styles[
                            "checkout__similar-courses__cards-carousel__course-card__card-body"
                        ]
                        }
                    >
                        <div
                        className={
                            styles[
                            "checkout__similar-courses__cards-carousel__course-card__card-body__card-header"
                            ]
                        }
                        >
                        <div
                            className={
                            styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__card-header__trainer-img-box"
                            ]
                            }
                        >
                            <img
                            src="/images/trainer img.png"
                            alt="trainer image"
                            />
                        </div>
                        <div
                            className={
                            styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__card-header__course-details"
                            ]
                            }
                        >
                            <h1
                            className={
                                styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__card-header__course-details__title"
                                ]
                            }
                            >
                            إحتراف التصوير بالكاميرا
                            </h1>
                            <div
                            className={
                                styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__card-header__course-details__author"
                                ]
                            }
                            >
                            م. محمد مصطفي
                            </div>
                        </div>
                        </div>

                        <div
                        className={
                            styles[
                            "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details"
                            ]
                        }
                        >
                        <div className="d-inline-block">
                            <div
                            className={
                                styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__price-container"
                                ]
                            }
                            >
                            <span
                                className={
                                styles[
                                    "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__price-container__price"
                                ]
                                }
                            >
                                850
                            </span>
                            <span
                                className={
                                styles[
                                    "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__price-container__currency"
                                ]
                                }
                            >
                                جنية مصري
                            </span>
                            </div>
                            <div
                            className={
                                styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container"
                                ]
                            }
                            >
                            <span
                                className={
                                styles[
                                    "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__price"
                                ]
                                }
                            >
                                950
                            </span>
                            <span
                                className={
                                styles[
                                    "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__currency"
                                ]
                                }
                            >
                                جنية مصري
                            </span>
                            </div>
                        </div>

                        <div className="d-inline-block">
                            <Button
                            className={
                                styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                                ]
                            }
                            >
                            <svg className={styles["checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__cart-icon"]}  
                            xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 25 22.135">
                            <g id="add_to_cart" data-name="add to cart" transform="translate(-989 -650)">
                                <g id="Group_10771" data-name="Group 10771" transform="translate(1003.676 664.648)">
                                <g id="Group_9975" data-name="Group 9975" transform="translate(0 0)">
                                    <path id="Path_12759" data-name="Path 12759" d="M344.29,362.612a2.743,2.743,0,1,0,2.743,2.743A2.746,2.746,0,0,0,344.29,362.612Zm0,3.84a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,344.29,366.452Z" transform="translate(-341.547 -362.612)" fill="#222"/>
                                </g>
                                </g>
                                <g id="Group_10770" data-name="Group 10770" transform="translate(989 650)">
                                <g id="Group_9977" data-name="Group 9977" transform="translate(0 0)">
                                    <path id="Path_12760" data-name="Path 12760" d="M21.825,25.751a.822.822,0,0,0-.648-.316H5.08l-.741-3.1a.823.823,0,0,0-.8-.632H.823a.823.823,0,1,0,0,1.646H2.889L5.564,34.542a.823.823,0,0,0,.8.632H19.175a.823.823,0,0,0,.8-.625l2-8.092A.824.824,0,0,0,21.825,25.751Zm-3.294,7.776H7.014L5.473,27.082H20.126Z" transform="translate(0 -21.705)" fill="#222"/>
                                </g>
                                </g>
                                <g id="Group_10772" data-name="Group 10772" transform="translate(993.719 664.648)">
                                <g id="Group_9979" data-name="Group 9979" transform="translate(0 0)">
                                    <path id="Path_12761" data-name="Path 12761" d="M112.549,362.612a2.743,2.743,0,1,0,2.743,2.743A2.746,2.746,0,0,0,112.549,362.612Zm0,3.84a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,112.549,366.452Z" transform="translate(-109.806 -362.612)" fill="#222"/>
                                </g>
                                </g>
                            </g>
                            </svg>

                            </Button>
                            <Button
                            className={
                                styles[
                                "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                                ]
                            }
                            >
                            
                            <svg className={styles["checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__fav-icon"]} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20.571 18">
    <g id="favorite" transform="translate(0.012 -31.967)" fill="none">
        <path d="M18.562,33.2a5.494,5.494,0,0,0-7.5.546l-.792.816-.792-.816a5.494,5.494,0,0,0-7.5-.546,5.769,5.769,0,0,0-.4,8.353l7.774,8.028a1.26,1.26,0,0,0,1.82,0l7.774-8.028A5.766,5.766,0,0,0,18.562,33.2Z" stroke="none"/>
        <path d="M 5.35462474822998 33.66680526733398 C 4.504674911499023 33.66680526733398 3.720794677734375 33.95197296142578 3.088695526123047 34.49063491821289 C 2.242284774780273 35.21304321289062 1.746435165405273 36.23271560668945 1.692474365234375 37.36181259155273 C 1.638875961303711 38.48357391357422 2.045904159545898 39.57950592041016 2.80848503112793 40.36787414550781 L 10.27174949645996 48.07412719726562 L 17.7353458404541 40.36752319335938 C 18.49968528747559 39.5787353515625 18.90761566162109 38.48318481445312 18.85453414916992 37.36177444458008 C 18.80109596252441 36.23286437988281 18.30541610717773 35.21321487426758 17.45979499816895 34.49146270751953 C 16.82672500610352 33.95196533203125 16.04329490661621 33.66680526733398 15.19420528411865 33.66680526733398 C 14.12225532531738 33.66680526733398 13.06226539611816 34.12616348266602 12.28523540496826 34.92791366577148 L 10.2737455368042 37.00065231323242 L 8.26032543182373 34.92589569091797 C 7.48636531829834 34.12572479248047 6.427274703979492 33.66680526733398 5.35462474822998 33.66680526733398 M 5.354625701904297 31.96680068969727 C 6.852423667907715 31.96680068969727 8.36213493347168 32.58594131469727 9.482254981994629 33.74399566650391 L 10.27375507354736 34.55960464477539 L 11.06526470184326 33.74399566650391 C 13.08620452880859 31.65876007080078 16.36069488525391 31.32126617431641 18.56244468688965 33.19757461547852 C 21.08560562133789 35.35110473632812 21.21819496154785 39.21621322631836 18.95618438720703 41.55054473876953 L 11.18177509307861 49.57808685302734 C 10.67955589294434 50.09637069702148 9.863945960998535 50.09637451171875 9.361715316772461 49.57808685302734 L 1.587305068969727 41.55054473876953 C -0.670684814453125 39.21621322631836 -0.5381050109863281 35.35110473632812 1.985065460205078 33.19757461547852 C 2.964054107666016 32.3632926940918 4.155433654785156 31.96680068969727 5.354625701904297 31.96680068969727 Z" stroke="none" fill="#222"/>
    </g>
    </svg>

                            </Button>
                        </div>
                        </div>
                    </Card.Body>
                </Card>
            </SwiperSlide>
           
        </Swiper>
        </Col>
      </Row>}

      { step == "begin-learning" && <SuccessState/>}
      
    </>
  );
}
