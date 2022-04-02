/* eslint-disable @next/next/link-passhref */
/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React, {useState, useEffect} from "react";
import { Row, Col, Button, Dropdown, DropdownButton } from "react-bootstrap";
import styles from "./sign-up-page.module.css";
import { axiosInstance } from "configurations/axios/axiosConfig";
import Router from "next/router";
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
// import Countries from  "../../../node_modules/country-codes/node_modules/country-data/data/countries.json";
// import  "../../../node_modules/country-codes/node_modules/country-data/data/countries2.json";
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import { EnvelopeIcon, GoogleIcon,FbIcon,AppleIcon,LockIcon,EyeIcon,MobileIcon,NameFieldIcon } from "common/Icons/Icons";
import TadarabFBPixel from "modules/_Shared/utils/fbPixel";
import TadarabGA from "modules/_Shared/utils/ga";
import { signupValidationRules } from "validation rules/signup";
import { FBPixelEventsHandler } from "modules/_Shared/utils/FBPixelEvents";
import Link from "next/link";
interface SignUpFormValues {
  name: string;
  email:string;
  phoneNumber:string;
  password:string;
};


export default function SignupPage() { 
    const [countryFlag, setCountryFlag] = useState("eg.png");
    const [countryCallingCode, setCountryCallingCode] = useState("20");
    const [countryCode, setCountryCode] = useState("EG");
    const [errorMessage, setErrorMessage] = useState("");
    // const [response, setResponse] = useState();
    const [isVisible, setIsVisible] = useState(false);
    const [fieldBlur, setFieldBlur] = useState({
      name:"",
      email:"",
      phone:"",
      password:""
    });
    const [validationAfterSubmit, setValidationAfterSubmit] = useState({
      name:false,
      email:false,
      phoneNumber:false,
      password:false
    });
    
    const [phoneFieldEvent, setPhoneFieldEvent] = useState<any>();
   
  
    const updateValue =(e:any)=>{
      setPhoneFieldEvent(e);
      // console.log("e",e);
      
    };
    useEffect(() => {
      const phoneField:any = document.querySelector("input[type='tel']");
      phoneField.addEventListener('blur', updateValue);
      phoneField.addEventListener('change', updateValue);

      const intlTelInput:any = document.querySelector('.intl-tel-input .selected-dial-code');
      setTimeout(() => {
            intlTelInput?.classList.remove("selected-dial-code");
            }, 50);
    }, []);
 

    function validationSchema() {
      return Yup.object().shape(signupValidationRules);
    }
    
   
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

      const initialValues: SignUpFormValues = {  
        name: '' ,
        email:'',
        phoneNumber:'',
        password:'',
      };

    const handleValidationOnSubmit = ():any =>{
      if(fieldBlur.name == ""){
        const newValidationState = validationAfterSubmit;
        newValidationState.name = true;
        setValidationAfterSubmit(newValidationState);
      }
      if(fieldBlur.email == ""){
        const newValidationState = validationAfterSubmit;
        newValidationState.email = true;
        setValidationAfterSubmit(newValidationState);
      }
      if(fieldBlur.phone == ""){
        const newValidationState = validationAfterSubmit;
        newValidationState.phoneNumber = true;
        setValidationAfterSubmit(newValidationState);
      }
      if(fieldBlur.password == ""){
        const newValidationState = validationAfterSubmit;
        newValidationState.password = true;
        setValidationAfterSubmit(newValidationState);
      }
    }

      const handleCountryCode = (country:any)=>{
        setCountryCallingCode(country.countryCallingCodes);
        setCountryFlag(`${country.alpha2.toLowerCase()}.png`);
        setCountryCode(country.alpha2);
      }

      

  return (
    <>
      <Row className={styles["register"]}>
        <Col xs={{span:12 , order:2}} sm={{span:6 , order:1}} className={styles["register__register-box"]}>
          <div className={styles["register__register-box__title"]}>
            <div> انشاء حساب جديد </div>
            <div> اهلا بك في تدرب أنشئ حساب جديد الان </div>
          </div>

          <div className={styles["register__register-box__register-with"]}>
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

          <div className={styles["register__register-box__register-with-email"]}>
          أو سجل بواسطة البريد الإلكتروني
          </div>
          
          <div className={styles["register__register-box__registeration-form-box"]}>

            <Formik  
             validateOnChange={false}
             initialValues={initialValues}
             validationSchema={validationSchema}
         onSubmit={(values) => {
          //  actions.setSubmitting(false);
           axiosInstance
            .post(`users`, {
              "email": values.email,
              "password": values.password,
              "full_name": values.name,
              "country_code": countryCode,
              "dial_code": `+${countryCallingCode}`,
              "phone": values.phoneNumber,
              })
            .then((response:any) => {
              // setResponse(response.data);
              console.log("Response",response);
              if(JSON.stringify(response.status).startsWith("2")){
                let customData = {email: values.email, phone: values.phoneNumber};
                FBPixelEventsHandler(response.data.fb_tracking_events,customData);
                if(response.data.data !== null){
                  localStorage.setItem("token" , response.data.data.token);
                  Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}`);
                }

                
              }else {
                let tadarabGA = new TadarabGA();
                tadarabGA.tadarab_fire_traking_GA_code("signup",{traking_email:values.email,traking_uid:response.data.data.id});
           
                // console.log("error 4xx or 5xx");
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

          {({ touched, errors, isSubmitting , isValid , validateOnMount , validateOnBlur, validateOnChange , handleBlur , dirty ,setFieldTouched , setFieldValue}) => (
              <Form >
                              <div className={`${styles["register__register-box__registeration-form-box__name-field-container"]} ${ ( validationAfterSubmit.name  && errors.name ) && styles["required"]}`}>
                                {/* {console.log("isValid",isValid, "errors.name" , errors.name , " dirty" ,dirty) } */}
                                <div className={styles["register__register-box__registeration-form-box__icon-wrapper"]}>
                                    <NameFieldIcon/>
                                </div>
                                <Field 
                                 onKeyPress={ (e:any)=>{
                                  e.stopPropagation();
                                  setErrorMessage("");
                                  setValidationAfterSubmit({...validationAfterSubmit,name:false});
                              } }
                                onBlur={(e:any) => {
                                  if(e.target.value !== "" 
                              &&
                              e.target.value.length < 5
                              ){
                                setValidationAfterSubmit({...validationAfterSubmit,name:true});
                              }else{
                                setValidationAfterSubmit({...validationAfterSubmit,name:false});
                              } 
                                  // call the built-in handleBur
                                  handleBlur(e);
                                  // and do something about e
                                  setFieldBlur({...fieldBlur, name:e.target.value});
                              }}
                                 type="text" name="name"  placeholder="الاسم"
                                 className={styles["register__register-box__registeration-form-box__name-field"]}/>
                              </div>
                            { validationAfterSubmit.name  && <ErrorMessage name="name" component="div" className={styles["error-msg"]}/>}

                              <div className={`${styles["register__register-box__registeration-form-box__email-field-container"]} ${ validationAfterSubmit.email  && errors.email && styles["required"]}`}>
                                <div className={styles["register__register-box__registeration-form-box__icon-wrapper"]}>
                                <EnvelopeIcon/>
                                </div>
                                <Field
                                onKeyPress={ (e:any)=>{
                                  e.stopPropagation();
                                  setErrorMessage("");
                                  setValidationAfterSubmit({...validationAfterSubmit,email:false});
                              } }
                                 onBlur={(e:any) => {
                                  if(e.target.value !== "" 
                                  &&
                                  !e.target.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
                                  ){
                                    setValidationAfterSubmit({...validationAfterSubmit,email:true});
                                  }else{
                                    setValidationAfterSubmit({...validationAfterSubmit,email:false});
                                  } 
                                  // call the built-in handleBur
                                  handleBlur(e);
                                  // and do something about e
                                  setFieldBlur({...fieldBlur, email:e.target.value});
                                  // console.log("e",e);
                              }}
                                 type="email" name="email" placeholder="البريد الالكتروني" className={styles["register__register-box__registeration-form-box__email-field"]}/>
                              </div>
                                { validationAfterSubmit.email && <ErrorMessage name="email"  component="div" className={styles["error-msg"]}/>}

                                <div className={`${styles["register__register-box__registeration-form-box__phone-field-container"]} ${ validationAfterSubmit.phoneNumber && errors.phoneNumber ? styles["required"] : null}`}>
                              <div className={styles["register__register-box__registeration-form-box__icon-wrapper"]}>
                                <MobileIcon/>

                                </div>
                             
                              <IntlTelInput  fieldId="phone-number-field"
                              fieldName="phoneNumber"
                                preferredCountries={['kw','sa','ae','qa','om','bh','iq','eg']}
                                separateDialCode={true}
                                onPhoneNumberBlur={(e:any) => {
                                  const phoneNumberField:any = document.getElementById("phone-number-field");
                                  
                                  if(phoneNumberField.value !== "" 
                                  &&
                                  phoneNumberField.value.length < 5
                                  &&
                                  phoneNumberField.value.match(/^\d+$/)
                                  ){
                                    setValidationAfterSubmit({...validationAfterSubmit,phoneNumber:true});
                                  }else{
                                    setValidationAfterSubmit({...validationAfterSubmit,phoneNumber:false});
                                  } 
                                  setFieldTouched("phoneNumber", true);
                                  // console.log("eeeee",e);
                                  // const phoneField:any = document.querySelector("input[type='tel']");
                                  // console.log("phoneField" , fieldBlur);
                                  
                                  handleBlur(phoneFieldEvent);
                                  // // and do something about e
                                  setFieldBlur({...fieldBlur, phone:phoneFieldEvent?.target.value});
                                }}
                                onPhoneNumberChange={(...args) => {
                                  setErrorMessage("");
                                setValidationAfterSubmit({...validationAfterSubmit,phoneNumber:false});
                                  setFieldValue("phoneNumber", args[1]);
                                  const countryDialCode:any = Number(args[2].dialCode);
                                  setCountryCallingCode(countryDialCode);
                                  const countryCode:any = (args[2].iso2?.toUpperCase());
                                  // console.log("countryCode",countryCode);
                                  setCountryCode(countryCode);
                                  // setFieldBlur({...fieldBlur, phone:args[1]});
                                  // console.log("args[1]",fieldBlur);
                                }}
                                onSelectFlag={(...args)=>{
                                  const countryDialCode:any = Number(args[2]);
                                  // console.log("countryDialCodeonflagselected", Number(args[2]));
                                  setCountryCallingCode(countryDialCode);
                                }}
                                useMobileFullscreenDropdown={false}
                                // customPlaceholder= {function(selectedCountryPlaceholder:any, selectedCountryData:any) {
                                //   return "e.g: " + selectedCountryPlaceholder;
                                // }}
                              />
                              </div>
                                { validationAfterSubmit.phoneNumber && <ErrorMessage name="phoneNumber"  component="div" className={styles["error-msg"]}/>}
                                {/* {console.log("fieldBlur.phone",fieldBlur.phone,"dirty",dirty,"errors.phoneNumber",errors.phoneNumber)
                                } */}
                              <div className={`${styles["register__register-box__registeration-form-box__password-field-container"]} ${ validationAfterSubmit.password && errors.password && styles["required"]}`}>
                                <div className={styles["register__register-box__registeration-form-box__icon-wrapper"]}>
                                <LockIcon/>
                                </div>
                                <Field
                                onKeyPress={ (e:any)=>{
                                  e.stopPropagation();
                                  setErrorMessage("");
                                  setValidationAfterSubmit({...validationAfterSubmit,password:false});
                              } }
                                onBlur={(e:any) => {
                                  if(e.target.value !== "" 
                                  &&
                                  e.target.value.length < 5
                                  ){
                                    setValidationAfterSubmit({...validationAfterSubmit,password:true});
                                  }else{
                                    setValidationAfterSubmit({...validationAfterSubmit,password:false});
                                  } 
                                  // call the built-in handleBur
                                  handleBlur(e);
                                  // and do something about e
                                  setFieldBlur({...fieldBlur, password:e.target.value});
                                  // console.log("e",e.target.value);
                              }} 
                                 type="password" name="password" placeholder="كلمة المرور"  id="password-field" className={styles["register__register-box__registeration-form-box__password-field"]}/>
                              
                              <div className={styles["register__register-box__registeration-form-box__show-password-icon-wrapper"]}>
                             <div onClick={()=>showHidePasswordHandler()}>
                              <EyeIcon color={isVisible ? "#008000" : "#999" }/> 
                             </div>
                                </div>
                              </div>
                                { validationAfterSubmit.password && <ErrorMessage name="password"  component="div" className={styles["error-msg"]}/>}

                              <div className="position-relative">

                                {errorMessage !== "" && <div className={styles["server-error-msg"]} >{errorMessage}</div>}
                                <Button onClick={handleValidationOnSubmit} type="submit" className={styles["register__register-box__registeration-form-box__make-new-acc-btn"]}>
                                انشاء حساب جديد
                                </Button>
                              </div>

                              <div className={styles["register__register-box__registeration-form-box__do-you-have-acc"]}>
                                  <span> لديك حساب عندنا؟ </span>
                                  <Link href="/signin">
                                   <span> تسجيل الدخول </span>
                                  </Link>
                              </div>

              </Form>
          )}

            </Formik>
          </div>
        </Col>
        <Col xs={{span:12 , order:1}} sm={{span:6 , order:2}} className={styles["register__img"]}>
          <img src="/images/signUpDiscImg.png" alt="register now" />
        </Col>
      </Row>
    </>
  );
}
