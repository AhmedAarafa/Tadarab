import React, { useEffect, useState } from "react";
import styles from "styles/course-details.module.css";
import Navbar from "common/Navbar/Navbar";
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
import MobileNavTabsBar from "modules/Course details/Mobile nav tabs bar/MobileNavTabsBar";
import MobileCheckoutBar from "modules/Course details/Mobile checkout bar/MobileCheckoutBar";
import MyCourse from "modules/Course details/My course/MyCourse";
import MonthlySubscriptionCard from "modules/Course details/Monthly subscription card/MonthlySubscriptionCard";
import withAuth from "configurations/auth guard/AuthGuard";
import { Row, Col, Container } from "react-bootstrap";
import { axiosInstance } from "configurations/axios/axiosConfig";
import { useDispatch, useSelector } from "react-redux";
import { setCourseDetailsData } from "configurations/redux/actions/courseDetailsData"; 
import TadarabFBPixel from "modules/_Shared/utils/fbPixel";
import { useRouter } from 'next/router';
import { Course } from "_models/Course";

function CourseDetails() {
  const [colFullWidth, setColFullWidth] = useState(false);
  const [originalCardPlacement, setOriginalCardPlacement] = useState(false);
  const dispatch = useDispatch();
  const courseDetailsData = useSelector((state:any) => state.homePageData);
  const Router = useRouter();
  const { slug } = Router.query;


  useEffect(() => {
    console.log('Router.query',Router.query);
        
    const rootFontSize = parseFloat(
      window
      .getComputedStyle(document.getElementsByTagName("html")[0])
      .getPropertyValue("font-size")
    );
    const tabsResponsiveBar:any = document.getElementById("tabs-responsive-bar");
    const mobileCheckoutBar:any = document.getElementById("mobile-checkout-bar");
    const navbar:any = document.getElementById("nav");
    let addToCartBtn:any = null;

    if(document.documentElement.clientWidth >= 576){
    let addToCartBtn:any = null;
      setOriginalCardPlacement(true);
      tabsResponsiveBar.style.cssText=`display:none`;
      mobileCheckoutBar.style.cssText=`display:none`;
      window.addEventListener("scroll", function () {
        tabsResponsiveBar.style.cssText=`display:none`;
        mobileCheckoutBar.style.cssText=`display:none`;
        const projectsSection: any = document.getElementById("practical-projects-section");
        if (window.scrollY >= projectsSection?.offsetTop) {
          setColFullWidth(true);
        }else if(window.scrollY < projectsSection?.offsetTop){
          setColFullWidth(false);
        }
      });
    }
    else {
    
      setOriginalCardPlacement(false);
      window.addEventListener("scroll", function () {
        let addToCartBtn:any = null;
     addToCartBtn = document.getElementById("add-to-cart-btn");

     if(addToCartBtn){

       if (window.scrollY >= addToCartBtn.offsetTop) {
     
         tabsResponsiveBar.style.cssText=`
         display:flex;
         align-items:center;
         justify-content:space-around;
         top:${navbar.offsetHeight}px;
         `
         mobileCheckoutBar.style.cssText=`
         display:flex;
         align-items:center;
         justify-content:space-evenly;
         bottom:0;
         `
         
       }else if(window.scrollY < addToCartBtn.offsetTop){
       tabsResponsiveBar.style.cssText=`display:none`;
       mobileCheckoutBar.style.cssText=`display:none`;
       } 
     }

      });
    }


    window.addEventListener("resize" , ()=>{

      if(document.documentElement.clientWidth >= 576){
        
    let addToCartBtn:any = null;
      setOriginalCardPlacement(true);
      tabsResponsiveBar.style.cssText=`display:none`;
      mobileCheckoutBar.style.cssText=`display:none`;
      window.addEventListener("scroll", function () {
        tabsResponsiveBar.style.cssText=`display:none`;
      mobileCheckoutBar.style.cssText=`display:none`;
        
          const projectsSection: any = document.getElementById("practical-projects-section");
          if (window.scrollY >= projectsSection?.offsetTop) {
            setColFullWidth(true);
          }else if(window.scrollY < projectsSection?.offsetTop){
            setColFullWidth(false);
          }
        });
      }
      else {
    
      setOriginalCardPlacement(false);
      window.addEventListener("scroll", function () {
        let addToCartBtn:any = null;
        addToCartBtn = document.getElementById("add-to-cart-btn");

        if(addToCartBtn){

          if (window.scrollY >= addToCartBtn?.offsetTop) {
            tabsResponsiveBar.style.cssText=`
            display:flex;
            align-items:center;
            justify-content:space-around;
            top:${navbar.offsetHeight}px;
            `
            mobileCheckoutBar.style.cssText=`
            display:flex;
            align-items:center;
            justify-content:space-evenly;
            bottom:0;
            `
          }else if(window.scrollY < addToCartBtn?.offsetTop){
          tabsResponsiveBar.style.cssText=`display:none`;
          mobileCheckoutBar.style.cssText=`display:none`;
          }
        }
      });
      }
    });


    if(Router.query.slug){

      axiosInstance
      .get(`courses/${slug}/?country_code=${localStorage.getItem("countryCode")}`)
      .then(function (response:any) {
        const data:Course = response?.data?.data ;
                
          dispatch(setCourseDetailsData(data));
  
                  let tadarabFbPixel = new TadarabFBPixel();
              response.data.fb_tracking_events.forEach((ev:any)=>{
                console.table("ev",ev);
                
                tadarabFbPixel.setEventId(ev.event_id);
                tadarabFbPixel.eventHandler(ev.event_name, null);
              })
    
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    
    return () => {
      window.removeEventListener("resize",()=>{
        return;
      });
      window.removeEventListener("scroll",()=>{
        return;
      });
    };
    
    
  }, [Router.query]);

 
  
  return (
    <>
    <Container fluid="xxl">
      <Navbar />
      <MobileNavTabsBar />
      <MobileCheckoutBar />
      <Row className={styles["course-details-row"]}>
        <Col xs={12} sm={8}>
          <CourseAdvertisement />
          {originalCardPlacement == false && 
          <CourseCard />
           }
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
        {
          originalCardPlacement == true &&
        <Col xs={colFullWidth ? 12 : 4} id="card-column">
         {  originalCardPlacement == true &&  <CourseCard />}
        </Col>
        }
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
      {/* <MyCourse/> */}
    </Container>

    </>
  );
}

export default withAuth(CourseDetails);