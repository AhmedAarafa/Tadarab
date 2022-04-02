import React,{ useState,useEffect } from "react";
import styles from "./mobile-checkout-bar.module.css";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";   
import {CartIcon} from "common/Icons/Icons";
import { setCheckoutType } from "configurations/redux/actions/checkoutType";
import Router, { useRouter } from "next/router";

export default function MobileCheckoutBar() {

  const courseDetailsData = useSelector((state:any) => state.courseDetailsData);
  const userStatus = useSelector((state:any) => state.userAuthentication);
  const [courseDetails, setCourseDetails] = useState<any>([]);
  const dispatch = useDispatch();
  const Router = useRouter();
  
  useEffect(() => {
      setCourseDetails(courseDetailsData.data || []);
  }, [courseDetailsData]);

  const handleSubscriptionBtn = () => {
    dispatch(setCheckoutType("subscription"));
    Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}checkout/payment/?checkout_type=subscription`);
  }

  return (
    <>
      <div className={styles["mobile-checkout-bar"]} id="mobile-checkout-bar">
        <div>
          <Button onClick={() => handleSubscriptionBtn()} className={styles["mobile-checkout-bar__subscribe-btn"]}>
           {/* <CartIcon color="#fff"/> */}
            <span>جرب تدرب بلا حدود</span>
          </Button>
          <div>
          ٧ أيام تجربة مجانية ثم ٩ دك شهرياَ  
          </div>
        </div>
        {/* <div>
          <div className={styles["mobile-checkout-bar__course-card__price-box"]}>
            <span
              className={
                styles["mobile-checkout-bar__course-card__price-box__price"]
              }
            >
              {courseDetailsData.data?.course_details?.price}
            </span>
            <span
              className={
                styles["mobile-checkout-bar__course-card__price-box__currency"]
              }
            >
             {courseDetailsData.data?.course_details?.currency_code}
            </span>
          </div>
          {
            courseDetailsData.data?.course_details?.price > courseDetailsData.data?.course_details?.discounted_price 
            &&
            <div className={styles["mobile-checkout-bar__course-card__old-price-box"]}>
              <div
                className={
                  styles[
                    "mobile-checkout-bar__course-card__old-price-box--line-through"
                  ]
                }
              >
                <span
                  className={
                    styles["mobile-checkout-bar__course-card__old-price-box__currency"]
                  }
                >
                  
                  {courseDetailsData.data?.course_details?.currency_code}
                </span>
                <span
                  className={
                    styles["mobile-checkout-bar__course-card__old-price-box__price"]
                  }
                >
                  {courseDetailsData.data?.course_details?.discounted_price}
                </span>
              
              </div>
            </div>
          }
        </div> */}
      </div>
    </>
  );
}
