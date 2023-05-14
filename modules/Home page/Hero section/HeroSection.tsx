/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, memo } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import styles from "./hero-section.module.css";
import Router from "next/router";
import {  ChevronLeftIcon } from "common/Icons/Icons";
import { axiosInstance } from "configurations/axios/axiosConfig";
import { useDispatch, useSelector } from "react-redux";
import { setCheckoutType } from "configurations/redux/actions/checkoutType";

function HeroSection(props: any) { 
  const themeState = useSelector((state: any) => state.themeState.theme);
  const userStatus = useSelector((state: any) => state.userAuthentication);
  const [subValues, setSubValues] = useState<any>({});
  const dispatch = useDispatch();

  useEffect(() => {
    axiosInstance
      .get(`subscription/plans`)
      .then(function (response: any) {
        if (JSON.stringify(response.status).startsWith("2")) {
          setSubValues({
            sale_label: response?.data?.data?.subscription_plans[0]?.sale_label
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleSubscriptionBtn = () => {
    dispatch(setCheckoutType("subscription"));
    if (userStatus.isUserAuthenticated) {
      Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}checkout/payment/?checkout_type=subscription`);
    } else {
      Router.push({
        pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}sign-up`,
        query: { from_subscription: "checkout/payment/?checkout_type=subscription" }
      })
    }
  }

  return (
    <>
      <Row data-theme={themeState} className={styles["hero-section"]}>
        <Col xs={0} sm={{ span: 2, order: 'first' }}></Col>
        <Col xs={12} sm={{ span: 5, order: 'first' }}>
          <div className={styles["hero-section__container"]}>
            <h1 className={styles["hero-section__title"]}>
              تعلّم مهارات جديدة كل يوم بلا حدود
            </h1>
            <p className={styles["hero-section__para"]}>
              على يد أفضل الخبراء في
              {" "}
              {props?.targetedCountry == "sa" ? "المملكة العربية السعودية" : "الخليج"}
              {" "}
              والوطن العربي
            </p>

            {userStatus.isSubscribed == false &&
              <div className={styles["hero-section__sub-action"]}>

                <div>
                  شاهد اكثر من 1000 دورة باشتراك واحد  يبدأ من
                  <span>
                    {" "} {subValues?.sale_label}{" "}
                  </span>
                </div>
                <Button onClick={() => { handleSubscriptionBtn() }} id="homepage-sticky-checkout-bar">
                  أبدا التعلم
                  الآن
                  <ChevronLeftIcon color="#f5f5f5" />
                </Button>

              </div>} 
          </div>
        </Col>
        {/* <Col xs={{ span: 12, order: 'first' }} sm={5} className={styles["hero-section__col"]}>
          <img loading="lazy"
            src="/images/HeroSectionHero.png"
            alt="hero trainer"
            className={styles["hero-section__hero-img"]}
          />
        </Col> */}
      </Row>
    </>
  );
}

export default memo(HeroSection);
