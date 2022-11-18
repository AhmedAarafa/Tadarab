/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { Row, Col, Button, Dropdown, DropdownButton } from "react-bootstrap";
import styles from "./sign-in-page.module.css";
import { axiosInstance } from "configurations/axios/axiosConfig";
import Image from 'next/image';
import Router, { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setCartItems } from "configurations/redux/actions/cartItems";
import { setIsUserAuthenticated } from "configurations/redux/actions/userAuthentication";
import TadarabGA from "modules/_Shared/utils/ga";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
  ErrorMessage
} from 'formik';
import * as Yup from "yup";
import { EnvelopeIcon, GoogleIcon, FbIcon, AppleIcon, LockIcon, EyeIcon } from "common/Icons/Icons";
import { signinValidationRules } from "validation rules/signin";
import Link from "next/link";
import { FBPixelEventsHandler } from "modules/_Shared/utils/FBPixelEvents";
import GoogleLogin from 'react-google-login';
import TwitterLogin from "react-twitter-login";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

interface SignInFormValues {
  email: string;
  password: string;
};

export default function SignInPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [validationAfterSubmit, setValidationAfterSubmit] = useState({ email: false, password: false });
  const [fieldBlur, setFieldBlur] = useState({ email: "", password: "" });
  const userAuthState = useSelector((state: any) => state.userAuthentication);
  const router: any = useRouter();
  const dispatch = useDispatch();
  const themeState = useSelector((state: any) => state.themeState.theme);

  useEffect(() => {
    if (userAuthState.isUserAuthenticated) {
      if (userAuthState.isSubscribed) {
        Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}my-account`);
      } else {
        if (router.query && router.query.from_subscription) {
          Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}checkout/payment/?checkout_type=subscription`);
        }
      }
    }

  }, [userAuthState]);


  const showHidePasswordHandler = () => {
    const passwordField: any = document.getElementById("password-field");
    if (passwordField.type === "password") {
      passwordField.type = "text";
      setIsVisible(true);
    } else {
      passwordField.type = "password";
      setIsVisible(false);
    }
  };

  function validationSchema() {
    return Yup.object().shape(signinValidationRules);
  }

  const initialValues: SignInFormValues = {
    email: '',
    password: '',
  };

  const handleValidationOnSubmit = (): any => {
    if (fieldBlur.email == "") {
      const newValidationState = validationAfterSubmit;
      newValidationState.email = true;
      setValidationAfterSubmit(newValidationState);
    }
    if (fieldBlur.password == "") {
      const newValidationState = validationAfterSubmit;
      newValidationState.password = true;
      setValidationAfterSubmit(newValidationState);
    }
  }

  const handleRedirection = (): any => {
    if (router.query && router.query.from) {
      if (router.query.from == "checkout") {
        Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}sign-up/?from=checkout`);
      } else if (router.query.from.startsWith("webinar")) {
        Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}sign-up/?from=${router.query.from}`);
      } else if (router.query.from.startsWith("course"))  {
        Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}sign-up/?from=${router.query.from}`);
      } else {
        Router.back();
      }

    } else if (router.query && router.query.from_subscription) {
      Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}sign-up/?from_subscription=checkout%2Fpayment%2F%3Fcheckout_type%3Dsubscription`);
    } else {
      Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}sign-up`);
    }
  }

  /** Google Login callback */
  const responseGoogle = (googleResponse: any) => {
    if ("error" in googleResponse) {
      // setErrorMessage("حدث خطأ برجاء المحاولة مرة اخري");
    } else {
      let tadarabGA = new TadarabGA();
      let clientId = tadarabGA.tadarab_get_traking_client();
      let customData = { email: googleResponse.profileObj.email, phone: "" };
      if(googleResponse?.status!="unknown"&&googleResponse?.status!=""){
        axiosInstance.post(`social-login`, {
          "email": googleResponse?.profileObj?.email,
          "first_name": googleResponse?.profileObj?.givenName,
          "last_name": googleResponse?.profileObj?.familyName,
          "full_name": `${googleResponse?.profileObj?.givenName} ${googleResponse?.profileObj?.familyName}`,
          "social_type": "google",
          "social_token": googleResponse?.tokenObj?.access_token,
          "clientId": clientId,
        }).then((response: any) => {
          //console.log(response);
          if (JSON.stringify(response.status).startsWith("2")) {
            FBPixelEventsHandler(response.data.fb_tracking_events, customData);
            if (response.data.data !== null) {
              const totalItems: any = [];
              response?.data?.data?.courses?.data.forEach((item: any) => {
                totalItems.push(item.id);
              });
              localStorage.setItem("token", response.data.data.token);
              localStorage.setItem("user_id", response.data.data.id);
              localStorage.setItem("is_user_subscribed", response.data.data.is_in_user_subscription);
              localStorage.setItem("cart", JSON.stringify(totalItems));
              localStorage.setItem("cart_items", JSON.stringify([...new Set(response.data.data.cart_items)]));
              dispatch(setIsUserAuthenticated({
                ...userAuthState, isUserAuthenticated: true,
                token: response.data.data.token,
                id: response.data.data.id,
                isSubscribed: response.data.data.is_in_user_subscription
              }));

              if (router.query && router.query.from) {
                if (router.query.from == "checkout") {
                  Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}${router.query.from}`);
                } else if (router.query.from.startsWith("course"))  {
                  Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}${router.query.from}`);
                } else {
                  Router.back();
                }
              } else if (router.query && router.query.from_subscription) {
                Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}${Router.query.from_subscription}`);
              } else if (router.query && router.query.type) {
                Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/courses?type=${Router.query.type}`);
              } else {
                Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}`);
              }
            }
            tadarabGA.tadarab_fire_traking_GA_code("signup", { traking_email: response.data.data.email, traking_uid: response.data.data.id });

          } else {
            setErrorMessage(response.data.message);
          }
        }).catch((error: any) => {
          //console.log(error);
        })
      }
    }
  }
  /** Google Login callback end */

  /** FB Login callback */
  const responseFacebook = (response: any) => {
    if ("error" in response) {
      // setErrorMessage("حدث خطأ برجاء المحاولة مرة اخري");
    } else {
      if(response?.status!="unknown"&&response?.status!=""){
        let tadarabGA = new TadarabGA();
        let clientId = tadarabGA.tadarab_get_traking_client();
        let customData = { email: response?.email, phone: "" };
        let fname = ((response?.name.split(' ')[0])?response?.name.split(' ')[0]:"");
        let lname = ((response?.name.split(' ')[1])?response?.name.split(' ')[1]:"");
        axiosInstance.post(`social-login`, {
          "email": response.email,
          "first_name": fname,
          "last_name": lname,
          "full_name": response?.name,
          "social_type": "facebook",
          "social_token": response?.accessToken,
          "clientId": clientId,
        }).then((resp: any) => {
          //console.log(resp);
          if (JSON.stringify(resp.status).startsWith("2")) {
            FBPixelEventsHandler(resp.data.fb_tracking_events, customData);
            if (resp.data.data !== null) {
              const totalItems: any = [];
              resp?.data?.data?.courses?.data.forEach((item: any) => {
                totalItems.push(item.id);
              });
              localStorage.setItem("token", resp.data.data.token);
              localStorage.setItem("user_id", resp.data.data.id);
              localStorage.setItem("is_user_subscribed", resp.data.data.is_in_user_subscription);
              localStorage.setItem("cart", JSON.stringify(totalItems));
              localStorage.setItem("cart_items", JSON.stringify([...new Set(resp.data.data.cart_items)]));
              dispatch(setIsUserAuthenticated({
                ...userAuthState, isUserAuthenticated: true,
                token: resp.data.data.token,
                id: resp.data.data.id,
                isSubscribed: resp.data.data.is_in_user_subscription
              }));

              if (router.query && router.query.from) {
                if (router.query.from == "checkout") {
                  Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}${router.query.from}`);
                } else if (router.query.from.startsWith("course"))  {
                  Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}${router.query.from}`);
                } else {
                  Router.back();
                }
              } else if (router.query && router.query.from_subscription) {
                Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}${Router.query.from_subscription}`);
              } else {
                Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}`);
              }
            }
            tadarabGA.tadarab_fire_traking_GA_code("signup", { traking_email: resp.data.data.email, traking_uid: resp.data.data.id });

          } else {
            setErrorMessage(resp.data.message);
          }
        }).catch((error: any) => {
          //console.log(error);
        })
      }
    }
  }
  /** FB Login callback end */

  return (
    <>
      <Row data-theme={themeState} className={styles["sign-in"]}>
        <Col xs={{ span: 12, order: 2 }} sm={{ span: 6, order: 1 }} className={styles["sign-in__sign-in-box"]}>
          <div className={styles["sign-in__sign-in-box__title"]}>
            <div> تسجيل دخول </div>
            <div> مرحبا برجوعك! ادخل بياناتك الان للعودة لحسابك </div>
          </div>

          <div className={styles["sign-in__sign-in-box__sign-in-with"]}>
            <GoogleLogin
              clientId={`${process.env.NEXT_PUBLIC_GOOGLE_APP_ID}`}
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
              render={renderProps => (
                <div onClick={renderProps.onClick} className={renderProps.disabled ? styles['disabled'] : ""} >
                  <GoogleIcon />
                  تسجيل الدخول بواسطة جوجل
                </div>
              )}
            />
            {/* <FacebookLogin
              appId={`${process.env.NEXT_PUBLIC_FACEBOOK_APP_ID}`}
              autoLoad={false}
              fields="name,email"
              callback={responseFacebook}
              render={(renderProps: any) => (
                <div onClick={renderProps.onClick}>
                  <FbIcon color="#4267B2" />
                  تسجيل الدخول بواسطة فيسبوك
                </div>
              )} /> */}
            {/* <div>
              <AppleIcon />
              أبل
            </div> */}
          </div>

          <div className={styles["sign-in__sign-in-box__sign-in-with-email"]}>
            أو سجل بواسطة البريد الإلكتروني
          </div>

          <div className={styles["sign-in__sign-in-box__sign-in-form-box"]}>
            <Formik
              validateOnChange={false}
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                //console.log({ values});
                let tadarabGA = new TadarabGA();
                const clientId = tadarabGA.tadarab_get_traking_client();
                axiosInstance.post(`login`, {
                  "email": values.email,
                  "password": values.password,
                  "clientId": clientId,
                }).then((response: any) => {
                  if (JSON.stringify(response.status).startsWith("2")) {
                    //console.log("success");
                    if (response.data.data !== null) {
                      const totalItems: any = [];
                      console.log("Response", response);
                      console.log("totalItems", totalItems);

                      response.data.data.courses.data.forEach((item: any) => {
                        totalItems.push(item.id);
                      });
                      localStorage.setItem("token", response.data.data.token);
                      localStorage.setItem("user_id", response.data.data.id);
                      localStorage.setItem("is_user_subscribed", response.data.data.is_in_user_subscription);
                      localStorage.setItem("cart", JSON.stringify(totalItems));
                      localStorage.setItem("cart_items", JSON.stringify([...new Set(response.data.data.cart_items)]));
                      dispatch(setCartItems([...new Set(response.data.data.courses.data)]));

                      dispatch(setIsUserAuthenticated({
                        ...userAuthState, isUserAuthenticated: true,
                        token: response.data.data.token,
                        id: response.data.data.id,
                        isSubscribed: response.data.data.is_in_user_subscription
                      }));
                    }

                    if (router.query && router.query.from) {
                      // router.push(router.back());
                      if (router.query.from == "checkout") {
                        Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}${router.query.from}`);
                      } else if (router.query.from.startsWith("webinar")) {
                        Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}${router.query.from}`);
                      } else {
                        Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}${router.query.from}`);
                        //Router.back();
                        //console.log("back");
                      }

                    } else if (router.query && router.query.from_subscription) {
                      Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}${router.query.from_subscription}`);
                    } else if (router.query && router.query.type) {
                      Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/courses?type=${Router.query.type}`);
                    } else {
                      if (response.data.data?.is_in_user_subscription) {
                        Router.push('/my-account');
                      } else {
                        Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}`);
                      }
                    }
                  } else {
                    //console.log("error 4xx or 5xx");
                    setErrorMessage(response.data.message);
                    // setTimeout(() => {
                    // setErrorMessage("");
                    // }, 5000);
                  }
                }).catch((error: any) => {
                  //console.log("errrrr", error);
                })
              }}
            >
              {({ resetForm, errors, handleBlur }) => (
                <Form>
                  <div className={`${styles["sign-in__sign-in-box__sign-in-form-box__email-field-container"]} 
                  ${errors.email && validationAfterSubmit.email && styles["required"]}`}>
                    <div className={styles["sign-in__sign-in-box__sign-in-form-box__icon-wrapper"]}>
                      <EnvelopeIcon />
                    </div>
                    <Field
                      onKeyPress={(e: any) => {
                        e.stopPropagation();
                        // setServerResponse({value:"" , color:""});
                        setValidationAfterSubmit({ ...validationAfterSubmit, email: false });
                      }}
                      onBlur={(e: any) => {
                        handleBlur(e);
                        setErrorMessage("");
                        setFieldBlur({ ...fieldBlur, email: e.target.value });
                      }}
                      type="email" name="email" placeholder="البريد الالكتروني" className={styles["sign-in__sign-in-box__sign-in-form-box__email-field"]} />
                  </div>
                  {validationAfterSubmit.email && <ErrorMessage name="email" component="div" className={styles["error-msg"]} />}

                  <div className={`${styles["sign-in__sign-in-box__sign-in-form-box__password-field-container"]} 
                  ${errors.password && validationAfterSubmit.password && styles["required"]}`}>
                    <div className={styles["sign-in__sign-in-box__sign-in-form-box__icon-wrapper"]}>
                      <LockIcon />
                    </div>
                    <Field
                      onKeyPress={(e: any) => {
                        e.stopPropagation();
                        // setServerResponse({value:"" , color:""});
                        setValidationAfterSubmit({ ...validationAfterSubmit, password: false });
                      }}
                      onBlur={(e: any) => {
                        handleBlur(e);
                        setErrorMessage("");
                        setFieldBlur({ ...fieldBlur, password: e.target.value });
                      }}
                      type="password" name="password" placeholder="كلمة المرور" id="password-field" className={styles["sign-in__sign-in-box__sign-in-form-box__password-field"]} />

                    <div className={styles["sign-in__sign-in-box__sign-in-form-box__show-password-icon-wrapper"]}>
                      <div onClick={() => showHidePasswordHandler()}>

                        <EyeIcon color={isVisible ? "#008000" : "#999"} />
                      </div>

                    </div>
                  </div>
                  {validationAfterSubmit.password && <ErrorMessage name="password" component="div" className={styles["error-msg"]} />}

                  <div className={styles["sign-in__sign-in-box__sign-in-form-box__forget-password"]}>
                    <Link href="/forgot-password">
                      هل نسيت كلمة المرور؟
                    </Link>
                  </div>

                  <div className="position-relative">
                    <Button onClick={handleValidationOnSubmit} type="submit" className={styles["sign-in__sign-in-box__sign-in-form-box__make-new-acc-btn"]}>
                      {errorMessage !== "" && <div className={styles["server-error-msg"]} >{errorMessage}</div>}
                      تسجيل الدخول
                    </Button>
                  </div>

                  <div className={styles["sign-in__sign-in-box__sign-in-form-box__do-you-have-acc"]} style={{ marginBottom: "0px" }}>
                    <span> ليس لديك حساب؟ </span>
                    {/* <Link href="/sign-up"> */}
                    <span onClick={() => { handleRedirection() }}> انشاء حساب جديد </span>
                    {/* </Link> */}
                  </div>

                  {/* Login for trainer */}
                  <div className={styles["sign-in__sign-in-box__sign-in-form-box__do-you-have-acc"]}>
                    <span>لوحة تحكم المدربين</span>
                    {/* <Link href="/sign-up"> */}
                    <span><a target="_blank" href="https://app.tadarab.com/#signup" rel="noreferrer"> اضغط هنا للدخول</a></span>
                    {/* </Link> */}
                  </div>
                </Form>
              )}

            </Formik>
          </div>
        </Col>
        <Col xs={{ span: 12, order: 1 }} sm={{ span: 6, order: 2 }} className={styles["sign-in__img"]}>
          <img loading="lazy" src="/images/sign in.png" alt="sign-in now" />
        </Col>
      </Row>
    </>
  );
}
