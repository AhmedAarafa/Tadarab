import React from 'react';
import { Container } from "react-bootstrap";
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';

const TrainersList = dynamic(() => import("modules/Trainers list/TrainersList"));

export default function AllTrainers() {
  const themeState = useSelector((state: any) => state.themeState.theme);

    return (
        <>
            <Container data-theme={themeState} fluid="xxl" style={{ backgroundColor: "var(--tadarab-light-bg)" }}>
                <TrainersList />
            </Container>

        </>
    )
}
