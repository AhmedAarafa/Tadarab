import React from "react";
import Navbar from "common/Navbar/Navbar";
import SubCategoryDescription from "modules/Category/SubCategory description/SubCategoryDescription";
import TrainingCourses from "modules/Category/Training courses/TrainingCourses";
import { Container } from "react-bootstrap";

export default function SubCategory() {
  return (
    <>
      <Container fluid="xxl">
        <Navbar />
        <SubCategoryDescription />
        <TrainingCourses />
      </Container>
    </>
  );
}
