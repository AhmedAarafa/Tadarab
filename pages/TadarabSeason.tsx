import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import { toggleLoader } from "modules/_Shared/utils/toggleLoader";
import dynamic from 'next/dynamic';
import Router, { useRouter } from "next/router";
import Testimonials from "modules/Tadarab season/Testimonials/Testimonials";
import Faq from "common/Subscription faqs/FAQ/Faq";
import withAuth from 'configurations/auth guard/AuthGuard';

const TadarabIntroduction = dynamic(() => import("modules/Tadarab season/Tadarab Introduction/TadarabIntroduction"));
const TadarabBenefits = dynamic(() => import("modules/Tadarab season/Tadarab benefits/TadarabBenefits"));
const TrainingSteps = dynamic(() => import("modules/Tadarab season/Training steps/TrainingSteps"));
const SeasonCourses = dynamic(() => import("modules/Tadarab season/Season courses/SeasonCourses"));
const LatestCourses = dynamic(() => import("modules/Tadarab season/Latest courses/LatestCourses"));
const SubscriptionBenefits = dynamic(() => import("modules/Tadarab season/Subscription benefits/SubscriptionBenefits"));
const SeasonTrainers = dynamic(() => import("modules/Tadarab season/Season trainers/SeasonTrainers"));
const StickySignupBar = dynamic(() => import("modules/Tadarab season/Sticky signup bar/StickySignupBar"));

function TadarabSeason() {
    const [currency, setCurrency] = useState<any>({});

    const handleCurrency = (CS:any) => {
        setCurrency(CS);
    }

    return (
        <>
            <Container fluid="xxl">
                <TadarabIntroduction currency={currency}/>
                <TadarabBenefits />
                <TrainingSteps />
                <SeasonCourses />
                <SeasonTrainers />
                <Testimonials />
                <LatestCourses handleCurrency={handleCurrency} />
                <SubscriptionBenefits />
                <Faq />
                <StickySignupBar />
            </Container>
        </>
    )
}

export default withAuth(TadarabSeason);

