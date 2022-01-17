/* eslint-disable @next/next/no-img-element */
import React, {useState, useEffect} from "react";
import { Row, Col, Button, Form, Dropdown, DropdownButton } from "react-bootstrap";
import styles from "./sign-in-page.module.css";


export default function SignInPage() {
    const [isVisible, setIsVisible] = useState(false);

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

          <div className={styles["sign-in__sign-in-box__sign-in-with-email"]}>
          أو سجل بواسطة البريد الإلكتروني
          </div>
          
          <div className={styles["sign-in__sign-in-box__sign-in-form-box"]}>
              <Form>
                
                  <div className={styles["sign-in__sign-in-box__sign-in-form-box__email-field-container"]}>
                    <div className={styles["sign-in__sign-in-box__sign-in-form-box__icon-wrapper"]}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="1.438rem" viewBox="0 0 20 15">
                        <path id="email" d="M19.621,68.953a.235.235,0,0,1,.379.184v7.988A1.875,1.875,0,0,1,18.125,79H1.875A1.875,1.875,0,0,1,0,77.125V69.141a.234.234,0,0,1,.379-.184c.875.68,2.035,1.543,6.02,4.438.824.6,2.215,1.867,3.6,1.859,1.395.012,2.813-1.281,3.605-1.859C17.59,70.5,18.746,69.633,19.621,68.953ZM10,74c.906.016,2.211-1.141,2.867-1.617,5.184-3.762,5.578-4.09,6.773-5.027A.935.935,0,0,0,20,66.617v-.742A1.875,1.875,0,0,0,18.125,64H1.875A1.875,1.875,0,0,0,0,65.875v.742a.94.94,0,0,0,.359.738c1.2.934,1.59,1.266,6.773,5.027C7.789,72.859,9.094,74.016,10,74Z" transform="translate(0 -64)" fill="#999"/>
                    </svg>
                    </div>
                    <Form.Control type="email" placeholder="البريد الالكتروني" className={styles["sign-in__sign-in-box__sign-in-form-box__email-field"]}/>
                  </div>

                  <div className={styles["sign-in__sign-in-box__sign-in-form-box__password-field-container"]}>
                    <div className={styles["sign-in__sign-in-box__sign-in-form-box__icon-wrapper"]}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="1.438rem" viewBox="0 0 20 22.857">
                        <path id="password" d="M17.857,10H16.786V6.786a6.786,6.786,0,1,0-13.571,0V10H2.143A2.143,2.143,0,0,0,0,12.143v8.571a2.143,2.143,0,0,0,2.143,2.143H17.857A2.143,2.143,0,0,0,20,20.714V12.143A2.143,2.143,0,0,0,17.857,10Zm-4.643,0H6.786V6.786a3.214,3.214,0,1,1,6.429,0Z" fill="#999"/>
                    </svg>
                    </div>
                    <Form.Control type="password" placeholder="كلمة المرور"  id="password-field" className={styles["sign-in__sign-in-box__sign-in-form-box__password-field"]}/>
                   
                   <div className={styles["sign-in__sign-in-box__sign-in-form-box__show-password-icon-wrapper"]}>
                     <svg  onClick={()=>showHidePasswordHandler()} xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1rem" viewBox="0 0 24 16">
                         <path id="eye-regular" d="M12,67.333a4.622,4.622,0,0,0-1.3.208,2.308,2.308,0,0,1,.3,1.125A2.333,2.333,0,0,1,8.667,71a2.308,2.308,0,0,1-1.125-.3A4.655,4.655,0,1,0,12,67.333Zm11.855,4.058A13.364,13.364,0,0,0,12,64,13.366,13.366,0,0,0,.146,71.392a1.348,1.348,0,0,0,0,1.216A13.364,13.364,0,0,0,12,80a13.366,13.366,0,0,0,11.855-7.392,1.348,1.348,0,0,0,0-1.216ZM12,78a11.335,11.335,0,0,1-9.914-6A11.334,11.334,0,0,1,12,66a11.334,11.334,0,0,1,9.914,6A11.334,11.334,0,0,1,12,78Z" transform="translate(-0.001 -64)" fill={isVisible ? "#008000" : "#999" } opacity="0.6"/>
                    </svg>
                    
                    </div>
                  </div>
                  
                  <div className={styles["sign-in__sign-in-box__sign-in-form-box__forget-password"]}>
                  هل نسيت كلمة المرور؟
                  </div>

                  <Button className={styles["sign-in__sign-in-box__sign-in-form-box__make-new-acc-btn"]}>
                  تسجيل الدخول
                  </Button>

                  <div className={styles["sign-in__sign-in-box__sign-in-form-box__do-you-have-acc"]}>
                      <span> ليس لديك حساب؟ </span>
                      <span> انشاء حساب جديد </span>
                  </div>

              </Form>
          </div>
        </Col>
        <Col xs={{span:12 , order:1}} sm={{span:6 , order:2}} className={styles["sign-in__img"]}>
          <img src="/images/register.png" alt="sign-in now" />
        </Col>
      </Row>
    </>
  );
}
