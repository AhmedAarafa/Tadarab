import React from "react";
import Navbar from "common/Navbar/Navbar";
import SignupPage from "modules/Auth/SignUp page/SignupPage";
import { Container } from "react-bootstrap";

export default function SignUp() {
  return (
    <>
      <Container fluid="xxl">
        <Navbar />
        <SignupPage />
      </Container>
    </>
  );
}
