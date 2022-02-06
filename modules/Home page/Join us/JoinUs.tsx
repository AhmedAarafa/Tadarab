import React from "react";
import styles from "./join-us.module.css";
import { Row, Col, Button, Form } from "react-bootstrap";

export default function JoinUs() {
  return (
    <>
      <Row className={styles["join-us-row"]}>
        <Col xs={12} className={styles["join-us"]}>
          <div className={styles["join-us__title"]}>
          انضم لتصلك أحدث الدورات التدريبية والعروض
          </div>
          <div className="d-flex justify-content-center">

          <div className={styles["join-us__subscribe-bar-box"]}>
            <Form.Control
              type="text"
              placeholder="ادخل البريد الإلكتروني..."
              className={styles["join-us__subscribe-bar-box__email-field"]}
            />
            <Button className={styles["join-us__subscribe-bar-box__btn"]}>
            إشترك
            </Button>
          </div>
          </div>
        </Col>
      </Row>
    </>
  );
}
