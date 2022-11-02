import React, { useEffect } from 'react';
import { Container } from "react-bootstrap";
import dynamic from 'next/dynamic';
import MetaTagsGenerator from "modules/_Shared/utils/MetaTagsGenerator";
import { useSelector } from "react-redux";

const CookiesTermsPage = dynamic(() => import("modules/Static pages/Cookies/CookiesPage"));

export default function InstructorTerms(props: any) {
  const themeState = useSelector((state: any) => state.themeState.theme);


    const { seoData } = props;
    return (
        <>
         {seoData &&
            <MetaTagsGenerator title={seoData?.seo_title} 
            description={seoData?.seo_metadesc} 
            img={seoData?.seo_image} />}
            <Container data-theme={themeState} fluid="xxl" style={{backgroundColor:"var(--tadarab-light-bg)"}}>
                <CookiesTermsPage />
            </Container>
        </>
    )
}

export async function getServerSideProps() {
    try{
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}static/cookies`)
      const seoData = await res.json()
      return { props: { seoData: seoData.data } }
    } catch {
      return { props: { seoData: {} } }
    }
  }
