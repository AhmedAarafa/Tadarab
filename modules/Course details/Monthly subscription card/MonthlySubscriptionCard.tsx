/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import styles from "./monthly-subscription-card.module.css"
import { Button, Spinner } from "react-bootstrap";
import {
  CartIcon, FavouriteIcon, ShareIcon, AddedToFavouriteIcon, GuaranteeIcon, TickIcon,
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
    // subscriptionCounter();
    let cancel: boolean = false;

    // setSubscriptionTimer
    document.cookie.split('; ').reduce((prev: any, current: any) => {
      const [name, ...value] = current.split('=');
      if (prev) {
        prev[name] = value.join('=');
        if ((prev['subscription-countdown'] < (Math.floor(Date.now() / 1000))) || prev['subscription-countdown'] == NaN || prev['subscription-countdown'] == "NaN") {

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
        console.log(error);
      });

    return () => {
      cancel = true;
    }

  }, []);


  useEffect(() => {
    setCourseDetails(courseDetailsData.data || []);
  }, [courseDetailsData]);

  useEffect(() => {

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
    if (userStatus.isUserAuthenticated) {

      Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}checkout/payment/?checkout_type=subscription`);
    } else {
      Router.push({
        pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}sign-up`,
        query: { from_subscription: `checkout/payment/?checkout_type=subscription` }
      })
    }
  }
  const handleFavActionBtn = (course: any): any => {

    if (userStatus.isUserAuthenticated == true) {
      const handleFavResponse: any = handleFav(course, `${course.archive_id ? "webinar" : "courses"}/${slug}`);
      handleFavResponse.then(function (response: any) {
        setCourseDetails(response.data.data);
      })
    } else {
      Router.push({
        pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}sign-in`,
        query: { from: "course" }
      })
    }
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
    if (theOption.liveWebinarDetails?.type == "webinar" && !userStatus.isUserAuthenticated) {
      Router.push({
        pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}sign-up`,
        query: { from: Router.asPath.substring(1) }
      })
    } else {

      const handleCartResponse: any = handleCart([course], `${course.archive_id ? "webinar" : "courses"}/${slug}`, false);
      handleCartResponse.then(function (firstresponse: any) {
        firstresponse.resp.then(function (response: any) {
          setCourseDetails(response.data.data);
          dispatch(setCartItems(firstresponse.cartResponse));
          setIsAddingToCartInProgress(false);
          setIsCartModalVisible(true);
          setSpecialBundleCourseId(course.id);
        })
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

              {userStatus.isUserAuthenticated == false && <Button className={styles["monthly_subscription__signup-free"]} onClick={() => { setIsSignupModalVisible(true) }}>
                سجل الآن مجاناً
              </Button>}

            </>
          }

          {!courseDetails?.subscription_exclude ?
            <>
              <div className={styles["monthly-subscription__course-card__title"]}>
                <div>
                  <span> اشترك في تدرب </span>
                  <span>
                    بلا حدود
                  </span>
                </div>
                <div>
                  <div className={styles["monthly-subscription__subscription-benefits"]}>
                    <div>
                      <TickIcon />
                    </div>
                    مشاهدة  لجميع الدورات بالمنصة (أكثر من 850 دورة تدريبية).
                  </div>
                  <div className={styles["monthly-subscription__subscription-benefits"]}>
                    <div>
                      <TickIcon />
                    </div>
                    دورات جديدة تضاف شهريًا.
                  </div>
                  <div className={styles["monthly-subscription__subscription-benefits"]}>
                    <div>
                      <TickIcon />
                    </div>
                    عدد لا نهائي من شهادات إتمام الدورات.
                  </div>
                  <div className={styles["monthly-subscription__subscription-benefits"]}>
                    <div>
                      <TickIcon />
                    </div>
                    لا يوجد التزام، يمكنك إلغاء الاشتراك في أي وقت.
                  </div>
                  <span>
                    <Link href="/subscription">
                      اعرف المزيد.
                    </Link>
                  </span>



                </div>

              </div>
              {
                theOption?.liveWebinarDetails?.type == "webinar" && (theOption?.liveWebinarDetails?.webinar_type == 'soon') &&
                <div className={styles["live-webinar-countdown"]}>
                  <div className={styles["live-webinar-countdown__offer-available"]}>
                    <div>بث مباشر</div>
                    <div>علي تدرب</div>
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
              }

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

              {theOption?.liveWebinarDetails?.type !== "webinar" && <div className={styles["monthly-subscription__or-box"]}>
                أو
              </div>}
            </>
            :
            <div className={styles["monthly-subscription__course-card__course-title"]}>
              {courseDetailsData?.data?.course_details?.title}
            </div>
          }

          {theOption?.liveWebinarDetails?.type !== "webinar" &&
            <div
              className={styles["monthly-subscription__course-card__actions-btns"]}>
              {courseDetails.course_details?.type !== "webinar" &&
                <Button onClick={() => {
                  courseDetails.course_details?.discounted_price == 0 ?
                    handleFreeCoursesActionBtn(courseDetails.course_details)
                    :
                    courseDetails.course_details?.is_in_cart ?
                      Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}checkout`)
                      :
                      handleCartActionBtn(courseDetails.course_details);
                }} disabled={isAddingToCartInProgress}
                  className={styles["monthly-subscription__course-card__actions-btns__add-to-cart-btn"]}
                >
                  {isAddingToCartInProgress == true ?
                    <Spinner animation='border' />
                    :
                    courseDetails.course_details?.type == "webinar" && !userStatus.isUserAuthenticated ?
                      <></>
                      :
                      courseDetails.course_details?.discounted_price == 0 ?
                        <TvIcon color="#222" />
                        :
                        <CartIcon color="#222" />
                  }
                  {
                    courseDetails.course_details?.type == "webinar" && !userStatus.isUserAuthenticated ?
                      <span>سجل لمشاهدة البث المباشر مجاناَ</span>
                      :
                      courseDetails.course_details?.discounted_price == 0 ?
                        <span> ابدأ الآن مجانًا </span>
                        :
                        courseDetails.course_details?.is_in_cart ?
                          <span> اذهب إلى السلة</span>
                          :
                          <span> امتلك هذه الدورة </span>
                  }
                </Button>}


              <Button onClick={() => {
                handleFavActionBtn(courseDetails.course_details);
              }}
                className={
                  styles["monthly-subscription__course-card__actions-btns__fav-btn"]
                }
              >
                {
                  theOption.liveWebinarDetails?.is_in_favorites ?
                    <AddedToFavouriteIcon color="#222" />
                    :
                    <FavouriteIcon color="#222" />


                }
              </Button>
              <Button
                className={
                  styles["monthly-subscription__course-card__actions-btns__share-btn"]
                }
              >
                <ShareIcon />
              </Button>
            </div>
          }

          {/* Price end */}
          <div className={styles["course-price"]}>

            {/* Sale price start */}
            {theOption.liveWebinarDetails?.discounted_price !== 0 && theOption.liveWebinarDetails?.type !== "webinar" &&
              <div className={styles["sale-price"]}>
                سعر الدورة
                <span>
                  {courseDetails?.course_details?.discounted_price}
                </span>
                <span>
                  {courseDetails?.course_details?.currency_symbol}
                </span>
              </div>
            }
            {/* Sale price end */}

            {/* Orignal price start */}
            {theOption.liveWebinarDetails?.price != theOption.liveWebinarDetails?.discounted_price &&
              <div className={styles["orignal-price"]}>
                بدلاً من
                <span>
                  {` ${courseDetails?.course_details?.currency_symbol} `}
                </span>
                <span>
                  {courseDetails?.course_details?.price}
                </span>
              </div>
            }
            {/* Orignal price end */}

          </div>
          {/* Price end */}


          {theOption.liveWebinarDetails?.type !== "webinar" &&
            <div
              id="course-card__guarantee-card"
              className={styles["course-details__course-card__guarantee-box"]}
            >
              <div
                className={
                  styles["course-details__course-card__guarantee-box__icon"]
                }
              >
                <GuaranteeIcon />
              </div>
              <div
                className={
                  styles["course-details__course-card__guarantee-box__text-box"]
                }
              >
                <div
                  className={
                    styles[
                    "course-details__course-card__guarantee-box__text-box__major"
                    ]
                  }
                >
                  ٣٠ يوم ضمان ذهبي استرداد كامل المبلغ
                </div>

              </div>
            </div>
          }

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
                  <CertifIcon color={themeState == "light" ? "#c2121e" : "#f5f5f5"} />

                  <span>شهادة إتمام اون لاين معتمدة</span>
                </div>
                <div
                  className={
                    styles["monthly-subscription__course-card__details-list__item"]
                  }
                >
                  <DocumentIcon color={themeState == "light" ? "#b20016" : "#f5f5f5"} />

                  <span>مرفقات حصرية جاهزة للتحميل</span>
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

          <div className={styles["monthly-subscription__course-card__promo-code"]}>
            <span>هل لديك كوبون خصم؟</span>
            <span> ادخل الكوبون </span>
          </div>
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
              <div >{courseDetails.course_details?.trainer.name_ar}</div>
            </div>
          </div>


          <div className={styles["monthly-subscription__sticky-top-course-card__checkout-box"]}>
            <div className={styles["monthly-subscription__course-card__actions-btns"]}>
              {courseDetails.course_details?.type !== "webinar" &&
                <Button onClick={() => {
                  courseDetails.course_details?.discounted_price == 0 ?
                    handleFreeCoursesActionBtn(courseDetails.course_details)
                    :
                    handleCartActionBtn(courseDetails.course_details)
                }}
                  disabled={courseDetails.course_details?.is_in_cart || disabledCartBtns.includes(courseDetails.course_details?.id)}
                  className={
                    styles[
                    "monthly-subscription__course-card__actions-btns__add-to-cart-btn"
                    ]}>
                  {isAddingToCartInProgress == true ?
                    <Spinner animation='border' />
                    :
                    courseDetails.course_details?.discounted_price == 0 ?
                      <TvIcon color="#222" />
                      :
                      <CartIcon color="#222" />
                  }
                  {
                    courseDetails.course_details?.discounted_price == 0 ?
                      <span> ابدأ الآن مجانًا </span>
                      :
                      courseDetails.course_details?.is_in_cart ?
                        <span> اذهب إلى السلة</span>
                        :
                        <span> امتلك هذه الدورة </span>
                  }
                </Button>}


              <Button
                className={
                  styles["monthly-subscription__course-card__actions-btns__fav-btn"]
                }
              >
                <FavouriteIcon color="#222" />
              </Button>
              <Button
                className={
                  styles["monthly-subscription__course-card__actions-btns__share-btn"]
                }
              >
                <ShareIcon />

              </Button>
            </div>

          </div>

        </div>}

      <AddToCartPopup setSpecialBundleCourseId={setSpecialBundleCourseId} specialBundleCourseId={specialBundleCourseId}
        isCartModalVisible={isCartModalVisible} setIsCartModalVisible={setIsCartModalVisible} />

      <SignupPopup isSignupModalVisible={isSignupModalVisible} setIsSignupModalVisible={setIsSignupModalVisible} />
    </>
  )
}
