/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { Row, Col, Button } from "react-bootstrap";
import styles from "./forget-password-page.module.css"; 
import { EnvelopeIcon } from "common/Icons/Icons";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Image from 'next/image';
import * as Yup from 'yup';
import { axiosInstance } from "configurations/axios/axiosConfig";
import {toggleLoader} from "modules/_Shared/utils/toggleLoader";
import forgetPassword from "/images/forgetPassword2.png";

interface ForgetPasswordFormValues {
    email:string;
  };

  
  
  
  export default function ForgetPasswordPage() {
      const [fieldBlur, setFieldBlur] = useState({email:""});
      const [validationAfterSubmit, setValidationAfterSubmit] = useState({email:false});
      const [serverResponse, setServerResponse] = useState({value : "" , color:"", bgcolor:""});

      function validationSchema() {
         return Yup.object().shape({
          
           email: Yup.string()
             .required('خانة البريد الإلكتروني مطلوبه')
             .email('البريد الإلكتروني غير مناسب')
             .matches(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              ,'البريد الإلكتروني غير مناسب')
         });
       }
     
       const initialValues: ForgetPasswordFormValues = {  
         email:'',
       };

      const handleValidationOnSubmit = ():any =>{
          
          if(fieldBlur.email == ""){
          setValidationAfterSubmit({email:true})
        }
  
    }

    return (
        <>
        <Row className={styles["forget-password"]}>
            <Col xs={{span:12 , order:2}} sm={{span:7 , order:1}} className={styles["forget-password__forget-password-box"]}>
                <div className={styles["forget-password__forget-password-box__title"]}>
                    <div> نسيت كلمة المرور؟ </div>
                    <div> ادخل بريدك الالكتروني لتغيير كلمة المرور الخاص بك </div>
                </div>

                    <Formik
                    validateOnChange={false}
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values:any):any =>{
                        if(fieldBlur.email == ""){
                        setValidationAfterSubmit({email:true}) 
                      }
                      axiosInstance
                        .post(`reset-password`, {
                        "email": values.email,
                        })
                        .then((response:any) => {
                        if(!JSON.stringify(response.status).startsWith("2")){
                            setServerResponse({value:"حدث خطأ ما برجاء المحاولة مره اخري " , color:"red", bgcolor:"#fcaaac"});
                        }else{
                            setServerResponse({value: "تم إرسال رابط تغيير كلمة المرور، يرجى فحص بريدك الإلكتروني" , color:"green", bgcolor:"#C7F6B6"})
                        }
                        
                        })
                        .catch((error:any)=>{
                        console.log("error", error);
                        })
                
                  }}
                    >
                        {({ resetForm,errors,handleBlur }) => (

                            <Form>

                                <div className={`${styles["forget-password__forget-password-box__email-field-container"]} ${( validationAfterSubmit.email  && errors.email) && styles["required"]}`}>
                                    <div className={styles["forget-password__forget-password-box__icon-wrapper"]}>
                                    <EnvelopeIcon/>
                                    </div>
                                    <Field
                                    onKeyPress={ (e:any)=>{
                                        e.stopPropagation();
                                        setServerResponse({value:"" , color:"", bgcolor:""});
                                        setValidationAfterSubmit({email:false});
                                    } }
                                    onBlur={(e:any) => {
                                        if(e.target.value !== "" 
                                        &&
                                        !e.target.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
                                        ){
                                            setValidationAfterSubmit({email:true});
                                        }else{
                                            setValidationAfterSubmit({email:false});
                                        } 
                                        
                                        handleBlur(e);
                                        setFieldBlur({...fieldBlur, email:e.target.value});
                                    }}
                                     type="email" name="email" placeholder="البريد الالكتروني"
                                     className={styles["forget-password__forget-password-box__email-field"]}/>
                                </div>
                                    { validationAfterSubmit.email && <ErrorMessage name="email" component="div" className={styles["error-msg"]} />}
                               <div className="position-relative">

                                <Button onClick={handleValidationOnSubmit} type="submit" className={styles["forget-password__forget-password-box__send-btn"]}>
                                إرسال
                                {serverResponse.value !== "" && <div style={{color:`${serverResponse.color}` , backgroundColor:`${serverResponse.bgcolor}`}} className={styles["server-response"]} >{serverResponse.value}</div>}
                                </Button>

                               </div>
                            </Form>
                        )}

                    </Formik>

            </Col>
            <Col xs={{span:12 , order:1}} sm={{span:5 , order:2}} className={styles["forget-password__img"]}>
                <img loading="lazy"   src={forgetPassword} alt="نسيت كلمة المرور" />
            </Col>

        </Row>
        </>
    )
}
