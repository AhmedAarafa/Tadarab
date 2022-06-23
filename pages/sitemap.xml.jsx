import React from 'react';
import * as fs from 'fs';

const Sitemap = () => {
    return null;
};

let BASE_URL = 'http://localhost:3000';

const newURLs = {
    "HomePage.tsx" : "",
    "SignUp.tsx": "sign-up",
    "SignIn.tsx": "sign-in",
    "AllCourses.tsx": "courses",
    "CourseDetails.tsx": "course",
    "Books.tsx": "ebook",
    "CourseDetails/Webinar": 'webinar',
    "TrainerProfile.tsx": "trainer",
    "Checkout.tsx": "checkout",
    "SearchResults.tsx": "search",
    "Category.tsx": "topic",
    "ForgetPassword.tsx": "forgot-password",
    "JoinAsATrainer.tsx": "join-as-trainer",
    "ResetPassword.tsx": "reset-password",
    "TadarabSubscription.tsx": "subscription",
    "MyAccount.tsx": "my-account",
    "AllTrainers.tsx": "trainers",
    "Terms.tsx": "terms",
    "InstructorTerms.tsx": "instructor-terms",
    "Privacy.tsx": "privacy",
    "Cookies.tsx": "cookies",
}

const staticPaths = fs
    .readdirSync("pages")
    .filter((staticPage) => {
        return ![
            "api",
            "SubCategory",
            "_app.tsx",
            "404.tsx",
            "_document.js",
            "index.tsx",
            "TransactionInProgress.tsx",
            "sitemap.xml.js",
        ].includes(staticPage);
    })
    .map((staticPagePath) => {
            return `${BASE_URL}/${newURLs[`${staticPagePath}`]}`;
    });


// const products = await getAllProducts() // some remote API call maybe!

// const dynamicPaths = products.map((singleProduct: any) => {

//     return `${BASE_URL}/product/${singleProduct.id}`

// })
// const dynamicRoutesSlugs = { books:[] , categories:[], courses:[], liveCourses:[], trainers:[]  }

const dynamicPaths = [
    `http://localhost:3000/course/%d8%a3%d8%b3%d8%b1%d8%aa%d9%86%d8%a7-%d9%81%d9%8a-%d8%b1%d9%85%d8%b6%d8%a7%d9%86`,
    `http://localhost:3000/course/%d9%84%d8%b9%d8%a8%d8%a9-%d8%a7%d9%84%d8%b3%d8%b9%d8%a7%d8%af%d8%a9`
]

export const getServerSideProps = async ({ res }) => {

    const allPaths = [...staticPaths, ...dynamicPaths];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${allPaths
            .map((url) => {
                return `
                <url>
                  <loc>${url}</loc>
                  <lastmod>${new Date().toISOString()}</lastmod>
                  <changefreq>monthly</changefreq>
                  <priority>1.0</priority>
                </url>
              `;
            })
            .join("")}
        </urlset>
    `;

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };

};

export default Sitemap;