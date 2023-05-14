import React, { useState, useEffect, memo } from 'react';
import styles from "styles/course-details.module.css";
import withAuth from 'configurations/auth guard/AuthGuard';
import { Row, Col, Container } from "react-bootstrap";
import { useSelector } from 'react-redux';
import CoursePromo from 'modules/Bundle course page/Course promo/CoursePromo';
import { toggleLoader } from "modules/_Shared/utils/toggleLoader";
import BundleIncludedCourses from 'modules/Bundle course page/Bundle included courses/BundleIncludedCourses';
import WhatYouWillLearn from 'modules/Bundle course page/What you will learn/WhatYouWillLearn';
import CourseDetailsSection from 'modules/Bundle course page/Course details section/CourseDetailsSection';
import TrainersSection from 'modules/Bundle course page/Trainers section/TrainersSection';
import CheckoutCard from 'modules/Bundle course page/Checkout card/CheckoutCard';
import useResize from 'custom hooks/useResize';

function BundleCoursePage() {
  const [isMobileView, setIsMobileView] = useState(false);
  const themeState = useSelector((state: any) => state.themeState.theme);

  useEffect(() => {
    toggleLoader("hide");
  }, []);

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
    <Container data-theme={themeState} fluid="xxl" style={{ backgroundColor: "var(--tadarab-light-bg)" }}>
      <Row className={styles["bundle-course-details-row"]}>
        <Col xs={12} sm={8}>
          <CoursePromo />
          <BundleIncludedCourses />
          {isMobileView && <CheckoutCard />}
          <WhatYouWillLearn />
          <CourseDetailsSection />
          <TrainersSection />
        </Col>
        {!isMobileView && <Col xs={12} sm={4}>
          <CheckoutCard />
        </Col>}
      </Row>
    </Container>
  )
}

export default withAuth(memo(BundleCoursePage)); 