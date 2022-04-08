import { axiosInstance } from "configurations/axios/axiosConfig";
import { getData } from "./getData"

export function handleFav(course:any,endPoint:string){
    if(course.is_in_favorites == false){

        return(axiosInstance
        .post(`users/favorites/?country_code=null`, {"course_id" : course.id})
        .then((response:any) => {
    
           return (getData(endPoint).then(function(response) {
             console.log(response);
             
              return response ;
            }))
        })
        .catch((error:any)=>{
          console.log("error", error);
        }))
      }
      else{
        return (axiosInstance
        .delete(`users/favorites/?country_code=null`, { data:{"course_id" : course.id}})
        .then((response:any) => {
          return (getData(endPoint).then(function(response) {
            return response ;
          }))
        })
        .catch((error:any)=>{
          console.log("error", error);
        }))

      }
      
}

