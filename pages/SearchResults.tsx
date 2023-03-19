import React, { useState, useEffect } from 'react'
// import SearchResultsPage from "modules/Search Results/SearchResultsPage";
import { Container } from "react-bootstrap";
import MetaTagsGenerator from 'modules/_Shared/utils/MetaTagsGenerator';
import Router, { useRouter } from 'next/router';
import { axiosInstance } from "configurations/axios/axiosConfig";
import { useSelector } from "react-redux";
import { toggleLoader } from "modules/_Shared/utils/toggleLoader";

import dynamic from 'next/dynamic';
import withAuth from 'configurations/auth guard/AuthGuard';
const SearchResultsPage = dynamic(() => import("modules/Search Results/SearchResultsPage"));
const NotificationBar = dynamic(() => import("common/Notification bar/NotificationBar"));
const CustomSignupPopup = dynamic(() => import("common/Custom signup popup/CustomSignupPopup"));

function SearchResults(props: any) {
  const [isCustomSignupModalVisible, setIsCustomSignupModalVisible] = useState(false);
  const { seoData } = props;
  const router = useRouter();
  const themeState = useSelector((state: any) => state.themeState.theme);
  const userStatus = useSelector((state: any) => state.userAuthentication);

  useEffect(() => {

    if (props?.queryParams?.aid && !localStorage.getItem("affiliate_id")) {
      axiosInstance
        .post(`coupon_link/${props?.queryParams?.aid}/${props?.queryParams?.code}`)
        .then((res: any) => {
          localStorage.setItem("coupon_code", res?.data?.data?.coupon_code);
          localStorage.setItem("affiliate_id", `${props?.queryParams?.aid}`);
          localStorage.setItem("cced", JSON.stringify(Math.floor(new Date().getTime() / 1000) + 604800));
          setTimeout(() => {
            if (userStatus.isUserAuthenticated == false) {
              setIsCustomSignupModalVisible(true);
            }
          }, 3000);

        })
        .catch((error: any) => {
          console.log("error", error);
        });
    }

    if (localStorage.getItem("affiliate_id") &&
      Math.floor(new Date().getTime() / 1000) > Number(localStorage.getItem("cced"))) {
      localStorage.removeItem("affiliate_id");
      localStorage.removeItem("cced");
      localStorage.setItem("coupon_code", "");
      setTimeout(() => {
        if (userStatus.isUserAuthenticated == false) {
          setIsCustomSignupModalVisible(true);
        }
      }, 3000);

    }

  }, [props.queryParams]);

  return (
    <>
      {seoData &&
        <MetaTagsGenerator title={seoData?.seo_title}
          description={seoData?.seo_metadesc}
          img={seoData?.seo_image} />}
      <Container data-theme={themeState} fluid="xxl" style={{ backgroundColor: "var(--tadarab-light-bg)" }}>
        <SearchResultsPage />
        <CustomSignupPopup setIsCustomSignupModalVisible={setIsCustomSignupModalVisible} isCustomSignupModalVisible={isCustomSignupModalVisible} />
      </Container>
    </>
  )
}

export default withAuth(SearchResults);


export async function getServerSideProps(context: any) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}courses/?keyword=${context?.query?.q}&page=1&limit=16`)
    const seoData = await res.json();
    toggleLoader("show");
    return { props: { seoData: seoData.data, queryParams: context.query } };
  } catch {
    return { props: { seoData: {} } };
  }
}
