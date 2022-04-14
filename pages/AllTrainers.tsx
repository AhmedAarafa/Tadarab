import React from 'react';
import { Container } from "react-bootstrap";
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import("common/Navbar/Navbar"));
const TrainersList = dynamic(() => import("modules/Trainers list/TrainersList"));
const Footer = dynamic(() => import("common/Footer/Footer"));

export default function AllTrainers() {
    return (
        <>
            <Container fluid="xxl">
                <Navbar />
                <TrainersList />
                <Footer />
            </Container>

        </>
    )
}
