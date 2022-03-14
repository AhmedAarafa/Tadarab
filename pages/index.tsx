import type { NextPage } from "next";
import HomePage from "./HomePage";
import Head from "next/head";
import 'normalize.css';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>كورسات دورات اون لاين عن بعد مجانية و معتمدة | تدرب</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="نقدم لك عبر موقع تدرب افضل الدورات المعتمدة عن بعد مع خبراء مختصين في مختلف المجالات. سجل في الدورات التدريبية المجانية لدينا اون لاين لتطوير مهاراتك" />
        <link rel="icon" href="/images/logo.svg" />
        {/* <script dangerouslySetInnerHTML={{ __html: `!function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '387170448377801');` }}
    />
    <noscript dangerouslySetInnerHTML={{ __html: `<img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=387170448377801&ev=PageView&noscript=1" />` }}
    /> */}
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
