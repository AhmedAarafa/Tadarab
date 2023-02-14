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
  const [courseDetails, setCourseDetails] = useState<any>([]);
  const [showStickyBar, setShowStickyBar] = useState(false);
  const dispatch = useDispatch();
  const Router = useRouter();
  const { slug } = Router.query;


  const isElementInViewport = () => {

    let stickybar: any = document.getElementById("homepage-sticky-checkout-bar");
    let rect:any = stickybar?.getBoundingClientRect();

    return (
      rect?.top >= 0 &&
      rect?.left >= 0 &&
      rect?.bottom <= (window.innerHeight || document?.documentElement?.clientHeight) && /* or $(window).height() */
      rect?.right <= (window.innerWidth || document?.documentElement?.clientWidth) /* or $(window).width() */
    );
  }

  useEffect(() => {

    window.addEventListener("scroll", () => {
      setShowStickyBar(!isElementInViewport());
      console.log("not visible in viewport", !isElementInViewport());
    })

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


  const handleSubscriptionBtn = () => {
    dispatch(setCheckoutType("subscription"));
    if (userStatus) {
      Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}subscription-plans`);
    } else {
      Router.push({
        pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}sign-up`,
        query: { from_subscription: "checkout/payment/?checkout_type=subscription" }
      })
    }
  }



  return (
    <>
      {showStickyBar && !userStatus.isSubscribed &&
        <div className={styles["mobile-checkout-bar"]} id="mobile-checkout-bar">
          <div>
            <div className={styles["mobile-checkout-bar__subscription-details"]}>
              شاهد اكثر من 1000 دورة باشتراك واحد يبدأ من
              <span>
                {" "}  {subscriptionValues?.sale_label}{" "}
              </span>
              {" "}{subscriptionValues?.currency_symbol}{" "} / ش
            </div>
            <Button onClick={() => handleSubscriptionBtn()} className={styles["mobile-checkout-bar__subscribe-btn"]}>
              أبدا التعلم الآن
            </Button>
          </div>
        </div>
      }
    </>
  );
}
