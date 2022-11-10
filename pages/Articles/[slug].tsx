import React from 'react';
import { Container } from "react-bootstrap";
import dynamic from 'next/dynamic';
import MetaTagsGenerator from 'modules/_Shared/utils/MetaTagsGenerator';
import { toggleLoader } from "modules/_Shared/utils/toggleLoader";

const ArticlesPage = dynamic(() => import("modules/Static pages/Articles page/ArticlesPage"));

export default function Articles(props: any) {
    const { seoData, slug } = props;
    return (
        <>
            {seoData &&
                <MetaTagsGenerator title={seoData?.seo_title}
                    description={seoData?.seo_metadesc}
                    img={seoData?.seo_image} />}
            <Container fluid="xxl">
                <ArticlesPage slug={slug}/>
            </Container>
        </>
    )
}

export async function getServerSideProps(context:any) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}article/${context.query.slug}`)
        const seoData = await res.json();
    toggleLoader("show");
        return { props: { seoData: seoData.data, slug: context.query.slug } }
    } catch {
        return { props: { seoData: {} } }
    }
}
