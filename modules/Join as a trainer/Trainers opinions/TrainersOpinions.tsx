/* eslint-disable @next/next/no-img-element */
import React,{ useState } from 'react';
import styles from "./trainers-opinions.module.css";
import { Row,Col,Button } from "react-bootstrap";
import ReactPlayer from 'react-player';

export default function TrainersOpinions() {
  const [myVideo, setMyVideo] = useState("https://player.vimeo.com/progressive_redirect/playback/646574244/rendition/1080p?loc=external&signature=7e0eb8fac56302d1b36a911d8a64b0fb2a57fc9b19935abbffac1b38a5a96283")
  // const [myVideo, setMyVideo] = useState("https://www.youtube.com/watch?v=-X4ikwUwxoE")
  return (
    <Row className={styles["trainers-opinions"]}>

      <Col xs={12}>
        <div className={styles["trainers-opinions__title"]}>
        شاهد ماذا قال اكبر المدربين بالخليج والوطن العربى على منصة تدرب
        </div>
        <div className={styles["trainers-opinions__video"]}>

         {/* <img src="/images/VideoPlaceholder2.png" alt="promo video" /> */}
         {/* <video controls autoPlay >
          <source src={myVideo} type="video/mp4"></source>
        </video> */}
        {/* <ReactPlayer playing
      width="100%"
      height="100%"
      controls={true} url={myVideo} /> */}

      <video controls={true} >
        <source type="video/mp4" src={myVideo} />
      </video>
        
        </div>
        <div className={styles["trainers-opinions__inquiries-section"]}>
          <div>تحتاج مساعدة أو استفسار؟</div>
          <div>فريق عمل تدرب يساعدك بداية من أعداد المحتوى حتى التسويق لدورتك التدريبية</div>
          <Button>تواصل معانا</Button>
        </div>
      </Col>
      
    </Row>
  )
}
