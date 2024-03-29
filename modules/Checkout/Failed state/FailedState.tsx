/* eslint-disable @next/next/link-passhref */
import React, { useEffect, memo } from 'react'
import { Row, Col, Button } from "react-bootstrap";
import styles from "./failed-state.module.css";
import { TransactionErrorIcon, RetryIcon } from "common/Icons/Icons";
import Link from 'next/link';
import { useDispatch, useSelector } from "react-redux";
import TadarabGA from "modules/_Shared/utils/ga";
import Router, { useRouter } from "next/router";
import { setCheckoutType } from "configurations/redux/actions/checkoutType";
import { setTransactionStatus } from "configurations/redux/actions/transactionStatus";
import { toggleLoader } from 'modules/_Shared/utils/toggleLoader';

function FailedState() {
    const dispatch = useDispatch();

    const invoiceDetails = useSelector((state: any) => state.invoiceDetails);
    let tadarabGA = new TadarabGA();
    console.log("invoiceDetailsf",invoiceDetails);

    useEffect(() => {

        if (invoiceDetails) {
            tadarabGA.tadarab_fire_traking_GA_code("payment_fail", {
                type: invoiceDetails?.data?.data?.transaction_details.payment_method,
                reason: invoiceDetails?.data?.data?.transaction_details.status
            });
            toggleLoader('hide');
        }
    }, [invoiceDetails])


    useEffect(() => {

        return () => {
            dispatch(setTransactionStatus(null));
          console.log("setTransactionStatus dispatched");
        }
    }, [])



    return (
        <>
            <Row className={styles["failed-state-row"]}>
                <Col sm={6} xs={12} className={styles["failed-state"]}>
                    <div className={styles["failed-state__img"]}>

                        <TransactionErrorIcon />
                    </div>


                    <div className={styles["failed-state__purchasing-failed"]}> حدث خطأ اثناء عملية الدفع </div>
                    <div className={styles["failed-state__purchasing-failed-brief"]}> لقد حدث خطأ. حاول مرة أخرى لإكمال عملية الشراء </div>

                    <Button className={styles["failed-state__btn"]} onClick={() => {
                        if (Router.query && Router.query.checkout_type == "subscription"
                            && (Router.router?.asPath.includes('failed'))) {
                            dispatch(setCheckoutType("subscription"));
                            Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}checkout/payment/?checkout_type=subscription`);
                            location.reload();
                            console.log("pushed to checkout/payment/?checkout_type=subscription");
                        }
                        else if (JSON.stringify(Router.query) == "{}") {
                            dispatch(setCheckoutType("cart"));
                            Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}checkout`);
                            location.reload();
                            console.log("pushed to checkout ");

                        }
                    }}>
                        <RetryIcon />
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
                                <div> {invoiceDetails?.data?.data?.transaction_details?.response_code} </div>
                            </div>
                            <div className={styles["failed-state-row__invoice-box__details-box__details"]}>
                                <div> طريقة الدفع </div>
                                <div> {invoiceDetails?.data?.data?.transaction_details?.payment_method} </div>
                            </div>
                            <div className={styles["failed-state-row__invoice-box__details-box__details"]}>
                                <div> حالة العملية </div>
                                <div> {invoiceDetails?.data?.data?.transaction_details?.status} </div>
                            </div>
                            <div className={styles["failed-state-row__invoice-box__details-box__details"]}>
                                <div> رقم العملية </div>
                                <div> {invoiceDetails?.data?.data?.transaction_details?.transaction_id} </div>
                            </div>
                            <div className={styles["failed-state-row__invoice-box__details-box__details"]}>
                                <div> Track ID </div>
                                <div> {invoiceDetails?.data?.data?.transaction_details?.payment_id} </div>
                            </div>
                            <div className={styles["failed-state-row__invoice-box__details-box__details"]}>
                                <div> البريد الإلكتروني </div>
                                <div> {invoiceDetails?.data?.data?.transaction_details?.email ? invoiceDetails?.data?.data?.transaction_details?.email : ""} </div>
                            </div>
                            <div className={styles["failed-state-row__invoice-box__details-box__details"]}>
                                <div> اجمالي المبلغ المدفوع </div>
                                <div> {invoiceDetails?.data?.data?.transaction_details?.amount} </div>
                            </div>
                            <div className={styles["failed-state-row__invoice-box__details-box__details"]}>
                                <div> التاريخ </div>
                                <div> {invoiceDetails?.data?.data?.transaction_details?.date} </div>
                            </div>

                        </div>
                    </div>
                </Col>
            </Row>

        </>
    )
}

export default memo(FailedState);