import React from "react";
import { Container } from "react-bootstrap";
import Router, { useRouter }  from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux"; 
import dynamic from 'next/dynamic';
import withAuth from "configurations/auth guard/AuthGuard";


const SignupPage = dynamic(() => import("modules/Auth/SignUp page/SignupPage"));

function SignUp() {

  // const { isUserAuthenticated } = useSelector((state:any) => state.userAuthentication);

  // useEffect(() => {
  //   isUserAuthenticated && Router.push(`/my-account`);
  // },[isUserAuthenticated])

  return (
    <>
      <Container fluid="xxl">
        <SignupPage />
      </Container>
    </>
  );
}

export default withAuth(SignUp);

