/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import styles from "./course-advertisement.module.css";
import { useDispatch, useSelector } from "react-redux";
// import videojs from  "node_modules/videojs-playlist/dist/videojs-playlist.js";
import useResize from 'custom hooks/useResize';
import "video.js/dist/video-js.css";
import Link from "next/link";
import {
  DocumentIcon, DurationIcon, DevicesIcon, CertifIcon, CalendarIcon, WatchLiveOrRecordedIcon,
  DarkModeCalendarIcon, DarkModeWatchLiveOrRecordedIcon
} from "common/Icons/Icons";
import { TadarabVideoPlayer } from "common/TPlayer/TPlayer";
import datesArray from "./Dates.json";
import { tConvert } from "modules/_Shared/utils/dateFormatHandler";
import { Button } from "react-bootstrap"
import SignupPopup from "common/Signup popup/SignupPopup";

export default function CourseAdvertisement(theOption: any) {
  const courseDetailsData = useSelector((state: any) => state.courseDetailsData);
  const userStatus = useSelector((state: any) => state.userAuthentication);
  const [courseDetails, setCourseDetails] = useState<any>([]);
  const [isMobileView, setIsMobileView] = useState(false);
  const [toDisplayValues, setToDisplayValues] = useState<any>([]);
  const themeState = useSelector((state: any) => state.themeState.theme);
  const [isSignupModalVisible, setIsSignupModalVisible] = useState(false);

  const viewportWidthDetector = () => {
    if (window.innerWidth >= 576) {
      setIsMobileView(false);
    } else {
      setIsMobileView(true);
    }
  }
  useResize(viewportWidthDetector);

  useEffect(() => {

    if (theOption?.liveWebinarDetails?.full_date) {

      // function timerHandler(date: any) {

      setInterval(() => {
        // get total seconds between the times
        let delta: any = Math.abs(theOption?.liveWebinarDetails?.full_date - (Math.floor(Date.now() / 1000)));

        // calculate (and subtract) whole days
        let days: any = Math.floor(delta / 86400);
        delta -= days * 86400;

        // calculate (and subtract) whole hours
        let hours: any = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;

        // calculate (and subtract) whole minutes
        let minutes: any = Math.floor(delta / 60) % 60;
        delta -= minutes * 60;

        // what's left is seconds
        let seconds: any = delta; // in theory the modulus is not required

        days = days.toString().padStart(2, 0);
        hours = hours.toString().padStart(2, 0);
        minutes = minutes.toString().padStart(2, 0);
        seconds = seconds.toString().padStart(2, 0);

        setToDisplayValues([days, hours, minutes, seconds]);

        return { days, hours, minutes, seconds }
      }, 1000);


      // }
    }

  }, [theOption.liveWebinarDetails])

  useEffect(() => {
    setCourseDetails(courseDetailsData.data || []);

  }, [courseDetailsData]);


  return (
    <>
      <div className={styles["course-ad"]} data-theme={themeState} style={{ backgroundColor: "var(--tadarab-light-bg)" }}>
        {
          ((theOption?.liveWebinarDetails?.webinar_type) && (theOption?.liveWebinarDetails?.webinar_type != 'soon')) &&
          <i className={`${styles["tadarab-icon"]} ${styles["live-white"]}`}></i>
        }
        <ul className={styles["course-ad__list"]}>
          {
            courseDetailsData?.data?.course_details?.categories.slice(0, 3).map((cat: any, i: number) => {
              return (
                <Link key={i} href={`/topic/${cat.slug}`}>
                  <li >{cat?.title}</li>
                </Link>
              )
            })
          }
        </ul>
        {courseDetailsData?.data == undefined ?
          <></>
          :
          <>
            <div id="video-player-container" className={`${styles["course-ad__course-ad-video"]} ${((theOption.postType !== 'webinar')) && styles["video-player-gradient"]}`}>
              {
                ((theOption) && (theOption.postType === 'webinar') && (theOption.postSrc != '')) ?
                  <>
                    {
                      ((theOption?.liveWebinarDetails?.webinar_type) && (theOption?.liveWebinarDetails?.webinar_type == 'soon')) ?
                        <img loading="lazy" src={theOption?.liveWebinarDetails?.image} alt="" />
                        :
                        <div className='embed-responsive embed-responsive-16by9' id='webinar-embed'>
                          <iframe src={theOption.liveWebinarDetails.streamUrl} allow="autoplay; fullscreen; picture-in-picture" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} frameBorder="0" allowFullScreen></iframe>
                        </div>
                    }
                  </>
                  :
                  <>
                    <TadarabVideoPlayer />
                  </>
              }

            </div>

            <h1 className={styles["course-ad__course-title"]}>
              {courseDetailsData?.data?.course_details?.title}
            </h1>
            <div className={styles["course-ad__course-description"]}>
              {courseDetailsData?.data?.course_details?.details}
            </div>
            {isMobileView && theOption?.liveWebinarDetails?.type !== "webinar" && <div className={styles["course-ad__details-list"]}>
              <div
                className={
                  styles["course-ad__details-list__item"]}>
                <DurationIcon color={themeState == "light" ? "#c1121f" : "#f5f5f5"} />

                <span>{Math.round(courseDetailsData?.data?.total_duration / 60 / 60)} ساعات تدريبية</span>

              </div>
              <div
                className={
                  styles["course-ad__details-list__item"]}>
                <DocumentIcon color={themeState == "light" ? "#b20016" : "#f5f5f5"} />

                <span>مرفقات حصرية جاهزة للتحميل</span>
              </div>
              <div
                className={
                  styles["course-ad__details-list__item"]}>
              </div>
              <div
                className={
                  styles["course-ad__details-list__item"]}>
                <DevicesIcon color={themeState == "light" ? "#c1121f" : "#f5f5f5"} />

                <span>المشاهدة من أي موبايل او لابتوب</span>
              </div>
              <div
                className={
                  styles["course-ad__details-list__item"]}>
                <CertifIcon color={themeState == "light" ? "#c2121e" : "#f5f5f5"} />

                <span>شهادة إتمام اون لاين معتمدة</span>
              </div>
            </div>}
            {isMobileView && theOption?.liveWebinarDetails?.type == "webinar" &&
              <>
                <div className={styles["monthly_subscription__live-details-list"]}>
                  <div>
                    {
                      themeState == "light" ?
                        <CalendarIcon />
                        :
                        <DarkModeCalendarIcon />
                    }
                  </div>
                  {theOption?.allLiveWebinar?.arabic_date &&
                    datesArray.map((date: any, i: number) => {
                      return (
                        theOption?.allLiveWebinar?.arabic_date.includes(date.strangeDate)
                        &&
                        [theOption?.allLiveWebinar?.arabic_date.replace(date.strangeDate, date.gregorianDate).split(' ')[2],
                        theOption?.allLiveWebinar?.arabic_date.replace(date.strangeDate, date.gregorianDate).split(' ')[1],
                        theOption?.allLiveWebinar?.arabic_date.replace(date.strangeDate, date.gregorianDate).split(' ')[0]].join(' ')
                      )
                    })
                  }
                </div>
                <div className={styles["monthly_subscription__live-details-list"]}>
                  <div>
                    <DurationIcon color={themeState == "light" ? "#c1121f" : "#f5f5f5"} />
                  </div>
                  {` ${theOption?.allLiveWebinar?.start_time && tConvert(theOption?.allLiveWebinar?.start_time)} `}
                  بتوقيت الكويت والسعودية
                </div>
                <div className={styles["monthly_subscription__live-details-list"]}>
                  <div>
                    {
                      themeState == "light" ?
                        <WatchLiveOrRecordedIcon />
                        :
                        <DarkModeWatchLiveOrRecordedIcon />
                    }
                  </div>
                  شاهد الدورة بث مباشر او مسجلة بعد انتهاء البث

                </div>
                <div className={styles["monthly_subscription__live-details-list"]}>
                  <div>

                    <CertifIcon color={themeState == "light" ? "#c2121e" : "#f5f5f5"} />
                  </div>
                  شهادة إتمام اون لاين معتمدة
                </div>
                <div className={styles["monthly_subscription__live-details-list"]}>
                  <div>
                    <DocumentIcon color={themeState == "light" ? "#b20016" : "#f5f5f5"} />
                  </div>
                  مرفقات حصرية جاهزة للتحميل
                </div>
                <div className={styles["monthly_subscription__live-details-list"]}>
                  <div>
                    <DevicesIcon color={themeState == "light" ? "#c1121f" : "#f5f5f5"} />
                  </div>
                  تابع الدورة من اي لابتوب او موبايل
                </div>

                {
                  userStatus.isUserAuthenticated == false &&
                  <>
                    <Button className={styles["live-webinar__signup-free"]} onClick={() => { setIsSignupModalVisible(true) }}>
                      سجل الآن مجاناً
                    </Button>
                    <div>
                      سجل الآن لمشاهدة البث المباشر مجاناً
                    </div>
                  </>
                }
              </>
            }
          </>
        }

      </div>

      <SignupPopup isSignupModalVisible={isSignupModalVisible} setIsSignupModalVisible={setIsSignupModalVisible} />
    </>
  )
}
