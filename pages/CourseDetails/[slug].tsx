import React, { useEffect, useState } from "react";
import styles from "styles/course-details.module.css";
// import Navbar from "common/Navbar/Navbar";
// import Footer from "common/Footer/Footer";
// import CourseCard from "modules/Course details/Course card/CourseCard";
// import CourseAdvertisement from "modules/Course details/Course Advertisement/CourseAdvertisement";
// import WhatYouWillLearn from "modules/Course details/What you will learn/WhatYouWillLearn";
// import CourseDetailsSection from "modules/Course details/Course details section/CourseDetailsSection";
// import CourseKeywords from "modules/Course details/Course keywords/CourseKeywords";
// import CourseRequirements from "modules/Course details/Course requirements/CourseRequirements";
// import CourseContent from "modules/Course details/Course content/CourseContent";
// import TrainerInfo from "modules/Course details/Trainer info/TrainerInfo";
// import GuaranteeCard from "modules/Course details/Guarantee card/GuaranteeCard";
// import CourseCertificate from "modules/Course details/Course certificate/CourseCertificate";
// import FAQ from "modules/Course details/FAQ/FAQ";
// import SpecialOffer from "modules/Course details/Special offer/SpecialOffer";
// import PracticalProjects from "modules/Course details/Practical projects/PracticalProjects";
// import CourseReview from "modules/Course details/Course review/CourseReview";
// import CourseSubscribers from "modules/Course details/Course subscribers/CourseSubscribers";
// import TadarabBusiness from "modules/Course details/Tadarab business/TadarabBusiness";
// import CommentsSection from "modules/Course details/Comments section/CommentsSection";
// import MobileNavTabsBar from "modules/Course details/Mobile nav tabs bar/MobileNavTabsBar";
// import MobileCheckoutBar from "modules/Course details/Mobile checkout bar/MobileCheckoutBar";
// import MyCourse from "modules/Course details/My course/MyCourse";
// import MonthlySubscriptionCard from "modules/Course details/Monthly subscription card/MonthlySubscriptionCard";
import withAuth from "configurations/auth guard/AuthGuard";
import { Row, Col, Container } from "react-bootstrap";
import { axiosInstance } from "configurations/axios/axiosConfig";
import { useDispatch, useSelector } from "react-redux";
import { setCourseDetailsData } from "configurations/redux/actions/courseDetailsData";
import TadarabFBPixel from "modules/_Shared/utils/fbPixel";
import TadarabGA from "modules/_Shared/utils/ga";
import { GAProductimpressionEventHandler } from "modules/_Shared/utils/GAEvents"
import { useRouter } from 'next/router';
import { Course } from "_models/Course";
import { FBPixelEventsHandler } from "modules/_Shared/utils/FBPixelEvents";
import TPlayer from "common/TPlayer/TPlayer";
import dynamic from 'next/dynamic';
import Head from "next/head";
import MetaTagsGenerator from "modules/_Shared/utils/MetaTagsGenerator";
import {toggleLoader} from "modules/_Shared/utils/toggleLoader";

const Navbar = dynamic(() => import("common/Navbar/Navbar"));
const Footer = dynamic(() => import("common/Footer/Footer"));
const CourseCard = dynamic(() => import( "modules/Course details/Course card/CourseCard"));
const CourseAdvertisement = dynamic(() => import("modules/Course details/Course Advertisement/CourseAdvertisement")); 
const WhatYouWillLearn = dynamic(() => import("modules/Course details/What you will learn/WhatYouWillLearn")); 
const CourseDetailsSection = dynamic(() => import("modules/Course details/Course details section/CourseDetailsSection")); 
const CourseKeywords = dynamic(() => import("modules/Course details/Course keywords/CourseKeywords")); 
const CourseRequirements = dynamic(() => import("modules/Course details/Course requirements/CourseRequirements"));
const CourseContent = dynamic(() => import("modules/Course details/Course content/CourseContent"));
const TrainerInfo = dynamic(() => import("modules/Course details/Trainer info/TrainerInfo"));
const GuaranteeCard = dynamic(() => import("modules/Course details/Guarantee card/GuaranteeCard"));
const CourseCertificate = dynamic(() => import("modules/Course details/Course certificate/CourseCertificate"));
const FAQ = dynamic(() => import("modules/Course details/FAQ/FAQ"));
const SpecialOffer = dynamic(() => import("modules/Course details/Special offer/SpecialOffer"));
const PracticalProjects = dynamic(() => import("modules/Course details/Practical projects/PracticalProjects"));
const CourseReview = dynamic(() => import("modules/Course details/Course review/CourseReview"));
const CourseSubscribers = dynamic(() => import("modules/Course details/Course subscribers/CourseSubscribers"));
const TadarabBusiness = dynamic(() => import("modules/Course details/Tadarab business/TadarabBusiness"));
const CommentsSection = dynamic(() => import("modules/Course details/Comments section/CommentsSection"));
const MobileNavTabsBar = dynamic(() => import("modules/Course details/Mobile nav tabs bar/MobileNavTabsBar"));
const MobileCheckoutBar = dynamic(() => import("modules/Course details/Mobile checkout bar/MobileCheckoutBar"));
const MyCourse = dynamic(() => import("modules/Course details/My course/MyCourse"));
const MonthlySubscriptionCard = dynamic(() => import("modules/Course details/Monthly subscription card/MonthlySubscriptionCard"));


function CourseDetails() {
  const [colFullWidth, setColFullWidth] = useState(false);
  const [originalCardPlacement, setOriginalCardPlacement] = useState(false);
  const [courseId, setCourseId] = useState("");
  const dispatch = useDispatch();
  const courseDetailsData = useSelector((state: any) => state.courseDetailsData);
  const Router = useRouter();
  const { slug } = Router.query;

  useEffect(() => {
    toggleLoader("show");
    window.addEventListener("scroll", () => {
      GAProductimpressionEventHandler("course-subscribers__course-card");
    })

    return () => {
      window.removeEventListener("scroll", () => {
        return;
      })
    }
  }, []);

  useEffect(() => {

    const rootFontSize = parseFloat(
      window
        .getComputedStyle(document.getElementsByTagName("html")[0])
        .getPropertyValue("font-size")
    );
    const tabsResponsiveBar: any = document.getElementById("tabs-responsive-bar");
    const MOBILECHECKOUTBAR: any = document.getElementById("mobile-checkout-bar");
    const navbar: any = document.getElementById("nav");
    let addToCartBtn: any = null;

    if (document.documentElement.clientWidth >= 576) {
      let addToCartBtn: any = null;
      setOriginalCardPlacement(true);
      tabsResponsiveBar ? tabsResponsiveBar.style.cssText = `display:none` : null;
      MOBILECHECKOUTBAR ? MOBILECHECKOUTBAR.style.cssText = `display:none` : null;
      window.addEventListener("scroll", function () {
        tabsResponsiveBar ? tabsResponsiveBar.style.cssText = `display:none` : null ;
        MOBILECHECKOUTBAR ? MOBILECHECKOUTBAR.style.cssText = `display:none` : null ;
        const projectsSection: any = document.getElementById("practical-projects-section");
        const reviewsSection: any = document.getElementById("reviews-section");
    const courseSubscribersSection: any = document.getElementById("course-subscribers-section");
        if (window.scrollY >= (projectsSection?.offsetTop ? projectsSection?.offsetTop : 999999999999999999999) || 
        window.scrollY >= (reviewsSection?.offsetTop ? reviewsSection?.offsetTop : 999999999999999999999) || 
        window.scrollY >= courseSubscribersSection?.offsetTop
        ) {
          setColFullWidth(true);
        } else if (window.scrollY < projectsSection?.offsetTop || 
          window.scrollY < reviewsSection?.offsetTop || 
          window.scrollY < courseSubscribersSection?.offsetTop) {
          setColFullWidth(false);
        }
      });
    }
    else {

      setOriginalCardPlacement(false);
      window.addEventListener("scroll", function () {
        let addToCartBtn: any = null;
        addToCartBtn = document.getElementById("monthly-subscribe-btn");

        if (addToCartBtn) {

          if (window.scrollY >= addToCartBtn.offsetTop) {

            tabsResponsiveBar ? tabsResponsiveBar.style.cssText = `
         display:flex;
         align-items:center;
         justify-content:space-around;
         top:${navbar.offsetHeight}px;
         ` : null ;
         MOBILECHECKOUTBAR ? MOBILECHECKOUTBAR.style.cssText = `
         display:flex;
         align-items:center;
         justify-content:space-evenly;
         bottom:0;
         `: null ;

          } else if (window.scrollY < addToCartBtn.offsetTop) {
            tabsResponsiveBar ? tabsResponsiveBar.style.cssText = `display:none` : null ;
            MOBILECHECKOUTBAR ? MOBILECHECKOUTBAR.style.cssText = `display:none` : null ;
          }
        }

      });
    }


    window.addEventListener("resize", () => {

      if (document.documentElement.clientWidth >= 576) {

        let addToCartBtn: any = null;
        setOriginalCardPlacement(true);
        tabsResponsiveBar ? tabsResponsiveBar.style.cssText = `display:none` : null;
        MOBILECHECKOUTBAR ? MOBILECHECKOUTBAR.style.cssText = `display:none` : null;
        window.addEventListener("scroll", function () {
          tabsResponsiveBar ? tabsResponsiveBar.style.cssText = `display:none` : null;
          MOBILECHECKOUTBAR ? MOBILECHECKOUTBAR.style.cssText = `display:none`: null;

          const projectsSection: any = document.getElementById("practical-projects-section");
          const reviewsSection: any = document.getElementById("reviews-section");
    const courseSubscribersSection: any = document.getElementById("course-subscribers-section");
          if (window.scrollY >= (projectsSection?.offsetTop ? projectsSection?.offsetTop : 999999999999999999999) || 
          window.scrollY >= (reviewsSection?.offsetTop ? reviewsSection?.offsetTop : 999999999999999999999) || 
          window.scrollY >= courseSubscribersSection?.offsetTop
          ) {
            setColFullWidth(true);
          } else if (window.scrollY < projectsSection?.offsetTop || 
            window.scrollY < reviewsSection?.offsetTop || 
            window.scrollY < courseSubscribersSection?.offsetTop) {
            setColFullWidth(false);
          }
        });
      }
      else {

        setOriginalCardPlacement(false);
        window.addEventListener("scroll", function () {
          let addToCartBtn: any = null;
          addToCartBtn = document.getElementById("monthly-subscribe-btn");

          if (addToCartBtn) {

            if (window.scrollY >= addToCartBtn?.offsetTop) {
              tabsResponsiveBar ? tabsResponsiveBar.style.cssText = `
            display:flex;
            align-items:center;
            justify-content:space-around;
            top:${navbar.offsetHeight}px;
            ` : null ;
            MOBILECHECKOUTBAR ? MOBILECHECKOUTBAR.style.cssText = `
            display:flex;
            align-items:center;
            justify-content:space-evenly;
            bottom:0;
            ` : null ;
            } else if (window.scrollY < addToCartBtn?.offsetTop) {
              tabsResponsiveBar ? tabsResponsiveBar.style.cssText = `display:none` : null ;
              MOBILECHECKOUTBAR ? MOBILECHECKOUTBAR.style.cssText = `display:none` : null;
            }
          }

        });
      }
    });


    if (Router.query.slug) {
      
      axiosInstance
        .get(`courses/${slug}/?country_code=null`)
        .then(function (response: any) {
          toggleLoader("hide");

          const data: Course = response?.data?.data;
          
          setCourseId(response?.data?.data?.course_details.id);
          dispatch(setCourseDetailsData(data));

          let tadarabGA = new TadarabGA();
          let referrer = "";

          if (document.referrer.includes("localhost")) {

            document.referrer.replace('http://localhost:3000/', '').split('/')[0] == ""
              ?
              referrer = "homepage"
              :
              referrer = document.referrer.replace('http://localhost:3000/', '').split('/')[0]

          } else {
            referrer = "homepage";
          }

          tadarabGA.tadarab_fire_traking_GA_code("product_details_views",
            {
              products: [{
                name: data.title,
                id: data.id,
                price: data.discounted_price_usd,
                brand: "Tadarab",
                category: data.categories && data.categories[0].title,
                variant: "Single Course"
              }],
              list: referrer
            });

          FBPixelEventsHandler(response.data.fb_tracking_events, null);


        })
        .catch(function (error) {
          toggleLoader("hide");
          console.log(error);
        });
       
    }

    return () => {
      window.removeEventListener("resize", () => {
        return;
      });
      window.removeEventListener("scroll", () => {
        return;
      });
    };


  }, [Router.query]);


  return (
    <>
    <MetaTagsGenerator title={courseDetailsData?.data?.seo_title} 
    description={courseDetailsData?.data?.seo_metadesc} 
    img={courseDetailsData?.data?.seo_image} />
      <Container fluid="xxl">
        <Navbar />
        {!(courseDetailsData?.data?.course_details?.is_purchased) &&
          <>

            <MobileNavTabsBar />
            <MobileCheckoutBar />
            <Row className={styles["course-details-row"]}>
              <Col xs={12} sm={8}>
                {originalCardPlacement == false &&
                  <MonthlySubscriptionCard />
                }
                <WhatYouWillLearn />
                <CourseDetailsSection />
                <CourseKeywords />
                <CourseRequirements />
                <TrainerInfo />
                <GuaranteeCard />
                <CourseCertificate />
                <FAQ Cid={()=>{return courseId}}/>
                <SpecialOffer Cid={()=>{return courseId}}/>
              </Col>
              {
                originalCardPlacement == true &&
                <Col xs={colFullWidth ? 12 : 4} id="card-column">
                  {originalCardPlacement == true && <MonthlySubscriptionCard />}
                </Col>
              }
              <PracticalProjects Cid={()=>{return courseId}}/> 
            </Row>
            <Row className={styles["course-details__course-reviews"]}>
              <CourseReview Cid={()=>{return courseId}}/>
            </Row>
            <Row className={styles["course-details__course-subscribers"]}>
              <CourseSubscribers />
            </Row>
            {/* <Row className={styles["course-details__tadarab-business"]}>
              <TadarabBusiness />
            </Row> */}
            <Row className={styles["course-details__comments-section"]}>
              <CommentsSection Cid={()=>{return courseId}}/>
            </Row>
          </>
        }
        {(courseDetailsData?.data?.course_details?.is_purchased) &&  <MyCourse/>}
        <Footer />
      </Container>

    </>
  );
}

export default withAuth(CourseDetails);
