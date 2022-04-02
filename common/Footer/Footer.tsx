/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import styles from "./footer.module.css";
import  {ChevronLeftIcon,DownloadIcon,FacebookIcon,YoutubeIcon,InstagramIcon,TwitterIcon}  from "common/Icons/Icons";
import Link from "next/link";

export default function FooterSection() {
  return(
   <>
   <footer>

   <Row className={styles["footer"]}>

     <Col xs={{span:12,order:3}} sm={{span:6,order:1}}>
          <div  className={styles[ "footer__inquiries-box"]}>
            <div  className={ styles[ "footer__inquiries-box__trainer-img"]}>
              <img src="/images/Alaa.HEIC" alt="trainer image" />
            </div>
            <div  className={styles[ "footer__inquiries-box__inquiry"]}>
              <div  className={ styles[ "footer__inquiries-box__inquiry__title"]}>
               هل لديك سؤال؟
              </div>
              <div  className={styles[ "footer__inquiries-box__inquiry__breif"]}>
              اترك سؤالك وستتلقى الرد في أقرب وقت ممكن
              </div>
            </div>
          </div>
          <div >
            <Form.Control
              id="contact-us-form"
              type="text"
              placeholder="ارسل استفسارك هنا..."
              className={styles["footer__inquiry-field"]}
            />
          </div>
          <div className={styles["footer__name-email-fields-box"]}>
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
           <Button className={styles["footer__send-btn"]}>ارسل الآن</Button>
          </div>
     </Col>
     <Col xs={{span:12,order:2}} sm={{span:3,order:2}}>
       <ul className={styles["footer__training-courses-list"]}>
        <Link href="/courses?filter_type=all">
          <li>دورات تدريبية</li>
        </Link>
        <Link href="/courses?filter_type=best-seller">
         <li>الأكثر مبيعاً</li>
        </Link>
        <Link href="/courses?filter_type=latest">
         <li>أحدث الدورات</li>
        </Link>
         {/* <li>العروض</li> */}
         <Link href="/topic/family-2">
          <li>الاسرة</li>
          </Link>
          <Link href="/topic/talents">
          <li>فن وهوايات</li>
          </Link>
          <Link href="/topic/health">
          <li>الصحة</li>
          </Link>
          <Link href="/topic/technology">
          <li>تكنولوجيا</li>
          </Link>
          <Link href="/topic/business">
          <li>ريادة الأعمال</li>
          </Link>
         {/* <li>الإستشارات</li> */}
         {/* <li>المدربين</li> */}
       </ul>
     </Col>
     {/* <Col xs={{span:12,order:3}} sm={{span:2,order:3}}>
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
     </Col> */}
     <Col xs={{span:12,order:1}} sm={{span:3,order:4}}>
       <div className={styles["footer__communications-box"]}>

       <div className={styles["footer__logo"]}>
         <img src="/images/logo.svg" alt="Tadarab logo" />
       </div>
       <div className={styles["footer__cross-platforms"]}>
         <div>قريباً علي أجهزة الانرويد والايفون</div>
         <img src="/images/app-store.png" alt="App store" />
         <img src="/images/google-play.png" alt="Google play" />
       </div>
       <div className={styles["footer__pay-box"]}>
       <div>وسائل الدفع</div>
         <img src="/images/Mastercard.png" alt="Master card" />
         <img src="/images/Visa_inc.png" alt="Visa" />
         <img src="/images/knet.png" alt="Knet" />
       </div>
       </div>
     </Col>


     <Col xs={{span:12,order:5}} className={styles["footer__contacts-box"]}>
       <div className={styles["footer__contacts-box__contacts"]}>
         <a rel="noreferrer" href="https://www.instagram.com/tadarab/" target="_blank">

         <InstagramIcon color="#fff"/>
         </a>
         <a rel="noreferrer" href="https://www.youtube.com/c/Tadarab" target="_blank">

         <YoutubeIcon color="#fff"/>
        </a>
        <a rel="noreferrer" href="https://www.facebook.com/tadarabonline" target="_blank">    

         <FacebookIcon color="#fff"/>
        </a>

        <a rel="noreferrer" href="https://twitter.com/tadarab" target="_blank">    
         <TwitterIcon color="#fff"/>

        </a>


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
