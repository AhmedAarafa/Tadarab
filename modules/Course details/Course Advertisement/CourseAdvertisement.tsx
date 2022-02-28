/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React,{ useEffect,useState} from 'react'
import styles from "./course-advertisement.module.css";
import VideoPlayer from 'react-video-js-player';
import VideoJS from './videojs'
import { useDispatch, useSelector } from "react-redux";  
// import videojs from  "node_modules/videojs-playlist/dist/videojs-playlist.js";
import ReactPlayer from 'react-player'

export default function CourseAdvertisement() {
  const courseDetailsData = useSelector((state:any) => state.courseDetailsData);
  const userStatus = useSelector((state:any) => state.userAuthentication);
  const [courseDetails, setCourseDetails] = useState<any>([]);
  
    const playerRef = React.useRef(null);
    const videoJsOptions:any = {
        autoplay: false,
        controls: true,
        responsive: true,
        fluid: true,
        sources: []
      }
    
      const handlePlayerReady = (player:any) => {
        playerRef.current = player;
    
        // you can handle player events here
        player.on('waiting', () => {
          console.log('player is waiting');
        });
    
        player.on('dispose', () => {
          console.log('player will dispose');
        });
      };

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
            <div className={styles["course-ad__course-ad-video"]}>
              {/* <div className={styles["course-ad__course-ad-video__text"]}>شاهد إعلان الدورة</div> */}
              
              <VideoJS id="videoPlayer" options={{
                autoplay: false,
                controls: true,
                responsive: true,
                fluid: true,
                sources: [{
                  src: courseDetailsData.data?.promo_video_url,
              }]
              }} onReady={handlePlayerReady} />
              {/* <ReactPlayer playIcon={<img src="/images/play.svg"/>}
              config={{
                file: { 
                  attributes: { 
                    poster: courseDetailsData.data.course_details.image
                  } 
                } 
              }}
                pip={true} controls={true} url={[
                  "https://player.vimeo.com/external/457959992.hd.mp4?s=fc37002109188d47df8e7312dc5ec664e703ace6&profile_id=174",
                  "https://player.vimeo.com/external/457959992.hd.mp4?s=fc37002109188d47df8e7312dc5ec664e703ace6&profile_id=174"
                ]} /> */}
            </div>
            }

        </div> 
            
        </>
    )
}
