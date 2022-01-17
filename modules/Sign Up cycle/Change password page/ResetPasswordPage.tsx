/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { Row, Col, Button, Form } from "react-bootstrap";
import styles from "./reset-password-page.module.css"; 

export default function ChangePasswordPage() {
    const [isPwFieldVisible, setIsPwFieldVisible] = useState(false);
    const [isReEnterPwFieldVisible, setIsReEnterPwFieldVisible] = useState(false);

    const showHidePasswordHandler = (id:any) => {
        const passwordField: any = document.getElementById("password-field");
        const reEnterPasswordField: any = document.getElementById("re-enter-password-field");
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

                <div className={styles["reset-password__reset-password-box__password-field-container"]}>
                    <div className={styles["reset-password__reset-password-box__icon-wrapper"]}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="1.375rem" viewBox="0 0 20 22.857">
                        <path id="password" d="M17.857,10H16.786V6.786a6.786,6.786,0,1,0-13.571,0V10H2.143A2.143,2.143,0,0,0,0,12.143v8.571a2.143,2.143,0,0,0,2.143,2.143H17.857A2.143,2.143,0,0,0,20,20.714V12.143A2.143,2.143,0,0,0,17.857,10Zm-4.643,0H6.786V6.786a3.214,3.214,0,1,1,6.429,0Z" fill="#999"/>
                    </svg>
                    </div>
                    <Form.Control type="password" placeholder="كلمة المرور الجديده"  id="password-field" className={styles["reset-password__reset-password-box__password-field"]}/>
                   
                   <div className={styles["reset-password__reset-password-box__show-password-icon-wrapper"]}>
                     <svg  onClick={()=>showHidePasswordHandler("password-field")} xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1rem" viewBox="0 0 24 16">
                         <path id="eye-regular" d="M12,67.333a4.622,4.622,0,0,0-1.3.208,2.308,2.308,0,0,1,.3,1.125A2.333,2.333,0,0,1,8.667,71a2.308,2.308,0,0,1-1.125-.3A4.655,4.655,0,1,0,12,67.333Zm11.855,4.058A13.364,13.364,0,0,0,12,64,13.366,13.366,0,0,0,.146,71.392a1.348,1.348,0,0,0,0,1.216A13.364,13.364,0,0,0,12,80a13.366,13.366,0,0,0,11.855-7.392,1.348,1.348,0,0,0,0-1.216ZM12,78a11.335,11.335,0,0,1-9.914-6A11.334,11.334,0,0,1,12,66a11.334,11.334,0,0,1,9.914,6A11.334,11.334,0,0,1,12,78Z" transform="translate(-0.001 -64)" fill={isPwFieldVisible ? "#008000" : "#999"} opacity="0.6"/>
                    </svg>
                  
                    </div>
                  </div>
                <div className={styles["reset-password__reset-password-box__re-enter-password-field-container"]}>
                    <div className={styles["reset-password__reset-password-box__icon-wrapper"]}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="1.375rem" viewBox="0 0 20 22.857">
                        <path id="password" d="M17.857,10H16.786V6.786a6.786,6.786,0,1,0-13.571,0V10H2.143A2.143,2.143,0,0,0,0,12.143v8.571a2.143,2.143,0,0,0,2.143,2.143H17.857A2.143,2.143,0,0,0,20,20.714V12.143A2.143,2.143,0,0,0,17.857,10Zm-4.643,0H6.786V6.786a3.214,3.214,0,1,1,6.429,0Z" fill="#999"/>
                    </svg>
                    </div>
                    <Form.Control type="password" placeholder="تأكيد كلمة المرور"  id="re-enter-password-field" className={styles["reset-password__reset-password-box__password-field"]}/>
                   
                   <div className={styles["reset-password__reset-password-box__show-password-icon-wrapper"]}>
                     <svg  onClick={()=>showHidePasswordHandler("re-enter-password-field")} xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1rem" viewBox="0 0 24 16">
                         <path id="eye-regular" d="M12,67.333a4.622,4.622,0,0,0-1.3.208,2.308,2.308,0,0,1,.3,1.125A2.333,2.333,0,0,1,8.667,71a2.308,2.308,0,0,1-1.125-.3A4.655,4.655,0,1,0,12,67.333Zm11.855,4.058A13.364,13.364,0,0,0,12,64,13.366,13.366,0,0,0,.146,71.392a1.348,1.348,0,0,0,0,1.216A13.364,13.364,0,0,0,12,80a13.366,13.366,0,0,0,11.855-7.392,1.348,1.348,0,0,0,0-1.216ZM12,78a11.335,11.335,0,0,1-9.914-6A11.334,11.334,0,0,1,12,66a11.334,11.334,0,0,1,9.914,6A11.334,11.334,0,0,1,12,78Z" transform="translate(-0.001 -64)" fill={isReEnterPwFieldVisible ? "#008000" : "#999"} opacity="0.6"/>
                    </svg>
                  
                    </div>
                  </div>

                <Button className={styles["reset-password__reset-password-box__send-btn"]}>
                تغيير كلمة المرور
                </Button>
            </Col>
            <Col xs={{span:12 , order:1}} sm={{span:5 , order:2}} className={styles["reset-password__img"]}>
                <img src="/images/reset password.png" alt="reset password" />
            </Col>

        </Row>
            
        </> 
    )
}
