import React,{ useEffect } from "react";
import Navbar from "common/Navbar/Navbar";
import UnlimitedCourses from "modules/Tadarab subscription/Unlimited courses/UnlimitedCourses";
import Statistics from "modules/Tadarab subscription/Statistics/Statistics";
import MarketingBoxes from "modules/Tadarab subscription/Marketing boxes/MarketingBoxes";
import ArabicTrainers from "modules/Tadarab subscription/Arabic trainers/ArabicTrainers";
import Faq from "modules/Tadarab subscription/FAQ/Faq";
import { Container } from "react-bootstrap";
import { axiosInstance } from "configurations/axios/axiosConfig";
import { useDispatch, useSelector } from "react-redux";
import { setHomePageData } from "configurations/redux/actions/homePageData"; 
import TadarabFBPixel from "modules/_Shared/utils/fbPixel";
import { FBPixelEventsHandler } from 'modules/_Shared/utils/FBPixelEvents';
import MobileCheckoutBar from "modules/Course details/Mobile checkout bar/MobileCheckoutBar";
import useResize from "custom hooks/useResize";

export default function TadarabSubscription() {

  const dispatch = useDispatch();
  const homePageData = useSelector((state:any) => state.homePageData);
  


  useEffect(() => {

    const mobileCheckoutBar:any = document.getElementById("mobile-checkout-bar");
    let addToCartBtn:any = null;

    if(document.documentElement.clientWidth >= 576){
      mobileCheckoutBar.style.cssText=`display:none`;
      window.addEventListener("scroll", function () {
        mobileCheckoutBar.style.cssText=`display:none`;
      });
    }
    else {
      window.addEventListener("scroll", function () {
      addToCartBtn = document.getElementById("monthly-subscribe-btn");

     if(addToCartBtn){
      
       if (window.scrollY >= addToCartBtn.offsetTop) {
         mobileCheckoutBar.style.cssText=`
         display:flex;
         align-items:center;
         justify-content:space-evenly;
         bottom:0;
         `
         
       }else if(window.scrollY < addToCartBtn.offsetTop){
       mobileCheckoutBar.style.cssText=`display:none`;
       } 
     }

      });
    }


    window.addEventListener("resize" , ()=>{

      if(document.documentElement.clientWidth >= 576){
        
     addToCartBtn = null;
      mobileCheckoutBar.style.cssText=`display:none`;
      window.addEventListener("scroll", function () {
      mobileCheckoutBar.style.cssText=`display:none`;
        });
      }
      else {
    
      window.addEventListener("scroll", function () {
       addToCartBtn = document.getElementById("monthly-subscribe-btn");

        if(addToCartBtn){

          if (window.scrollY >= addToCartBtn?.offsetTop) {
            mobileCheckoutBar.style.cssText=`
            display:flex;
            align-items:center;
            justify-content:space-evenly;
            bottom:0;
            `
          }else if(window.scrollY < addToCartBtn?.offsetTop){
          mobileCheckoutBar.style.cssText=`display:none`;
          }
        }

      });
      }
    });


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


        return () => {
          window.removeEventListener("resize",()=>{
            return;
          });
          window.removeEventListener("scroll",()=>{
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
      </Container>
    </>
  );
}
