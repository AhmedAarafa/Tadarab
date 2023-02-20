import React from "react";
import { Container } from "react-bootstrap";
import withAuth from "configurations/auth guard/AuthGuard";
import SignupPage from "modules/Auth/SignUp page/SignupPage";

function SignUp() {

  return (
    <>
      <Container fluid="xxl">
        <SignupPage />
      </Container>
    </>
  );
}

export default withAuth(SignUp);

