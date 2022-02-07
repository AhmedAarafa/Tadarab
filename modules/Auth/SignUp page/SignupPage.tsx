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
import Countries from  "../../../node_modules/country-codes/node_modules/country-data/data/countries.json";
import  "../../../node_modules/country-codes/node_modules/country-data/data/countries2.json";
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import { EnvelopeIcon, GoogleIcon,FbIcon,AppleIcon,LockIcon,EyeIcon,MobileIcon,NameFieldIcon } from "common/Icons/Icons";

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

      // const arrow:any = document.getElementsByClassName("down" || "up")[0];
      // const countryList:any = document.getElementsByClassName("country-list")[0];
      // const intlTelInput:any = document.getElementsByClassName("intl-tel-input")[0];
   
      // (dialCodeBtn || arrow).addEventListener("click",  (e:any)=>{
      //   if(countryList.classList.contains("hide")){
      //     // e.preventDefault();
      //     console.log("countryList",arrow);
      //     // countryList.style.cssText=`display:block`;
      //     countryList.classList.remove("hide");
      //     intlTelInput.classList.add("expanded");
      //     arrow?.classList.remove("down");
      //     arrow?.classList.add("up");
      //   }else{
      //     // e.preventDefault();
      //     console.log("not contains");
      //     countryList.classList.add("hide");
      //     intlTelInput.classList.remove("expanded");
      //     arrow?.classList.remove("up");
      //     arrow?.classList.add("down");
      //     // countryList.style.cssText=`display:none`;

      //   }
        
      // })
      const intlTelInput:any = document.querySelector('.intl-tel-input .selected-dial-code');
      setTimeout(() => {
            intlTelInput?.classList.remove("selected-dial-code");
            }, 50);
    }, []);
 

    
   
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

      const validate = Yup.object({
        name: Yup.string()
        .min(7, "الإسم يجب ان يكون 5 حروف او أكثر"),
        // .required("خانة الإسم مطلوبه"),
        email: Yup.string()
        .email("البريد الإلكتروني غير مناسب"),
        // .required("خانة البريد الإلكتروني مطلوبه"),
        phoneNumber: Yup.string()
        .matches(/^\d+$/, 'رقم الهاتف يجب الا يحتوي علي حروف او رموز خاصه')
        .min(5, "رقم الهاتف غير مناسب")
        .typeError("رقم الهاتف غير مناسب"),
        // .required("خانة الرقم مطلوبه"),
        password: Yup.string()
        .min(5, "كلمة السر يجب ان تكون 5 حروف او أكثر"),
        // .required("خانة كلمة السر مطلوبه"),
      });


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
            <FbIcon/>
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

            <Formik  initialValues={initialValues}
            validateOnChange={false}
            validateOnBlur={false}
         onSubmit={(values, actions) => {
            //  console.log("ss",{ values, actions });
           actions.setSubmitting(false);
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
              if(response.data.status_code.startsWith("2")){
                Router.push("http://localhost:3000/SignIn");
              }else if(response.data.status_code.startsWith(4) ||
              response.data.status_code.startsWith(5)
              ){
                // console.log("error 4xx or 5xx");
                setErrorMessage(response.data.message);
                // setTimeout(() => {
                // setErrorMessage("");
                // }, 5000);
              }
            })
            .catch((error:any)=>{
              // console.log("errrrr", error);
              // if (error.response) {
              //   // Request made and server responded
              //   console.log(error.response.data);
              //   console.log(error.response.status);
              //   console.log(error.response.headers);
              // } else if (error.request) {
              //   // The request was made but no response was received
              //   console.log(error.request);
              // } else {
              //   // Something happened in setting up the request that triggered an Error
              //   console.log('Error', error.message);
              // }
            })
         }}
         validationSchema={validate}
         >

          {({ touched, errors, isSubmitting , isValid , validateOnMount , validateOnBlur, validateOnChange , handleBlur , dirty ,setFieldTouched , setFieldValue}) => (
              <Form >
                            {/* {console.log("errorsss",isSubmitting)} */}
                              <div className={`${styles["register__register-box__registeration-form-box__name-field-container"]} ${ ( fieldBlur.name !== "" && dirty && errors.name ) && styles["required"]}`}>
                                {/* {console.log("isValid",isValid, "errors.name" , errors.name , " dirty" ,dirty) } */}
                                <div className={styles["register__register-box__registeration-form-box__icon-wrapper"]}>
                                    <NameFieldIcon/>
                                </div>
                                <Field 
                                onBlur={(e:any) => {
                                  // call the built-in handleBur
                                  handleBlur(e);
                                  // and do something about e
                                  setFieldBlur({...fieldBlur, name:e.target.value});
                                  // console.log("e",e.target.value);
                              }}
                                 type="text" name="name"  placeholder="الاسم"
                                 className={styles["register__register-box__registeration-form-box__name-field"]}/>
                              </div>
                            { fieldBlur.name !== "" && dirty && errors.name && <ErrorMessage name="name" component="div" className={styles["error-msg"]}/>}

                              <div className={`${styles["register__register-box__registeration-form-box__email-field-container"]} ${ fieldBlur.email !== "" && dirty && errors.email && styles["required"]}`}>
                                <div className={styles["register__register-box__registeration-form-box__icon-wrapper"]}>
                                <EnvelopeIcon/>
                                </div>
                                <Field
                                 onBlur={(e:any) => {
                                  // call the built-in handleBur
                                  handleBlur(e);
                                  // and do something about e
                                  setFieldBlur({...fieldBlur, email:e.target.value});
                                  // console.log("e",e);
                              }}
                                 type="email" name="email" placeholder="البريد الالكتروني" className={styles["register__register-box__registeration-form-box__email-field"]}/>
                              </div>
                                { fieldBlur.email !== "" && dirty && errors.email && <ErrorMessage name="email"  component="div" className={styles["error-msg"]}/>}

                                <div className={`${styles["register__register-box__registeration-form-box__phone-field-container"]} ${ fieldBlur.phone !== "" && dirty && errors.phoneNumber ? styles["required"] : null}`}>
                              <div className={styles["register__register-box__registeration-form-box__icon-wrapper"]}>
                                <MobileIcon/>

                                </div>
                             
                              <IntlTelInput
                              fieldName="phoneNumber"
                                preferredCountries={['kw','sa','ae','qa','om','bh','iq','eg']}
                                separateDialCode={true}
                                onPhoneNumberBlur={() => {
                                  setFieldTouched("phoneNumber", true);
                                  // console.log("eeeee",e);
                                  // const phoneField:any = document.querySelector("input[type='tel']");
                                  // console.log("phoneField" , fieldBlur);
                                  
                                  handleBlur(phoneFieldEvent);
                                  // // and do something about e
                                  setFieldBlur({...fieldBlur, phone:phoneFieldEvent?.target.value});
                                }}
                                onPhoneNumberChange={(...args) => {
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
                                { fieldBlur.phone !== "" && dirty && errors.phoneNumber && <ErrorMessage name="phoneNumber"  component="div" className={styles["error-msg"]}/>}
                                {/* {console.log("fieldBlur.phone",fieldBlur.phone,"dirty",dirty,"errors.phoneNumber",errors.phoneNumber)
                                } */}
                              <div className={`${styles["register__register-box__registeration-form-box__password-field-container"]} ${ fieldBlur.password !== "" && dirty && errors.password && styles["required"]}`}>
                                <div className={styles["register__register-box__registeration-form-box__icon-wrapper"]}>
                                <LockIcon/>
                                </div>
                                <Field
                                onBlur={(e:any) => {
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
                                { fieldBlur.password !== "" && dirty && errors.password && <ErrorMessage name="password"  component="div" className={styles["error-msg"]}/>}

                              <div className="position-relative">

                                {errorMessage !== "" && <div className={styles["server-error-msg"]} >{errorMessage}</div>}
                                <Button type="submit" className={styles["register__register-box__registeration-form-box__make-new-acc-btn"]}>
                                انشاء حساب جديد
                                </Button>
                              </div>

                              <div className={styles["register__register-box__registeration-form-box__do-you-have-acc"]}>
                                  <span> لديك حساب عندنا؟ </span>
                                  <span> تسجيل الدخول </span>
                              </div>

              </Form>
          )}

            </Formik>
          </div>
        </Col>
        <Col xs={{span:12 , order:1}} sm={{span:6 , order:2}} className={styles["register__img"]}>
          <img src="/images/register.png" alt="register now" />
        </Col>
      </Row>
    </>
  );
}
