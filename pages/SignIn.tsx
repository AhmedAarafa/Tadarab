import React from "react";
// import SignInPage from "modules/Auth/SignIn page/SignInPage";
import { Container } from "react-bootstrap";
import withAuth from "configurations/auth guard/AuthGuard";
import Router, { useRouter }  from "next/router";
import { useSelector } from "react-redux"; 
import dynamic from 'next/dynamic';
import { useEffect } from "react";
const SignInPage = dynamic(() => import("modules/Auth/SignIn page/SignInPage"));


function SignIn() {

  // const { isUserAuthenticated } = useSelector((state:any) => state.userAuthentication);

  // useEffect(() => {
  //   isUserAuthenticated && Router.push(`/my-account`);
  // },[isUserAuthenticated])
  
  return (
    <>
      <Container fluid="xxl">
        <SignInPage />
      </Container>
    </>
  );
}

export default withAuth(SignIn); 
