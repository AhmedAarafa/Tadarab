import * as Yup from "yup";

export const signinValidationRules = {
    email: Yup.string()
    .required("خانة البريد الإلكتروني مطلوبه"),
   
    password: Yup.string()
    .required("خانة كلمة المرور مطلوبه"),
  }