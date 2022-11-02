import { GetServerSideProps } from "next";
import { getServerSideSitemap, ISitemapField } from "next-sitemap";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const BaseUrl = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

    const categoriesResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}categories`);
    const categories: any = await categoriesResponse.json();
    const categoriesList: any = categories.data.categories;

    const coursesResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}courses/?page=1&limit=900&type=all`);
    const courses: any = await coursesResponse.json();
    const coursesList: any = courses.data.courses;

    const staticPagesList: any = [
        "",
        "courses",
        "trainers",
        "subscription",
        "join-as-trainer",
        "terms",
        "privacy",
        "cookies",
        "instructor-terms",
        "privacy",
    ];

    let resultantFields: any[] = [];

    resultantFields.push(
        staticPagesList.map((pageSlug: any) => ({
            loc: `${BaseUrl}${pageSlug}`,
            lastmod: new Date().toISOString(),
        }))
        ,
        categoriesList.map((cat: any) => ({
            loc: `${BaseUrl}topic/${cat.slug}`,
            lastmod: new Date().toISOString(),
        }))
        ,
        coursesList.map((course: any) => ({
            loc: `${BaseUrl}course/${course.slug}`,
            lastmod: new Date().toISOString(),
        }))
    );

    let fields: ISitemapField[] = resultantFields.flat();
    return getServerSideSitemap(ctx, fields);
};

export default function Site() {}