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
    <PayPalScriptProvider options={{ "client-id": "AeLqJFQeNFqlkkFkdnwMPpKQb9gkBag-B-34Rym8Pndoi_5u0W305sZzses1NIcyZYENmZjpyKQYxKMu" }}>
      <Provider store={store}> <Component {...pageProps} /></Provider>
    </PayPalScriptProvider>
  )
}

export default MyApp
