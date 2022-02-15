import { axiosInstance } from "configurations/axios/axiosConfig";

export function getData(endPoint:string){
    return (axiosInstance
    .get(endPoint)
    .then(function (response:any) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    }))
}