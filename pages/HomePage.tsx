import React,{ useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
// import Navbar from 'common/Navbar/Navbar';
// import HeroSection from 'modules/Home page/Hero section/HeroSection';
// import LatestCourses from 'modules/Home page/Latest courses/LatestCourses';
// import CoursesDepartments from 'modules/Home page/Courses departments/CoursesDepartments';
// import LiveCourses from 'modules/Home page/Live courses/LiveCourses';
// import Consultation from 'modules/Home page/Consultations/Consultation';
// import Books from 'modules/Home page/Books/Books';
// import Statistics from 'modules/Home page/Statistics/Statistics';
// import WhyTadarab from 'modules/Home page/Why Tadarab/WhyTadarab';
// import LearnFromTheBest from 'modules/Home page/Learn from the best/LearnFromTheBest';
// import JoinAsATrainer from 'modules/Home page/Join as a trainer/JoinAsATrainer';
// import EducationalGuide from 'modules/Home page/Educational guide/EducationalGuide';
// import AboutTadarab from 'modules/Home page/About Tadarab/AboutTadarab';
// import JoinUs from 'modules/Home page/Join us/JoinUs';
// import Footer from 'common/Footer/Footer';
import { Container } from "react-bootstrap";
import withAuth from "configurations/auth guard/AuthGuard";
import { axiosInstance } from "configurations/axios/axiosConfig";
import { useDispatch, useSelector } from "react-redux";
import { setHomePageData } from "configurations/redux/actions/homePageData"; 
import TadarabFBPixel from "modules/_Shared/utils/fbPixel";
import { GetStaticProps } from 'next';
import { GAProductimpressionEventHandler } from "modules/_Shared/utils/GAEvents";
import useInView from "react-cool-inview";
import {toggleLoader} from "modules/_Shared/utils/toggleLoader";
import { FBPixelEventsHandler } from 'modules/_Shared/utils/FBPixelEvents';
// import ReactPixel from 'react-facebook-pixel';

const Navbar = dynamic(() => import("common/Navbar/Navbar"));
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
const Footer = dynamic(() => import("common/Footer/Footer"));



function HomePage() {
  const dispatch = useDispatch();
  const homePageData = useSelector((state:any) => state.homePageData);
  
  useEffect(() => {
      const countryCode:any = localStorage.getItem("countryCode");
        axiosInstance
        .get(`home/?country_code=${localStorage.getItem("countryCode")}`)
        .then(function (response:any) {
            dispatch(setHomePageData(response.data.data));
            
            FBPixelEventsHandler(response.data.fb_tracking_events,null);

        })
        .catch(function (error) {
          console.log(error); 
        });
        
        
    window.addEventListener("scroll" , ()=>{
      GAProductimpressionEventHandler("latest-courses-card");
    })

    return () => {
      window.removeEventListener("scroll", ()=>{
        return;
      })
    }
    
  }, []);


  const { observe, inView } = useInView({
    unobserveOnEnter: true,
    onEnter: ({ scrollDirection, entry, observe, unobserve }) => {
    },
    onLeave: ({ scrollDirection, entry, observe, unobserve }) => {
    },
  });


    return (
        <>
        <Container fluid="xxl" >
            <Navbar/>
            <HeroSection/>
            <LatestCourses />
            <CoursesDepartments/>
            <LiveCourses/>
            <HowToLearnOnTadarab/>
            {/* <Consultation/> */}
            {/* { <div  ref={observe} >
              { inView && <Books />}
            </div>
             } */}
            {/* <Books /> */}
            <Statistics/>
            <WhyTadarab/>
            <LearnFromTheBest/>
            <JoinAsATrainer/>
            <EducationalGuide/>
            <AboutTadarab/>
            <JoinUs/>
            <Footer/>
        </Container>
            
        </>
    )
};


export default HomePage;
