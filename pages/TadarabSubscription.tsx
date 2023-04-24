import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { axiosInstance } from "configurations/axios/axiosConfig";
import { useDispatch, useSelector } from "react-redux";
import { setHomePageData } from "configurations/redux/actions/homePageData";
import TadarabFBPixel from "modules/_Shared/utils/fbPixel";
import { FBPixelEventsHandler } from 'modules/_Shared/utils/FBPixelEvents';
import useResize from "custom hooks/useResize";
import { toggleLoader } from "modules/_Shared/utils/toggleLoader";
import dynamic from 'next/dynamic';
import {subscriptionCounter} from "modules/_Shared/utils/subscriptionCounter";
import Router, { useRouter } from "next/router";
import Faq from "common/Subscription faqs/FAQ/Faq";
import withAuth from "configurations/auth guard/AuthGuard";
import LatestCourses from "modules/Tadarab subscription/Latest courses/LatestCourses";

const NotificationBar = dynamic(() => import("common/Notification bar/NotificationBar"));
const UnlimitedCourses = dynamic(() => import("modules/Tadarab subscription/Unlimited courses/UnlimitedCourses"));
const Statistics = dynamic(() => import("common/Statistics/Statistics"));
const MarketingBoxes = dynamic(() => import("modules/Tadarab subscription/Marketing boxes/MarketingBoxes"));
const ArabicTrainers = dynamic(() => import("modules/Tadarab subscription/Arabic trainers/ArabicTrainers"));
const MobileCheckoutBar = dynamic(() => import("modules/Course details/Mobile checkout bar/MobileCheckoutBar"));

function TadarabSubscription() {
  const userAuthState = useSelector((state: any) => state.userAuthentication);
  const [subscriptionData, setSubscriptionData] = useState({});

  const dispatch = useDispatch();
  const homePageData = useSelector((state: any) => state.homePageData);
  const themeState = useSelector((state: any) => state.themeState.theme);

  if(userAuthState.isUserAuthenticated && userAuthState.isSubscribed){
    Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}my-account`);
  }
  useEffect(() => {
 
    toggleLoader("show");
    subscriptionCounter();
    let addToCartBtn: any = null;
    if (document.documentElement.clientWidth >= 576) {
      const MobileCheckoutBar: any = document.getElementById("mobile-checkout-bar");
      MobileCheckoutBar ? MobileCheckoutBar.style.cssText = `display:none` : null;
      window.addEventListener("scroll", function () {
        MobileCheckoutBar ? MobileCheckoutBar.style.cssText = `display:none` : null;
      });
    } else {
      window.addEventListener("scroll", function () {
        addToCartBtn = document.getElementById("monthly-subscribe-btn");
        const MobileCheckoutBar: any = document.getElementById("mobile-checkout-bar");
        if (addToCartBtn) {
          if (window.scrollY >= addToCartBtn.offsetTop) {
            MobileCheckoutBar ? MobileCheckoutBar.style.cssText = `display:flex;align-items:center;justify-content:space-evenly;bottom:0;`: null;
          } else if (window.scrollY < addToCartBtn.offsetTop) {
            MobileCheckoutBar ? MobileCheckoutBar.style.cssText = `display:none` : null;
          }
        }
      });
    }

    window.addEventListener("resize", () => {
      if (document.documentElement.clientWidth >= 576) {
        const MobileCheckoutBar: any = document.getElementById("mobile-checkout-bar");
        addToCartBtn = null;
        MobileCheckoutBar ? MobileCheckoutBar.style.cssText = `display:none` : null;
        window.addEventListener("scroll", function () {
          MobileCheckoutBar ? MobileCheckoutBar.style.cssText = `display:none` : null;
        });
      } else {
        window.addEventListener("scroll", function () {
          addToCartBtn = document.getElementById("monthly-subscribe-btn");
          if (addToCartBtn) {
            const MobileCheckoutBar: any = document.getElementById("mobile-checkout-bar");
            if (window.scrollY >= addToCartBtn?.offsetTop) {
              MobileCheckoutBar ? MobileCheckoutBar.style.cssText = `display:flex;align-items:center;justify-content:space-evenly;bottom:0;`: null;
            } else if (window.scrollY < addToCartBtn?.offsetTop) {
              MobileCheckoutBar ? MobileCheckoutBar.style.cssText = `display:none` : null;
            }
          }
        });
      }
    });


    const countryCode: any = localStorage.getItem("countryCode");
    axiosInstance
      .get(`home`)
      .then(function (response: any) {
        dispatch(setHomePageData(response.data.data));
        setSubscriptionData(response?.data?.data);
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

  useEffect(() => {
    if(userAuthState.isUserAuthenticated && userAuthState.isSubscribed){
      Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}my-account`);
  }
  }, [userAuthState])
  

  return (
    <>
      <Container data-theme={themeState} fluid="xxl" style={{backgroundColor:"var(--tadarab-light-bg)"}}>
        {/* <MobileCheckoutBar data={subscriptionData}/> */}
        <UnlimitedCourses />
        <LatestCourses />
        <Statistics />
        <MarketingBoxes />
        <ArabicTrainers />
        <Faq />
      </Container>
    </>
  );
}

export default withAuth(TadarabSubscription);
