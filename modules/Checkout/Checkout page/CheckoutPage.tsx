/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from "react";
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
import { GuaranteeIcon, ArrowLeftIcon, PaySafeIcon, RemoveIcon,TickIcon , CartIcon, FavouriteIcon,AddedToCartIcon,AddedToFavouriteIcon } from "common/Icons/Icons";
import { handleFav } from "modules/_Shared/utils/handleFav";
import { handleCart } from "modules/_Shared/utils/handleCart";
import { setCartItems } from "configurations/redux/actions/cartItems"; 
import Router, { useRouter }  from "next/router";
import Head from "next/head";
import { Frames, CardNumber, ExpiryDate, Cvv } from 'frames-react';
import { PayPalButtons } from "@paypal/react-paypal-js";
import { setTransactionStatus } from "configurations/redux/actions/transactionStatus";
import { setInvoiceDetails } from 'configurations/redux/actions/invoiceDetails';
import TadarabFBPixel from "modules/_Shared/utils/fbPixel";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import TadarabGA from "modules/_Shared/utils/ga";
import { FBPixelEventsHandler } from "modules/_Shared/utils/FBPixelEvents";
import Link from "next/link";
import { setCheckoutType } from "configurations/redux/actions/checkoutType"; 


function CheckoutPage(props:any) {

  SwiperCore.use([Navigation]);
  const router = useRouter();
  const [step, setStep] = useState("added-courses");
  const [paymentSettings, setPaymentSettings] = useState<any>(null);
  const [paymentMethod, setPaymentMethod] = useState<any>("");
  const [localStateCartItems, setLocalStateCartItems] = useState<any>([]);
  const [mobileView, setMobileView] = useState(false);
  const [isTransactionSucceeded, setIsTransactionSucceeded] = useState(false);
  const [isCouponApplied, setIsCouponApplied] = useState({status:false,discounted_amount:0,value:""});
  const [errorMessage, setErrorMessage] = useState("");
  const [serverResponse, setServerResponse] = useState("");
  const [relatedCourses, setRelatedCourses] = useState<any>([]);
  const [checkoutTransactionDetails, setCheckoutTransactionDetails] = useState<any>(null);
//   const [previousData, setPreviousData] = useState({step:"added-courses",localStateCartItems:[]});
 const dispatch = useDispatch();
 const cartItems = useSelector((state:any) => state.cartItems);
 const userStatus = useSelector((state:any) => state.userAuthentication);
 const transactionStatus = useSelector((state:any) => state.transactionStatus);
 const checkoutType = useSelector((state:any) => state.checkoutType);

 const [succeeded, setSucceeded] = useState(false);
const [paypalErrorMessage, setPaypalErrorMessage] = useState("");
const [orderID, setOrderID] = useState(false);
const [billingDetails, setBillingDetails] = useState("");

 
useEffect(() => {

    const navbar: any = document.getElementById("nav");
    const stepperBox: any = document.getElementById("stepper-box");
    const list: any = document.getElementsByTagName("ol")[0];
    const checkedRadioBtn:any = document.querySelector('input[name="payment-type"]:checked');
    // const unCheckedRadioBtns:any = document.querySelectorAll('input[name="payment-type"]:not(:checked)');
    stepperBox.style.cssText = `top:${navbar.offsetHeight}px`;
    const localStorageItems:any = localStorage.getItem("cart");
    
    axiosInstance
        .get(`users/cart/related-courses/?country_code=${localStorage.getItem("countryCode")}&course_ids=${localStorageItems?.replace(/[\[\]']+/g,'')}`)
        .then(function (response:any) {

            // setRelatedCourses(response.data.data);
            
            if(response.data.data !== undefined){
                if(localStorageItems !== "[]" && localStorageItems !== "null" && localStorageItems !== "undefined"){
                        axiosInstance
                        .get(`users/cart/?country_code=${localStorage.getItem("countryCode")}`)
                        .then(function (resp:any) {
                            // setLocalStateCartItems(resp.data.data);
                        let newArray:any = response.data.data;
                        if(resp.data.data !== undefined){
            
                            resp?.data?.data?.courses.forEach((element:any) => {
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


            }
        })
        .catch(function (error) {
          console.log(error); 
        });
        

        if(transactionStatus.data == true){
            setStep("begin-learning");
            setIsTransactionSucceeded(true);
        }else if(transactionStatus.data == false){
            setStep("begin-learning");
            setIsTransactionSucceeded(false);
        }
        
       

        // if(checkoutType == "subscription"){
        //     setStep("payment-types");
        // }else if(Router.query && Router.query.checkout_type == "subscription"){
        //     setStep("payment-types");
        // }

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
          Router.replace("/checkout");
          console.log("1");
          
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

    let tadarabGA = new TadarabGA();

    tadarabGA.tadarab_fire_traking_GA_code('view_cart',"");


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
    
    if(router.query && router.query.checkout_type == "subscription"){
        console.log("dispatch useEffect if");
        dispatch(setCheckoutType("subscription"));
        // Router.replace("/checkout/payment/?checkout_type=subscription");
        setStep("payment-types");
    }
    else{
        console.log("dispatch useEffect else");
        setStep("added-courses");
        dispatch(setCheckoutType("cart"));
        // Router.replace("/checkout/payment");

    }
  }, [dispatch,router.query]);


  

  useEffect(() => {
    if(transactionStatus.data == true){
        setStep("begin-learning");
        setIsTransactionSucceeded(true);
    }else if(transactionStatus.data == false){
        setStep("begin-learning");
        setIsTransactionSucceeded(false);
    }
  }, [transactionStatus])
  

  useEffect(() => {
    //   if(userStatus.isUserAuthenticated === true){
    //       setLocalStateCartItems(cartItems.data);
          
          
    //     }else if(userStatus.isUserAuthenticated === false){
        (async function () {
            
            const localStorageItems:any = localStorage.getItem("cart");

            if(localStorageItems !== "[]" && localStorageItems !== "null" && localStorageItems !== "undefined"){
          await  axiosInstance
            .get(`users/cart/?country_code=${localStorage.getItem("countryCode")}`)
            .then(function (response:any) {
              setLocalStateCartItems(response?.data?.data.courses);
              FBPixelEventsHandler(response.data.fb_tracking_events,null);

        })
        .catch(function (error) {
          console.log(error); 
        });
    }else{
        setLocalStateCartItems([]);
    }

        })();

    //   }

  }, [cartItems])
  
  useEffect(() => {
    const firstStepBox:any = document.getElementById("added-courses");
    const secondStepBox:any = document.getElementById("payment-types");
    const thirdStepBox:any = document.getElementById("begin-learning");
    
    switch (step) {
        case "added-courses":
            firstStepBox ? firstStepBox.innerHTML = '1' : null;
            secondStepBox.innerHTML = `${checkoutType == "subscription" ? "1" : "2"}`;
            thirdStepBox.innerHTML = `${checkoutType == "subscription" ? "2" : "3"}`;
            // Router.replace("/checkout");
             if(Router.query && Router.query.checkout_type == "subscription"){
                    console.log("2switch2");
                    dispatch(setCheckoutType("subscription"));
                    Router.replace("/checkout/payment/?checkout_type=subscription");
                }
                else{
                    console.log("switch 2 else2");
                    dispatch(setCheckoutType("cart"));
                    Router.replace("/checkout");
                }
            console.log("2");
            

          break;
        case "payment-types":
            !(userStatus.isUserAuthenticated) &&
                     Router.push({
                        pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}checkout/auth`,
                        query: { from: "/checkout" }
                      },);
                      
                      
                firstStepBox ? firstStepBox.style.cssText=`pointer-events: all` : null;
                firstStepBox ? firstStepBox.innerHTML = 
                `<svg id="added-courses" xmlns="http://www.w3.org/2000/svg" width="1rem" height="0.75rem" viewBox="0 0 15.629 12">
                <g id="added-courses"  transform="translate(-7.983 -9.033)">
                  <path id="added-courses" data-name="Path 13142" d="M8.546,16.842a1.922,1.922,0,0,1,2.718-2.718l2.27,2.269,6.8-6.8a1.922,1.922,0,1,1,2.718,2.718l-8.16,8.154a1.918,1.918,0,0,1-2.718,0L8.546,16.842Z" transform="translate(0)" fill="#fff"/>
                </g>
              </svg>
              ` : null ;
                secondStepBox.innerHTML = `${checkoutType == "subscription" ? "1" : "2"}`;
                thirdStepBox.innerHTML = `${checkoutType == "subscription" ? "2" : "3"}`;
                axiosInstance
                .get("payments/settings",{ headers: {"X-Settings-Key" : `DSF68H46SD4HJ84RYJ4FGHFDGJDFGJDFN16DFG69J4D6FJ46FDN16D4J84RE96J46SFN1S6FG1N6DFJ6GM4D6F9GNM6SFJG644S65H4N1BS6H1A65F4654DGSS64DG`} })
                .then(function (response:any) {
                    setPaymentSettings(response?.data?.data);
                })
                .catch(function (error) {
                console.log(error);
                });
                // if(Router.query && Router.query.checkout_type == "subscription"){
                //     console.log("switch2");
                //     dispatch(setCheckoutType("subscription"));
                //     Router.replace("/checkout/payment/?checkout_type=subscription");
                // }
                // else{
                //     console.log("switch else2");
                //     dispatch(setCheckoutType("cart"));
                //     Router.replace("/checkout/payment");
                // }


          break;
        case "begin-learning":
            firstStepBox ? firstStepBox.style.cssText=`pointer-events: none` : null ;
            firstStepBox ? firstStepBox.innerHTML = `<svg id="added-courses" xmlns="http://www.w3.org/2000/svg" width="1rem" height="0.75rem" viewBox="0 0 15.629 12">
            <g  id="added-courses" transform="translate(-7.983 -9.033)">
              <path id="added-courses" data-name="Path 13142" d="M8.546,16.842a1.922,1.922,0,0,1,2.718-2.718l2.27,2.269,6.8-6.8a1.922,1.922,0,1,1,2.718,2.718l-8.16,8.154a1.918,1.918,0,0,1-2.718,0L8.546,16.842Z" transform="translate(0)" fill="#fff"/>
            </g>
          </svg>
          ` : null;
          secondStepBox.style.cssText=`pointer-events: none`;
            secondStepBox.innerHTML = `<svg id="payment-types" xmlns="http://www.w3.org/2000/svg" width="1rem" height="0.75rem" viewBox="0 0 15.629 12">
            <g id="payment-types" transform="translate(-7.983 -9.033)">
              <path id="payment-types" data-name="Path 13142" d="M8.546,16.842a1.922,1.922,0,0,1,2.718-2.718l2.27,2.269,6.8-6.8a1.922,1.922,0,1,1,2.718,2.718l-8.16,8.154a1.918,1.918,0,0,1-2.718,0L8.546,16.842Z" transform="translate(0)" fill="#fff"/>
            </g>
          </svg>
          `;
          thirdStepBox.style.cssText=`pointer-events: none`;
            thirdStepBox.innerHTML = `${checkoutType == "subscription" ? "2" : "3"}`;
            isTransactionSucceeded ?
            Router.replace("/checkout/success")
            :
            Router.replace("/checkout/failed");


          break;
        default:
          break;
      }
  }, [step,userStatus])


  useEffect(() => {
      let isExecuted:boolean = false;
      
        if(JSON.stringify(localStateCartItems) !== "[]" &&
         localStateCartItems !== null &&
          localStateCartItems !== undefined &&
          JSON.stringify(localStateCartItems) !== "" ){
                  
                let tadarabGA = new TadarabGA();
               
                let Products : any[] = [];
                let checkout_steps:any = {
                    products:[],
                    step:1,
                    label:""
                };
                let Step= 1;
                let Label= "checkout-step-1";
                 
                 if(step == "added-courses"){
                     Step = 1;
                     Label= "checkout-step-1";
                 }else if(step == "payment-types"){
                     Step = 2;
                     Label= "checkout-step-2";
                 }
         
                 localStateCartItems?.forEach((item:any,key:any,localStateCartItems:any)=>{
                     Products[key]={
                         id: item.id,
                         name: item.title,
                         price: item.discounted_price_usd,
                         brand: "Tadarab",
                         category: item.categories['0'].title,
                         variant: 'Single Course',
                         quantity:1
                     };

                    if((key === localStateCartItems.length -1) && isExecuted == false){

                        checkout_steps.products = Products;
                        checkout_steps.step = Step; // 1/2
                        checkout_steps.label = Label; // checkout-step-1 OR  checkout-step-2
                        tadarabGA.tadarab_fire_traking_GA_code('checkout_steps', checkout_steps);
                        isExecuted = true;
                    }
                 })
        }

    
  }, [step,localStateCartItems])
  

  const radioBtnsHandler = ()=>{
    const checkedRadioBtn:any = document.querySelector('input[name="payment-type"]:checked');
    const unCheckedRadioBtns:any = document.querySelectorAll('input[name="payment-type"]:not(:checked)');
    const infoBox:any = document.getElementById('card-info-box');
    setPaymentMethod(checkedRadioBtn.value);
    
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

  const promoCodeHandler = (e:any)=>{
      e.preventDefault();
    const localStorageItems:any = localStorage.getItem("cart");
    if(e.target[0].value == "" || e.target[0].value == null){
        setErrorMessage("الرجاء إدخال الكوبون");
    }else{
        axiosInstance
            .post(`coupons/${e.target[0].value}/?country_code=${localStorage.getItem("countryCode")}`, {"course_ids" : localStorageItems?.replace(/[\[\]']+/g,'')})
            .then((response:any) => {
             console.log(response);
             if(response.status.toString().startsWith("2")){
                 setIsCouponApplied({status:true,discounted_amount:response.data.data.total_discount_amount,value:e.target[0].value})
                 localStorage.setItem("coupon_code",e.target[0].value)
                 let tadarabGA = new TadarabGA();
                 tadarabGA.tadarab_fire_traking_GA_code("coupon_activation",
                    {coupon_name:e.target[0].value});
                
                 setErrorMessage("");
    
             }else {
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
    const handleFavResponse:any =  handleFav(course,`users/cart/related-courses/?country_code=${localStorage.getItem("countryCode")}&course_ids=${localStorageItems?.replace(/[\[\]']+/g,'')}`);
    handleFavResponse.then(function(response:any) {
        setRelatedCourses(response.data.data);
    })
    }else{
      Router.push({
        pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}signin`,
        query: { from: "/checkout" }
      })
    }
  }

  const handleCartActionBtn = (course:any):any =>{
    dispatch(setCheckoutType("cart"));

    const localStorageItems:any = localStorage.getItem("cart");
    let url:string;
    if(course.is_in_cart){

      url = `users/cart/related-courses/?country_code=${localStorage.getItem("countryCode")}&course_ids=${localStorageItems?.replace(/[\[\]']+/g,'').replace(`${course.id},`,'')
      .replace(`,${course.id}`,'')

}`;
    }else{

      url = `users/cart/related-courses/?country_code=${localStorage.getItem("countryCode")}&course_ids=${localStorageItems?.replace(/[\[\]']+/g,'')},${course.id}`;
    }
    
    // if(userStatus?.isUserAuthenticated == true){
        
      const handleCartResponse:any =  handleCart([course],url,false);
      handleCartResponse.then(function(firstresponse:any) {
        firstresponse.resp.then(function(response:any){
            setRelatedCourses(response.data.data || []);
            dispatch(setCartItems(firstresponse.cartResponse));
        })
      //  setLocalCartItems(response.totalItems);
      })
    // }
    // else{
    //   const handleCartResponse:any =  handleCart([course],url,false);
    //   handleCartResponse.then(function(response:any) {
    //       dispatch(setCartItems(response.data.data));

    //       let newArray:any = relatedCourses;
    //       response.data.data?.forEach((element:any) => {
    //        newArray.forEach((ele:any) => {
    //            if(element.id === ele.id){
    //              console.log(ele);
    //              ele.is_in_cart = true;
    //          }
    //      });
    //  });
    //  setRelatedCourses([...newArray]);
   
    //   })
    // }
    // setLatestCourses([...latestCourses]);
  }



// handles payment errors
const onError = (data:any,actions:any)=>{
   setPaypalErrorMessage("Something went wrong with your payment");
}

  return (
    <PayPalScriptProvider options={{ "client-id": "AeLqJFQeNFqlkkFkdnwMPpKQb9gkBag-B-34Rym8Pndoi_5u0W305sZzses1NIcyZYENmZjpyKQYxKMu" }}>
 
    <>
    <Head>
        <script async src="https://cdn.checkout.com/js/framesv2.min.js"></script>
    </Head>
      <div id="stepper-box" className={styles["checkout__stepper-box"]}>
        <ol
          id="stepper-list"
          className={styles["checkout__stepper-box__stepper"]}
        >
          { checkoutType !== "subscription" && <li
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
          </li>}
          <li
            className={`${
              step == "payment-types" || step == "begin-learning"
                ? styles["checkout__stepper-box__stepper__item--active"]
                : styles["checkout__stepper-box__stepper__item"]
            }
            ${
                checkoutType == "subscription"
                  ? styles["checkout__stepper-box__stepper__item--subscription"]
                  : styles["checkout__stepper-box__stepper__item"]
              }
            
            `}
          >
            <div
              id="payment-types"
              className={styles["checkout__stepper-box__stepper__step-number"]}
            >
              {`${checkoutType == "subscription" ? "1" : "2"}`}
            </div>
            <div className={styles["c-stepper__title"]}>وسائل الدفع</div>
          </li>
          <li
            className={`
            ${
                checkoutType == "subscription"
                  ? styles["checkout__stepper-box__stepper__item--subscription"]
                  : styles["checkout__stepper-box__stepper__item"]
              }
            ${
              step == "begin-learning"
                ? styles["checkout__stepper-box__stepper__item--active"]
                : styles["checkout__stepper-box__stepper__item"]
            }
            `}
          >
            <div
              id="begin-learning"
              className={styles["checkout__stepper-box__stepper__step-number"]}
            >
              {`${checkoutType == "subscription" ? "2" : "3"}`}
            </div>
            <div className={styles["c-stepper__title"]}>ابدأ التعلم</div>
          </li>
        </ol>
      </div>
      {(step == "added-courses" || step == "payment-types") && <Row className={styles["checkout"]}>
        <Col style={{borderBottom: localStateCartItems == null ? "none" : "0.1rem solid rgba(119, 119, 119, 0.2)"}} className={styles["checkout__course-content"]}>

            {
                checkoutType == "subscription" &&
                <div className={styles["checkout__subscription-benefits"]}>

                <div className={styles["checkout__subscription-benefits__title"]}>بمجرد إشتراكك ستحصل على</div>

                <div
                className={
                styles[
                    "checkout__subscription-benefits__sub-benefits"
                ]
                }
                >
                <span>

                <TickIcon/>
                </span>


                <span className={styles["checkout__subscription-benefits__sub-benefits__text"]}>مشاهدة بلا حدود لأكبر مكتبة دورات بالخليج أكثر من ٧٠٠ دورة تدريبية.</span>
                </div>
                <div
                className={
                styles[
                    "checkout__subscription-benefits__sub-benefits"
                ]
                }
                >
                <span>

                <TickIcon/>
                </span>


                <span className={styles["checkout__subscription-benefits__sub-benefits__text"]}>
                دورات جديدة تضاف بشكل شهري</span>
                </div>
                <div
                className={
                styles[
                    "checkout__subscription-benefits__sub-benefits"
                ]
                }
                >
                <span>

                <TickIcon/>
                </span>


                <span className={styles["checkout__subscription-benefits__sub-benefits__text"]}>
                عدد لا محدود من شهادات إتمام الدورات</span>
                </div>
                <div
                className={
                styles[
                    "checkout__subscription-benefits__sub-benefits"
                ]
                }
                >
                <span>

                <TickIcon/>
                </span>


                <span className={styles["checkout__subscription-benefits__sub-benefits__text"]}>
                مشاهدة الدورات من أي جهاز وبأي وقت</span>
                </div>
                <div
                className={
                styles[
                    "checkout__subscription-benefits__sub-benefits"
                ]
                }
                >
                <span>

                <TickIcon/>
                </span>


                <span className={styles["checkout__subscription-benefits__sub-benefits__text"]}>
                لا يوجد الترام  يمكنك إلغاء الاشتراك في أي وقت </span>
                </div>
            </div>}


            
           
          
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
                      
                     { !(paymentSettings == null) && !(paymentSettings == undefined) && 
                    <>
                    {console.log("paymentSettings",paymentSettings)
                    }
                     <Frames 
                        config={{
                            debug: true,
                            publicKey: `${paymentSettings?.visamaster.public_key}`,
                            localization: {
                                cardNumberPlaceholder: 'رقم البطاقة',
                                expiryMonthPlaceholder: '(YY) سنة',
                                expiryYearPlaceholder: '(MM) شهر ',
                                cvvPlaceholder: ' الرقم السري (CVV)',
                            },
                            environment: 'sandbox',
                            style: {
                                base: {
                                    fontSize: '1.2em',
                                    direction: 'rtl',
                                    padding: '0 1.5rem',
                                    fontFamily: "'Almarai', sans-serif !important",
                                    color: '#222222',
                                    border: '0.0625rem solid #2222221A',
                                    borderRadius: '0.75rem',
                                },
                                autofill: {
                                  backgroundColor: 'yellow',
                                },
                                hover: {
                                  color: '#222222',
                                },
                                focus: {
                                  color: '#222222',
                                },
                                valid: {
                                  color: 'green',
                                },
                                invalid: {
                                  color: 'red',
                                  border:"1px solid red"
                                },
                                placeholder: {
                                  base: {
                                    color: 'gray',
                                  },
                                },
                              },
                        }}
                        ready={() => {}}
                        frameActivated={(e:any) => {}}
                        frameFocus={(e:any) => {}}
                        frameBlur={(e:any) => {}}
                        frameValidationChanged={(e:any) => {}}
                        paymentMethodChanged={(e:any) => {}}
                        cardValidationChanged={(e:any) => {
                            const submitBtn:any = document.getElementById("paynow_button");
                            if (Frames.isCardValid()) {
                            submitBtn ? submitBtn.style.cssText=`pointer-events:all;opacity:1` : null;
                         } else {
                            submitBtn ? submitBtn.style.cssText=`pointer-events:none;opacity:0.7` : null;
                            }
                            
                        }}
                        cardSubmitted={(e:any) => {
                            console.log("DGFDDDFGDGDGFDGFDG:");
                            console.log(e);
                        }}
                        cardTokenized={(e:any) => {
                        // const localStorageItems:any = localStorage.getItem("cart_items");

                        //     console.log(e);
                        //     axiosInstance.post(`payments/payouts/?country_code=${localStorage.getItem("countryCode")}`, {
                        //       "action": "web",
                        //       "checkout_token": e.token,
                        //       "items": localStorageItems,
                        //       "coupon_code": localStorage.getItem("coupon_code"),
                        //       "payment_method":"visamaster",
                        //       "checkout_type": checkoutType == "subscription" ? "subscription" : "cart"
                        //     })
                        //     .then((response:any) => {
                        //       if(JSON.stringify(response.status).startsWith("2")){
                        //         localStorage.setItem("successUrl" , response.data.data.success_url);
                        //         localStorage.setItem("failureUrl" , response.data.data.failure_url);
                        //         Router.push(response.data.data.redirect_url);
                        //       }else{
                        //         setServerResponse("حدث خطأ برجاء المحاولة مره أخري");
                        //       }
                             
                        //     })
                        //     .catch((error:any)=>{
                        //       console.log("error", error);
                        //     })
                        }
                    }
                        cardTokenizationFailed={(e:any) => {
                            console.log("cardTokenizationFailed");
                            
                        }}
                        cardBinChanged={(e:any) => {
                            console.log('cardBinChanged',Frames.isCardValid());
                        }}
                        
                    >
                        <CardNumber />
                        <ExpiryDate />
                        <Cvv />
                    </Frames>
                    </>
                    }
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
                    
                </div>
                {checkoutType !== "subscription" &&   <div id="payment-method3" className={styles["checkout__payment-method-box__payment-method"]}>
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
                    
                </div>}

            </div>}

            {mobileView == true && <div className={styles["checkout__cart-sticky-card-div"]}>

            { 
            checkoutType == "subscription" ? 
            <div className={styles["checkout__cart-sticky-card"]}>
                

                        <div className={styles["checkout__cart-sticky-card__subscribe-box"]}>
                            {/* <div>
                            قيمة الاشتراك
                            </div>
                            <div>
                                <span>100</span>
                                <span>دك/شهرياً</span>
                            </div> */}
                        <div className={styles["checkout__cart-sticky-card__subscribe-summary"]}>
                                <div className={styles["checkout__cart-sticky-card__subscribe-summary__title"]}>
                                ملخص الإشتراك 
                                </div>
                                <div className={styles["checkout__cart-sticky-card__subscribe-summary__details"]}>
                                    <span>
                                    المبلغ المدفوع اليوم
                                    </span>
                                    <span>
                                     0 دك
                                    </span>
                                     </div>
                                <div className={styles["checkout__cart-sticky-card__subscribe-summary__details__exp"]}> بعد ٧ أيام فترة التجربة  </div>
                                <div className={styles["checkout__cart-sticky-card__subscribe-summary__details"]}>
                                    <span>
                                          قيمة الإشتراك 
                                    </span>
                                    <span>
                                    9 دك

                                    </span>
                                      </div>
                                    
                             </div>

                            <Button>
                            ابدأ التعلم الآن
                            </Button>
                            <div className={styles["checkout__cart-sticky-card__subscribe-summary__cancel-sub"]}>
                            يمكنك إلغاء الاشتراك في أي وقت من حسابك على منصة تدرب

                            </div>

                           
                        </div>
                        


                { step == "payment-types" && <div className={styles["checkout__cart-sticky-card__pay-safely"]}>
                    <PaySafeIcon color="#6c757d" />
                    <span> ادفع بأمان وسهولة عبر تدرب </span>
                </div>}

                <div className={styles["checkout__cart-sticky-card__subscribe-summary__terms"]}>
                *نظام الإشتراكات يطبق الشروط والاحكام
                </div>

            </div>
            :
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
                    { JSON.stringify(localStateCartItems) !== "[]" &&

                    <div className={styles["checkout__cart-sticky-card__total-price-box__total-price"]}>
                        <span> {localStateCartItems?.map((item:any)=> item.discounted_price).reduce((prev:any, curr:any) => prev + curr, 0)} </span>
                        <span>{localStateCartItems !== undefined && localStateCartItems !== null && localStateCartItems[0]?.currency_code}</span>
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
                                <span>{localStateCartItems !== undefined && localStateCartItems !== null && localStateCartItems[0]?.currency_code}</span>
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
                    { JSON.stringify(localStateCartItems) !== "[]" &&

                    <div className={styles["checkout__cart-sticky-card__final-price-box__final-price"]}>
                    <span> {localStateCartItems?.map((item:any)=> item.discounted_price).reduce((prev:any, curr:any) => prev + curr, 0) 
                    - 
                    isCouponApplied.discounted_amount
                    } </span>
                        <span>{localStateCartItems !== undefined && localStateCartItems !== null && localStateCartItems[0]?.currency_code}</span>
                    </div>
                    }

                </div>

                { step == "added-courses" ?
                 <Button disabled={localStateCartItems == []  || localStateCartItems == null || localStateCartItems == undefined} onClick={()=>{ 
                    window.scrollTo({top: 0, behavior: "smooth"});
                     userStatus.isUserAuthenticated ?
                     setStep("payment-types")
                     :
                     Router.push({
                        pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}checkout/auth`,
                        query: { from: "/checkout" }
                      })
                    }} className={styles["checkout__cart-sticky-card__purchasing-btn"]}>
                  
                  الدفع

                </Button>
                :
                <div className="position-relative">
                  <div className={styles["checkout__server-response"]}>  {serverResponse !== "" && "حدث خطأ الرجاء المحاولة مره أخري"}  </div>  

                    { paymentMethod == "VISA" &&   <Button style={{pointerEvents:"none",opacity:"0.7"}} id="paynow_button"
                     onClick={() => {
                        Frames.isCardValid() ?
                        Frames.submitCard().then(function(data:any) {

                            const localStorageItems:any = localStorage.getItem("cart_items");
                            console.log(data);
                            alert(data.token);                          
                            axiosInstance.post(`payments/payouts/?country_code=${localStorage.getItem("countryCode")}`, {
                              "action": "web",
                              "checkout_token": data.token,
                              "items": localStorageItems,
                              "coupon_code": localStorage.getItem("coupon_code"),
                              "payment_method":"visamaster",
                              "checkout_type": checkoutType == "subscription" ? "subscription" : "cart"
                            })
                            .then((response:any) => {
                              if(JSON.stringify(response.status).startsWith("2")){
                                localStorage.setItem("successUrl" , response.data.data.success_url);
                                localStorage.setItem("failureUrl" , response.data.data.failure_url);
                                Router.push(response.data.data.redirect_url);
                              }else{
                                setServerResponse("حدث خطأ برجاء المحاولة مره أخري");
                              }
                             
                            })
                            .catch((error:any)=>{
                              console.log("error", error);
                            })
                           let tadarabGA = new TadarabGA();
                           console.log(data);
                           tadarabGA.tadarab_fire_traking_GA_code('checkout_option',{label:data.scheme,option:"visamaster"})
                       })
                        :
                        null;
                    }}
                    className={styles["checkout__cart-sticky-card__purchasing-btn"]}>
                        {/* إتمام الشراء (VISA) */}
                        إتمام الشراء
                    
                    </Button>}

                    { paymentMethod == "PAYPAL" && 
                    <div className={styles["checkout__cart-sticky-card__paypal"]}>
                        

                    { checkoutType == "subscription" ? 
                    
                    <PayPalButtons
                        style={{
                        color: "blue",
                        shape: "pill",
                        label: "subscribe",
                        tagline: false,
                        layout: "horizontal",
                        }}
                      
                          createSubscription={(data:any,actions:any)=>{
                            //   req to get plan id and prod id
                            return actions.subscription.create({
                                plan_id:{planid:'P-1VE83386SG308245LMJCAKQA'},
                                purchase_units:[{amount:{value:29}}],
                            });
                          }}
                        onApprove={(data:any, actions:any) => {
                                  
                                  return actions.order.capture().then(function (details:any) {
                                      const {payer} = details;
                                      setBillingDetails(payer);
                                      setSucceeded(true);
                                  
                                    axiosInstance
                                    .get(`payments/details?payment_method=paypal&
                                    checkout_transaction_id=${localStorage.getItem("checkoutTransactionId")}&
                                    paypal_order_id=${data.orderID}&
                                    subscription_id=${data.subscriptionID}&
                                    facil_atoken=${data.facilitatorAccessToken}&
                                    payment_id=${localStorage.getItem("paymentId")}`)
                                    .then(function (response:any) {
                                        if(response.status.toString().startsWith("2")){
                                            localStorage.removeItem("checkoutTransactionId");
                                            localStorage.removeItem("paymentId");
                                            dispatch(setTransactionStatus(response.data.data.is_successful));
                                            dispatch(setInvoiceDetails(response.data.data));
                                            let customData = {value: response.data?.transaction_details.amount_usd, currency: 'USD'};
                                            FBPixelEventsHandler(response.data.fb_tracking_events,customData);

                                            localStorage.setItem("cart" , "[]");
                                            dispatch(setCartItems([]));
                                        }else{
                                            dispatch(setTransactionStatus(false));
                                            dispatch(setInvoiceDetails({}));
                                        }

                                    })
                                    .catch(function (error) {
                                     console.log(error);
                                    });
                            })
                          }}
                       />
                       :
                       <PayPalButtons
                       style={{
                       color: "blue",
                       shape: "pill",
                       label: "pay",
                       tagline: false,
                       layout: "horizontal",
                       }}
                       createOrder={(data:any, actions:any):any => {
                           const localStorageItems:any = localStorage.getItem("cart_items");
                           let usdAmount:any = "";
                           let checkoutDetails:any = {};

                           return(async function(){
                               await axiosInstance.post(`payments/payouts/?country_code=${localStorage.getItem("countryCode")}`, {
                                   "action": "web",
                                   "checkout_token": "",
                                   "items": localStorageItems,
                                   "coupon_code": localStorage.getItem("coupon_code"),
                                   "payment_method":"paypal",
                                   "checkout_type": checkoutType == "subscription" ? "subscription" : "cart"
                                 })
                                 .then((response:any) => {
                                     if(JSON.stringify(response.status).startsWith("2")){
                                         localStorage.setItem("successUrl" , response.data.data.success_url);
                                         localStorage.setItem("failureUrl" , response.data.data.failure_url);
                                         localStorage.setItem("checkoutTransactionId" , response.data.data.checkout_transaction_id);
                                         localStorage.setItem("paymentId" , response.data.data.payment_id);
                                         usdAmount = response.data.data.amount_usd;
                                         setCheckoutTransactionDetails(response.data.data);
   
                                   }else{
                                     setServerResponse("حدث خطأ برجاء المحاولة مره أخري");
                                   }
                                   
                               }).catch((error:any)=>{
                                     setServerResponse("حدث خطأ برجاء المحاولة مره أخري");
                                   console.log("error", error);
                               })


                               return actions.order
                                 .create({
                                   purchase_units: [
                                     {
                                       amount: {
                                         // charge users $499 per order
                                         value: checkoutType == "subscription" ? 29.56 : usdAmount,
                                       },
                                     },
                                   ],
                                   // remove the applicaiton_context object if you need your users to add a shipping address
                                   application_context: {
                                     shipping_preference: "NO_SHIPPING",
                                   },
                                 })
                                 .then((orderID:any) => {
                                   setOrderID(orderID);
                                   return orderID;
                                 });
                           })()
                         }}
                       onApprove={(data:any, actions:any) => {
                         
                                 
                                 return actions.order.capture().then(function (details:any) {
                                     const {payer} = details;
                                     setBillingDetails(payer);
                                     setSucceeded(true);
                                    
                                   axiosInstance
                                   .get(`payments/details?payment_method=paypal&
                                   checkout_transaction_id=${localStorage.getItem("checkoutTransactionId")}&
                                   paypal_order_id=${data.orderID}&
                                   payment_id=${localStorage.getItem("paymentId")}`)
                                   .then(function (response:any) {
                                       if(response.status.toString().startsWith("2")){
                                           console.log('responseresponse',response);
                                           localStorage.removeItem("checkoutTransactionId");
                                           localStorage.removeItem("paymentId");
                                           dispatch(setTransactionStatus(response.data.data.is_successful));
                                           dispatch(setInvoiceDetails(response.data.data));

                                           let customData = {value: response.data?.transaction_details.amount_usd, currency: 'USD'};
                                           FBPixelEventsHandler(response.data.fb_tracking_events,customData);


                                           localStorage.setItem("cart" , "[]");
                                           dispatch(setCartItems([]));
                                       }else{
                                           dispatch(setTransactionStatus(false));
                                           dispatch(setInvoiceDetails({}));
                                       }

                                   })
                                   .catch(function (error) {
                                    console.log(error);
                                   });
                           })
                         }}
                      />
                       }
                    </div> 
                    }

                    {
                     paymentMethod == "KNET" &&  <Button  style={{pointerEvents:"none",opacity:"0.7"}}
                    className={styles["checkout__cart-sticky-card__purchasing-btn"]}>
                        إتمام الشراء 
                        {/* إتمام الشراء (KNET) */}
                    </Button>
                    }      

                </div>
                }
 
                {step == "added-courses" &&  <div className={styles["checkout__cart-sticky-card__complete-surfing-courses"]}>
                    <span>
                    <Link href="/courses?filter_type=all">
                    اكمل البحث عن دورات أخرى
                    </Link>
                    </span>
                    <ArrowLeftIcon color="#af151f"/>

                </div>}

                { step == "payment-types" && <div className={styles["checkout__cart-sticky-card__pay-safely"]}>
                    <PaySafeIcon color="#6c757d" />

                    <span> ادفع بأمان وسهولة عبر تدرب </span>
                </div>}

            </div>
            }

            </div>}

         { checkoutType !== "subscription" &&

         <>

            <div className={styles["checkout__course-content__title"]}>
                <span> محتويات السلة </span>
                {
                    JSON.stringify(localStateCartItems) !== "[]"  && localStateCartItems !== null && localStateCartItems !== undefined &&
                    <span>  ({localStateCartItems?.length} دورة) </span>
                    }
            </div>

            {
                    (JSON.stringify(localStateCartItems) == "[]" || localStateCartItems == null) &&
                <div className={styles["checkout__no-courses-in-your-cart"]}>
                    لا يوجد اي دورات في السلة الخاصة بك
                </div>
            }

            {JSON.stringify(localStateCartItems) !== "[]" && localStateCartItems?.map((it:any,i:number)=>{
                
                return(

                    <div  key={i} className={styles["checkout__cards-outer-box__card"]}>

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
                            <div onClick={()=>{handleCartActionBtn(it)}} className={styles["checkout__cards-outer-box__card__action-btns"]}>
                                <RemoveIcon color="#222"/>

                            </div>}
                        </div>
                )
            })}
         </>
          }


        </Col>
        { mobileView == false && <Col className={styles["checkout__cart-sticky-card-col"]}>
            {
                checkoutType == "subscription" ? 
            <div className={styles["checkout__cart-sticky-card"]}>
                

                        <div className={styles["checkout__cart-sticky-card__subscribe-box"]}>
                            {/* <div>
                            قيمة الاشتراك
                            </div>
                            <div>
                                <span>100</span>
                                <span>دك/شهرياً</span>
                            </div> */}
                        <div className={styles["checkout__cart-sticky-card__subscribe-summary"]}>
                                <div className={styles["checkout__cart-sticky-card__subscribe-summary__title"]}>
                                ملخص الإشتراك 
                                </div>
                                <div className={styles["checkout__cart-sticky-card__subscribe-summary__details"]}>
                                    <span>
                                    المبلغ المدفوع اليوم
                                    </span>
                                    <span>
                                     0 دك
                                    </span>
                                     </div>
                                <div className={styles["checkout__cart-sticky-card__subscribe-summary__details__exp"]}> بعد ٧ أيام فترة التجربة  </div>
                                <div className={styles["checkout__cart-sticky-card__subscribe-summary__details"]}>
                                    <span>
                                          قيمة الإشتراك 
                                    </span>
                                    <span>
                                    9 دك

                                    </span>
                                      </div>
                                    
                             </div>

                            <Button>
                            ابدأ التعلم الآن
                            </Button>
                            <div className={styles["checkout__cart-sticky-card__subscribe-summary__cancel-sub"]}>
                            يمكنك إلغاء الاشتراك في أي وقت من حسابك على منصة تدرب

                            </div>

                           
                        </div>
                        


                { step == "payment-types" && <div className={styles["checkout__cart-sticky-card__pay-safely"]}>
                    <PaySafeIcon color="#6c757d" />
                    <span> ادفع بأمان وسهولة عبر تدرب </span>
                </div>}

                <div className={styles["checkout__cart-sticky-card__subscribe-summary__terms"]}>
                *نظام الإشتراكات يطبق الشروط والاحكام
                </div>

            </div>
                :
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
                    { JSON.stringify(localStateCartItems) !== "[]" &&

                    <div className={styles["checkout__cart-sticky-card__total-price-box__total-price"]}>
                        <span> {localStateCartItems?.map((item:any)=> item.discounted_price).reduce((prev:any, curr:any) => prev + curr, 0)} </span>
                        <span>{localStateCartItems !== undefined && localStateCartItems !== null && localStateCartItems[0]?.currency_code}</span>
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
                                <span>{localStateCartItems !== undefined && localStateCartItems !== null && localStateCartItems[0]?.currency_code}</span>
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
                    { JSON.stringify(localStateCartItems) !== "[]" && localStateCartItems !== null && localStateCartItems !== undefined &&

                    <div className={styles["checkout__cart-sticky-card__final-price-box__final-price"]}>
                    <span> {localStateCartItems?.map((item:any)=> item.discounted_price).reduce((prev:any, curr:any) => prev + curr, 0) 
                    - 
                    isCouponApplied.discounted_amount
                    } </span>
                        <span>{localStateCartItems !== undefined && localStateCartItems !== null && localStateCartItems[0]?.currency_code}</span>
                    </div>
            }
                </div>

                { step == "added-courses" ?
                 <Button disabled={localStateCartItems == []  || localStateCartItems == null || localStateCartItems == undefined}
                  onClick={()=>{ 
                    window.scrollTo({top: 0, behavior: "smooth"});
                    userStatus.isUserAuthenticated ?
                    setStep("payment-types")
                    :
                    Router.push({
                       pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}checkout/auth`,
                       query: { from: "/checkout" }
                     })
                   }} className={styles["checkout__cart-sticky-card__purchasing-btn"]}>
                  
                  الدفع

                </Button>
                :
                <div className="position-relative">
                  <div className={styles["checkout__server-response"]}>  {serverResponse !== "" && "حدث خطأ الرجاء المحاولة مره أخري"}  </div>  
                    { paymentMethod == "VISA" &&  <Button  style={{pointerEvents:"none",opacity:"0.7"}} id="paynow_button"
                    onClick={() => {
                        Frames.isCardValid() ?
                        Frames.submitCard().then(function(data:any) {

                            const localStorageItems:any = localStorage.getItem("cart_items");
                            console.log(data);
                            alert(data.token);                          
                            axiosInstance.post(`payments/payouts/?country_code=${localStorage.getItem("countryCode")}`, {
                              "action": "web",
                              "checkout_token": data.token,
                              "items": localStorageItems,
                              "coupon_code": localStorage.getItem("coupon_code"),
                              "payment_method":"visamaster",
                              "checkout_type": checkoutType == "subscription" ? "subscription" : "cart"
                            })
                            .then((response:any) => {
                              if(JSON.stringify(response.status).startsWith("2")){
                                localStorage.setItem("successUrl" , response.data.data.success_url);
                                localStorage.setItem("failureUrl" , response.data.data.failure_url);
                                Router.push(response.data.data.redirect_url);
                              }else{
                                setServerResponse("حدث خطأ برجاء المحاولة مره أخري");
                              }
                             
                            })
                            .catch((error:any)=>{
                              console.log("error", error);
                            })
                           let tadarabGA = new TadarabGA();
                           tadarabGA.tadarab_fire_traking_GA_code('checkout_option',{label:data.scheme,option:"visamaster"})
                       })
                        :
                        null;
                    }}
                    className={styles["checkout__cart-sticky-card__purchasing-btn"]}>
                        إتمام الشراء
                        {/* إتمام الشراء (VISA) */}
                    </Button>}
                    { paymentMethod == "PAYPAL" && 
                    <div className={styles["checkout__cart-sticky-card__paypal"]}>

                        {checkoutType == "subscription" ?

                        <PayPalButtons
                        style={{
                        color: "blue",
                        shape: "pill",
                        label: "subscribe",
                        tagline: false,
                        layout: "horizontal",
                        }}
                      
                          createSubscription={(data:any,actions:any)=>{
                            //   req to get plan id and prod id
                            return actions.subscription.create({
                                plan_id:{planid:'P-1VE83386SG308245LMJCAKQA'},
                                purchase_units:[{amount:{value:29}}],
                            });
                          }}
                        onApprove={(data:any, actions:any) => {
                                  
                                  return actions.order.capture().then(function (details:any) {
                                      const {payer} = details;
                                      setBillingDetails(payer);
                                      setSucceeded(true);
                                  
                                    axiosInstance
                                    .get(`payments/details?payment_method=paypal&
                                    checkout_transaction_id=${localStorage.getItem("checkoutTransactionId")}&
                                    paypal_order_id=${data.orderID}&
                                    subscription_id=${data.subscriptionID}&
                                    facil_atoken=${data.facilitatorAccessToken}&
                                    payment_id=${localStorage.getItem("paymentId")}`)
                                    .then(function (response:any) {
                                        if(response.status.toString().startsWith("2")){
                                            localStorage.removeItem("checkoutTransactionId");
                                            localStorage.removeItem("paymentId");
                                            dispatch(setTransactionStatus(response.data.data.is_successful));
                                            dispatch(setInvoiceDetails(response.data.data));
                                            let customData = {value: response.data?.transaction_details.amount_usd, currency: 'USD'};
                                            FBPixelEventsHandler(response.data.fb_tracking_events,customData);

                                            localStorage.setItem("cart" , "[]");
                                            dispatch(setCartItems([]));
                                        }else{
                                            dispatch(setTransactionStatus(false));
                                            dispatch(setInvoiceDetails({}));
                                        }

                                    })
                                    .catch(function (error) {
                                     console.log(error);
                                    });
                            })
                          }}
                       />
                       :
                        <PayPalButtons
                        style={{
                        color: "blue",
                        shape: "pill",
                        label: "pay",
                        tagline: false,
                        layout: "horizontal",
                        }}
                        createOrder={(data:any, actions:any):any => {
                            const localStorageItems:any = localStorage.getItem("cart_items");
                            let usdAmount:any = "";
                            let checkoutDetails:any = {};

                            return(async function(){
                                await axiosInstance.post(`payments/payouts/?country_code=${localStorage.getItem("countryCode")}`, {
                                    "action": "web",
                                    "checkout_token": "",
                                    "items": localStorageItems,
                                    "coupon_code": localStorage.getItem("coupon_code"),
                                    "payment_method":"paypal",
                                    "checkout_type": checkoutType == "subscription" ? "subscription" : "cart"
                                  })
                                  .then((response:any) => {
                                      if(JSON.stringify(response.status).startsWith("2")){
                                          localStorage.setItem("successUrl" , response.data.data.success_url);
                                          localStorage.setItem("failureUrl" , response.data.data.failure_url);
                                          localStorage.setItem("checkoutTransactionId" , response.data.data.checkout_transaction_id);
                                          localStorage.setItem("paymentId" , response.data.data.payment_id);
                                          usdAmount = response.data.data.amount_usd;
                                          setCheckoutTransactionDetails(response.data.data);
    
                                    }else{
                                      setServerResponse("حدث خطأ برجاء المحاولة مره أخري");
                                    }
                                    
                                }).catch((error:any)=>{
                                      setServerResponse("حدث خطأ برجاء المحاولة مره أخري");
                                    console.log("error", error);
                                })


                                return actions.order
                                  .create({
                                    purchase_units: [
                                      {
                                        amount: {
                                          value: checkoutType == "subscription" ? 29.56 : usdAmount,
                                        },
                                      },
                                    ],
                                    // remove the applicaiton_context object if you need your users to add a shipping address
                                    application_context: {
                                      shipping_preference: "NO_SHIPPING",
                                    },
                                  })
                                  .then((orderID:any) => {
                                    setOrderID(orderID);
                                    return orderID;
                                  });
                            })()
                          }}
                        onApprove={(data:any, actions:any) => {
                                  
                                  return actions.order.capture().then(function (details:any) {
                                      const {payer} = details;
                                      setBillingDetails(payer);
                                      setSucceeded(true);
                                  
                                    axiosInstance
                                    .get(`payments/details?payment_method=paypal&
                                    checkout_transaction_id=${localStorage.getItem("checkoutTransactionId")}&
                                    paypal_order_id=${data.orderID}&
                                    payment_id=${localStorage.getItem("paymentId")}`)
                                    .then(function (response:any) {
                                        if(response.status.toString().startsWith("2")){
                                            localStorage.removeItem("checkoutTransactionId");
                                            localStorage.removeItem("paymentId");
                                            dispatch(setTransactionStatus(response.data.data.is_successful));
                                            dispatch(setInvoiceDetails(response.data.data));
                                            let customData = {value: response.data?.transaction_details.amount_usd, currency: 'USD'};
                                            FBPixelEventsHandler(response.data.fb_tracking_events,customData);

                                            localStorage.setItem("cart" , "[]");
                                            dispatch(setCartItems([]));
                                        }else{
                                            dispatch(setTransactionStatus(false));
                                            dispatch(setInvoiceDetails({}));
                                        }

                                    })
                                    .catch(function (error) {
                                     console.log(error);
                                    });
                            })
                          }}
                       />
                    }
                    </div>
                    }

                { paymentMethod == "KNET" &&  <Button 
                    onClick={() => {
                        const localStorageItems:any = localStorage.getItem("cart_items");

                        axiosInstance.post(`payments/payouts/?country_code=${localStorage.getItem("countryCode")}`, {
                            "action": "web",
                            "checkout_token": "",
                            "items": localStorageItems,
                            "coupon_code": localStorage.getItem("coupon_code"),
                            "payment_method":"knet-direct",
                            "checkout_type": checkoutType == "subscription" ? "subscription" : "cart"
                        })
                          .then((response:any) => {
                              if(JSON.stringify(response.status).startsWith("2")){
                                  localStorage.setItem("successUrl" , response.data.data.success_url);
                                  localStorage.setItem("failureUrl" , response.data.data.failure_url);
                                  console.log("response",response);
                                  Router.push(response.data.data.redirect_url);

                            }else{
                              setServerResponse("حدث خطأ برجاء المحاولة مره أخري");
                            }
                            
                        }).catch((error:any)=>{
                              setServerResponse("حدث خطأ برجاء المحاولة مره أخري");
                            console.log("error", error);
                        })
                    }}
                    className={styles["checkout__cart-sticky-card__purchasing-btn"]}>
                        إتمام الشراء 
                        {/* إتمام الشراء (KNET) */}
                    </Button>
                    }
                </div>
                }

                { step == "added-courses" &&  <div className={styles["checkout__cart-sticky-card__complete-surfing-courses"]}>
                    <span>
                    <Link href="/courses?filter_type=all">
                    اكمل البحث عن دورات أخرى
                    </Link>
                    </span>
                    <ArrowLeftIcon color="#af151f"/>

                </div>}

                { step == "payment-types" && <div className={styles["checkout__cart-sticky-card__pay-safely"]}>
                    <PaySafeIcon color="#6c757d" />
                    <span> ادفع بأمان وسهولة عبر تدرب </span>
                </div>}

            </div>
            }

        </Col>}

      </Row>}

      {step == "added-courses" && JSON.stringify(localStateCartItems) !== "[]" && localStateCartItems !== null && localStateCartItems !== undefined   && <Row id="similar-courses-row" className={styles["checkout__similar-courses-row"]}>
      <Col xs={12} className={styles["checkout__similar-courses"]}>
        <div className={styles["checkout__similar-courses__title"]}>
            <div>الدورات مشابه قد تعجبك</div>
        </div>
      </Col>
      
        { JSON.stringify(localStateCartItems) !== "[]" && localStateCartItems !== null && localStateCartItems !== undefined   && <Col xs={12} className={styles["checkout__similar-courses__cards-carousel"]}>
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
                        <Card data-isvisible={false} data-coursedetails={JSON.stringify({
                                name:course.title,
                                id:course.id,
                                price:course.discounted_price_usd,
                                brand:"Tadarab",
                                category: "Recorded Course",
                                variant: "Single Course",
                                list: "suggetion",
                                position: i+1
                              })}
                              id={`checkout-related-courses__courses-card${i}`}
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
                            <Link href={`/course/${course.slug}`}>

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

                            </Link>
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
                                    <Link href={`/trainer/${course.trainer?.slug}`}>

                                        <img
                                        src={course.trainer.image}
                                        alt="trainer image"
                                        />

                                    </Link>
                                </div>
                                <div
                                    className={
                                    styles[
                                        "checkout__similar-courses__cards-carousel__course-card__card-body__card-header__course-details"
                                    ]
                                    }
                                >
                                    <Link href={`/course/${course.slug}`}>

                                        <h1 title={course.title}
                                        className={
                                            styles[
                                            "checkout__similar-courses__cards-carousel__course-card__card-body__card-header__course-details__title"
                                            ]
                                        }
                                        >
                                        {course.title}
                                        </h1>
                                    </Link>
                                    <Link href={`/trainer/${course.trainer?.slug}`}>

                                        <div title={course.trainer.name_ar}
                                        className={
                                            styles[
                                            "checkout__similar-courses__cards-carousel__course-card__card-body__card-header__course-details__author"
                                            ]
                                        }
                                        >
                                        {course.trainer.name_ar}
                                        </div>
                                    </Link>
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
                                  {course.is_purchased && "تم الشراء"}

                                        { !course.is_purchased && (course.discounted_price == 0 ?  "مجانًا" : course.discounted_price)}
                                    </span>
                                    <span
                                        className={
                                        styles[
                                            "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__price-container__currency"
                                        ]
                                        }
                                    >
                                        {course.discounted_price !== 0 && !course.is_purchased && course.currency_code}
                                    </span>
                                    </div>
                                    {
                                        (course.price > course.discounted_price) && !course.is_purchased
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
                                    { !course.is_purchased &&  <Button disabled={course.is_in_cart} variant={""}
                                    className={
                                        styles[
                                        "checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                                        ]
                                    }
                                    >
                                    <div onClick={()=>{
                                        handleCartActionBtn(course);
                                        let tadarabGA = new TadarabGA();
                                        const product =[{ name:course.title, id:course.id, price:course.discounted_price }];
                                        tadarabGA.tadarab_fire_traking_GA_code('remove_from_cart', product );
                                    }} 
                                     className={styles["checkout__similar-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__cart-icon"]}>
                                    {
                                        course.is_in_cart ? 
                                        <AddedToCartIcon color="#222"/>
                                        :
                                        <CartIcon color="#222"/>

                                    }
                                    </div>

                                    </Button>}
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
                                            <AddedToFavouriteIcon color="af151f"/>
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

      { step == "begin-learning" && ( isTransactionSucceeded ? <SuccessState/> : <FailedState/>)}
      
    </>
  </PayPalScriptProvider>
  );
}


export default withAuth(CheckoutPage);
