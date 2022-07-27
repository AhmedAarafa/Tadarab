import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { axiosInstance } from "configurations/axios/axiosConfig";
import { toggleLoader } from "modules/_Shared/utils/toggleLoader";

// import CategoryDescription from "modules/Category/Category description/CategoryDescription";
// import CategoryCourses from "modules/Category/Category courses/CategoryCourses";
// import CategoryTopics from "modules/Category/Category topics/CategoryTopics";
// import CategoryTrainers from "modules/Category/Category trainers/CategoryTrainers";
// import TrainingCourses from "modules/Category/Training courses/TrainingCourses";
import { Container } from "react-bootstrap";
import { FBPixelEventsHandler } from 'modules/_Shared/utils/FBPixelEvents';
import dynamic from 'next/dynamic';
import MetaTagsGenerator from "modules/_Shared/utils/MetaTagsGenerator";
import MobileCheckoutBar from "modules/Course details/Mobile checkout bar/MobileCheckoutBar";
import useResize from "custom hooks/useResize";

const CategoryDescription = dynamic(() => import("modules/Category/Category description/CategoryDescription"));
const CategoryCourses = dynamic(() => import("modules/Category/Category courses/CategoryCourses"));
const CategoryTopics = dynamic(() => import("modules/Category/Category topics/CategoryTopics"));
const CategoryTrainers = dynamic(() => import("modules/Category/Category trainers/CategoryTrainers"));
const TrainingCourses = dynamic(() => import("modules/Category/Training courses/TrainingCourses"));
const NotificationBar = dynamic(() => import("common/Notification bar/NotificationBar"));


export default function Category(props: any) {
  const router = useRouter()
  const [category, setCategory] = useState<any>({});
  const [pagination, setPagination] = useState<any>({});
  const Router = useRouter();
  const { slug } = Router.query;
  const { seoData } = props;

  useEffect(() => {
    toggleLoader("show");
    const MOBILECHECKOUTBAR: any = document.getElementById("mobile-checkout-bar");
    MOBILECHECKOUTBAR.style.cssText = `display:flex`;
  }, [])

  useEffect(() => {
    if (Router.query.slug) {

      if (Router.query?.aid) {
        axiosInstance
          .post(`coupon_link/${Router.query.aid}/${Router.query.code}`)
          .then((res: any) => {
            localStorage.setItem("coupon_code", res?.data?.data?.coupon_code);
            localStorage.setItem("affiliate_id", `${Router.query.aid}`);
            localStorage.setItem("cced", JSON.stringify(Math.floor(new Date().getTime() / 1000) + 604800));

            axiosInstance
              .get(`categories/${slug}/?country_code=null&page=1&limit=12`)
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
          .get(`categories/${slug}/?country_code=null&page=1&limit=12`)
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
      <Container fluid="xxl">
        <MobileCheckoutBar />
        <CategoryDescription data={category} />
        {/* <CategoryCourses data={category} />  */}
        {/* <CategoryTopics data={category} /> */}
        <CategoryTrainers data={category} />
        <TrainingCourses data={category} pagination={pagination} />
      </Container>
    </>
  )
}

export async function getServerSideProps(context: any) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}categories/${context?.params?.slug}/?country_code=null&page=1&limit=12`)
    const seoData = await res.json()
    return { props: { seoData: seoData.data } };
  } catch {
    return { props: { seoData: {} } };
  }
}
