import React from "react";
// import Navbar from "common/Navbar/Navbar";
// import SignupPage from "modules/Auth/SignUp page/SignupPage";
import { Container } from "react-bootstrap";

import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import("common/Navbar/Navbar"));
const SignupPage = dynamic(() => import("modules/Auth/SignUp page/SignupPage"));


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
