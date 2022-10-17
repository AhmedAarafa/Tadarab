import React from 'react';
import Head from "next/head";
import Router, { useRouter } from "next/router";
export default function MetaTagsGenerator(props:any) {

    let siteurl = "https://www.tadarab.com";let canonical=siteurl;
    const allowedCanonical=['/Category/[slug]','/TrainerProfile/[slug]','/CourseDetails/[slug]'];
    const router = useRouter();
    let is_allow=allowedCanonical.includes((router.route));
    if(is_allow){canonical+=router.asPath;}
    if(typeof window !== 'undefined'){siteurl=window.location.href;}
    return (
        <Head>
            <title>{props.title}</title>
            { (is_allow)?<><link rel="canonical" href={canonical} /></>:<></> }
            <meta name="description" content={props.description} key="description" />
            <meta name="robots" content="index, follow" />
            <meta property="og:locale" content="ar_AR" key="og-locale"/>
            <meta property="og:type" content="website" key="og-type" />
            <meta property="og:title" content={props.title} key="og-title" />
            <meta property="og:description" content={props.description} key="og-description" />
            <meta property="og:url" content={siteurl} key="og-url" />
            <meta property="og:site_name" content="Tadarab" key="og-site_name" />
            <meta property="og:image" content={props.img} key="og-image" />
            <meta property="og:image:secure_url" content={props.img} key="og-image-secure_url" />
            <meta property="og:image:width" content="600" key="og-image-width" />
            <meta property="og:image:height" content="314" key="og-image-height" />
            <meta property="og:image:alt" content={props.title} key="og-image-title" />
            <meta property="og:image:type" content="image/jpeg" key="og-image-type" />
            <meta name="twitter:card" content="summary_large_image" key="twitter-card" />
            <meta name="twitter:title" content={props.title} key="twitter-title" />
            <meta name="twitter:description" content={props.description} key="twitter-description" />
            <meta name="twitter:site" content="@tadarab_" key="twitter-site" />
            <meta name="twitter:creator" content="@tadarab_" key="twitter-creator" />
            <meta name="twitter:image" content={props.img} key="twitter-image" />
        </Head>
    )
}