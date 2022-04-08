import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { axiosInstance } from "configurations/axios/axiosConfig";
// import Navbar from "common/Navbar/Navbar";
// import Footer from "common/Footer/Footer";
// import SubCategoryDescription from "modules/Category/SubCategory description/SubCategoryDescription";
// import TrainingCourses from "modules/Category/Training courses/TrainingCourses";
import { Container } from "react-bootstrap";
import { FBPixelEventsHandler } from 'modules/_Shared/utils/FBPixelEvents';
import dynamic from 'next/dynamic';
import MetaTagsGenerator from "modules/_Shared/utils/MetaTagsGenerator";
import { toggleLoader } from "modules/_Shared/utils/toggleLoader";

const Navbar = dynamic(() => import("common/Navbar/Navbar"));
const Footer = dynamic(() => import("common/Footer/Footer"));
const SubCategoryDescription = dynamic(() => import("modules/Category/SubCategory description/SubCategoryDescription"));
const TrainingCourses = dynamic(() => import("modules/Category/Training courses/TrainingCourses"));


export default function SubCategory() {
  const router = useRouter()
  const [category, setCategory] = useState<any>({});

  useEffect(() => {
    toggleLoader("show");
  }, [])


  useEffect(() => {
    if (router.query.slug !== undefined) {
      axiosInstance
        .get(`categories/${router.query.slug}/?country_code=eg`)
        .then(function (response: any) {
          
          setCategory(response.data.data);
          FBPixelEventsHandler(response.data.fb_tracking_events, null);
          toggleLoader("hide");
          
          //console.log("res",response.data.data,"slug",router.query.slug);
        })
        .catch(function (error) {
          toggleLoader("hide");
          console.log(error);
        });
    }

  }, [router.query.slug]);

  return (
    <>
      <MetaTagsGenerator title={category?.seo_title}
        description={category?.seo_metadesc}
        img={category?.seo_image} />
      <Navbar />
      <SubCategoryDescription data={category} />
      <TrainingCourses data={category} />
      <Footer />
    </>
  )
}
