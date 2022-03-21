/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { Row, Col, Button } from "react-bootstrap";
import styles from "./reset-password-page.module.css"; 
import { LockIcon , EyeIcon} from "common/Icons/Icons";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { axiosInstance } from "configurations/axios/axiosConfig";
import Router, { useRouter }  from "next/router"; 


interface ResetPasswordFormValues {
  oldPassword:string,
  password:string;
  repeatedPassword:string;
};

export default function ChangePasswordPage() { 
    const [isPwFieldVisible, setIsPwFieldVisible] = useState(false);
    const [isReEnterPwFieldVisible, setIsReEnterPwFieldVisible] = useState(false);
    const [isOldPwFieldVisible, setIsOldPwFieldVisible] = useState(false);
    const [validationAfterSubmit, setValidationAfterSubmit] = useState({password:false,repeatedPassword:false,oldPassword:false});
    const [serverResponse, setServerResponse] = useState({value : "" , color:""});
    const [fieldBlur, setFieldBlur] = useState({password:"",repeatedPassword:"",oldPassword:""});


    function validationSchema() {
       return Yup.object().shape({
        oldPassword: Yup.string()
        .required("خانة كلمة المرور القديمه مطلوبه"),

        password: Yup.string()
        .min(5, "كلمة المرور يجب ان تكون 5 حروف او أكثر")
        .required("خانة كلمة المرور مطلوبه"),
        
        repeatedPassword: Yup.string()
        .required("خانة إعادة كلمة المرور مطلوبه ")
        .oneOf([Yup.ref('password'), null], 'كلمة المرور يجب ان تكون متماثله'),
       });
     }
   
     const initialValues: ResetPasswordFormValues = {  
      oldPassword:"",
      password:"",
      repeatedPassword:"",
     };

    const handleValidationOnSubmit = ():any =>{
      const pwField:any = document.getElementById("password-field");
      const reEnterPwField:any = document.getElementById("re-enter-password-field");
      
      if(fieldBlur.oldPassword == ""){
        const newValidationState = validationAfterSubmit;
        newValidationState.oldPassword = true;
        setValidationAfterSubmit(newValidationState);
      }

      if(fieldBlur.password == "" || fieldBlur.password !== reEnterPwField.value){
        const newValidationState = validationAfterSubmit;
        newValidationState.password = true;
        setValidationAfterSubmit(newValidationState);
      }
      if(fieldBlur.repeatedPassword == "" || fieldBlur.repeatedPassword !== pwField.value){
        const newValidationState = validationAfterSubmit;
        newValidationState.repeatedPassword = true;
        setValidationAfterSubmit(newValidationState);
      }
      // console.log(fieldBlur);
      // console.log(fieldBlur.password == "" && fieldBlur.password !== reEnterPwField.value);
      // console.log(fieldBlur.repeatedPassword == "" && fieldBlur.repeatedPassword !== pwField.value);
  }

    const showHidePasswordHandler = (id:any) => {
        const passwordField: any = document.getElementById("password-field");
        const reEnterPasswordField: any = document.getElementById("re-enter-password-field");
        const oldPasswordField: any = document.getElementById("old-password-field");
        switch (id) {
            case "password-field":
                if (passwordField.type === "password") {
                    passwordField.type = "text";
                    setIsPwFieldVisible(true);
                  } else {
                    passwordField.type = "password";
                    setIsPwFieldVisible(false);
                  }
                
                break;
            case "re-enter-password-field":
                if (reEnterPasswordField.type === "password") {
                    reEnterPasswordField.type = "text";
                    setIsReEnterPwFieldVisible(true);
                  } else {
                    reEnterPasswordField.type = "password";
                    setIsReEnterPwFieldVisible(false);
                  }
                
                break;
            case "old-password-field":
                if (oldPasswordField.type === "password") {
                    oldPasswordField.type = "text";
                    setIsOldPwFieldVisible(true);
                  } else {
                    oldPasswordField.type = "password";
                    setIsOldPwFieldVisible(false);
                  }
                
                break;
        
            default:
                break;
        }
 
      };
      
    return (
        <>
        <Row className={styles["reset-password"]}>
            <Col xs={{span:12 , order:2}} sm={{span:7 , order:1}} className={styles["reset-password__reset-password-box"]}>
                
                <div className={styles["reset-password__reset-password-box__title"]}>
                    <div> تغيير كلمة المرور </div>
                    <div> من فضلك ادخل كلمة المرور الجديدة للعودة لحسابك </div>
                </div>
                <Formik
                    validateOnChange={false}
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values:any):any =>{
                      //   if(fieldBlur.email == ""){
                      //   setValidationAfterSubmit({email:true})
                      // }
                      axiosInstance
                      .put(`change-password`, {
                      "old_password": values.oldPassword,
                      "new_password": values.password,
                      "confirm_new_password": values.repeatedPassword,
                      })
                      .then((response:any) => {
                      if(!JSON.stringify(response.status).startsWith("2")){
                          setServerResponse({value:"حدث خطأ ما برجاء المحاولة مره اخري " , color:"red"});
                      }else{
                          setServerResponse({value: "تم تغيير كلمة المرور بنجاح" , color:"green"});
                          Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}`);
                      }
                      
                      })
                      .catch((error:any)=>{
                      console.log("error", error);
                      })
                  }}
                    >
                      {({ resetForm,errors,handleBlur }) => (

                        <Form>
                          <div className={`${styles["reset-password__reset-password-box__old-password-field-container"]} 
                          ${( validationAfterSubmit.oldPassword  && errors.oldPassword) && styles["required"]}
                          `}>
                              <div className={styles["reset-password__reset-password-box__icon-wrapper"]}>
                              <LockIcon/>
                              </div>
                              <Field
                               onKeyPress={ (e:any)=>{
                                e.stopPropagation();
                                setServerResponse({value:"" , color:""});
                                setValidationAfterSubmit({...validationAfterSubmit,oldPassword:false});
                            } }
                            onBlur={(e:any) => {
                              // if(e.target.value !== "" 
                              // &&
                              // e.target.value.length <= 5
                              // ){
                              //   setValidationAfterSubmit({...validationAfterSubmit,oldPassword:true});
                              // }else{
                              //   setValidationAfterSubmit({...validationAfterSubmit,oldPassword:false});
                              // } 
                              
                              handleBlur(e);
                              setFieldBlur({...fieldBlur, oldPassword:e.target.value});
                          }}
                               name="oldPassword"
                               type="password" placeholder="كلمة المرور القديمه" 
                                id="old-password-field" className={styles["reset-password__reset-password-box__password-field"]}/>
                            
                            <div className={styles["reset-password__reset-password-box__show-password-icon-wrapper"]}>

                              <div onClick={()=>showHidePasswordHandler("old-password-field")}>

                              <EyeIcon color={isOldPwFieldVisible ? "#008000" : "#999"}/>
                              </div>
                            
                              </div>
                            </div>
                              { validationAfterSubmit.oldPassword && <ErrorMessage name="oldPassword" component="div" className={styles["error-msg"]} />}

                          <div className={`${styles["reset-password__reset-password-box__password-field-container"]} 
                          ${( validationAfterSubmit.password  && errors.password) && styles["required"]}
                          `}>
                              <div className={styles["reset-password__reset-password-box__icon-wrapper"]}>
                              <LockIcon/>
                              </div>
                              <Field
                               onKeyPress={ (e:any)=>{
                                e.stopPropagation();
                                setServerResponse({value:"" , color:""});
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
                              
                              handleBlur(e);
                              setFieldBlur({...fieldBlur, password:e.target.value});
                          }}
                               name="password"
                               type="password" placeholder="كلمة المرور الجديده" 
                                id="password-field" className={styles["reset-password__reset-password-box__password-field"]}/>
                            
                            <div className={styles["reset-password__reset-password-box__show-password-icon-wrapper"]}>

                              <div onClick={()=>showHidePasswordHandler("password-field")}>

                              <EyeIcon color={isPwFieldVisible ? "#008000" : "#999"}/>
                              </div>
                            
                              </div>
                            </div>
                              { validationAfterSubmit.password && <ErrorMessage name="password" component="div" className={styles["error-msg"]} />}


                          <div className={`${styles["reset-password__reset-password-box__re-enter-password-field-container"]}
                          ${( validationAfterSubmit.repeatedPassword  && errors.repeatedPassword) && styles["required"]}
                          `}>
                              <div className={styles["reset-password__reset-password-box__icon-wrapper"]}>
                              <LockIcon/>
                              </div>
                              <Field 
                              onKeyPress={ (e:any)=>{
                                e.stopPropagation();
                                setServerResponse({value:"" , color:""});
                                setValidationAfterSubmit({...validationAfterSubmit,repeatedPassword:false});
                            } }
                            onBlur={(e:any) => {
                              const pwField:any = document.getElementById("password-field");
                              if(e.target.value !== "" 
                              &&
                              e.target.value !== pwField.value
                              ){
                                setValidationAfterSubmit({...validationAfterSubmit,repeatedPassword:true});
                              }else{
                                setValidationAfterSubmit({...validationAfterSubmit,repeatedPassword:false});
                              } 
                              
                              handleBlur(e);
                              setFieldBlur({...fieldBlur, repeatedPassword:e.target.value});
                          }}
                               name="repeatedPassword"
                               type="password" placeholder="تأكيد كلمة المرور"  id="re-enter-password-field" className={styles["reset-password__reset-password-box__password-field"]}/>
                            
                            <div className={styles["reset-password__reset-password-box__show-password-icon-wrapper"]}>
                              <div onClick={()=>showHidePasswordHandler("re-enter-password-field")}>

                              <EyeIcon color={isReEnterPwFieldVisible ? "#008000" : "#999"}/>
                              </div>
                            
                              </div>
                            </div>
                              { validationAfterSubmit.repeatedPassword && <ErrorMessage name="repeatedPassword" component="div" className={styles["error-msg"]} />}


                          <div className="position-relative">
                          {serverResponse.value !== "" && <div style={{color:`${serverResponse.color}`}} className={styles["server-response"]} >{serverResponse.value}</div>}

                          <Button onClick={handleValidationOnSubmit} type="submit" className={styles["reset-password__reset-password-box__send-btn"]}>
                          تغيير كلمة المرور
                          </Button>
                          </div>

                        </Form>
                      )}

                    </Formik>

            </Col>
            <Col xs={{span:12 , order:1}} sm={{span:5 , order:2}} className={styles["reset-password__img"]}>
                <img src="/images/reset password.png" alt="reset password" />
            </Col>

        </Row>
            
        </> 
    )
}
