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
  useEffect(() => {

    if(localStorage.getItem("countryCode")){
      
    }else{
      axiosInstance
      .get("https://ipapi.co/json/")
      .then(function (response:any) {
        if(response == undefined){
          localStorage.setItem("countryCode","kw");
        }else{
          localStorage.setItem("countryCode",response?.data.country.toLowerCase());
        }
      })
      .catch(function (error) {
        localStorage.setItem("countryCode","kw");
        console.log(error);
      });
    }
    
    // localStorage.setItem("theme", "dark");
  // document.documentElement.setAttribute("data-theme", "dark");
  document.body.setAttribute("data-theme", "light");

  }, []);
  return (
    <>
    
    <Head>
      <script async src='https://connect.facebook.net/en_US/fbevents.js'/>
        <script dangerouslySetInnerHTML={{ __html: `!function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window,document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '387170448377801');
        console.log("headdddddddddddddddd",fbq)` }}
       />
    <noscript dangerouslySetInnerHTML={{ __html: `<img height="1" width="1" 
            src="https://www.facebook.com/tr?id=387170448377801&ev=PageView
            &noscript=1"/>` }}
    />
      </Head>
    <PayPalScriptProvider options={{ "client-id": "AeLqJFQeNFqlkkFkdnwMPpKQb9gkBag-B-34Rym8Pndoi_5u0W305sZzses1NIcyZYENmZjpyKQYxKMu" }}>
      <Provider store={store}> <Component {...pageProps} /></Provider>
    </PayPalScriptProvider>
    </>
  )
}

export default MyApp
