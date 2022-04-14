import React from 'react';
import { Container } from "react-bootstrap";
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import("common/Navbar/Navbar"));
const PrivacyPage = dynamic(() => import("modules/Static pages/Privacy/PrivacyPage"));
const Footer = dynamic(() => import("common/Footer/Footer"));

export default function Privacy() {
    return (
        <>
            <Container fluid="xxl">
                <Navbar />
                <PrivacyPage />
                <Footer />
            </Container>
        </>
    )
}
