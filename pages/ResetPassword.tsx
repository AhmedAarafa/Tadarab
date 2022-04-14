import React from "react";
// import Navbar from "common/Navbar/Navbar";
// import ChangePasswordPage from "modules/Auth/Change password page/ResetPasswordPage";
import { Container } from "react-bootstrap";

import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import("common/Navbar/Navbar"));
const ChangePasswordPage = dynamic(() => import("modules/Auth/Change password page/ResetPasswordPage"));
const Footer = dynamic(() => import("common/Footer/Footer"));


export default function ChangePassword() {
  return (
    <>
    <Container fluid="xxl">
      <Navbar />
      <ChangePasswordPage />
      <Footer />
    </Container> 
    </>
  );
}
