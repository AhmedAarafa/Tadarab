import React, { useEffect, useState, memo } from "react";
import styles from "styles/course-details.module.css";
import CourseCard from "modules/Course details/Course card/CourseCard";
import CourseAdvertisement from "modules/Course details/Course Advertisement/CourseAdvertisement";
import WhatYouWillLearn from "modules/Course details/What you will learn/WhatYouWillLearn";
import CourseDetailsSection from "modules/Course details/Course details section/CourseDetailsSection";
import CourseKeywords from "modules/Course details/Course keywords/CourseKeywords";
import CourseRequirements from "modules/Course details/Course requirements/CourseRequirements";
import CourseContent from "modules/Course details/Course content/CourseContent";
import TrainerInfo from "modules/Course details/Trainer info/TrainerInfo";
import GuaranteeCard from "modules/Course details/Guarantee card/GuaranteeCard";
import CourseCertificate from "modules/Course details/Course certificate/CourseCertificate";
import FAQ from "modules/Course details/FAQ/FAQ";
import SpecialOffer from "modules/Course details/Special offer/SpecialOffer";
import CourseReview from "modules/Course details/Course review/CourseReview";
import CourseSubscribers from "modules/Course details/Course subscribers/CourseSubscribers";
import CommentsSection from "modules/Course details/Comments section/CommentsSection";
import MobileNavTabsBar from "modules/Course details/Mobile nav tabs bar/MobileNavTabsBar";
import MobileCheckoutBar from "modules/Course details/Mobile checkout bar/MobileCheckoutBar";
import MyCourse from "modules/Course details/My course/MyCourse";
import NotificationBar from "common/Notification bar/NotificationBar";
import MonthlySubscriptionCard from "modules/Course details/Monthly subscription card/MonthlySubscriptionCard";
import withAuth from "configurations/auth guard/AuthGuard";
import { Row, Col, Container } from "react-bootstrap";
import { axiosInstance } from "configurations/axios/axiosConfig";
import { useDispatch, useSelector } from "react-redux";
import { setCourseDetailsData } from "configurations/redux/actions/courseDetailsData";
import TadarabFBPixel from "modules/_Shared/utils/fbPixel";
import TadarabGA from "modules/_Shared/utils/ga";
import { GAProductimpressionEventHandler } from "modules/_Shared/utils/GAEvents"
import { useRouter } from 'next/router';
import { Course } from "_models/Course";
import { FBPixelEventsHandler } from "modules/_Shared/utils/FBPixelEvents";
import TPlayer from "common/TPlayer/TPlayer";
import dynamic from 'next/dynamic';
import Head from "next/head";
import MetaTagsGenerator from "modules/_Shared/utils/MetaTagsGenerator";
import { toggleLoader } from "modules/_Shared/utils/toggleLoader";
import { subscriptionCounter } from "modules/_Shared/utils/subscriptionCounter";
import NotFound from "pages/404";
import { NotFoundRoutesHandler } from "modules/_Shared/utils/notFoundRoutesHandler";
import { useInView } from 'react-hook-inview';
import useResize from "custom hooks/useResize";

function CourseDetails(props: any) {
  const [colFullWidth, setColFullWidth] = useState(false);
  const [originalCardPlacement, setOriginalCardPlacement] = useState(false);
  const [courseId, setCourseId] = useState("");
  const [isMobileView, setIsMobileView] = useState(false);
  const [courseData, setCourseData] = useState({});
  const [liveWebinar, setLiveWebinar] = useState({});
  const [paymentType, setPaymentType] = useState("subscription");
  const dispatch = useDispatch();
  const [isFound, setIsFound] = useState(true);
  const courseDetailsData = useSelector((state: any) => state.courseDetailsData);
  const themeState = useSelector((state: any) => state.themeState.theme);
  const Router = useRouter();
  const { slug } = Router.query;
  const { seoData } = props;


  useEffect(() => {
    toggleLoader("show");
    subscriptionCounter();
    window.addEventListener("scroll", () => {
      GAProductimpressionEventHandler("course-subscribers__course-card");
    })

    return () => {
      window.removeEventListener("scroll", () => {
        return;
      })
    }
  }, []);

  useEffect(() => {

    const rootFontSize = parseFloat(
      window
        .getComputedStyle(document.getElementsByTagName("html")[0])
        .getPropertyValue("font-size")
    );
    const tabsResponsiveBar: any = document.getElementById("tabs-responsive-bar");
    // const MOBILECHECKOUTBAR: any = document.getElementById("mobile-checkout-bar");
    const navbar: any = document.getElementById("nav");
    let addToCartBtn: any = null;
    if (document.documentElement.clientWidth >= 576) {
      let addToCartBtn: any = null;
      setOriginalCardPlacement(true);
      tabsResponsiveBar ? tabsResponsiveBar.style.cssText = `display:none` : null;
      // MOBILECHECKOUTBAR ? MOBILECHECKOUTBAR.style.cssText = `display:none` : null;
      window.addEventListener("scroll", function () {
        tabsResponsiveBar ? tabsResponsiveBar.style.cssText = `display:none` : null;
        // MOBILECHECKOUTBAR ? MOBILECHECKOUTBAR.style.cssText = `display:none` : null;
        const projectsSection: any = document.getElementById("practical-projects-section");
        const reviewsSection: any = document.getElementById("reviews-section");
        const courseSubscribersSection: any = document.getElementById("course-subscribers-section");
        if (window.scrollY >= (
          // projectsSection?.offsetTop ? projectsSection?.offsetTop : 999999999999999999999) ||
          // window.scrollY >= (reviewsSection?.offsetTop ? reviewsSection?.offsetTop : 999999999999999999999) ||
          // window.scrollY >= 
          courseSubscribersSection?.offsetTop
        )) {
          setColFullWidth(true);
        } else if
          (
          // window.scrollY < projectsSection?.offsetTop ||
          // window.scrollY < reviewsSection?.offsetTop ||
          window.scrollY < courseSubscribersSection?.offsetTop) {
          setColFullWidth(false);
        }
      });
    } else {

      setOriginalCardPlacement(false);
      window.addEventListener("scroll", function () {
        let addToCartBtn: any = null;
        addToCartBtn = document.getElementById("monthly-subscribe-btn");

        if (addToCartBtn) {
          // const MOBILECHECKOUTBAR: any = document.getElementById("mobile-checkout-bar");
          if (window.scrollY >= addToCartBtn.offsetTop) {
            tabsResponsiveBar ? tabsResponsiveBar.style.cssText = `
         display:flex;
         align-items:center;
         justify-content:space-around;
         top:${navbar?.offsetHeight}px;
         ` : null;
            //     MOBILECHECKOUTBAR ? MOBILECHECKOUTBAR.style.cssText = `
            //  display:flex;
            //  align-items:center;
            //  justify-content:space-evenly;
            //  bottom:0;
            //  `: null;

          } else if (window.scrollY < addToCartBtn.offsetTop) {
            tabsResponsiveBar ? tabsResponsiveBar.style.cssText = `display:none` : null;
            // MOBILECHECKOUTBAR ? MOBILECHECKOUTBAR.style.cssText = `display:none` : null;
          }
        }

      });
    }

    window.addEventListener("resize", () => {
      if (document.documentElement.clientWidth >= 576) {
        let addToCartBtn: any = null;
        setOriginalCardPlacement(true);
        tabsResponsiveBar ? tabsResponsiveBar.style.cssText = `display:none` : null;
        // MOBILECHECKOUTBAR ? MOBILECHECKOUTBAR.style.cssText = `display:none` : null;
        window.addEventListener("scroll", function () {
          tabsResponsiveBar ? tabsResponsiveBar.style.cssText = `display:none` : null;
          // MOBILECHECKOUTBAR ? MOBILECHECKOUTBAR.style.cssText = `display:none` : null;

          const projectsSection: any = document.getElementById("practical-projects-section");
          const reviewsSection: any = document.getElementById("reviews-section");
          const courseSubscribersSection: any = document.getElementById("course-subscribers-section");
          if (window.scrollY >= (
            // projectsSection?.offsetTop ? projectsSection?.offsetTop : 999999999999999999999) ||
            // window.scrollY >= (reviewsSection?.offsetTop ? reviewsSection?.offsetTop : 999999999999999999999) ||
            // window.scrollY >= 
            courseSubscribersSection?.offsetTop
          )) {
            setColFullWidth(true);
          } else if (
            // window.scrollY < projectsSection?.offsetTop ||
            // window.scrollY < reviewsSection?.offsetTop ||
            window.scrollY < courseSubscribersSection?.offsetTop) {
            setColFullWidth(false);
          }
        });
      }
      else {

        setOriginalCardPlacement(false);
        window.addEventListener("scroll", function () {
          let addToCartBtn: any = null;
          addToCartBtn = document.getElementById("monthly-subscribe-btn");

          if (addToCartBtn) {

            if (window.scrollY >= addToCartBtn?.offsetTop) {
              tabsResponsiveBar ? tabsResponsiveBar.style.cssText = `
            display:flex;
            align-items:center;
            justify-content:space-around;
            top:${navbar?.offsetHeight}px;
            ` : null;
              //   MOBILECHECKOUTBAR ? MOBILECHECKOUTBAR.style.cssText = `
              // display:flex;
              // align-items:center;
              // justify-content:space-evenly;
              // bottom:0;
              // ` : null;
            } else if (window.scrollY < addToCartBtn?.offsetTop) {
              tabsResponsiveBar ? tabsResponsiveBar.style.cssText = `display:none` : null;
              // MOBILECHECKOUTBAR ? MOBILECHECKOUTBAR.style.cssText = `display:none` : null;
            }
          }

        });
      }
    });



    if (Router.query.slug) {

      if (Router.query?.aid && !localStorage.getItem("affiliate_id")) {
        axiosInstance
          .post(`coupon_link/${Router.query.aid}/${Router.query.code}`)
          .then((res: any) => {
            localStorage.setItem("coupon_code", res?.data?.data?.coupon_code);
            localStorage.setItem("affiliate_id", `${Router.query.aid}`);
            localStorage.setItem("cced", JSON.stringify(Math.floor(new Date().getTime() / 1000) + 604800));

            axiosInstance
              .get(`courses/${slug}`)
              .then(function (response: any) {
                setIsFound(NotFoundRoutesHandler(response));

                const data = response?.data?.data;
                const webinardetails = response?.data?.data?.course_details;
                setLiveWebinar(webinardetails);


                setCourseId(response?.data?.data?.course_details?.id);
                dispatch(setCourseDetailsData(data));
                setCourseData(data);

                let tadarabGA = new TadarabGA();
                let referrer = "";
                let myHost = window.location.host;
                if (document.referrer.includes(myHost)) {
                  document.referrer.replace(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}`, '').split('/')[0] == ""
                    ?
                    referrer = "homepage"
                    :
                    referrer = document.referrer.replace(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}`, '').split('/')[0]

                } else {
                  referrer = "homepage";
                }
                tadarabGA.tadarab_fire_traking_GA_code("product_details_views",
                  {
                    products: [{
                      name: data?.course_details?.title,
                      id: data?.course_details?.id,
                      price: data?.course_details?.discounted_price_usd,
                      brand: "Tadarab",
                      category: data?.course_details?.categories && data?.course_details?.categories[0]?.title,
                      variant: "Single Course"
                    }],
                    list: referrer
                  });

                FBPixelEventsHandler(response?.data?.fb_tracking_events, null);
                toggleLoader("hide");

              })
              .catch(function (error) {
                toggleLoader("hide");
              });
          })
          .catch((error: any) => {
            console.log("error", error);
          });
      } else {
        axiosInstance
          .get(`courses/${slug}`)
          .then(function (response: any) {
            setIsFound(NotFoundRoutesHandler(response));
            const data = response?.data?.data;
            const webinardetails = response?.data?.data?.course_details;
            setLiveWebinar(webinardetails);
            setCourseId(response?.data?.data?.course_details?.id);
            dispatch(setCourseDetailsData(data));
            setCourseData(data);

            let tadarabGA = new TadarabGA();
            let referrer = "";
            let myHost = window.location.host;
            if (document.referrer.includes(myHost)) {
              document.referrer.replace(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}`, '').split('/')[0] == ""
                ?
                referrer = "homepage"
                :
                referrer = document.referrer.replace(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}`, '').split('/')[0]

            } else {
              referrer = "homepage";
            }
            tadarabGA.tadarab_fire_traking_GA_code("product_details_views",
              {
                products: [{
                  name: data?.course_details?.title,
                  id: data?.course_details?.id,
                  price: data?.course_details?.discounted_price_usd,
                  brand: "Tadarab",
                  category: data?.course_details?.categories && data?.course_details?.categories[0]?.title,
                  variant: "Single Course"
                }],
                list: referrer
              });

            FBPixelEventsHandler(response?.data?.fb_tracking_events, null);
            toggleLoader("hide");
          })
          .catch(function (error) {
            toggleLoader("hide");
          });
      }

      if (localStorage.getItem("affiliate_id") &&
        Math.floor(new Date().getTime() / 1000) > Number(localStorage.getItem("cced"))) {
        localStorage.removeItem("affiliate_id");
        localStorage.removeItem("cced");
        localStorage.setItem("coupon_code", "");

      }


    }



    return () => {
      window.removeEventListener("resize", () => {
        return;
      });
      window.removeEventListener("scroll", () => {
        return;
      });
    };


  }, [Router.query]);

  useResize((
    () => {
      if (window.innerWidth < 576) {
        setIsMobileView(true);
      } else {
        setIsMobileView(false);
      }
    }
  ))

  const [faqsRef, isFaqsVisible] = useInView({
    threshold: 1,
    unobserveOnEnter: true
  });

  const [commentsRef, isCommentsVisible] = useInView({
    threshold: 1,
    unobserveOnEnter: true
  });

  const [reviewsRef, isReviewsVisible] = useInView({
    threshold: 1,
    unobserveOnEnter: true
  });

  const [subscriptionCardRef, isSubscriptionCardVisible] = useInView({
    threshold: 1
  });

  return (
    <>
      {seoData &&
        <MetaTagsGenerator title={seoData?.seo_title}
          description={seoData?.seo_metadesc}
          img={seoData?.seo_image} />}

      {
        isFound ?
          <Container data-theme={themeState} fluid="xxl" style={{ backgroundColor: "var(--tadarab-light-bg)" }}>
            {
              courseDetailsData?.data &&
              <>
                {((JSON.stringify(courseDetailsData?.data) !== "[]") && (!courseDetailsData?.data?.course_details?.is_purchased)) &&
                  <>
                    <MobileNavTabsBar />
                    {/* {
                      !isSubscriptionCardVisible && isMobileView && <MobileCheckoutBar data={courseData} />
                    } */}
                    {isMobileView && <MobileCheckoutBar data={courseData} />}

                    <Row className={styles["course-details-row"]}>
                      <Col xs={12} sm={8}>
                        <CourseAdvertisement />
                        {originalCardPlacement == false &&
                          <div ref={subscriptionCardRef}>
                            <MonthlySubscriptionCard liveWebinarDetails={liveWebinar} setPaymentType={setPaymentType} />
                          </div>
                        }
                        {courseDetailsData?.data?.course_details?.key_points !== null &&
                          JSON.stringify(courseDetailsData?.data?.course_details?.key_points) !== "[]" &&
                          <WhatYouWillLearn />
                        }
                        <CourseDetailsSection />
                        {courseDetailsData?.data?.course_details?.tags !== null &&
                          JSON.stringify(courseDetailsData?.data?.course_details?.tags) !== "[]" &&
                          <CourseKeywords />
                        }
                        {courseDetailsData?.data?.course_details?.requirements !== null &&
                          JSON.stringify(courseDetailsData?.data?.course_details?.requirements) !== "[]" &&
                          <CourseRequirements />
                        }
                        <CourseContent />
                        <TrainerInfo />
                        <GuaranteeCard />
                        <CourseCertificate />
                        {
                          <div ref={faqsRef}>
                            {isFaqsVisible && <FAQ Cid={courseId} />}
                          </div>
                        }
                        <SpecialOffer Cid={courseId} />
                      </Col>
                      {
                        originalCardPlacement == true &&
                        <Col xs={colFullWidth ? 12 : 4} id="card-column">
                          {originalCardPlacement == true && <MonthlySubscriptionCard liveWebinarDetails={liveWebinar} setPaymentType={setPaymentType} />}
                        </Col>
                      }
                    </Row>
                    {
                      <div ref={reviewsRef}>
                        {isReviewsVisible &&
                          <Row className={styles["course-details__course-reviews"]}>
                            <CourseReview Cid={courseId} />
                          </Row>}
                      </div>
                    }
                    <Row className={styles["course-details__course-subscribers"]}>
                      <CourseSubscribers />
                    </Row>

                    {
                      <div ref={commentsRef}>
                        {isCommentsVisible &&
                          <Row className={styles["course-details__comments-section"]}>
                            <CommentsSection Cid={courseId} />
                          </Row>}
                      </div>
                    }
                  </>
                }
                {(courseDetailsData?.data?.course_details?.is_purchased) && <MyCourse Cid={courseId} />}
              </>
            }
          </Container>
          :
          <NotFound />
      }

    </>
  );
}

export async function getServerSideProps(context: any) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}courses/${context?.params?.slug}`)
    const seoData = await res.json();
    toggleLoader("show");
    return { props: { seoData: seoData.data } }
  } catch {
    return { props: { seoData: {} } }
  }
}

export default withAuth(memo(CourseDetails));