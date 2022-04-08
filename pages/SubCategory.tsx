import React from "react";
// import Navbar from "common/Navbar/Navbar";
// import SubCategoryDescription from "modules/Category/SubCategory description/SubCategoryDescription";
// import TrainingCourses from "modules/Category/Training courses/TrainingCourses";
import { Container } from "react-bootstrap";

import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import("common/Navbar/Navbar"));
const SubCategoryDescription = dynamic(() => import("modules/Category/SubCategory description/SubCategoryDescription"));
const TrainingCourses = dynamic(() => import("modules/Category/Training courses/TrainingCourses"));

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
