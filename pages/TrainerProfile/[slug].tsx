import React,{ useState, useEffect } from "react";
import Navbar from "common/Navbar/Navbar";
import TrainerProfilePage from "modules/Trainer profile/Trainer profile page/TrainerProfilePage";
import { Container } from "react-bootstrap";
import { axiosInstance } from "configurations/axios/axiosConfig";
import { useDispatch, useSelector } from "react-redux";
import { setTrainerProfileData } from "configurations/redux/actions/trainerProfileData"; 
import { Trainer } from "_models/Trainer";
import { useRouter } from 'next/router';

export default function TrainerProfile() {
  const dispatch = useDispatch();
  const Router = useRouter();
  const { slug } = Router.query;

  useEffect(() => {

    if(Router.query.slug){

        axiosInstance
        .get(`trainers/${slug}/?country_code=${localStorage.getItem("countryCode")}`)
        .then(function (response:any) {
          const data:Trainer = response.data.data;
            dispatch(setTrainerProfileData(data));
        })
        .catch(function (error) {
          console.log(error); 
        });
    }
      
    }, [Router.query]);

  return (
    <>
      <Container fluid="xxl">
        <Navbar />
        <TrainerProfilePage />
      </Container>
    </>
  );
}
