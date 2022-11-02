import React from 'react';
import { Container } from "react-bootstrap";
import dynamic from 'next/dynamic';
import { useSelector } from "react-redux";

const UnsubscribePage = dynamic(() => import("modules/Unsubscribe/Unsubscribe page/UnsubscribePage"));

export default function Unsubscribe() {
  const themeState = useSelector((state: any) => state.themeState.theme);

    return (
        <Container data-theme={themeState} fluid="xxl" style={{ backgroundColor: "var(--tadarab-light-bg)" }}>
            <UnsubscribePage />
        </Container>
    )
}
