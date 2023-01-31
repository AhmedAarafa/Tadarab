import React, { useState, useEffect } from "react";
import styles from "./mobile-checkout-bar.module.css";
import { Button, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setCheckoutType } from "configurations/redux/actions/checkoutType";
import Router, { useRouter } from "next/router";
import { axiosInstance } from "configurations/axios/axiosConfig";

export default function MobileCheckoutBar(props: any) {
  const courseDetailsData = useSelector((state: any) => state.courseDetailsData);
  const userStatus = useSelector((state: any) => state.userAuthentication.isUserAuthenticated);

  const [subscriptionValues, setSubscriptionValues] = useState<any>({});
  const [toDisplayValues, setToDisplayValues] = useState<any>({ values: [], visible: false });
  const [subscriptionTimer, setSubscriptionTimer] = useState(0);
  const [courseDetails, setCourseDetails] = useState<any>([]);
  const dispatch = useDispatch();
  const Router = useRouter();
  const { slug } = Router.query;

  useEffect(() => {
    // setSubscriptionTimer
    document.cookie.split('; ').reduce((prev: any, current: any) => {
      const [name, ...value] = current.split('=');
      if (prev) {
        prev[name] = value.join('=');
        if ((prev.timer < (Math.floor(Date.now() / 1000))) || prev.timer == "NaN") {

        } else {
          setSubscriptionTimer(prev['subscription-countdown'] - ((Math.floor(Date.now() / 1000))));
          return prev;
        }
      }

    }, {});

  }, []);

  useEffect(() => {
    axiosInstance
      .get(`subscription/plans`)
      .then(function (response: any) {
        if (JSON.stringify(response.status).startsWith("2")) {

          setSubscriptionValues({
            sale_label: response?.data?.data?.subscription_plans[0]?.sale_label.replace("د.ك/ ش", ""),
            currency_symbol: response?.data?.data?.subscription_plans[0]?.currency_symbol
          });
        }
      })
      .catch(function (error: any) {
        console.log(error);
      });
  }, [])



  useEffect(() => {
    setCourseDetails(courseDetailsData?.data);
  }, [courseDetailsData]);



  useEffect(() => {
    if (subscriptionTimer !== 0) {
      document.cookie.split('; ').reduce((prev: any, current: any) => {
        const [name, ...value] = current.split('=');
        if (prev) {
          prev[name] = value.join('=');
          setSubscriptionTimer(prev['subscription-countdown'] - ((Math.floor(Date.now() / 1000))));
          if (Math.sign(prev['subscription-countdown'] - ((Math.floor(Date.now() / 1000)))) !== -1) {

            let interval = setInterval(() => {

              // get total seconds between the times
              let delta: any = Math.sign(prev['subscription-countdown'] - ((Math.floor(Date.now() / 1000)))) !== -1 ?
                Math.abs(prev['subscription-countdown'] - ((Math.floor(Date.now() / 1000))))
                :
                clearInterval(interval);
              ;

              // calculate (and subtract) whole days
              let days: any = Math.floor(delta / 86400);
              delta -= days * 86400;

              // calculate (and subtract) whole hours
              let hours: any = Math.floor(delta / 3600) % 24;
              delta -= hours * 3600;

              // calculate (and subtract) whole minutes
              let minutes: any = Math.floor(delta / 60) % 60;
              delta -= minutes * 60;

              // what's left is seconds
              let seconds: any = delta; // in theory the modulus is not required

              days = days.toString().padStart(2, 0);
              hours = hours.toString().padStart(2, 0);
              minutes = minutes.toString().padStart(2, 0);
              seconds = seconds.toString().padStart(2, 0);

              if (days == '00' && hours == '00' && minutes == '00' && seconds == '00') {
                setToDisplayValues({ values: [days, hours, minutes, seconds], visible: false });
                clearInterval(interval);

              } else {

                setToDisplayValues({ values: [days, hours, minutes, seconds], visible: true });
                return { days, hours, minutes, seconds }
              }

            }, 1000);

          }
        }

        return prev;
      }, {});

    }

  }, [subscriptionTimer])

  const handleSubscriptionBtn = () => {
    dispatch(setCheckoutType("subscription"));
    if (userStatus) {
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
      <div className={styles["mobile-checkout-bar"]} id="mobile-checkout-bar">
        {props?.paymentType == "subscription" &&
          <div>

            <div className={styles["mobile-checkout-bar__subscription-details"]}>
              <div> شاهد اكثر من 1000 دورة باشتراك شهري </div>
              <div>
                <span>{subscriptionValues?.sale_label} </span>
                <span>
                  {" "}{subscriptionValues?.currency_symbol}{" "}
                  (تدفع سنوياً)
                </span>
              </div>

            </div>

            <Button onClick={() => handleSubscriptionBtn()} className={styles["mobile-checkout-bar__subscribe-btn"]}>
              اشترك الآن وأبدا التعلم
            </Button>
          </div>
        }

      </div>
    </>
  );
}
