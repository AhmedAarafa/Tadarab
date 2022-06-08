import React from 'react';
import { Container } from "react-bootstrap";
import dynamic from 'next/dynamic';
import MetaTagsGenerator from 'modules/_Shared/utils/MetaTagsGenerator';

const TermsPage = dynamic(() => import("modules/Static pages/Terms/TermsPage"));

export default function Terms(props: any) {
    const { seoData } = props;
    return (
        <>
          {seoData && 
           <MetaTagsGenerator title={seoData?.seo_title}
           description={seoData?.seo_metadesc}
           img={seoData?.seo_image} />}
            <Container fluid="xxl">
                <TermsPage />
            </Container>
        </>
    )
}
export async function getServerSideProps() {
    try{
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}static/terms`)
      const seoData = await res.json()
      return { props: { seoData: seoData.data } }
    } catch {
      return { props: { seoData: {} } }
    }
  }
