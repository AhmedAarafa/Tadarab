import React, { useState, useEffect } from "react";
// import Navbar from "common/Navbar/Navbar";
// import TrainerProfilePage from "modules/Trainer profile/Trainer profile page/TrainerProfilePage";
import { Container } from "react-bootstrap";
import { axiosInstance } from "configurations/axios/axiosConfig";
import { useDispatch, useSelector } from "react-redux";
import { setTrainerProfileData } from "configurations/redux/actions/trainerProfileData";
import { Trainer } from "_models/Trainer";
import Router, { useRouter } from 'next/router';
import { GAProductimpressionEventHandler } from "modules/_Shared/utils/GAEvents";
import TadarabFBPixel from "modules/_Shared/utils/fbPixel";
import { FBPixelEventsHandler } from "modules/_Shared/utils/FBPixelEvents";
import dynamic from 'next/dynamic';
import MetaTagsGenerator from "modules/_Shared/utils/MetaTagsGenerator";
import { toggleLoader } from "modules/_Shared/utils/toggleLoader";

const Navbar = dynamic(() => import("common/Navbar/Navbar"));
const TrainerProfilePage = dynamic(() => import("modules/Trainer profile/Trainer profile page/TrainerProfilePage"));
const Footer = dynamic(() => import("common/Footer/Footer"));


export default function TrainerProfile() {
  const dispatch = useDispatch();
  const router = useRouter();
  const trainerProfileData = useSelector((state: any) => state.trainerProfileData);



  useEffect(() => {
    toggleLoader("show");
    window.addEventListener("scroll", () => {
      GAProductimpressionEventHandler("trainer-courses__course-card");
    })

    return () => {
      window.removeEventListener("scroll", () => {
        return;
      })
    }
  }, [])

  useEffect(() => {
    const { slug } = router.query;

    if (router.query.slug) {

      axiosInstance
        .get(`trainers/${slug}/?country_code=null&limit=10&page=1`)
        .then(function (response: any) {
          const data: Trainer = response.data.data;
          dispatch(setTrainerProfileData(response.data));
          FBPixelEventsHandler(response.data.fb_tracking_events, null);
          toggleLoader("hide");
          
        })
        .catch(function (error) {
          toggleLoader("hide");
          console.log(error);
        });
    }


  }, [router.query]);




  return (
    <>
      <MetaTagsGenerator title={trainerProfileData?.data?.data?.seo_title}
        description={trainerProfileData?.data?.data?.seo_metadesc}
        img={trainerProfileData?.data?.data?.seo_image} />
      <Container fluid="xxl">
        <Navbar />
        <TrainerProfilePage />
        <Footer />
      </Container>
    </>
  );
}
