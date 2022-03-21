import React,{ useState, useEffect } from 'react'
import Navbar from 'common/Navbar/Navbar'
import HeroSection from 'modules/Home page/Hero section/HeroSection'
import LatestCourses from 'modules/Home page/Latest courses/LatestCourses'
import CoursesDepartments from 'modules/Home page/Courses departments/CoursesDepartments'
import LiveCourses from 'modules/Home page/Live courses/LiveCourses'
import Consultation from 'modules/Home page/Consultations/Consultation'
import Books from 'modules/Home page/Books/Books'
import Statistics from 'modules/Home page/Statistics/Statistics'
import WhyTadarab from 'modules/Home page/Why Tadarab/WhyTadarab'
import LearnFromTheBest from 'modules/Home page/Learn from the best/LearnFromTheBest'
import JoinAsATrainer from 'modules/Home page/Join as a trainer/JoinAsATrainer'
import EducationalGuide from 'modules/Home page/Educational guide/EducationalGuide'
import AboutTadarab from 'modules/Home page/About Tadarab/AboutTadarab'
import JoinUs from 'modules/Home page/Join us/JoinUs'
import Footer from 'common/Footer/Footer'
import { Container } from "react-bootstrap";
import withAuth from "configurations/auth guard/AuthGuard";
import { axiosInstance } from "configurations/axios/axiosConfig";
import { useDispatch, useSelector } from "react-redux";
import { setHomePageData } from "configurations/redux/actions/homePageData"; 
import TadarabFBPixel from "modules/_Shared/utils/fbPixel";
import { GetStaticProps } from 'next';

// export const getStaticProps: GetStaticProps = async () => {
//   return {
//     redirect: {
//       destination: 'http://localhost:3000/home',
//       permanent: false,
//     },
//   };
// };

function HomePage() {
  const dispatch = useDispatch();
  const homePageData = useSelector((state:any) => state.homePageData);
  
  useEffect(() => {
      const countryCode:any = localStorage.getItem("countryCode");
        axiosInstance
        .get(`home/?country_code=${localStorage.getItem("countryCode")}`)
        .then(function (response:any) {
            dispatch(setHomePageData(response.data.data));
            let tadarabFbPixel = new TadarabFBPixel();
            response.data.fb_tracking_events.forEach((ev:any)=>{
              
              tadarabFbPixel.setEventId(ev.event_id);
              tadarabFbPixel.eventHandler(ev.event_name, null);
            })
        })
        .catch(function (error) {
          console.log(error); 
        });
  }, []);



    return (
        <>
        <Container fluid="xxl" >
            <Navbar/>
            <HeroSection/>
            <LatestCourses />
            <CoursesDepartments/>
            <LiveCourses/>
            <Consultation/>
            <Books/>
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
