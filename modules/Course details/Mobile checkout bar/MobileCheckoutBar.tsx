import React, { useState, useEffect, memo } from "react";
import styles from "./mobile-checkout-bar.module.css";
import { Button, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { CartIcon, TvIcon } from "common/Icons/Icons";
import { setCheckoutType } from "configurations/redux/actions/checkoutType";
import Router, { useRouter } from "next/router";
import AddToCartPopup from "common/Add to cart popup/AddToCartPopup";
import { handleCart } from 'modules/_Shared/utils/handleCart';
import { handleFreeCourses } from "modules/_Shared/utils/handleFreeCourses";
import { setCartItems } from 'configurations/redux/actions/cartItems';
import { setCourseDetailsData } from "configurations/redux/actions/courseDetailsData";

function MobileCheckoutBar(props: any) {
  const courseDetailsData = useSelector((state: any) => state.courseDetailsData);
  const userStatus = useSelector((state: any) => state.userAuthentication.isUserAuthenticated);

  const [toDisplayValues, setToDisplayValues] = useState<any>({ values: [], visible: false });
  const [isCartModalVisible, setIsCartModalVisible] = useState(false);
  const [subscriptionTimer, setSubscriptionTimer] = useState(0);
  const [disabledCartBtns, setDisabledCartBtns] = useState<any>([]);
  const [isAddingToCartInProgress, setIsAddingToCartInProgress] = useState(false);
  const [specialBundleCourseId, setSpecialBundleCourseId] = useState(0);
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
    // if (userStatus) {
    //   Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}checkout/payment/?checkout_type=subscription`);
    // } else {
    Router.push({
      pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}sign-up`,
      query: { from_subscription: "checkout/payment/?checkout_type=subscription" }
    })
    // }
  }

  const handleFreeCoursesActionBtn = (course: any): any => {
    if (userStatus.isUserAuthenticated == true) {
      handleFreeCourses(course);
    } else {
      Router.push({
        pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}sign-in`,
        query: { from: "/course" }
      })
    }
  }

  const handleCartActionBtn = (course: any): any => {
    setDisabledCartBtns([...disabledCartBtns, course.id]);
    setIsAddingToCartInProgress(true);
    setTimeout(() => {
      setDisabledCartBtns(disabledCartBtns.filter((b: any) => b !== course.id));
    }, 5000);
    dispatch(setCheckoutType("cart"));
    if (props?.data?.course_details?.type == "webinar" && !userStatus.isUserAuthenticated) {
      Router.push({
        pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}sign-up`,
        query: { from: Router.asPath.substring(1) }
      })
    } else {

      const handleCartResponse: any = handleCart([course], `${course.archive_id ? "webinar" : "courses"}/${slug}`, false);
      handleCartResponse.then(function (firstresponse: any) {
        firstresponse.resp.then(function (response: any) {
          setCourseDetails(response.data.data);
          dispatch(setCourseDetailsData(response.data.data));
          dispatch(setCartItems(firstresponse.cartResponse));
          setIsAddingToCartInProgress(false);
          setIsCartModalVisible(true);
          setSpecialBundleCourseId(course.id);
        })
      })
    }


  }

  return (
    <>
      <div className={styles["mobile-checkout-bar"]} id="mobile-checkout-bar">

        <div>
          {courseDetails?.course_details?.type !== "webinar" &&
            <Button onClick={() => {
              courseDetails?.course_details?.discounted_price == 0 ?
                handleFreeCoursesActionBtn(courseDetails?.course_details)
                :
                courseDetails?.course_details?.is_in_cart ?
                  Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}checkout`)
                  :
                  handleCartActionBtn(courseDetails?.course_details);
            }} disabled={isAddingToCartInProgress}
              className={styles["mobile-checkout-bar__actions-btns__add-to-cart-btn"]}
            >
              {isAddingToCartInProgress == true ?
                <Spinner animation='border' />
                :
                courseDetails?.course_details?.type == "webinar" && !userStatus.isUserAuthenticated ?
                  <></>
                  :
                  courseDetails?.course_details?.discounted_price == 0 ?
                    <TvIcon color="#f5f5f5" />
                    :
                    <CartIcon color="#f5f5f5" />
              }
              {
                courseDetails?.course_details?.type == "webinar" && !userStatus.isUserAuthenticated ?
                  <span>سجل لمشاهدة البث المباشر مجاناَ</span>
                  :
                  courseDetails?.course_details?.discounted_price == 0 ?
                    <span> ابدأ الآن مجانًا </span>
                    :
                    courseDetails?.course_details?.is_in_cart ?
                      <span> اذهب إلى السلة</span>
                      :
                      <span> امتلك هذه الدورة </span>
              }
            </Button>}
          <div>
            {/* امتلك الدورة */}
            {/* ( */}
            {/* سعر الدورة */}
            {` ${props?.data?.course_details?.discounted_price} `}
            {` ${props?.data?.course_details?.currency_symbol} `}
            {/* ) */}

            {props?.data?.course_details?.price != props?.data?.course_details?.discounted_price &&
              <div>
                {/* بدلا من */}
                {` ${props?.data?.course_details?.price} `}
                {` ${props?.data?.course_details?.currency_symbol} `}
              </div>
            }
          </div>
        </div>

      </div>

      <AddToCartPopup setSpecialBundleCourseId={setSpecialBundleCourseId} specialBundleCourseId={specialBundleCourseId}
        isCartModalVisible={isCartModalVisible} setIsCartModalVisible={setIsCartModalVisible} />
    </>
  );
}

export default memo(MobileCheckoutBar);
