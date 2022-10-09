/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import styles from "./monthly-subscription-card.module.css"
import { Button } from "react-bootstrap";
import { CartIcon, FavouriteIcon, ShareIcon, AddedToFavouriteIcon, GuaranteeIcon, TvIcon, TickIcon, DocumentIcon, DurationIcon, DevicesIcon, CertifIcon } from "common/Icons/Icons";
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


export default function MonthlySubscriptionCard(theOption: any) {

  const [isMobileView, setIsMobileView] = useState(false);
  const [subscriptionTimer, setSubscriptionTimer] = useState(0);
  const [toDisplayValues, setToDisplayValues] = useState<any>({ values: [], visible: false });
  const [courseDetails, setCourseDetails] = useState<any>([]);
  const [disabledCartBtns, setDisabledCartBtns] = useState<any>([]);

  const courseDetailsData = useSelector((state: any) => state.courseDetailsData);
  const userStatus = useSelector((state: any) => state.userAuthentication);
  const dispatch = useDispatch();
  const Router = useRouter();
  const { slug } = Router.query;

  useEffect(() => {
    subscriptionCounter();

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
    console.log("theOption", theOption);


  }, []);

  // useEffect(() => {

  //   if (subscriptionTimer !== 0) {
  //     document.cookie.split('; ').reduce((prev: any, current: any) => {
  //       const [name, ...value] = current.split('=');
  //       if (prev) {
  //         prev[name] = value.join('=');
  //         setSubscriptionTimer(prev['subscription-countdown'] - ((Math.floor(Date.now() / 1000))));
  //         if (Math.sign(Number(prev['subscription-countdown']) - ((Math.floor(Date.now() / 1000)))) !== -1) {

  //           let interval = setInterval(() => {

  //             // get total seconds between the times
  //             let delta: any = Math.sign(Number(prev['subscription-countdown']) - ((Math.floor(Date.now() / 1000)))) !== -1 ?
  //               Math.abs(prev['subscription-countdown'] - ((Math.floor(Date.now() / 1000))))
  //               :
  //               clearInterval(interval);
  //             ;

  //             // calculate (and subtract) whole days
  //             let days: any = Math.floor(delta / 86400);
  //             delta -= days * 86400;

  //             // calculate (and subtract) whole hours
  //             let hours: any = Math.floor(delta / 3600) % 24;
  //             delta -= hours * 3600;

  //             // calculate (and subtract) whole minutes
  //             let minutes: any = Math.floor(delta / 60) % 60;
  //             delta -= minutes * 60;

  //             // what's left is seconds
  //             let seconds: any = delta; // in theory the modulus is not required

  //             days = days.toString().padStart(2, 0);
  //             hours = hours.toString().padStart(2, 0);
  //             minutes = minutes.toString().padStart(2, 0);
  //             seconds = seconds.toString().padStart(2, 0);

  //             if (days == '00' && hours == '00' && minutes == '00' && seconds == '00') {
  //               setToDisplayValues({ ...toDisplayValues, visible: false });
  //               clearInterval(interval);

  //             } else {

  //               setToDisplayValues({ values: [days, hours, minutes, seconds], visible: true });
  //               return { days, hours, minutes, seconds }
  //             }
  //           }, 1000);

  //         }
  //       }

  //       return prev;
  //     }, {});

  //   }

  // }, [subscriptionTimer]);


  useEffect(() => {
    setCourseDetails(courseDetailsData.data || []);
  }, [courseDetailsData]);

  useEffect(() => {

    if (theOption?.liveWebinarDetails?.full_date) {

      // function timerHandler(date: any) {

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

        // days > 0 ? (days < 10 ? days = "0" + days : days = days ) : days = "00";
        // hours > 0 ? (hours < 10 ? hours = "0" + hours : hours = hours ) : hours = "00";
        // minutes > 0 ? (minutes < 10 ? minutes = "0" + minutes : minutes = minutes ) : minutes = "00";
        // seconds > 0 ? (seconds < 10 ? seconds = "0" + seconds : seconds = seconds ) : seconds = "00";

        days = days.toString().padStart(2, 0);
        hours = hours.toString().padStart(2, 0);
        minutes = minutes.toString().padStart(2, 0);
        seconds = seconds.toString().padStart(2, 0);

        setToDisplayValues([days, hours, minutes, seconds]);

        return { days, hours, minutes, seconds }
      }, 1000);


      // }
    }

  }, [theOption.liveWebinarDetails])

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
    setTimeout(() => {
      setDisabledCartBtns(disabledCartBtns.filter((b: any) => b !== course.id));
    }, 5000);
    dispatch(setCheckoutType("cart"));
    // console.log(Router.asPath.substring(1));
    // if(userStatus?.isUserAuthenticated == true){
    if (courseDetails?.course_details?.type == "webinar" && !userStatus.isUserAuthenticated) {
      Router.push({
        pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}sign-up`,
        query: { from: Router.asPath.substring(1) }
      })
    } else {

      const handleCartResponse: any = handleCart([course], `${course.archive_id ? "webinar" : "courses"}/${slug}`, false);
      handleCartResponse.then(function (firstresponse: any) {
        // console.log("handleCartResponse",firstresponse);
        firstresponse.resp.then(function (response: any) {
          console.log(response.data.data);
          setCourseDetails(response.data.data);
          dispatch(setCartItems(firstresponse.cartResponse));
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
          <div className={styles["ribbon"]}>
            <div>موسم</div>
            <div>تدرب</div>
          </div>
          {!courseDetails?.subscription_exclude ?
            <>
              <div

                className={styles["monthly-subscription__course-card__title"]}
              >
                <div>
                  <span> اشترك في تدرب    </span>
                  <span>
                    بلا حدود
                  </span>
                </div>


                <div>


                  <span>
                    {courseDetails?.course_details?.type !== "webinar" && "شاهد هذه الدورة + أكثر من 750 دورة تدريبية في جميع التخصصات مقدمة من افضل المدربين بالخليج  والوطن العربي"}
                    <span>
                      <Link href="/subscription">
                        اعرف المزيد.
                      </Link>
                    </span>
                  </span>

                  {courseDetails?.course_details?.type !== "webinar" &&
                    <>
                      <div className={styles["monthly_subscription__live-details-list"]}>
                        <div>
                          <DurationIcon />
                        </div>
                        تاريخ الدورة
                      </div>
                      <div className={styles["monthly_subscription__live-details-list"]}>
                        <div>
                          <DurationIcon />
                        </div>
                        الوقت بالساعة بتوقيت الكويت والسعودية
                      </div>
                      <div className={styles["monthly_subscription__live-details-list"]}>
                        <div>
                          <DurationIcon />
                        </div>
                        شاهد الدورة بث مباشر او مسجلة بعد انتهاء البث

                      </div>
                      <div className={styles["monthly_subscription__live-details-list"]}>
                        <div>

                          <CertifIcon />
                        </div>
                        شهادة إتمام اون لاين معتمدة
                      </div>
                      <div className={styles["monthly_subscription__live-details-list"]}>
                        <div>
                          <DocumentIcon />
                        </div>
                        مرفقات حصرية جاهزة للتحميل
                      </div>
                      <div className={styles["monthly_subscription__live-details-list"]}>
                        <div>
                          <DevicesIcon />
                        </div>
                        تابع الدورة من اي لابتوب او موبايل
                      </div>

                      {/* <div>
                    <div>

                      <TickIcon />
                    </div>
                    مشاهدة بلا حدود لأكثر من ٧٥٠ دورة تدريبية في جميع المجالات.
                  </div>
                  <div>
                    <div>

                      <TickIcon />
                    </div>
                    عدد لا نهائي من شهادات إتمام الدورات.
                  </div>
                  <div>
                    <div>

                      <TickIcon />
                    </div>
                    دورات جديدة تضاف شهرياَ.
                  </div>
                  <div>
                    <div>

                      <TickIcon />
                    </div>
                    لا يوجد التزام، يمكنك إلغاء الاشتراك في أي وقت.
                  </div> */}
                    </>}

                </div>

              </div>
              {
                // ((theOption?.liveWebinarDetails?.webinar_type) && (theOption?.liveWebinarDetails?.webinar_type == 'soon')) &&
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
                {/* {toDisplayValues.visible && toDisplayValues.values[1] !== NaN && toDisplayValues.values[1] !== 'NaN' &&
              <div className={styles["monthly-subscription__subscription-timer"]}>
              عرض ٧ أيام تجربة مجانية ينتهي اليوم خلال
                <span> {`${toDisplayValues.values[1]}:${toDisplayValues.values[2]}:${toDisplayValues.values[3]}`} </span>
              </div>} */}
                <Button id="monthly-subscribe-btn" className={styles["monthly-subscription__subscribe-btn-box__btn"]}
                  onClick={() => handleSubscriptionBtn()}>
                  <div>
                    <span>اشترك في تدرب بلا حدود </span>
                  </div>
                </Button>
              </div>

              {/* <div className={styles["monthly-subscription__subscription-value"]}>
            احصل على كل الدورات فقط ب 9 دك / شهر.
            </div> */}
              <div className={styles["monthly-subscription__subscription-value"]} >
                <span>
                  احصل على كل الدورات فقط ب
                  {courseDetails.subscription_sale_price}
                  {courseDetails.currency_symbol} / شهر
                  بدلا من
                </span>
                <span className={styles["amount-strike"]}>
                  {courseDetails.subscription_original_price}
                  {courseDetails.currency_symbol}
                </span>
              </div>
              {/* {toDisplayValues.visible && toDisplayValues.values[3] != NaN && toDisplayValues.values[3] != "NaN" && <div className={styles["monthly-subscription__subscription-value"]}>
              <div style={{color:'#af151f'}}>ستوفر ٤٠٪؜ العرض سينتهي خلال &nbsp;&nbsp;<span> {`${toDisplayValues.values[1]}:${toDisplayValues.values[2]}:${toDisplayValues.values[3]}`} </span></div>
            </div>} */}
              {/* <div className={styles["monthly-subscription__watch-this-course"]}>
          شاهد هذه الدورة + 600 دورة اخرى
          </div> */
              }

              <div className={styles["monthly-subscription__or-box"]}>
                أو
              </div>
            </>
            :
            <div className={styles["monthly-subscription__course-card__course-title"]}>
              {courseDetailsData?.data?.course_details?.title}
            </div>
          }

          {/* <div>

          <div className={styles["monthly-subscription__course-card__price-box"]}>
            <span className={
                styles["monthly-subscription__course-card__price-box__price"]
              }>
              السعر 
            </span>
            <span
              className={
                styles["monthly-subscription__course-card__price-box__price"]
              }>
              {courseDetails.course_details?.discounted_price} 
            </span>
            <span
              className={
                styles["monthly-subscription__course-card__price-box__currency"]
              }
            >
              {courseDetails.course_details?.currency_symbol}
            </span>
          </div>
          {courseDetails.course_details?.price !== courseDetails.course_details?.discounted_price &&
            <div className={styles["monthly-subscription__course-card__old-price-box"]}>
              <div
                className={
                  styles[
                  "monthly-subscription__course-card__old-price-box--line-through"
                  ]
                }
              >
                <span
                  className={
                    styles["monthly-subscription__course-card__old-price-box__price"]
                  }
                >
                  {courseDetails.course_details?.price}
                </span>
                <span
                  className={
                    styles["monthly-subscription__course-card__old-price-box__currency"]
                  }
                >
                  {" "}
                  {courseDetails.course_details?.currency_symbol}{" "}
                </span>
              </div>
              <span
                className={
                  styles["monthly-subscription__course-card__old-price-box__discount"]
                }
              >
                {" "}
                (خصم {Math.ceil(100 - ((courseDetails.course_details?.discounted_price / courseDetails.course_details?.price) * 100))}%){" "}
              </span>
            </div>
          }
        </div> */}

          <div
            className={styles["monthly-subscription__course-card__actions-btns"]}
          >
            <Button onClick={() => {
              courseDetails?.course_details?.discounted_price == 0 ?
                handleFreeCoursesActionBtn(courseDetails.course_details)
                :
                handleCartActionBtn(courseDetails.course_details);
            }} disabled={courseDetails?.course_details?.is_in_cart || disabledCartBtns.includes(courseDetails?.course_details?.id)}
              className={styles["monthly-subscription__course-card__actions-btns__add-to-cart-btn"]}
            >
              {
                courseDetails?.course_details?.type == "webinar" && !userStatus.isUserAuthenticated ?
                  <></>
                  :
                  courseDetails?.course_details?.discounted_price == 0 ?
                    <TvIcon color="#222" />
                    :
                    <CartIcon color="#222" />
              }
              {
                courseDetails?.course_details?.type == "webinar" && !userStatus.isUserAuthenticated ?
                  <span>سجل لمشاهدة البث المباشر مجاناَ</span>
                  :
                  courseDetails?.course_details?.discounted_price == 0 ?
                    <span> ابدأ الآن مجانًا </span>
                    :
                    courseDetails?.course_details?.is_in_cart ?
                      <span> تمت الإضافة </span>
                      :
                      <span> امتلك هذه الدورة </span>
              }
            </Button>


            <Button onClick={() => {
              handleFavActionBtn(courseDetails.course_details);
            }}
              className={
                styles["monthly-subscription__course-card__actions-btns__fav-btn"]
              }
            >
              {
                courseDetails?.course_details?.is_in_favorites ?
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

          {/* Price end */}
          <div className={styles["course-price"]}>
            {/* Orignal price start */}
            {courseDetails?.course_details?.price != courseDetails?.course_details?.discounted_price &&
              <div className={styles["orignal-price"]}>
                بدلاً من
                <span>
                  {courseDetails?.course_details?.currency_symbol}
                </span>
                <span>
                  {courseDetails?.course_details?.price}
                </span>
              </div>
            }
            {/* Orignal price end */}

            {/* Sale price start */}
            {courseDetails?.course_details?.discounted_price !== 0 &&
              <div className={styles["sale-price"]}>
                سعر الدورة
                <span>
                  {courseDetails?.course_details?.currency_symbol}
                </span>
                <span>

                  {courseDetails?.course_details?.discounted_price}
                </span>

              </div>
            }
            {/* Sale price end */}
          </div>
          {/* Price end */}


          {courseDetails?.course_details?.type !== "webinar" &&
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

          {!isMobileView && <div

            className={styles["monthly-subscription__course-card__details-list"]}
          >
            {/* {courseDetails?.course_details?.type == "webinar" &&
            <>
              <div
                className={
                  styles["monthly-subscription__course-card__details-list__item"]
                }
              >
                <DurationIcon />

                <span>تاريخ الدورة</span>
              </div>
              <div
                className={
                  styles["monthly-subscription__course-card__details-list__item"]
                }
              >
                <DurationIcon />
                <span>الوقت بالساعة بتوقيت الكويت والسعودية</span>
              </div>
              <div
                className={
                  styles["monthly-subscription__course-card__details-list__item"]
                }
              >
                <div>
                  <DurationIcon />
                </div>
                <span>شاهد الدورة بث مباشر او مسجلة بعد انتهاء البث</span>
              </div>
            </>
          } */}
            {courseDetails?.course_details?.type !== "webinar" &&
              <>
                <div
                  className={
                    styles["monthly-subscription__course-card__details-list__item"]
                  }
                >
                  <DurationIcon />

                  <span>{Math.round(courseDetailsData?.data?.total_duration / 60 / 60)} ساعات تدريبية</span>
                </div>
                <div
                  className={
                    styles["monthly-subscription__course-card__details-list__item"]
                  }
                >
                  <CertifIcon />

                  <span>شهادة إتمام اون لاين معتمدة</span>
                </div>
                <div
                  className={
                    styles["monthly-subscription__course-card__details-list__item"]
                  }
                >
                  <DocumentIcon />

                  <span>مرفقات حصرية جاهزة للتحميل</span>
                </div>
                <div
                  className={
                    styles["monthly-subscription__course-card__details-list__item"]
                  }
                >
                  <DevicesIcon />

                  <span>تابع الدورة من اي لابتوب او موبايل</span>
                </div>
              </>
            }

          </div>}

          <div

            className={styles["monthly-subscription__course-card__promo-code"]}
          >
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
            {/* <div >
            <div className={styles["monthly-subscription__course-card__price-box"]}>
              <span
                className={
                  styles["monthly-subscription__course-card__price-box__price"]
                }
              >
                {courseDetails.course_details?.price}
              </span>
              <span
                className={
                  styles["monthly-subscription__course-card__price-box__currency"]
                }
              >
                {courseDetails.course_details?.currency_symbol}
              </span>
            </div>
            {courseDetails.course_details?.price !== courseDetails.course_details?.discounted_price &&
              <div className={styles["monthly-subscription__course-card__old-price-box"]}>
                <div
                  className={
                    styles[
                    "monthly-subscription__course-card__old-price-box--line-through"
                    ]
                  }
                >
                  <span
                    className={
                      styles["monthly-subscription__course-card__old-price-box__price"]
                    }
                  >
                    {courseDetails.course_details?.discounted_price}
                  </span>
                  <span
                    className={
                      styles["monthly-subscription__course-card__old-price-box__currency"]
                    }
                  >
                    {" "}
                    {courseDetails.course_details?.currency_symbol}{" "}
                  </span>
                </div>
                <span
                  className={
                    styles["monthly-subscription__course-card__old-price-box__discount"]
                  }
                >
                  {" "}
                  (خصم {Math.ceil(100 - ((courseDetails.course_details?.discounted_price / courseDetails.course_details?.price) * 100))}%){" "}
                </span>
              </div>}
          </div> */}
            <div className={styles["monthly-subscription__course-card__actions-btns"]}
            >
              <Button onClick={() => {
                courseDetails?.course_details?.discounted_price == 0 ?
                  handleFreeCoursesActionBtn(courseDetails.course_details)
                  :
                  handleCartActionBtn(courseDetails?.course_details)
              }}
                disabled={courseDetails?.course_details?.is_in_cart || disabledCartBtns.includes(courseDetails?.course_details?.id)}
                className={
                  styles[
                  "monthly-subscription__course-card__actions-btns__add-to-cart-btn"
                  ]
                }
              >
                {
                  courseDetails?.course_details?.discounted_price == 0 ?
                    <TvIcon color="#222" />
                    :
                    <CartIcon color="#222" />
                }
                {
                  courseDetails?.course_details?.discounted_price == 0 ?
                    <span> ابدأ الآن مجانًا </span>
                    :
                    courseDetails?.course_details?.is_in_cart ?
                      <span> تمت الإضافة </span>
                      :
                      <span> امتلك هذه الدورة </span>
                }
              </Button>


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
    </>
  )
}
