import React from "react";
import { Container } from "react-bootstrap";
import withAuth from "configurations/auth guard/AuthGuard";
import SignInPage from "modules/Auth/SignIn page/SignInPage";

function SignIn() {
  return (
    <>
      <Container fluid="xxl">
        <SignInPage />
      </Container>
    </>
  );
}

export default withAuth(SignIn); 
