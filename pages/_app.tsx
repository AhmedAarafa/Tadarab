/* eslint-disable @next/next/next-script-for-ga */
import '../styles/globals.css'
import "swiper/css/bundle";
import type { AppProps } from 'next/app'
import 'normalize.css';
import { Provider, useDispatch } from 'react-redux';
import { store } from "configurations/redux/store";
import { axiosInstance } from "configurations/axios/axiosConfig";
import React, { useState, useEffect } from 'react'
import TransactionInProgress from "./TransactionInProgress";
// import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Head from "next/head";
import TagManager from 'react-gtm-module';
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {

  
  useEffect(() => {

    if (localStorage.getItem("countryCode")) {

    } else {
      axiosInstance
        .get("https://ipapi.co/json/")
        .then(function (response: any) {
          if (response == undefined) {
            localStorage.setItem("countryCode", "kw");
          } else {
            localStorage.setItem("countryCode", response?.data.country.toLowerCase());
          }
        })
        .catch(function (error) {
          localStorage.setItem("countryCode", "kw");
          console.log(error);
        });
    }

    TagManager.initialize({ gtmId: 'GTM-WVQP3JV' });

    localStorage.setItem("theme", "light");
    document.body.setAttribute("data-theme", "light");

  }, []);

  // const tagManagerArgs = {
  //   gtmId: 'GTM-M2TKMK7'
  // }
  // TagManager.initialize(tagManagerArgs)

  return (
    <>

      <Head>
       
       {/* <script dangerouslySetInnerHTML={{__html: `<!-- Google Tag Manager -->(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-M2TKMK7');<!-- End Google Tag Manager -->`}}/> */}
        {/* <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WVQP3JV');` }} /> */}
        {/* <noscript dangerouslySetInnerHTML={{ __html: `<img height="1" width="1" 
            src="https://www.facebook.com/tr?id=387170448377801&ev=PageView
            &noscript=1"/>` }}
          /> */}
      </Head>
       <body>
          <Script id="google-analytics-script" dangerouslySetInnerHTML={{__html:`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WVQP3JV');`}}/>
    
    
            <Script async src='https://connect.facebook.net/en_US/fbevents.js' />
            <Script id="facebooke-pixel-script" dangerouslySetInnerHTML={{
              __html: `!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '387170448377801');` }}
            />
      <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXX"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript> 

      <Provider store={store}> <Component {...pageProps} /></Provider>
       </body> 
     
    </>
  )
}

export default MyApp
