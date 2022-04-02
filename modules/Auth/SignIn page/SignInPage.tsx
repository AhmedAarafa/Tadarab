/* eslint-disable @next/next/link-passhref */
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
import { signinValidationRules } from "validation rules/signin";
import Link from "next/link";
interface SignInFormValues {
  email:string;
  password:string;
};

export default function SignInPage() {
    const [isVisible, setIsVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [validationAfterSubmit, setValidationAfterSubmit] = useState({email:false,password:false});
    const [fieldBlur, setFieldBlur] = useState({email:"",password:""});

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

    function validationSchema() {
      return Yup.object().shape(signinValidationRules);
    }

      const initialValues: SignInFormValues = {  
        email:'',
        password:'',
      };

      const handleValidationOnSubmit = ():any =>{
        if(fieldBlur.email == ""){
          const newValidationState = validationAfterSubmit;
          newValidationState.email = true;
          setValidationAfterSubmit(newValidationState);
        }
        if(fieldBlur.password == ""){
          const newValidationState = validationAfterSubmit;
          newValidationState.password = true;
          setValidationAfterSubmit(newValidationState);
        }
    }

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
            <FbIcon color="#1977f3"/>
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
            <Formik 
            validateOnChange={false}
                    initialValues={initialValues}
                    validationSchema={validationSchema}
            onSubmit={(values) => {
               console.log({ values});
              //  actions.setSubmitting(false);
               axiosInstance
                .post(`login`, {
                  "email": values.email,
                  "password": values.password,
                  })
                .then((response:any) => {
                  console.log("Response.message",response);
                  if(JSON.stringify(response.status).startsWith("2")){
                    console.log("success");
                    if(response.data.data !== null){
                      localStorage.setItem("token" , response.data.data.token);
                    }
                    // cart  cart_items
                    if(localStorage.getItem("cart_items")){
                      let localStorageItems:any = localStorage.getItem("cart_items");
                      axiosInstance
                      .post(`users/cart/?country_code=${localStorage.getItem("countryCode")}`, {"items" : localStorageItems})
                      .then((response:any) => {
                       const totalItems:any = [];
                       response.data.data.courses.forEach((item:any)=>{
                        totalItems.push(item.id);
                      });
                      localStorage.setItem("cart" , JSON.stringify(totalItems));
                      localStorage.setItem("cart_items" , JSON.stringify(response.data.data.cart_items));
                      dispatch(setCartItems(response.data.data.courses));
                     
                      })
                      .catch((error:any)=>{
                        console.log("error", error);
                      });
                    }else{
                      axiosInstance
                      .get(`users/cart/?country_code=${localStorage.getItem("countryCode")}`)
                      .then(function (response:any) {
                        console.log("login response",response);
                        const totalItems:any = [];
                        // console.log("response.data",response.data);
                        response.data.data.forEach((item:any)=>{
                         totalItems.push(item.id);
                       });
                       localStorage.setItem("cart" , JSON.stringify(totalItems));
                      dispatch(setCartItems(response.data.data));
                    
                      })
                      .catch(function (error) {
                        console.log(error);
                      });
                    }
                    
                    


                    if (router.query && router.query.from) {
                      // router.push(router.back());
                      Router.back();
                   }else{
                     Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}`);
                   }
                  }else {
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
            >
          {({ resetForm,errors,handleBlur }) => (

              <Form>
                
                  <div className={`${styles["sign-in__sign-in-box__sign-in-form-box__email-field-container"]} 
                  ${ errors.email && validationAfterSubmit.email && styles["required"]}`}>
                    <div className={styles["sign-in__sign-in-box__sign-in-form-box__icon-wrapper"]}>
                    <EnvelopeIcon/>
                    </div>
                    <Field
                    onKeyPress={ (e:any)=>{
                      e.stopPropagation();
                      // setServerResponse({value:"" , color:""});
                      setValidationAfterSubmit({...validationAfterSubmit,email:false});
                  } }
                  onBlur={(e:any) => {
                    handleBlur(e);
                    setErrorMessage("");
                    setFieldBlur({...fieldBlur, email:e.target.value});
                }}
                     type="email" name="email" placeholder="البريد الالكتروني" className={styles["sign-in__sign-in-box__sign-in-form-box__email-field"]}/>
                  </div>
                  { validationAfterSubmit.email && <ErrorMessage name="email"  component="div" className={styles["error-msg"]}/>}

                  <div className={`${styles["sign-in__sign-in-box__sign-in-form-box__password-field-container"]} 
                  ${ errors.password && validationAfterSubmit.password && styles["required"]}`}>
                    <div className={styles["sign-in__sign-in-box__sign-in-form-box__icon-wrapper"]}>
                    <LockIcon/>
                    </div>
                    <Field 
                     onKeyPress={ (e:any)=>{
                      e.stopPropagation();
                      // setServerResponse({value:"" , color:""});
                      setValidationAfterSubmit({...validationAfterSubmit,password:false});
                  } }
                  onBlur={(e:any) => {
                    handleBlur(e);
                    setErrorMessage("");
                    setFieldBlur({...fieldBlur, password:e.target.value});
                }}
                    type="password" name="password" placeholder="كلمة المرور"  id="password-field" className={styles["sign-in__sign-in-box__sign-in-form-box__password-field"]}/>
                   
                   <div className={styles["sign-in__sign-in-box__sign-in-form-box__show-password-icon-wrapper"]}>
                     <div onClick={()=>showHidePasswordHandler()}>

                      <EyeIcon color={isVisible ? "#008000" : "#999" }/>
                     </div>
                    
                    </div>
                  </div>
                  { validationAfterSubmit.password &&  <ErrorMessage name="password"  component="div" className={styles["error-msg"]}/>}
                  
                  <div className={styles["sign-in__sign-in-box__sign-in-form-box__forget-password"]}>
                    <Link href="/forgetpassword">
                     هل نسيت كلمة المرور؟
                    </Link>
                  </div>

                  <div className="position-relative">
                    {errorMessage !== "" && <div className={styles["server-error-msg"]} >{errorMessage}</div>}
                  <Button onClick={handleValidationOnSubmit} type="submit" className={styles["sign-in__sign-in-box__sign-in-form-box__make-new-acc-btn"]}>
                  تسجيل الدخول
                  </Button>
                     </div>

                  <div className={styles["sign-in__sign-in-box__sign-in-form-box__do-you-have-acc"]}>
                      <span> ليس لديك حساب؟ </span>
                      <Link href="/signup">
                           <span> انشاء حساب جديد </span>
                      </Link>
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
