import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "configurations/axios/axiosConfig";
import Router from "next/router";
import { setHomePageData } from "configurations/redux/actions/homePageData";

const useAddToFav = (course?: any,queryParam?:any) => {
  const userStatus = useSelector((state:any) => state.userAuthetication);
  const homePageData = useSelector((state:any) => state.homePageData);
  // const [latestCourses, setLatestCourses] = useState([]);
  const dispatch = useDispatch();

    if(userStatus.isUserAuthenticated == true){ 
        if(course.is_in_favorites == false){
  
          axiosInstance
          .post(`users/favorites/?country_code=eg`, {"course_id" : course.id})
          .then((response:any) => {
            console.log("Response",response);
            axiosInstance
            .get("home/?country_code=eg")
            .then(async function (response:any) {
             await dispatch(setHomePageData(response.data.data.latest_courses));
              // return latestCourses;
            })
            .catch(function (error) {
              console.log(error);
              // return error;
            });
          })
          .catch((error:any)=>{
            console.log("error", error);
            // return error;
          });
        }else{
          axiosInstance
          .delete(`users/favorites/?country_code=eg`, { data:{"course_id" : course.id}})
          .then((response:any) => {
            console.log("Response",response);
            axiosInstance
            .get("home/?country_code=eg")
            .then(async function (response:any) {
             await dispatch(setHomePageData(response.data.data.latest_courses));
              // return latestCourses;
            })
            .catch(function (error) {
              console.log(error);
              // return error;
            });
          })
          .catch((error:any)=>{
            console.log("error", error);
            // return error;
          });
  
        }
      }else{
        Router.push({
          pathname: "http://localhost:3000/SignIn",
          query: { from: queryParam }
        })
  
};

// setLatestCourses([...homePageData]);
dispatch(setHomePageData([...homePageData]));
// return latestCourses;
}

export default useAddToFav; 
