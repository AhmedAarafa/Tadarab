import React, { useState, useEffect } from "react";
import styles from "./mobile-checkout-bar.module.css";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { CartIcon } from "common/Icons/Icons";
import { setCheckoutType } from "configurations/redux/actions/checkoutType";
import Router, { useRouter } from "next/router";

export default function MobileCheckoutBar(props:any) {
  const courseDetailsData = useSelector((state: any) => state.courseDetailsData);
  //const userStatus = useSelector((state:any) => state.userAuthentication);
  const userStatus = useSelector((state: any) => state.userAuthentication.isUserAuthenticated);

  const [toDisplayValues, setToDisplayValues] = useState<any>({ values: [], visible: false });
  const [subscriptionTimer, setSubscriptionTimer] = useState(0);
  const [courseDetails, setCourseDetails] = useState<any>([]);
  const dispatch = useDispatch();
  const Router = useRouter();

  // useEffect(() => {
  //   setCourseDetails(courseDetailsData.data || []);
  // }, [courseDetailsData]);
  useEffect(() => {

    // setSubscriptionTimer
    document.cookie.split('; ').reduce((prev: any, current: any) => {
      const [name, ...value] = current.split('=');
      if (prev) {
        prev[name] = value.join('=');
        if ((prev.timer < (Math.floor(Date.now() / 1000))) || prev.timer == NaN || prev.timer == "NaN") {

        } else {
          setSubscriptionTimer(prev['subscription-countdown'] - ((Math.floor(Date.now() / 1000))));
          return prev;
        }
      }

    }, {});
    

  }, []);

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

              // days > 0 ? (days < 10 ? days = "0" + days : days = days ) : days = "00";
              // hours > 0 ? (hours < 10 ? hours = "0" + hours : hours = hours ) : hours = "00";
              // minutes > 0 ? (minutes < 10 ? minutes = "0" + minutes : minutes = minutes ) : minutes = "00";
              // seconds > 0 ? (seconds < 10 ? seconds = "0" + seconds : seconds = seconds ) : seconds = "00";

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
        <div>
          {toDisplayValues.visible && toDisplayValues.values[1] !== NaN && toDisplayValues.values[1] !== 'NaN' &&
            <div className={styles["monthly-subscription__subscription-timer"]}>
              ستوفر ٤٠٪ العرض سينتهي خلال
              <span> {`${toDisplayValues.values[1]}:${toDisplayValues.values[2]}:${toDisplayValues.values[3]}`} </span>
            </div>}
          <Button onClick={() => handleSubscriptionBtn()} className={styles["mobile-checkout-bar__subscribe-btn"]}>
            {
              Router.asPath.includes("subscription") ?
                <span> ابدأ التعلم الآن</span>
                :
                <>
                  <div>
                    <span>اشترك في تدرب بلا حدود </span>
                  </div>
                </>
            }
          </Button>
          <div>
            {/* <div className={styles["monthly-subscription__subscription-value"]}>
              احصل على كل الدورات فقط ب 9 دك / شهر.
            </div> */}
            <div className={styles["monthly-subscription__subscription-value"]} >
              <span>
                احصل على كل الدورات فقط ب
                {` ${props?.data?.subscription_sale_price && props?.data?.subscription_sale_price} `}
                {props?.data?.currency_symbol && props?.data?.currency_symbol} / ش
                بدلا من
              </span>
              <span className={styles["amount-strike"]}>
                {` ${props?.data?.subscription_original_price && props?.data?.subscription_original_price} `}
                {props?.data?.currency_symbol && props?.data?.currency_symbol}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
