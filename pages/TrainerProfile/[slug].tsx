import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { axiosInstance } from "configurations/axios/axiosConfig";
import { useDispatch, useSelector } from "react-redux";
import { setTrainerProfileData } from "configurations/redux/actions/trainerProfileData";
import { Trainer } from "_models/Trainer";
import Router, { useRouter } from 'next/router';
import { GAProductimpressionEventHandler } from "modules/_Shared/utils/GAEvents";
import TadarabFBPixel from "modules/_Shared/utils/fbPixel";
import { FBPixelEventsHandler } from "modules/_Shared/utils/FBPixelEvents";
import dynamic from 'next/dynamic';
import MetaTagsGenerator from "modules/_Shared/utils/MetaTagsGenerator";
import { toggleLoader } from "modules/_Shared/utils/toggleLoader";
import MobileCheckoutBar from "modules/Course details/Mobile checkout bar/MobileCheckoutBar";
import useResize from "custom hooks/useResize";
import NotFound from "pages/404";
import { NotFoundRoutesHandler } from "modules/_Shared/utils/notFoundRoutesHandler";

const TrainerProfilePage = dynamic(() => import("modules/Trainer profile/Trainer profile page/TrainerProfilePage"));
const NotificationBar = dynamic(() => import("common/Notification bar/NotificationBar"));

export default function TrainerProfile(props: any) {
  const dispatch = useDispatch();
  const router = useRouter();
  const trainerProfileData = useSelector((state: any) => state.trainerProfileData);
  const { seoData } = props;
  const [trainerData, setTrainerData] = useState({});
  const [isFound, setIsFound] = useState(true);
  const themeState = useSelector((state: any) => state.themeState.theme);


  useEffect(() => {
    toggleLoader("show");
    window.addEventListener("scroll", () => {
      GAProductimpressionEventHandler("trainer-courses__course-card");
    })

    return () => {
      window.removeEventListener("scroll", () => {
        return;
      })
    }

  }, [])

  useEffect(() => {
    const { slug } = router.query;

    if (router.query.slug) {

      if (Router.query?.aid && !localStorage.getItem("affiliate_id")) {
        axiosInstance
          .post(`coupon_link/${Router.query.aid}/${Router.query.code}`)
          .then((res: any) => {
            localStorage.setItem("coupon_code", res?.data?.data?.coupon_code);
            localStorage.setItem("affiliate_id", `${Router.query.aid}`);
            localStorage.setItem("cced", JSON.stringify(Math.floor(new Date().getTime() / 1000) + 604800));

            axiosInstance
              .get(`trainers/${slug}/?limit=10&page=1`)
              .then(function (response: any) {
                setIsFound(NotFoundRoutesHandler(response));
                const data: Trainer = response.data.data;
                dispatch(setTrainerProfileData(response.data));
                setTrainerData(response?.data?.data);
                FBPixelEventsHandler(response.data.fb_tracking_events, null);
                toggleLoader("hide");

              })
              .catch(function (error) {
                toggleLoader("hide");
                console.log(error);
              });
          })
          .catch((error: any) => {
            console.log("error", error);
          });
      } else {
        axiosInstance
          .get(`trainers/${slug}/?limit=10&page=1`)
          .then(function (response: any) {
            setIsFound(NotFoundRoutesHandler(response));
            const data: Trainer = response.data.data;
            dispatch(setTrainerProfileData(response.data));
            setTrainerData(response?.data?.data);
            FBPixelEventsHandler(response.data.fb_tracking_events, null);
            toggleLoader("hide");

          })
          .catch(function (error) {
            toggleLoader("hide");
            console.log(error);
          });
      }

      if (localStorage.getItem("affiliate_id") &&
        Math.floor(new Date().getTime() / 1000) > Number(localStorage.getItem("cced"))) {
        localStorage.removeItem("affiliate_id");
        localStorage.removeItem("cced");
        localStorage.setItem("coupon_code", "");

      }


    }


  }, [router.query]);

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
        {console.log("seoData",seoData)
        }
      {
        isFound ?
          <Container data-theme={themeState} fluid="xxl" style={{backgroundColor:"var(--tadarab-light-bg)"}}>
            <MobileCheckoutBar data={trainerData} />
            <TrainerProfilePage />
          </Container>
          :
          <NotFound />
      }
    </>
  );
}

export async function getServerSideProps(context: any) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}trainers/${context?.params?.slug}/?limit=10&page=1`)
    const seoData = await res.json()
    return { props: { seoData: seoData.data } }
  } catch {
    return { props: { seoData: {} } }
  }
}
