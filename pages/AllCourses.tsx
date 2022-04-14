import React from 'react';
// import Navbar from "common/Navbar/Navbar";
// import CourseListing from "modules/Course listing/CourseListing";
import { Container } from "react-bootstrap";
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import("common/Navbar/Navbar"));
const CourseListing = dynamic(() => import("modules/Course listing/CourseListing"));
const Footer = dynamic(() => import("common/Footer/Footer"));

export default function AllCourses() {
    return (
        <>
            <Container fluid="xxl">
                <Navbar />
                <CourseListing />
                <Footer />
            </Container>
        </>
    )
}
