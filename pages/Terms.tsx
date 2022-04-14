import React from 'react';
import { Container } from "react-bootstrap";
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import("common/Navbar/Navbar"));
const TermsPage = dynamic(() => import("modules/Static pages/Terms/TermsPage"));
const Footer = dynamic(() => import("common/Footer/Footer"));

export default function Terms() {
    return (
        <>
            <Container fluid="xxl">
                <Navbar />
                <TermsPage />
                <Footer />
            </Container>
        </>
    )
}
