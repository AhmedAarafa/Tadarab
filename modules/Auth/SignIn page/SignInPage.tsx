/* eslint-disable @next/next/no-img-element */
import React, {useState, useEffect} from "react";
import { Row, Col, Button,  Dropdown, DropdownButton } from "react-bootstrap";
import styles from "./sign-in-page.module.css"; 
import { axiosInstance } from "configurations/axios/axiosConfig";
import Router, { useRouter }  from "next/router";
import { useDispatch, useSelector } from "react-redux";  
import { setCartItems } from "configurations/redux/actions/cartItems"; 
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
import { EnvelopeIcon, GoogleIcon,FbIcon,AppleIcon,LockIcon,EyeIcon } from "common/Icons/Icons";

interface SignInFormValues {
  email:string;
  password:string;
};

export default function SignInPage() {
    const [isVisible, setIsVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const router:any = useRouter();
  const dispatch = useDispatch();


   
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

      const initialValues: SignInFormValues = {  
        email:'',
        password:'',
      };

      const validate = Yup.object({
        email: Yup.string()
        ,
        password: Yup.string()
        ,
      });

  return (
    <>
      <Row className={styles["sign-in"]}>
        <Col xs={{span:12 , order:2}} sm={{span:6 , order:1}} className={styles["sign-in__sign-in-box"]}>
          <div className={styles["sign-in__sign-in-box__title"]}>
            <div> تسجيل دخول </div>
            <div> مرحبا برجوعك! ادخل بياناتك الان للعودة لحسابك </div>
          </div>

          <div className={styles["sign-in__sign-in-box__sign-in-with"]}>
            <div>
            <GoogleIcon/>
                جوجل
            </div>
            <div>
            <FbIcon/>
                فيسبوك
            </div>
            <div>
            <AppleIcon/>
                أبل
            </div>
          </div>

          <div className={styles["sign-in__sign-in-box__sign-in-with-email"]}>
          أو سجل بواسطة البريد الإلكتروني
          </div>
          
          <div className={styles["sign-in__sign-in-box__sign-in-form-box"]}>
            <Formik initialValues={initialValues}
            onSubmit={(values, actions) => {
              //  console.log({ values, actions });
               actions.setSubmitting(false);
               axiosInstance
                .post(`login`, {
                  "email": values.email,
                  "password": values.password,
                  })
                .then((response:any) => {
                  // console.log("Response.message",response);
                  // setResponse(response.data);
                  // console.log("Response",response);
                  if(response.data.status_code.startsWith("2")){
                    console.log("success");
                    if(response.data.data !== null){
                      localStorage.setItem("token" , response.data.data.token);
                    }

                    if(localStorage.getItem("cart")){

                      axiosInstance
                      .post(`users/cart/?country_code=eg`, {"item_ids" : localStorage.getItem("cart")})
                      .then((response:any) => {
                      //  console.log("response",response);
                       const totalItems:any = [];
                      //  console.log("response.data",response.data);
                       response.data.data.forEach((item:any)=>{
                        totalItems.push(item.id);
                      });
                      localStorage.setItem("cart" , JSON.stringify(totalItems));
                      dispatch(setCartItems(totalItems));
                     
                      })
                      .catch((error:any)=>{
                        console.log("error", error);
                      });
                    }else{
                      axiosInstance
                      .get("users/cart/?country_code=eg")
                      .then(function (response:any) {
                        console.log("login response",response);
                        const totalItems:any = [];
                        // console.log("response.data",response.data);
                        response.data.data.forEach((item:any)=>{
                         totalItems.push(item.id);
                       });
                       localStorage.setItem("cart" , JSON.stringify(totalItems));
                      dispatch(setCartItems(totalItems));
                    
                      })
                      .catch(function (error) {
                        console.log(error);
                      });
                    }
                    
                    


                    if (router.query && router.query.from) {
                      // router.push(router.back());
                      Router.back();
                   }else{
                     Router.push("https://tadarab.vercel.app/HomePage");
                   }
                  }else if(response.data.status_code.startsWith(4) ||
                  response.data.status_code.startsWith(5)
                  ){
                    console.log("error 4xx or 5xx");
                    setErrorMessage(response.data.message);
                    // setTimeout(() => {
                    // setErrorMessage("");
                    // }, 5000);
                  }
                })
                .catch((error:any)=>{
                  console.log("errrrr", error);
                })
             }}
             validationSchema={validate}
            >
          {({ touched, errors, isSubmitting , isValid , dirty}) => (

              <Form>
                
                  <div className={`${styles["sign-in__sign-in-box__sign-in-form-box__email-field-container"]} 
                  ${ errors.email ? styles["required"] : null}`}>
                    <div className={styles["sign-in__sign-in-box__sign-in-form-box__icon-wrapper"]}>
                    <EnvelopeIcon/>
                    </div>
                    <Field type="email" name="email" placeholder="البريد الالكتروني" className={styles["sign-in__sign-in-box__sign-in-form-box__email-field"]}/>
                  </div>
                  <ErrorMessage name="email"  component="div" className={styles["error-msg"]}/>

                  <div className={`${styles["sign-in__sign-in-box__sign-in-form-box__password-field-container"]} 
                  ${ errors.password ? styles["required"] : null}`}>
                    <div className={styles["sign-in__sign-in-box__sign-in-form-box__icon-wrapper"]}>
                    <LockIcon/>
                    </div>
                    <Field type="password" name="password" placeholder="كلمة المرور"  id="password-field" className={styles["sign-in__sign-in-box__sign-in-form-box__password-field"]}/>
                   
                   <div className={styles["sign-in__sign-in-box__sign-in-form-box__show-password-icon-wrapper"]}>
                     <div onClick={()=>showHidePasswordHandler()}>

                      <EyeIcon color={isVisible ? "#008000" : "#999" }/>
                     </div>
                    
                    </div>
                  </div>
                  <ErrorMessage name="password"  component="div" className={styles["error-msg"]}/>
                  
                  <div className={styles["sign-in__sign-in-box__sign-in-form-box__forget-password"]}>
                  هل نسيت كلمة المرور؟
                  </div>

                  <div className="position-relative">
                    {errorMessage !== "" && <div className={styles["server-error-msg"]} >{errorMessage}</div>}
                  <Button type="submit" className={styles["sign-in__sign-in-box__sign-in-form-box__make-new-acc-btn"]}>
                  تسجيل الدخول
                  </Button>
                     </div>

                  <div className={styles["sign-in__sign-in-box__sign-in-form-box__do-you-have-acc"]}>
                      <span> ليس لديك حساب؟ </span>
                      <span> انشاء حساب جديد </span>
                  </div>

              </Form>
          )}

            </Formik>
          </div>
        </Col>
        <Col xs={{span:12 , order:1}} sm={{span:6 , order:2}} className={styles["sign-in__img"]}>
          <img src="/images/register.png" alt="sign-in now" />
        </Col>
      </Row>
    </>
  );
}
