/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import styles from "./footer.module.css";

export default function FooterSection() {
  return(
   <>
   <footer>

   <Row className={styles["footer"]}>
     <Col xs={5}>
          <div  className={styles[ "footer__inquiries-box"]}>
            <div  className={ styles[ "footer__inquiries-box__trainer-img"]}>
              <img src="/images/trainer img.png" alt="trainer image" />
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
     <Col xs={2}>
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
     <Col xs={2}>
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
     <Col xs={3}>
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


     <Col xs={12} className={styles["footer__contacts-box"]}>
       <div className={styles["footer__contacts-box__contacts"]}>
         <svg xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="1.25rem" viewBox="0 0 20.004 20">
  <path id="instagram" d="M9.929,36.7a5.128,5.128,0,1,0,5.128,5.128A5.12,5.12,0,0,0,9.929,36.7Zm0,8.461a3.334,3.334,0,1,1,3.334-3.334,3.34,3.34,0,0,1-3.334,3.334Zm6.534-8.671a1.2,1.2,0,1,1-1.2-1.2A1.193,1.193,0,0,1,16.463,36.487Zm3.4,1.214a5.919,5.919,0,0,0-1.616-4.191A5.958,5.958,0,0,0,14.053,31.9c-1.651-.094-6.6-.094-8.252,0a5.949,5.949,0,0,0-4.191,1.611A5.938,5.938,0,0,0,0,37.7C-.1,39.348-.1,44.3,0,45.949a5.919,5.919,0,0,0,1.616,4.191A5.965,5.965,0,0,0,5.8,51.755c1.651.094,6.6.094,8.252,0a5.919,5.919,0,0,0,4.191-1.616,5.958,5.958,0,0,0,1.616-4.191C19.953,44.3,19.953,39.353,19.859,37.7ZM17.726,47.72a3.375,3.375,0,0,1-1.9,1.9c-1.317.522-4.44.4-5.9.4s-4.583.116-5.9-.4a3.375,3.375,0,0,1-1.9-1.9c-.522-1.317-.4-4.44-.4-5.9s-.116-4.583.4-5.9a3.375,3.375,0,0,1,1.9-1.9c1.317-.522,4.44-.4,5.9-.4s4.583-.116,5.9.4a3.375,3.375,0,0,1,1.9,1.9c.522,1.317.4,4.44.4,5.9S18.248,46.408,17.726,47.72Z" transform="translate(0.075 -31.825)" fill="#fff"/>
</svg>

         <svg xmlns="http://www.w3.org/2000/svg" width="1.75rem" height="1.25rem" viewBox="0 0 28.445 20">
  <path id="youtube" d="M42.783,67.129A3.574,3.574,0,0,0,40.268,64.6C38.05,64,29.155,64,29.155,64s-8.895,0-11.113.6a3.574,3.574,0,0,0-2.515,2.531,40.242,40.242,0,0,0,0,13.782A3.521,3.521,0,0,0,18.042,83.4c2.218.6,11.113.6,11.113.6s8.895,0,11.113-.6a3.521,3.521,0,0,0,2.515-2.491,40.242,40.242,0,0,0,0-13.782ZM26.246,78.25V69.791L33.68,74.02Z" transform="translate(-14.933 -64)" fill="#fff"/>
</svg>

         <svg id="facebook" xmlns="http://www.w3.org/2000/svg" width="0.688rem" height="1.25rem" viewBox="0 0 10.813 20">
  <path id="Path_1016" data-name="Path 1016" d="M32.483,0,29.889,0a4.555,4.555,0,0,0-4.8,4.922V7.191H22.485a.408.408,0,0,0-.408.408v3.288a.408.408,0,0,0,.408.408h2.608v8.3A.408.408,0,0,0,25.5,20h3.4a.408.408,0,0,0,.408-.408V11.3h3.049a.408.408,0,0,0,.408-.408V7.6a.408.408,0,0,0-.408-.408H29.31V5.268c0-.925.22-1.394,1.425-1.394h1.747a.408.408,0,0,0,.408-.408V.412A.408.408,0,0,0,32.483,0Z" transform="translate(-22.077)" fill="#fff"/>
</svg>

         <svg id="twitter" xmlns="http://www.w3.org/2000/svg" width="1.563rem" height="1.25rem" viewBox="0 0 24.615 20">
  <g id="Group_170" data-name="Group 170" transform="translate(0 0)">
    <path id="Path_1017" data-name="Path 1017" d="M24.615,50.368a10.523,10.523,0,0,1-2.908.8,5.018,5.018,0,0,0,2.22-2.789,10.085,10.085,0,0,1-3.2,1.222A5.046,5.046,0,0,0,12,53.048a5.2,5.2,0,0,0,.117,1.151,14.284,14.284,0,0,1-10.4-5.278,5.048,5.048,0,0,0,1.551,6.745,4.984,4.984,0,0,1-2.28-.622V55.1a5.07,5.07,0,0,0,4.043,4.958,5.037,5.037,0,0,1-1.323.166,4.462,4.462,0,0,1-.955-.086,5.094,5.094,0,0,0,4.715,3.515A10.14,10.14,0,0,1,1.208,65.8,9.45,9.45,0,0,1,0,65.735,14.207,14.207,0,0,0,7.742,68,14.264,14.264,0,0,0,22.1,53.64c0-.223-.008-.438-.018-.652A10.067,10.067,0,0,0,24.615,50.368Z" transform="translate(0 -48)" fill="#fff"/>
  </g>
</svg>

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
