import React from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
// import styles from "./tplayer.module.css";
// import styles2 from "./tadarab-skin.module.css";


/*import "./tplayer.css";
import "./tadarab-skin.css";*/

export const VideoJS = ( props ) => {

  const videoRef = React.useRef(null);
  const playerRef = React.useRef(null);
  const { options, onReady, onError } = props;

  React.useEffect(() => {
    // make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      const player = playerRef.current = videojs(videoElement, options, () => {
        try{
          onReady && onReady(player);
        }catch(e){
          onReady && onError(player);
        }
      });
    } else {
      // you can update player here [update player through props]
    }
  }, [options, videoRef]);

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
      <video ref={videoRef} controls className="video-js vjs-big-play-centered" data-setup='{playbackRates: [0.5,1,1.5,2] }' />
    </div>
  );
}

export default VideoJS;