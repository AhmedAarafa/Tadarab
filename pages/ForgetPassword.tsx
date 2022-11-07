import React from "react";
// import ForgetPasswordPage from "modules/Auth/Forget password page/ForgetPasswordPage";
import { Container } from "react-bootstrap";
import dynamic from 'next/dynamic';
import { useSelector } from "react-redux";
import withAuth from "configurations/auth guard/AuthGuard";

const ForgetPasswordPage = dynamic(() => import("modules/Auth/Forget password page/ForgetPasswordPage"));

function ForgetPassword() {
  const themeState = useSelector((state: any) => state.themeState.theme);

  return (
    <>
      <Container data-theme={themeState} fluid="xxl" style={{ backgroundColor: "var(--tadarab-light-bg)" }}>
        <ForgetPasswordPage />
      </Container>
    </>
  );
}

export default withAuth(ForgetPassword); 

