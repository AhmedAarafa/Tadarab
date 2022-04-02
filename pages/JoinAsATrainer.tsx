import React from 'react';
import Navbar from "common/Navbar/Navbar";
import { Container } from "react-bootstrap";
import StartTraining from "modules/Join as a trainer/Start training/StartTraining";
import SuccessfulInvestment from "modules/Join as a trainer/Successful investment/SuccessfulInvestment";
import Statistics from "modules/Join as a trainer/Statistics/Statistics";
import TrainersOpinions from "modules/Join as a trainer/Trainers opinions/TrainersOpinions";
import JoinUs from 'modules/Join as a trainer/Join us/JoinUs';
import HowToStart from 'modules/Join as a trainer/How to start/HowToStart';
import Faq from 'modules/Join as a trainer/FAQ/Faq';

export default function JoinAsATrainer() {
  return (
    <>
      <Container fluid="xxl">
        <Navbar />
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
