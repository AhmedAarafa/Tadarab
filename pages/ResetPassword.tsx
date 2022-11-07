import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

import dynamic from 'next/dynamic';
import withAuth from "configurations/auth guard/AuthGuard";
const ChangePasswordPage = dynamic(() => import("modules/Auth/Change password page/ResetPasswordPage"));


function ChangePassword() {
  const themeState = useSelector((state: any) => state.themeState.theme);

  return (
    <>
    <Container data-theme={themeState} fluid="xxl" style={{ backgroundColor: "var(--tadarab-light-bg)" }}>
      <ChangePasswordPage />
    </Container> 
    </>
  );
}

export default withAuth(ChangePassword); 

