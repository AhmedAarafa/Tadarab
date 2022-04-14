import React from 'react';
import { Container } from "react-bootstrap";
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import("common/Navbar/Navbar"));
const CookiesTermsPage = dynamic(() => import("modules/Static pages/Cookies/CookiesPage"));
const Footer = dynamic(() => import("common/Footer/Footer"));

export default function InstructorTerms() {
    return (
        <>
            <Container fluid="xxl">
                <Navbar />
                <CookiesTermsPage />
                <Footer />
            </Container>
        </>
    )
}
