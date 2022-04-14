import React from 'react';
import { Container } from "react-bootstrap";
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import("common/Navbar/Navbar"));
const InstructorTermsPage = dynamic(() => import("modules/Static pages/Instructor terms/InstructorTermsPage"));
const Footer = dynamic(() => import("common/Footer/Footer"));

export default function InstructorTerms() {
    return (
        <>
            <Container fluid="xxl">
                <Navbar />
                <InstructorTermsPage />
<<<<<<< HEAD
                <Footer />
=======
>>>>>>> d068eda8a38b4b4b63c789d604ebc4126470c7eb
            </Container>
        </>
    )
}
