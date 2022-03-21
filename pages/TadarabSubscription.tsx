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

export default function TadarabSubscription() {

  const dispatch = useDispatch();
  const homePageData = useSelector((state:any) => state.homePageData);
  
  useEffect(() => {
      const countryCode:any = localStorage.getItem("countryCode");
        axiosInstance
        .get(`home/?country_code=${localStorage.getItem("countryCode")}`)
        .then(function (response:any) {
            dispatch(setHomePageData(response.data.data));
        })
        .catch(function (error) {
          console.log(error); 
        });
        
      }, []);

  return (
    <>
      <Container fluid="xxl">
        <Navbar />
        <UnlimitedCourses />
        <Statistics />
        <MarketingBoxes />
        <ArabicTrainers />
        <Faq />
      </Container>
    </>
  );
}
