import React, { useState,useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import 'videojs-font/css/videojs-icons.css';
import { useDispatch, useSelector } from "react-redux";  
// import videojsPlaylistPlugin from "node_modules/videojs-playlist/dist/videojs-playlist.js";
// import qualityselector from "node_modules/videojs-qualityselector/dist/videojs-qualityselector.min.js";

export const VideoJS = ( props:any ) => {
  const courseDetailsData = useSelector((state:any) => state.courseDetailsData);
  const [courseDetails, setCourseDetails] = useState<any>([]);
  const userStatus = useSelector((state:any) => state.userAuthentication);
  const [playListLinks, setPlayListLinks] = useState<any>([])

  const videoRef = React.useRef(null);
  const playerRef:any = React.useRef(null);
  const { options, onReady } = props;

  useEffect(() => {
    // make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

//       videojs.registerPlugin("playlist", videojsPlaylistPlugin);
      const player:any = playerRef.current = videojs(videoElement, options, () => {
        console.log("player is ready");
        onReady && onReady(player);
      });
      let listOfLinks:any = [];

      courseDetailsData.data.syllabus.map((syl:any)=>{
        syl.lectures.map((lec:any)=>{
          listOfLinks.push(lec.links["640"]);
          setPlayListLinks(listOfLinks);
          // console.log("playListLinks",playListLinks);
          
        })
      })

//      player.playlist([
//         {
//           sources: [
//             {
//               src:
//                 "https://player.vimeo.com/external/457769206.hd.mp4?s=5496a31f6e5eeb574a53a1974de90ae70d37aeee&profile_id=175"
//             }
//           ],
//           poster: "http://media.w3.org/2010/05/sintel/poster.png"
//         },
//         {
//           sources: [
//             {
//               src:
//                 "https://player.vimeo.com/external/457772218.hd.mp4?s=2f87edc2a51519b756a7a80af1cb8b1d51c8de07&profile_id=175"
//             }
//           ],
//           poster: "http://media.w3.org/2010/05/bunny/poster.png"
//         },
//       ]);
//      player.playlist.autoadvance(0); 
    
        
    } else {
      // you can update player here [update player through props]
      // const player = playerRef.current;
      // player.autoplay(options.autoplay);
      // player.src(options.sources);
    }
  }, [options, videoRef]);

  useEffect(() => {

    setCourseDetails(courseDetailsData.data || []);
    // console.log("courseDetailsData.data",courseDetailsData.data);
    
    
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
