import React, { useEffect } from "react";
// import Navbar from "common/Navbar/Navbar";
// import UnlimitedCourses from "modules/Tadarab subscription/Unlimited courses/UnlimitedCourses";
// import Statistics from "modules/Tadarab subscription/Statistics/Statistics";
// import MarketingBoxes from "modules/Tadarab subscription/Marketing boxes/MarketingBoxes";
// import ArabicTrainers from "modules/Tadarab subscription/Arabic trainers/ArabicTrainers";
// import Faq from "modules/Tadarab subscription/FAQ/Faq";
// import MobileCheckoutBar from "modules/Course details/Mobile checkout bar/MobileCheckoutBar";
// import Footer from 'common/Footer/Footer';
import { Container } from "react-bootstrap";
import { axiosInstance } from "configurations/axios/axiosConfig";
import { useDispatch, useSelector } from "react-redux";
import { setHomePageData } from "configurations/redux/actions/homePageData";
import TadarabFBPixel from "modules/_Shared/utils/fbPixel";
import { FBPixelEventsHandler } from 'modules/_Shared/utils/FBPixelEvents';
import useResize from "custom hooks/useResize";
import { toggleLoader } from "modules/_Shared/utils/toggleLoader";

import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import("common/Navbar/Navbar"));
const UnlimitedCourses = dynamic(() => import("modules/Tadarab subscription/Unlimited courses/UnlimitedCourses"));
const Statistics = dynamic(() => import("modules/Tadarab subscription/Statistics/Statistics"));
const MarketingBoxes = dynamic(() => import("modules/Tadarab subscription/Marketing boxes/MarketingBoxes"));
const ArabicTrainers = dynamic(() => import("modules/Tadarab subscription/Arabic trainers/ArabicTrainers"));
const Faq = dynamic(() => import("modules/Tadarab subscription/FAQ/Faq"));
const MobileCheckoutBar = dynamic(() => import("modules/Course details/Mobile checkout bar/MobileCheckoutBar"));
const Footer = dynamic(() => import('common/Footer/Footer'));




export default function TadarabSubscription() {

  const dispatch = useDispatch();
  const homePageData = useSelector((state: any) => state.homePageData);



  useEffect(() => {
    toggleLoader("show");
    const MobileCheckoutBar: any = document.getElementById("mobile-checkout-bar");
    let addToCartBtn: any = null;

    if (document.documentElement.clientWidth >= 576) {
      MobileCheckoutBar ? MobileCheckoutBar.style.cssText = `display:none` : null;
      window.addEventListener("scroll", function () {
        MobileCheckoutBar ? MobileCheckoutBar.style.cssText = `display:none` : null;
      });
    }
    else {
      window.addEventListener("scroll", function () {
        addToCartBtn = document.getElementById("monthly-subscribe-btn");

        if (addToCartBtn) {

          if (window.scrollY >= addToCartBtn.offsetTop) {
            MobileCheckoutBar ? MobileCheckoutBar.style.cssText = `
         display:flex;
         align-items:center;
         justify-content:space-evenly;
         bottom:0;
         `: null;

          } else if (window.scrollY < addToCartBtn.offsetTop) {
            MobileCheckoutBar ? MobileCheckoutBar.style.cssText = `display:none` : null;
          }
        }

      });
    }


    window.addEventListener("resize", () => {

      if (document.documentElement.clientWidth >= 576) {

        addToCartBtn = null;
        MobileCheckoutBar ? MobileCheckoutBar.style.cssText = `display:none` : null;
        window.addEventListener("scroll", function () {
          MobileCheckoutBar ? MobileCheckoutBar.style.cssText = `display:none` : null;
        });
      }
      else {

        window.addEventListener("scroll", function () {
          addToCartBtn = document.getElementById("monthly-subscribe-btn");

          if (addToCartBtn) {

            if (window.scrollY >= addToCartBtn?.offsetTop) {
              MobileCheckoutBar ? MobileCheckoutBar.style.cssText = `
            display:flex;
            align-items:center;
            justify-content:space-evenly;
            bottom:0;
            `: null;
            } else if (window.scrollY < addToCartBtn?.offsetTop) {
              MobileCheckoutBar ? MobileCheckoutBar.style.cssText = `display:none` : null;
            }
          }

        });
      }
    });


    const countryCode: any = localStorage.getItem("countryCode");
    axiosInstance
      .get(`home/?country_code=null`)
      .then(function (response: any) {
        dispatch(setHomePageData(response.data.data));
        FBPixelEventsHandler(response.data.fb_tracking_events, null);
        toggleLoader("hide");
        
        
      })
      .catch(function (error) {
        toggleLoader("hide");
        console.log(error);
      });


    return () => {
      window.removeEventListener("resize", () => {
        return;
      });
      window.removeEventListener("scroll", () => {
        return;
      });
    };

  }, []);

  return (
    <>
      <Container fluid="xxl">
        <Navbar />
        <MobileCheckoutBar />
        <UnlimitedCourses />
        <Statistics />
        <MarketingBoxes />
        <ArabicTrainers />
        <Faq />
        <Footer />
      </Container>
    </>
  );
}
