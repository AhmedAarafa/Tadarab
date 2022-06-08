import React from 'react'
// import SearchResultsPage from "modules/Search Results/SearchResultsPage";
import { Container } from "react-bootstrap";
import MetaTagsGenerator from 'modules/_Shared/utils/MetaTagsGenerator';

import dynamic from 'next/dynamic';
const SearchResultsPage = dynamic(() => import("modules/Search Results/SearchResultsPage"));
const NotificationBar = dynamic(() => import("common/Notification bar/NotificationBar"));

export default function SearchResults(props: any) {
  const { seoData } = props;
  return (
    <>
    {seoData &&
            <MetaTagsGenerator title={seoData?.seo_title} 
            description={seoData?.seo_metadesc} 
            img={seoData?.seo_image} />}
      <Container fluid="xxl">
        <SearchResultsPage />
      </Container>
    </>
  )
}
export async function getServerSideProps(context: any) {
  try{
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}courses/?country_code=null&keyword=${context?.query?.q}&page=1&limit=16`)
      const seoData = await res.json()
  return { props: { seoData: seoData.data } };
  } catch {
    return { props: { seoData: {} } };
  }
}
