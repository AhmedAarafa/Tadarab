/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, memo } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import Image from 'next/image';
import styles from "./footer.module.css";
import { ChevronLeftIcon, DownloadIcon, FacebookIcon, YoutubeIcon, InstagramIcon, TwitterIcon } from "common/Icons/Icons";
import Link from "next/link";
import { axiosInstance } from "configurations/axios/axiosConfig";
import { setPaymentStep } from "configurations/redux/actions/paymentStep";
import { useDispatch, useSelector } from "react-redux";
import Router, { useRouter } from "next/router";

function FooterSection() {
  const [error, setError] = useState({ status: false, msg: "" });
  const userStatus = useSelector((state: any) => state.userAuthentication);
  const paymentStep = useSelector((state: any) => state.paymentStep);
  const dispatch = useDispatch();
  const router = useRouter();

  // console.log("paymentStep",paymentStep);
  
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (e.target[0].value == "" || e.target[1].value == "" || e.target[2].value == "") {
      setError({ status: true, msg: "جميع الحقول مطلوبه" });

    } else {
      axiosInstance
        .post(`contact-us`,
          {
            "name": e.target[1].value,
            "email": e.target[2].value,
            "message": e.target[0].value
          })
        .then((response: any) => {
          console.log(response);
          if (JSON.stringify(response.status).startsWith("2")) {

            setError({ status: false, msg: "تم ارسال استفسارك بنجاح" });
            const form: any = document.getElementById("contactusform");
            form.reset();
          } else {
            setError({ status: true, msg: response?.data?.data?.message });
          }

        })
        .catch((error: any) => {
          console.log(error);
        });

    }
  }

  useEffect(() => {

    if (error.msg !== "") {
      setTimeout(() => {
        setError({ status: false, msg: "" });
      }, 7000);
    }

  }, [error]);


  return (
    <>
      { !paymentStep && <footer>

        <Row className={styles["footer"]}>

          <Col xs={{ span: 12, order: 4 }} sm={{ span: 5, order: 1 }}>
            <div className={styles["footer__inquiries-box"]}>
              <div className={styles["footer__inquiries-box__trainer-img"]}>
                <img loading="lazy" src={"/images/hams.png"} alt="trainer image" />
              </div>
              <div className={styles["footer__inquiries-box__inquiry"]}>
                <div className={styles["footer__inquiries-box__inquiry__title"]}>
                  هل لديك سؤال؟
                </div>
                <div className={styles["footer__inquiries-box__inquiry__breif"]}>
                  اترك سؤالك وستتلقى الرد في أقرب وقت ممكن
                </div>
              </div>
            </div>
            <Form className={styles["footer__inquiries-form"]} onSubmit={() => { handleSubmit(event) }} id="contactusform">
              <div >
                <textarea
                  id="contact-us-form"
                  name="inquiry"
                  placeholder="ارسل استفسارك هنا..."
                  className={styles["footer__inquiry-field"]}
                />
              </div>
              <div className={styles["footer__name-email-fields-box"]}>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="الأسم"
                  className={styles["footer__name-field"]}
                />
                <Form.Control
                  type="text"
                  name="email"
                  placeholder="البريد الإلكتروني"
                  className={styles["footer__email-field"]}
                />
              </div>
              <div>
                <Button type="submit" className={styles["footer__send-btn"]}>ارسل الآن</Button>
              </div>

              {error.msg !== "" &&
                <div className={`${error.status ? styles["footer__info-msg--error"] : styles["footer__info-msg--success"]}`}>
                  {error.msg}
                </div>
              }
            </Form>
          </Col>
          <Col xs={{ span: 12, order: 2 }} sm={{ span: 2, order: 2 }}>
            <ul className={styles["footer__training-courses-list"]}>
              <Link href="/courses">
                <li>دورات تدريبية</li>
              </Link>
              <Link href="/courses?type=best-seller">
                <li>الأكثر مبيعاً</li>
              </Link>
              <Link href="/courses?type=latest">
                <li>أحدث الدورات</li>
              </Link>
              {/* <li>العروض</li> */}
              <Link href="/topic/family">
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
          <Col xs={{ span: 12, order: 3 }} sm={{ span: 2, order: 3 }}>
            <ul className={styles["footer__about-tadarab-list"]}>
              <li>عن تدرب</li>
              <Link href="/join-as-trainer">
                <li>انضم كمدرب</li>
              </Link>
              <Link href="/subscription">
                <li>تدرب بلا حدود</li>
              </Link>
              <Link href="/terms">
                <li>الشروط والأحكام</li>
              </Link>
              <Link href="/instructor-terms">
                <li> الشروط والأحكام للمدرب</li>
              </Link>
              <Link href="/cookies">
                <li>سياسة ملفات تعريف الارتباط</li>
              </Link>
              <Link href="/privacy">
                <li>السياسات والخصوصية</li>
              </Link>
              {userStatus.isSubscribed && <Link href="/unsubscribe">
                <li>نظام الاشتراكات</li>
              </Link>}
              {/* <li>الدعم الفني</li>
         <li>تواصل معانا</li>
         <li>الأخبار</li> */}
            </ul>
          </Col>
          <Col xs={{ span: 12, order: 1 }} sm={{ span: 3, order: 4 }}>
            <div className={styles["footer__communications-box"]}>

              <div className={styles["footer__logo"]}>
                <img loading="lazy" src={"/images/logo.svg"} alt="Tadarab logo" />
              </div>
              <div className={styles["footer__cross-platforms"]}>
                <div>قريباً على أجهزة الاندرويد والايفون</div>
                <img loading="lazy" src="/images/availableOnIos.png" alt="App store" />
                <img loading="lazy" src="/images/availableOnAndroid.png" alt="Google play" />
              </div>
              <div className={styles["footer__pay-box"]}>
                <div>وسائل الدفع</div>
                <img loading="lazy" src={"/images/Mastercard.png"} alt="Master card" />
                <img loading="lazy" src={"/images/visa.png"} alt="Visa" />
                <img loading="lazy" src={"/images/knet.png"} alt="Knet" />
                <img loading="lazy" src={"/images/paypal3.png"} alt="Paypal" />
                <img loading="lazy" src={"/images/mada.png"} alt="Mada" />
              </div>
              <div className={styles["footer__location"]}>
                <div>الموقع</div>
                <div>الكويت - مدينة الكويت ، المرقاب ، مجمع الوطنية الدور 4 مكتب 412</div>
              </div>
              {/* <div className={styles["footer__email"]}>
                <div>البريد الإلكتروني</div>
                <div>info@tadarab.com</div>
              </div> */}
            </div>
          </Col>


          <Col xs={{ span: 12, order: 5 }} className={styles["footer__contacts-box"]}>
            <div className={styles["footer__contacts-box__contacts"]}>
              <a rel="noreferrer" href="https://www.instagram.com/tadarab/" target="_blank">

                <InstagramIcon color="#fff" />
              </a>
              <a rel="noreferrer" href="https://www.youtube.com/c/Tadarab" target="_blank">

                <YoutubeIcon color="#fff" />
              </a>
              <a rel="noreferrer" href="https://www.facebook.com/tadarabonline" target="_blank">

                <FacebookIcon color="#fff" />
              </a>

              <a rel="noreferrer" href="https://twitter.com/tadarab" target="_blank">
                <TwitterIcon color="#fff" />

              </a>


            </div>
            <div className={styles["footer__contacts-box__all-rights-reserved"]}>
              جميع الحقوق محفوظة. منصة تدرب. © 2022
            </div>
          </Col>
        </Row>
      </footer>}

    </>
  )
}

export default memo(FooterSection);
