/* eslint-disable @next/next/no-img-element */
import React,{ useState } from 'react';
import styles from "./trainers-opinions.module.css";
import { Row,Col,Button } from "react-bootstrap";
import { contactUsHandler } from "modules/_Shared/utils/contactUs";
import { TadarabVideoPlayer } from "common/TPlayer/TPlayer";


export default function TrainersOpinions() {
  var source = 
    [{
    src: 'https://player.vimeo.com/progressive_redirect/playback/646574244/rendition/1080p?loc=external&signature=7e0eb8fac56302d1b36a911d8a64b0fb2a57fc9b19935abbffac1b38a5a96283',
    type: 'video/mp4',
  }];
  
  /* ,
  "poster": "https://i.vimeocdn.com/video/640539932_1280x720.jpg?r=pad",
  "title": "Promotion video",
  "description": "Promotion video is free"; */

  // const [myVideo, setMyVideo] = useState("https://www.youtube.com/watch?v=-X4ikwUwxoE")
  return (
    <Row className={styles["trainers-opinions"]}>
      <Col xs={12}>
        <div className={styles["trainers-opinions__title"]}>
        شاهد ماذا قال أكبر المدربين بالخليج والوطن العربى عن منصة تدرب
        </div>

        <div className={styles["trainers-opinions__video"]}>
          <TadarabVideoPlayer Source={source} Poster={"https://s3.me-south-1.amazonaws.com/tadarab2.0-bahrain/join-as-trainer-video.png"} />
        </div> 

        <div className={styles["trainers-opinions__inquiries-section"]}>
          <div>تحتاج مساعدة أو استفسار؟</div>
          <div>فريق عمل تدرب يساعدك بداية من إعداد المحتوى حتى التسويق لدورتك التدريبية</div>
          <Button onClick={()=>{contactUsHandler()}}>تواصل معانا</Button>
        </div>
      </Col>
      
    </Row>
  )
}