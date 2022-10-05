import React from 'react';
import { Container } from "react-bootstrap";
import { toggleLoader } from "modules/_Shared/utils/toggleLoader";
import dynamic from 'next/dynamic';
import Router, { useRouter } from "next/router";

const TadarabIntroduction = dynamic(() => import("modules/Tadarab season/Tadarab Introduction/TadarabIntroduction"));
const TadarabBenefits = dynamic(() => import("modules/Tadarab season/Tadarab benefits/TadarabBenefits"));
const TrainingSteps = dynamic(() => import("modules/Tadarab season/Training steps/TrainingSteps"));
const SeasonCourses = dynamic(() => import("modules/Tadarab season/Season courses/SeasonCourses"));
const LatestCourses = dynamic(() => import("modules/Tadarab season/Latest courses/LatestCourses"));
const SubscriptionBenefits = dynamic(() => import("modules/Tadarab season/Subscription benefits/SubscriptionBenefits"));
const Faq = dynamic(() => import("modules/Tadarab season/Faq/Faq"));
const SeasonTrainers = dynamic(() => import("modules/Tadarab season/Season trainers/SeasonTrainers"));
const StickySignupBar = dynamic(() => import("modules/Tadarab season/Sticky signup bar/StickySignupBar"));

export default function TadarabSeason() {
    return (
        <>
            <Container fluid="xxl">
                <TadarabIntroduction />
                <TadarabBenefits />
                <TrainingSteps />
                <SeasonCourses />
                <SeasonTrainers />
                <LatestCourses />
                <SubscriptionBenefits />
                <Faq />
                <StickySignupBar />
            </Container>
        </>
    )
}
