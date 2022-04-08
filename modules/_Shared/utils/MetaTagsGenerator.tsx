import React from 'react';
import Head from "next/head";

export default function MetaTagsGenerator(props:any) {
    return (
        <Head>
            <title>{props.title}</title>
            <meta name="description" content={props.description} />
            <meta property="og:locale" content="ar_AR" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={props.title} />
            <meta property="og:description" content={props.description} />
            <meta property="og:site_name" content="Tadarab" />
            <meta property="og:image" content={props.img} />
            <meta property="og:image:secure_url" content={props.img} />
            <meta property="og:image:width" content="600" />
            <meta property="og:image:height" content="314" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:description" content={props.description} />
            <meta name="twitter:title" content={props.title} />
            <meta name="twitter:site" content="@tadarab_" />
            <meta name="twitter:image" content={props.img} />
            <meta name="twitter:creator" content="@tadarab_" />
        </Head>
    )
}
