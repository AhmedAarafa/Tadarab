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
   
  
    useEffect(() => {
      const updateValue =(e:any)=>{
        // console.log("lklk" , e.target.value);
        setPhoneFieldEvent(e);
      };
      const phoneField:any = document.querySelector("input[type='tel']");
      phoneField.addEventListener('change', updateValue);
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
        .min(5, "الإسم يجب ان يكون 5 حروف او أكثر"),
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

      // useEffect(() => {
      //   console.log(".env" , process.env.NEXT_PUBLIC_BASE_URL);
        
      // }, []);
      

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
            <svg id="google" xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24">
                <path id="Path_13180" data-name="Path 13180" d="M12,5a6.962,6.962,0,0,1,4.286,1.474L19.923,3A11.977,11.977,0,0,0,1.386,6.41L5.43,9.6A7,7,0,0,1,12,5Z" fill="#ea4335"/>
                <path id="Path_13181" data-name="Path 13181" d="M23.9,13.5A11.9,11.9,0,0,0,24,12a12.035,12.035,0,0,0-.265-2.5H12v5h6.486a7.072,7.072,0,0,1-2.648,3.319l4.059,3.2A11.987,11.987,0,0,0,23.9,13.5Z" fill="#4285f4"/>
                <path id="Path_13182" data-name="Path 13182" d="M5,12a6.971,6.971,0,0,1,.43-2.4L1.386,6.41a11.958,11.958,0,0,0-.028,11.123l4.05-3.2A6.972,6.972,0,0,1,5,12Z" fill="#fbbc05"/>
                <path id="Path_13183" data-name="Path 13183" d="M12,19a7,7,0,0,1-6.592-4.664l-4.05,3.2A11.981,11.981,0,0,0,19.9,21.024l-4.059-3.2A6.831,6.831,0,0,1,12,19Z" fill="#34a853"/>
            </svg>
                جوجل
            </div>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24.146 24">
                <path id="facebook" d="M32.146,20.073A12.073,12.073,0,1,0,18.187,32V23.563H15.12v-3.49h3.067v-2.66c0-3.026,1.8-4.7,4.56-4.7a18.58,18.58,0,0,1,2.7.236v2.97H23.927a1.745,1.745,0,0,0-1.967,1.885v2.266h3.348l-.535,3.49H21.959V32A12.077,12.077,0,0,0,32.146,20.073Z" transform="translate(-8 -8)" fill="#1977f3"/>
            </svg>
                فيسبوك
            </div>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg"  width="1.5rem" height="1.5rem" viewBox="0 0 20 24">
                <defs>
                    <linearGradient id="linear-gradient" x1="0.07" y1="0.327" x2="1.028" y2="0.699" gradientUnits="objectBoundingBox">
                    <stop offset="0" stopColor="#fff" stopOpacity="0.2"/>
                    <stop offset="1" stopColor="#fff" stopOpacity="0"/>
                    </linearGradient>
                </defs>
                <g id="apple" transform="translate(-2)">
                    <path id="Path_14999" data-name="Path 14999" d="M18,12.5a5.5,5.5,0,0,1,3.039-4.913A6.261,6.261,0,0,0,17,6a6.127,6.127,0,0,0-2.344.52A5.581,5.581,0,0,1,12.5,7a5.581,5.581,0,0,1-2.157-.481A6.127,6.127,0,0,0,8,6c-.614,0-6,.2-6,7,0,5.564,3.8,11,6,11a6.636,6.636,0,0,0,2.811-.594A4.1,4.1,0,0,1,12.5,23a4.1,4.1,0,0,1,1.69.406A6.643,6.643,0,0,0,17,24c1.544,0,3.743-2.671,5-6.182A5.391,5.391,0,0,1,18,12.5Z" fill="#1a1a1a"/>
                    <path id="XMLID_1339_" d="M12,6a6.064,6.064,0,0,0,5-6A6.063,6.063,0,0,0,12,6Z" fill="#1a1a1a"/>
                    <path id="Path_15000" data-name="Path 15000" d="M8,6.25a6.127,6.127,0,0,1,2.344.52A5.581,5.581,0,0,0,12.5,7.25a5.581,5.581,0,0,0,2.157-.481A6.127,6.127,0,0,1,17,6.25a6.344,6.344,0,0,1,3.86,1.442c.061-.033.117-.074.179-.106A6.261,6.261,0,0,0,17,6a6.127,6.127,0,0,0-2.344.52A5.581,5.581,0,0,1,12.5,7a5.581,5.581,0,0,1-2.157-.481A6.127,6.127,0,0,0,8,6c-.614,0-6,.2-6,7,0,.046.005.091.006.137C2.068,6.45,7.39,6.25,8,6.25Z" fill="#fff" opacity="0.1"/>
                    <path id="Path_15001" data-name="Path 15001" d="M17,23.75a6.643,6.643,0,0,1-2.81-.593,4.1,4.1,0,0,0-1.69-.406,4.1,4.1,0,0,0-1.69.405A6.636,6.636,0,0,1,8,23.75c-2.186,0-5.934-5.347-6-10.862,0,.039-.006.073-.006.113,0,5.564,3.8,11,6,11a6.636,6.636,0,0,0,2.811-.594A4.1,4.1,0,0,1,12.5,23a4.1,4.1,0,0,1,1.69.406A6.643,6.643,0,0,0,17,24c1.544,0,3.743-2.671,5-6.182-.029-.008-.055-.021-.084-.029C20.644,21.189,18.514,23.75,17,23.75Z" opacity="0.2"/>
                    <path id="Path_15002" data-name="Path 15002" d="M16.979.442a5.919,5.919,0,0,1-4.974,5.3c0,.087,0,.166,0,.253A6.077,6.077,0,0,0,17,.261C16.991.307,16.994.386,16.979.442Z" opacity="0.2"/>
                    <path id="Path_15003" data-name="Path 15003" d="M12.005,5.734c.012-.065.026-.246.04-.356q.016-.207.045-.406C12.456,2.466,14.394.8,17,.261,17,.174,17,.088,17,0A6.068,6.068,0,0,0,12.005,5.734Z" fill="#fff" opacity="0.1"/>
                    <path id="Path_15004" data-name="Path 15004" d="M18,12.5a5.5,5.5,0,0,1,3.039-4.913A6.261,6.261,0,0,0,17,6a6.127,6.127,0,0,0-2.344.52A5.581,5.581,0,0,1,12.5,7a5.581,5.581,0,0,1-2.157-.481A6.127,6.127,0,0,0,8,6c-.614,0-6,.2-6,7,0,5.564,3.8,11,6,11a6.636,6.636,0,0,0,2.811-.594A4.1,4.1,0,0,1,12.5,23a4.1,4.1,0,0,1,1.69.406A6.643,6.643,0,0,0,17,24c1.544,0,3.743-2.671,5-6.182A5.391,5.391,0,0,1,18,12.5ZM17,0a6.064,6.064,0,0,0-5,6A6.064,6.064,0,0,0,17,0Z" fill="url(#linear-gradient)"/>
                </g>
            </svg>
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
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="1.438rem" viewBox="0 0 20 22.857">
                                        <path id="name" d="M10,11.429A5.714,5.714,0,1,0,4.286,5.714,5.714,5.714,0,0,0,10,11.429Zm4,1.429h-.746a7.771,7.771,0,0,1-6.509,0H6a6,6,0,0,0-6,6v1.857a2.143,2.143,0,0,0,2.143,2.143H17.857A2.143,2.143,0,0,0,20,20.714V18.857A6,6,0,0,0,14,12.857Z" fill="#999"/>
                                    </svg>
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="1.438rem" viewBox="0 0 20 15">
                                    <path id="email" d="M19.621,68.953a.235.235,0,0,1,.379.184v7.988A1.875,1.875,0,0,1,18.125,79H1.875A1.875,1.875,0,0,1,0,77.125V69.141a.234.234,0,0,1,.379-.184c.875.68,2.035,1.543,6.02,4.438.824.6,2.215,1.867,3.6,1.859,1.395.012,2.813-1.281,3.605-1.859C17.59,70.5,18.746,69.633,19.621,68.953ZM10,74c.906.016,2.211-1.141,2.867-1.617,5.184-3.762,5.578-4.09,6.773-5.027A.935.935,0,0,0,20,66.617v-.742A1.875,1.875,0,0,0,18.125,64H1.875A1.875,1.875,0,0,0,0,65.875v.742a.94.94,0,0,0,.359.738c1.2.934,1.59,1.266,6.773,5.027C7.789,72.859,9.094,74.016,10,74Z" transform="translate(0 -64)" fill="#999"/>
                                </svg>
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="1.75rem" viewBox="0 0 20.003 28.334">
                                  <path id="mobile" d="M15094.665,22269.334h-13.329A3.377,3.377,0,0,1,15078,22266v-21.662a3.377,3.377,0,0,1,3.337-3.336h13.329a3.377,3.377,0,0,1,3.337,3.336V22266a3.377,3.377,0,0,1-3.337,3.336Zm-6.164-4.336a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,15088.5,22265Zm-7.165-19.332a.851.851,0,0,0-.839.832v16.336a.851.851,0,0,0,.839.834h13.329a.84.84,0,0,0,.833-.834V22246.5a.84.84,0,0,0-.833-.832Zm4.582-2.33a.416.416,0,1,0,0,.832h4.164a.416.416,0,1,0,0-.832Z" transform="translate(-15077.999 -22241)" fill="#999"/>
                                </svg>

                                </div>
                             
                              <IntlTelInput
                              fieldName="phoneNumber"
                                preferredCountries={['eg','kw']}
                                separateDialCode={true}
                                onPhoneNumberBlur={() => {
                                  setFieldTouched("phoneNumber", true);
                                  // console.log("eeeee",e);
                                  // const phoneField:any = document.querySelector("input[type='tel']");
                                  // console.log("phoneField" , fieldBlur);
                                  
                                  handleBlur(phoneFieldEvent);
                                  // // and do something about e
                                  setFieldBlur({...fieldBlur, phone:phoneFieldEvent.target.value});
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="1.438rem" viewBox="0 0 20 22.857">
                                    <path id="password" d="M17.857,10H16.786V6.786a6.786,6.786,0,1,0-13.571,0V10H2.143A2.143,2.143,0,0,0,0,12.143v8.571a2.143,2.143,0,0,0,2.143,2.143H17.857A2.143,2.143,0,0,0,20,20.714V12.143A2.143,2.143,0,0,0,17.857,10Zm-4.643,0H6.786V6.786a3.214,3.214,0,1,1,6.429,0Z" fill="#999"/>
                                </svg>
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
                              <svg  onClick={()=>showHidePasswordHandler()} xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1rem" viewBox="0 0 24 16">
                                    <path id="eye-regular" d="M12,67.333a4.622,4.622,0,0,0-1.3.208,2.308,2.308,0,0,1,.3,1.125A2.333,2.333,0,0,1,8.667,71a2.308,2.308,0,0,1-1.125-.3A4.655,4.655,0,1,0,12,67.333Zm11.855,4.058A13.364,13.364,0,0,0,12,64,13.366,13.366,0,0,0,.146,71.392a1.348,1.348,0,0,0,0,1.216A13.364,13.364,0,0,0,12,80a13.366,13.366,0,0,0,11.855-7.392,1.348,1.348,0,0,0,0-1.216ZM12,78a11.335,11.335,0,0,1-9.914-6A11.334,11.334,0,0,1,12,66a11.334,11.334,0,0,1,9.914,6A11.334,11.334,0,0,1,12,78Z" transform="translate(-0.001 -64)" fill={isVisible ? "#008000" : "#999" } opacity="0.6"/>
                                </svg>
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
