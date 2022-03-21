import axios from "axios";
import { useDispatch } from "react-redux";
import { setErrorText } from "../redux/actions/errorText";
import {toggleLoader} from "modules/_Shared/utils/toggleLoader";

export const axiosInstance = axios.create({
  // baseURL: "https://developer.tadarab.com/wp-json/api/",
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});


// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config: any) {
    // Do something before request is sent
    // show loader
    // config.params = config.params || {};
    // config.params['auth'] = 'token';
    // console.log(config);
    toggleLoader("show");
    if(localStorage.getItem("token")){
      config.headers.Authorization =  `Bearer ${localStorage.getItem("token")}`;
    }
    return config;
  },
  function (error: any) {
    // Do something with request error
    toggleLoader("show");

    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response: any) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // hide loader
    // console.log("response", response);
    // response.data.push("test")
    toggleLoader("hide");


    return response;
  },
  function (error: any) {
    // console.log(error.response.data);
    toggleLoader("hide");

  
    return error.response;
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // return Promise.reject(error);
  }
);
