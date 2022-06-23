import React, { useEffect, useState } from 'react';
// import { BabelLoading,LoopCircleLoading } from "react-loadingg";
import { axiosInstance } from "configurations/axios/axiosConfig";
import Router, { useRouter } from 'next/router';
import { useDispatch, useSelector } from "react-redux";
import { setTransactionStatus } from "configurations/redux/actions/transactionStatus";
import { setInvoiceDetails } from 'configurations/redux/actions/invoiceDetails';
import TadarabFBPixel from "modules/_Shared/utils/fbPixel";
import { FBPixelEventsHandler } from 'modules/_Shared/utils/FBPixelEvents';


export default function TransactionInProgress() {
  const router = useRouter();
 const dispatch = useDispatch();
  const [serverResponse, setServerResponse] = useState("الرجاء الإنتظار حتي تستكمل هذه العملية");
/* ${router.query["cko-session-id"]} */
  useEffect(() => {
    if(router.query["cko-session-id"] !== undefined){
      
      axiosInstance
      .get(`payments/details?payment_method=visamaster&checkout_session_id=${router.query["cko-session-id"]}&checkout_type=${router.query["checkout_type"]}`)
      .then(function (response:any) {
        dispatch(setInvoiceDetails(response?.data?.data));
        if(JSON.stringify(response.status).startsWith("2")){

          let is_trial_free = ((response.data?.data?.transaction_details?.is_trial_free&&response.data?.data?.transaction_details?.is_trial_free==true)?true:false);
          let customData = {};
          if((response.data?.transaction_details?.checkout_type)&&response.data?.transaction_details?.checkout_type!='subscription'){
            customData = {value: response.data?.transaction_details.amount_usd, currency: 'USD',content_type: 'online_course_purchase'};
          }else{
            if(!is_trial_free){
              customData = {value: response.data?.data?.transaction_details.amount_usd, currency: 'USD',content_type: 'online_subscription_purchase', predicted_ltv:270};
            }
          }
          
          FBPixelEventsHandler(response.data.fb_tracking_events,customData);

          response?.data?.data?.is_successful == true ?
          dispatch(setTransactionStatus(true))
          :
          dispatch(setTransactionStatus(false));
          Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}checkout`);
        }else{
          dispatch(setTransactionStatus(false));
          Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}checkout`);
          setServerResponse("حدث خطأ الرجاء المحاولة مره أخري");
        }
      })
      .catch(function (error) {
        console.log(error); 
      });
    }else if(router.query["payment_method"] !== undefined){

      axiosInstance
      .get(`payments/details?payment_method=${router.query["payment_method"]}&payment_id=${router.query["payment_id"]}&checkout_type=${router.query["checkout_type"]}`)
      .then(function (response:any) {
        dispatch(setInvoiceDetails(response?.data?.data));
        if(JSON.stringify(response.status).startsWith("2")){
          
          let is_trial_free = ((response.data?.data?.transaction_details?.is_trial_free&&response.data?.data?.transaction_details?.is_trial_free==true)?true:false);
          let customData = {};
          if((response.data?.data?.transaction_details?.checkout_type)&&response.data?.data?.transaction_details?.checkout_type!='subscription'){
            customData = {value: response.data?.data?.transaction_details.amount_usd, currency: 'USD',content_type: 'online_course_purchase'};
          }else{
            if(!is_trial_free){
              customData = {value: response.data?.data?.transaction_details.amount_usd, currency: 'USD',content_type: 'online_subscription_purchase', predicted_ltv:270};
            }
          }
          FBPixelEventsHandler(response.data.fb_tracking_events,customData);
          
          response?.data?.data?.is_successful == true ?
          dispatch(setTransactionStatus(true))
          :
          dispatch(setTransactionStatus(false));
          Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}checkout`);
        }else{
          dispatch(setTransactionStatus(false));
          Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}checkout`);
          setServerResponse("حدث خطأ الرجاء المحاولة مره أخري");
        }
      })
      .catch(function (error) {
        console.log(error); 
      });
    }
  
    return () => {
      
    }
  }, [router.query]);
  
  return (
    <>
    <div style={{width:"100vw" , height:"100vh"}} className="d-flex align-items-center justify-content-center position-relative">

     { serverResponse !== "حدث خطأ الرجاء المحاولة مره أخري" && <div className="loader"></div>}
     <div className="loader-text" >الرجاء الإنتظار حتى تستكمل هذه العملية</div>
    </div>
    </>
  )
}