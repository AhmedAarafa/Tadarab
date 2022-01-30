import React from "react";
import Navbar from "common/Navbar/Navbar";
import TrainerProfilePage from "modules/Trainer profile/Trainer profile page/TrainerProfilePage";
import { Container } from "react-bootstrap";

export default function TrainerProfile() {
  return (
    <>
      <Container fluid="xxl">
        <Navbar />
        <TrainerProfilePage />
      </Container>
    </>
  );
}
