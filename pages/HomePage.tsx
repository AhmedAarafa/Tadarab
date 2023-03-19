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
import Router, { useRouter } from "next/router";

const HeroSection = dynamic(() => import("modules/Home page/Hero section/HeroSection"));
const LatestCourses = dynamic(() => import("modules/Home page/Latest courses/LatestCourses"));
const CoursesDepartments = dynamic(() => import("modules/Home page/Courses departments/CoursesDepartments"));
const LiveCourses = dynamic(() => import("modules/Home page/Live courses/LiveCourses"));
const HowToLearnOnTadarab = dynamic(() => import("modules/Home page/How to learn on tadarab/HowToLearnOnTadarab"));
const Books = dynamic(() => import("modules/Home page/Books/Books"));
const Statistics = dynamic(() => import("common/Statistics/Statistics"));
const CustomSignupPopup = dynamic(() => import("common/Custom signup popup/CustomSignupPopup"));
const WhyTadarab = dynamic(() => import("modules/Home page/Why Tadarab/WhyTadarab"));
const LearnFromTheBest = dynamic(() => import("modules/Home page/Learn from the best/LearnFromTheBest"));
const JoinAsATrainer = dynamic(() => import("modules/Home page/Join as a trainer/JoinAsATrainer"));
const TadarabForBusiness = dynamic(() => import("common/Tadarab for business/TadarabForBusiness"));
const AboutTadarab = dynamic(() => import("common/Testimonials/Testimonials"));
const JoinUs = dynamic(() => import("modules/Home page/Join us/JoinUs"));
const TadarabUnlimited = dynamic(() => import("common/Tadarab unlimited/TadarabUnlimited"));
const TadarabSeason = dynamic(() => import("modules/Home page/Tadarab season section/TadarabSeason"));
const MobileCheckoutBar = dynamic(() => import("modules/Home page/Mobile checkout bar/MobileCheckoutBar"));

function HomePage(props: any) {
  const [isCustomSignupModalVisible, setIsCustomSignupModalVisible] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const homePageData = useSelector((state: any) => state.homePageData);
  const themeState = useSelector((state: any) => state.themeState.theme);
  const userStatus = useSelector((state: any) => state.userAuthentication);


  useEffect(() => {
    toggleLoader("show");

    if (Router.query?.aid && !localStorage.getItem("affiliate_id")) {
      axiosInstance
        .post(`coupon_link/${Router.query.aid}/${Router.query.code}`)
        .then((res: any) => {
          localStorage.setItem("coupon_code", res?.data?.data?.coupon_code);
          localStorage.setItem("affiliate_id", `${Router.query.aid}`);
          localStorage.setItem("cced", JSON.stringify(Math.floor(new Date().getTime() / 1000) + 604800));
          axiosInstance
            .get(`home`)
            .then(function (response: any) {
              dispatch(setHomePageData(response.data.data));
              FBPixelEventsHandler(response.data.fb_tracking_events, null);
              toggleLoader("hide");
              setTimeout(() => {
                if (userStatus.isUserAuthenticated == false) {
                  setIsCustomSignupModalVisible(true);
                }
              }, 3000);
            })
            .catch(function (error: any) {
              toggleLoader("hide");
              console.log(error);
            });
        })
        .catch((error: any) => {
          console.log("error", error);
          toggleLoader("hide");
        });
    } else {
      axiosInstance
        .get(`home`)
        .then(function (response: any) {
          dispatch(setHomePageData(response.data.data));
          FBPixelEventsHandler(response.data.fb_tracking_events, null);
          toggleLoader("hide");
          setTimeout(() => {
            if (userStatus.isUserAuthenticated == false) {
              setIsCustomSignupModalVisible(true);
            }
          }, 3000);
        })
        .catch(function (error: any) {
          toggleLoader("hide");
          console.log(error);
        });
    }

    if (localStorage.getItem("affiliate_id") &&
      Math.floor(new Date().getTime() / 1000) > Number(localStorage.getItem("cced"))) {
      localStorage.removeItem("affiliate_id");
      localStorage.removeItem("cced");
      localStorage.setItem("coupon_code", "");
    }

    window.addEventListener("scroll", () => {
      GAProductimpressionEventHandler("latest-courses-card");
    })

    return () => {
      window.removeEventListener("scroll", () => {
        return;
      });
      setIsCustomSignupModalVisible(false);
    }

  }, [router]);

  return (
    <>

      <Container data-theme={themeState} fluid="xxl" style={{ backgroundColor: "var(--tadarab-light-bg)" }}>

        <HeroSection />
        {/* <TadarabSeason /> */}
        <LatestCourses />
        {/* <TadarabUnlimited /> */}
        <CoursesDepartments />
        <Statistics />
        <LiveCourses />
        <HowToLearnOnTadarab />
        {/* <Consultation/> */}
        {/* { <div  ref={observe} >
              { inView && <Books />}
            </div>
             } */}
        <Books />
        <WhyTadarab />
        <LearnFromTheBest />
        <JoinAsATrainer />
        <TadarabForBusiness />
        <AboutTadarab />
        <JoinUs />
        <MobileCheckoutBar />
        <CustomSignupPopup setIsCustomSignupModalVisible={setIsCustomSignupModalVisible} isCustomSignupModalVisible={isCustomSignupModalVisible} />
      </Container>

    </>
  )
};

export default withAuth(HomePage);
