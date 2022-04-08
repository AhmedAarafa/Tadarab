import React from "react";
// import Navbar from "common/Navbar/Navbar";
// import SignInPage from "modules/Auth/SignIn page/SignInPage";
import { Container } from "react-bootstrap";
import withAuth from "configurations/auth guard/AuthGuard";


import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import("common/Navbar/Navbar"));
const SignInPage = dynamic(() => import("modules/Auth/SignIn page/SignInPage"));


function SignIn() {
  return (
    <>
      <Container fluid="xxl">
        <Navbar />
        <SignInPage />
      </Container>
    </>
  );
}

export default withAuth(SignIn); 
