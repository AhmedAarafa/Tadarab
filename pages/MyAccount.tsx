import React from 'react';
import { Container } from "react-bootstrap";
import dynamic from 'next/dynamic';
import { useSelector } from "react-redux";

const MyAccountPage = dynamic(() => import("modules/My account page/MyAccountPage"));
const NotificationBar = dynamic(() => import("common/Notification bar/NotificationBar"));

export default function MyAccount() {
  const themeState = useSelector((state: any) => state.themeState.theme);

    return (
        <>
            <Container data-theme={themeState} fluid="xxl" style={{ backgroundColor: "var(--tadarab-light-bg)" }}>
                <MyAccountPage />
            </Container>
        </>
    )
}