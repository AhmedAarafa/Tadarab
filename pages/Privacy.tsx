import React from 'react';
import { Container } from "react-bootstrap";
import dynamic from 'next/dynamic';
import MetaTagsGenerator from 'modules/_Shared/utils/MetaTagsGenerator';

const PrivacyPage = dynamic(() => import("modules/Static pages/Privacy/PrivacyPage"));

export default function Privacy(props: any) {
    const { seoData } = props;
    return (
        <>{seoData &&
            <MetaTagsGenerator title={seoData?.seo_title} 
            description={seoData?.seo_metadesc} 
            img={seoData?.seo_image} />}
            <Container fluid="xxl">
                <PrivacyPage />
            </Container>
        </>
    )
}
export async function getServerSideProps() {
    try{
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}static/privacy-policy`)
      const seoData = await res.json()
      return { props: { seoData: seoData.data } }
    } catch {
      return { props: { seoData: {} } }
    }
}
