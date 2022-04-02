/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import styles from "./course-advertisement.module.css";
import { useDispatch, useSelector } from "react-redux";
// import videojs from  "node_modules/videojs-playlist/dist/videojs-playlist.js";
// import ReactPlayer from 'react-player';
import useResize from 'custom hooks/useResize';
import TadarabVideoPlayer from "common/TPlayer/TPlayer"; 
// import "video.js/dist/video-js.css";


export default function CourseAdvertisement() {

  const courseDetailsData = useSelector((state: any) => state.courseDetailsData);
  const userStatus = useSelector((state: any) => state.userAuthentication);
  const [courseDetails, setCourseDetails] = useState<any>([]);
  const [isMobileView, setIsMobileView] = useState(false);

  const playerRef = React.useRef(null);
  const videoJsOptions: any = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: []
  }

  const handlePlayerReady = (player: any) => {
    playerRef.current = player;

    // you can handle player events here
    player.on('waiting', () => {
      console.log('player is waiting');
    });

    player.on('dispose', () => {
      console.log('player will dispose');
    });
  };

  const viewportWidthDetector =()=>{
    if( window.innerWidth >= 576 ){
      setIsMobileView(false);
    }else{
      setIsMobileView(true);
    }
  }
  useResize(viewportWidthDetector);

  useEffect(() => {
    
  }, [])
  

  useEffect(() => {

    setCourseDetails(courseDetailsData.data || []);
    // console.log("courseDetailsData.data",courseDetailsData);

  }, [courseDetailsData]);



  return (
    <>
      <div className={styles["course-ad"]}>
        <ul className={styles["course-ad__list"]}>
          <li>فنون</li>
          <li>الرسم</li>
          <li>تعليم الرسم والتلوين</li>
        </ul>
        {/* <div className={styles["course-ad__course-img"]}>
                <img src="/images/course2cropped.png" alt="course image" />
                <div className={styles["course-ad__course-img__watch-ad"]}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="3.125rem" height="3.125rem" viewBox="0 0 50 50">
                            <g id="play" transform="translate(-1 -1)">
                                <g id="Group_11421" data-name="Group 11421" transform="translate(1 1)">
                                <g id="Group_11420" data-name="Group 11420" transform="translate(0 0)">
                                    <path id="Path_13148" data-name="Path 13148" d="M26,1A25,25,0,1,0,51,26,25,25,0,0,0,26,1Zm9.308,26.378L20.881,35.706a1.424,1.424,0,0,1-2.136-1.234V17.815a1.424,1.424,0,0,1,2.137-1.234L35.309,24.91a1.425,1.425,0,0,1,0,2.467Z" transform="translate(-1 -1)" fill="#fff"/>
                                </g>
                                </g>
                            </g>
                        </svg>

                    </div>
                    <div>شاهد إعلان الدورة</div>
                </div>

            </div> */}

        {courseDetailsData.data == undefined ?
          <></>
          :
          <>

            <div className={styles["course-ad__course-ad-video"]}>

                <TadarabVideoPlayer dataPlaylist={true} accessPlaylist={false}/>

            </div>

              <h1 className={styles["course-ad__course-title"]}>
              
                {courseDetailsData?.data?.course_details?.title}
              </h1>
              <div className={styles["course-ad__course-description"]}>
              {courseDetailsData?.data?.course_details?.details}
              </div>
              { isMobileView && <div className={styles["course-ad__details-list"]}>
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

                  <span>٨ ساعات تدريبية</span>
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
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.25rem"
                    height="1.25rem"
                    viewBox="0 0 21.254 9.686"
                  >
                    <g id="infinity" transform="translate(-447.813 -266.913)">
                      <g id="infinity-solid">
                        <g id="Path_15426" data-name="Path 15426">
                          <path
                            id="Path_15436"
                            data-name="Path 15436"
                            d="M464.49,266.92h-.53a6.613,6.613,0,0,0-4.77,2.49l-.75.93-.74-.93a6.617,6.617,0,0,0-4.78-2.49,4.842,4.842,0,1,0-.52,9.67,4.506,4.506,0,0,0,.52,0,6.606,6.606,0,0,0,4.78-2.48l.74-.94.75.94a6.567,6.567,0,0,0,4.77,2.48,4.842,4.842,0,1,0,.53-9.67Zm-7.35,5.41c-.73,1-2.25,2.68-4.12,2.7a3.219,3.219,0,0,1-2.35-.67,3.269,3.269,0,0,1-1.26-2.18,3.236,3.236,0,0,1,.66-2.42,3.3,3.3,0,0,1,2.18-1.27,3.22,3.22,0,0,1,.76,0h.05c1.83,0,3.34,1.69,4.08,2.7l.43.57Zm7.51,2.69h-.03a2.69,2.69,0,0,1-.4.03c-.12,0-.24-.01-.36-.02-1.88-.03-3.39-1.7-4.12-2.7l-.41-.57.41-.57c.75-1.01,2.28-2.7,4.17-2.7a3.127,3.127,0,0,1,2.31.67,3.287,3.287,0,0,1-1.57,5.86Z"
                            fill="#c1121f"
                          />
                        </g>
                      </g>
                      <g
                        id="infinity-solid-2"
                        data-name="infinity-solid"
                        opacity="0.2"
                      >
                        <g id="Path_15426-2" data-name="Path 15426">
                          <path
                            id="Path_15437"
                            data-name="Path 15437"
                            d="M469.06,272.02a4.836,4.836,0,0,1-5.1,4.57,6.567,6.567,0,0,1-4.77-2.48l-.75-.94-.74.94a6.606,6.606,0,0,1-4.78,2.48,4.506,4.506,0,0,1-.52,0,4.842,4.842,0,0,1,.52-9.67,6.617,6.617,0,0,1,4.78,2.49l.74.93.75-.93a6.613,6.613,0,0,1,4.77-2.49h.53A4.848,4.848,0,0,1,469.06,272.02Z"
                            fill="#c1121f"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                  <span>امتلاك الدورة مدى الحياة</span> */}
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
          </>
        }

      </div>

    </>
  )
}
