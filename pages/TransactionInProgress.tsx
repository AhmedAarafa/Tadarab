import React, { useEffect, useState } from 'react';
// import { BabelLoading,LoopCircleLoading } from "react-loadingg";
import { axiosInstance } from "configurations/axios/axiosConfig";
import Router, { useRouter } from 'next/router';
import { TailSpin } from  'react-loader-spinner';
import { useDispatch, useSelector } from "react-redux";
import { setTransactionStatus } from "configurations/redux/actions/transactionStatus";
import { setInvoiceDetails } from 'configurations/redux/actions/invoiceDetails';

export default function TransactionInProgress() {
  const router = useRouter();
 const dispatch = useDispatch();
  const [serverResponse, setServerResponse] = useState("الرجاء الإنتظار حتي تستكمل هذه العملية");
/* ${router.query["cko-session-id"]} */
  useEffect(() => {
    console.log('router.query : ',router.query);
    if(router.query["cko-session-id"] !== undefined){
      axiosInstance
      .get(`payments/details?checkout_session_id=${router.query["cko-session-id"]}&payment_method=visamaster`)
      .then(function (response:any) {
        console.log((response?.data?.data));
        dispatch(setInvoiceDetails(response?.data?.data));
        if(JSON.stringify(response.status).startsWith("2")){
          response?.data?.data?.is_successful == true ?
          dispatch(setTransactionStatus(true))
          :
          dispatch(setTransactionStatus(false));
          Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}Checkout`);
        }else{
          dispatch(setTransactionStatus(false));
          Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}Checkout`);
          setServerResponse("حدث خطأ الرجاء المحاولة مره أخري");
        }
      })
      .catch(function (error:any) {
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
     <div className="loader-text" >الرجاء الإنتظار حتي تستكمل هذه العملية</div>
    </div>
    </>
  )
}
