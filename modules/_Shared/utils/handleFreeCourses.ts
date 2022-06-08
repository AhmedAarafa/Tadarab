import { axiosInstance } from "configurations/axios/axiosConfig"; 
import Router from "next/router";

export function handleFreeCourses(course: any) {
  axiosInstance
    .post(`payments/free-courses/?country_code=null`, { item_id: course.id })
    .then((response: any) => {
      console.log(response);
      Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}course/${course.slug}`);
    })
    .catch((error: any) => {
      console.log("error", error);
    });
}
