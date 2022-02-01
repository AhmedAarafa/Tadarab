/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import styles from "./footer.module.css";
import  {ChevronLeftIcon,DownloadIcon,FacebookIcon,YoutubeIcon,InstagramIcon,TwitterIcon}  from "common/Icons/Icons";

export default function FooterSection() {
  return(
   <>
   <footer>

   <Row className={styles["footer"]}>

     <Col xs={{span:12,order:4}} sm={{span:5,order:1}}>
          <div  className={styles[ "footer__inquiries-box"]}>
            <div  className={ styles[ "footer__inquiries-box__trainer-img"]}>
              <img src="/images/Alaa.HEIC" alt="trainer image" />
            </div>
            <div  className={styles[ "footer__inquiries-box__inquiry"]}>
              <div  className={ styles[ "footer__inquiries-box__inquiry__title"]}>
               هل لديك سؤال؟
              </div>
              <div  className={styles[ "footer__inquiries-box__inquiry__breif"]}>
               أسألنا وهنجاوبك في أقرب وقت ممكن
              </div>
            </div>
          </div>
          <div>
            <Form.Control
              type="text"
              placeholder="ارسل استفسارك هنا..."
              className={styles["footer__inquiry-field"]}
            />
          </div>
          <div>
            <Form.Control
              type="text"
              placeholder="الأسم"
              className={styles["footer__name-field"]}
            />
             <Form.Control
              type="text"
              placeholder="البريد الإلكتروني"
              className={styles["footer__email-field"]}
            />
          </div>
          <div>
           <Button className={styles["footer__send-btn"]}>أرسل الأن</Button>
          </div>
     </Col>
     <Col xs={{span:12,order:2}} sm={{span:2,order:2}}>
       <ul className={styles["footer__training-courses-list"]}>
         <li>الدورات التدريبية</li>
         <li>الأكثر مبيعاً</li>
         <li>العروض</li>
         <li>أحدث الدورات</li>
         <li>الفنون</li>
         <li>الصحة</li>
         <li>التدريب</li>
         <li>الإستشارات</li>
         <li>المدربين</li>
       </ul>
     </Col>
     <Col xs={{span:12,order:3}} sm={{span:2,order:3}}>
       <ul className={styles["footer__about-tadarab-list"]}>
         <li>عن تدرب</li>
         <li>من نحن؟</li>
         <li>انضم كمدرب</li>
         <li>الشروط والأحكام</li>
         <li>الأسئلة الشائعة</li>
         <li>حقوق الملكية</li>
         <li>الدعم الفني</li>
         <li>تواصل معانا</li>
         <li>الأخبار</li>
       </ul>
     </Col>
     <Col xs={{span:12,order:1}} sm={{span:3,order:4}}>
       <div className={styles["footer__communications-box"]}>

       <div className={styles["footer__logo"]}>
         <img src="/images/logo.svg" alt="Tadarab logo" />
       </div>
       <div className={styles["footer__cross-platforms"]}>
         <div>متاح الآن علي أجهزة الانرويد والايفون</div>
         <img src="/images/app-store.png" alt="App store" />
         <img src="/images/google-play.png" alt="Google play" />
       </div>
       <div className={styles["footer__pay-box"]}>
       <div>وسائل الدفع</div>
         <img src="/images/Mastercard.png" alt="Master card" />
         <img src="/images/visa_inc.png" alt="Visa" />
         <img src="/images/Knet.png" alt="Knet" />
       </div>
       </div>
     </Col>


     <Col xs={{span:12,order:5}} className={styles["footer__contacts-box"]}>
       <div className={styles["footer__contacts-box__contacts"]}>
         <InstagramIcon color="#fff"/>

         <YoutubeIcon color="#fff"/>

         <FacebookIcon color="#fff"/>

         <TwitterIcon color="#fff"/>

       </div>
       <div className={styles["footer__contacts-box__all-rights-reserved"]}>
       جميع الحقوق محفوظة. منصة تدرب. © 2021 
       </div>
     </Col>
   </Row>
   </footer>

  </>
  )
}
