import React from "react";
import Navbar from "common/Navbar/Navbar";
import ForgetPasswordPage from "modules/Auth/Forget password page/ForgetPasswordPage";
import { Container } from "react-bootstrap";

export default function ForgetPassword() {
  return (
    <>
    <Container fluid="xxl">
      <Navbar />
      <ForgetPasswordPage />
    </Container>    
    </>
  );
}
