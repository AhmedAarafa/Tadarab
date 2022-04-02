/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from "./unlimited-courses.module.css";
import { Row,Col,Form,Button } from "react-bootstrap";
import { SearchIcon, ChevronLeftIcon } from "common/Icons/Icons";
import Router, { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";   
import { setCheckoutType } from "configurations/redux/actions/checkoutType";

export default function UnlimitedCourses() {

  const dispatch = useDispatch();
  const Router = useRouter();

  const handleSubscriptionBtn = () => {
    dispatch(setCheckoutType("subscription"));
    Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}checkout/payment/?checkout_type=subscription`);
  }

  return (
      <Row className={styles["unlimited-courses"]}>
          <Col xs={12}>

              <div className={styles["unlimited-courses__logo"]}>
                <img src="/images/TadarabUnlimited.png" alt="TadarabUnlimited" />
              </div>

              <div className={styles["unlimited-courses__title"]}>
                  <div>
                    تعلم مهارات جديدة كل يوم بلا حدود جميع الدورات التدريبية باشتراك شهري واحد.     
                  </div>
              </div>
              <Button onClick={()=>{handleSubscriptionBtn()}} className={styles["unlimited-courses__subscribe-btn"]}  id="monthly-subscribe-btn"
              >
              <span className={styles["monthly-subscription__subscribe-btn-box__btn__monthly-subscribe"]}>
              جرب تدرب بلا حدود مجاناَ
              </span>  
          

              </Button>
              <div className={styles["unlimited-courses__exp-days"]}>
              ٧  أيام تجربة مجانية ثم ٩ دك شهرياَ 
              </div>
              
              {/* <div className={styles["unlimited-courses__brief"]}>
              تدرب الآن من اي مكان وفي اي وقت
              </div>

              <div className={styles["unlimited-courses__search-bar-container"]}>
              
              <Form.Control
                type="text"
                placeholder="ادخل ايميلك هنا..."
                className={
                  styles["unlimited-courses__search-bar-container__search-bar"]
                }
              />
              <Button className={styles["unlimited-courses__search-bar__btn"]}>
              ابدأ الآن
              <ChevronLeftIcon color="#fff"/>
              </Button>
            </div>

              <div className={styles["unlimited-courses__subscription-value"]}>
              قيمة الاشتراك
              <span>100</span>
              دك/شهرياً
              </div> */}

          </Col>
          {/* <Col xs={12} sm={6}>
              <div className={styles["unlimited-courses__video-container"]}>
                  <img src="/images/VideoPlaceholder.png" alt="promo video" />
              </div>
          </Col> */}
      </Row>
  )
}
