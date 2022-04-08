import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { axiosInstance } from "configurations/axios/axiosConfig";
import {toggleLoader} from "modules/_Shared/utils/toggleLoader";

// import Navbar from "common/Navbar/Navbar";
// import Footer from "common/Footer/Footer";
// import CategoryDescription from "modules/Category/Category description/CategoryDescription";
// import CategoryCourses from "modules/Category/Category courses/CategoryCourses";
// import CategoryTopics from "modules/Category/Category topics/CategoryTopics";
// import CategoryTrainers from "modules/Category/Category trainers/CategoryTrainers";
// import TrainingCourses from "modules/Category/Training courses/TrainingCourses";
import { Container } from "react-bootstrap";
import { FBPixelEventsHandler } from 'modules/_Shared/utils/FBPixelEvents';
import dynamic from 'next/dynamic';
import MetaTagsGenerator from "modules/_Shared/utils/MetaTagsGenerator";

const Navbar = dynamic(() => import("common/Navbar/Navbar"));
const Footer = dynamic(() => import("common/Footer/Footer"));
const CategoryDescription = dynamic(() => import("modules/Category/Category description/CategoryDescription"));
const CategoryCourses = dynamic(() => import("modules/Category/Category courses/CategoryCourses"));
const CategoryTopics = dynamic(() => import("modules/Category/Category topics/CategoryTopics"));
const CategoryTrainers = dynamic(() => import("modules/Category/Category trainers/CategoryTrainers"));
const TrainingCourses = dynamic(() => import("modules/Category/Training courses/TrainingCourses"));


export default function Category() {
  const router = useRouter()
  const [category, setCategory] = useState<any>({});
  const Router = useRouter();
  const { slug } = Router.query;

  useEffect(() => {
    toggleLoader("show");
  }, [])
  
  useEffect(() => {
    console.log(Router.query.slug);
    if (Router.query.slug) {
      axiosInstance
        .get(`categories/${slug}/?country_code=null`)
        .then(function (response: any) {
          setCategory(response.data.data);
          FBPixelEventsHandler(response.data.fb_tracking_events, null);
          toggleLoader("hide");
        })
        .catch(function (error) {
          toggleLoader("hide");
          console.log(error);
        });
    }

  }, [router.query.slug]);
  // [] empty dependency array to be executed once (like onLoad) ... if it is NOT empty, it will execute when the dependencies change.

  return (
    <>
      <MetaTagsGenerator title={category?.seo_title}
        description={category?.seo_metadesc}
        img={category?.seo_image} />
      <Container fluid="xxl">
        <Navbar />
        <CategoryDescription data={category} />
        {/* <CategoryCourses data={category} />  */}
        {/* <CategoryTopics data={category} /> */}
        <CategoryTrainers data={category} />
        <TrainingCourses data={category} />
        <Footer />
      </Container>
    </>
  )
}