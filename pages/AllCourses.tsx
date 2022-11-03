import React from 'react';
import { Container } from "react-bootstrap";
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';

const CourseListing = dynamic(() => import("modules/Course listing/CourseListing"));
const NotificationBar = dynamic(() => import("common/Notification bar/NotificationBar"));



export default function AllCourses() {
  const themeState = useSelector((state: any) => state.themeState.theme);
    return (
        <>
            <Container data-theme={themeState} fluid="xxl" style={{ backgroundColor: "var(--tadarab-light-bg)" }}>
                <CourseListing />
            </Container>
        </>
    )
}
