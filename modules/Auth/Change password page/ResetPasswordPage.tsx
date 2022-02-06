/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { Row, Col, Button, Form } from "react-bootstrap";
import styles from "./reset-password-page.module.css"; 
import { LockIcon , EyeIcon} from "common/Icons/Icons";

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
                    <LockIcon/>
                    </div>
                    <Form.Control type="password" placeholder="كلمة المرور الجديده"  id="password-field" className={styles["reset-password__reset-password-box__password-field"]}/>
                   
                   <div className={styles["reset-password__reset-password-box__show-password-icon-wrapper"]}>

                     <div onClick={()=>showHidePasswordHandler("password-field")}>

                     <EyeIcon color={isPwFieldVisible ? "#008000" : "#999"}/>
                     </div>
                  
                    </div>
                  </div>
                <div className={styles["reset-password__reset-password-box__re-enter-password-field-container"]}>
                    <div className={styles["reset-password__reset-password-box__icon-wrapper"]}>
                    <LockIcon/>
                    </div>
                    <Form.Control type="password" placeholder="تأكيد كلمة المرور"  id="re-enter-password-field" className={styles["reset-password__reset-password-box__password-field"]}/>
                   
                   <div className={styles["reset-password__reset-password-box__show-password-icon-wrapper"]}>
                    <div onClick={()=>showHidePasswordHandler("re-enter-password-field")}>

                     <EyeIcon color={isReEnterPwFieldVisible ? "#008000" : "#999"}/>
                     </div>
                  
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
