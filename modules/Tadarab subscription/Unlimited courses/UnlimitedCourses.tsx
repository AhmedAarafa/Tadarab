/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from "./unlimited-courses.module.css";
import { Row,Col,Form,Button } from "react-bootstrap";
import { SearchIcon, ChevronLeftIcon } from "common/Icons/Icons";
import Router, { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";   
import { setCheckoutType } from "configurations/redux/actions/checkoutType";
import Image from 'next/image';

export default function UnlimitedCourses() {

  const dispatch = useDispatch();
  const Router = useRouter();
  const userStatus = useSelector((state:any) => state.userAuthentication.isUserAuthenticated);


  const handleSubscriptionBtn = () => {
    dispatch(setCheckoutType("subscription"));
    if(userStatus.isUserAuthenticated){

      Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}checkout/payment/?checkout_type=subscription`);
    }else{
      Router.push({
        pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}sign-up`,
        query: { from_subscription: "checkout/payment/?checkout_type=subscription" }
      })
    }
  }

  return (
      <Row className={styles["unlimited-courses"]}>
          <Col xs={12}>

              <div className={styles["unlimited-courses__logo"]}>
                <Image src="/images/TadarabUnlimited.png" alt="TadarabUnlimited" />
              </div>

              <div className={styles["unlimited-courses__title"]}>
                  <div>
              تعلم كل يوم مهارة جديدة في جميع المجالات باشتراك شهري واحد.
  
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
                  <Image src="/images/VideoPlaceholder.png" alt="promo video" />
              </div>
          </Col> */}
      </Row>
  )
}
