/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from "react";
import { Row, Col, Button, Form, Card, Spinner, Dropdown } from "react-bootstrap";
import styles from "./checkout-page.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import withAuth from "configurations/auth guard/AuthGuard";
import SuccessState from "../Success state/SuccessState";
import FailedState from "../Failed state/FailedState";
import { axiosInstance } from "configurations/axios/axiosConfig";
import { useDispatch, useSelector } from "react-redux";
import { GreyVerifiedIcon, GreyGuaranteeIcon } from "common/Icons/Icons";
import { handleFav } from "modules/_Shared/utils/handleFav";
import { handleCart } from "modules/_Shared/utils/handleCart";
// import { setCartItems } from "configurations/redux/actions/cartItems"; 
import { setCartItems } from "configurations/redux/actions/cartItems";
import Router, { useRouter } from "next/router";
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
import { setPaymentStep } from "configurations/redux/actions/paymentStep";
import { toggleLoader } from "modules/_Shared/utils/toggleLoader";
import { tokenValidationCheck } from "modules/_Shared/utils/tokenValidationCheck";
import { handleFreeCourses } from "modules/_Shared/utils/handleFreeCourses";
import { setIsUserAuthenticated } from "configurations/redux/actions/userAuthentication";
import { subscriptionCounter } from "modules/_Shared/utils/subscriptionCounter";
import TadarabUnlimited from "../TadarabUnlimited/TadarabUnlimited";

function CheckoutPage(props: any) {

    SwiperCore.use([Navigation]);
    const router = useRouter();
    const [step, setStep] = useState("added-courses"); // added-courses payment-types begin-learning
    const [paymentSettings, setPaymentSettings] = useState<any>(null);
    const [isSpinnerExist, setIsSpinnerExist] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState<any>("VISA");
    const [isVisaMasterFrameReady, setIsVisaMasterFrameReady] = useState(false);
    const [localStateCartItems, setLocalStateCartItems] = useState<any>([]);
    const [mobileView, setMobileView] = useState(false);
    const [isTransactionSucceeded, setIsTransactionSucceeded] = useState(false);
    const [isCouponApplied, setIsCouponApplied] = useState({ status: false, discounted_amount: 0, value: "", total_payment_amount: 0 });
    const [errorMessage, setErrorMessage] = useState("");
    const [serverResponse, setServerResponse] = useState("");
    const [relatedCourses, setRelatedCourses] = useState<any>([]);
    const [checkoutTransactionDetails, setCheckoutTransactionDetails] = useState<any>(null);
    const [subscriptionTimer, setSubscriptionTimer] = useState(0);
    const [toDisplayValues, setToDisplayValues] = useState<any>({ values: [], visible: false });
    const [disabledCartBtns, setDisabledCartBtns] = useState<any>([]);
    const [isDiscountLinkApplied, setIsDiscountLinkApplied] = useState(false);
    const [isFinalizePaymentBtnEnabled, setIsFinalizePaymentBtnEnabled] = useState(false);
    const [temporaryRemoval, setTemporaryRemoval] = useState<any>([]);
    const [isCoursesInSpecialBundle, setIsCoursesInSpecialBundle] = useState(false);
    const [threePlansSelection, setThreePlansSelection] = useState("yearly"); // monthly, yearly, midYearly
    const [subscriptionPlansBanks, setSubscriptionPlansBanks] = useState({ card_bin: 0, bank: "", subplan_id: "" }); // NBK, BOUBYAN, WARBA
    //   const [previousData, setPreviousData] = useState({step:"added-courses",localStateCartItems:[]});
    const [subPlan, setSubPlan] = useState<any>("yearly");
    const [paypalPlanId, setPaypalPlanId] = useState<any>(`${process.env.NEXT_PUBLIC_PAYPAL_PLAN_ID}`);
    const dispatch = useDispatch();
    const cartItems = useSelector((state: any) => state.cartItems);
    const userStatus = useSelector((state: any) => state.userAuthentication);
    const transactionStatus = useSelector((state: any) => state.transactionStatus);
    const checkoutType = useSelector((state: any) => state.checkoutType);
    const courseDetailsData = useSelector((state: any) => state.courseDetailsData);
    const userAuthState = useSelector((state: any) => state.userAuthentication);
    const themeState = useSelector((state: any) => state.themeState.theme);
    const { splan } = router.query;

    const [succeeded, setSucceeded] = useState(false);
    const [paypalErrorMessage, setPaypalErrorMessage] = useState("");
    const [orderID, setOrderID] = useState(false);
    const [billingDetails, setBillingDetails] = useState("");


    useEffect(() => {

        if (userAuthState.isUserAuthenticated && userAuthState.isSubscribed) {
            Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}my-account`);
        }
        const navbar: any = document.getElementById("nav");
        // const stepperBox: any = document.getElementById("stepper-box");
        const list: any = document.getElementsByTagName("ol")[0];
        const checkedRadioBtn: any = document.querySelector('input[name="payment-type"]:checked');
        // const unCheckedRadioBtns:any = document.querySelectorAll('input[name="payment-type"]:not(:checked)');
        // stepperBox ? stepperBox.style.cssText = `top:${navbar?.offsetHeight}px` : null;
        const localStorageItems: any = localStorage.getItem("cart");
        /* JSON.stringify(Router.query) == "{}" &&  */

        if (transactionStatus.data == true) {
            setStep("begin-learning");
            setIsTransactionSucceeded(true);
        } else if (transactionStatus.data == false) {
            setStep("begin-learning");
            setIsTransactionSucceeded(false);
        }



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

        let tadarabGA = new TadarabGA();

        tadarabGA.tadarab_fire_traking_GA_code('view_cart', "");

        return () => {
            list.removeEventListener("click", () => {
                return;
            });

            window.removeEventListener("resize", () => {
                return;
            });
        };
    }, []);

    useEffect(() => {
        const navbar: any = document.getElementById("nav");
        const stepperBox: any = document.getElementById("stepper-box");
        const checkedRadioBtn: any = document.querySelector('input[name="payment-type"]:checked');
        if (paymentSettings !== null && paymentSettings !== undefined) {

            if (window.innerWidth <= 576) {

                // stepperBox ? stepperBox.style.cssText = `top:${navbar?.offsetHeight}px` : null;
                const checkedRadioBtn: any = document.querySelector('input[name="payment-type"]:checked');
                const unCheckedRadioBtns: any = document.querySelectorAll('input[name="payment-type"]:not(:checked)');
                setMobileView(true);

                unCheckedRadioBtns.forEach((radBtn: any) => {
                    radBtn && radBtn.parentElement ? radBtn.parentElement.parentElement.style.cssText = `
            height: 12.5rem;
            overflow: hidden;
            box-shadow: 0 0 1.25rem #0000001A;
            border:none;
            `: null;
                    const relatedInfoBox: any = document.querySelector(`#${radBtn?.parentElement?.parentElement.id}  div#card-info-box`);
                    relatedInfoBox ? relatedInfoBox.style.cssText = `
            display:none;
            `:
                        null;

                });

                if (checkedRadioBtn) {
                    if (checkedRadioBtn.parentElement?.parentElement.id == "payment-method2" ||
                        checkedRadioBtn.parentElement?.parentElement.id == "payment-method3"
                    ) {

                        checkedRadioBtn && checkedRadioBtn.parentElement ? checkedRadioBtn.parentElement.parentElement.style.cssText = `
                    height: 12.5rem;
                    overflow: visible;
                    box-shadow: 0 0 1.25rem #AF2B3633;
                    border: 0.3125rem solid #AF151F;
                    ` : null;
                    } else {

                        checkedRadioBtn && checkedRadioBtn.parentElement ? checkedRadioBtn.parentElement.parentElement.style.cssText = `
                    height: 45rem;
                    overflow: visible;
                    box-shadow: 0 0 1.25rem #AF2B3633;
                    border: 0.3125rem solid #AF151F;
                    ` : null;
                    }

                }


            } else {

                // stepperBox ? stepperBox.style.cssText = `top:${navbar?.offsetHeight}px` : null;
                const checkedRadioBtn: any = document.querySelector('input[name="payment-type"]:checked');
                const unCheckedRadioBtns: any = document.querySelectorAll('input[name="payment-type"]:not(:checked)');
                setMobileView(false);
                unCheckedRadioBtns.forEach((radBtn: any) => {
                    radBtn && radBtn.parentElement ? radBtn.parentElement.parentElement.style.cssText = `
            height: 5rem;
            overflow: hidden;
            box-shadow: 0rem 0rem 1.25rem #0000001A;
            border:none;
            `: null;
                    const relatedInfoBox: any = document.querySelector(`#${radBtn?.parentElement?.parentElement.id}  div#card-info-box`);
                    relatedInfoBox ? relatedInfoBox.style.cssText = `
            display:none;
            `: null;

                });

                if (checkedRadioBtn) {

                    if (checkedRadioBtn.parentElement?.parentElement.id == "payment-method2" ||
                        checkedRadioBtn.parentElement?.parentElement.id == "payment-method3"
                    ) {
                        checkedRadioBtn && checkedRadioBtn.parentElement ? checkedRadioBtn.parentElement.parentElement.style.cssText = `
                        height: 5rem;
                        overflow: visible;
                        box-shadow: 0rem 0rem 1.25rem #AF2B3633;
                        border: 0.125rem solid #AF151F;
                        `: null;

                    } else {
                        checkedRadioBtn && checkedRadioBtn.parentElement ? checkedRadioBtn.parentElement.parentElement.style.cssText = `
                        height: 20.625rem;
                        overflow: visible;
                        box-shadow: 0rem 0rem 1.25rem #AF2B3633;
                        border: 0.125rem solid #AF151F;
                        `: null;
                    }

                }

            }

            if (checkedRadioBtn) {
                const relatedInfoBox: any = document.querySelector(`#${checkedRadioBtn?.parentElement?.parentElement.id}  div#card-info-box`);
                relatedInfoBox ? relatedInfoBox.style.cssText = `
        display:block;
        `: null;
            }
        }

        window.addEventListener("resize", () => {
            const checkedRadioBtn: any = document.querySelector('input[name="payment-type"]:checked');
            const unCheckedRadioBtns: any = document.querySelectorAll('input[name="payment-type"]:not(:checked)');
            // stepperBox ? stepperBox.style.cssText = `top:${navbar?.offsetHeight}px` : null;
            if (window.innerWidth <= 576) {
                setMobileView(true);
                // stepperBox ? stepperBox.style.cssText = `top:${navbar?.offsetHeight}px` : null;

                unCheckedRadioBtns.forEach((radBtn: any) => {
                    radBtn && radBtn.parentElement ? radBtn.parentElement.parentElement.style.cssText = `
            height: 12.5rem;
            overflow: hidden;
            box-shadow: 0 0 1.25rem #0000001A;
            border:none;
            `: null;
                    const relatedInfoBox: any = document.querySelector(`#${radBtn?.parentElement?.parentElement.id}  div#card-info-box`);
                    relatedInfoBox ? relatedInfoBox.style.cssText = `
            display:none;
            `: null;

                });

                if (checkedRadioBtn) {

                    if (checkedRadioBtn?.parentElement?.parentElement.id == "payment-method2" ||
                        checkedRadioBtn?.parentElement?.parentElement.id == "payment-method3"
                    ) {

                        checkedRadioBtn && checkedRadioBtn.parentElement ? checkedRadioBtn.parentElement.parentElement.style.cssText = `
                height: 12.5rem;
                overflow: visible;
                box-shadow: 0 0 1.25rem #AF2B3633;
                border: 0.3125rem solid #AF151F;
                `
                            :
                            null;
                    } else {
                        checkedRadioBtn && checkedRadioBtn.parentElement ? checkedRadioBtn.parentElement.parentElement.style.cssText = `
                height: 45rem;
                overflow: visible;
                box-shadow: 0 0 1.25rem #AF2B3633;
                border: 0.3125rem solid #AF151F;
                `
                            :
                            null;
                    }
                }

            } else {
                // stepperBox ? stepperBox.style.cssText = `top:${navbar?.offsetHeight}px` : null;
                setMobileView(false);
                unCheckedRadioBtns.forEach((radBtn: any) => {
                    radBtn && radBtn.parentElement ? radBtn.parentElement.parentElement.style.cssText = `
            height: 5rem;
            overflow: hidden;
            box-shadow: 0rem 0rem 1.25rem #0000001A;
            border:none;
            `: null;
                    const relatedInfoBox: any = document.querySelector(`#${radBtn?.parentElement?.parentElement.id}  div#card-info-box`);
                    relatedInfoBox ? relatedInfoBox.style.cssText = `
            display:none;
            `: null;

                });

                if (checkedRadioBtn) {
                    if (checkedRadioBtn?.parentElement?.parentElement.id == "payment-method2" ||
                        checkedRadioBtn?.parentElement?.parentElement.id == "payment-method3"
                    ) {
                        checkedRadioBtn && checkedRadioBtn.parentElement ? checkedRadioBtn.parentElement.parentElement.style.cssText = `
                  height: 5rem;
                  overflow: visible;
                  box-shadow: 0rem 0rem 1.25rem #AF2B3633;
                  border: 0.125rem solid #AF151F;
                  `
                            :
                            null;
                    } else {
                        checkedRadioBtn && checkedRadioBtn.parentElement ? checkedRadioBtn.parentElement.parentElement.style.cssText = `
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

            if (checkedRadioBtn) {
                const relatedInfoBox: any = document.querySelector(`#${checkedRadioBtn?.parentElement?.parentElement.id}  div#card-info-box`);
                relatedInfoBox ? relatedInfoBox.style.cssText = `
        display:block;
        `: null;
            }
        });


        return () => {
            window.removeEventListener("resize", () => {
                return;
            });
        }
    }, [paymentSettings]);


    useEffect(() => {

        if (localStorage.getItem("affiliate_id") && localStorage.getItem("affiliate_id") !== "") {
            setIsDiscountLinkApplied(true);
        }

        // setSubscriptionTimer
        document.cookie.split('; ').reduce((prev: any, current: any) => {
            const [name, ...value] = current.split('=');

            if (prev) {
                prev[name] = value.join('=');
                if ((prev.timer < (Math.floor(Date.now() / 1000))) || prev.timer == "NaN") {

                } else {

                    setSubscriptionTimer(prev['subscription-countdown'] - ((Math.floor(Date.now() / 1000))));
                    return prev;
                }
            }

        }, {});

    }, []);



    useEffect(() => {
        if (localStorage.getItem("affiliate_id") &&
            Math.floor(new Date().getTime() / 1000) > Number(localStorage.getItem("cced"))) {
            localStorage.removeItem("affiliate_id");
            localStorage.removeItem("cced");
            localStorage.setItem("coupon_code", "");
        }
    }, []);

    useEffect(() => {
        if (localStorage.getItem("coupon_code") && localStorage.getItem("coupon_code") !== "") {
            const couponInputField: any = document.querySelector('[name="couponField"]');
            couponInputField ? couponInputField.value = localStorage.getItem("coupon_code") : null;

        }
    }, [])

    useEffect(() => {
        console.log("paymentSettings", paymentSettings);
        console.log("paypalPlanId", paypalPlanId);
    }, [paymentSettings, paypalPlanId, threePlansSelection])

    useEffect(() => {
        if (userAuthState.isUserAuthenticated && userAuthState.isSubscribed) {
            Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}my-account`);
        }
    }, [userAuthState]);

    useEffect(() => {

        if (subscriptionTimer !== 0) {
            document.cookie.split('; ').reduce((prev: any, current: any) => {
                const [name, ...value] = current.split('=');
                if (prev) {
                    prev[name] = value.join('=');
                    setSubscriptionTimer(prev['subscription-countdown'] - ((Math.floor(Date.now() / 1000))));
                    if (Math.sign(Number(prev['subscription-countdown']) - ((Math.floor(Date.now() / 1000)))) !== -1) {

                        let interval = setInterval(() => {

                            // get total seconds between the times
                            let delta: any = Math.sign(Number(prev['subscription-countdown']) - ((Math.floor(Date.now() / 1000)))) !== -1 ?
                                Math.abs(prev['subscription-countdown'] - ((Math.floor(Date.now() / 1000))))
                                :
                                clearInterval(interval);
                            ;

                            // calculate (and subtract) whole days
                            let days: any = Math.floor(delta / 86400);
                            delta -= days * 86400;

                            // calculate (and subtract) whole hours
                            let hours: any = Math.floor(delta / 3600) % 24;
                            delta -= hours * 3600;

                            // calculate (and subtract) whole minutes
                            let minutes: any = Math.floor(delta / 60) % 60;
                            delta -= minutes * 60;

                            // what's left is seconds
                            let seconds: any = delta; // in theory the modulus is not required

                            days = days.toString().padStart(2, 0);
                            hours = hours.toString().padStart(2, 0);
                            minutes = minutes.toString().padStart(2, 0);
                            seconds = seconds.toString().padStart(2, 0);

                            if (days == '00' && hours == '00' && minutes == '00' && seconds == '00') {
                                setToDisplayValues({ ...toDisplayValues, visible: false });
                                clearInterval(interval);

                            } else {

                                setToDisplayValues({ values: [days, hours, minutes, seconds], visible: true });
                                return { days, hours, minutes, seconds }
                            }
                        }, 1000);

                    }
                }

                return prev;
            }, {});

        }

    }, [subscriptionTimer]);

    useEffect(() => {
        setSubPlan(router.query.splan);

        if (router.query.splan && router.query.splan == "yearly") {
            setPaypalPlanId(paymentSettings?.subscription_plans[0].paypal_id || "P-89Y527607T271593HMOK3YMQ");
        } else if (router.query.splan && router.query.splan == "monthly") {
            setPaypalPlanId(paymentSettings?.subscription_plans[1].paypal_id || "P-818762487H8311351MPL3ZUA");
        }
    }, [router.query]);


    useEffect(() => {

        if (router.query && router.query.checkout_type == "subscription"
            && !(Router.router?.asPath.includes('success')) && !(Router.router?.asPath.includes('failed'))) {
            dispatch(setCheckoutType("subscription"));
            // Router.replace("/checkout/payment/?checkout_type=subscription");
            setStep("payment-types");
            return;
        } else if ((Router.query && Router.query.checkout_type == "subscription" && Router.router?.asPath.includes('success'))
            || (Router.query && Router.query.checkout_type == "subscription" && Router.router?.asPath.includes('failed'))) {
            dispatch(setCheckoutType("subscription"));
            // Router.replace("/checkout/payment/?checkout_type=subscription");
            setStep("begin-learning");
        } else if (JSON.stringify(Router.query) == "{}") {
            // setStep("added-courses");
            dispatch(setCheckoutType("cart"));
            // Router.replace("/checkout/payment");

        }
    }, [dispatch, router.query]);


    useEffect(() => {
        if (transactionStatus.data == true) {
            setStep("begin-learning");
            setIsTransactionSucceeded(true);
        } else if (transactionStatus.data == false) {
            setStep("begin-learning");
            setIsTransactionSucceeded(false);
        }
    }, [transactionStatus]);

    useEffect(() => {
        if (router.query.ps && router.query.ps == "2") {
            setStep("payment-types");
        }
    }, [router.query])

    useEffect(() => {
        toggleLoader("show");
        const firstStepBox: any = document.getElementById("added-courses");
        const secondStepBox: any = document.getElementById("payment-types");
        const thirdStepBox: any = document.getElementById("begin-learning");


        switch (step) {
            case "added-courses":
                // toggleLoader("hide");
                firstStepBox ? firstStepBox.innerHTML = '1' : null;
                secondStepBox.innerHTML = `${checkoutType == "subscription" ? "1" : "2"}`;
                thirdStepBox.innerHTML = `${checkoutType == "subscription" ? "2" : "3"}`;
                // Router.replace("/checkout");
                if (Router.query && Router.query.checkout_type == "subscription"
                    && !(Router.router?.asPath.includes('success')) && !(Router.router?.asPath.includes('failed'))) {
                    dispatch(setCheckoutType("subscription"));
                    setStep("payment-types");
                    Router.replace(`/checkout/payment/?checkout_type=subscription&splan=${Router.query.splan}`);
                    return;

                } else if (router.query && router.query.checkout_type == "subscription"
                    && (Router.router?.asPath.includes('success')) || (Router.router?.asPath.includes('failed'))) {
                    dispatch(setCheckoutType("subscription"));
                    // Router.replace("/checkout/payment/?checkout_type=subscription");
                    setStep("begin-learning");
                }


                break;
            case "payment-types":
                // toggleLoader("hide");

                !(userStatus.isUserAuthenticated) &&
                    Router.push({
                        pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}sign-up%3Ffrom_subscription_plans=${router.query.from_subscription_plans}%26checkout_type=subscription%26splan=${router.query.from_subscription_plans}`,
                        // query: { from_subscription_plans: router.query.from_subscription_plans }
                    });


                firstStepBox ? firstStepBox.style.cssText = `pointer-events: all` : null;
                firstStepBox ? firstStepBox.innerHTML =
                    `<svg id="added-courses" xmlns="http://www.w3.org/2000/svg" width="1rem" height="0.75rem" viewBox="0 0 15.629 12">
                <g id="added-courses"  transform="translate(-7.983 -9.033)">
                  <path id="added-courses" data-name="Path 13142" d="M8.546,16.842a1.922,1.922,0,0,1,2.718-2.718l2.27,2.269,6.8-6.8a1.922,1.922,0,1,1,2.718,2.718l-8.16,8.154a1.918,1.918,0,0,1-2.718,0L8.546,16.842Z" transform="translate(0)" fill="#fff"/>
                </g>
              </svg>
              ` : null;
                secondStepBox.innerHTML = `${checkoutType == "subscription" ? "1" : "2"}`;
                thirdStepBox.innerHTML = `${checkoutType == "subscription" ? "2" : "3"}`;
                if (Router.query && Router.query.checkout_type == "subscription"
                    && !(Router.router?.asPath.includes('success')) && !(Router.router?.asPath.includes('failed'))) {
                    dispatch(setCheckoutType("subscription"));
                    // Router.replace("/checkout/payment/?checkout_type=subscription");
                }
                else if (JSON.stringify(Router.query) == "{}") {
                    dispatch(setCheckoutType("cart"));
                    Router.replace("/checkout/payment");
                }

                axiosInstance
                    .get(`payments/settings/?checkout_type=${checkoutType}`, { headers: { "X-Settings-Key": `DSF68H46SD4HJ84RYJ4FGHFDGJDFGJDFN16DFG69J4D6FJ46FDN16D4J84RE96J46SFN1S6FG1N6DFJ6GM4D6F9GNM6SFJG644S65H4N1BS6H1A65F4654DGSS64DG` } })
                    .then(function (response: any) {
                        if (JSON.stringify(response.status).startsWith("2")) {
                            if (tokenValidationCheck(response)) {
                                setPaymentSettings(response?.data?.data);
                            }
                            if (response?.data?.data?.is_user_subscription) {
                                Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}my-account`);
                            }
                        }
                        toggleLoader("hide");
                    })
                    .catch(function (error) {
                        toggleLoader("hide");
                        console.log(error);
                    });



                break;
            case "begin-learning":
                firstStepBox ? firstStepBox.style.cssText = `pointer-events: none` : null;
                firstStepBox ? firstStepBox.innerHTML = `<svg id="added-courses" xmlns="http://www.w3.org/2000/svg" width="1rem" height="0.75rem" viewBox="0 0 15.629 12">
            <g  id="added-courses" transform="translate(-7.983 -9.033)">
              <path id="added-courses" data-name="Path 13142" d="M8.546,16.842a1.922,1.922,0,0,1,2.718-2.718l2.27,2.269,6.8-6.8a1.922,1.922,0,1,1,2.718,2.718l-8.16,8.154a1.918,1.918,0,0,1-2.718,0L8.546,16.842Z" transform="translate(0)" fill="#fff"/>
            </g>
          </svg>
          ` : null;
                secondStepBox.style.cssText = `pointer-events: none`;
                secondStepBox.innerHTML = `<svg id="payment-types" xmlns="http://www.w3.org/2000/svg" width="1rem" height="0.75rem" viewBox="0 0 15.629 12">
            <g id="payment-types" transform="translate(-7.983 -9.033)">
              <path id="payment-types" data-name="Path 13142" d="M8.546,16.842a1.922,1.922,0,0,1,2.718-2.718l2.27,2.269,6.8-6.8a1.922,1.922,0,1,1,2.718,2.718l-8.16,8.154a1.918,1.918,0,0,1-2.718,0L8.546,16.842Z" transform="translate(0)" fill="#fff"/>
            </g>
          </svg>
          `;
                thirdStepBox.style.cssText = `pointer-events: none`;
                thirdStepBox.innerHTML = `${checkoutType == "subscription" ? "2" : "3"}`;
                if (Router.query && Router.query.checkout_type == "subscription"
                    && (Router.router?.asPath.includes('success')) || (Router.router?.asPath.includes('failed'))) {
                    dispatch(setCheckoutType("subscription"));

                    // Router.replace("/checkout/payment/?checkout_type=subscription");
                    isTransactionSucceeded ?
                        Router.replace(`/checkout/success/?checkout_type=subscription&splan=${Router.query.splan}`)
                        :
                        Router.replace(`/checkout/failed/?checkout_type=subscription&splan=${Router.query.splan}`);
                }
                else if (JSON.stringify(Router.query) == "{}") {
                    dispatch(setCheckoutType("cart"));
                    isTransactionSucceeded ?
                        Router.replace("/checkout/success")
                        :
                        Router.replace("/checkout/failed");
                }
                // isTransactionSucceeded ?
                // Router.replace("/checkout/success")
                // :
                // Router.replace("/checkout/failed");

                break;
            default:
                break;
        }
    }, [step])

    useEffect(() => {
        if (router.asPath.includes("checkout/payment") && step == "payment-types") {
            dispatch(setPaymentStep(true));
        } else {
            dispatch(setPaymentStep(false));
        }

        return () => {
            dispatch(setPaymentStep(false));
        }
    }, [router.asPath, step]);


    useEffect(() => {
        let isExecuted: boolean = false;

        if (JSON.stringify(localStateCartItems) !== "[]" &&
            localStateCartItems !== null &&
            localStateCartItems !== undefined &&
            JSON.stringify(localStateCartItems) !== "") {

            let tadarabGA = new TadarabGA();

            let Products: any[] = [];
            let checkout_steps: any = {
                products: [],
                step: 1,
                label: ""
            };
            let Step = 1;
            let Label = "checkout-step-1";

            if (step == "added-courses") {
                Step = 1;
                Label = "checkout-step-1";
            } else if (step == "payment-types") {
                Step = 2;
                Label = "checkout-step-2";
            }

            localStateCartItems?.forEach((item: any, key: any, localStateCartItems: any) => {
                Products[key] = {
                    id: item.id,
                    name: item.title,
                    price: item.discounted_price_usd,
                    brand: "Tadarab",
                    category: item.categories[0] !== undefined && item.categories[0].title,
                    variant: 'Single Course',
                    quantity: 1
                };

                if ((key === localStateCartItems.length - 1) && isExecuted == false) {

                    checkout_steps.products = Products;
                    checkout_steps.step = Step; // 1/2
                    checkout_steps.label = Label; // checkout-step-1 OR  checkout-step-2
                    tadarabGA.tadarab_fire_traking_GA_code('checkout_steps', checkout_steps);
                    isExecuted = true;
                }
            })
        }


    }, [step, localStateCartItems])

    const radioBtnsHandler = () => {
        const checkedRadioBtn: any = document.querySelector('input[name="payment-type"]:checked');
        const unCheckedRadioBtns: any = document.querySelectorAll('input[name="payment-type"]:not(:checked)');
        const infoBox: any = document.getElementById('card-info-box');
        setPaymentMethod(checkedRadioBtn?.value);

        if (document.documentElement.clientWidth <= 576) {
            unCheckedRadioBtns?.forEach((radBtn: any) => {
                radBtn && radBtn.parentElement ? radBtn.parentElement.parentElement.style.cssText = `
                height: 12.5rem;
                overflow: hidden;
                box-shadow: 0 0 1.25rem #0000001A;
                border:none;
                `: null;
                const relatedInfoBox: any = document.querySelector(`#${radBtn?.parentElement?.parentElement.id}  div#card-info-box`);
                relatedInfoBox ? relatedInfoBox.style.cssText = `
                display:none;
                `:
                    null;

            });
            // if (isVisaMasterFrameReady && checkedRadioBtn) {

            if (checkedRadioBtn?.parentElement?.parentElement.id == "payment-method2" ||
                checkedRadioBtn?.parentElement?.parentElement.id == "payment-method3"
            ) {
                checkedRadioBtn && checkedRadioBtn.parentElement ? checkedRadioBtn.parentElement.parentElement.style.cssText = `
                    height: 12.5rem;
                    box-shadow: 0 0 1.25rem #AF2B3633;
                    border: 0.3125rem solid #AF151F;
                    ` : null;
            } else {

                checkedRadioBtn && checkedRadioBtn.parentElement ? checkedRadioBtn.parentElement.parentElement.style.cssText = `
                    height: 45rem;
                    overflow: visible;
                    box-shadow: 0 0 1.25rem #AF2B3633;
                    border: 0.3125rem solid #AF151F;
                    ` : null;
            }
            // } else {
            //     setIsSpinnerExist(true);
            // }


        } else {
            unCheckedRadioBtns?.forEach((radBtn: any) => {
                radBtn && radBtn.parentElement ? radBtn.parentElement.parentElement.style.cssText = `
                height: 5rem;
                overflow: hidden;
                box-shadow: 0rem 0rem 1.25rem #0000001A;
                border:none;
                `: null;
                const relatedInfoBox: any = document.querySelector(`#${radBtn?.parentElement?.parentElement.id}  div#card-info-box`);
                relatedInfoBox ? relatedInfoBox.style.cssText = `
                display:none;
                `: null;

            });

            // if (isVisaMasterFrameReady && checkedRadioBtn) {
            if (checkedRadioBtn?.parentElement?.parentElement.id == "payment-method2" ||
                checkedRadioBtn?.parentElement?.parentElement.id == "payment-method3"
            ) {
                checkedRadioBtn && checkedRadioBtn.parentElement ? checkedRadioBtn.parentElement.parentElement.style.cssText = `
                    height: 5rem;
                    overflow: visible;
                    box-shadow: 0rem 0rem 1.25rem #AF2B3633;
                    border: 0.125rem solid #AF151F;
                    `: null;
            } else {
                checkedRadioBtn && checkedRadioBtn.parentElement ? checkedRadioBtn.parentElement.parentElement.style.cssText = `
                    height: 20.625rem;
                    overflow: visible;
                    box-shadow: 0rem 0rem 1.25rem #AF2B3633;
                    border: 0.125rem solid #AF151F;
                    `: null;
            }
            // } else {
            //     setIsSpinnerExist(true);
            // }
        }

        const relatedInfoBox: any = document.querySelector(`#${checkedRadioBtn?.parentElement?.parentElement.id}  div#card-info-box`);
        relatedInfoBox ? relatedInfoBox.style.cssText = `
        display:block;
        `: null;
    };


    // handles payment errors
    const onError = (data: any, actions: any) => {
        setPaypalErrorMessage("Something went wrong with your payment");
    }

    const KnetButtonComponent = () => {

        return (
            <Button
                onClick={() => {
                    setIsSpinnerExist(true);
                    const localStorageItems: any = localStorage.getItem("cart_items");

                    axiosInstance.post(`payments/payouts/?country_code=null`, {
                        "action": "web",
                        "checkout_token": "",
                        "items": localStorageItems,
                        "coupon_code": localStorage.getItem("coupon_code"),
                        "payment_method": "knet-direct",
                        "checkout_type": checkoutType == "subscription" ? "subscription" : "cart"
                    })
                        .then((response: any) => {
                            setIsSpinnerExist(false);
                            if (tokenValidationCheck(response)) {

                                if (JSON.stringify(response.status).startsWith("2")) {
                                    localStorage.setItem("successUrl", response.data.data.success_url);
                                    localStorage.setItem("failureUrl", response.data.data.failure_url);
                                    Router.push(response.data.data.redirect_url);

                                } else {
                                    setServerResponse("حدث خطأ برجاء المحاولة مره أخري");
                                }
                            }

                        }).catch((error: any) => {
                            setIsSpinnerExist(false);
                            setServerResponse("حدث خطأ برجاء المحاولة مره أخري");
                            console.log("error", error);
                        })
                }}
                className={styles["checkout__cart-sticky-card__purchasing-btn"]}>
                إتمام الشراء
            </Button>
        )
    }

    const VisamasterPaymentButtonComponent = () => {
        return (
            <Button style={isFinalizePaymentBtnEnabled ? {} : { pointerEvents: "none", opacity: "0.7" }} id="paynow_button"
                onClick={() => {
                    setIsSpinnerExist(true);
                    Frames.isCardValid() ?
                        Frames.submitCard().then(function (data: any) {

                            const localStorageItems: any = localStorage.getItem("cart_items");
                            axiosInstance.post(`payments/payouts/?country_code=null`, {
                                "action": "web",
                                "checkout_token": data.token,
                                "items": localStorageItems,
                                "coupon_code": localStorage.getItem("coupon_code"),
                                "payment_method": "visamaster",
                                "checkout_type": checkoutType == "subscription" ? "subscription" : "cart"
                            })
                                .then((response: any) => {
                                    setIsSpinnerExist(false);
                                    if (tokenValidationCheck(response)) {

                                        if (JSON.stringify(response.status).startsWith("2")) {

                                            localStorage.setItem("successUrl", response.data.data.success_url);
                                            localStorage.setItem("failureUrl", response.data.data.failure_url);
                                            Router.push(response.data.data.redirect_url);
                                        } else {
                                            setServerResponse("حدث خطأ برجاء المحاولة مره أخري");
                                        }
                                    }
                                })
                                .catch((error: any) => {
                                    setIsSpinnerExist(false);
                                    console.log("error", error);
                                })
                            let tadarabGA = new TadarabGA();
                            tadarabGA.tadarab_fire_traking_GA_code('checkout_option', { label: data.scheme, option: "visamaster" })
                        })
                        :
                        null;
                }}
                className={styles["checkout__cart-sticky-card__purchasing-btn"]}>
                إتمام الشراء
            </Button>
        )
    }

    const VisamasterSubscriptionButtonComponent = () => {
        return (
            <Button style={isFinalizePaymentBtnEnabled ? {} : { pointerEvents: "none", opacity: "0.7" }} id="paynow_button"
                onClick={() => {
                    setIsSpinnerExist(true);

                    Frames.isCardValid() ?
                        Frames.submitCard().then(function (data: any) {
                            console.log("data", data);
                            console.log("subscriptionPlansBanks", subscriptionPlansBanks);

                            const localStorageItems: any = localStorage.getItem("cart_items");
                            axiosInstance.post(`payments/payouts/?country_code=null`, {
                                "action": "web",
                                "checkout_token": data.token,
                                "payment_method": "visamaster",
                                "checkout_type": "subscription",
                                "subplan_id": subPlan == "yearly" ?
                                    paymentSettings?.subscription_plans[0].subplan_id :
                                    paymentSettings?.subscription_plans[1].subplan_id
                                ,
                                "card_bin": subscriptionPlansBanks.card_bin !== 0 && subscriptionPlansBanks.card_bin,
                                'page_id': courseDetailsData?.data?.course_details?.id,
                            })
                                .then((response: any) => {
                                    setIsSpinnerExist(false);
                                    if (tokenValidationCheck(response)) {

                                        if (JSON.stringify(response.status).startsWith("2")) {

                                            localStorage.setItem("successUrl", response.data.data.success_url);
                                            localStorage.setItem("failureUrl", response.data.data.failure_url);
                                            Router.push(response.data.data.redirect_url);
                                        } else {
                                            setServerResponse("حدث خطأ برجاء المحاولة مره أخري");
                                        }
                                    }

                                })
                                .catch((error: any) => {
                                    setIsSpinnerExist(false);
                                    console.log("error", error);
                                })
                            let tadarabGA = new TadarabGA();
                            tadarabGA.tadarab_fire_traking_GA_code('checkout_option', { label: data.scheme, option: "visamaster" })
                        })
                        :
                        null;
                }}
                className={styles["checkout__cart-sticky-card__purchasing-btn"]}>
                اتمام الدفع
                {/* {" "}{(subPlan && subPlan == "yearly") && paymentSettings?.subscription_plans[0].total_pay}{" "} */}
                {/* {" "}{(subPlan && subPlan == "monthly") && paymentSettings?.subscription_plans[1].total_pay}{" "} */}
                {/* {" "}{paymentSettings?.currency_symbol}{" "} */}
            </Button>
        )
    }

    return (
        <PayPalScriptProvider options={{ vault: true, components: 'buttons', "client-id": `${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}` }}>
            <>
                <Head>
                    <script async src="https://cdn.checkout.com/js/framesv2.min.js"></script>
                </Head>
                {isSpinnerExist && <div id="payment-spinner" className={styles["payment-spinner-loader"]}>
                    <Spinner animation="border" />
                </div>}
                <div id="stepper-box" className={styles["checkout__stepper-box"]}>
                    <ol
                        id="stepper-list"
                        className={styles["checkout__stepper-box__stepper"]}
                    >
                        {checkoutType !== "subscription" && <li
                            className={`${step == "added-courses" || step == "payment-types" || step == "begin-learning"
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
                            className={`${step == "payment-types" || step == "begin-learning"
                                ? styles["checkout__stepper-box__stepper__item--active"]
                                : styles["checkout__stepper-box__stepper__item"]
                                }
            ${checkoutType == "subscription"
                                    ? styles["checkout__stepper-box__stepper__item--subscription"]
                                    : styles["checkout__stepper-box__stepper__item"]
                                }`}>
                            <div
                                id="payment-types"
                                className={styles["checkout__stepper-box__stepper__step-number"]}
                            >
                                {`${checkoutType == "subscription" ? "1" : "2"}`}
                            </div>
                            <div className={styles["c-stepper__title"]}>
                                {
                                    checkoutType == "subscription" ?
                                        "تسجيل البيانات"
                                        :
                                        "وسائل الدفع"
                                }
                            </div>
                        </li>
                        <li
                            className={`
            ${checkoutType == "subscription"
                                    ? styles["checkout__stepper-box__stepper__item--subscription"]
                                    : styles["checkout__stepper-box__stepper__item"]
                                }
            ${step == "begin-learning"
                                    ? styles["checkout__stepper-box__stepper__item--active"]
                                    : styles["checkout__stepper-box__stepper__item"]
                                }`}>
                            <div
                                id="begin-learning"
                                className={styles["checkout__stepper-box__stepper__step-number"]}>
                                {`${checkoutType == "subscription" ? "2" : "3"}`}
                            </div>
                            <div className={styles["c-stepper__title"]}>ابدأ التعلم</div>
                        </li>
                    </ol>
                </div>

                {(step == "added-courses" || step == "payment-types") && <Row className={styles["checkout"]}>
                    <Col xs={{ span: 12 }} sm={{ span: 6 }} className={styles["checkout__course-content"]}>

                        {/** Payment options **/}
                        {step == "payment-types" &&
                            <div id="select-payment-method" className={styles["checkout__payment-method-box"]}>
                                {(!(paymentSettings == null) && !(paymentSettings == undefined)) ?
                                    <>
                                        <div className={styles["checkout__payment-method-box__title"]}>
                                            حدد وسيلة الدفع المناسبة لك
                                        </div>
                                        {/* VisaMaster Payment */}
                                        {(!(paymentSettings?.visamaster == null) && !(paymentSettings?.visamaster == undefined) && (paymentSettings?.visamaster.length != 0)) &&
                                            <>
                                                <div id="payment-method1" className={styles["checkout__payment-method-box__payment-method"]}>
                                                    <div className="d-flex align-items-center">
                                                        <input onClick={() => { radioBtnsHandler() }} checked={paymentMethod == "VISA"} type="radio" name="payment-type" value="VISA" className="form-check-input" />
                                                        <label htmlFor="visa">
                                                            <div className={styles["checkout__payment-method-box__payment-method__images"]}>
                                                                <img loading="lazy" className={styles["checkout__payment-method-box__payment-method__images__visa"]} src="/images/visa.png" alt="VISA" />
                                                                <img loading="lazy" className={styles["checkout__payment-method-box__payment-method__images__master-card"]} src="/images/Mastercard.png" alt="MASTER CARD" />
                                                            </div>
                                                            <div className={styles["checkout__payment-method-box__payment-method__text"]}>
                                                                بطاقات الائتمان / الخصم المباشر
                                                            </div>
                                                        </label>
                                                    </div>
                                                    <div id="card-info-box" className={styles["checkout__payment-method-box__payment-method__card-info"]}>
                                                        <Frames
                                                            config={{
                                                                debug: false,
                                                                publicKey: `${paymentSettings?.visamaster?.public_key}`,
                                                                localization: {
                                                                    cardNumberPlaceholder: 'رقم البطاقة',
                                                                    expiryMonthPlaceholder: '(YY) سنة',
                                                                    expiryYearPlaceholder: '(MM) شهر ',
                                                                    cvvPlaceholder: ' الرقم السري (CVV)',
                                                                },
                                                                environment: process.env.NEXT_PUBLIC_ENVIRONMENT,
                                                                style: {
                                                                    base: {
                                                                        fontSize: '1.2em',
                                                                        padding: '0 1.5rem',
                                                                        textAlign: "right",
                                                                        direction: "ltr",
                                                                        fontFamily: "'Almarai', sans-serif !important",
                                                                        color: '#222222',
                                                                        border: '0.0625rem solid #2222221A',
                                                                        borderRadius: '0.75rem',
                                                                        backgroundColor: "white"
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
                                                                        border: "1px solid red"
                                                                    },
                                                                    placeholder: {
                                                                        base: {
                                                                            color: 'gray',
                                                                            direction: "rtl",
                                                                            textAlign: "right"
                                                                        },
                                                                        focus: {
                                                                            direction: "rtl",
                                                                            textAlign: "right"
                                                                        }
                                                                    },
                                                                },
                                                            }}
                                                            ready={() => {
                                                                setIsVisaMasterFrameReady(true);
                                                                setIsSpinnerExist(false);
                                                            }}
                                                            frameActivated={(e: any) => { }}
                                                            frameFocus={(e: any) => { }}
                                                            frameBlur={(e: any) => { }}
                                                            frameValidationChanged={(e: any) => {
                                                            }}
                                                            paymentMethodChanged={(e: any) => { }}
                                                            cardValidationChanged={(e: any) => {
                                                                const submitBtn: any = document.getElementById("paynow_button");
                                                                if (Frames.isCardValid()) {
                                                                    if (submitBtn) {
                                                                        setIsFinalizePaymentBtnEnabled(true);
                                                                    }
                                                                }
                                                            }}
                                                            cardSubmitted={(e: any) => {
                                                                console.log("cardSubmitted", e);
                                                            }}
                                                            cardTokenized={(e: any) => {
                                                                console.log("cardTokenized", e);
                                                            }}
                                                            cardTokenizationFailed={(e: any) => {
                                                            }}
                                                            cardBinChanged={(e: any) => {
                                                                /** Identify the card first 6 digits is which associated with BANK  */
                                                                let card_bin = (e.bin), card6_bin = Number(card_bin.slice(0, 6));
                                                                console.log("card6_bin", typeof (card6_bin), card6_bin);
                                                                console.log("paymentSettings", paymentSettings);
                                                                if (paymentSettings?.NBK_bin.includes(card6_bin)) {
                                                                    // setSubscriptionPlansBanks({ card_bin: card6_bin, bank: "NBK", subplan_id: "a5Is2wQH" });
                                                                } else if (paymentSettings?.WARBA_bin.includes(card6_bin)) {
                                                                    // setSubscriptionPlansBanks({ card_bin: card6_bin, bank: "WARBA", subplan_id: "a5Is2wQH" });
                                                                } else if (paymentSettings?.BOUBYAN_bin.includes(card6_bin)) {
                                                                    // setSubscriptionPlansBanks({ card_bin: card6_bin, bank: "BOUBYAN", subplan_id: "" });
                                                                } else {
                                                                    // setSubscriptionPlansBanks({ card_bin: 0, bank: "", subplan_id: "" });
                                                                }
                                                            }}>
                                                            <CardNumber />
                                                            <ExpiryDate />
                                                            <Cvv />
                                                        </Frames>
                                                    </div>
                                                </div>
                                            </>}
                                        {/* VisaMaster Payment end */}

                                        {/* PAYPAL Payment */}
                                        {(!(paymentSettings?.paypal == null) && !(paymentSettings?.paypal == undefined) && (paymentSettings?.paypal?.length != 0)) &&
                                            <>
                                                <div id="payment-method2" className={styles["checkout__payment-method-box__payment-method"]}>
                                                    <div className="d-flex align-items-center">
                                                        <input onClick={() => radioBtnsHandler()} type="radio" name="payment-type" value="PAYPAL" className="form-check-input" />
                                                        <label htmlFor="paypal">
                                                            <div className={styles["checkout__payment-method-box__payment-method__images"]}>
                                                                <img loading="lazy" className={styles["checkout__payment-method-box__payment-method__images__paypal"]} src="/images/paypal.png" alt="PAYPAL" />
                                                            </div>
                                                            <div className={styles["checkout__payment-method-box__payment-method__text"]}>
                                                                الدفع عن طريق باي بال
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </>}
                                        {/* PAYPAL Payment end */}

                                        {/* KNET Payment */}
                                        {checkoutType !== "subscription" &&
                                            <div id="payment-method3" className={styles["checkout__payment-method-box__payment-method"]}>
                                                <div className="d-flex align-items-center">
                                                    <input onClick={() => radioBtnsHandler()} type="radio" name="payment-type" value="KNET" className="form-check-input" />
                                                    <label htmlFor="knet">
                                                        <div className={styles["checkout__payment-method-box__payment-method__images"]}>
                                                            <img loading="lazy" className={styles["checkout__payment-method-box__payment-method__images__knet"]} src="/images/knet.png" alt="PAYPAL" />
                                                        </div>
                                                        <div className={styles["checkout__payment-method-box__payment-method__text"]}>
                                                            الدفع عن طريق كي - نت
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>}
                                        {/* KNET Payment end */}
                                        {/* {
                                            checkoutType !== "subscription" &&
                                            <TadarabUnlimited />

                                        } */}
                                    </>
                                    :
                                    <div className={styles["payment-options-spinner"]}>
                                        <Spinner animation="border" style={{ display: "block", margin: "auto" }} />
                                    </div>
                                }
                            </div>
                        }

                        {/** terms & policy end **/}

                        <div className={styles["checkout__guarantee-boxes"]}>
                            {(subPlan && subPlan == "yearly") &&
                                <div className={styles["checkout__guarantee-boxes__box"]}>
                                    <div>
                                        <GreyGuaranteeIcon />
                                        <div>
                                            <div> 100% </div>
                                            <div> ضمان ذهبي </div>
                                        </div>
                                    </div>
                                    <div>
                                        ٧ ايام ضمان لاسترداد كامل المبلغ اذ لم تكن  راضي عن الخدمة
                                    </div>

                                </div>
                            }
                            <div className={styles["checkout__guarantee-boxes__box"]}>
                                <div>
                                    <GreyVerifiedIcon />
                                    <div>
                                        <div> 100% </div>
                                        <div> دفع بأمان </div>
                                    </div>
                                </div>
                                <div>
                                    الدفع بأمان وسهولة عبر منصة تدرب بواسطة أحدث طرق الحماية
                                </div>

                            </div>
                        </div>

                        {/* {mobileView == true &&
                            <div className={styles["checkout__cart-sticky-card-div"]}>
                                {checkoutType == "subscription" &&
                                    <div className={styles["checkout__cart-sticky-card__subscribe-summary"]}>


                                    </div>
                                }
                            </div>} */}

                    </Col>
                    {/* Subscription summary Desktop view */}
                    {<Col xs={{ span: 12 }} sm={{ span: 6 }} className={styles["checkout__cart-sticky-card-col"]}>
                        {
                            checkoutType == "subscription" &&
                            <div className={styles["checkout__cart-sticky-card"]}>
                                <div className={styles["checkout__cart-sticky-card__subscribe-box"]}>
                                    <div className={styles["checkout__cart-sticky-card__subscribe-box__title"]}>
                                        تفاصيل الإشتراك
                                        {" "}{(subPlan && subPlan == "yearly") && "السنوي"}{" "}
                                        {" "}{(subPlan && subPlan == "monthly") && "الشهري"}{" "}

                                        <div className={styles["checkout__cart-sticky-card__subscribe-box__title__pay-per-unit"]}>
                                            {" "}{(subPlan && subPlan == "yearly") && "مدة الاشتراك: 12 شهر "}{" "}
                                            {/* {" "}{(subPlan && subPlan == "monthly") && "اشتراك يدفع شهرياً"}{" "} */}

                                        </div>
                                    </div>

                                    {
                                        (paymentSettings !== null && paymentSettings !== undefined) ?
                                            <div className={styles["checkout__cart-sticky-card__subscribe-box__subscription-summary"]}>
                                                {(subPlan && subPlan == "yearly") &&
                                                    <div className={styles["checkout__cart-sticky-card__subscribe-box__subscription-summary__before-discount"]}>
                                                        <div>
                                                            <span> السعر قبل الخصم  </span>
                                                        </div>
                                                        <div>
                                                            <span>{" "} {paymentSettings?.subscription_plans[0].original_price} {" "}</span>
                                                            <span>
                                                                {" "} {paymentSettings?.subscription_plans[0].currency_symbol}{" "}
                                                            </span>
                                                        </div>
                                                    </div>}
                                                <div className={styles["checkout__cart-sticky-card__subscribe-box__subscription-summary__after-discount"]}>

                                                    <div>
                                                        السعر النهائي
                                                        {
                                                            (subPlan && subPlan == "yearly" && paymentSettings?.subscription_plans[0].discount_label !== "") ? "  (خصم" : ""
                                                        }
                                                        {
                                                            (subPlan && subPlan == "monthly" && paymentSettings?.subscription_plans[1].discount_label !== "") ? "  (خصم" : ""
                                                        }

                                                        {" "}  {(subPlan && subPlan == "yearly") && paymentSettings?.subscription_plans[0].discount_label.replace("ستوفر", "")} {" "}
                                                        {" "}  {(subPlan && subPlan == "monthly") && paymentSettings?.subscription_plans[1].discount_label.replace("ستوفر", "")} {" "}

                                                        {
                                                            (subPlan && subPlan == "yearly" && paymentSettings?.subscription_plans[0].discount_label !== "") ? ")" : ""
                                                        }
                                                        {
                                                            (subPlan && subPlan == "monthly" && paymentSettings?.subscription_plans[1].discount_label !== "") ? ")" : ""
                                                        }


                                                    </div>
                                                    <div>
                                                        <span>
                                                            {(subPlan && subPlan == "yearly") && paymentSettings?.subscription_plans[0].total_pay}
                                                            {(subPlan && subPlan == "monthly") && paymentSettings?.subscription_plans[1].total_pay}
                                                        </span>
                                                        <span>
                                                            {" "} {paymentSettings?.currency_symbol}{" "}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className={styles["checkout__cart-sticky-card__subscribe-box__subscription-summary__without-fees"]}>
                                                    بدون أي رسوم إضافية
                                                </div>
                                            </div>
                                            :
                                            <div id="payment-spinner" className={styles["payment-options-spinner"]}>
                                                <Spinner animation="border" />
                                            </div>
                                    }


                                    {
                                        !mobileView &&
                                        <>

                                            {
                                                paymentMethod == "PAYPAL" && window?.paypal?.Buttons !== undefined &&
                                                <>
                                                    {  // Yearly plan
                                                        paypalPlanId == `${process.env.NEXT_PUBLIC_PAYPAL_PLAN_ID}` &&
                                                        <PayPalButtons
                                                            style={{
                                                                color: "blue",
                                                                shape: "pill",
                                                                label: "subscribe",
                                                                tagline: false,
                                                                layout: "horizontal",
                                                            }}
                                                            createSubscription={(data: any, actions: any): any => {

                                                                setIsSpinnerExist(true);
                                                                return (
                                                                    axiosInstance.post(`payments/payouts/?country_code=null`, {
                                                                        "action": "web",
                                                                        "payment_method": "paypal",
                                                                        "checkout_type": "subscription",
                                                                        "subplan_id": subPlan == "yearly" ?
                                                                            paymentSettings?.subscription_plans[0].subplan_id :
                                                                            paymentSettings?.subscription_plans[1].subplan_id
                                                                        ,
                                                                        'page_id': courseDetailsData?.data?.course_details?.id,
                                                                    })
                                                                        .then((response: any) => {
                                                                            setIsSpinnerExist(false);
                                                                            if (tokenValidationCheck(response)) {
                                                                                if (JSON.stringify(response.status).startsWith("2")) {
                                                                                    localStorage.setItem("checkoutTransactionId", response.data.data.checkout_transaction_id);
                                                                                    localStorage.setItem("paymentId", response.data.data.payment_id);
                                                                                    setCheckoutTransactionDetails(response.data.data);

                                                                                    // setPaypalPlanId(paymentSettings?.paypal.planid);
                                                                                    console.log("paymentSettings", paymentSettings);
                                                                                    console.log("paypalPlanId", paypalPlanId);

                                                                                    return actions.subscription.create({
                                                                                        plan_id: `${process.env.NEXT_PUBLIC_PAYPAL_PLAN_ID}` || paymentSettings?.subscription_plans[0]?.paypal_id,
                                                                                        purchase_units: [{ amount: { value: paymentSettings?.usd_amount } }],
                                                                                    });

                                                                                } else {
                                                                                    setServerResponse("حدث خطأ برجاء المحاولة مره أخري");
                                                                                }
                                                                            }

                                                                        }).catch((error: any) => {
                                                                            setIsSpinnerExist(false);
                                                                            setServerResponse("حدث خطأ برجاء المحاولة مره أخري");
                                                                            console.log("error", error);
                                                                        })
                                                                )


                                                            }}
                                                            onApprove={(data: any, actions: any): any => {
                                                                setSucceeded(true);

                                                                axiosInstance
                                                                    .get(`payments/details?payment_method=paypal&
                                                 checkout_transaction_id=${localStorage.getItem("checkoutTransactionId")}&
                                                 paypal_order_id=${data.orderID}&
                                                 subscription_id=${data.subscriptionID}&
                                                 facil_atoken=${data.facilitatorAccessToken}&
                                                 page_id=${courseDetailsData?.data?.course_details?.id}&
                                                 checkout_type=subscription&
                                                 payment_id=${localStorage.getItem("paymentId")}`)
                                                                    .then(function (response: any) {
                                                                        setIsSpinnerExist(false);
                                                                        if (tokenValidationCheck(response)) {

                                                                            if (response.status.toString().startsWith("2")) {

                                                                                localStorage.removeItem("checkoutTransactionId");
                                                                                localStorage.removeItem("paymentId");
                                                                                dispatch(setTransactionStatus(response.data.data.is_successful));
                                                                                dispatch(setInvoiceDetails(response.data));

                                                                                let is_trial_free = ((response.data?.data?.transaction_details?.is_trial_free && response.data?.data?.transaction_details?.is_trial_free == true) ? true : false);
                                                                                let customData = {};
                                                                                if (!is_trial_free) {
                                                                                    customData = { value: response.data?.data?.transaction_details.amount_usd, currency: 'USD', content_type: 'online_subscription_purchase', predicted_ltv: 270 };
                                                                                }
                                                                                FBPixelEventsHandler(response?.data?.fb_tracking_events, customData);

                                                                                localStorage.setItem("cart", "[]");
                                                                                localStorage.removeItem("coupon_code");
                                                                                localStorage.removeItem("affiliate_id");
                                                                                localStorage.removeItem("cced");
                                                                                dispatch(setCartItems([]));
                                                                            } else {
                                                                                dispatch(setTransactionStatus(false));
                                                                                dispatch(setInvoiceDetails({}));
                                                                            }
                                                                        }
                                                                    })
                                                                    .catch(function (error) {
                                                                        setIsSpinnerExist(false);
                                                                        console.log(error);
                                                                    });
                                                            }}
                                                        />
                                                    }

                                                    { // Monthly plan
                                                        paypalPlanId == "P-818762487H8311351MPL3ZUA" &&
                                                        <PayPalButtons
                                                            style={{
                                                                color: "blue",
                                                                shape: "pill",
                                                                label: "subscribe",
                                                                tagline: false,
                                                                layout: "horizontal",
                                                            }}
                                                            createSubscription={(data: any, actions: any): any => {

                                                                setIsSpinnerExist(true);
                                                                return (
                                                                    axiosInstance.post(`payments/payouts/?country_code=null`, {
                                                                        "action": "web",
                                                                        "payment_method": "paypal",
                                                                        "checkout_type": "subscription",
                                                                        "subplan_id": subPlan == "yearly" ?
                                                                            paymentSettings?.subscription_plans[0].subplan_id :
                                                                            paymentSettings?.subscription_plans[1].subplan_id
                                                                        ,
                                                                        'page_id': courseDetailsData?.data?.course_details?.id,
                                                                    })
                                                                        .then((response: any) => {
                                                                            setIsSpinnerExist(false);
                                                                            if (tokenValidationCheck(response)) {
                                                                                if (JSON.stringify(response.status).startsWith("2")) {
                                                                                    localStorage.setItem("checkoutTransactionId", response.data.data.checkout_transaction_id);
                                                                                    localStorage.setItem("paymentId", response.data.data.payment_id);
                                                                                    setCheckoutTransactionDetails(response.data.data);

                                                                                    // setPaypalPlanId(paymentSettings?.paypal.planid);
                                                                                    console.log("paymentSettings", paymentSettings);
                                                                                    console.log("paypalPlanId", paypalPlanId);

                                                                                    return actions.subscription.create({
                                                                                        plan_id: "P-818762487H8311351MPL3ZUA" || paymentSettings?.subscription_plans[1]?.paypal_id,
                                                                                        purchase_units: [{ amount: { value: paymentSettings?.usd_amount } }],
                                                                                    });

                                                                                } else {
                                                                                    setServerResponse("حدث خطأ برجاء المحاولة مره أخري");
                                                                                }
                                                                            }

                                                                        }).catch((error: any) => {
                                                                            setIsSpinnerExist(false);
                                                                            setServerResponse("حدث خطأ برجاء المحاولة مره أخري");
                                                                            console.log("error", error);
                                                                        })
                                                                )


                                                            }}
                                                            onApprove={(data: any, actions: any): any => {
                                                                setSucceeded(true);

                                                                axiosInstance
                                                                    .get(`payments/details?payment_method=paypal&
                                                 checkout_transaction_id=${localStorage.getItem("checkoutTransactionId")}&
                                                 paypal_order_id=${data.orderID}&
                                                 subscription_id=${data.subscriptionID}&
                                                 facil_atoken=${data.facilitatorAccessToken}&
                                                 page_id=${courseDetailsData?.data?.course_details?.id}&
                                                 checkout_type=subscription&
                                                 payment_id=${localStorage.getItem("paymentId")}`)
                                                                    .then(function (response: any) {
                                                                        setIsSpinnerExist(false);
                                                                        if (tokenValidationCheck(response)) {

                                                                            if (response.status.toString().startsWith("2")) {

                                                                                localStorage.removeItem("checkoutTransactionId");
                                                                                localStorage.removeItem("paymentId");
                                                                                dispatch(setTransactionStatus(response.data.data.is_successful));
                                                                                dispatch(setInvoiceDetails(response.data));

                                                                                let is_trial_free = ((response.data?.data?.transaction_details?.is_trial_free && response.data?.data?.transaction_details?.is_trial_free == true) ? true : false);
                                                                                let customData = {};
                                                                                if (!is_trial_free) {
                                                                                    customData = { value: response.data?.data?.transaction_details.amount_usd, currency: 'USD', content_type: 'online_subscription_purchase', predicted_ltv: 270 };
                                                                                }
                                                                                FBPixelEventsHandler(response?.data?.fb_tracking_events, customData);

                                                                                localStorage.setItem("cart", "[]");
                                                                                localStorage.removeItem("coupon_code");
                                                                                localStorage.removeItem("affiliate_id");
                                                                                localStorage.removeItem("cced");
                                                                                dispatch(setCartItems([]));
                                                                            } else {
                                                                                dispatch(setTransactionStatus(false));
                                                                                dispatch(setInvoiceDetails({}));
                                                                            }
                                                                        }
                                                                    })
                                                                    .catch(function (error) {
                                                                        setIsSpinnerExist(false);
                                                                        console.log(error);
                                                                    });
                                                            }}
                                                        />
                                                    }
                                                </>
                                            }
                                            {
                                                paymentMethod == "VISA" &&
                                                <VisamasterSubscriptionButtonComponent />
                                            }

                                            <div className={styles["checkout__cart-sticky-card__subscribe-box__meet-terms-and-conditions"]}>
                                                <div>

                                                    نظام الإشتراكات يطبق الشروط والاحكام لمنصة تدرب
                                                </div>
                                                <div>
                                                    العمليات تتم بالدينار الكويتي وما يعادلها

                                                </div>
                                            </div>

                                            {/* <div className={styles["checkout__cart-sticky-card__subscribe-box__subscription-summary__change-sub-plan"]}>
                                                <div>هل تريد تغير نوع باقة الإشتراك؟</div>
                                                <div onClick={() => { Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}subscription-plans`) }}>العودة إلى الباقات</div>
                                            </div> */}
                                        </>
                                    }



                                </div>
                            </div>
                        }
                    </Col>}
                </Row>}

                {step == "begin-learning" && (isTransactionSucceeded ? <SuccessState /> : <FailedState />)}
                {
                    checkoutType == 'subscription' &&
                    <div className={styles["checkout__cart-fixed-card"]}>

                        {/* PayPal */}
                        {
                            paymentMethod == "PAYPAL" && window?.paypal?.Buttons !== undefined &&
                            <>
                                {  // Yearly plan
                                    paypalPlanId == `${process.env.NEXT_PUBLIC_PAYPAL_PLAN_ID}` &&
                                    <PayPalButtons
                                        style={{
                                            color: "blue",
                                            shape: "pill",
                                            label: "subscribe",
                                            tagline: false,
                                            layout: "horizontal",
                                        }}
                                        createSubscription={(data: any, actions: any): any => {

                                            setIsSpinnerExist(true);
                                            return (
                                                axiosInstance.post(`payments/payouts/?country_code=null`, {
                                                    "action": "web",
                                                    "payment_method": "paypal",
                                                    "checkout_type": "subscription",
                                                    "subplan_id": subPlan == "yearly" ?
                                                        paymentSettings?.subscription_plans[0].subplan_id :
                                                        paymentSettings?.subscription_plans[1].subplan_id
                                                    ,
                                                    'page_id': courseDetailsData?.data?.course_details?.id,
                                                })
                                                    .then((response: any) => {
                                                        setIsSpinnerExist(false);
                                                        if (tokenValidationCheck(response)) {
                                                            if (JSON.stringify(response.status).startsWith("2")) {
                                                                localStorage.setItem("checkoutTransactionId", response.data.data.checkout_transaction_id);
                                                                localStorage.setItem("paymentId", response.data.data.payment_id);
                                                                setCheckoutTransactionDetails(response.data.data);

                                                                // setPaypalPlanId(paymentSettings?.paypal.planid);
                                                                console.log("paymentSettings", paymentSettings);
                                                                console.log("paypalPlanId", paypalPlanId);

                                                                return actions.subscription.create({
                                                                    plan_id: `${process.env.NEXT_PUBLIC_PAYPAL_PLAN_ID}` || paymentSettings?.subscription_plans[0]?.paypal_id,
                                                                    purchase_units: [{ amount: { value: paymentSettings?.usd_amount } }],
                                                                });

                                                            } else {
                                                                setServerResponse("حدث خطأ برجاء المحاولة مره أخري");
                                                            }
                                                        }

                                                    }).catch((error: any) => {
                                                        setIsSpinnerExist(false);
                                                        setServerResponse("حدث خطأ برجاء المحاولة مره أخري");
                                                        console.log("error", error);
                                                    })
                                            )


                                        }}
                                        onApprove={(data: any, actions: any): any => {
                                            setSucceeded(true);

                                            axiosInstance
                                                .get(`payments/details?payment_method=paypal&
                             checkout_transaction_id=${localStorage.getItem("checkoutTransactionId")}&
                             paypal_order_id=${data.orderID}&
                             subscription_id=${data.subscriptionID}&
                             facil_atoken=${data.facilitatorAccessToken}&
                             page_id=${courseDetailsData?.data?.course_details?.id}&
                             checkout_type=subscription&
                             payment_id=${localStorage.getItem("paymentId")}`)
                                                .then(function (response: any) {
                                                    setIsSpinnerExist(false);
                                                    if (tokenValidationCheck(response)) {

                                                        if (response.status.toString().startsWith("2")) {

                                                            localStorage.removeItem("checkoutTransactionId");
                                                            localStorage.removeItem("paymentId");
                                                            dispatch(setTransactionStatus(response.data.data.is_successful));
                                                            dispatch(setInvoiceDetails(response.data));

                                                            let is_trial_free = ((response.data?.data?.transaction_details?.is_trial_free && response.data?.data?.transaction_details?.is_trial_free == true) ? true : false);
                                                            let customData = {};
                                                            if (!is_trial_free) {
                                                                customData = { value: response.data?.data?.transaction_details.amount_usd, currency: 'USD', content_type: 'online_subscription_purchase', predicted_ltv: 270 };
                                                            }
                                                            FBPixelEventsHandler(response?.data?.fb_tracking_events, customData);

                                                            localStorage.setItem("cart", "[]");
                                                            localStorage.removeItem("coupon_code");
                                                            localStorage.removeItem("affiliate_id");
                                                            localStorage.removeItem("cced");
                                                            dispatch(setCartItems([]));
                                                        } else {
                                                            dispatch(setTransactionStatus(false));
                                                            dispatch(setInvoiceDetails({}));
                                                        }
                                                    }
                                                })
                                                .catch(function (error) {
                                                    setIsSpinnerExist(false);
                                                    console.log(error);
                                                });
                                        }}
                                    />
                                }
                                { //  Monthly plan
                                    paypalPlanId == "P-818762487H8311351MPL3ZUA" &&
                                    <PayPalButtons
                                        style={{
                                            color: "blue",
                                            shape: "pill",
                                            label: "subscribe",
                                            tagline: false,
                                            layout: "horizontal",
                                        }}
                                        createSubscription={(data: any, actions: any): any => {

                                            setIsSpinnerExist(true);
                                            return (
                                                axiosInstance.post(`payments/payouts/?country_code=null`, {
                                                    "action": "web",
                                                    "payment_method": "paypal",
                                                    "checkout_type": "subscription",
                                                    "subplan_id": subPlan == "yearly" ?
                                                        paymentSettings?.subscription_plans[0].subplan_id :
                                                        paymentSettings?.subscription_plans[1].subplan_id
                                                    ,
                                                    'page_id': courseDetailsData?.data?.course_details?.id,
                                                })
                                                    .then((response: any) => {
                                                        setIsSpinnerExist(false);
                                                        if (tokenValidationCheck(response)) {
                                                            if (JSON.stringify(response.status).startsWith("2")) {
                                                                localStorage.setItem("checkoutTransactionId", response.data.data.checkout_transaction_id);
                                                                localStorage.setItem("paymentId", response.data.data.payment_id);
                                                                setCheckoutTransactionDetails(response.data.data);

                                                                // setPaypalPlanId(paymentSettings?.paypal.planid);
                                                                console.log("paymentSettings", paymentSettings);
                                                                console.log("paypalPlanId", paypalPlanId);

                                                                return actions.subscription.create({
                                                                    plan_id: "P-818762487H8311351MPL3ZUA" || paymentSettings?.subscription_plans[1]?.paypal_id,
                                                                    purchase_units: [{ amount: { value: paymentSettings?.usd_amount } }],
                                                                });

                                                            } else {
                                                                setServerResponse("حدث خطأ برجاء المحاولة مره أخري");
                                                            }
                                                        }

                                                    }).catch((error: any) => {
                                                        setIsSpinnerExist(false);
                                                        setServerResponse("حدث خطأ برجاء المحاولة مره أخري");
                                                        console.log("error", error);
                                                    })
                                            )


                                        }}
                                        onApprove={(data: any, actions: any): any => {
                                            setSucceeded(true);

                                            axiosInstance
                                                .get(`payments/details?payment_method=paypal&
                             checkout_transaction_id=${localStorage.getItem("checkoutTransactionId")}&
                             paypal_order_id=${data.orderID}&
                             subscription_id=${data.subscriptionID}&
                             facil_atoken=${data.facilitatorAccessToken}&
                             page_id=${courseDetailsData?.data?.course_details?.id}&
                             checkout_type=subscription&
                             payment_id=${localStorage.getItem("paymentId")}`)
                                                .then(function (response: any) {
                                                    setIsSpinnerExist(false);
                                                    if (tokenValidationCheck(response)) {

                                                        if (response.status.toString().startsWith("2")) {

                                                            localStorage.removeItem("checkoutTransactionId");
                                                            localStorage.removeItem("paymentId");
                                                            dispatch(setTransactionStatus(response.data.data.is_successful));
                                                            dispatch(setInvoiceDetails(response.data));

                                                            let is_trial_free = ((response.data?.data?.transaction_details?.is_trial_free && response.data?.data?.transaction_details?.is_trial_free == true) ? true : false);
                                                            let customData = {};
                                                            if (!is_trial_free) {
                                                                customData = { value: response.data?.data?.transaction_details.amount_usd, currency: 'USD', content_type: 'online_subscription_purchase', predicted_ltv: 270 };
                                                            }
                                                            FBPixelEventsHandler(response?.data?.fb_tracking_events, customData);

                                                            localStorage.setItem("cart", "[]");
                                                            localStorage.removeItem("coupon_code");
                                                            localStorage.removeItem("affiliate_id");
                                                            localStorage.removeItem("cced");
                                                            dispatch(setCartItems([]));
                                                        } else {
                                                            dispatch(setTransactionStatus(false));
                                                            dispatch(setInvoiceDetails({}));
                                                        }
                                                    }
                                                })
                                                .catch(function (error) {
                                                    setIsSpinnerExist(false);
                                                    console.log(error);
                                                });
                                        }}
                                    />
                                }

                            </>
                        }
                        {/* PayPal end */}

                        {/* VISA/MASTER */}
                        {
                            paymentMethod == "VISA" &&
                            <VisamasterSubscriptionButtonComponent />
                        }
                        {/* VISA/MASTER end */}
                    </div>
                }
            </>
        </PayPalScriptProvider>
    );
}

export default withAuth(CheckoutPage);