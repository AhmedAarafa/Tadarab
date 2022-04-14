import React from "react";
// import Navbar from "common/Navbar/Navbar";
// import ForgetPasswordPage from "modules/Auth/Forget password page/ForgetPasswordPage";
import { Container } from "react-bootstrap";
import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import("common/Navbar/Navbar"));
const ForgetPasswordPage = dynamic(() => import("modules/Auth/Forget password page/ForgetPasswordPage"));
const Footer = dynamic(() => import("common/Footer/Footer"));

export default function ForgetPassword() {
  return (
    <>
    <Container fluid="xxl">
      <Navbar />
      <ForgetPasswordPage />
      <Footer />
    </Container>    
    </>
  );
}
