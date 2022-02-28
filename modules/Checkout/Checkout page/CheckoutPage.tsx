/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { Row, Col, Button, Form, Card } from "react-bootstrap";
import styles from "./checkout-page.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import withAuth from "configurations/auth guard/AuthGuard";
import SuccessState from "../Success state/SuccessState";
import FailedState from "../Failed state/FailedState";
import { axiosInstance } from "configurations/axios/axiosConfig";
import { useDispatch, useSelector } from "react-redux";
import { GuaranteeIcon, ArrowLeftIcon, PaySafeIcon, RemoveIcon, CartIcon, FavouriteIcon,AddedToCartIcon,AddedToFavouriteIcon } from "common/Icons/Icons";
import { handleFav } from "modules/_Shared/utils/handleFav";
import { handleCart } from "modules/_Shared/utils/handleCart";
import { setCartItems } from "configurations/redux/actions/cartItems"; 
import Router from "next/router";
import Head from "next/head";
import { Frames, CardNumber, ExpiryDate, Cvv } from 'frames-react';

function CheckoutPage() {
  SwiperCore.use([Navigation]);
  const [step, setStep] = useState("added-courses");
  const [localStateCartItems, setLocalStateCartItems] = useState<any>([]);
  const [mobileView, setMobileView] = useState(false);
  const [isCouponApplied, setIsCouponApplied] = useState({status:false,discounted_amount:0,value:""});
  const [errorMessage, setErrorMessage] = useState("");
  const [relatedCourses, setRelatedCourses] = useState<any>([]);
 const dispatch = useDispatch();
 const cartItems = useSelector((state:any) => state.cartItems);
 const userStatus = useSelector((state:any) => state.userAuthentication);


 useEffect(() => {
    const navbar: any = document.getElementById("nav");
    const stepperBox: any = document.getElementById("stepper-box");
    const list: any = document.getElementsByTagName("ol")[0];
    const checkedRadioBtn:any = document.querySelector('input[name="payment-type"]:checked');
    // const unCheckedRadioBtns:any = document.querySelectorAll('input[name="payment-type"]:not(:checked)');
    stepperBox.style.cssText = `top:${navbar.offsetHeight}px`;
    // console.log("navbar.offsetHeight",navbar.offsetHeight);
    const localStorageItems:any = localStorage.getItem("cart");

    axiosInstance
        .get(`users/cart/related-courses/?country_code=eg&course_ids=${localStorageItems?.replace(/[\[\]']+/g,'')}`)
        .then(function (response:any) {
            // setRelatedCourses(response.data.data);
            if(response.data.data !== undefined){
                axiosInstance
                .get(`courses/?country_code=eg&course_ids=${localStorageItems?.replace(/[\[\]']+/g,'')}`)
                .then(function (resp:any) {
                    // console.log(resp.data.data);
                    // setLocalStateCartItems(resp.data.data);
                  let newArray:any = response.data.data;
                  if(resp.data.data !== undefined){
    
                      resp?.data.data.forEach((element:any) => {
                       newArray?.forEach((ele:any) => {
                           if(element.id === ele.id){
                             ele.is_in_cart = true;
                         }
                     });
                 });
                 setRelatedCourses([...newArray]);
                  }
        
              })
              .catch(function (error) {
                console.log(error); 
              });

            }
        })
        .catch(function (error) {
          console.log(error); 
        });

    if(document.documentElement.clientWidth <= 576){
    stepperBox.style.cssText = `top:${navbar.offsetHeight}px`;
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
            relatedInfoBox ?  relatedInfoBox.style.cssText=`
            display:none;
            `:
            null ;
            
        });

        if(checkedRadioBtn){
            if(checkedRadioBtn.parentElement.parentElement.id == "payment-method2" ||
                checkedRadioBtn.parentElement.parentElement.id == "payment-method3" 
                ){
    
                    checkedRadioBtn ?  checkedRadioBtn.parentElement.parentElement.style.cssText=`
                    height: 12.5rem;
                    overflow: visible;
                    box-shadow: 0 0 1.25rem #AF2B3633;
                    border: 0.3125rem solid #AF151F;
                    ` : null ;
                }else{
    
                    checkedRadioBtn ?  checkedRadioBtn.parentElement.parentElement.style.cssText=`
                    height: 51.56rem;
                    overflow: visible;
                    box-shadow: 0 0 1.25rem #AF2B3633;
                    border: 0.3125rem solid #AF151F;
                    ` : null ;
                }

        }


    }else{
    stepperBox.style.cssText = `top:${navbar.offsetHeight}px`;
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
            relatedInfoBox ?  relatedInfoBox.style.cssText=`
            display:none;
            `:null;
            
        });

        if(checkedRadioBtn){
            if(checkedRadioBtn.parentElement.parentElement.id == "payment-method2" ||
                checkedRadioBtn.parentElement.parentElement.id == "payment-method3" 
                ){
                    checkedRadioBtn ? checkedRadioBtn.parentElement.parentElement.style.cssText=`
                    height: 5rem;
                    overflow: visible;
                    box-shadow: 0rem 0rem 1.25rem #AF2B3633;
                    border: 0.125rem solid #AF151F;
                    `:null ;
    
                }else{
                    checkedRadioBtn ? checkedRadioBtn.parentElement.parentElement.style.cssText=`
                    height: 20.625rem;
                    overflow: visible;
                    box-shadow: 0rem 0rem 1.25rem #AF2B3633;
                    border: 0.125rem solid #AF151F;
                    `:null ;
                }

        }

    }
    if(checkedRadioBtn){
        const relatedInfoBox:any= document.querySelector(`#${checkedRadioBtn.parentElement.parentElement.id}  div#card-info-box`) ;
        relatedInfoBox ? relatedInfoBox.style.cssText=`
        display:block;
        `:null ;
    }

    window.addEventListener("resize" ,()=>{
        // console.log("navbar.offsetHeight",navbar.offsetHeight);
        const checkedRadioBtn:any = document.querySelector('input[name="payment-type"]:checked');
        const unCheckedRadioBtns:any = document.querySelectorAll('input[name="payment-type"]:not(:checked)');
        stepperBox.style.cssText = `top:${navbar.offsetHeight}px`;
        if(document.documentElement.clientWidth <= 576){
            setMobileView(true);
            stepperBox.style.cssText = `top:${navbar.offsetHeight}px`;

            unCheckedRadioBtns.forEach((radBtn:any) => {
                radBtn.parentElement.parentElement.style.cssText=`
                height: 12.5rem;
                overflow: hidden;
                box-shadow: 0 0 1.25rem #0000001A;
                border:none;
                `;
                const relatedInfoBox:any= document.querySelector(`#${radBtn.parentElement.parentElement.id}  div#card-info-box`) ;
                relatedInfoBox ? relatedInfoBox.style.cssText=`
                display:none;
                `:null ;
                
            });

            if(checkedRadioBtn){

                if(checkedRadioBtn.parentElement.parentElement.id == "payment-method2" ||
                checkedRadioBtn.parentElement.parentElement.id == "payment-method3" 
                ){
    
                    checkedRadioBtn ? checkedRadioBtn.parentElement.parentElement.style.cssText=`
                    height: 12.5rem;
                    overflow: visible;
                    box-shadow: 0 0 1.25rem #AF2B3633;
                    border: 0.3125rem solid #AF151F;
                    `
                    :
                    null;
                }else{
                    checkedRadioBtn ? checkedRadioBtn.parentElement.parentElement.style.cssText=`
                    height: 51.56rem;
                    overflow: visible;
                    box-shadow: 0 0 1.25rem #AF2B3633;
                    border: 0.3125rem solid #AF151F;
                    `
                    :
                    null;
                }
            }

        }else{
        stepperBox.style.cssText = `top:${navbar.offsetHeight}px`;
            setMobileView(false);
            unCheckedRadioBtns.forEach((radBtn:any) => {
                radBtn.parentElement.parentElement.style.cssText=`
                height: 5rem;
                overflow: hidden;
                box-shadow: 0rem 0rem 1.25rem #0000001A;
                border:none;
                `;
                const relatedInfoBox:any= document.querySelector(`#${radBtn.parentElement.parentElement.id}  div#card-info-box`) ;
                relatedInfoBox?  relatedInfoBox.style.cssText=`
                display:none;
                `:null ;
                
            });
    
            if(checkedRadioBtn){
                if(checkedRadioBtn.parentElement.parentElement.id == "payment-method2" ||
                checkedRadioBtn.parentElement.parentElement.id == "payment-method3" 
                ){
                    checkedRadioBtn ?  checkedRadioBtn.parentElement.parentElement.style.cssText=`
                      height: 5rem;
                      overflow: visible;
                      box-shadow: 0rem 0rem 1.25rem #AF2B3633;
                      border: 0.125rem solid #AF151F;
                      `
                      :
                      null;
                }else{
                    checkedRadioBtn ?  checkedRadioBtn.parentElement.parentElement.style.cssText=`
                      height: 20.625rem;
                      overflow: visible;
                      box-shadow: 0rem 0rem 1.25rem #AF2B3633;
                      border: 0.125rem solid #AF151F;
                      `
                      :
                      null;
    
                }
            }

        }

        if(checkedRadioBtn){
            const relatedInfoBox:any= document.querySelector(`#${checkedRadioBtn.parentElement.parentElement.id}  div#card-info-box`) ;
            relatedInfoBox ?  relatedInfoBox.style.cssText=`
            display:block;
            `:null ;
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
    //   if(userStatus.isUserAuthenticated === true){
    //       setLocalStateCartItems(cartItems.data);
          
          
    //     }else if(userStatus.isUserAuthenticated === false){
        (async function () {
            
            const localStorageItems:any = await localStorage.getItem("cart");
            // console.log(localStorageItems);
            
          await  axiosInstance
            .get(`courses/?country_code=eg&course_ids=${localStorageItems?.replace(/[\[\]']+/g,'')}`)
            .then(function (response:any) {
            //   console.log(response.data.data);
              setLocalStateCartItems(response.data.data);
        })
        .catch(function (error) {
          console.log(error); 
        });
        })();

    //   }

  }, [cartItems,userStatus])
  
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
                firstStepBox.style.cssText=`pointer-events: all`;
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
            firstStepBox.style.cssText=`pointer-events: all`;
            firstStepBox.innerHTML = `<svg id="added-courses" xmlns="http://www.w3.org/2000/svg" width="1rem" height="0.75rem" viewBox="0 0 15.629 12">
            <g  id="added-courses" transform="translate(-7.983 -9.033)">
              <path id="added-courses" data-name="Path 13142" d="M8.546,16.842a1.922,1.922,0,0,1,2.718-2.718l2.27,2.269,6.8-6.8a1.922,1.922,0,1,1,2.718,2.718l-8.16,8.154a1.918,1.918,0,0,1-2.718,0L8.546,16.842Z" transform="translate(0)" fill="#fff"/>
            </g>
          </svg>
          `;
          secondStepBox.style.cssText=`pointer-events: all`;
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
  }, [step,userStatus])


  const radioBtnsHandler = ()=>{
    const checkedRadioBtn:any = document.querySelector('input[name="payment-type"]:checked');
    const unCheckedRadioBtns:any = document.querySelectorAll('input[name="payment-type"]:not(:checked)');
    const infoBox:any = document.getElementById('card-info-box');

        if(document.documentElement.clientWidth <= 576){
            unCheckedRadioBtns.forEach((radBtn:any) => {
                radBtn.parentElement.parentElement.style.cssText=`
                height: 12.5rem;
                overflow: hidden;
                box-shadow: 0 0 1.25rem #0000001A;
                border:none;
                `;
                const relatedInfoBox:any= document.querySelector(`#${radBtn.parentElement.parentElement.id}  div#card-info-box`) ;
                relatedInfoBox ?  relatedInfoBox.style.cssText=`
                display:none;
                `:
                null ;
                
            });

            if(checkedRadioBtn.parentElement.parentElement.id == "payment-method2" ||
            checkedRadioBtn.parentElement.parentElement.id == "payment-method3" 
            ){
                checkedRadioBtn.parentElement.parentElement.style.cssText=`
                height: 12.5rem;
                box-shadow: 0 0 1.25rem #AF2B3633;
                border: 0.3125rem solid #AF151F;
                `
            }else{

                checkedRadioBtn.parentElement.parentElement.style.cssText=`
                height: 51.56rem;
                overflow: visible;
                box-shadow: 0 0 1.25rem #AF2B3633;
                border: 0.3125rem solid #AF151F;
                `
            }
    

        }else{

            unCheckedRadioBtns.forEach((radBtn:any) => {
                radBtn.parentElement.parentElement.style.cssText=`
                height: 5rem;
                overflow: hidden;
                box-shadow: 0rem 0rem 1.25rem #0000001A;
                border:none;
                `;
                const relatedInfoBox:any= document.querySelector(`#${radBtn.parentElement.parentElement.id}  div#card-info-box`) ;
                relatedInfoBox ? relatedInfoBox.style.cssText=`
                display:none;
                `:null;
                
            });

            if(checkedRadioBtn.parentElement.parentElement.id == "payment-method2" ||
            checkedRadioBtn.parentElement.parentElement.id == "payment-method3" 
            ){

                checkedRadioBtn.parentElement.parentElement.style.cssText=`
                height: 5rem;
                overflow: visible;
                box-shadow: 0rem 0rem 1.25rem #AF2B3633;
                border: 0.125rem solid #AF151F;
                `
            }else{
                checkedRadioBtn.parentElement.parentElement.style.cssText=`
                height: 20.625rem;
                overflow: visible;
                box-shadow: 0rem 0rem 1.25rem #AF2B3633;
                border: 0.125rem solid #AF151F;
                `
            }
    

        }

        const relatedInfoBox:any= document.querySelector(`#${checkedRadioBtn.parentElement.parentElement.id}  div#card-info-box`) ;
        relatedInfoBox ?  relatedInfoBox.style.cssText=`
        display:block;
        `:null;
  };

  const removeFromCart = (course:any)=>{

    if (userStatus?.isUserAuthenticated == true) {
        const handleCartResponse: any = handleCart(course, "users/cart/?country_code=eg", true);
        handleCartResponse.then(function (firstresponse: any) {
            firstresponse?.resp.then(function (response: any) {
                // setTrainerProfile(response.data.data);
            console.log("response.data.data",response.data.data);
            dispatch(setCartItems(response.data.data));
            console.log("firstresponse.totalItems",firstresponse.totalItems);
            })
            //  setLocalCartItems(response.totalItems);
        })
    }
    else {
        const handleCartResponse: any = handleCart(course, "users/cart/?country_code=eg", false);
        handleCartResponse.then(function (response: any) {
            dispatch(setCartItems(response));
            console.log('response',response);
            //  setLocalCartItems(response);
            // setTrainerProfile(trainerProfile);
        })

    }
    // setLatestCourses([...latestCourses]);
  }

  const promoCodeHandler = (e:any)=>{
      e.preventDefault();
    const localStorageItems:any = localStorage.getItem("cart");
    // console.log(e.target[0].value == "");
    if(e.target[0].value == "" || e.target[0].value == null){
        setErrorMessage("الرجاء إدخال الكوبون");
    }else{
        axiosInstance
            .post(`coupons/${e.target[0].value}/?country_code=eg`, {"course_ids" : localStorageItems?.replace(/[\[\]']+/g,'')})
            .then((response:any) => {
             console.log(response);
             if(response.status.toString().startsWith("2")){
                 setIsCouponApplied({status:true,discounted_amount:response.data.data.total_discount_amount,value:e.target[0].value})
                 setErrorMessage("");
    
             }else if(response.status.toString().startsWith("4") || response.status.toString().startsWith("5")){
                setErrorMessage(response.data.message);
                console.log('response.data.message',response.data.message);
                
             }
            })
            .catch((error:any)=>{
              console.log("error", error);
            })
    }
  }

  const handleCouponInput = ()=>{
    const couponInputField:any = document.querySelector('[name="couponField"]');
    couponInputField.value = "";
    setIsCouponApplied({status:false,discounted_amount:0,value:""});
  }

  const handleFavActionBtn = (course:any):any =>{
    const localStorageItems:any = localStorage.getItem("cart");
    if(userStatus.isUserAuthenticated == true){
    const handleFavResponse:any =  handleFav(course,`users/cart/related-courses/?country_code=eg&course_ids=${localStorageItems?.replace(/[\[\]']+/g,'')}`);
    handleFavResponse.then(function(response:any) {
        setRelatedCourses(response.data.data);
    })
    }else{
      Router.push({
        pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}SignIn`,
        query: { from: "/Checkout" }
      })
    }
  }

  const handleCartActionBtn = (course:any):any =>{
    const localStorageItems:any = localStorage.getItem("cart");
    
    if(userStatus?.isUserAuthenticated == true){
      const handleCartResponse:any =  handleCart(course,`users/cart/related-courses/?country_code=eg&course_ids=${localStorageItems?.replace(/[\[\]']+/g,'')}`,true);
      handleCartResponse.then(function(firstresponse:any) {
        firstresponse.resp.then(function(response:any){
            setRelatedCourses(response.data.data);
           dispatch(setCartItems(firstresponse.cartResponse));
        })
      //  setLocalCartItems(response.totalItems);
      })
    }
    else{
      const handleCartResponse:any =  handleCart(course,`users/cart/related-courses/?country_code=eg&course_ids=${localStorageItems?.replace(/[\[\]']+/g,'')}`,false);
      handleCartResponse.then(function(response:any) {
          dispatch(setCartItems(response.data.data));

          let newArray:any = relatedCourses;
          response.data.data?.forEach((element:any) => {
           newArray.forEach((ele:any) => {
               if(element.id === ele.id){
                 console.log(ele);
                 ele.is_in_cart = true;
             }
         });
     });
     setRelatedCourses([...newArray]);
   
      })
    }
    // setLatestCourses([...latestCourses]);
  }


  return (
    <>
    <Head>
        <script async src="https://cdn.checkout.com/js/framesv2.min.js"></script>
    </Head>
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
        <Col style={{borderBottom: localStateCartItems == null ? "none" : "0.1rem solid rgba(119, 119, 119, 0.2)"}} className={styles["checkout__course-content"]}>

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
                    <Frames 
                        config={{
                            debug: true,
                            publicKey: 'pk_test_75517722-24ba-4bb4-a67b-1f021aca70ea',
                            localization: {
                                cardNumberPlaceholder: 'رقم البطاقة',
                                expiryMonthPlaceholder: '(YY) سنة',
                                expiryYearPlaceholder: '(MM) شهر ',
                                cvvPlaceholder: ' الرقم السري (CVV)',
                            },
                            style: {
                                base: {
                                    fontSize: '1.2em',
                                    direction: 'rtl',
                                    padding: '0 1.5rem',
                                    fontFamily: "'Almarai', sans-serif !important",
                                    color: '#222222'
                                },
                            },
                        }}
                        ready={() => {}}
                        frameActivated={(e) => {}}
                        frameFocus={(e) => {}}
                        frameBlur={(e) => {}}
                        frameValidationChanged={(e) => {}}
                        paymentMethodChanged={(e) => {}}
                        cardValidationChanged={(e) => {}}
                        cardSubmitted={() => {}}
                        cardTokenized={(e) => {
                        const localStorageItems:any = localStorage.getItem("cart");

                            console.log('e.token',e.token);
                            alert(e.token);
                            axiosInstance.post(`payments/payouts/?country_code=eg`, {
                              "checkout_token": e.token,
                              "course_ids": `${localStorageItems?.replace(/[\[\]']+/g,'')}`,
                              "coupon_code": isCouponApplied.value
                            })
                            .then((response:any) => {
                              console.log("Response",response);
                              if(JSON.stringify(response.status).startsWith("2")){
                                localStorage.setItem("successUrl" , response.data.data.success_url);
                                localStorage.setItem("failureUrl" , response.data.data.failure_url);
                              }
                             
                            })
                            .catch((error:any)=>{
                              console.log("error", error);
                            })
                        }}
                        cardTokenizationFailed={(e) => {}}
                        cardBinChanged={(e) => {}}
                    >
                        <CardNumber />
                        <ExpiryDate />
                        <Cvv />
                        
                    </Frames>

                    </div>
                </div>
                {/* <div id="payment-method1" className={styles["checkout__payment-method-box__payment-method"]}>
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
                        <Form.Control className={styles["checkout__payment-method-box__payment-method__card-info__card-exp-date"]} type="number" placeholder="MM / YY" />
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
                </div> */}
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
                    
                </div>

            </div>}

            {mobileView == true && <div className={styles["checkout__cart-sticky-card-div"]}>

            <div className={styles["checkout__cart-sticky-card"]}>
                <div className={styles["checkout__cart-sticky-card__title"]}>ملخص السلة</div>
                <div className={styles["checkout__cart-sticky-card__do-you-have-coupon"]}>هل لديك كوبون خصم؟</div>

               <div style={{position:"relative"}}>
                    <div className={styles["checkout__cart-sticky-card__search-bar-container"]}>
                        <Form onSubmit={()=>{promoCodeHandler(event)}}>

                        <Form.Control
                            type="text"
                            name="couponField"
                            placeholder="ادخل الكوبون هنا"
                            className={
                            styles["checkout__cart-sticky-card__search-bar-container__search-bar"]
                            }
                            onChange={()=>{setErrorMessage("")}}
                            disabled={isCouponApplied.status ? true : false}
                        />
                            {
                                isCouponApplied.status ?
                                <input type="button" onClick={()=>{handleCouponInput()}} value="إزالة" className={styles["checkout__cart-sticky-card__search-bar__btn"]}/>
                                    
                                :
                                    <Button type="submit" className={styles["checkout__cart-sticky-card__search-bar__btn"]}>
                                        تطبيق
                                    </Button>
                                 
                            }
                        </Form>
                    
                    
                    </div>
                        {
                            errorMessage !== "" &&
                        <div className={styles["checkout__cart-sticky-card__search-bar-container__error-msg"]}>
                            {errorMessage}
                        </div>
                        }

                </div>


                <div className={styles["checkout__cart-sticky-card__total-price-box"]}>
                    <div className={styles["checkout__cart-sticky-card__total-price-box__total-price-text"]}>
                    السعر الإجمالي
                    </div>
                    { localStateCartItems !== [] &&

                    <div className={styles["checkout__cart-sticky-card__total-price-box__total-price"]}>
                        <span> {localStateCartItems?.map((item:any)=> item.discounted_price).reduce((prev:any, curr:any) => prev + curr, 0)} </span>
                        <span>{localStateCartItems !== undefined && localStateCartItems[0]?.currency_code}</span>
                    </div>

                    }

                </div>

                {
                        isCouponApplied.status == true &&

                        <div className={styles["checkout__cart-sticky-card__coupon-box"]}>
                            <div className={styles["checkout__cart-sticky-card__coupon-text"]}>
                            الكوبون
                            </div>
                            <div className={styles["checkout__cart-sticky-card__coupon-value"]}>
                                <span> {isCouponApplied.discounted_amount}- </span>
                                <span>{localStateCartItems !== undefined && localStateCartItems[0]?.currency_code}</span>
                            </div>

                        </div>
                    }

                <div className={styles["checkout__cart-sticky-card__guarantee-box"]}
                    >
                    <div
                        className={
                        styles["checkout__cart-sticky-card__guarantee-box__icon"]
                        }
                    >
                        <GuaranteeIcon/>
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
                    { localStateCartItems !== [] &&

                    <div className={styles["checkout__cart-sticky-card__final-price-box__final-price"]}>
                    <span> {localStateCartItems?.map((item:any)=> item.discounted_price).reduce((prev:any, curr:any) => prev + curr, 0) 
                    - 
                    isCouponApplied.discounted_amount
                    } </span>
                        <span>{localStateCartItems !== undefined && localStateCartItems[0]?.currency_code}</span>
                    </div>
                    }

                </div>

                { step == "added-courses" ?
                 <Button onClick={()=>{ 
                     userStatus.isUserAuthenticated ?
                     setStep("payment-types")
                     :
                     Router.push({
                        pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}SignIn`,
                        query: { from: "/Checkout" }
                      })
                    }} className={styles["checkout__cart-sticky-card__purchasing-btn"]}>
                  
                  الدفع

                </Button>
                :
                <Button onClick={() => {
                    Frames.submitCard();
                }}
                 className={styles["checkout__cart-sticky-card__purchasing-btn"]}>
                    إتمام الشراء
                
                </Button>}

                {step == "added-courses" &&  <div className={styles["checkout__cart-sticky-card__complete-surfing-courses"]}>
                    <span>
                    اكمل البحث عن دورات أخرى
                    </span>
                    <ArrowLeftIcon color="#af151f"/>

                </div>}

                { step == "payment-types" && <div className={styles["checkout__cart-sticky-card__pay-safely"]}>
                    <PaySafeIcon color="#6c757d" />

                    <span> ادفع بأمان وسهولة عبر تدرب </span>
                </div>}

            </div>

            </div>}

          <div className={styles["checkout__course-content__title"]}>
              <span> محتويات السلة </span>
              {
                  localStateCartItems !== []  &&
                  <span>  ({localStateCartItems?.length} دورة) </span>
                }
          </div>

          {
                localStateCartItems == [] &&
              <div className={styles["checkout__no-courses-in-your-cart"]}>
                  لا يوجد اي دورات في السلة الخاصة بك
              </div>
          }

          {localStateCartItems !== [] && localStateCartItems?.map((it:any,i:number)=>{
              
              return(

                <div key={i} className={styles["checkout__cards-outer-box__card"]}>
                        <div className={styles["checkout__cards-outer-box__card__course-img"]}>
                            <img src={it?.image && it.image } alt="course image" />
                            <div style={{backgroundColor:`${it.categories !== undefined && it.categories[0].color}`}}
                             className={styles["checkout__cards-outer-box__card__category-chip"]}>
                                {it.categories !== undefined && it.categories[0].title}
                            </div>
                        </div>

                        <div className={styles["checkout__cards-outer-box__card__trainer-info-box-container"]}>

                            <div className={styles["checkout__cards-outer-box__card__trainer-info-box"]}>
                                <div className={styles["checkout__cards-outer-box__card__trainer-info-box__trainer-img"]}>
                                    <img src={it.trainer !== undefined && it.trainer.image} alt="trainer image" />
                                </div>
                                <div className={styles["checkout__cards-outer-box__card__trainer-info-box__info"]}>
                                    <h1 className={styles["checkout__cards-outer-box__card__trainer-info-box__course-name"]} title={it.title}>
                                    {it.title}
                                    </h1>
                                    <div className={styles["checkout__cards-outer-box__card__trainer-info-box__trainer-name"]}>
                                    {it.trainer !== undefined && it.trainer.name_ar}
                                    </div>
                                </div>
                            </div>
                            <div className={styles["checkout__cards-outer-box__card__prices-box"]}>

                                <div className={styles["checkout__cards-outer-box__card__price"]}>
                                    <span> {it.discounted_price == 0 ? "مجانًا" : it.discounted_price} </span>
                                    <span> {it.discounted_price !== 0 && it.currency_code} </span>
                                </div>
                                
                                {
                                    it.price > it.discounted_price &&
                                <div className={styles["checkout__cards-outer-box__card__old-price"]}>
                                    <span> {it.price} </span>
                                    <span> {it.currency_code} </span>
                                </div>
                                }

                            </div>
                        </div>

                        { step == "added-courses" &&
                         <div onClick={()=>{removeFromCart(it)}} className={styles["checkout__cards-outer-box__card__action-btns"]}>
                            <RemoveIcon color="#222"/>

                        </div>}
                    </div>
              )
          })}


        </Col>
        { mobileView == false && <Col className={styles["checkout__cart-sticky-card-col"]}>

            <div className={styles["checkout__cart-sticky-card"]}>
                <div className={styles["checkout__cart-sticky-card__title"]}>ملخص السلة</div>
                <div className={styles["checkout__cart-sticky-card__do-you-have-coupon"]}>هل لديك كوبون خصم؟</div>

                <div style={{position:"relative"}}>
                    <div className={styles["checkout__cart-sticky-card__search-bar-container"]}>
                        <Form onSubmit={()=>{promoCodeHandler(event)}}>

                        <Form.Control
                            type="text"
                            name="couponField"
                            placeholder="ادخل الكوبون هنا"
                            className={
                            styles["checkout__cart-sticky-card__search-bar-container__search-bar"]
                            }
                            onChange={()=>{setErrorMessage("")}}
                            disabled={isCouponApplied.status ? true : false}
                        />
                            {
                                isCouponApplied.status ?
                                <input type="button" onClick={()=>{handleCouponInput()}} value="إزالة" className={styles["checkout__cart-sticky-card__search-bar__btn"]}/>
                                    
                                :
                                    <Button type="submit" className={styles["checkout__cart-sticky-card__search-bar__btn"]}>
                                        تطبيق
                                    </Button>
                                 
                            }
                        </Form>
                    
                    
                    </div>
                        {
                            errorMessage !== "" &&
                        <div className={styles["checkout__cart-sticky-card__search-bar-container__error-msg"]}>
                            {errorMessage}
                        </div>
                        }

                </div>

                <div className={styles["checkout__cart-sticky-card__total-price-box"]}>
                    <div className={styles["checkout__cart-sticky-card__total-price-box__total-price-text"]}>
                    السعر الإجمالي
                    </div>
                    { localStateCartItems !== [] &&

                    <div className={styles["checkout__cart-sticky-card__total-price-box__total-price"]}>
                        <span> {localStateCartItems?.map((item:any)=> item.discounted_price).reduce((prev:any, curr:any) => prev + curr, 0)} </span>
                        <span>{localStateCartItems !== undefined && localStateCartItems[0]?.currency_code}</span>
                    </div>
                    
                    }

                </div>
                
                    {
                        isCouponApplied.status == true &&

                        <div className={styles["checkout__cart-sticky-card__coupon-box"]}>
                            <div className={styles["checkout__cart-sticky-card__coupon-text"]}>
                            الكوبون
                            </div>
                            <div className={styles["checkout__cart-sticky-card__coupon-value"]}>
                                <span> {isCouponApplied.discounted_amount}- </span>
                                <span>{localStateCartItems !== undefined && localStateCartItems[0]?.currency_code}</span>
                            </div>

                        </div>
                    }


                <div className={styles["checkout__cart-sticky-card__guarantee-box"]}
                    >
                    <div
                        className={
                        styles["checkout__cart-sticky-card__guarantee-box__icon"]
                        }
                    >
                        <GuaranteeIcon/>
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
                    السعر النهائي
                    </div>
                    { localStateCartItems !== [] &&

                    <div className={styles["checkout__cart-sticky-card__final-price-box__final-price"]}>
                    <span> {localStateCartItems?.map((item:any)=> item.discounted_price).reduce((prev:any, curr:any) => prev + curr, 0) 
                    - 
                    isCouponApplied.discounted_amount
                    } </span>
                        <span>{localStateCartItems !== undefined && localStateCartItems[0]?.currency_code}</span>
                    </div>
            }
                </div>

                { step == "added-courses" ?
                 <Button onClick={()=>{ 
                    userStatus.isUserAuthenticated ?
                    setStep("payment-types")
                    :
                    Router.push({
                       pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}SignIn`,
                       query: { from: "/Checkout" }
                     })
                   }} className={styles["checkout__cart-sticky-card__purchasing-btn"]}>
                  
                  الدفع

                </Button>
                :
                <Button 
                onClick={() => {
                    Frames.submitCard();
                }}
                 className={styles["checkout__cart-sticky-card__purchasing-btn"]}>
                    إتمام الشراء
                
                </Button>
                }

                { step == "added-courses" &&  <div className={styles["checkout__cart-sticky-card__complete-surfing-courses"]}>
                    <span>
                    اكمل البحث عن دورات أخرى
                    </span>
                    <ArrowLeftIcon color="#af151f"/>


                </div>}

                { step == "payment-types" && <div className={styles["checkout__cart-sticky-card__pay-safely"]}>
                <PaySafeIcon color="#6c757d" />


                    <span> ادفع بأمان وسهولة عبر تدرب </span>
                </div>}

            </div>

        </Col>}

      </Row>}

      {step == "added-courses" && localStateCartItems !== []   && <Row id="similar-courses-row" className={styles["checkout__similar-courses-row"]}>
      <Col xs={12} className={styles["checkout__similar-courses"]}>
        <div className={styles["checkout__similar-courses__title"]}>
            <div>الدورات مشابه قد تعجبك</div>
        </div>
      </Col>
      
        { localStateCartItems !== [] && <Col xs={12} className={styles["checkout__similar-courses__cards-carousel"]}>
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
            {relatedCourses?.map((course:any,i:number)=>{
                return(

                    <SwiperSlide key={i}>
                        <Card
                            className={
                                styles["checkout__similar-courses__cards-carousel__course-card"]
                            }
                            >
                            <div style={{backgroundColor:`${course.categories[0].color}`}}
                                className={
                                styles[
                                    "checkout__similar-courses__cards-carousel__course-card__category-chip"]}
                                    > 
                                {course.categories[0].title} 
                            </div>
                            <Card.Img
                                variant="top"
                                src={course.image}
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
                                    src={course.trainer.image}
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
                                    {course.title}
                                    </h1>
                                    <div
                                    className={
                                        styles[
                                        "checkout__similar-courses__cards-carousel__course-card__card-body__card-header__course-details__author"
                                        ]
                                    }
                                    >
                                    {course.trainer.name_ar}
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
                                        {course.discounted_price == 0 ?  "مجانًا" : course.discounted_price}
                                    </span>
                                    <span
                                        className={
                                        styles[
                                            "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__price-container__currency"
                                        ]
                                        }
                                    >
                                        {course.discounted_price !== 0 && course.currency_code}
                                    </span>
                                    </div>
                                    {
                                        course.price > course.discounted_price
                                        &&
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
                                        {course.price}
                                    </span>
                                    <span
                                        className={
                                        styles[
                                            "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__currency"
                                        ]
                                        }
                                    >
                                        {course.currency_code}
                                    </span>
                                    </div>
                                    }
                                </div>

                                <div className="d-inline-block">
                                    <Button
                                    className={
                                        styles[
                                        "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                                        ]
                                    }
                                    >
                                    <div onClick={()=>handleCartActionBtn(course)} 
                                     className={styles["checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__cart-icon"]}>
                                    {
                                        course.is_in_cart ? 
                                        <AddedToCartIcon color="#222"/>
                                        :
                                        <CartIcon color="#222"/>

                                    }
                                    </div>

                                    </Button>
                                    <Button
                                    className={
                                        styles[
                                        "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                                        ]
                                    }
                                    >
                                        <div onClick={()=>handleFavActionBtn(course)} 
                                         className={styles["checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__fav-icon"]}>
                                        
                                        {
                                            course.is_in_favorites ?
                                            <AddedToFavouriteIcon/>
                                            :
                                            <FavouriteIcon color="#222"/>

                                        }  
                                        </div>
                                

                                    </Button>
                                </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                )
            })}
           
           
        </Swiper>
        </Col>}
      </Row>}

      { step == "begin-learning" && <SuccessState/>}
      
    </>
  );
}


export default withAuth(CheckoutPage);

