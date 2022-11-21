import React, { useEffect } from 'react';
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { toggleLoader } from "modules/_Shared/utils/toggleLoader";

import dynamic from 'next/dynamic';
import withAuth from 'configurations/auth guard/AuthGuard';
const StartTraining = dynamic(() => import("modules/Join as a trainer/Start training/StartTraining"));
const SuccessfulInvestment = dynamic(() => import("modules/Join as a trainer/Successful investment/SuccessfulInvestment"));
const Statistics = dynamic(() => import("common/Statistics/Statistics"));
const TrainersOpinions = dynamic(() => import("modules/Join as a trainer/Trainers opinions/TrainersOpinions"));
const JoinUs = dynamic(() => import('modules/Join as a trainer/Join us/JoinUs'));
const HowToStart = dynamic(() => import('modules/Join as a trainer/How to start/HowToStart'));
const Faq = dynamic(() => import('modules/Join as a trainer/FAQ/Faq'));


function JoinAsATrainer() {
  const themeState = useSelector((state: any) => state.themeState.theme);

  useEffect(() => {
    toggleLoader("hide");
  }, []);

  return (
    <>
      <Container data-theme={themeState} fluid="xxl" style={{ backgroundColor: "var(--tadarab-light-bg)" }}>
        <StartTraining />
        <SuccessfulInvestment />
        <Statistics />
        <TrainersOpinions />
        <JoinUs />
        <HowToStart />
        <Faq />

      </Container>
    </>
  )
}

export default withAuth(JoinAsATrainer);

