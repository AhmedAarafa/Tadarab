import React,{ useState, useEffect } from "react";
import Navbar from "common/Navbar/Navbar";
import TrainerProfilePage from "modules/Trainer profile/Trainer profile page/TrainerProfilePage";
import { Container } from "react-bootstrap";
import { axiosInstance } from "configurations/axios/axiosConfig";
import { useDispatch, useSelector } from "react-redux";
import { setTrainerProfileData } from "configurations/redux/actions/trainerProfileData"; 
import { Trainer } from "_models/Trainer";
import Router,{ useRouter } from 'next/router';
import { GAProductimpressionEventHandler } from "modules/_Shared/utils/GAEvents";
import TadarabFBPixel from "modules/_Shared/utils/fbPixel";
import { FBPixelEventsHandler } from "modules/_Shared/utils/FBPixelEvents";


export default function TrainerProfile() {
  const dispatch = useDispatch();
  const router = useRouter();
  
  
  useEffect(() => {
    window.addEventListener("scroll" , ()=>{
      GAProductimpressionEventHandler("trainer-courses__course-card");
    })
    
    return () => {
      window.removeEventListener("scroll", ()=>{
        return;
      })
    }
  }, [])

  useEffect(() => {
    const { slug } = router.query;

    if(router.query.slug){

        axiosInstance
        .get(`trainers/${slug}/?country_code=${localStorage.getItem("countryCode")}`)
        .then(function (response:any) {
          const data:Trainer = response.data.data;
            dispatch(setTrainerProfileData(data));
            FBPixelEventsHandler(response.data.fb_tracking_events,null);

        })
        .catch(function (error) {
          console.log(error); 
        });
    }
    
      
    }, [router.query]);


    

  return (
    <>
      <Container fluid="xxl">
        <Navbar />
        <TrainerProfilePage />
      </Container>
    </>
  );
}
