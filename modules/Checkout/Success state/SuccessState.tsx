/* eslint-disable @next/next/link-passhref */
import React, { useState, useEffect } from 'react'
import { Row, Col, Button, Form, Card } from "react-bootstrap";
import styles from "./success-state.module.css";
import { TransactionSuccessIcon, ArrowLeftIcon } from "common/Icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import { setCartItems } from 'configurations/redux/actions/cartItems';
import TadarabFBPixel from "modules/_Shared/utils/fbPixel";
import TadarabGA from "modules/_Shared/utils/ga";
import { FBPixelEventsHandler } from "modules/_Shared/utils/FBPixelEvents";
import { setCheckoutType } from "configurations/redux/actions/checkoutType"; 
import Router, { useRouter }  from "next/router";
import Link from "next/link";
import { setTransactionStatus } from "configurations/redux/actions/transactionStatus";
import { setIsUserAuthenticated } from "configurations/redux/actions/userAuthentication";

export default function SuccessState() {

    const dispatch = useDispatch();
    const invoiceDetails = useSelector((state:any) => state.invoiceDetails);
    const cartItems = useSelector((state:any) => state.cartItems);
    var checkoutType = useSelector((state:any) => state.checkoutType);
    const userAuthState = useSelector((state: any) => state.userAuthentication);

    let tadarabGA = new TadarabGA();
    useEffect(() => {
        if(invoiceDetails){
            checkoutType = (invoiceDetails?.data?.transaction_details?.checkout_type);
            if(checkoutType == "cart"){
                tadarabGA.tadarab_fire_traking_GA_code("purchase", {
                    id: invoiceDetails?.data?.transaction_details?.invoice_no,
                    revenue: invoiceDetails?.data?.transaction_details?.amount_usd,
                    coupon:invoiceDetails?.data?.transaction_details?.coupon,
                    products: invoiceDetails?.data?.transaction_details?.transaction_items,
                    uid:invoiceDetails?.data?.ga_tracking?.uid,
                    cid:invoiceDetails?.data?.ga_tracking?.cid,
                    email:invoiceDetails?.data?.transaction_details?.email,
                });
            }else if(checkoutType=='subscription'){
                dispatch(setIsUserAuthenticated({
                    ...userAuthState,
                    isSubscribed:true
                  }));
                tadarabGA.tadarab_fire_traking_GA_code("subscription", {
                    trn_id: invoiceDetails?.data?.transaction_details?.payment_id,
                    user_id: invoiceDetails?.data?.transaction_details?.user_id,
                    revenue: invoiceDetails?.data?.transaction_details?.amount_usd,
                    date:invoiceDetails?.data?.transaction_details?.date_ymd,
                    cid:invoiceDetails?.data?.ga_tracking?.cid,
                    is_trial_free:invoiceDetails?.data?.transaction_details?.is_trial_free,
                    free_trial_label:invoiceDetails?.data?.transaction_details?.free_trial_label,
                    subscription_elabel:invoiceDetails?.data?.transaction_details?.subscription_elabel,
                    subscription_label:invoiceDetails?.data?.transaction_details?.subscription_label
                });
            }
        }
    }, [invoiceDetails])
    
    useEffect(() => {
        //   localStorage.setItem("cart" , "[]");
        dispatch(setCartItems(null));
        localStorage.setItem("cart",JSON.stringify([]));
        localStorage.setItem("cart_items",JSON.stringify([]));
        localStorage.removeItem("coupon_code");
        localStorage.removeItem("affiliate_id");
        localStorage.removeItem("cced");

        return () => {
            dispatch(setCheckoutType("cart"));
            dispatch(setTransactionStatus(null));
        }
    }, []);

    useEffect(() => {

        // if(Router.query && Router.query.checkout_type == "subscription"){
        //     dispatch(setCheckoutType("subscription"));
        //     // Router.replace("/checkout/payment/?checkout_type=subscription");
        // }
        // else if(JSON.stringify(Router.query) == "{}"){
        //     console.log("Router",Router.query);
        //     dispatch(setCheckoutType("cart"));
        //     // Router.replace("/checkout/payment");
        // }
    
      return () => {
        console.log("setCheckoutType dispatched");
        dispatch(setCheckoutType("cart"));
      }
    }, [Router.query])
    
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
            { checkoutType == "cart" && <div className={styles["success-state__begin-learning"]}>
                 رضائك يهمنا نقدم لك ٣٠ يوم ضمان ذهبي على جميع الدورات لأن هدفنا هو إفادتك من كل دورة تمتلكها على تدرب.
                  </div>}
                  {/* <Link href='/my-account'> */}
                    <Button onClick={()=>{Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}my-account`);}} className={styles["success-state__btn"]}>
                        <span> اذهب لدوراتي </span>
                        <ArrowLeftIcon color="#fff"/>
                    </Button>
                  {/* </Link> */}

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


                            { invoiceDetails?.data?.transaction_details?.knet_transaction_id && <div className={styles["success-state-row__invoice-box__details-box__details"]}>
                                <div> رقم عملية الشراء </div>
                                <div> {invoiceDetails?.data?.transaction_details.knet_transaction_id} </div>
                            </div>}


                            {  invoiceDetails?.data?.transaction_details?.bank_reference && <div className={styles["success-state-row__invoice-box__details-box__details"]}>
                                <div> الرقم المرجعي </div>
                                <div> {invoiceDetails?.data?.transaction_details.bank_reference} </div>
                            </div>}


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
