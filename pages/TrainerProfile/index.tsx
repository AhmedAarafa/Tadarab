import React,{ useState, useEffect } from "react";
import Navbar from "common/Navbar/Navbar";
import TrainerProfilePage from "modules/Trainer profile/Trainer profile page/TrainerProfilePage";
import { Container } from "react-bootstrap";
import { axiosInstance } from "configurations/axios/axiosConfig";
import { useDispatch, useSelector } from "react-redux";
import { setTrainerProfileData } from "configurations/redux/actions/trainerProfileData"; 
import { Trainer } from "_models/Trainer";

export default function TrainerProfile() {
  const dispatch = useDispatch();

  useEffect(() => {
      axiosInstance
      .get(`trainers/10253/?country_code=${localStorage.getItem("countryCode")}`)
      .then(function (response:any) {
        const data:Trainer = response.data.data;
          dispatch(setTrainerProfileData(data));
      })
      .catch(function (error) {
        console.log(error); 
      });
      
    }, []);

  return (
    <>
      <Container fluid="xxl">
        <Navbar />
        <TrainerProfilePage />
      </Container>
    </>
  );
}
