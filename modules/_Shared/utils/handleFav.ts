import { axiosInstance } from "configurations/axios/axiosConfig";
import { getData } from "./getData";
import { tokenValidationCheck } from "modules/_Shared/utils/tokenValidationCheck";

export function handleFav(course: any, endPoint: string) {
  if (course.is_in_favorites == false) {
    return axiosInstance
      .post(`users/favorites`, { course_id: course.id })
      .then((response: any) => {
        if (tokenValidationCheck(response)) {
          return getData(endPoint).then(function (response) {
            return response;
          });
        }
      })
      .catch((error: any) => {
        console.log("error", error);
      });
  } else {
    return axiosInstance
      .delete(`users/favorites`, { data: { course_id: course.id } })
      .then((response: any) => {
        if (tokenValidationCheck(response)) {
          return getData(endPoint).then(function (response) {
            return response;
          });
        }
      })
      .catch((error: any) => {
        console.log("error", error);
      });
  }
}
