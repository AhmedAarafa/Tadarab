import React from 'react';
import { Container } from "react-bootstrap";
import dynamic from 'next/dynamic';

const SubscriptionPlansPage = dynamic(() => import("modules/Checkout/Subscription plans/SubscriptionPlansPage"));

export default function SubscriptionPlans() {
    return (
        <Container fluid="xxl">
            <SubscriptionPlansPage />
        </Container>
    )
}
