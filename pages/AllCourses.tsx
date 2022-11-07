import React from 'react';
import { Container } from "react-bootstrap";
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';
import withAuth from 'configurations/auth guard/AuthGuard';

const CourseListing = dynamic(() => import("modules/Course listing/CourseListing"));
const NotificationBar = dynamic(() => import("common/Notification bar/NotificationBar"));



function AllCourses() {
  const themeState = useSelector((state: any) => state.themeState.theme);
    return (
        <>
            <Container data-theme={themeState} fluid="xxl" style={{ backgroundColor: "var(--tadarab-light-bg)" }}>
                <CourseListing />
            </Container>
        </>
    )
}

export default withAuth(AllCourses); 

