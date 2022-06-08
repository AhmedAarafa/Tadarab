import React from "react";
// import ForgetPasswordPage from "modules/Auth/Forget password page/ForgetPasswordPage";
import { Container } from "react-bootstrap";
import dynamic from 'next/dynamic';
const ForgetPasswordPage = dynamic(() => import("modules/Auth/Forget password page/ForgetPasswordPage"));

export default function ForgetPassword() {
  return (
    <>
    <Container fluid="xxl">
      <ForgetPasswordPage />
    </Container>    
    </>
  );
}
