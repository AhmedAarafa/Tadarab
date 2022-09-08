import axios from "axios";
import {toggleLoader} from "modules/_Shared/utils/toggleLoader";
import TadarabFBPixel from "modules/_Shared/utils/fbPixel";

export const 
axiosInstance = axios.create({
  // baseURL: "https://developer.tadarab.com/wp-json/api/",
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

let tadarabFbPixel = new TadarabFBPixel();
let fbp = tadarabFbPixel.getCookie('_fbp');
let fbc = tadarabFbPixel.getCookie('_fbc');

// Add a request interceptor
axiosInstance.interceptors.request.use(

  function (config: any) {
    // Do something before request is sent
    // show loader
    // config.params = config.params || {};
    // config.params['auth'] = 'token';
    // toggleLoader("show");
    function randomString(length:any, chars:any) {
      let result = '';
      for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
      return result;
  }

    config.headers['X-Fbp'] =  fbp;
    config.headers['X-Fbc'] =  fbc;

  if(localStorage.getItem("X-Session-Id")){
    config.headers['X-Session-Id'] =  `${localStorage.getItem("X-Session-Id")}`;
    config.headers['X-User-Id'] =  0;
  }else{
    let rString = randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
    config.headers['X-Session-Id'] =  rString;
    localStorage.setItem("X-Session-Id",rString);
    config.headers['X-User-Id'] =  0;
  }

    if(localStorage.getItem("token")){
      config.headers.Authorization =  `Bearer ${localStorage.getItem("token")}`;
      config.headers['X-User-Id'] =  localStorage.getItem("user_id");
      
    }
    
    return config;
  },
  function (error: any) {
    // Do something with request error
    // toggleLoader("show");

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
    // toggleLoader("hide");


    return response;
  },
  function (error: any) {
    // console.log(error.response.data);
    // toggleLoader("hide");

  
    return error.response;
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // return Promise.reject(error); 
  }
);
