import '../styles/globals.css'
import "swiper/css/bundle";
import type { AppProps } from 'next/app'
import 'normalize.css';
import { Provider, useDispatch } from 'react-redux';
import { store } from "configurations/redux/store";
import { axiosInstance } from "configurations/axios/axiosConfig";
import React, { useState, useEffect } from 'react'
import TransactionInProgress from "./TransactionInProgress";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Head from "next/head";
function MyApp({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   axiosInstance
  //   .get("https://geolocation-db.com/json/",{
  //     headers:{
  //       'Access-Control-Allow-Origin': '*',
  //       "Access-Control-Allow-Credentials": "true",
  //       "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
  //       "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  //     }
  //   })
  //   .then(function (response:any) {
  //     // localStorage.setItem("countryCode",response?.data.ip.country_code.toLowerCase())
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });

  // }, []);
  return (
    <>
    
    <Head>
        <script dangerouslySetInnerHTML={{ __html: `!function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '387170448377801');` }}
    />
    <script async src='https://connect.facebook.net/en_US/fbevents.js'/>
    <noscript dangerouslySetInnerHTML={{ __html: `<img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=387170448377801&ev=PageView&noscript=1" />` }}
    />
      </Head>
    <PayPalScriptProvider options={{ "client-id": "AeLqJFQeNFqlkkFkdnwMPpKQb9gkBag-B-34Rym8Pndoi_5u0W305sZzses1NIcyZYENmZjpyKQYxKMu" }}>
      <Provider store={store}> <Component {...pageProps} /></Provider>
    </PayPalScriptProvider>
    </>
  )
}

export default MyApp
