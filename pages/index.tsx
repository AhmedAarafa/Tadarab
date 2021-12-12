import type { NextPage } from "next";
import HomePage from "./HomePage";
import Head from "next/head";


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>كورسات دورات اون لاين عن بعد مجانية و معتمدة | تدرب</title>
        <meta name="description" content="نقدم لك عبر موقع تدرب افضل الدورات المعتمدة عن بعد مع خبراء مختصين في مختلف المجالات. سجل في الدورات التدريبية المجانية لدينا اون لاين لتطوير مهاراتك" />
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
