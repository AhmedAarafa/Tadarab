/* eslint-disable @next/next/next-script-for-ga */
import '../styles/globals.css'
import "swiper/css/bundle";
import type { AppProps } from 'next/app'
import 'normalize.css';
import { Provider, useDispatch } from 'react-redux';
import { store } from "configurations/redux/store";
import { axiosInstance } from "configurations/axios/axiosConfig";
import React, { useState, useEffect } from 'react';
import TransactionInProgress from "./TransactionInProgress";
// import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Head from "next/head";
import TagManager from 'react-gtm-module';
import Script from "next/script";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import dynamic from 'next/dynamic';
import Router, { useRouter } from "next/router";
const Navbar = dynamic(() => import("common/Navbar/Navbar"));
const Footer = dynamic(() => import("common/Footer/Footer"));
const NotificationBar = dynamic(() => import("common/Notification bar/NotificationBar"));

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-M2TKMK7' });
    localStorage.setItem("theme", "light");
    document.body.setAttribute("data-theme", "light");
    if(process.env.NEXT_PUBLIC_ENVIRONMENT==='production'){
      // console.log = function() {}
    }
  }, []);
  let canonical = "https://www.tadarab.com";
  const allowedCanonical=['/','/TadarabSubscription','/AllCourses'];
  const router = useRouter();
  let is_allow=allowedCanonical.includes((router.route));
  if(is_allow){canonical+=((router.asPath=="/AllCourses")?"/courses":((router.asPath)?"/subscription":router.asPath));}
  return (
    <>
      <Head>
        <title>دورات تدريبية اون لاين مجانيه عن بعد - منصه تدرب </title>
        { (is_allow)?<><link rel="canonical" href={canonical} /></>:<></> }

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Tadarab" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#AF151F" />
        <meta name="theme-color" content="#AF151F" />

        <meta name="description" content=" أنضم لآكبر منصة تعلم عن بعد في الخليج والوطن العربي أفضل دورات تدريبية معتمدة مقدمة من آكبر المدربين والخبراء على منصة تدرب" key="description" />
        <meta name="robots" content="index, follow"/>
        <meta property="og:locale" content="ar_AR" key="og-locale" />
        <meta property="og:type" content="website" key="og-type" />
        <meta property="og:title" content="دورات تدريبية اون لاين مجانيه عن بعد - منصه تدرب " key="og-title" />
        <meta property="og:description" content=" أنضم لآكبر منصة تعلم عن بعد في الخليج والوطن العربي أفضل دورات تدريبية معتمدة مقدمة من آكبر المدربين والخبراء على منصة تدرب" key="og-description" />
        <meta property="og:url" content="https://www.tadarab.com/" key="og-url" />
        <meta property="og:site_name" content="Tadarab" key="og-site_name" />
        
        <meta property="article:publisher" content="https://www.facebook.com/tadarabonline/" />

        <meta property="og:image" content="https://tadarab.s3.us-west-2.amazonaws.com/wp-content/uploads/20191116124120/Thumbnail-image-3.png" key="og-image"/>
        <meta property="og:image:secure_url" content="https://tadarab.s3.us-west-2.amazonaws.com/wp-content/uploads/20191116124120/Thumbnail-image-3.png" key="og-image-secure_url"/>
        <meta property="og:image:width" content="600"  key="og-image-width"/>
        <meta property="og:image:height" content="314" key="og-image-height"/>
        <meta property="og:image:alt" content="دورات تدريبية اون لاين مجانيه عن بعد - منصه تدرب " key="og-image-title" />
        <meta property="og:image:type" content="image/jpeg" key="og-image-type" />
        <meta name="twitter:card" content="summary_large_image" key="twitter-card"/>
        <meta name="twitter:title" content="دورات تدريبية اون لاين مجانيه عن بعد - منصه تدرب " key="twitter-title" />
        <meta name="twitter:description" content=" أنضم لآكبر منصة تعلم عن بعد في الخليج والوطن العربي أفضل دورات تدريبية معتمدة مقدمة من آكبر المدربين والخبراء على منصة تدرب" key="twitter-description" />
        <meta name="twitter:site" content="@tadarab_" key="twitter-site" />
        <meta name="twitter:creator" content="@tadarab_" key="twitter-creator" />
        <meta name="twitter:image" content="https://tadarab.s3.us-west-2.amazonaws.com/wp-content/uploads/20191116124120/Thumbnail-image-3.png" key="twitter-image" />
      </Head>
      {/* <body> */}

      {/*<!-- Google Tag Manager -->*/}
      <Script id="google-analytics-script" dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M2TKMK7');`
      }} />
      <noscript dangerouslySetInnerHTML={{__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M2TKMK7" height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
      {/*<!-- End Google Tag Manager -->*/}

      {/*<!-- Facebook Pixel Code -->*/}
      <Script async src='https://connect.facebook.net/en_US/fbevents.js' />
      <Script id="facebooke-pixel-script" dangerouslySetInnerHTML={{
        __html: `!function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');fbq('init','387170448377801');`
      }} />
      {/*<noscript dangerouslySetInnerHTML={{__html: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=387170448377801&ev=PageView&noscript=1"/>`}} />*/}
      {/*<!-- End Facebook Pixel Code -->*/}

      <Provider store={store}> 
      <NotificationBar />
      <Navbar />
      <Component {...pageProps} /> 
      <Footer />
      </Provider>
      {/* </body>  */}
    </>
  )
}

export default MyApp