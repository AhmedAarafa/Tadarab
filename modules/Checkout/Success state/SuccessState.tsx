import React, { useState, useEffect } from 'react'
import { Row, Col, Button, Form, Card } from "react-bootstrap";
import styles from "./success-state.module.css";
import { TransactionSuccessIcon, ArrowLeftIcon } from "common/Icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import { setCartItems } from 'configurations/redux/actions/cartItems';

export default function SuccessState() {
 const dispatch = useDispatch();
    const invoiceDetails = useSelector((state:any) => state.invoiceDetails);
    const cartItems = useSelector((state:any) => state.cartItems);

    
    useEffect(() => {
      localStorage.setItem("cart" , "[]");
      dispatch(setCartItems([]));
    }, [])
    
    return (
        <>
        <Row className={styles["success-state-row"]}>
            <Col sm={6} xs={12} className={styles["success-state"]}>
                <div className={styles["success-state__img"]}>
                     <TransactionSuccessIcon/>
                </div>

            <div className={styles["success-state__purchasing-done"]}> 
            ممتاز! لقد تمت عملية الشراء بنجاح، نتمنى لك وقت ممتع ومفيد على تدرب.
             </div>
            <div className={styles["success-state__begin-learning"]}>
                 رضائك يهمنا نقدم لك ٣٠ يوم ضمان ذهبي على جميع الدورات لأن هدفنا هو إفادتك من كل دورة تمتلكها على تدرب.
                  </div>
            <Button className={styles["success-state__btn"]}>
                <span> اذهب لدوراتي </span>
                <ArrowLeftIcon color="#fff"/>
            </Button>

            </Col>
            <Col sm={6} xs={12}>
                <div className={styles["success-state-row__invoice-box"]}>
                    <div className={styles["success-state-row__invoice-box__title"]}>
                        تفاصيل عملية الدفع
                    </div>
                    <div className={styles["success-state-row__invoice-box__details-box"]}>

                            <div className={styles["success-state-row__invoice-box__details-box__details"]}>
                                <div> رقم العملية </div>
                                <div> {invoiceDetails?.data?.transaction_details.response_code} </div>
                            </div>
                            <div className={styles["success-state-row__invoice-box__details-box__details"]}>
                                <div> طريقة الدفع </div>
                                <div> {invoiceDetails?.data?.transaction_details.payment_method} </div>
                            </div>
                            <div className={styles["success-state-row__invoice-box__details-box__details"]}>
                                <div> حالة العملية </div>
                                <div> {invoiceDetails?.data?.transaction_details.status} </div>
                            </div>
                            <div className={styles["success-state-row__invoice-box__details-box__details"]}>
                                <div> رقم العملية </div>
                                <div> {invoiceDetails?.data?.transaction_details.transaction_id} </div>
                            </div>
                            <div className={styles["success-state-row__invoice-box__details-box__details"]}>
                                <div> Track ID </div>
                                <div> {invoiceDetails?.data?.transaction_details.payment_id} </div>
                            </div>
                            <div className={styles["success-state-row__invoice-box__details-box__details"]}>
                                <div> البريد الإلكتروني </div>
                                <div> {invoiceDetails?.data?.transaction_details.email ? invoiceDetails?.data?.transaction_details.email : ""} </div>
                            </div>
                            <div className={styles["success-state-row__invoice-box__details-box__details"]}>
                                <div> إجمالي المبلغ المدفوع </div>
                                <div> {invoiceDetails?.data?.transaction_details.amount} </div>
                            </div>
                            <div className={styles["success-state-row__invoice-box__details-box__details"]}>
                                <div> التاريخ </div>
                                <div> {invoiceDetails?.data?.transaction_details.date} </div>
                            </div>
                    
                    </div>
                </div>
            </Col>
        </Row>
            
        </>
    )
}
