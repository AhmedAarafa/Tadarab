/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import styles from "./trainer-info.module.css";
import { useSelector } from "react-redux";
import { LearnersIcon, CoursesNumberIcon, DropDownIcon } from "common/Icons/Icons";

export default function TrainerInfo() {
  const trainerProfileData = useSelector((state: any) => state.trainerProfileData);
  const [trainerProfile, setTrainerProfile] = useState({});
  const themeState = useSelector((state: any) => state.themeState.theme);

  useEffect(() => {
    setTrainerProfile(trainerProfileData?.data?.data || {});
  }, [trainerProfileData]);

  return (
    <div data-theme={themeState} className={styles["trainer-profile__trainer-info-col"]}>

      <div className={styles["trainer-profile__trainer-info-col__trainer-info-box"]}>

        <div className={styles["trainer-profile__trainer-info-col__trainer-info-box__trainer-img"]}>
          <img loading="lazy" src={trainerProfileData.data?.data?.image} alt="trainer image" />
        </div>

        <div className={styles["trainer-profile__trainer-info-col__trainer-info-box__trainer-info"]}>
          <div>{trainerProfileData.data?.data?.title}</div>
          <h1>{trainerProfileData.data?.data?.name_ar}</h1>
          <div>{trainerProfileData.data?.data?.designation}</div>
        </div>
      </div>

      <div className={styles["trainer-profile__trainer-info-col__stastics-box"]}>
        <div className={styles["trainer-profile__trainer-info-col__stastics-box__stastics"]}>
          <CoursesNumberIcon color="#af151f" />
          <div className={styles["trainer-profile__trainer-info-col__stastics-box__stastics__number-of-courses"]}>
            <div>عدد الدورات</div>
            <div>{trainerProfileData.data?.data?.courses?.length}</div>
          </div>
        </div>
        <div className={styles["trainer-profile__trainer-info-col__stastics-box__stastics"]}>
          <LearnersIcon color="#af151f" />

          <div className={styles["trainer-profile__trainer-info-col__stastics-box__stastics__number-of-learners"]}>
            <div>عدد المتعلمين</div>
            <div>
              {
                parseInt(trainerProfileData.data?.data?.buyers_count)
              }
            </div>
          </div>
        </div>
      </div>

      <div className={styles["trainer-profile__trainer-info-col__brief-about-trainer-box"]}>
        <div className={styles["trainer-profile__trainer-info-col__brief-about-trainer-box__brief-about-trainer"]}>
          <h2 className={styles["trainer-profile__trainer-info-col__brief-about-trainer-box__brief-about-trainer__title"]}>نبذة عن المدرب</h2>
          <p className={styles["trainer-profile__trainer-info-col__brief-about-trainer-box__brief-about-trainer__para"]}
            dangerouslySetInnerHTML={{ __html: trainerProfileData.data?.data?.bio }}
          ></p>
          <input type="checkbox" className={styles["trainer-profile__trainer-info-col__brief-about-trainer-box__brief-about-trainer__read-more"]} />
        </div>
      </div>
    </div>
  );
}
