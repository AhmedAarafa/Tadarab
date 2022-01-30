import React from 'react'
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

function HomePage() {
    return (
        <>
        <Container fluid="xxl">
            <Navbar/>
            <HeroSection/>
            <LatestCourses/>
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
