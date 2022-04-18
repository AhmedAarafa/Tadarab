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
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

function MyApp({ Component, pageProps }: AppProps) {

  
  useEffect(() => {

    // if (localStorage.getItem("countryCode")) {

    // } else {
    //   axiosInstance
    //     .get("https://ipapi.co/json/")
    //     .then(function (response: any) {
    //       if (response == undefined) {
    //         localStorage.setItem("countryCode", "kw");
    //       } else {
    //         localStorage.setItem("countryCode", response?.data.country.toLowerCase());
    //       }
    //     })
    //     .catch(function (error) {
    //       localStorage.setItem("countryCode", "kw");
    //       console.log(error);
    //     });
    // }

    TagManager.initialize({ gtmId: 'GTM-WVQP3JV' });

    localStorage.setItem("theme", "light");
    document.body.setAttribute("data-theme", "light");
    if(process.env.NEXT_PUBLIC_ENVIRONMENT==='sandbox'){
      // console.log = function() {}
    }

  }, []);

  // const tagManagerArgs = {
  //   gtmId: 'GTM-M2TKMK7'
  // }
  // TagManager.initialize(tagManagerArgs)

  return (
    <>

      <Head>
        <title> كورسات دورات اون لاين عن بعد مجانية و معتمدة | تدرب</title>
        <meta name="description" content="نقدم لك عبر موقع تدرب افضل الدورات المعتمدة عن بعد مع خبراء مختصين في مختلف المجالات. سجل في الدورات التدريبية المجانية لدينا اون لاين لتطوير مهاراتك مع شهادات معتمدة."/>
        <meta property="og:locale" content="ar_AR" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="كورسات دورات اون لاين عن بعد مجانية و معتمدة | تدرب" />
        <meta property="og:description" content="نقدم لك عبر موقع تدرب افضل الدورات المعتمدة عن بعد مع خبراء مختصين في مختلف المجالات. سجل في الدورات التدريبية المجانية لدينا اون لاين لتطوير مهاراتك مع شهادات معتمدة." />
        <meta property="og:site_name" content="Tadarab" />
        <meta property="og:image" content="https://tadarab.s3.us-west-2.amazonaws.com/wp-content/uploads/20191116124120/Thumbnail-image-3.png" />
        <meta property="og:image:secure_url" content="https://tadarab.s3.us-west-2.amazonaws.com/wp-content/uploads/20191116124120/Thumbnail-image-3.png" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="314" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:description" content="نقدم لك عبر موقع تدرب افضل الدورات المعتمدة عن بعد مع خبراء مختصين في مختلف المجالات. سجل في الدورات التدريبية المجانية لدينا اون لاين لتطوير مهاراتك مع شهادات معتمدة." />
        <meta name="twitter:title" content="كورسات دورات اون لاين عن بعد مجانية و معتمدة | تدرب" />
        <meta name="twitter:site" content="@tadarab_" />
        <meta name="twitter:image" content="https://tadarab.s3.us-west-2.amazonaws.com/wp-content/uploads/20191116124120/Thumbnail-image-3.png" />
        <meta name="twitter:creator" content="@tadarab_" />
      </Head>
       {/* <body> */}
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
       {/* </body>  */}
     
    </>
  )
}

export default MyApp
