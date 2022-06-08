import React, { useEffect } from "react";
// import CheckoutPage from "modules/Checkout/Checkout page/CheckoutPage";
import { Container } from "react-bootstrap";
import { GAProductimpressionEventHandler } from "modules/_Shared/utils/GAEvents";
import dynamic from 'next/dynamic';
import {subscriptionCounter} from "modules/_Shared/utils/subscriptionCounter";

const CheckoutPage = dynamic(() => import("modules/Checkout/Checkout page/CheckoutPage"));

export default function Checkout() {

  useEffect(() => {
    subscriptionCounter();
    window.addEventListener("scroll" , ()=>{
      GAProductimpressionEventHandler("checkout-related-courses__courses-card");
    })
    
    return () => {
      window.removeEventListener("scroll", ()=>{
        return;
      })
    }
  }, [])

  return (
    <>
    <Container fluid="xxl">
      <CheckoutPage />
    </Container>    
    </>
  );
}
