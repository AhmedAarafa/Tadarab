import React, { useEffect, useState } from "react";
import styles from "styles/course-details.module.css";
import Navbar from "common/components/Navbar/Navbar";
import CourseCard from "modules/Course details/Course card/CourseCard";
import CourseAdvertisement from "modules/Course details/Course Advertisement/CourseAdvertisement";
import WhatYouWillLearn from "modules/Course details/What you will learn/WhatYouWillLearn";
import CourseDetailsSection from "modules/Course details/Course details section/CourseDetailsSection";
import CourseKeywords from "modules/Course details/Course keywords/CourseKeywords";
import CourseRequirements from "modules/Course details/Course requirements/CourseRequirements";
import CourseContent from "modules/Course details/Course content/CourseContent";
import TrainerInfo from "modules/Course details/Trainer info/TrainerInfo";
import GuaranteeCard from "modules/Course details/Guarantee card/GuaranteeCard";
import CourseCertificate from "modules/Course details/Course certificate/CourseCertificate";
import FAQ from "modules/Course details/FAQ/FAQ";
import SpecialOffer from "modules/Course details/Special offer/SpecialOffer";
import PracticalProjects from "modules/Course details/Practical projects/PracticalProjects";
import CourseReview from "modules/Course details/Course review/CourseReview";
import CourseSubscribers from "modules/Course details/Course subscribers/CourseSubscribers";
import TadarabBusiness from "modules/Course details/Tadarab business/TadarabBusiness";
import CommentsSection from "modules/Course details/Comments section/CommentsSection";
import { Row, Col } from "react-bootstrap";

export default function CourseDetails() {
  const [colFullWidth, setColFullWidth] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      const projectsSection: any = document.getElementById("practical-projects-section");
      const col: any = document.getElementById("card-column");
      if (window.scrollY >= projectsSection.offsetTop) {
        setColFullWidth(true);
      }else if(window.scrollY < projectsSection.offsetTop){
        setColFullWidth(false);
      }
    });
  }, []);
  return (
    <>
      <Navbar />
      <Row className={styles["course-details"]}>
        <Col xs={8}>
          <CourseAdvertisement />
          <WhatYouWillLearn />
          <CourseDetailsSection />
          <CourseKeywords />
          <CourseRequirements />
          <CourseContent />
          <TrainerInfo />
          <GuaranteeCard />
          <CourseCertificate />
          <FAQ />
          <SpecialOffer />
        </Col>
        <Col xs={colFullWidth ? 12 : 4} id="card-column">
          <CourseCard />
        </Col>
        <PracticalProjects />
      </Row>
      <Row className={styles["course-details__course-reviews"]}>
        <CourseReview />
      </Row>
      <Row className={styles["course-details__course-subscribers"]}>
        <CourseSubscribers />
      </Row>
      <Row className={styles["course-details__tadarab-business"]}>
        <TadarabBusiness />
      </Row>
      <Row className={styles["course-details__comments-section"]}>
        <CommentsSection />
      </Row>
    </>
  );
}
