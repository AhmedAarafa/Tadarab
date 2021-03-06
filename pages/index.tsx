import type { NextPage } from "next";
import HomePage from "./HomePage";
import 'normalize.css';
import MetaTagsGenerator from "modules/_Shared/utils/MetaTagsGenerator";
import { useEffect } from "react";
import { axiosInstance } from "configurations/axios/axiosConfig";

const Home: NextPage = (props: any) => {
  const { seoData } = props;

  useEffect(() => {

    if (props.queryParams.aid &&
      !localStorage.getItem("affiliate_id")) {
      axiosInstance
          .post(`coupon_link/${props.queryParams.aid}/${props.queryParams.code}`)
          .then((response:any) => {
            localStorage.setItem("coupon_code", response?.data?.data?.coupon_code);
            localStorage.setItem("affiliate_id", props.queryParams.aid);
            localStorage.setItem("cced", JSON.stringify(  Math.floor(new Date().getTime() / 1000) + 604800  ));
          })
          .catch((error:any)=>{
            console.log("error", error);
          });
    }

    if(localStorage.getItem("affiliate_id") &&
    Math.floor(new Date().getTime() / 1000) > Number(localStorage.getItem("cced"))){
      localStorage.removeItem("affiliate_id");
      localStorage.removeItem("cced");
      localStorage.setItem("coupon_code", "");

    }
  }, [props.queryParams]);


  return (
    <>
      {seoData && <MetaTagsGenerator title={seoData?.seo_title}
        description={seoData?.seo_metadesc}
        img={seoData?.seo_image} />}
      <HomePage />
    </>
  );
};

export async function getServerSideProps(context: any) {
  console.log("context", context.query);
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}home/?country_code=null`)
    const seoData = await res.json()
    return { props: { seoData: seoData.data, queryParams: context.query } };
  } catch {
    return { props: { seoData: {} } };
  }
}

export default Home;
