import React from "react";
import Navbar from "common/Navbar/Navbar";
import CheckoutPage from "modules/Checkout/Checkout page/CheckoutPage";
import { Container } from "react-bootstrap";

export default function Checkout() {
  return (
    <>
    <Container fluid="xxl">
      <Navbar />
      <CheckoutPage />
    </Container>    
    </>
  );
}
