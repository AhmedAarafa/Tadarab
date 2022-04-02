import React from 'react';
import Navbar from "common/Navbar/Navbar";
import { Container } from "react-bootstrap";
import CourseListing from "modules/Course listing/CourseListing";

export default function AllCourses() {
    return (
        <>
            <Container fluid="xxl">
                <Navbar />
                <CourseListing />
            </Container>
        </>
    )
}
