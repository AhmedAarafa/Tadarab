import React, { useEffect } from 'react';
import { Container } from "react-bootstrap";
import dynamic from 'next/dynamic';
import MetaTagsGenerator from 'modules/_Shared/utils/MetaTagsGenerator';
import { useSelector } from "react-redux";
import withAuth from 'configurations/auth guard/AuthGuard';

const PrivacyPage = dynamic(() => import("modules/Static pages/Privacy/PrivacyPage"));

function Privacy(props: any) {
  const { seoData } = props;
  const themeState = useSelector((state: any) => state.themeState.theme);

  return (
    <>{seoData &&
      <MetaTagsGenerator title={seoData?.seo_title}
        description={seoData?.seo_metadesc}
        img={seoData?.seo_image} />}
      <Container data-theme={themeState} fluid="xxl" style={{ backgroundColor: "var(--tadarab-light-bg)" }}>
        <PrivacyPage />
      </Container>
    </>
  )
}

export default withAuth(Privacy); 

export async function getServerSideProps() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}static/privacy-policy`)
    const seoData = await res.json()
    return { props: { seoData: seoData.data } }
  } catch {
    return { props: { seoData: {} } }
  }
}
