import React, { useState,useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import 'videojs-font/css/videojs-icons.css';
import { useDispatch, useSelector } from "react-redux";  

export const VideoJS = ( props:any ) => {
  const courseDetailsData = useSelector((state:any) => state.courseDetailsData);
  const [courseDetails, setCourseDetails] = useState<any>([]);

  const videoRef = React.useRef(null);
  const playerRef:any = React.useRef(null);
  const { options, onReady } = props;

  useEffect(() => {
    // make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      const player:any = playerRef.current = videojs(videoElement, options, () => {
        console.log("player is ready");
        onReady && onReady(player);
      });
    } else {
      // you can update player here [update player through props]
      // const player = playerRef.current;
      // player.autoplay(options.autoplay);
      // player.src(options.sources);
    }
  }, [options, videoRef]);

  useEffect(() => {

    setCourseDetails(courseDetailsData.data || []);
    
  }, [courseDetailsData]);

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div data-vjs-player>
       {courseDetailsData.data == undefined ? 
            <></>
            :
            <video ref={videoRef} poster={courseDetailsData.data.course_details.image} className="video-js vjs-big-play-centered" />
          
            }
      
    </div>
  );
}

export default VideoJS;