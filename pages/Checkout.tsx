import React, { useEffect } from "react";
// import CheckoutPage from "modules/Checkout/Checkout page/CheckoutPage";
import { Container } from "react-bootstrap";
import { GAProductimpressionEventHandler } from "modules/_Shared/utils/GAEvents";
import dynamic from 'next/dynamic';
import {subscriptionCounter} from "modules/_Shared/utils/subscriptionCounter";
import { useSelector } from "react-redux";
import withAuth from "configurations/auth guard/AuthGuard";

const CheckoutPage = dynamic(() => import("modules/Checkout/Checkout page/CheckoutPage"));

function Checkout() {
  const themeState = useSelector((state: any) => state.themeState.theme);

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
  }, []);

  return (
    <>
    <Container data-theme={themeState} fluid="xxl" style={{ backgroundColor: "var(--tadarab-light-bg)" }}>
      <CheckoutPage />
    </Container>    
    </>
  );
}

export default withAuth(Checkout); 

