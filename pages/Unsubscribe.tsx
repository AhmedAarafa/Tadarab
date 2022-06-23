import React from 'react';
import { Container } from "react-bootstrap";
import dynamic from 'next/dynamic';

const UnsubscribePage = dynamic(() => import("modules/Unsubscribe/Unsubscribe page/UnsubscribePage"));

export default function Unsubscribe() {
    return (
        <Container fluid="xxl">
            <UnsubscribePage />
        </Container>
    )
}
