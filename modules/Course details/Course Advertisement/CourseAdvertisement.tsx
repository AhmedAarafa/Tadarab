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
import { DocumentIcon, DurationIcon, DevicesIcon, CertifIcon, CalendarIcon, WatchLiveOrRecordedIcon } from "common/Icons/Icons";
import { TadarabVideoPlayer } from "common/TPlayer/TPlayer";
import datesArray from "./Dates.json";
import { tConvert } from "modules/_Shared/utils/dateFormatHandler";

export default function CourseAdvertisement(theOption: any) {
  const courseDetailsData = useSelector((state: any) => state.courseDetailsData);
  const userStatus = useSelector((state: any) => state.userAuthentication);
  const [courseDetails, setCourseDetails] = useState<any>([]);
  const [isMobileView, setIsMobileView] = useState(false);
  const [toDisplayValues, setToDisplayValues] = useState<any>([]);


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
      <div className={styles["course-ad"]}>
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
                  styles["course-ad__details-list__item"]
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.25rem"
                  height="1.25rem"
                  viewBox="0 0 22 22"
                >
                  <g id="time" transform="translate(-444 -392)">
                    <path
                      id="clock-solid"
                      d="M22.231,21.528h0l-.887,1.109a.71.71,0,0,1-1,.111h0l-2.972-2.205a1.774,1.774,0,0,1-.665-1.385v-6.9a.71.71,0,0,1,.71-.71h1.419a.71.71,0,0,1,.71.71v6.387l2.573,1.885A.71.71,0,0,1,22.231,21.528Z"
                      transform="translate(436.871 384.355)"
                      fill="#c1121f"
                    />
                    <path
                      id="clock-solid-2"
                      data-name="clock-solid"
                      d="M19,8A11,11,0,1,0,30,19,11,11,0,0,0,19,8Z"
                      transform="translate(436 384)"
                      fill="#c1121f"
                      opacity="0.25"
                    />
                  </g>
                </svg>

                <span>{Math.round(courseDetailsData?.data?.total_duration / 60 / 60)} ساعات تدريبية</span>

              </div>
              <div
                className={
                  styles["course-ad__details-list__item"]
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.25rem"
                  height="1.25rem"
                  viewBox="0 0 22 23.851"
                >
                  <g id="files" transform="translate(-528 -458.66)">
                    <rect
                      id="Rectangle_4153"
                      data-name="Rectangle 4153"
                      width="11.124"
                      height="1.186"
                      transform="translate(535.905 466.989)"
                      fill="#b20016"
                    />
                    <rect
                      id="Rectangle_4154"
                      data-name="Rectangle 4154"
                      width="8.396"
                      height="1.186"
                      transform="translate(538.632 469.952)"
                      fill="#b20016"
                    />
                    <rect
                      id="Rectangle_4155"
                      data-name="Rectangle 4155"
                      width="6.421"
                      height="1.186"
                      transform="translate(540.607 472.915)"
                      fill="#b20016"
                    />
                    <path
                      id="Path_15441"
                      data-name="Path 15441"
                      d="M550.044,464.014v13.35a2.07,2.07,0,0,1-2.039,2.078H534.269a2.07,2.07,0,0,1-2.039-2.078V460.738a2.064,2.064,0,0,1,2.039-2.078H544.69Z"
                      transform="translate(-0.044 0)"
                      fill="#b20016"
                      opacity="0.25"
                    />
                    <path
                      id="Path_15442"
                      data-name="Path 15442"
                      d="M550.174,464.014H544.82V458.66Z"
                      transform="translate(-0.174 0)"
                      fill="#b20016"
                    />
                    <path
                      id="Path_15443"
                      data-name="Path 15443"
                      d="M545.269,479.485v1.089a1.979,1.979,0,0,1-1.979,1.979H529.979A1.979,1.979,0,0,1,528,480.574V464.739a1.973,1.973,0,0,1,1.979-1.979h2.207v14.647a2.07,2.07,0,0,0,2.039,2.078Z"
                      transform="translate(0 -0.042)"
                      fill="#b20016"
                    />
                  </g>
                </svg>

                <span>مرفقات حصرية جاهزة للتحميل</span>
              </div>
              <div
                className={
                  styles["course-ad__details-list__item"]
                }
              >
              </div>
              <div
                className={
                  styles["course-ad__details-list__item"]
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.25rem"
                  height="1.25rem"
                  viewBox="0 0 22 15.073"
                >
                  <g id="responsive" transform="translate(-199.397 -148.21)">
                    <path
                      id="Path_15424"
                      data-name="Path 15424"
                      d="M213.759,152.589l.036,7.487H203.217V149.083h14.776v3.435Z"
                      transform="translate(-0.244 -0.056)"
                      fill="#c1121f"
                      opacity="0.12"
                    />
                    <path
                      id="Union_8"
                      data-name="Union 8"
                      d="M218.57,151.683h-4.26a1.4,1.4,0,0,0-1.423,1.386V161.9a1.4,1.4,0,0,0,1.4,1.386h4.278a1.409,1.409,0,0,0,1.423-1.386v-8.828A1.4,1.4,0,0,0,218.57,151.683Zm-2.125,10.907a.7.7,0,0,1-.712-.693v-.009a.689.689,0,0,1,.693-.683h.037a.7.7,0,0,1,.693.693A.714.714,0,0,1,216.445,162.59Zm2.135-2.088h-4.26v-7.433h4.26Zm-1.432-12.292h-13.49a1.409,1.409,0,0,0-1.423,1.386v9.034h-1.91a.929.929,0,0,0-.927.927,1.846,1.846,0,0,0,1.854,1.854h11.862v-2.78h-9.456V149.6h13.49v2.331h1.423V149.6A1.4,1.4,0,0,0,217.147,148.21Z"
                      fill="#c1121f"
                    />
                    <path
                      id="Union_8-2"
                      data-name="Union 8"
                      d="M222.309,159.34h-1.432v2.78h.506a1.846,1.846,0,0,0,1.854-1.854A.929.929,0,0,0,222.309,159.34Z"
                      transform="translate(-1.839 -0.71)"
                      fill="#c1121f"
                    />
                    <rect
                      id="Rectangle_4156"
                      data-name="Rectangle 4156"
                      width="5.617"
                      height="8.426"
                      transform="translate(213.421 152.424)"
                      fill="#c1121f"
                      opacity="0.35"
                    />
                  </g>
                </svg>

                <span>المشاهدة من أي موبايل او لابتوب</span>
              </div>
              <div
                className={
                  styles["course-ad__details-list__item"]
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.25rem"
                  height="1.25rem"
                  viewBox="0 0 22 17.962"
                >
                  <g id="certificate" transform="translate(-452.163 -226.188)">
                    <g
                      id="Page-1"
                      transform="translate(452.163 226.188)"
                      opacity="0.25"
                    >
                      <g id="icon-138-certificate">
                        <path
                          id="certificate-2"
                          data-name="certificate"
                          d="M460.413,241.771h11.913a1.833,1.833,0,0,0,1.838-1.828V228.022a1.835,1.835,0,0,0-1.838-1.834H454a1.833,1.833,0,0,0-1.838,1.828h0v11.922A1.835,1.835,0,0,0,454,241.771h6.412Z"
                          transform="translate(-452.163 -226.188)"
                          fill="#c2121e"
                        />
                      </g>
                    </g>
                    <rect
                      id="Rectangle_4153"
                      data-name="Rectangle 4153"
                      width="15.97"
                      height="1.198"
                      transform="translate(455.678 230.181)"
                      fill="#c2121e"
                    />
                    <rect
                      id="Rectangle_4154"
                      data-name="Rectangle 4154"
                      width="8.484"
                      height="1.198"
                      transform="translate(463.164 233.175)"
                      fill="#c2121e"
                    />
                    <rect
                      id="Rectangle_4155"
                      data-name="Rectangle 4155"
                      width="6.488"
                      height="1.198"
                      transform="translate(465.16 236.169)"
                      fill="#c2121e"
                    />
                    <g id="Page-1-2" transform="translate(456.642 239.848)">
                      <g id="icon-138-certificate-2">
                        <path
                          id="Path_15435"
                          data-name="Path 15435"
                          d="M459.6,240.08v4.3l-1.477-1.477-1.477,1.477v-4.3a3,3,0,0,0,2.954,0Z"
                          transform="translate(-456.65 -240.08)"
                          fill="#c2121e"
                        />
                      </g>
                    </g>
                    <path
                      id="certificate-3"
                      d="M457.979,240.166a2.855,2.855,0,1,0-2.855-2.855h0A2.855,2.855,0,0,0,457.979,240.166Z"
                      transform="translate(0.14 -0.68)"
                      fill="#c2121e"
                      opacity="0.4"
                      style={{ mixBlendMode: "normal", isolation: "isolate" }}
                    />
                  </g>
                </svg>

                <span>شهادة إتمام اون لاين معتمدة</span>
              </div>
            </div>}
            {isMobileView && theOption?.liveWebinarDetails?.type == "webinar" &&
              <>
                <div className={styles["monthly_subscription__live-details-list"]}>
                  <div>
                    <CalendarIcon />
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
                    <DurationIcon />
                  </div>
                  {` ${theOption?.allLiveWebinar?.start_time && tConvert(theOption?.allLiveWebinar?.start_time)} `}
                  بتوقيت الكويت والسعودية
                </div>
                <div className={styles["monthly_subscription__live-details-list"]}>
                  <div>
                    <WatchLiveOrRecordedIcon />
                  </div>
                  شاهد الدورة بث مباشر او مسجلة بعد انتهاء البث

                </div>
                <div className={styles["monthly_subscription__live-details-list"]}>
                  <div>

                    <CertifIcon />
                  </div>
                  شهادة إتمام اون لاين معتمدة
                </div>
                <div className={styles["monthly_subscription__live-details-list"]}>
                  <div>
                    <DocumentIcon />
                  </div>
                  مرفقات حصرية جاهزة للتحميل
                </div>
                <div className={styles["monthly_subscription__live-details-list"]}>
                  <div>
                    <DevicesIcon />
                  </div>
                  تابع الدورة من اي لابتوب او موبايل
                </div>

              </>
            }
          </>
        }

      </div>

    </>
  )
}
