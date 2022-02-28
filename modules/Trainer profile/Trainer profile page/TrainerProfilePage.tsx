import React,{useEffect,useState} from "react";
import styles from "./trainer-profile-page.module.css";
import TrainerInfo from "../Trainer info/TrainerInfo";
import { Row, Col, Button, Form } from "react-bootstrap";
import { axiosInstance } from "configurations/axios/axiosConfig";
import TrainerAccountsCard from "../Trainer accounts card/TrainerAccountsCard";
import TrainerCourses from "../Trainer courses/TrainerCourses";

export default function TrainerProfilePage() {


  return (
    <>
      <Row className={styles["trainer-profile"]}>
        <Col xs={12} className={styles["trainer-profile__trainer-info"]}>
          <div className={styles["trainer-profile__trainer-info-trainer-card-box"]}>

           <TrainerInfo />
           <TrainerAccountsCard />
          </div>
          
          <TrainerCourses />

        </Col>
      </Row>
    </>
  );
}
