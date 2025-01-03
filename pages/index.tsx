import type { NextPage } from "next";
import HomePage from "./HomePage";
import 'normalize.css';
import MetaTagsGenerator from "modules/_Shared/utils/MetaTagsGenerator";
import { toggleLoader } from "modules/_Shared/utils/toggleLoader";

const Home: NextPage = (props: any) => {
  const { seoData } = props;

  return (
    <>
      {/*       {seoData && <MetaTagsGenerator title={seoData?.seo_title}
        description={seoData?.seo_metadesc}
        img={seoData?.seo_image} />}
      <HomePage /> */}
    </>
  );
};

export async function getServerSideProps(context: any) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}home`);
    const seoData = await res.json();
    toggleLoader("show");
    return { props: { seoData: seoData.data, queryParams: context.query } };
  } catch {
    return { props: { seoData: {} } };
  }
}

export default Home;
