/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import styles from "./monthly-subscription-card.module.css"
import { Button, Spinner } from "react-bootstrap";
import {
  CartIcon, FavouriteIcon, ShareIcon, AddedToFavouriteIcon, GuaranteeIcon, TickIcon, SupportIcon,
  TvIcon, DocumentIcon, DurationIcon, DevicesIcon, CertifIcon, CalendarIcon, WatchLiveOrRecordedIcon, DarkModeCalendarIcon, DarkModeWatchLiveOrRecordedIcon
} from "common/Icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import Image from 'next/image';
import { setCheckoutType } from "configurations/redux/actions/checkoutType";
import Router, { useRouter } from "next/router";
import useResize from "custom hooks/useResize";
import { stickyCardHandler } from "./utils";
import { handleFav } from 'modules/_Shared/utils/handleFav';
import { handleCart } from 'modules/_Shared/utils/handleCart';
import { setCartItems } from 'configurations/redux/actions/cartItems';
import Link from "next/link";
import { setCourseDetailsData } from "configurations/redux/actions/courseDetailsData";
import { handleFreeCourses } from "modules/_Shared/utils/handleFreeCourses";
import { subscriptionCounter } from "modules/_Shared/utils/subscriptionCounter";
import { axiosInstance } from "configurations/axios/axiosConfig";
import datesArray from "./Dates.json";
import { tConvert } from "modules/_Shared/utils/dateFormatHandler";
import AddToCartPopup from "common/Add to cart popup/AddToCartPopup";
import SignupPopup from "common/Signup popup/SignupPopup";

export default function MonthlySubscriptionCard(theOption: any) {

  const [isMobileView, setIsMobileView] = useState(false);
  const [paymentType, setPaymentType] = useState("subscription");
  const [subscriptionValues, setSubscriptionValues] = useState<any>({});
  const [subscriptionTimer, setSubscriptionTimer] = useState(0);
  const [toDisplayValues, setToDisplayValues] = useState<any>({ values: [], visible: false });
  const [courseDetails, setCourseDetails] = useState<any>([]);
  const [isAddingToCartInProgress, setIsAddingToCartInProgress] = useState(false);
  const [subscriptionInfo, setSubscriptionInfo] = useState<any>({});
  const [disabledCartBtns, setDisabledCartBtns] = useState<any>([]);
  const [isCartModalVisible, setIsCartModalVisible] = useState(false);
  const [isSignupModalVisible, setIsSignupModalVisible] = useState(false);
  const [specialBundleCourseId, setSpecialBundleCourseId] = useState(0);
  const courseDetailsData = useSelector((state: any) => state.courseDetailsData);
  const userStatus = useSelector((state: any) => state.userAuthentication);
  const themeState = useSelector((state: any) => state.themeState.theme);
  const dispatch = useDispatch();
  const Router = useRouter();
  const { slug } = Router.query;

  useEffect(() => {
    let cancel: boolean = false;

    // setSubscriptionTimer
    document.cookie.split('; ').reduce((prev: any, current: any) => {
      const [name, ...value] = current.split('=');
      if (prev) {
        prev[name] = value.join('=');
        if ((prev['subscription-countdown'] < (Math.floor(Date.now() / 1000))) || prev['subscription-countdown'] == "NaN") {

        } else {

          setSubscriptionTimer(prev['subscription-countdown'] - ((Math.floor(Date.now() / 1000))));
          return prev;
        }
      }

    }, {});

    axiosInstance
      .get(`categories/home/?limit=20&page=1`)
      .then(function (response: any) {
        if (cancel) return;
        theOption?.subscriptionInfoHandler({
          subscription_original_price: response?.data?.data.subscription_original_price,
          subscription_sale_price: response?.data?.data.subscription_sale_price,
          currency_symbol: response?.data?.data.currency_symbol
        });
        setSubscriptionInfo({
          before: response?.data?.data.subscription_original_price,
          after: response?.data?.data.subscription_sale_price,
          currencySymbol: response?.data?.data.currency_symbol
        });
      })
      .catch(function (error: any) {
        //console.log(error);
      });

    return () => {
      cancel = true;
    }

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
        //console.log(error);
      });
  }, [])


  useEffect(() => {
    setCourseDetails(courseDetailsData.data || []);
  }, [courseDetailsData]);

  useEffect(() => {
    //console.log("theOption", theOption);

    if (theOption?.liveWebinarDetails?.full_date) {
      setInterval(() => {
        // get total seconds between the times
        let delta: any = Math.abs(theOption?.liveWebinarDetails?.full_date - (Math.floor(Date.now() / 1000)));

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

        setToDisplayValues([days, hours, minutes, seconds]);

        return { days, hours, minutes, seconds }
      }, 1000);
    }
  }, [theOption]);

  const handleSubscriptionBtn = () => {
    dispatch(setCheckoutType("subscription"));
    Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}subscription-plans`);
  }

  const handleFreeCoursesBtn = (course: any) => {
    if (userStatus.isUserAuthenticated) {
      handleFreeCourses(course);
    } else {
      Router.push({
        pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}sign-in`,
        query: { from: "course" }
      })
    }
  }

  const viewportWidthDetector = () => {
    if (window.innerWidth >= 576) {
      setIsMobileView(false);
    } else {
      setIsMobileView(true);
    }
  }

  useResize(viewportWidthDetector);
  useResize(stickyCardHandler);

  return (
    <>
      <div className={styles["monthly-subscription__course-card"]} id="sub-sticky-card">
        <div className={styles["monthly-subscription__course-card-helper"]}>

          {theOption?.liveWebinarDetails?.type == "webinar" && !isMobileView &&
            <>

              <div className={styles["monthly-subscription__course-card__course-title"]}>
                {courseDetailsData?.data?.course_details?.title}
              </div>

              <div className={styles["monthly_subscription__live-details-list"]}>
                <div>
                  {
                    themeState == "light" ?
                      <CalendarIcon />
                      :
                      <DarkModeCalendarIcon />
                  }
                </div>
                {theOption?.allLiveWebinar?.arabic_date &&
                  datesArray.map((date: any, i: number) => {
                    return (
                      theOption?.allLiveWebinar?.arabic_date.includes(date.strangeDate)
                      &&
                      [theOption?.allLiveWebinar?.arabic_date.replace(date.strangeDate, date.gregorianDate).split(' ')[2],
                      theOption?.allLiveWebinar?.arabic_date.replace(date.strangeDate, date.gregorianDate).split(' ')[1],
                      theOption?.allLiveWebinar?.arabic_date.replace(date.strangeDate, date.gregorianDate).split(' ')[0]].join(' ')
                    )
                  })
                }
              </div>
              <div className={styles["monthly_subscription__live-details-list"]}>
                <div>
                  <DurationIcon color={themeState == "light" ? "#c1121f" : "#f5f5f5"} />
                </div>
                {` ${theOption?.allLiveWebinar?.start_time && tConvert(theOption?.allLiveWebinar?.start_time)} `}
                بتوقيت الكويت والسعودية
              </div>
              <div className={styles["monthly_subscription__live-details-list"]}>
                <div>
                  {
                    themeState == "light" ?
                      <WatchLiveOrRecordedIcon />
                      :
                      <DarkModeWatchLiveOrRecordedIcon />
                  }
                </div>
                شاهد الدورة بث مباشر او مسجلة بعد انتهاء البث

              </div>
              <div className={styles["monthly_subscription__live-details-list"]}>
                <div>

                  <CertifIcon color={themeState == "light" ? "#c2121e" : "#f5f5f5"} />
                </div>
                شهادة إتمام اون لاين معتمدة
              </div>
              <div className={styles["monthly_subscription__live-details-list"]}>
                <div>
                  <DocumentIcon color={themeState == "light" ? "#b20016" : "#f5f5f5"} />
                </div>
                مرفقات حصرية جاهزة للتحميل
              </div>
              <div className={styles["monthly_subscription__live-details-list"]}>
                <div>
                  <DevicesIcon color={themeState == "light" ? "#c1121f" : "#f5f5f5"} />
                </div>
                تابع الدورة من اي لابتوب او موبايل
              </div>

              {userStatus.isUserAuthenticated == false &&
                <>
                  <Button className={styles["monthly_subscription__signup-free"]} onClick={() => { setIsSignupModalVisible(true) }}>
                    سجل الآن مجاناً
                  </Button>
                  <div>
                    سجل الآن لمشاهدة البث المباشر مجاناً
                  </div>
                </>
              }

            </>
          }

          {!courseDetails?.subscription_exclude &&
            <>
              {
                theOption?.liveWebinarDetails?.type == "webinar" && (theOption?.liveWebinarDetails?.webinar_type == 'soon') &&
                <>
                  <div className={styles["live-webinar-countdown"]}>
                    <div className={styles["live-webinar-countdown__offer-available"]}>
                      <div>بث مباشر</div>
                      <div>على تدرب</div>
                    </div>
                    <div>
                      <div className={styles["live-webinar-countdown__countdown-box"]}>
                        <div className={styles["live-webinar-countdown__countdown-box__countdown"]}>
                          <div>يوم</div>
                          <div>{toDisplayValues[0]}</div>
                        </div>
                        <div className={styles["live-webinar-countdown__countdown-box__separator"]}>
                          :
                        </div>
                        <div className={styles["live-webinar-countdown__countdown-box__countdown"]}>
                          <div>ساعة</div>
                          <div>
                            {toDisplayValues[1]}
                          </div>
                        </div>
                        <div className={styles["live-webinar-countdown__countdown-box__separator"]}>
                          :
                        </div>
                        <div className={styles["live-webinar-countdown__countdown-box__countdown"]}>
                          <div>دقيقة</div>
                          <div>
                            {toDisplayValues[2]}
                          </div>
                        </div>
                        <div className={styles["live-webinar-countdown__countdown-box__separator"]}>
                          :
                        </div>
                        <div className={styles["live-webinar-countdown__countdown-box__countdown"]}>
                          <div>ثانية</div>
                          <div>
                            {toDisplayValues[3]}
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </>
              }

              {/* {theOption?.liveWebinarDetails?.type == "webinar" &&
                <>
                  <div className={styles["monthly-subscription__subscribe-btn-box"]}>
                    <Button id="monthly-subscribe-btn" className={`${styles["monthly-subscription__subscribe-btn-box__btn"]} ${theOption?.liveWebinarDetails?.type == "webinar" ? styles["monthly-subscription__secondary"] : ""}`}
                      onClick={() => handleSubscriptionBtn()}>
                      <div>
                        <span>اشترك لمشاهدة الدورة </span>
                      </div>
                    </Button>
                  </div>
                  <div className={styles["monthly-subscription__subscription-value"]} >
                    <span>
                      احصل على كل الدورات باشتراك واحد يبدأ من {courseDetails.subscription_sale_price || subscriptionInfo?.after}
                      {` ${courseDetails.currency_symbol || subscriptionInfo?.currencySymbol} `} / ش
                    </span>
                  </div>
                </>
              } */}

              {/* {theOption?.liveWebinarDetails?.type !== "webinar" && <div className={styles["monthly-subscription__or-box"]}>
                أو
              </div>} */}
            </>
          }

          {/* Price end */}

          { theOption?.liveWebinarDetails?.type !== "webinar" &&  <div className={styles["monthly-subscription__course-card__course-title"]}>
            {courseDetailsData?.data?.course_details?.title}
          </div>}

          {!isMobileView && <div className={styles["monthly-subscription__course-card__details-list"]}>
            {theOption.liveWebinarDetails?.type !== "webinar" &&
              <>
                <div
                  className={
                    styles["monthly-subscription__course-card__details-list__item"]
                  }
                >
                  <DurationIcon color={themeState == "light" ? "#c1121f" : "#f5f5f5"} />

                  <span>{Math.round(courseDetailsData?.data?.total_duration / 60 / 60)} ساعات تدريبية</span>
                </div>
                <div
                  className={
                    styles["monthly-subscription__course-card__details-list__item"]
                  }
                >
                  <SupportIcon color={themeState == "light" ? "#c1121f" : "#f5f5f5"} />

                  <span> دعم تقني على مدار الساعة طوال الأسبوع</span>
                </div>
                <div
                  className={
                    styles["monthly-subscription__course-card__details-list__item"]
                  }
                >
                  <DocumentIcon color={themeState == "light" ? "#b20016" : "#f5f5f5"} />

                  <span> ملخصات حصرية لأكثر الكتب مبيعًا مجانية </span>
                </div>
                <div
                  className={
                    styles["monthly-subscription__course-card__details-list__item"]
                  }
                >
                  <CertifIcon color={themeState == "light" ? "#c2121e" : "#f5f5f5"} />

                  <span>شهادة إتمام اون لاين معتمدة</span>
                </div>
                <div
                  className={
                    styles["monthly-subscription__course-card__details-list__item"]
                  }
                >
                  <DevicesIcon color={themeState == "light" ? "#c1121f" : "#f5f5f5"} />

                  <span>تابع الدورة من اي لابتوب او موبايل</span>
                </div>

              </>
            }

          </div>}

          {/* {courseDetails?.course_details?.discounted_price !== 0 &&
            <div className={styles["monthly-subscription__course-card__subscription-details"]}>
              شاهد اكثر من 1000 دورة باشتراك واحد  يبدأ
              <div>
                من
                <span> {" "} {subscriptionValues?.sale_label} {" "}</span>
              </div>
            </div>} */}


          {theOption?.liveWebinarDetails?.type !== "webinar" &&
            <>

              {
                paymentType == "subscription" &&
                <>
                  <div className={styles["monthly-subscription__subscribe-btn-box"]}>
                    {
                      courseDetails?.course_details?.discounted_price == 0 ?
                        <Button
                          className={`${styles["monthly-subscription__subscribe-btn-box__btn"]}`}
                          onClick={() => handleFreeCoursesBtn(courseDetails?.course_details)}>
                          <div>
                            <span>ابدأ الآن مجاناً</span>
                          </div>
                        </Button>

                        :
                        <Button id="monthly-subscribe-btn" className={`${styles["monthly-subscription__subscribe-btn-box__btn"]} ${theOption?.liveWebinarDetails?.type == "webinar" ? styles["monthly-subscription__secondary"] : ""}`}
                          onClick={() => handleSubscriptionBtn()}>
                          <div>
                            <span>اشترك الآن</span>
                          </div>
                        </Button>
                    }
                  </div>
                </>
              }
            </>
          }

        </div>
      </div>

      {!Router.asPath.includes("webinar") &&
        <div className={styles["monthly-subscription__sticky-top-course-card"]} id="sub-sticky-top-course-card">
          <div className={styles["monthly-subscription__sticky-top-course-card__course-details-box"]}>
            <div className={styles["monthly-subscription__sticky-top-course-card__course-img"]}>
              <img loading="lazy" src={courseDetails.course_details?.image} alt="course image" />
            </div>
            <div className={styles["monthly-subscription__sticky-top-course-card__course-details"]}>
              <div >{courseDetails.course_details?.title}</div>
              <div >{courseDetails.course_details?.trainer?.name_ar}</div>
            </div>
          </div>


          <div className={styles["monthly-subscription__sticky-top-course-card__checkout-box"]}>
            <div className={styles["monthly-subscription__course-card__actions-btns"]}>
              {courseDetails.course_details?.type !== "webinar" &&
                (
                  courseDetails?.course_details?.discounted_price == 0 ?
                    <Button
                      className={`${styles["monthly-subscription__subscribe-btn-box__btn"]}`}
                      onClick={() => handleFreeCoursesBtn(courseDetails?.course_details)}>
                      <div>
                        <span>ابدأ الآن مجاناً</span>
                      </div>
                    </Button>
                    :
                    <Button
                      onClick={() => handleSubscriptionBtn()}
                      className={
                        styles[
                        "monthly-subscription__course-card__actions-btns__add-to-cart-btn"
                        ]}>
                      اشترك الآن وأبدا التعلم
                    </Button>
                )

              }
            </div>

          </div>

        </div>}

      <AddToCartPopup setSpecialBundleCourseId={setSpecialBundleCourseId} specialBundleCourseId={specialBundleCourseId}
        isCartModalVisible={isCartModalVisible} setIsCartModalVisible={setIsCartModalVisible} />

      <SignupPopup isSignupModalVisible={isSignupModalVisible} setIsSignupModalVisible={setIsSignupModalVisible} />
    </>
  )
}
