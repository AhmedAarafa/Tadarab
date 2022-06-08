import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Container } from "react-bootstrap";
import { GetServerSideProps } from 'next'
import withAuth from "configurations/auth guard/AuthGuard";
import { axiosInstance } from "configurations/axios/axiosConfig";
import { useDispatch, useSelector } from "react-redux";
import { setHomePageData } from "configurations/redux/actions/homePageData";
import TadarabFBPixel from "modules/_Shared/utils/fbPixel";
import { GAProductimpressionEventHandler } from "modules/_Shared/utils/GAEvents";
import { FBPixelEventsHandler } from 'modules/_Shared/utils/FBPixelEvents';
import { toggleLoader } from "modules/_Shared/utils/toggleLoader";

const HeroSection = dynamic(() => import("modules/Home page/Hero section/HeroSection"));
const LatestCourses = dynamic(() => import("modules/Home page/Latest courses/LatestCourses"));
const CoursesDepartments = dynamic(() => import("modules/Home page/Courses departments/CoursesDepartments"));
const LiveCourses = dynamic(() => import("modules/Home page/Live courses/LiveCourses"));
const Consultation = dynamic(() => import("modules/Home page/Consultations/Consultation"));
const HowToLearnOnTadarab = dynamic(() => import("modules/Home page/How to learn on tadarab/HowToLearnOnTadarab"));
const Books = dynamic(() => import("modules/Home page/Books/Books"));
const Statistics = dynamic(() => import("modules/Home page/Statistics/Statistics"));
const WhyTadarab = dynamic(() => import("modules/Home page/Why Tadarab/WhyTadarab"));
const LearnFromTheBest = dynamic(() => import("modules/Home page/Learn from the best/LearnFromTheBest"));
const JoinAsATrainer = dynamic(() => import("modules/Home page/Join as a trainer/JoinAsATrainer"));
const EducationalGuide = dynamic(() => import("modules/Home page/Educational guide/EducationalGuide"));
const AboutTadarab = dynamic(() => import("modules/Home page/About Tadarab/AboutTadarab"));
const JoinUs = dynamic(() => import("modules/Home page/Join us/JoinUs"));
const TadarabUnlimited = dynamic(() => import("modules/Home page/Tadarab unlimited/TadarabUnlimited"));
const NotificationBar = dynamic(() => import("common/Notification bar/NotificationBar"));

function HomePage(props: any) {
  
  const dispatch = useDispatch();
  const homePageData = useSelector((state: any) => state.homePageData);
  
  useEffect(() => {
    toggleLoader("show");
    const countryCode: any = localStorage.getItem("countryCode");
    axiosInstance
      .get(`home/?country_code=null`)
      .then(function (response: any) {
        dispatch(setHomePageData(response.data.data));
        FBPixelEventsHandler(response.data.fb_tracking_events, null);
        toggleLoader("hide");
      })
      .catch(function (error:any) {
        toggleLoader("hide");
        console.log(error);
      });


    window.addEventListener("scroll", () => {
      GAProductimpressionEventHandler("latest-courses-card");
    })

    return () => {
      window.removeEventListener("scroll", () => {
        return;
      })
    }

  }, []);
  
  return (
    <>
      <Container fluid="xxl" >
      
        <HeroSection />
        <LatestCourses />
        <TadarabUnlimited />
        <CoursesDepartments />
        <LiveCourses />
        <HowToLearnOnTadarab />
        {/* <Consultation/> */}
        {/* { <div  ref={observe} >
              { inView && <Books />}
            </div>
             } */}
        <Books />
        <TadarabUnlimited />
        <Statistics />
        <WhyTadarab />
        <LearnFromTheBest />
        <JoinAsATrainer />
        <EducationalGuide />
        <AboutTadarab />
        <JoinUs />
      </Container>

    </>
  )
};

export default withAuth(HomePage);
