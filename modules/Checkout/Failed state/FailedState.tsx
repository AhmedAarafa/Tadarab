/* eslint-disable @next/next/link-passhref */
import React, { useEffect } from 'react'
import { Row, Col, Button } from "react-bootstrap";
import styles from "./failed-state.module.css";
import { TransactionErrorIcon,RetryIcon } from "common/Icons/Icons";
import Link from 'next/link';
import { useDispatch, useSelector } from "react-redux";
import TadarabGA from "modules/_Shared/utils/ga";

export default function FailedState() {
    const invoiceDetails = useSelector((state:any) => state.invoiceDetails);
    let tadarabGA = new TadarabGA();
    useEffect(() => {
        if(invoiceDetails){
            tadarabGA.tadarab_fire_traking_GA_code("payment_fail",
            {type:invoiceDetails?.data?.transaction_details.payment_method,
                reason:invoiceDetails?.data?.transaction_details.status});
        }
    }, [invoiceDetails])
    

    return (
        <>
         <Row className={styles["failed-state-row"]}>
            <Col sm={6} xs={12} className={styles["failed-state"]}>
                <div className={styles["failed-state__img"]}>

                <TransactionErrorIcon/>
                </div>


            <div className={styles["failed-state__purchasing-failed"]}> حدث خطأ اثناء عملية الدفع </div>
            <div className={styles["failed-state__purchasing-failed-brief"]}> لقد حدث خطأ. حاول مرة أخرى لإكمال عملية الشراء </div>

            <Button className={styles["failed-state__btn"]} onClick={()=>{
                location.reload();
                }}>
                <RetryIcon/>
                <span> حاول الدفع مرة آخرى </span>

            </Button>

        <Link href="/">
            <div className={styles["failed-state__back-to-main-page"]} > اذهب للصفحة الرئيسية </div>
        </Link>
            

            </Col>
            <Col sm={6} xs={12}>
                <div className={styles["failed-state-row__invoice-box"]}>
                    <div className={styles["failed-state-row__invoice-box__title"]}>
                    تفاصيل عملية الدفع
                    </div>
                    <div className={styles["failed-state-row__invoice-box__details-box"]}>

                    <div className={styles["failed-state-row__invoice-box__details-box__details"]}>
                                <div> رقم العملية </div>
                                <div> {invoiceDetails?.data?.transaction_details.response_code} </div>
                            </div>
                            <div className={styles["failed-state-row__invoice-box__details-box__details"]}>
                                <div> طريقة الدفع </div>
                                <div> {invoiceDetails?.data?.transaction_details.payment_method} </div>
                            </div>
                            <div className={styles["failed-state-row__invoice-box__details-box__details"]}>
                                <div> حالة العملية </div>
                                <div> {invoiceDetails?.data?.transaction_details.status} </div>
                            </div>
                            <div className={styles["failed-state-row__invoice-box__details-box__details"]}>
                                <div> رقم العملية </div>
                                <div> {invoiceDetails?.data?.transaction_details.transaction_id} </div>
                            </div>
                            <div className={styles["failed-state-row__invoice-box__details-box__details"]}>
                                <div> Track ID </div>
                                <div> {invoiceDetails?.data?.transaction_details.payment_id} </div>
                            </div>
                            <div className={styles["failed-state-row__invoice-box__details-box__details"]}>
                                <div> البريد الإلكتروني </div>
                                <div> {invoiceDetails?.data?.transaction_details.email ? invoiceDetails?.data?.transaction_details.email : ""} </div>
                            </div>
                            <div className={styles["failed-state-row__invoice-box__details-box__details"]}>
                                <div> اجمالي المبلغ المدفوع </div>
                                <div> {invoiceDetails?.data?.transaction_details.amount} </div>
                            </div>
                            <div className={styles["failed-state-row__invoice-box__details-box__details"]}>
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
