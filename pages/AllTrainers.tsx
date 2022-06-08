import React from 'react';
import { Container } from "react-bootstrap";
import dynamic from 'next/dynamic';

const TrainersList = dynamic(() => import("modules/Trainers list/TrainersList"));

export default function AllTrainers() {
    return (
        <>
            <Container fluid="xxl">
                <TrainersList />
            </Container>

        </>
    )
}
