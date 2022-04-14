import React, { useEffect } from "react";
// import Navbar from "common/Navbar/Navbar";
// import CheckoutPage from "modules/Checkout/Checkout page/CheckoutPage";
import { Container } from "react-bootstrap";
import { GAProductimpressionEventHandler } from "modules/_Shared/utils/GAEvents";
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import("common/Navbar/Navbar"));
const CheckoutPage = dynamic(() => import("modules/Checkout/Checkout page/CheckoutPage"));
const Footer = dynamic(() => import("common/Footer/Footer"));

export default function Checkout() {

  useEffect(() => {
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
      <Navbar />
      <CheckoutPage />
      <Footer />
    </Container>    
    </>
  );
}
