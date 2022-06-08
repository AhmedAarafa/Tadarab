import React from "react";
import { Container } from "react-bootstrap";

import dynamic from 'next/dynamic';
const ChangePasswordPage = dynamic(() => import("modules/Auth/Change password page/ResetPasswordPage"));


export default function ChangePassword() {
  return (
    <>
    <Container fluid="xxl">
      <ChangePasswordPage />
    </Container> 
    </>
  );
}
