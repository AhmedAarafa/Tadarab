import React from 'react';
import { Container } from "react-bootstrap";
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import("common/Navbar/Navbar"));
const InstructorTermsPage = dynamic(() => import("modules/Static pages/Instructor terms/InstructorTermsPage"));

export default function InstructorTerms() {
    return (
        <>
            <Container fluid="xxl">
                <Navbar />
                <InstructorTermsPage />
            </Container>
        </>
    )
}
