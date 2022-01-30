import React from "react";
import Navbar from "common/Navbar/Navbar";
import ChangePasswordPage from "modules/Auth/Change password page/ResetPasswordPage";
import { Container } from "react-bootstrap";

export default function ChangePassword() {
  return (
    <>
    <Container fluid="xxl">
      <Navbar />
      <ChangePasswordPage />
    </Container> 
    </>
  );
}
