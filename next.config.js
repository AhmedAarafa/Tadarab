/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    scrollRestoration: true,
  },
  reactStrictMode: true,
  swcMinify: false,
  images: {
    formats: ["image/webp"],
  },

  async rewrites() {
    return [
      {
        source: "/",
        destination: "/HomePage",
      },
      {
        source: "/sa",
        destination: "/HomePage",
      },
      {
        source: "/sign-up",
        destination: "/SignUp",
      },
      {
        source: "/sign-in",
        destination: "/SignIn",
      },
      {
        source: "/courses",
        destination: "/AllCourses",
      },
      {
        source: "/course/:path*",
        destination: "/CourseDetails/:path*",
      },
      {
        source: "/bundle/:path*",
        destination: "/BundleCoursePage/:path*",
      },
      {
        source: "/ebook/:path*",
        destination: "/Books/:path*",
      },
      {
        source: "/article/:path*",
        destination: "/Articles/:path*",
      },
      {
        source: "/webinar/:path*",
        destination: "/CourseDetails/Webinar/:path*",
      },
      {
        source: "/ebook/:path*",
        destination: "/Books/:path*",
      },
      {
        source: "/trainer/:path*",
        destination: "/TrainerProfile/:path*",
      },
      {
        source: "/instructor/:path*",
        destination: "/TrainerProfile/:path*",
      },
      {
        source: "/checkout",
        destination: "/Checkout",
      },
      {
        source: "/checkout/payment",
        destination: "/Checkout",
      },
      {
        source: "/checkout/auth",
        destination: "/SignIn",
      },
      {
        source: "/checkout/success",
        destination: "/Checkout",
      },
      {
        source: "/checkout/failed",
        destination: "/Checkout",
      },
      {
        source: "/search",
        destination: "/SearchResults",
      },
      {
        source: "/topic/:path*",
        destination: "/Category/:path*",
      },
      {
        source: "/forgot-password",
        destination: "/ForgetPassword",
      },
      {
        source: "/join-as-trainer",
        destination: "/JoinAsATrainer",
      },
      {
        source: "/reset-password",
        destination: "/ResetPassword",
      },
      {
        source: "/subscription",
        destination: "/TadarabSubscription",
      },
      {
        source: "/transaction-in-progress",
        destination: "/TransactionInProgress",
      },
      {
        source: "/my-account",
        destination: "/MyAccount",
      },
      {
        source: "/trainers",
        destination: "/AllTrainers",
      },
      {
        source: "/terms",
        destination: "/Terms",
      },
      {
        source: "/instructor-terms",
        destination: "/InstructorTerms",
      },
      {
        source: "/privacy",
        destination: "/Privacy",
      },
      {
        source: "/cookies",
        destination: "/Cookies",
      },
      {
        source: "/unsubscribe",
        destination: "/Unsubscribe",
      },
      {
        source: "/tadarab-season",
        destination: "/TadarabSeason",
      }
    ];
  },

  async redirects() {
    return [
      {
        source: "/instagram",
        destination:
          "/?utm_source=Tadarab&utm_medium=instagram&utm_campaign=tadarab_instagram_bio_homepage",
        permanent: true,
      },
      {
        source: "/tiktok",
        destination:
          "/?utm_source=Tadarab&utm_medium=Tiktok&utm_campaign=tiktok",
        permanent: true,
      },
      {
        source: "/snapchat",
        destination:
          "/?utm_source=Tadarab&utm_medium=Snapchat&utm_campaign=snapchat",
        permanent: true,
      },
      {
        source: "/facebook",
        destination:
          "/?utm_source=Tadarab&utm_medium=Facebook&utm_campaign=facebook",
        permanent: true,
      },
      {
        source: "/courses/:slug",
        destination: "/course/:slug",
        permanent: true,
      },
      {
        source: "/AllCourses",
        destination: "/courses",
        permanent: true,
      }
    ];
  },
};