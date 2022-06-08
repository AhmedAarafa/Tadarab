import React from 'react';
import { Container } from "react-bootstrap";
import dynamic from 'next/dynamic';

const MyAccountPage = dynamic(() => import("modules/My account page/MyAccountPage"));
const NotificationBar = dynamic(() => import("common/Notification bar/NotificationBar"));


export default function MyAccount() {
    return (
        <>
            <Container fluid="xxl">
                <MyAccountPage />
            </Container>
        </>
    )
}
