import React, { useState, memo } from "react";
import styles from "./trainer-profile-page.module.css";
import TrainerInfo from "../Trainer info/TrainerInfo";
import { Row, Col } from "react-bootstrap";
import TrainerAccountsCard from "../Trainer accounts card/TrainerAccountsCard";
import TrainerCourses from "../Trainer courses/TrainerCourses";
import useResize from "custom hooks/useResize";

function TrainerProfilePage() {
  const [isMobileView, setIsMobileView] = useState(false);
  useResize((
    () => {
      if (window.innerWidth < 576) {
        setIsMobileView(true);
      } else {
        setIsMobileView(false);
      }
    }
  ));

  return (
    <>
      <Row className={styles["trainer-profile"]}>
        <Col xs={{ span: 12, order: 1 }} sm={{ span: 8, order: 1 }}>
          <TrainerInfo />
          { isMobileView &&  <Col xs={{ span: 12, order: 2 }}>
          <TrainerAccountsCard />
        </Col>}
          <Row>
            <Col xs={{ span: 12 }} className={styles["trainer-profile__trainer-info"]}>
              <TrainerCourses />
            </Col>
          </Row>
        </Col>
        { !isMobileView &&  <Col sm={{ span: 4, order: 2 }}>
          <TrainerAccountsCard />
        </Col>}
      </Row>
    </>
  );
}

export default memo(TrainerProfilePage);
