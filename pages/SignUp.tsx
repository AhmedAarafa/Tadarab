import React from 'react'
import Navbar from "common/components/Navbar/Navbar";
import SignupPage from "modules/Sign Up/SignUp page/SignupPage";
import Head from "next/head";

export default function SignUp() {
    return (
        <>
        <Head>
        <title>كورسات دورات اون لاين عن بعد مجانية و معتمدة | تدرب</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="نقدم لك عبر موقع تدرب افضل الدورات المعتمدة عن بعد مع خبراء مختصين في مختلف المجالات. سجل في الدورات التدريبية المجانية لدينا اون لاين لتطوير مهاراتك" />
        <link rel="icon" href="/images/logo.svg" />
      </Head>
        <Navbar/>
        <SignupPage/>
        </>
    )
}
