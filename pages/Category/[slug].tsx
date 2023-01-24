import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { axiosInstance } from "configurations/axios/axiosConfig";
import { toggleLoader } from "modules/_Shared/utils/toggleLoader";
import { Container } from "react-bootstrap";
import { FBPixelEventsHandler } from 'modules/_Shared/utils/FBPixelEvents';
import dynamic from 'next/dynamic';
import MetaTagsGenerator from "modules/_Shared/utils/MetaTagsGenerator";
import MobileCheckoutBar from "modules/Course details/Mobile checkout bar/MobileCheckoutBar";
import useResize from "custom hooks/useResize";
import Faq from "common/Subscription faqs/FAQ/Faq";
import NotFound from "pages/404";
import { NotFoundRoutesHandler } from "modules/_Shared/utils/notFoundRoutesHandler";
import { useSelector } from 'react-redux';

const CategoryDescription = dynamic(() => import("modules/Category/Category description/CategoryDescription"));
const CategoryCourses = dynamic(() => import("modules/Category/Category courses/CategoryCourses"));
const CategoryTopics = dynamic(() => import("modules/Category/Category topics/CategoryTopics"));
const CategorySkills = dynamic(() => import("modules/Category/Category skills/CategorySkills"));
const CategoryTrainers = dynamic(() => import("modules/Category/Category trainers/CategoryTrainers"));
const TrainingCourses = dynamic(() => import("modules/Category/Training courses/TrainingCourses"));
const ExploreCategory = dynamic(() => import("modules/Category/Explore category/ExploreCategory"));
const SubscriptionBenefits = dynamic(() => import("modules/Category/Subscription benefits/SubscriptionBenefits"));
const MostPopularCourses = dynamic(() => import("modules/Category/Most popular courses/MostPopularCourses"));
const ExploreOtherCategories = dynamic(() => import("modules/Category/Explore other categories/ExploreOtherCategories"));
const Testimonials = dynamic(() => import("modules/Category/Testimonials/Testimonials"));
const NotificationBar = dynamic(() => import("common/Notification bar/NotificationBar"));
const StickySignupBar = dynamic(() => import("common/Sticky signup bar/StickySignupBar"));

export default function Category(props: any) {
  const router = useRouter()
  const [category, setCategory] = useState<any>({});
  const [pagination, setPagination] = useState<any>({});
  const [categoriesList, setCategoriesList] = useState([]);
  const Router = useRouter();
  const { slug } = Router.query;
  const { seoData } = props;
  const [isFound, setIsFound] = useState(true);
  const themeState = useSelector((state: any) => state.themeState.theme);

  useEffect(() => {
    toggleLoader("show");
    const MOBILECHECKOUTBAR: any = document.getElementById("mobile-checkout-bar");
    MOBILECHECKOUTBAR ? MOBILECHECKOUTBAR.style.cssText = `display:flex` : null;
    axiosInstance
      .get(`categories`)
      .then(function (response: any) {
        setIsFound(NotFoundRoutesHandler(response));
        setCategoriesList(response?.data?.data?.categories);
        // toggleLoader("hide");
      })
      .catch(function (error) {
        toggleLoader("hide");
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (Router.query.slug) {
      toggleLoader("show");

      if (Router.query?.aid && !localStorage.getItem("affiliate_id")) {
        axiosInstance
          .post(`coupon_link/${Router.query.aid}/${Router.query.code}`)
          .then((res: any) => {
            localStorage.setItem("coupon_code", res?.data?.data?.coupon_code);
            localStorage.setItem("affiliate_id", `${Router.query.aid}`);
            localStorage.setItem("cced", JSON.stringify(Math.floor(new Date().getTime() / 1000) + 604800));

            axiosInstance
              .get(`categories/${slug}/?page=1&limit=12`)
              .then(function (response: any) {
                setCategory(response.data.data);
                setPagination(response.data.pagination);
                FBPixelEventsHandler(response.data.fb_tracking_events, null);
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
          .get(`categories/${slug}/?page=1&limit=12`)
          .then(function (response: any) {
            setCategory(response.data.data);
            setPagination(response.data.pagination);
            FBPixelEventsHandler(response.data.fb_tracking_events, null);
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

  }, [Router.query]);
  // [] empty dependency array to be executed once (like onLoad) ... if it is NOT empty, it will execute when the dependencies change.

  const viewportWidthDetector = () => {
    const MOBILECHECKOUTBAR: any = document.getElementById("mobile-checkout-bar");
    if (window.innerWidth >= 576) {
      MOBILECHECKOUTBAR ? MOBILECHECKOUTBAR.style.cssText = `display:none` : null;
    } else {
      MOBILECHECKOUTBAR ? MOBILECHECKOUTBAR.style.cssText = `display:flex` : null;
    }
  }
  useResize(viewportWidthDetector);

  return (
    <>
      {seoData && <MetaTagsGenerator title={seoData?.seo_title}
        description={seoData?.seo_metadesc}
        img={seoData?.seo_image} />}
      {
        isFound ?
          <Container data-theme={themeState} fluid="xxl" style={{ backgroundColor: "var(--tadarab-light-bg)" }}>
            {/* <MobileCheckoutBar data={category} /> */}
            <CategoryDescription data={category} categoriesList={categoriesList} />
            <CategorySkills data={category} />
            <MostPopularCourses data={category} pagination={pagination} />
            {/* <CategoryCourses data={category} />  */}
            {/* <CategoryTopics data={category} /> */}
            <CategoryTrainers data={category} />
            <ExploreOtherCategories data={category} categoriesList={categoriesList} />
            <TrainingCourses data={category} pagination={pagination} />
            <ExploreCategory data={category} />
            <Testimonials data={category} />
            <SubscriptionBenefits />
            <Faq />
            <StickySignupBar />
          </Container>
          :
          <NotFound />

      }
    </>
  )
}

export async function getServerSideProps(context: any) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}categories/${context?.params?.slug}/?page=1&limit=12`)
    const seoData = await res.json();
    toggleLoader("show");
    return { props: { seoData: seoData.data } };
  } catch {
    return { props: { seoData: {} } };
  }
}
