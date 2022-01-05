/* eslint-disable @next/next/no-img-element */
import React ,{ useEffect } from "react";
import styles from "./trainer-info.module.css";
import {scrollspyHandler} from "./utils"

export default function TrainerInfo() {
  useEffect(() => {
    window.addEventListener("resize" , ()=>{
      scrollspyHandler();
     });
   scrollspyHandler();
  }, []);
  return (
    <>
      <div  className={styles["trainer-info-section"]}>
        <div id="trainer-info" className={styles["trainer-info-section__scrollspy-helper"]}></div>
        <div className={styles["trainer-info-section__trainer-box"]}>
          <div className={styles["trainer-info-section__trainer-img"]}>
            <img src="/images/trainer img.png" alt="trainer image" />
          </div>
          <div className={styles["trainer-info-section__trainer-info"]}>
            <div className={styles["trainer-info-section__trainer-info__name"]}>
              أ/ مروة عبدالله
            </div>
            <div
              className={styles["trainer-info-section__trainer-info__title"]}
            >
              فنانة تشكيلية ومعلمة للرسم
            </div>
            <div
              className={
                styles["trainer-info-section__trainer-info__courses-number-box"]
              }
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="1.688rem" height="1rem" viewBox="0 0 26.666 16">
                 <path id="courses_num" data-name="courses num" d="M25.935,67.714,14.313,64.143a3.328,3.328,0,0,0-1.95,0L.741,67.714a.981.981,0,0,0,0,1.9l2.026.622a3.283,3.283,0,0,0-.745,1.954A1.286,1.286,0,0,0,1.916,74.4L.852,79.186A.667.667,0,0,0,1.5,80H3.84a.667.667,0,0,0,.651-.811L3.427,74.4a1.282,1.282,0,0,0-.075-2.188,1.966,1.966,0,0,1,.862-1.53l8.149,2.5a3.332,3.332,0,0,0,1.95,0l11.623-3.571A.981.981,0,0,0,25.935,67.714ZM14.7,74.46a4.664,4.664,0,0,1-2.733,0L5.929,72.6l-.591,4.727c0,1.473,3.582,2.667,8,2.667s8-1.194,8-2.667L20.747,72.6Z" transform="translate(-0.005 -63.998)" fill="#b4b4b4"/>
              </svg>

              <span> 5 </span>
              دورات
              <span
                className={
                  styles[
                    "trainer-info-section__trainer-info__courses-number-box__separator"
                  ]
                }
              >
                {" "}
                -{" "}
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="1.438rem" height="1rem" viewBox="0 0 22.857 16">
                  <path id="students_num" data-name="students num" d="M3.429,38.857a2.286,2.286,0,1,0-2.286-2.286A2.288,2.288,0,0,0,3.429,38.857Zm16,0a2.286,2.286,0,1,0-2.286-2.286A2.288,2.288,0,0,0,19.429,38.857ZM20.571,40H18.286a2.279,2.279,0,0,0-1.611.664,5.224,5.224,0,0,1,2.682,3.907h2.357a1.142,1.142,0,0,0,1.143-1.143V42.286A2.288,2.288,0,0,0,20.571,40Zm-9.143,0a4,4,0,1,0-4-4A4,4,0,0,0,11.429,40Zm2.743,1.143h-.3a5.523,5.523,0,0,1-4.893,0h-.3a4.115,4.115,0,0,0-4.114,4.114v1.029A1.715,1.715,0,0,0,6.286,48H16.571a1.715,1.715,0,0,0,1.714-1.714V45.257A4.115,4.115,0,0,0,14.171,41.143Zm-7.989-.479A2.279,2.279,0,0,0,4.571,40H2.286A2.288,2.288,0,0,0,0,42.286v1.143a1.142,1.142,0,0,0,1.143,1.143H3.5a5.237,5.237,0,0,1,2.686-3.907Z" transform="translate(0 -32)" fill="#b4b4b4"/>
              </svg>

              <span> 12,930 </span>
              متعلم
            </div>
          </div>
        </div>
        <p className={styles["trainer-info-section__para"]}>
            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
            القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
            التي يقرأها هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة
            ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص
        </p>
        <div className={styles["trainer-info-section__view-trainer-account"]}>
            <span>اعرض حساب المدرب</span>
            <svg id="more" xmlns="http://www.w3.org/2000/svg" width="0.375rem" height="0.625rem" viewBox="0 0 8.39 14">
                 <path id="Path_12841" data-name="Path 12841" d="M11.567,6.006a1.346,1.346,0,0,1,.229-.183L17.222.4A1.356,1.356,0,0,1,19.14,2.315L14.467,6.988l4.7,4.7A1.356,1.356,0,1,1,17.247,13.6L11.8,8.153a1.407,1.407,0,0,1-.229-2.147Z" transform="translate(-11.172 -0.001)" fill="#af151f"/>
            </svg>

        </div>
      </div>
    </>
  );
}
