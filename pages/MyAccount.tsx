import React from 'react';
import { Container } from "react-bootstrap";
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import("common/Navbar/Navbar"));
const MyAccountPage = dynamic(() => import("modules/My account page/MyAccountPage"));
const Footer = dynamic(() => import("common/Footer/Footer"));


export default function MyAccount() {
    return (
        <>
            <Container fluid="xxl">
                <Navbar />
                <MyAccountPage />
                <Footer />
            </Container>
        </>
    )
}
