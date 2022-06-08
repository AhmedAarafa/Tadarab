import React from 'react';
import { Container } from "react-bootstrap";
import dynamic from 'next/dynamic';

const CourseListing = dynamic(() => import("modules/Course listing/CourseListing"));
const NotificationBar = dynamic(() => import("common/Notification bar/NotificationBar"));



export default function AllCourses() {
    return (
        <>
            <Container fluid="xxl">
                <CourseListing />
            </Container>
        </>
    )
}
