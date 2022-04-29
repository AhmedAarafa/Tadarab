/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: false,
 
  images: {
    domains: ['s3.me-south-1.amazonaws.com' ]
  },

  async rewrites() {
    return [
      {
        source: '/',
        destination: '/HomePage',
      },
      {
        source: '/sign-up',
        destination: '/SignUp',
      },
      {
        source: '/sign-in',
        destination: '/SignIn',
      },
      {
        source: '/course/:path*',
        destination: '/CourseDetails/:path*',
      },
      {
        source: '/webinar/:path*',
        destination: '/CourseDetails/Webinar/:path*',
      },
      {
        source: '/courses',
        destination: '/AllCourses',
      },
      {
        source: '/trainer/:path*',
        destination: '/TrainerProfile/:path*',
      },
      {
        source: '/instructor/:path*',
        destination: '/TrainerProfile/:path*',
      },
      {
        source: '/checkout',
        destination: '/Checkout',
      },
      {
        source: '/checkout/payment',
        destination: '/Checkout',
      },
      {
        source: '/checkout/auth',
        destination: '/SignIn',
      },
      {
        source: '/checkout/success',
        destination: '/Checkout',
      },
      {
        source: '/checkout/failed',
        destination: '/Checkout',
      },
      {
        source: '/search',
        destination: '/SearchResults',
      },
      {
        source: '/topic/:path*',
        destination: '/Category/:path*',
      },
      {
        source: '/forgot-password',
        destination: '/ForgetPassword',
      },
      {
        source: '/join-as-trainer',
        destination: '/JoinAsATrainer',
      },
      {
        source: '/reset-password',
        destination: '/ResetPassword',
      },
      {
        source: '/subscription',
        destination: '/TadarabSubscription',
      },
      {
        source: '/transaction-in-progress',
        destination: '/TransactionInProgress',
      },
      {
        source: '/my-account',
        destination: '/MyAccount',
      },
      {
        source: '/trainers',
        destination: '/AllTrainers',
      },
      {
        source: '/terms',
        destination: '/Terms',
      },
      {
        source: '/instructor-terms',
        destination: '/InstructorTerms',
      },
      {
        source: '/privacy',
        destination: '/Privacy',
      },
      {
        source: '/cookies',
        destination: '/Cookies',
      },
    ]
  },

  async redirects() {
    return [
      {
          "source": "/courses/qatadah-influence",
          "destination": "/course/%d9%85%d9%87%d8%a7%d8%b1%d8%a7%d8%aa-%d8%a7%d9%84%d8%aa%d8%a3%d8%ab%d9%8a%d8%b1-%d9%88%d9%81%d9%86-%d8%a7%d9%84%d8%a7%d9%82%d9%86%d8%a7%d8%b9",
          "permanent": true
      },
      {
          "source": "/courses/muna_autism",
          "destination": "/course/%d9%83%d9%8a%d9%81-%d8%a3%d8%aa%d8%b9%d8%a7%d9%8a%d8%b4-%d9%85%d8%b9-%d8%b7%d9%81%d9%84%d9%8a-%d8%a7%d9%84%d9%85%d8%b5%d8%a7%d8%a8-%d8%a8%d8%a7%d9%84%d8%aa%d9%88%d8%ad%d8%af",
          "permanent": true
      },
      {
          "source": "/courses/ayman_marketing",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d8%b3%d9%88%d9%8a%d9%82-%d8%a7%d9%84%d9%81%d8%b9%d8%a7%d9%84-%d9%84%d9%84%d9%85%d8%b4%d8%b1%d9%88%d8%b9%d8%a7%d8%aa-%d8%a7%d9%84%d8%b5%d8%ba%d9%8a%d8%b1%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/neda_stopmotion",
          "destination": "/course/%d9%81%d9%86-%d8%aa%d8%ad%d8%b1%d9%8a%d9%83-%d8%a7%d9%84%d8%b1%d8%b3%d9%88%d9%85-%d9%88%d8%a7%d9%84%d8%b5%d9%88%d8%b1-%d8%b3%d8%aa%d9%88%d8%a8-%d9%85%d9%88%d8%b4%d9%86",
          "permanent": true
      },
      {
          "source": "/courses/shaima_maternity",
          "destination": "/course/%d8%a3%d8%b3%d8%b1%d8%a7%d8%b1-%d8%a7%d9%84%d8%ad%d9%85%d9%84-%d9%88%d8%a7%d9%84%d9%88%d9%84%d8%a7%d8%af%d8%a9-%d8%a7%d9%84%d8%b7%d8%a8%d9%8a%d8%b9%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/afaf_language",
          "destination": "/course/%d9%84%d8%ba%d8%a7%d8%aa-%d8%a7%d9%84%d8%ad%d8%a8",
          "permanent": true
      },
      {
          "source": "/courses/tahani_photo",
          "destination": "/course/%d9%83%d9%8a%d9%81-%d8%a3%d8%b5%d8%a8%d8%ad-%d8%a3%d8%ac%d9%85%d9%84-%d9%81%d9%8a-%d8%a7%d9%84%d8%b5%d9%88%d8%b1",
          "permanent": true
      },
      {
          "source": "/courses/ahmad_estate",
          "destination": "/course/%d9%85%d9%82%d8%af%d9%85%d8%a9-%d8%a5%d9%84%d9%89-%d8%a5%d9%85%d8%aa%d9%84%d8%a7%d9%83-%d8%b9%d9%82%d8%a7%d8%b1%d9%83-%d8%a7%d9%84%d8%a3%d9%88%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/drmostafa",
          "destination": "/course/%d8%a7%d9%84%d8%b3%d8%b9%d8%a7%d8%af%d8%a9-%d9%88%d8%a7%d9%84%d8%a7%d8%b3%d8%aa%d9%82%d8%b1%d8%a7%d8%b1-%d8%a7%d9%84%d8%b2%d9%88%d8%a7%d8%ac%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/parenting",
          "destination": "/course/%d8%a3%d8%b3%d8%b1%d8%a7%d8%b1%d9%8a-%d9%81%d9%8a-%d8%aa%d8%b1%d8%a8%d9%8a%d8%a9-%d8%a7%d9%84%d8%a7%d8%a8%d9%86%d8%a7%d8%a1",
          "permanent": true
      },
      {
          "source": "/courses/drbasheer",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d8%ad%d8%b1%d8%b1-%d9%85%d9%86-%d8%a7%d9%84%d9%82%d9%8a%d9%88%d8%af",
          "permanent": true
      },
      {
          "source": "/courses/jumocoffee",
          "destination": "/course/%d8%af%d9%88%d8%b1%d8%a9-%d8%a5%d8%b9%d8%af%d8%a7%d8%af-%d9%82%d9%87%d9%88%d8%a9-%d9%85%d8%ae%d8%aa%d8%b5%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/suliman_reading",
          "destination": "/course/%d9%83%d9%8a%d9%81-%d8%a3%d8%ad%d8%a8-%d8%a7%d9%84%d9%82%d8%b1%d8%a7%d8%a1%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/swalfmozah_talent",
          "destination": "/course/%d9%83%d9%8a%d9%81-%d8%aa%d9%83%d8%aa%d8%b4%d9%81-%d9%85%d9%88%d9%87%d8%a8%d8%aa%d9%83-%d8%a7%d9%84%d8%ae%d9%81%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/drmostafa-2",
          "destination": "/course/%d9%85%d9%87%d8%a7%d8%b1%d8%a7%d8%aa-%d9%85%d8%aa%d9%82%d8%af%d9%85%d8%a9-%d9%81%d9%8a-%d8%a7%d9%84%d8%b3%d8%b9%d8%a7%d8%af%d8%a9-%d8%a7%d9%84%d8%b2%d9%88%d8%ac%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/flyphobia",
          "destination": "/course/%d9%81%d9%88%d8%a8%d9%8a%d8%a7-%d8%a7%d9%84%d8%b7%d9%8a%d8%b1%d8%a7%d9%86",
          "permanent": true
      },
      {
          "source": "/courses/dalal_alwohaib",
          "destination": "/course/%d8%a3%d8%b3%d8%a7%d8%b3%d9%8a%d8%a7%d8%aa-%d8%a7%d9%84%d8%aa%d8%b5%d9%85%d9%8a%d9%85-%d8%a7%d9%84%d8%af%d8%a7%d8%ae%d9%84%d9%8a-%d9%88-%d9%81%d9%86-%d8%a7%d9%84%d8%af%d9%8a%d9%83%d9%88%d8%b1",
          "permanent": true
      },
      {
          "source": "/courses/anfal_florist",
          "destination": "/course/%d8%a3%d8%b3%d8%b1%d8%a7%d8%b1-%d8%aa%d9%86%d8%b3%d9%8a%d9%82-%d8%a7%d9%84%d8%b2%d9%87%d9%88%d8%b1",
          "permanent": true
      },
      {
          "source": "/courses/sumaya_nutrition",
          "destination": "/course/%d8%a3%d8%b3%d8%a7%d8%b3%d9%8a%d8%a7%d8%aa-%d8%a7%d9%84%d8%aa%d8%ba%d8%b0%d9%8a%d8%a9-%d9%88%d9%86%d8%b2%d9%88%d9%84-%d8%a7%d9%84%d9%88%d8%b2%d9%86",
          "permanent": true
      },
      {
          "source": "/courses/drabal",
          "destination": "/course/%d8%a7%d9%84%d8%a3%d8%b3%d8%a7%d9%84%d9%8a%d8%a8-%d8%a7%d9%84%d9%81%d8%b9%d8%a7%d9%84%d8%a9-%d9%81%d9%8a-%d8%a7%d9%84%d8%aa%d8%b1%d8%a8%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/bashayer",
          "destination": "/course/%d8%a3%d9%8a%d9%86-%d8%a3%d9%86%d8%a7-%d9%85%d9%86-%d8%a7%d9%84%d8%ad%d8%b5%d8%a7%d9%86%d9%87-%d8%a7%d9%84%d9%86%d9%81%d8%b3%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/awatifalsabah",
          "destination": "/course/%d8%ad%d8%b1%d8%b1-%d9%82%d9%88%d8%a7%d9%83-%d8%a7%d9%84%d9%83%d8%a7%d9%85%d9%86%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/mona_alsaqer",
          "destination": "/course/%d9%83%d9%8a%d9%81-%d8%aa%d8%a8%d8%af%d8%a3-%d9%85%d9%86-%d8%ac%d8%af%d9%8a%d8%af",
          "permanent": true
      },
      {
          "source": "/courses/zuzana",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d8%ae%d8%b7%d9%8a%d8%b7-%d8%a7%d9%84%d8%b0%d9%83%d9%8a-%d9%84%d9%84%d9%88%d9%84%d8%a7%d8%af%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/ebtisamaloumi",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d9%86%d8%b8%d9%8a%d9%85-%d8%a7%d9%84%d9%81%d8%b9%d8%a7%d9%84-%d9%84%d9%84%d9%85%d9%86%d8%b2%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/enas_almarzouq",
          "destination": "/course/%d8%a7%d8%aa%d9%8a%d9%83%d9%8a%d8%aa-%d9%88%d8%a7%d8%b5%d9%88%d9%84-%d8%a7%d9%84%d8%b6%d9%8a%d8%a7%d9%81%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/talalfakher",
          "destination": "/course/%d8%aa%d8%b7%d9%85%d9%86",
          "permanent": true
      },
      {
          "source": "/courses/drduna",
          "destination": "/course/%d8%a7%d9%84%d8%b7%d9%81%d9%84-%d8%a7%d9%84%d9%85%d8%a8%d8%af%d8%b9",
          "permanent": true
      },
      {
          "source": "/courses/ranafitness",
          "destination": "/course/%d8%a7%d9%84%d8%a3%d8%b3%d8%b1%d8%a7%d8%b1-%d8%a7%d9%84%d8%b3%d8%aa%d8%a9-%d9%84%d9%84%d8%b5%d8%ad%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/danahpathologist",
          "destination": "/course/%d8%a7%d9%83%d8%aa%d8%b4%d9%81-%d8%b9%d8%a7%d9%84%d9%85-%d8%b7%d9%81%d9%84%d9%83-%d8%a7%d9%84%d9%84%d8%ba%d9%88%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/ahmedsaleh",
          "destination": "/course/%d8%a3%d8%b3%d8%b1%d8%a7%d8%b1-%d8%a7%d9%84%d8%aa%d8%ba%d8%b0%d9%8a%d8%a9-%d9%84%d8%aa%d9%86%d8%b2%d9%8a%d9%84-%d8%a7%d9%84%d9%88%d8%b2%d9%86-%d9%88%d9%84%d9%84%d8%b1%d9%8a%d8%a7%d8%b6%d9%8a%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/bassamaljazzaf",
          "destination": "/course/%d9%83%d9%8a%d9%81-%d8%aa%d8%b5%d8%a8%d8%ad-%d9%85%d8%aa%d8%ad%d8%af%d8%ab%d8%a7-%d9%86%d8%a7%d8%ac%d8%ad%d8%a7",
          "permanent": true
      },
      {
          "source": "/courses/healthykids",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d8%ba%d8%b0%d9%8a%d8%a9-%d8%a7%d9%84%d9%85%d8%ab%d8%a7%d9%84%d9%8a%d8%a9-%d9%84%d9%84%d8%a3%d8%b7%d9%81%d8%a7%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/dralaa",
          "destination": "/course/%d9%85%d9%84%d8%b9%d9%82%d8%a9-%d9%85%d9%86-%d8%a7%d9%84%d8%ad%d8%a8",
          "permanent": true
      },
      {
          "source": "/courses/cocoon",
          "destination": "/course/%d8%a3%d8%b3%d8%b1%d8%a7%d8%b1-%d8%a7%d9%84%d8%b1%d8%b4%d8%a7%d9%82%d8%a9-%d9%85%d9%86-%d8%a7%d9%84%d8%ad%d9%85%d9%84-%d9%84%d9%85%d8%a7-%d8%a8%d8%b9%d8%af-%d8%a7%d9%84%d9%88%d9%84%d8%a7%d8%af%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/albohayra",
          "destination": "/course/%d8%a3%d8%b3%d8%a7%d8%b3%d9%8a%d8%a7%d8%aa-%d8%a7%d9%84%d8%b2%d8%b1%d8%a7%d8%b9%d8%a9-%d8%a7%d9%84%d9%85%d9%86%d8%b2%d9%84%d9%8a%d8%a9-%d8%b9%d8%a7%d9%84%d9%85-%d8%a7%d9%84%d9%86%d8%a8%d8%a7%d8%aa",
          "permanent": true
      },
      {
          "source": "/courses/mojahed",
          "destination": "/course/%d8%aa%d8%ad%d9%84%d9%8a%d9%84-%d8%b1%d8%b3%d9%88%d9%85-%d8%a7%d9%84%d8%a3%d8%b7%d9%81%d8%a7%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/dalia-al-humaidi",
          "destination": "/course/%d9%85%d8%af%d8%ae%d9%84-%d8%a5%d9%84%d9%89-%d8%b9%d8%a7%d9%84%d9%85-%d8%a7%d9%84%d8%a3%d9%84%d9%85%d8%a7%d8%b3",
          "permanent": true
      },
      {
          "source": "/courses/drhuda",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d8%ba%d9%84%d8%a8-%d8%b9%d9%84%d9%89-%d8%b5%d8%b9%d9%88%d8%a8%d8%a7%d8%aa-%d8%a7%d9%84%d8%aa%d8%b9%d9%84%d9%85",
          "permanent": true
      },
      {
          "source": "/courses/talalalmaian",
          "destination": "/course/%d8%a3%d8%b3%d8%a7%d8%b3%d9%8a%d8%a7%d8%aa-%d8%aa%d8%b5%d9%85%d9%8a%d9%85-%d8%a7%d9%84%d8%a5%d8%b9%d9%84%d8%a7%d9%86",
          "permanent": true
      },
      {
          "source": "/courses/waelalkhars",
          "destination": "/course/%d9%85%d9%87%d8%a7%d8%b1%d8%a7%d8%aa-%d9%88-%d9%81%d9%86%d9%88%d9%86-%d9%82%d8%b5-%d8%a7%d9%84%d9%88%d8%b1%d9%82",
          "permanent": true
      },
      {
          "source": "/courses/drdalia",
          "destination": "/course/%d8%a7%d9%84%d8%b9%d9%86%d8%a7%d9%8a%d8%a9-%d8%a7%d9%84%d9%85%d8%ab%d8%a7%d9%84%d9%8a%d8%a9-%d8%a8%d8%a7%d9%84%d8%a8%d8%b4%d8%b1%d8%a9-%d9%88%d8%a7%d9%84%d8%b4%d8%b9%d8%b1",
          "permanent": true
      },
      {
          "source": "/courses/hamad",
          "destination": "/course/%d9%81%d9%87%d9%85-%d9%84%d8%ba%d8%a9-%d8%a7%d9%84%d9%86%d8%a8%d8%a7%d8%aa%d8%a7%d8%aa",
          "permanent": true
      },
      {
          "source": "/courses/abdulaziz",
          "destination": "/course/%d8%a7%d9%84%d8%b0%d9%83%d8%a7%d8%a1-%d8%a7%d9%84%d8%b9%d8%a7%d8%b7%d9%81%d9%8a-%d9%88%d9%85%d9%87%d8%a7%d8%b1%d8%a7%d8%aa-%d8%a7%d9%84%d8%a5%d9%82%d9%86%d8%a7%d8%b9-%d9%81%d9%8a-%d8%a7%d9%84%d8%b9",
          "permanent": true
      },
      {
          "source": "/courses/drmohamed",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d9%86%d8%a7%d8%ba%d9%85-%d8%a8%d9%8a%d9%86-%d8%a7%d9%84%d8%b2%d9%88%d8%ac%d9%8a%d9%86",
          "permanent": true
      },
      {
          "source": "/courses/monaalhazeem",
          "destination": "/course/%d8%a3%d8%b3%d8%a7%d8%b3%d9%8a%d8%a7%d8%aa-%d9%81%d9%86-%d8%a7%d9%84%d8%b1%d8%b3%d9%85-%d8%a8%d8%a7%d9%84%d9%81%d8%ad%d9%85",
          "permanent": true
      },
      {
          "source": "/courses/abrary",
          "destination": "/course/%d8%aa%d9%86%d8%b3%d9%8a%d9%82-%d8%a7%d9%84%d8%a3%d9%84%d9%88%d8%a7%d9%86-%d9%85%d8%b9-%d8%a7%d9%84%d9%81%d8%b5%d9%88%d9%84-%d8%a7%d9%84%d8%a3%d8%b1%d8%a8%d8%b9%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/shoaa",
          "destination": "/course/%d8%ae%d8%b7%d9%88%d8%a7%d8%aa-%d8%b5%d9%86%d8%a7%d8%b9%d8%a9-%d8%a7%d9%84%d8%b9%d9%84%d8%a7%d9%85%d8%a9-%d8%a7%d9%84%d8%aa%d8%ac%d8%a7%d8%b1%d9%8a%d8%a9-%d8%a7%d9%84%d9%86%d8%a7%d8%ac%d8%ad%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/eman",
          "destination": "/course/%d8%ab%d9%84%d8%a7%d8%ab%d9%8a%d8%a9-%d8%a7%d9%84%d8%b5%d8%ad%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/abdulrazzaqalmousa",
          "destination": "/course/%d8%a7%d9%84%d8%ad%d8%a8-%d9%83%d9%85%d8%a7-%d9%84%d9%85-%d8%aa%d8%b9%d8%b1%d9%81%d9%87-%d9%85%d9%86-%d9%82%d8%a8%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/naser-2",
          "destination": "/course/%d8%a3%d8%b3%d8%b3-%d8%aa%d9%86%d8%b8%d9%8a%d9%85-%d8%b9%d8%a7%d8%af%d8%a7%d8%aa%d9%83-%d8%a7%d9%84%d8%ba%d8%b0%d8%a7%d8%a6%d9%8a%d8%a9-%d9%88%d8%a7%d9%84%d8%b5%d8%ad%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/fatma",
          "destination": "/course/%d8%a3%d8%b3%d8%a7%d8%b3%d9%8a%d8%a7%d8%aa-%d8%a7%d9%84%d8%aa%d9%86%d8%b8%d9%8a%d9%81-%d9%81%d9%8a-%d8%a7%d9%84%d9%85%d9%86%d8%b2%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/faisalkarkari",
          "destination": "/course/%d8%a7%d9%84%d8%a7%d8%b3%d8%aa%d8%ab%d9%85%d8%a7%d8%b1-%d8%a8%d8%a7%d9%84%d8%a7%d8%b3%d9%87%d9%85-%d8%ae%d8%b7%d9%88%d8%a9-%d8%a8%d8%ae%d8%b7%d9%88%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/monaalzayed",
          "destination": "/course/%d8%a3%d8%b3%d8%b3-%d8%a5%d8%aa%d9%8a%d9%83%d9%8a%d8%aa-%d8%a7%d9%84%d8%b9%d9%84%d8%a7%d9%82%d8%a7%d8%aa-%d8%a7%d9%84%d8%a5%d8%ac%d8%aa%d9%85%d8%a7%d8%b9%d9%8a%d9%87",
          "permanent": true
      },
      {
          "source": "/courses/mashmoom",
          "destination": "/course/%d8%aa%d9%86%d8%b3%d9%8a%d9%82-%d8%b7%d8%a7%d9%88%d9%84%d8%a9-%d8%a7%d9%84%d8%ad%d9%84%d9%88-%d9%88%d8%a7%d9%84%d9%82%d9%87%d9%88%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/moalqattan",
          "destination": "/course/%d9%83%d9%8a%d9%81-%d8%aa%d8%a4%d8%b3%d8%b3-%d9%85%d8%b4%d8%b1%d9%88%d8%b9-%d9%86%d8%a7%d8%ac%d8%ad",
          "permanent": true
      },
      {
          "source": "/courses/enas",
          "destination": "/course/%d8%aa%d9%86%d8%b3%d9%8a%d9%82-%d8%b1%d9%8a%d9%88%d9%82-%d8%a7%d9%84%d8%b9%d9%8a%d8%af",
          "permanent": true
      },
      {
          "source": "/courses/tahani_alayoub",
          "destination": "/course/%d8%a3%d8%b3%d8%a7%d8%b3%d9%8a%d8%a7%d8%aa-%d8%a7%d9%84%d8%aa%d8%b5%d9%88%d9%8a%d8%b1-%d8%a7%d9%84%d9%81%d9%88%d8%aa%d9%88%d8%ba%d8%b1%d8%a7%d9%81%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/drmariam",
          "destination": "/course/%d8%ae%d8%b7%d9%88%d8%a7%d8%aa-%d8%a7%d9%84%d8%b1%d8%a7%d8%ad%d8%a9-%d8%a7%d9%84%d9%86%d9%81%d8%b3%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/afafpersonalities",
          "destination": "/course/%d8%af%d9%88%d8%b1%d8%a9-%d8%aa%d8%ad%d9%84%d9%8a%d9%84-%d8%a3%d9%86%d9%85%d8%a7%d8%b7-%d8%a7%d9%84%d8%b4%d8%ae%d8%b5%d9%8a%d8%a9-%d9%88-%d8%a7%d9%84%d8%aa%d8%b9%d8%a7%d9%85%d9%84-%d9%85%d8%b9%d9%87",
          "permanent": true
      },
      {
          "source": "/courses/besmartsafe",
          "destination": "/course/%d8%a3%d8%b3%d8%b1%d8%a7%d8%b1-%d8%b9%d8%a7%d9%84%d9%85-%d8%a7%d9%84%d8%a5%d9%86%d8%aa%d8%b1%d9%86%d8%aa-%d9%88%d8%a7%d9%84%d8%a3%d9%85%d9%86-%d8%a7%d9%84%d8%b1%d9%82%d9%85%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/3-steps-to-build-your-business",
          "destination": "/course/%d8%ae%d8%b7%d9%88%d8%a7%d8%aa-%d9%84%d8%a5%d9%86%d8%b4%d8%a7%d8%a1-%d9%85%d8%b4%d8%b1%d9%88%d8%b9%d9%83-%d8%a7%d9%84%d8%ae%d8%a7%d8%b5",
          "permanent": true
      },
      {
          "source": "/courses/sara_alshemmari",
          "destination": "/course/%d8%a3%d8%b3%d8%a7%d8%b3%d9%8a%d8%a7%d8%aa-%d8%b5%d9%86%d8%a7%d8%b9%d8%a9-%d9%85%d8%b3%d8%aa%d9%82%d8%a8%d9%84%d9%83-%d8%a7%d9%84%d9%85%d9%87%d9%86%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/fulklur",
          "destination": "/course/%d8%a7%d9%84%d9%82%d9%84%d9%82-%d8%a7%d9%84%d9%85%d8%b1%d8%b6%d9%8a-%d9%88%d8%b7%d8%b1%d9%82-%d8%b9%d9%84%d8%a7%d8%ac%d9%87",
          "permanent": true
      },
      {
          "source": "/courses/farrajk",
          "destination": "/course/%d8%a7%d9%84%d9%85%d9%87%d8%a7%d8%b1%d8%a7%d8%aa-%d8%a7%d9%84%d9%88%d8%a7%d8%ac%d8%a8-%d8%aa%d9%88%d9%81%d8%b1%d9%87%d8%a7-%d9%84%d8%b2%d9%88%d8%a7%d8%ac-%d9%86%d8%a7%d8%ac%d8%ad",
          "permanent": true
      },
      {
          "source": "/courses/benchadvisory",
          "destination": "/course/%d8%a7%d9%84%d9%85%d8%ad%d8%a7%d8%b3%d8%a8%d8%a9-%d8%a7%d9%84%d9%85%d8%a7%d9%84%d9%8a%d8%a9-%d9%84%d9%84%d9%85%d8%b4%d8%b1%d9%88%d8%b9%d8%a7%d8%aa",
          "permanent": true
      },
      {
          "source": "/courses/mojahed2",
          "destination": "/course/%d8%aa%d8%ad%d9%84%d9%8a%d9%84-%d8%b1%d8%b3%d9%88%d9%85-%d8%a7%d9%84%d9%85%d8%b1%d8%a7%d9%87%d9%82%d9%8a%d9%86",
          "permanent": true
      },
      {
          "source": "/courses/azizsafar",
          "destination": "/course/%d8%a3%d8%b3%d8%a7%d8%b3%d9%8a%d8%a7%d8%aa-%d8%a7%d9%84%d8%aa%d9%85%d8%ab%d9%8a%d9%84-%d8%a7%d9%84%d8%a7%d8%ad%d8%aa%d8%b1%d8%a7%d9%81%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/drlifeshope",
          "destination": "/course/%d8%a7%d8%b3%d8%aa%d8%b1%d8%a7%d8%aa%d9%8a%d8%ac%d9%8a%d8%a7%d8%aa-%d8%a7%d9%84%d8%aa%d8%af%d8%b1%d9%8a%d8%b3-%d9%88%d8%a7%d9%84%d9%83%d8%b4%d9%81-%d9%84%d8%b5%d8%b9%d9%88%d8%a8%d8%a7%d8%aa-%d8%a7",
          "permanent": true
      },
      {
          "source": "/courses/mashmoomdesign2",
          "destination": "/course/%d8%b1%d9%88%d8%ad-%d8%a7%d9%84%d8%a3%d9%84%d9%88%d8%a7%d9%86",
          "permanent": true
      },
      {
          "source": "/courses/ameenaltajer",
          "destination": "/course/%d9%85%d8%a8%d8%a7%d8%af%d8%a6-%d8%a7%d9%84%d8%a8%d8%aa%d9%83%d9%88%d9%8a%d9%86-%d9%88%d8%a7%d9%84%d8%b9%d9%85%d9%84%d8%a7%d8%aa-%d8%a7%d9%84%d8%b1%d9%82%d9%85%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/monaalhazeem2",
          "destination": "/course/%d8%a7%d9%84%d8%a8%d8%a7%d9%82%d8%a9-%d8%a7%d9%84%d9%81%d9%86%d9%8a%d8%a9-%d8%a7%d9%84%d8%b4%d8%a7%d9%85%d9%84%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/hind",
          "destination": "/course/%d8%a7%d9%84%d8%a7%d8%b3%d8%aa%d8%ab%d9%85%d8%a7%d8%b1-%d8%a8%d8%a7%d9%84%d9%85%d8%ad%d8%aa%d9%88%d9%89-%d8%a7%d9%84%d8%aa%d8%b3%d9%88%d9%8a%d9%82%d9%8a-%d8%a7%d9%84%d9%81%d8%b9%d8%a7%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/faridalali",
          "destination": "/course/%d8%af%d9%88%d8%b1%d8%a9-%d9%81%d9%86-%d8%a7%d9%84%d8%ae%d8%b7-%d8%a7%d9%84%d8%b9%d8%b1%d8%a8%d9%8a-%d9%88%d8%a7%d9%84%d8%b2%d8%ae%d8%b1%d9%81%d8%a9-%d8%a7%d9%84%d8%a7%d8%b3%d9%84%d8%a7%d9%85%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/abdulaziz2",
          "destination": "/course/%d9%85%d8%a4%d8%b4%d8%b1%d8%a7%d8%aa-%d8%a7%d9%84%d8%a3%d8%af%d8%a7%d8%a1-%d9%88-%d8%a7%d9%84%d9%86%d8%ac%d8%a7%d8%ad-%d9%81%d9%8a-%d8%a7%d9%84%d8%b9%d9%85%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/menahi",
          "destination": "/course/%d8%aa%d9%88%d8%a7%d8%b2%d9%86-%d8%b9%d8%ac%d9%84%d8%a9-%d8%a7%d9%84%d8%ad%d9%8a%d8%a7%d8%a9-%d9%88%d9%85%d9%81%d8%a7%d8%aa%d9%8a%d8%ad-%d8%a7%d9%84%d8%b3%d8%b9%d8%a7%d8%af%d8%a9-%d8%a7%d9%84%d8%ab",
          "permanent": true
      },
      {
          "source": "/courses/onlinecourse",
          "destination": "/course/%d9%88%d8%b1%d8%b4%d8%a9-%d8%b5%d9%8a%d8%a7%d8%ba%d8%a9-%d8%a7%d9%84%d9%86%d8%b5-%d8%a7%d9%84%d8%aa%d8%b3%d9%88%d9%8a%d9%82%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/aljawhra",
          "destination": "/course/%d8%ad%d9%82%d9%88%d9%82-%d8%a7%d9%84%d9%85%d8%b1%d8%a3%d8%a9-%d8%b9%d9%86%d8%af-%d8%a7%d9%84%d8%b7%d9%84%d8%a7%d9%82",
          "permanent": true
      },
      {
          "source": "/courses/marketing2",
          "destination": "/course/%d9%85%d8%a7%d8%b0%d8%a7-%d9%8a%d8%b1%d9%8a%d8%af-%d9%85%d9%86%d9%83-%d8%a7%d9%84%d9%86%d8%a7%d8%b3-%d9%88%d9%83%d9%8a%d9%81-%d8%aa%d9%84%d8%a8%d9%8a-%d9%86%d8%af%d8%a7%d8%a1-%d8%a7%d9%84%d8%b3%d9%88",
          "permanent": true
      },
      {
          "source": "/courses/marketing",
          "destination": "/course/%d8%aa%d8%ad%d8%b1%d9%8a%d8%b1-%d8%a7%d9%84%d8%b1%d8%b3%d8%a7%d9%84%d8%a9-%d8%a7%d9%84%d8%aa%d8%b3%d9%88%d9%8a%d9%82%d9%8a%d8%a9-%d9%84%d9%84%d9%85%d8%af%d8%b1%d8%a8%d9%8a%d9%86",
          "permanent": true
      },
      {
          "source": "/courses/afaf_zaid",
          "destination": "/course/%d9%83%d9%8a%d9%81-%d8%a7%d8%b9%d8%af-%d8%ad%d9%82%d9%8a%d8%a8%d8%a9-%d8%aa%d8%af%d8%b1%d9%8a%d8%a8%d9%8a%d8%a9-%d8%b9%d8%ac%d9%8a%d8%a8%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/onlinecourse2",
          "destination": "/course/%d9%88%d8%b1%d8%b4%d8%a9-%d8%a5%d8%b9%d8%af%d8%a7%d8%af-%d8%a7%d9%84%d8%ad%d9%82%d9%8a%d8%a8%d8%a9-%d8%a7%d9%84%d8%aa%d8%af%d8%b1%d9%8a%d8%a8%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/drmuneeraalrandi",
          "destination": "/course/%d8%ae%d8%b7%d9%88%d8%a7%d8%aa-%d8%a8%d8%b3%d9%8a%d8%b7%d8%a9-%d9%84%d8%b3%d9%83%d8%b1-%d9%85%d8%ab%d8%a7%d9%84%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/hessahpeace",
          "destination": "/course/%d8%aa%d8%a3%d8%ab%d9%8a%d8%b1-%d8%a7%d9%84%d8%a7%d8%b3%d8%aa%d8%ad%d9%82%d8%a7%d9%82-%d8%b9%d9%84%d9%89-%d9%88%d8%a7%d9%82%d8%b9%d9%83",
          "permanent": true
      },
      {
          "source": "/courses/mariamesmaeel",
          "destination": "/course/%d8%a7%d9%84%d8%a5%d8%b9%d8%af%d8%a7%d8%af-%d8%a7%d9%84%d8%a5%d9%8a%d8%ac%d8%a7%d8%a8%d9%8a-%d9%84%d8%a3%d8%b7%d9%81%d8%a7%d9%84-%d8%a7%d9%84%d8%aa%d9%88%d8%ad%d8%af",
          "permanent": true
      },
      {
          "source": "/courses/rolandabinajem",
          "destination": "/course/%d9%83%d9%8a%d9%81%d9%8a%d8%a9-%d8%a7%d8%b3%d8%aa%d8%ae%d8%af%d8%a7%d9%85-%d8%a7%d9%84%d8%b3%d9%88%d8%b4%d8%a7%d9%84-%d9%85%d9%8a%d8%af%d9%8a%d8%a7-%d9%84%d8%a8%d9%86%d8%a7%d8%a1-%d8%a8%d8%b1%d8%a7",
          "permanent": true
      },
      {
          "source": "/courses/tadarabtrainers",
          "destination": "/course/%d8%ae%d8%b7%d9%88%d8%a7%d8%aa-%d9%84%d9%85%d9%83%d8%aa%d8%a8-%d8%b5%d8%ad%d9%8a-%d9%88%d9%85%d8%b1%d8%aa%d8%a8",
          "permanent": true
      },
      {
          "source": "/courses/thedirctor",
          "destination": "/course/%d9%85%d9%87%d8%a7%d8%b1%d8%a7%d8%aa-%d8%a7%d9%84%d8%a5%d9%86%d9%82%d8%a7%d8%b0-%d9%88%d8%a7%d9%84%d8%a5%d8%b3%d8%b9%d8%a7%d9%81%d8%a7%d8%aa-%d8%a7%d9%84%d8%a3%d9%88%d9%84%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/fatma2",
          "destination": "/course/%d8%aa%d9%86%d8%b8%d9%8a%d9%81-%d8%a7%d9%84%d9%85%d8%b7%d8%a8%d8%ae",
          "permanent": true
      },
      {
          "source": "/courses/modyalbugami",
          "destination": "/course/%d8%a3%d8%b3%d8%b1%d8%a7%d8%b1-%d8%a7%d9%84%d8%a3%d9%86%d9%88%d8%ab%d8%a9-%d9%88%d8%a7%d9%84%d8%ad%d8%a8",
          "permanent": true
      },
      {
          "source": "/courses/abrary2",
          "destination": "/course/%d8%b5%d8%ad%d8%aa%d9%83-%d8%a7%d9%84%d9%86%d9%81%d8%b3%d9%8a%d8%a9-%d9%88%d8%a7%d9%84%d8%ac%d8%b3%d8%af%d9%8a%d8%a9-%d9%85%d8%b9-%d8%a7%d9%84%d8%a3%d9%84%d9%88%d8%a7%d9%86",
          "permanent": true
      },
      {
          "source": "/courses/fatma3",
          "destination": "/course/%d8%a7%d9%84%d9%83%d8%a8%d8%aa-%d8%a7%d9%84%d8%b3%d8%ad%d8%b1%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/anna",
          "destination": "/course/%d8%a7%d9%84%d9%88%d8%b8%d8%a7%d8%a6%d9%81-%d8%a7%d9%84%d8%aa%d9%86%d9%81%d9%8a%d8%b0%d9%8a%d8%a9-%d9%88%d8%a7%d8%b6%d8%b7%d8%b1%d8%a7%d8%a8%d8%a7%d8%aa-%d8%a7%d9%84%d9%84%d8%ba%d8%a9-%d8%a7%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/drmostafa2",
          "destination": "/course/%d9%83%d9%8a%d9%81-%d8%aa%d8%b5%d8%a8%d8%ad-%d9%85%d8%b1%d8%b4%d8%af%d8%a7-%d8%aa%d8%b1%d8%a8%d9%88%d9%8a%d8%a7-%d9%84%d9%85%d8%b1%d8%ad%d9%84%d8%a9-%d8%a7%d9%84%d8%b7%d9%81%d9%88%d9%84%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/drmostafa3",
          "destination": "/course/%d9%83%d9%8a%d9%81-%d8%a3%d9%82%d9%88%d9%8a-%d8%b4%d8%ae%d8%b5%d9%8a%d8%a9-%d8%a7%d8%a8%d9%86%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/modyalbugami2",
          "destination": "/course/%d8%a7%d9%85%d8%b3%d9%8a%d8%a9-%d8%a7%d9%84%d8%b1%d8%ac%d8%a7%d9%84-%d9%85%d9%86-%d8%a7%d9%84%d9%85%d8%b1%d9%8a%d8%ae-%d9%88%d8%a7%d9%84%d9%86%d8%b3%d8%a7%d8%a1-%d9%85%d9%86-%d8%a7%d9%84%d8%b2%d9%87",
          "permanent": true
      },
      {
          "source": "/courses/modyalbugami3",
          "destination": "/course/%d9%84%d8%a6%d9%86-%d8%b4%d9%83%d8%b1%d8%aa%d9%85",
          "permanent": true
      },
      {
          "source": "/courses/danahpathologist2",
          "destination": "/course/%d9%85%d9%86-%d8%a7%d9%84%d8%aa%d8%a3%d8%aa%d8%a3%d8%a9-%d8%a5%d9%84%d9%89-%d8%a7%d9%84%d8%b7%d9%84%d8%a7%d9%82%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/khaledcode",
          "destination": "/course/%d9%83%d9%8a%d9%81-%d9%8a%d9%81%d9%83%d8%b1-%d8%a7%d9%84%d8%b1%d8%ac%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/dima_najjar",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d8%b1%d8%a8%d9%8a%d8%a9-%d8%a7%d9%84%d9%82%d9%8a%d8%a7%d8%af%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/consultation_book",
          "destination": "/course/%d8%a7%d8%b3%d8%aa%d8%b4%d8%a7%d8%b1%d8%a9-%d8%ae%d8%a7%d8%b5%d8%a9-%d9%85%d9%86-%d8%a7%d8%a8%d8%aa%d8%b3%d8%a7%d9%85-%d8%a7%d9%84%d8%b9%d9%88%d9%85%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/sara_alshemmari2",
          "destination": "/course/%d8%a7%d8%b9%d8%b1%d9%81-%d9%86%d9%81%d8%b3%d9%83-%d8%ae%d9%84%d8%a7%d9%84-%d8%a7%d9%84%d8%a3%d8%b2%d9%85%d8%a7%d8%aa",
          "permanent": true
      },
      {
          "source": "/courses/afaf4",
          "destination": "/course/%d8%af%d9%8a%d8%aa%d9%88%d9%83%d8%b3-%d8%a7%d9%84%d8%a3%d9%81%d9%83%d8%a7%d8%b1",
          "permanent": true
      },
      {
          "source": "/courses/tipsbyhalahill",
          "destination": "/course/%d8%b9%d9%84%d9%85-%d8%a7%d9%84%d8%b4%d8%ae%d8%b5%d9%8a%d8%a7%d8%aa",
          "permanent": true
      },
      {
          "source": "/courses/anna2",
          "destination": "/course/%d8%a7%d9%84%d9%85%d9%86%d8%b7%d9%82-%d8%a7%d9%84%d8%aa%d8%ad%d9%84%d9%8a%d9%84%d9%8a-%d8%a7%d9%84%d8%b1%d9%8a%d8%a7%d8%b6%d9%8a-%d9%84%d8%b0%d9%88%d9%8a-%d8%a7%d9%84%d8%b5%d8%b9%d9%88%d8%a8%d8%a7",
          "permanent": true
      },
      {
          "source": "/courses/zalziadi",
          "destination": "/course/%d9%81%d9%86-%d8%a7%d9%84%d8%ad%d9%8a%d8%a7%d8%a9-%d8%a7%d9%84%d8%b7%d9%8a%d8%a8%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/dujanabaroudi",
          "destination": "/course/%d9%85%d9%87%d8%a7%d8%b1%d8%a7%d8%aa-%d8%a7%d9%84%d8%aa%d8%ad%d9%83%d9%85-%d8%a8%d8%a7%d9%84%d8%ba%d8%b6%d8%a8",
          "permanent": true
      },
      {
          "source": "/courses/hala",
          "destination": "/course/%d9%84%d8%ba%d8%a9-%d8%a7%d9%84%d8%ac%d8%b3%d8%af",
          "permanent": true
      },
      {
          "source": "/courses/business2030",
          "destination": "/course/%d8%a7%d9%84%d8%a8%d9%86%d8%a7%d8%a1-%d8%a7%d9%84%d9%82%d8%a7%d9%86%d9%88%d9%86%d9%8a-%d9%84%d9%84%d8%b9%d9%82%d9%88%d8%af",
          "permanent": true
      },
      {
          "source": "/courses/kamal",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d9%85%d9%8a%d8%b2-%d9%81%d9%8a-%d8%a7%d9%84%d8%a8%d9%8a%d8%b9-%d9%88%d8%a7%d9%84%d8%a8%d9%8a%d8%b9-%d8%a7%d9%84%d9%85%d8%aa%d9%82%d8%a7%d8%b7%d8%b9",
          "permanent": true
      },
      {
          "source": "/courses/salahchaaban",
          "destination": "/course/%d9%81%d9%86-%d8%a7%d9%84%d8%aa%d8%a3%d8%ab%d9%8a%d8%b1-%d9%85%d9%86-%d8%ae%d9%84%d8%a7%d9%84-%d8%a7%d9%84%d8%b5%d9%88%d8%aa",
          "permanent": true
      },
      {
          "source": "/courses/afaf3",
          "destination": "/course/%d8%a3%d8%b3%d8%b1%d8%a7%d8%b1-%d9%82%d9%8a%d8%a7%d8%af%d8%a9-%d8%a7%d9%84%d8%ad%d9%8a%d8%a7%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/maizia",
          "destination": "/course/%d8%a5%d8%b9%d8%af%d8%a7%d8%af-%d9%88%d8%aa%d8%b5%d9%85%d9%8a%d9%85-%d8%a7%d9%84%d8%ad%d9%82%d8%a7%d8%a6%d8%a8-%d8%a7%d9%84%d8%aa%d8%af%d8%b1%d9%8a%d8%a8%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/thabit",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d8%af%d8%b1%d9%8a%d8%b3-%d8%a7%d9%84%d8%a7%d8%ad%d8%aa%d8%b1%d8%a7%d9%81%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/ahmed_aljouhari",
          "destination": "/course/%d8%b5%d8%b9%d9%88%d8%a8%d8%a7%d8%aa-%d8%a7%d9%84%d8%aa%d8%b9%d9%84%d9%85",
          "permanent": true
      },
      {
          "source": "/courses/bymotlak",
          "destination": "/course/%d9%85%d8%b1%d8%a7%d8%ad%d9%84-%d8%a7%d9%84%d8%aa%d8%b5%d9%85%d9%8a%d9%85-%d8%a7%d9%84%d8%a8%d8%b3%d9%8a%d8%b7%d8%a9-%d9%88%d9%85%d8%b4%d8%a7%d8%b1%d9%8a%d8%b9-%d8%a7%d9%84%d8%aa%d9%86%d9%81%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/rich",
          "destination": "/course/%d8%b9%d8%a8%d9%82%d8%b1%d9%8a%d8%a9-%d8%a7%d9%84%d8%ab%d8%b1%d8%a7%d8%a1",
          "permanent": true
      },
      {
          "source": "/courses/nadanasef",
          "destination": "/course/%d8%af%d8%b3%d9%84%d9%83%d8%b3%d9%8a%d8%a7-%d8%aa%d8%b5%d8%ad%d9%8a%d8%ad-%d8%b9%d8%b3%d8%b1-%d8%a7%d9%84%d9%82%d8%b1%d8%a7%d8%a1%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/anna3",
          "destination": "/course/%d8%a7%d9%84%d8%b5%d8%b9%d9%88%d8%a8%d8%a7%d8%aa-%d8%a7%d9%84%d8%aa%d8%b9%d9%84%d9%85%d9%8a%d8%a9-%d9%88%d8%a7%d8%b1%d8%b4%d8%a7%d8%af%d8%a7%d8%aa-%d8%b9%d9%84%d8%a7%d8%ac%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/bedoor",
          "destination": "/course/%d9%85%d8%b1%d9%88%d9%86%d8%a9-%d8%a7%d9%84%d8%b3%d9%88%d9%82-%d9%85%d8%b9-%d8%a3%d8%b2%d9%85%d8%a9-%d9%83%d9%88%d8%b1%d9%88%d9%86%d8%a7",
          "permanent": true
      },
      {
          "source": "/courses/abdullah",
          "destination": "/course/%d8%a3%d9%86%d8%aa-%d9%88%d9%84%d8%af%d8%aa-%d8%b9%d8%b8%d9%8a%d9%85%d8%a7",
          "permanent": true
      },
      {
          "source": "/courses/mohamedafif",
          "destination": "/course/%d8%ac%d9%88%d9%84%d8%a9-%d9%81%d9%8a-%d8%aa%d8%b7%d8%a8%d9%8a%d9%82-%d8%b2%d9%88%d9%88%d9%85-%d9%84%d9%84%d9%85%d8%af%d8%b1%d8%a8%d9%8a%d9%86",
          "permanent": true
      },
      {
          "source": "/courses/mohamedafif2",
          "destination": "/course/%d8%a5%d8%b9%d8%af%d8%a7%d8%af-%d9%85%d8%af%d8%b1%d8%a8-%d8%a3%d9%88%d9%86%d9%84%d8%a7%d9%8a%d9%86",
          "permanent": true
      },
      {
          "source": "/courses/kamal-quick-tips",
          "destination": "/course/%d9%86%d8%b5%d8%a7%d8%a6%d8%ad-%d8%b3%d8%b1%d9%8a%d8%b9%d8%a9-%d9%84%d9%83%d9%8a-%d8%aa%d9%83%d9%88%d9%86-%d9%85%d8%a4%d8%ab%d8%b1%d8%a7-%d9%88%d8%b3%d8%a7%d8%ad%d8%b1%d8%a7-%d8%b9%d9%84%d9%89-%d8%a7",
          "permanent": true
      },
      {
          "source": "/courses/asmaa",
          "destination": "/course/%d8%a7%d9%84%d8%ae%d8%b1%d8%a7%d8%a6%d8%b7-%d8%a7%d9%84%d8%b0%d9%87%d9%86%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/mohamedalzkry",
          "destination": "/course/%d9%88%d8%a7%d8%b2%d9%86-%d8%ad%d9%8a%d8%a7%d8%aa%d9%83",
          "permanent": true
      },
      {
          "source": "/courses/zaid",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d8%b3%d8%b9%d9%8a%d8%b1-%d8%a7%d9%84%d8%b5%d8%ad%d9%8a%d8%ad-%d9%84%d9%84%d8%ae%d8%af%d9%85%d8%a7%d8%aa-%d9%88%d8%a7%d9%84%d8%b3%d9%84%d8%b9",
          "permanent": true
      },
      {
          "source": "/courses/thabit2",
          "destination": "/course/%d8%a7%d8%b3%d8%aa%d8%b1%d8%a7%d8%aa%d9%8a%d8%ac%d9%8a%d8%a7%d8%aa-%d8%a7%d9%84%d8%aa%d8%b9%d9%84%d9%85-%d8%a7%d9%84%d9%86%d8%b4%d8%b7-2",
          "permanent": true
      },
      {
          "source": "/courses/farahkhajah",
          "destination": "/course/%d8%aa%d8%b5%d9%81%d9%8a%d8%a9-%d8%a7%d9%84%d8%a8%d9%8a%d8%aa-%d9%88%d8%aa%d8%b5%d9%81%d9%8a%d8%a9-%d8%a7%d9%84%d9%86%d9%81%d8%b3",
          "permanent": true
      },
      {
          "source": "/courses/mohamed-qarfan",
          "destination": "/course/%d8%a3%d9%86%d8%b4%d8%b7%d8%a9-%d8%aa%d9%81%d8%a7%d8%b9%d9%84%d9%8a%d8%a9-%d8%a3%d9%88%d9%86%d9%84%d8%a7%d9%8a%d9%86-%d9%84%d9%84%d9%85%d8%af%d8%b1%d8%a8%d9%8a%d9%86-%d9%88%d8%a7%d9%84%d9%85%d8%af",
          "permanent": true
      },
      {
          "source": "/courses/tadarab-work-team",
          "destination": "/course/%d9%83%d9%8a%d9%81-%d8%aa%d8%b9%d8%af-%d8%af%d9%88%d8%b1%d8%a9-%d9%85%d8%aa%d9%83%d8%a7%d9%85%d9%84%d8%a9-%d8%b9%d9%84%d9%89-%d8%aa%d8%af%d8%b1%d8%a8-2",
          "permanent": true
      },
      {
          "source": "/courses/afaf",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d8%b9%d8%a7%d9%85%d9%84-%d9%85%d8%b9-%d8%a7%d9%84%d8%a3%d8%a8%d9%86%d8%a7%d8%a1-%d8%a8%d8%b9%d8%af-%d8%a7%d9%84%d8%a7%d9%86%d9%81%d8%b5%d8%a7%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/warqaaalbitar",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d9%86%d8%b3%d9%8a%d9%82-%d9%88%d8%a7%d9%84%d8%aa%d8%b1%d8%aa%d9%8a%d8%a8-%d9%81%d9%8a-%d8%a7%d9%84%d8%aa%d8%b5%d9%85%d9%8a%d9%85-%d8%a7%d9%84%d8%af%d8%a7%d8%ae%d9%84%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/ayman_online_project",
          "destination": "/course/%d8%aa%d8%a3%d8%b3%d9%8a%d8%b3-%d9%85%d8%b4%d8%b1%d9%88%d8%b9-%d8%a8%d9%8a%d8%b9-%d8%a3%d9%88%d9%86%d9%84%d8%a7%d9%8a%d9%86-%d9%81%d9%8a-%d8%a3%d9%8a%d8%a7%d9%85",
          "permanent": true
      },
      {
          "source": "/courses/dremad",
          "destination": "/course/%d8%a7%d9%84%d9%82%d9%88%d8%a7%d8%b9%d8%af-%d8%a7%d9%84%d8%b0%d9%87%d8%a8%d9%8a%d8%a9-%d9%84%d8%a5%d8%af%d8%a7%d8%b1%d8%a9-%d8%a7%d9%84%d9%88%d9%82%d8%aa",
          "permanent": true
      },
      {
          "source": "/courses/kamal3",
          "destination": "/course/%d8%aa%d8%af%d8%b1%d9%8a%d8%a8-%d9%88%d8%a5%d8%b9%d8%af%d8%a7%d8%af-%d8%a7%d9%84%d9%85%d8%af%d8%b1%d8%a8%d9%8a%d9%86",
          "permanent": true
      },
      {
          "source": "/courses/dribrahim",
          "destination": "/course/%d9%83%d9%8a%d9%81-%d8%a3%d8%a8%d9%86%d9%8a-%d8%b4%d8%ae%d8%b5%d9%8a%d8%a9-%d8%a7%d8%a8%d9%86%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/fahd2",
          "destination": "/course/%d9%83%d9%8a%d9%81-%d8%aa%d8%ad%d9%88%d9%84-%d8%a7%d9%84%d9%85%d8%b9%d8%b1%d9%81%d8%a9-%d8%a7%d9%84%d9%89-%d8%af%d8%ae%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/fahd",
          "destination": "/course/%d8%a7%d8%a8%d8%af%d8%a3-%d9%85%d8%b3%d9%8a%d8%b1%d8%aa%d9%83-%d9%81%d9%8a-%d8%a7%d9%84%d9%83%d9%88%d8%aa%d8%b4%d9%8a%d9%86%d8%ac-%d8%a7%d9%84%d8%aa%d9%88%d8%ac%d9%8a%d9%87-%d8%a7%d9%84%d9%85%d9%87",
          "permanent": true
      },
      {
          "source": "/courses/drzainab",
          "destination": "/course/%d8%a7%d8%b3%d8%a7%d8%b3%d9%8a%d8%a7%d8%aa-%d8%b1%d8%b3%d9%85-%d8%a7%d9%84%d8%a7%d8%b2%d9%8a%d8%a7%d8%a1",
          "permanent": true
      },
      {
          "source": "/courses/muneerahabdullah",
          "destination": "/course/%d8%b5%d9%86%d8%b9-%d9%88%d8%aa%d8%b1%d9%83%d9%8a%d8%a8-%d8%a7%d9%84%d8%b9%d8%b7%d9%88%d8%b1",
          "permanent": true
      },
      {
          "source": "/courses/asmaa2",
          "destination": "/course/%d9%85%d9%87%d8%a7%d8%b1%d8%a7%d8%aa-%d9%88%d9%81%d9%86%d9%8a%d8%a7%d8%aa-%d8%a7%d9%84%d8%aa%d8%b9%d9%84%d9%8a%d9%85-%d8%b9%d9%86-%d8%a8%d8%b9%d8%af",
          "permanent": true
      },
      {
          "source": "/courses/haya",
          "destination": "/course/%d8%a7%d9%84%d8%b2%d8%b1%d8%a7%d8%b9%d8%a9-%d8%a7%d9%84%d8%af%d8%a7%d8%ae%d9%84%d9%8a%d8%a9-%d8%a7%d9%84%d8%ae%d8%b6%d8%a7%d8%b1-%d9%88%d9%86%d8%a8%d8%a7%d8%aa%d8%a7%d8%aa-%d8%a7%d9%84%d8%b2%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/drmekhked",
          "destination": "/course/%d9%83%d9%8a%d9%81-%d8%aa%d8%b9%d9%85%d9%84-%d8%a7%d9%84%d9%85%d9%88%d8%a7%d8%b1%d8%af-%d8%a7%d9%84%d8%a8%d8%b4%d8%b1%d9%8a%d8%a9-%d8%b1%d9%82%d9%85%d9%8a%d8%a7",
          "permanent": true
      },
      {
          "source": "/courses/ekramy2",
          "destination": "/course/%d8%a7%d9%84%d8%b5%d9%8a%d8%a7%d8%ba%d8%a9-%d8%a7%d9%84%d9%82%d8%a7%d9%86%d9%88%d9%86%d9%8a%d8%a9-%d9%84%d9%84%d9%82%d8%b1%d8%a7%d8%b1%d8%a7%d8%aa-%d8%a7%d9%84%d8%a7%d8%af%d8%a7%d8%b1%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/kamal4",
          "destination": "/course/%d9%83%d9%8a%d9%81-%d8%aa%d8%aa%d8%ad%d9%83%d9%85-%d8%a8%d8%ad%d9%8a%d8%a7%d8%aa%d9%83-%d9%88-%d8%aa%d8%a8%d8%ad%d8%b1-%d9%85%d8%b1%d9%83%d8%a8%d9%83-%d8%a7%d9%84%d8%b4%d8%b1%d8%a7%d8%b9%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/artist",
          "destination": "/course/%d8%a3%d8%b3%d8%b3-%d8%aa%d8%ad%d8%b3%d9%8a%d9%86-%d8%a7%d9%84%d8%ae%d8%b7-%d8%a8%d8%a7%d9%84%d8%b1%d9%82%d8%b9%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/aldwaidi",
          "destination": "/course/%d9%85%d9%87%d8%a7%d8%b1%d8%a7%d8%aa-%d8%a7%d9%84%d8%b9%d9%85%d9%84-%d9%85%d9%86-%d8%a7%d9%84%d9%85%d9%86%d8%b2%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/dribrahim2",
          "destination": "/course/%d9%85%d8%b1%d8%a7%d9%87%d9%82-%d8%a7%d9%84%d9%8a%d9%88%d9%85",
          "permanent": true
      },
      {
          "source": "/courses/dujana2",
          "destination": "/course/%d8%b7%d9%88%d8%b1-%d9%82%d8%af%d8%b1%d8%a7%d8%aa-%d8%b7%d9%81%d9%84%d9%83-%d8%b1%d8%ba%d9%85-%d8%a7%d9%84%d8%aa%d8%b9%d9%84%d9%85-%d8%b9%d9%86-%d8%a8%d8%b9%d8%af",
          "permanent": true
      },
      {
          "source": "/courses/masaaracademy",
          "destination": "/course/%d8%a7%d9%84%d8%ad%d9%82%d9%8a%d8%a8%d8%a9-%d8%a7%d9%84%d8%b4%d8%a7%d9%85%d9%84%d8%a9-%d9%84%d8%aa%d8%b9%d9%84%d9%85-%d8%a7%d9%84%d9%88%d8%a7%d9%8a%d8%aa-%d8%a8%d9%88%d8%b1%d8%af-%d8%a7%d9%86%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/salem",
          "destination": "/course/%d8%a7%d9%84%d8%b9%d8%aa%d8%a8%d8%a7%d8%aa-%d9%81%d9%8a-%d8%a3%d9%88%d8%b2%d8%a7%d9%86-%d8%a7%d9%84%d8%b4%d8%b9%d8%b1-%d8%a7%d9%84%d8%b9%d8%b1%d8%a8%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/7-steps-business",
          "destination": "/course/%d8%ae%d8%b7%d9%88%d8%a7%d8%aa-%d9%84%d8%aa%d8%a3%d8%b3%d9%8a%d8%b3-%d9%85%d8%b4%d8%b1%d9%88%d8%b9-%d8%aa%d8%ac%d8%a7%d8%b1%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/drreemawayes",
          "destination": "/course/%d9%83%d9%8a%d9%81-%d8%aa%d8%b3%d8%a7%d8%b9%d8%af%d9%8a-%d8%b7%d9%81%d9%84%d9%83-%d8%a7%d9%84%d8%a7%d9%86%d8%aa%d9%82%d8%a7%d8%a6%d9%8a-%d9%81%d9%8a-%d8%b7%d8%b9%d8%a7%d9%85%d9%87",
          "permanent": true
      },
      {
          "source": "/courses/dr-barhoumithequran",
          "destination": "/course/%d8%b9%d8%a7%d9%84%d8%ac-%d8%a7%d9%84%d8%b4%d8%b1%d9%88%d8%af-%d8%a7%d9%84%d8%b0%d9%87%d9%86%d9%8a-%d9%88%d8%aa%d8%af%d8%a8%d8%b1-%d8%a7%d9%84%d9%82%d8%b1%d8%a7%d9%86-%d8%a7%d9%84%d9%83%d8%b1%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/asmaa_ali",
          "destination": "/course/%d8%a7%d9%84%d9%84%d8%b9%d8%a8-%d8%a7%d9%84%d8%aa%d8%b9%d9%84%d9%8a%d9%85%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/cleaning-the-bedroom",
          "destination": "/course/%d8%a3%d8%b3%d8%a7%d8%b3%d9%8a%d8%a7%d8%aa-%d8%aa%d8%b1%d8%aa%d9%8a%d8%a8-%d9%88%d8%aa%d9%86%d8%b8%d9%8a%d9%81-%d8%ba%d8%b1%d9%81%d8%a9-%d8%a7%d9%84%d9%86%d9%88%d9%85",
          "permanent": true
      },
      {
          "source": "/courses/dr-barhoumispeak",
          "destination": "/course/%d8%aa%d9%83%d9%84%d9%85-%d8%af%d9%88%d9%86-%d8%ae%d9%88%d9%81-%d9%88-%d8%a3%d8%ab%d8%b1-%d9%81%d9%8a-%d8%ac%d9%85%d9%87%d9%88%d8%b1%d9%83",
          "permanent": true
      },
      {
          "source": "/courses/safr2",
          "destination": "/course/%d9%81%d9%86-%d8%a7%d9%84%d8%a5%d8%ae%d8%b1%d8%a7%d8%ac-%d8%a7%d9%84%d9%85%d8%b3%d8%b1%d8%ad%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/faisalkarkari2",
          "destination": "/course/%d8%b1%d9%8a%d8%a7%d8%b6%d8%a9-%d8%a7%d9%84%d8%a7%d8%af%d8%ae%d8%a7%d8%b1",
          "permanent": true
      },
      {
          "source": "/courses/dralaa-2",
          "destination": "/course/%d8%a7%d9%84%d8%b0%d9%83%d8%a7%d8%a1-%d8%a7%d9%84%d8%b9%d8%a7%d8%b7%d9%81%d9%8a-%d8%a7%d9%84%d9%88%d8%ac%d8%af%d8%a7%d9%86%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/dr-alaa",
          "destination": "/course/%d9%83%d9%86-%d9%82%d9%86%d8%a7%d8%b5%d8%a7",
          "permanent": true
      },
      {
          "source": "/courses/dr-alaa3",
          "destination": "/course/%d9%85%d9%86-%d8%a7%d9%84%d8%ae%d9%88%d9%81-%d8%a7%d9%84%d9%89-%d8%a7%d9%84%d9%82%d9%88%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/dr-alaa4",
          "destination": "/course/%d8%b1%d8%ad%d9%84%d8%a9-%d8%a5%d9%84%d9%89-%d8%a3%d8%b9%d9%85%d8%a7%d9%82-%d8%a7%d9%84%d8%b0%d8%a7%d8%aa",
          "permanent": true
      },
      {
          "source": "/courses/dralaa5",
          "destination": "/course/%d9%85%d9%81%d8%a7%d8%aa%d9%8a%d8%ad-%d8%a7%d9%84%d9%86%d8%ac%d8%a7%d8%ad",
          "permanent": true
      },
      {
          "source": "/courses/dr-barhoumimemory",
          "destination": "/course/%d8%a7%d9%83%d8%aa%d8%b4%d9%81-%d9%82%d9%88%d8%a9-%d8%b0%d8%a7%d9%83%d8%b1%d8%aa%d9%83-%d9%88%d8%a7%d8%ad%d9%81%d8%b8-%d8%a7%d9%84%d8%ad%d8%af%d9%8a%d8%ab-%d8%b9%d9%86%d8%af-%d8%b3%d9%85%d8%a7%d8%b9",
          "permanent": true
      },
      {
          "source": "/courses/forex",
          "destination": "/course/%d9%83%d9%8a%d9%81%d9%8a%d8%a9-%d8%a7%d9%84%d8%aa%d8%af%d8%a7%d9%88%d9%84-%d8%a8%d8%a7%d9%84%d8%a7%d8%b3%d9%88%d8%a7%d9%82-%d8%a7%d9%84%d8%b9%d8%a7%d9%84%d9%85%d9%8a%d9%87-%d9%84%d9%84%d9%85%d8%a8",
          "permanent": true
      },
      {
          "source": "/courses/eng-omar",
          "destination": "/course/%d8%a7%d9%84%d8%a8%d8%af%d8%a7%d9%8a%d8%a9-%d9%81%d9%8a-%d8%b9%d8%a7%d9%84%d9%85-%d8%a7%d9%84%d8%aa%d8%b5%d9%88%d9%8a%d8%b1-%d8%a7%d9%84%d8%a3%d8%b3%d8%a7%d8%b3%d9%8a%d8%a7%d8%aa-%d9%88%d8%a7%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/dr-ibrahim_alkhulaifi",
          "destination": "/course/%d9%81%d9%86%d9%8a%d8%a7%d8%aa-%d8%aa%d8%b1%d8%a8%d9%8a%d8%a9-%d8%a7%d9%84%d8%a8%d9%86%d9%8a%d8%a7%d8%aa",
          "permanent": true
      },
      {
          "source": "/courses/mohamedmoheb",
          "destination": "/course/%d8%a7%d9%84%d9%85%d9%85%d8%ab%d9%84-%d9%88%d8%a8%d9%86%d8%a7%d8%a1-%d8%a7%d9%84%d8%b4%d8%ae%d8%b5%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/abdalla",
          "destination": "/course/%d8%a7%d9%84%d9%81%d8%b4%d9%84-%d9%85%d8%a7-%d9%8a%d9%85%d8%b4%d9%8a-%d8%b9%d9%86%d8%af%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/managing-capital-in-global-markets",
          "destination": "/course/%d8%a7%d8%af%d8%a7%d8%b1%d8%a9-%d8%b1%d8%a3%d8%b3-%d8%a7%d9%84%d9%85%d8%a7%d9%84-%d9%81%d9%8a-%d8%a7%d9%84%d8%a3%d8%b3%d9%88%d8%a7%d9%82-%d8%a7%d9%84%d8%b9%d8%a7%d9%84%d9%85%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/eng-patrick",
          "destination": "/course/%d9%83%d9%8a%d9%81-%d8%aa%d9%86%d9%81%d8%b0-%d8%a7%d9%84%d8%aa%d8%b4%d8%b7%d9%8a%d8%a8%d8%a7%d8%aa-%d8%a7%d9%84%d9%85%d8%b9%d9%85%d8%a7%d8%b1%d9%8a%d8%a9-finishes-insight-express",
          "permanent": true
      },
      {
          "source": "/courses/dr-zakiya",
          "destination": "/course/%d8%ad%d8%af%d9%8a%d9%82%d8%a9-%d8%a7%d9%84%d8%a3%d9%81%d9%83%d8%a7%d8%b1",
          "permanent": true
      },
      {
          "source": "/courses/dr-khalid",
          "destination": "/course/%d8%a7%d8%a8%d8%af%d8%a3-%d9%81%d9%8a-%d8%b9%d8%a7%d9%84%d9%85-%d8%b1%d9%8a%d8%a7%d8%af%d8%a9-%d8%a7%d9%84%d8%a3%d8%b9%d9%85%d8%a7%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/omamah",
          "destination": "/course/%d8%b5%d9%85%d9%85-%d8%a8%d9%86%d9%81%d8%b3%d9%83-%d9%84%d8%aa%d8%b9%d9%84%d9%8a%d9%85-%d8%a3%d8%b3%d8%a7%d8%b3%d9%8a%d8%a7%d8%aa-%d8%a7%d9%84%d8%aa%d8%b5%d9%85%d9%8a%d9%85-%d8%a7%d9%84%d8%af%d8%a7",
          "permanent": true
      },
      {
          "source": "/courses/dana_raed",
          "destination": "/course/%d9%83%d9%8a%d9%81-%d8%a3%d8%a8%d8%af%d8%a7-%d8%b1%d8%ad%d9%84%d8%a9-%d8%a7%d9%84%d8%aa%d8%b5%d9%85%d9%8a%d9%85-%d8%a7%d9%84%d8%af%d8%a7%d8%ae%d9%84%d9%8a-%d8%a8%d8%b7%d8%b1%d9%8a%d9%82%d8%a9-%d8%b5",
          "permanent": true
      },
      {
          "source": "/courses/dr-ibrahim",
          "destination": "/course/%d8%a5%d8%b9%d8%af%d8%a7%d8%af-%d8%a7%d9%84%d9%85%d8%b1%d8%a3%d8%a9-%d9%84%d9%84%d8%b2%d9%88%d8%a7%d8%ac",
          "permanent": true
      },
      {
          "source": "/courses/dr-reham",
          "destination": "/course/%d8%a7%d9%84%d8%ac%d9%85%d8%a7%d9%84-%d8%a7%d9%84%d8%b0%d9%8a-%d9%84%d8%a7%d9%8a%d8%b4%d9%8a%d8%ae",
          "permanent": true
      },
      {
          "source": "/courses/%d8%b5%d9%86%d8%a7%d8%b9%d8%a9-%d8%a7%d9%84%d8%b5%d8%a7%d8%a8%d9%88%d9%86-%d9%81%d9%8a-%d8%a7%d9%84%d9%85%d9%86%d8%b2%d9%84",
          "destination": "/course/%d8%b5%d9%86%d8%a7%d8%b9%d8%a9-%d8%a7%d9%84%d8%b5%d8%a7%d8%a8%d9%88%d9%86-%d9%85%d9%86-%d8%a7%d9%84%d8%b5%d9%81%d8%b1-%d9%84%d9%84%d9%85%d8%a8%d8%aa%d8%af%d8%a6%d9%8a%d9%86",
          "permanent": true
      },
      {
          "source": "/courses/innerchild",
          "destination": "/course/%d8%a7%d9%84%d8%b7%d9%81%d9%84-%d8%a7%d9%84%d8%af%d8%a7%d8%ae%d9%84%d9%8a-%d9%84%d9%84%d8%aa%d8%ad%d8%b1%d8%b1-%d9%85%d9%86-%d8%a7%d9%84%d9%85%d8%a7%d8%b6%d9%8a-%d8%a7%d9%84%d8%ac%d8%b2%d8%a1-%d8%a7-3",
          "permanent": true
      },
      {
          "source": "/courses/innerchild2",
          "destination": "/course/%d8%a7%d9%84%d8%b7%d9%81%d9%84-%d8%a7%d9%84%d8%af%d8%a7%d8%ae%d9%84%d9%8a-%d9%84%d9%84%d8%aa%d8%ad%d8%b1%d8%b1-%d9%85%d9%86-%d8%a7%d9%84%d9%85%d8%a7%d8%b6%d9%8a-%d8%a7%d9%84%d8%ac%d8%b2%d8%a1-%d8%a7-2",
          "permanent": true
      },
      {
          "source": "/courses/innerchild3",
          "destination": "/course/%d8%a7%d9%84%d8%b7%d9%81%d9%84-%d8%a7%d9%84%d8%af%d8%a7%d8%ae%d9%84%d9%8a-%d9%84%d9%84%d8%aa%d8%ad%d8%b1%d8%b1-%d9%85%d9%86-%d8%a7%d9%84%d9%85%d8%a7%d8%b6%d9%8a-%d8%a7%d9%84%d8%ac%d8%b2%d8%a1-%d8%a7",
          "permanent": true
      },
      {
          "source": "/courses/dr-reham2",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d8%ba%d9%84%d8%a8-%d8%b9%d9%84%d9%89-%d8%a7%d9%84%d8%a5%d8%b1%d9%87%d8%a7%d9%82-%d9%88%d8%a7%d9%84%d8%ae%d9%85%d9%88%d9%84-%d8%a8%d8%a7%d8%b3%d8%aa%d8%ae%d8%af%d8%a7%d9%85-%d8%a7",
          "permanent": true
      },
      {
          "source": "/courses/masouma",
          "destination": "/course/%d8%af%d9%88%d9%86%d8%a7%d8%aa-%d8%a8%d8%a7%d9%84%d9%83%d8%b1%d9%88%d8%b4%d9%8a%d9%87",
          "permanent": true
      },
      {
          "source": "/courses/fatemah",
          "destination": "/course/%d8%a7%d9%84%d9%85%d8%a7%d9%84-%d9%88%d8%a7%d9%84%d8%a8%d9%86%d9%88%d9%86",
          "permanent": true
      },
      {
          "source": "/courses/dr-barhoumipersuasion",
          "destination": "/course/%d9%82%d9%88%d8%a9-%d8%a7%d9%84%d8%b9%d8%b1%d8%b6-%d9%88%d8%a7%d9%84%d8%aa%d9%88%d8%a7%d8%b5%d9%84-%d9%88%d8%a7%d9%84%d8%a5%d9%82%d9%86%d8%a7%d8%b9",
          "permanent": true
      },
      {
          "source": "/courses/amani-jazia",
          "destination": "/course/%d8%a5%d8%af%d8%a7%d8%b1%d8%a9-%d9%88%d8%aa%d8%b9%d8%af%d9%8a%d9%84-%d8%b3%d9%84%d9%88%d9%83-%d8%a7%d9%84%d8%b7%d9%81%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/salemalrumaidhi2",
          "destination": "/course/%d8%a7%d9%84%d8%b9%d8%aa%d8%a8%d8%a7%d8%aa-%d9%81%d9%8a-%d8%a3%d9%88%d8%b2%d8%a7%d9%86-%d8%a7%d9%84%d8%b4%d8%b9%d8%b1-%d8%a7%d9%84%d9%86%d8%a8%d8%b7%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/mubarak-accounting",
          "destination": "/course/%d8%a7%d9%84%d9%85%d8%ad%d8%a7%d8%b3%d8%a8%d8%a9-%d9%84%d8%ba%d9%8a%d8%b1-%d8%a7%d9%84%d9%85%d8%ad%d8%a7%d8%b3%d8%a8%d9%8a%d9%86",
          "permanent": true
      },
      {
          "source": "/courses/reham-garash",
          "destination": "/course/%d8%a7%d9%84%d9%85%d8%b1%d8%a3%d8%a9-%d9%88%d8%a7%d9%84%d9%87%d8%b1%d9%85%d9%88%d9%86%d8%a7%d8%aa",
          "permanent": true
      },
      {
          "source": "/courses/dr-amal",
          "destination": "/course/%d8%a7%d9%84%d9%85%d8%b3%d8%a7%d8%b9%d8%af%d8%a9-%d8%a7%d9%84%d8%b0%d9%83%d9%8a%d8%a9-%d9%84%d9%84%d8%a3%d8%b7%d9%81%d8%a7%d9%84-%d8%a7%d9%84%d8%ba%d8%a7%d8%b6%d8%a8%d9%8a%d9%86-%d8%aa%d8%af%d8%b1",
          "permanent": true
      },
      {
          "source": "/courses/hussain-moquim",
          "destination": "/course/%d8%a3%d8%a8%d8%ac%d8%af%d9%8a%d8%a7%d8%aa-%d8%ae%d8%b7-%d8%a7%d9%84%d9%85%d9%82%d9%8a%d9%85-%d8%a7%d9%84%d9%85%d8%b3%d8%aa%d9%88%d9%89-%d8%a7%d9%84%d8%a3%d9%88%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/samar-alanker",
          "destination": "/course/%d8%aa%d8%ad%d9%81%d9%8a%d8%b2-%d8%a7%d9%84%d8%b3%d9%84%d9%88%d9%83-%d8%a7%d9%84%d8%a7%d9%8a%d8%ac%d8%a7%d8%a8%d9%8a-%d9%88%d8%a7%d9%84%d9%85%d9%87%d8%a7%d8%b1%d8%a7%d8%aa-%d8%a7%d9%84%d8%ac%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/real-time-landscaping",
          "destination": "/course/%d8%b4%d8%b1%d8%ad-%d8%a8%d8%b1%d9%86%d8%a7%d9%85%d8%ac-%d8%a7%d9%84%d8%b1%d9%8a%d8%a7%d9%84-%d8%aa%d8%a7%d9%8a%d9%85-%d9%84%d8%a7%d9%86%d8%af%d8%b3%d9%83%d9%8a%d8%a8-real-time-landscaping",
          "permanent": true
      },
      {
          "source": "/courses/artofwriting",
          "destination": "/course/%d9%81%d9%86-%d8%a7%d9%84%d8%aa%d8%a3%d9%84%d9%8a%d9%81-%d9%88%d8%a7%d9%84%d9%86%d8%b4%d8%b1",
          "permanent": true
      },
      {
          "source": "/courses/hanan",
          "destination": "/course/%d9%81%d9%86-%d8%a7%d9%84%d8%a5%d8%aa%d9%8a%d9%83%d9%8a%d8%aa-%d8%a8%d9%8a%d9%86-%d8%a7%d9%84%d9%83%d8%a7%d8%b1%d9%8a%d8%b2%d9%85%d8%a7-%d9%88%d9%85%d9%83%d8%a7%d8%b1%d9%85-%d8%a7%d9%84%d8%a3%d8%ae",
          "permanent": true
      },
      {
          "source": "/courses/dr-ibarhim-alkhulaifi",
          "destination": "/course/%d9%85%d8%b1%d8%a7%d9%87%d9%82%d9%88%d9%86-%d9%85%d8%b7%d9%85%d8%a6%d9%86%d9%88%d9%86",
          "permanent": true
      },
      {
          "source": "/courses/masouma-crocheted",
          "destination": "/course/%d8%a3%d9%85%d9%8a%d8%b1%d8%a7%d8%aa%d9%8a-%d8%a8%d8%a7%d9%84%d9%83%d8%b1%d9%88%d8%b4%d9%8a%d9%87",
          "permanent": true
      },
      {
          "source": "/courses/dr-muhammed",
          "destination": "/course/%d8%a7%d9%84%d8%a3%d8%b3%d8%a6%d9%84%d8%a9-%d8%a7%d9%84%d8%a3%d9%83%d8%ab%d8%b1-%d8%b4%d9%8a%d9%88%d8%b9%d8%a7-%d9%81%d9%8a-%d8%ac%d9%84%d8%b3%d8%a7%d8%aa-%d8%a7%d9%84%d9%83%d9%88%d8%aa%d8%b4%d9%86",
          "permanent": true
      },
      {
          "source": "/courses/dribrahim-marrige",
          "destination": "/course/%d8%a7%d8%b9%d8%af%d8%a7%d8%af-%d8%a7%d9%84%d8%b1%d8%ac%d9%84-%d9%86%d9%81%d8%b3%d9%8a%d8%a7-%d9%84%d9%84%d8%b2%d9%88%d8%a7%d8%ac-%d8%a7%d9%84%d9%8a%d9%88%d9%85",
          "permanent": true
      },
      {
          "source": "/courses/quizizz",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d8%b9%d9%84%d9%8a%d9%85-%d8%a7%d9%84%d8%aa%d9%81%d8%a7%d8%b9%d9%84%d9%8a-%d9%88%d8%a7%d9%84%d8%aa%d9%82%d9%8a%d9%8a%d9%85-%d8%a7%d9%84%d8%a7%d9%84%d9%83%d8%aa%d8%b1%d9%88%d9%86",
          "permanent": true
      },
      {
          "source": "/courses/alsayed-alrawy",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d8%b9%d9%84%d9%8a%d9%85-%d8%a7%d9%84%d8%aa%d9%81%d8%a7%d8%b9%d9%84%d9%8a-%d9%88%d8%b5%d9%86%d8%a7%d8%b9%d8%a9-%d8%a7%d9%84%d9%85%d8%ad%d8%aa%d9%88%d9%89-%d8%a7%d9%84%d8%aa%d8%b9",
          "permanent": true
      },
      {
          "source": "/courses/mody",
          "destination": "/course/%d8%b4%d9%87%d8%b1%d8%b2%d8%a7%d8%af-%d9%84%d8%aa%d8%a3%d9%87%d9%8a%d9%84-%d8%a7%d9%84%d9%85%d9%82%d8%a8%d9%84%d8%a7%d8%aa-%d8%b9%d9%84%d9%89-%d8%a7%d9%84%d8%b2%d9%88%d8%a7%d8%ac",
          "permanent": true
      },
      {
          "source": "/courses/alaa",
          "destination": "/course/%d8%a7%d9%84%d8%ae%d8%b7-%d8%a7%d9%84%d8%af%d9%8a%d9%88%d8%a7%d9%86%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/adelalqaapi",
          "destination": "/course/%d8%aa%d8%b9%d9%84%d9%85-%d8%aa%d8%b5%d9%85%d9%8a%d9%85-%d8%b9%d8%af%d8%b3%d8%a7%d8%aa-%d9%88%d9%81%d9%84%d8%a7%d8%aa%d8%b1-%d8%b3%d9%86%d8%a7%d8%a8%d8%b4%d8%a7%d8%aa",
          "permanent": true
      },
      {
          "source": "/courses/alanood-f-alharbi",
          "destination": "/course/%d8%a3%d8%b3%d8%b1%d8%a7%d8%b1-%d8%a7%d9%84%d9%83%d9%8a%d9%86%d9%88%d8%aa",
          "permanent": true
      },
      {
          "source": "/courses/professional-advanced-excel-course",
          "destination": "/course/professional-advanced-excel-course-%d8%aa%d8%b9%d9%84%d9%8a%d9%85-%d8%a8%d8%b1%d9%86%d8%a7%d9%85%d8%ac-%d8%a7%d9%84%d8%a7%d9%83%d8%b3%d9%8a%d9%84-%d8%a7%d9%84%d8%a7%d8%ad%d8%aa%d8%b1%d8%a7%d9%81%d9%89",
          "permanent": true
      },
      {
          "source": "/courses/dr-ola",
          "destination": "/course/%d8%aa%d9%82%d9%86%d9%8a%d8%a7%d8%aa-%d8%a5%d8%af%d8%a7%d8%b1%d8%a9-%d8%a7%d9%84%d8%ac%d9%88%d8%af%d8%a9-%d9%81%d9%8a-%d8%aa%d8%ad%d9%82%d9%8a%d9%82-%d8%a7%d9%84%d8%a3%d8%af%d8%a7%d8%a1-%d8%a7%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/iman-hasan",
          "destination": "/course/%d9%83%d9%8a%d9%81-%d8%aa%d8%ae%d8%b1%d8%ac-%d9%85%d9%86-%d8%a7%d9%84%d8%b6%d8%a7%d8%a6%d9%82%d8%a9-%d8%a7%d9%84%d9%85%d8%a7%d9%84%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/",
          "destination": "/course/%d8%aa%d8%ae%d9%84%d8%b5-%d9%85%d9%86-%d8%a7%d9%84%d9%85%d8%b4%d8%a7%d8%b9%d8%b1-%d8%a7%d9%84%d8%b3%d9%84%d8%a8%d9%8a%d8%a9-%d9%88-%d8%a7%d9%84%d8%b5%d8%af%d9%85%d8%a7%d8%aa-%d8%a7%d9%84%d9%86%d9%81",
          "permanent": true
      },
      {
          "source": "/courses/anwar-fawaz",
          "destination": "/course/%d8%ae%d8%b7%d9%88%d8%a7%d8%aa-%d8%a7%d8%ae%d8%aa%d9%8a%d8%a7%d8%b1-%d8%a7%d9%84%d8%aa%d8%ae%d8%b5%d8%b5-%d8%a7%d9%84%d8%af%d8%b1%d8%a7%d8%b3%d9%8a-%d9%88%d8%a7%d9%84%d9%85%d9%87%d9%86%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/dr-reham-garash",
          "destination": "/course/%d8%a8%d8%b1%d8%aa%d9%88%d9%83%d9%88%d9%84-%d8%b9%d9%84%d8%a7%d8%ac-%d8%a7%d8%b1%d8%aa%d8%b4%d8%a7%d8%ad-%d8%a7%d9%84%d8%a3%d9%85%d8%b9%d8%a7%d8%a1-%d8%a8%d8%a7%d8%b3%d8%aa%d8%ae%d8%af%d8%a7%d9%85",
          "permanent": true
      },
      {
          "source": "/courses/joumana-alnounou",
          "destination": "/course/%d9%83%d9%8a%d9%81-%d8%a3%d8%b5%d8%a8%d8%ad-%d9%85%d9%82%d8%af%d9%85%d8%a7-%d8%aa%d9%84%d9%81%d8%b2%d9%8a%d9%88%d9%86%d9%8a%d8%a7-%d9%86%d8%a7%d8%ac%d8%ad%d8%a7",
          "permanent": true
      },
      {
          "source": "/courses/eman-makeup",
          "destination": "/course/%d8%a3%d8%b3%d8%a7%d8%b3%d9%8a%d8%a7%d8%aa-%d8%a7%d9%84%d9%85%d9%83%d9%8a%d8%a7%d8%ac-%d9%84%d9%84%d9%85%d8%a8%d8%aa%d8%af%d8%a6%d8%a7%d8%aa",
          "permanent": true
      },
      {
          "source": "/courses/ldpa-georges",
          "destination": "/course/%d8%a2%d9%84%d9%8a%d8%a9-%d8%aa%d8%b4%d8%ae%d9%8a%d8%b5-%d8%a7%d8%b6%d8%b7%d8%b1%d8%a7%d8%a8-%d8%a7%d9%84%d9%82%d9%84%d9%82",
          "permanent": true
      },
      {
          "source": "/courses/abdul-mohsen",
          "destination": "/course/%d9%87%d8%b1%d9%85-%d8%a5%d8%af%d8%a7%d8%b1%d8%a9-%d8%a7%d9%84%d8%ad%d9%8a%d8%a7%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/dr-zuhair",
          "destination": "/course/%d8%b1%d9%88%d8%a7%d8%ac-%d8%a7%d9%84%d8%b9%d9%84%d8%a7%d9%85%d8%a7%d8%aa-%d8%a7%d9%84%d8%aa%d8%ac%d8%a7%d8%b1%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/abdullah-hamad-shahbal",
          "destination": "/course/%d8%aa%d8%b9%d9%84%d9%85-%d8%a8%d8%b1%d9%86%d8%a7%d9%85%d8%ac-%d8%aa%d8%ad%d9%84%d9%8a%d9%84%d8%a7%d8%aa-%d8%ac%d9%88%d8%ac%d9%84-%d8%a8%d8%a5%d8%ad%d8%aa%d8%b1%d8%a7%d9%81%d9%8a%d8%a9-%d9%88%d8%a7",
          "permanent": true
      },
      {
          "source": "/courses/zaineb-shaker",
          "destination": "/course/%d8%af%d9%88%d8%b1%d8%a9-%d8%a8%d8%b1%d9%86%d8%a7%d9%85%d8%ac-%d8%a7%d9%84%d8%b1%d8%b3%d9%85-%d8%a7%d9%84%d9%87%d9%86%d8%af%d8%b3%d9%8a-%d8%a7%d9%84%d8%a7%d8%aa%d9%88%d9%83%d8%a7%d8%af",
          "permanent": true
      },
      {
          "source": "/courses/zuhair-mansour-almazeedi",
          "destination": "/course/%d8%aa%d8%ae%d8%b7%d9%8a%d8%b7-%d9%88%d8%aa%d8%b5%d9%85%d9%8a%d9%85-%d8%a7%d9%84%d8%ad%d9%85%d9%84%d8%a7%d8%aa-%d8%a7%d9%84%d8%a5%d8%b9%d9%84%d8%a7%d9%86%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/dribrahim-parenting-skills",
          "destination": "/course/%d8%a7%d9%84%d9%85%d9%87%d8%a7%d8%b1%d8%a7%d8%aa-%d8%a7%d9%84%d9%88%d8%a7%d9%84%d8%af%d9%8a%d8%a9-%d9%84%d9%84%d8%b2%d9%85%d9%86-%d8%a7%d9%84%d8%b1%d9%82%d9%85%d9%8a-%d9%88%d8%a7%d9%84%d8%a7%d9%81",
          "permanent": true
      },
      {
          "source": "/courses/alya-alsyed",
          "destination": "/course/%d8%b7%d8%b1%d9%8a%d9%82%d8%a9-%d8%a7%d8%b3%d8%aa%d8%ae%d8%af%d8%a7%d9%85-%d8%b9%d8%ac%d9%84%d8%a9-%d8%a7%d9%84%d8%a3%d9%84%d9%88%d8%a7%d9%86-%d9%88%d8%a3%d8%b3%d8%a7%d8%b3%d9%8a%d8%a7%d8%aa-%d8%a7",
          "permanent": true
      },
      {
          "source": "/courses/obida-hassan",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d8%ad%d9%84%d9%8a%d9%84-%d8%a7%d9%84%d9%86%d9%81%d8%b3%d9%8a-%d9%84%d8%b1%d8%b3%d9%88%d9%85%d8%a7%d8%aa-%d8%a7%d9%84%d8%b5%d8%ba%d8%a7%d8%b1-%d9%88%d8%a7%d9%84%d9%83%d8%a8%d8%a7",
          "permanent": true
      },
      {
          "source": "/courses/dr-mohamed-al-qatami",
          "destination": "/course/%d8%aa%d9%85%d9%87%d9%8a%d8%af-%d8%b9%d9%86-%d8%a7%d9%84%d8%af%d8%b3%d9%84%d9%83%d8%b3%d9%8a%d8%a7",
          "permanent": true
      },
      {
          "source": "/courses/dr-zuhair-2",
          "destination": "/course/%d8%aa%d8%ad%d9%88%d9%8a%d9%84-%d8%a7%d9%84%d9%82%d9%8a%d9%85-%d8%a5%d9%84%d9%89-%d9%85%d9%86%d8%aa%d8%ac%d8%a7%d8%aa-%d9%88%d9%85%d8%b4%d8%a7%d8%b1%d9%8a%d8%b9",
          "permanent": true
      },
      {
          "source": "/courses/tadarab_work_team",
          "destination": "/course/%d9%88%d8%b1%d8%b4%d8%a9-%d8%b9%d9%85%d9%84-%d8%ad%d8%b6%d9%88%d8%b1%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/%d9%88%d8%b1%d8%b4%d8%a9-%d8%aa%d9%81%d8%a7%d8%b9%d9%84%d9%8a%d8%a9-%d8%a7%d9%88%d9%86%d9%84%d8%a7%d9%8a%d9%86",
          "destination": "/course/%d9%88%d8%b1%d8%b4%d8%a9-%d8%aa%d9%81%d8%a7%d8%b9%d9%84%d9%8a%d8%a9-%d8%a7%d9%88%d9%86%d9%84%d8%a7%d9%8a%d9%86",
          "permanent": true
      },
      {
          "source": "/courses/dr-zuhair-3",
          "destination": "/course/%d8%aa%d9%81%d8%b9%d9%8a%d9%84-%d8%a7%d9%84%d9%82%d9%8a%d9%85-%d9%88%d9%85%d9%85%d8%a7%d8%b1%d8%b3%d8%aa%d9%87%d8%a7",
          "permanent": true
      },
      {
          "source": "/courses/sketchup",
          "destination": "/course/%d8%b3%d9%83%d8%aa%d8%b4-%d8%a3%d8%a8-%d9%88%d9%81%d9%8a%d8%b1%d8%a7%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/reham-garash-2",
          "destination": "/course/%d8%b1%d8%ad%d9%84%d8%a9-%d9%81%d9%8a-%d9%86%d8%b8%d8%a7%d9%85-%d8%a7%d9%84%d8%a3%d9%8a%d9%88%d8%b1%d9%81%d9%8a%d8%af%d8%a7-%d9%84%d9%84%d8%aa%d9%88%d8%a7%d8%b2%d9%86-%d8%a7%d9%84%d9%8a%d9%88%d9%85",
          "permanent": true
      },
      {
          "source": "/courses/ahmed-salah",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d8%b1%d8%a8%d9%8a%d8%a9-%d8%a7%d9%84%d8%ac%d9%86%d8%b3%d9%8a%d8%a9-%d9%84%d9%84%d8%a3%d8%a8%d9%86%d8%a7%d8%a1-%d9%85%d9%86-%d8%a7%d9%84%d9%85%d9%8a%d9%84%d8%a7%d8%af-%d8%ad%d8%aa",
          "permanent": true
      },
      {
          "source": "/courses/dr-ahmedsalah",
          "destination": "/course/%d8%a3%d9%86%d8%a7-%d8%a8%d9%84%d8%ba%d8%aa-%d9%88%d8%b5%d8%b1%d8%aa-%d9%85%d8%b1%d8%a7%d9%87%d9%82-%d9%85%d8%a7%d8%b0%d8%a7-%d8%a3%d9%81%d8%b9%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/dr-rania",
          "destination": "/course/%d8%a5%d8%af%d8%a7%d8%b1%d8%a9-%d8%a7%d9%84%d8%a3%d8%b2%d9%85%d8%a7%d8%aa-%d9%88%d8%b6%d8%ba%d9%88%d8%b7-%d8%a7%d9%84%d8%b9%d9%85%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/obida",
          "destination": "/course/%d8%aa%d9%88%d9%82%d9%8a%d8%b9%d9%83-%d8%b3%d8%b1-%d8%b4%d8%ae%d8%b5%d9%8a%d8%aa%d9%83",
          "permanent": true
      },
      {
          "source": "/courses/mona_sami",
          "destination": "/course/%d8%a3%d8%b3%d8%b1%d8%a7%d8%b1-%d8%ba%d9%8a%d8%b1-%d9%85%d8%ad%d9%83%d9%8a%d8%a9-%d8%b9%d9%86-%d8%a7%d9%84%d9%83%d8%aa%d8%a7%d8%a8%d8%a9-%d8%a7%d9%84%d8%a5%d8%a8%d8%af%d8%a7%d8%b9%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/dr-zuhair-mansour",
          "destination": "/course/%d8%a5%d8%af%d8%a7%d8%b1%d8%a9-%d9%86%d9%88%d8%a7%d8%af%d9%8a-%d8%a7%d9%84%d9%82%d9%8a%d9%85-%d9%84%d9%84%d8%a3%d8%b7%d9%81%d8%a7%d9%84-%d9%88%d8%a7%d9%84%d9%8a%d8%a7%d9%81%d8%b9%d9%8a%d9%86",
          "permanent": true
      },
      {
          "source": "/courses/walaa",
          "destination": "/course/%d8%a7%d9%84%d8%a5%d8%af%d8%b1%d8%a7%d9%83-%d8%a7%d9%84%d8%a8%d8%b5%d8%b1%d9%8a-%d8%a7%d9%84%d9%86%d8%b8%d8%b1%d9%8a-%d9%88%d8%a7%d9%84%d8%b9%d9%85%d9%84%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/mahmoud-daoud",
          "destination": "/course/%d8%aa%d8%b7%d9%88%d9%8a%d8%b1-%d8%aa%d8%b7%d8%a8%d9%8a%d9%82%d8%a7%d8%aa-%d8%a7%d9%84%d8%a3%d9%86%d8%af%d8%b1%d9%88%d9%8a%d8%af-%d8%a8%d9%84%d8%ba%d8%a9-%d8%a7%d9%84%d8%a8%d8%b1%d9%85%d8%ac%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/drzuhair",
          "destination": "/course/%d8%aa%d8%b3%d9%88%d9%8a%d9%82-%d8%a7%d9%84%d8%ad%d9%84%d8%a7%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/strategist",
          "destination": "/course/%d8%ae%d8%a8%d9%8a%d8%b1-%d8%a7%d9%84%d8%aa%d8%ae%d8%b7%d9%8a%d8%b7-%d8%a7%d9%84%d8%a7%d8%b3%d8%aa%d8%b1%d8%a7%d8%aa%d9%8a%d8%ac%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/kald",
          "destination": "/course/%d8%a7%d9%84%d8%b9%d9%84%d8%a7%d8%ac-%d8%a8%d8%a7%d9%84%d9%84%d8%b9%d8%a8-%d9%85%d8%b9-%d8%b0%d9%88%d9%8a-%d8%a7%d9%84%d8%a7%d8%ad%d8%aa%d9%8a%d8%a7%d8%ac%d8%a7%d8%aa-%d8%a7%d9%84%d8%ae%d8%a7%d8%b5",
          "permanent": true
      },
      {
          "source": "/courses/mohamed-hawash",
          "destination": "/course/%d9%88%d8%b8%d8%a7%d8%a6%d9%81-%d9%88-%d8%b9%d9%85%d9%84%d9%8a%d8%a7%d8%aa-%d8%a7%d8%af%d8%a7%d8%b1%d8%a9-%d8%a7%d9%84%d9%85%d9%88%d8%a7%d8%b1%d8%af-%d8%a7%d9%84%d8%a8%d8%b4%d8%b1%d9%8a%d9%87-hr-proce",
          "permanent": true
      },
      {
          "source": "/courses/asma-alzawahra",
          "destination": "/course/%d8%b9%d9%85%d9%84-%d8%b2%d9%87%d9%88%d8%b1-%d8%a7%d9%84%d8%ad%d8%b1%d9%8a%d8%b1",
          "permanent": true
      },
      {
          "source": "/courses/hani",
          "destination": "/course/%d8%b5%d9%8a%d8%a7%d9%86%d8%a9-%d8%a7%d9%84%d9%85%d9%88%d8%a8%d8%a7%d9%8a%d9%84%d8%a7%d8%aa",
          "permanent": true
      },
      {
          "source": "/courses/ahmed-mohamed",
          "destination": "/course/%d8%a7%d9%84%d8%ab%d9%82%d8%a9-%d8%a8%d8%a7%d9%84%d9%86%d9%81%d8%b3-2",
          "permanent": true
      },
      {
          "source": "/courses/hani_masgidi",
          "destination": "/course/%d9%85%d9%86-%d8%a7%d9%84%d8%a3%d9%84%d9%81-%d8%a7%d9%84%d9%89-%d8%a7%d9%84%d9%8a%d8%a7%d8%a1-%d9%84%d8%a5%d8%b7%d9%84%d8%a7%d9%82-%d8%af%d9%88%d8%b1%d8%aa%d9%83-%d8%b9%d9%84%d9%89-%d8%a7%d9%84%d8%a5",
          "permanent": true
      },
      {
          "source": "/courses/israa_ahmed",
          "destination": "/course/%d8%a7%d9%84%d9%87%d9%88%d9%8a%d8%a9-%d8%a7%d9%84%d8%b4%d8%ae%d8%b5%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/khadeeja",
          "destination": "/course/%d8%a7%d8%b3%d8%aa%d8%b1%d8%a7%d8%aa%d9%8a%d8%ac%d9%8a%d8%a9-%d8%a7%d9%84%d8%aa%d8%b3%d9%88%d9%8a%d9%82-%d9%88%d8%a7%d9%84%d9%85%d8%a8%d9%8a%d8%b9%d8%a7%d8%aa",
          "permanent": true
      },
      {
          "source": "/courses/kamal-al-shehabi",
          "destination": "/course/%d8%a3%d8%b3%d8%a7%d8%b3%d9%8a%d8%a7%d8%aa-%d8%aa%d8%a3%d9%84%d9%8a%d9%81-%d8%a7%d9%84%d8%b1%d9%88%d8%a7%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/dr-atia-bo-abdelrahman",
          "destination": "/course/%d8%a5%d8%b9%d8%af%d8%a7%d8%af-%d9%85%d8%af%d8%b1%d8%a8-%d9%85%d8%ad%d8%aa%d8%b1%d9%81",
          "permanent": true
      },
      {
          "source": "/courses/obida-elzin",
          "destination": "/course/%d8%aa%d8%ad%d9%84%d9%8a%d9%84-%d8%a7%d9%84%d8%b4%d8%ae%d8%b5%d9%8a%d8%a9-%d9%85%d9%86-%d8%ae%d9%84%d8%a7%d9%84-%d9%83%d8%aa%d8%a7%d8%a8%d8%a9-%d8%a7%d9%84%d8%ad%d8%b1%d9%88%d9%81",
          "permanent": true
      },
      {
          "source": "/courses/azeddine",
          "destination": "/course/%d8%aa%d8%ad%d8%af%d9%8a%d8%af-%d9%88%d8%aa%d8%ad%d9%82%d9%8a%d9%82-%d8%a7%d9%84%d8%a3%d9%87%d8%af%d8%a7%d9%81",
          "permanent": true
      },
      {
          "source": "/courses/hussain-zainal",
          "destination": "/course/%d8%a7%d9%84%d8%a7%d8%a8%d8%aa%d9%83%d8%a7%d8%b1-%d9%81%d9%8a-%d9%86%d9%85%d8%a7%d8%b0%d8%ac-%d8%a7%d9%84%d8%b9%d9%85%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/ahmed-said",
          "destination": "/course/%d8%a7%d9%81%d9%87%d9%85%d9%88%d9%86%d9%8a-%d8%a3%d9%86%d8%a7-%d9%85%d8%b1%d8%a7%d9%87%d9%82",
          "permanent": true
      },
      {
          "source": "/courses/fuad-abdullah",
          "destination": "/course/%d8%b3%d8%a8%d8%a7%d8%b9%d9%8a%d8%a7%d8%aa-%d8%a7%d9%84%d8%ad%d9%8a%d8%a7%d8%a9-%d8%a7%d9%84%d8%b2%d9%88%d8%ac%d9%8a%d8%a9-%d8%a7%d9%84%d8%b3%d8%b9%d9%8a%d8%af%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/douaa",
          "destination": "/course/%d8%b4%d8%b1%d8%ad-%d8%a8%d8%b1%d9%86%d8%a7%d9%85%d8%ac-%d8%a7%d9%84%d8%a8%d8%a7%d9%88%d8%b1%d8%a8%d9%88%d9%8a%d9%86%d8%aa-%d9%88%d9%83%d9%8a%d9%81%d9%8a%d8%a9-%d8%a7%d8%b3%d8%aa%d8%ae%d8%af%d8%a7",
          "permanent": true
      },
      {
          "source": "/courses/mohamed-adnan",
          "destination": "/course/%d8%b9%d9%88%d9%84%d9%85%d8%a9-%d8%a7%d9%84%d8%aa%d8%b9%d9%84%d9%8a%d9%85-%d9%81%d9%8a-%d8%b8%d9%84-%d8%ac%d8%a7%d8%a6%d8%ad%d8%a9-%d9%83%d9%88%d8%b1%d9%88%d9%86%d8%a7",
          "permanent": true
      },
      {
          "source": "/courses/alaa-eldeen",
          "destination": "/course/%d9%84%d9%8a%d8%a7%d9%82%d8%a9-%d8%a3%d8%a8%d9%86%d8%a7%d8%a6%d9%86%d8%a7-%d8%aa%d8%a8%d8%af%d8%a3-%d9%85%d9%86-%d8%a7%d9%84%d9%85%d9%86%d8%b2%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/sohila",
          "destination": "/course/%d9%86%d8%b8%d8%b1%d9%8a%d8%a9-%d8%aa%d8%b1%d9%8a%d8%b2-%d9%84%d9%84%d8%aa%d9%81%d9%83%d9%8a%d8%b1-%d8%a7%d9%84%d8%a5%d8%a8%d8%af%d8%a7%d8%b9%d9%8a-%d9%88%d8%ad%d9%84-%d8%a7%d9%84%d9%85%d8%b4%d9%83",
          "permanent": true
      },
      {
          "source": "/courses/ibrahim-khattab",
          "destination": "/course/%d9%81%d9%86-%d8%a7%d8%ae%d8%aa%d9%8a%d8%a7%d8%b1-%d9%88-%d8%ac%d8%b0%d8%a8-%d8%b4%d8%b1%d9%8a%d9%83-%d8%a7%d9%84%d8%ad%d9%8a%d8%a7%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/alaa-saleh",
          "destination": "/course/%d8%ad%d9%84%d9%88%d9%84-%d8%b9%d9%85%d9%84%d9%8a%d8%a9-%d9%84%d8%aa%d8%b7%d8%a8%d9%8a%d9%82%d8%a7%d8%aa-%d8%a5%d8%af%d8%a7%d8%b1%d8%a9-%d8%a7%d9%84%d9%85%d9%88%d8%a7%d8%b1%d8%af-%d8%a7%d9%84%d8%a8-2",
          "permanent": true
      },
      {
          "source": "/courses/bissan",
          "destination": "/course/%d8%b9%d8%b4%d8%b1%d8%a9-%d8%a3%d8%b3%d8%b1%d8%a7%d8%b1-%d9%84%d8%aa%d8%b5%d8%a8%d8%ad-%d9%82%d8%a7%d8%a6%d8%af%d8%a7-%d9%85%d8%a4%d8%ab%d8%b1%d8%a7-%d8%b9%d9%84%d9%89-%d9%81%d8%b1%d9%8a%d9%82-%d8%b9",
          "permanent": true
      },
      {
          "source": "/courses/foud-narcissism",
          "destination": "/course/%d8%a7%d9%84%d9%86%d8%b1%d8%ac%d8%b3%d9%8a%d8%a9-%d9%85%d8%a7-%d9%84%d9%87%d8%a7-%d9%88%d9%85%d8%a7-%d8%b9%d9%84%d9%8a%d9%87%d8%a7",
          "permanent": true
      },
      {
          "source": "/courses/boushra-esmaiel-rabaie",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d8%b1%d8%a8%d9%8a%d8%a9-%d8%a7%d9%84%d9%88%d8%a7%d8%b9%d9%8a%d8%a9-%d9%85%d9%86-%d8%a7%d9%84%d9%85%d9%87%d8%af-%d8%a5%d9%84%d9%89-%d8%a7%d9%84%d8%b3%d8%b9%d8%af",
          "permanent": true
      },
      {
          "source": "/courses/alaa-abdulaziz-afghani",
          "destination": "/course/%d8%a7%d9%84%d8%ad%d9%85%d9%8a%d8%a9-%d8%a7%d9%84%d9%85%d9%81%d8%aa%d9%88%d8%ad%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/susna-welson",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d8%b1%d8%a8%d9%8a%d8%a9-%d8%a7%d9%84%d9%81%d8%b9%d8%a7%d9%84%d8%a9-%d9%88%d8%aa%d8%b9%d8%af%d9%8a%d9%84-%d8%a7%d9%84%d9%85%d8%b3%d8%a7%d8%b1",
          "permanent": true
      },
      {
          "source": "/courses/kald-classic",
          "destination": "/course/%d8%a7%d9%84%d9%86%d9%85%d8%b0%d8%ac%d8%a9-%d8%a8%d9%8a%d9%86-%d8%a7%d9%84%d9%83%d9%84%d8%a7%d8%b3%d9%8a%d9%83%d9%8a%d8%a9-%d9%88%d8%a7%d9%84%d8%aa%d9%82%d9%86%d9%8a%d8%a9-%d8%a7%d9%84%d8%ad%d8%af",
          "permanent": true
      },
      {
          "source": "/courses/fayza",
          "destination": "/course/%d8%aa%d8%b7%d8%a8%d9%8a%d9%82-%d8%a7%d9%84%d8%aa%d8%a7%d8%a1%d8%a7%d8%aa-%d8%a7%d9%84%d8%ae%d9%85%d8%b3-%d9%84%d8%aa%d9%86%d8%b8%d9%8a%d9%85-%d8%a8%d9%8a%d8%a6%d8%a9-%d8%a7%d9%84%d8%b9%d9%85%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/raghad",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d8%af%d8%b1%d9%8a%d8%b3-%d8%a7%d9%84%d9%81%d8%b9%d8%a7%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/yousef-majed",
          "destination": "/course/%d9%83%d9%8a%d9%81-%d8%aa%d8%ad%d8%b3%d9%86-%d8%b5%d9%88%d8%aa%d9%83-%d9%81%d9%8a-%d8%aa%d9%84%d8%a7%d9%88%d8%a9-%d8%a7%d9%84%d9%82%d8%b1%d8%a2%d9%86-%d8%a7%d9%84%d9%83%d8%b1%d9%8a%d9%85",
          "permanent": true
      },
      {
          "source": "/courses/asmaa_mohamed",
          "destination": "/course/%d8%aa%d9%86%d8%b3%d9%8a%d9%82-%d8%a7%d9%84%d9%88%d8%b1%d8%af-%d9%85%d9%86-%d8%a7%d9%84%d8%b5%d9%81%d8%b1-%d9%84%d9%84%d8%a5%d8%ad%d8%aa%d8%b1%d8%a7%d9%81",
          "permanent": true
      },
      {
          "source": "/courses/mohamed-ibrahim",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d8%b3%d9%88%d9%8a%d9%82-%d8%a7%d9%84%d8%a5%d9%84%d9%83%d8%aa%d8%b1%d9%88%d9%86%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/fauad-abdallah",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d8%ae%d8%b7%d9%8a%d8%b7-%d9%84%d9%85%d9%8a%d8%b2%d8%a7%d9%86%d9%8a%d8%a9-%d8%a7%d9%84%d8%a3%d8%b3%d8%b1%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/rich-father-poor-father",
          "destination": "/course/%d8%a7%d9%84%d8%a3%d8%a8-%d8%a7%d9%84%d8%ba%d9%86%d9%8a-%d9%88%d8%a7%d9%84%d8%a3%d8%a8-%d8%a7%d9%84%d9%81%d9%82%d9%8a%d8%b1",
          "permanent": true
      },
      {
          "source": "/courses/balqis-abdulrhman-soliman",
          "destination": "/course/%d8%ae%d8%b7%d9%88%d8%a9-%d8%a8%d8%ae%d8%b7%d9%88%d8%a9-%d9%84%d9%83%d8%aa%d8%a7%d8%a8%d8%a9-%d8%b1%d9%88%d8%a7%d9%8a%d8%aa%d9%83",
          "permanent": true
      },
      {
          "source": "/courses/sell-pictures-and-videos",
          "destination": "/course/%d8%a7%d9%84%d8%af%d9%84%d9%8a%d9%84-%d8%a7%d9%84%d9%83%d8%a7%d9%85%d9%84-%d9%84%d9%83%d8%b3%d8%a8-%d8%a7%d9%84%d9%85%d8%a7%d9%84-%d9%85%d9%86-%d8%ae%d9%84%d8%a7%d9%84-%d8%a8%d9%8a%d8%b9-%d8%a7%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/omar-almajed",
          "destination": "/course/%d9%83%d9%8a%d9%81-%d9%86%d8%aa%d8%b7%d9%88%d8%b1-%d8%a8%d8%ab%d9%82%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/awatif-sulaiman",
          "destination": "/course/%d9%85%d8%b3%d8%a4%d9%88%d9%84%d9%8a%d8%a9-%d8%a7%d9%84%d9%88%d8%a7%d9%84%d8%af%d9%8a%d9%86-%d9%81%d9%8a-%d8%a7%d9%84%d8%aa%d8%b1%d8%a8%d9%8a%d8%a9-%d8%a7%d9%84%d8%ac%d9%86%d8%b3%d9%8a%d8%a9-%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/alaa-afghani",
          "destination": "/course/%d9%83%d9%8a%d9%81-%d9%86%d8%b5%d9%88%d9%85-%d9%88%d9%86%d9%86%d8%ad%d9%81-%d8%a8%d8%af%d9%88%d9%86-%d8%ad%d8%b1%d9%85%d8%a7%d9%86-%d9%86%d8%ad%d8%a7%d9%81%d8%a9-%d8%b1%d8%ba%d9%85-%d8%a7%d9%84%d9%83",
          "permanent": true
      },
      {
          "source": "/courses/parenting-skills-aisha",
          "destination": "/course/%d9%85%d9%87%d8%a7%d8%b1%d8%a7%d8%aa-%d8%a7%d9%84%d8%aa%d8%b9%d8%a7%d9%85%d9%84-%d9%85%d8%b9-%d8%a7%d9%84%d9%88%d8%a7%d9%84%d8%af%d9%8a%d9%86",
          "permanent": true
      },
      {
          "source": "/courses/marital-happiness-aisha",
          "destination": "/course/%d8%a3%d8%b3%d8%b1%d8%a7%d8%b1-%d8%a7%d9%84%d8%b3%d8%b9%d8%a7%d8%af%d8%a9-%d8%a7%d9%84%d8%b2%d9%88%d8%ac%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/social-relations-aisha",
          "destination": "/course/%d9%83%d9%88%d9%86%d9%8a-%d9%85%d8%b5%d8%af%d8%b1-%d8%ae%d9%8a%d8%b1-%d8%a7%d9%84%d8%b9%d9%84%d8%a7%d9%82%d8%a7%d8%aa-%d8%a7%d9%84%d8%a7%d8%ac%d8%aa%d9%85%d8%a7%d8%b9%d9%8a%d8%a9-%d8%a7%d9%84%d9%89",
          "permanent": true
      },
      {
          "source": "/courses/aisha",
          "destination": "/course/%d8%a7%d8%aa%d8%b1%d9%83-%d8%a7%d8%ab%d8%b1-%d9%82%d8%a8%d9%84-%d8%a7%d9%84%d8%b1%d8%ad%d9%8a%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/happinese-aisha",
          "destination": "/course/%d8%a7%d9%84%d8%b3%d8%b9%d8%a7%d8%af%d8%a9-%d9%82%d8%b1%d8%a7%d8%b1",
          "permanent": true
      },
      {
          "source": "/courses/aisha-awadh",
          "destination": "/course/%d9%83%d9%88%d9%86%d9%8a-%d8%a3%d9%85-%d8%b2%d9%88%d8%ac%d8%a9-%d8%b1%d8%a7%d9%82%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/corona-and-immunity",
          "destination": "/course/%d9%83%d9%88%d8%b1%d9%88%d9%86%d8%a7-%d9%88%d8%a7%d9%84%d9%85%d9%86%d8%a7%d8%b9%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/aisha-awadh-alroshdi",
          "destination": "/course/%d9%85%d9%87%d8%a7%d8%b1%d8%a7%d8%aa-%d8%a7%d9%84%d8%aa%d8%b9%d8%a7%d9%85%d9%84-%d9%85%d8%b9-%d8%a7%d9%84%d8%a3%d8%b7%d9%81%d8%a7%d9%84-%d9%81%d9%8a-%d8%a7%d9%84%d8%b2%d9%8a%d8%a7%d8%b1%d8%a7%d8%aa",
          "permanent": true
      },
      {
          "source": "/courses/abdulrahman-najeeb-alfailakawi",
          "destination": "/course/%d8%ad%d9%82%d9%88%d9%82-%d9%88%d9%88%d8%a7%d8%ac%d8%a8%d8%a7%d8%aa-%d8%a7%d9%84%d9%85%d9%88%d8%b8%d9%81",
          "permanent": true
      },
      {
          "source": "/courses/mohamed-saad",
          "destination": "/course/canva-%d9%84%d8%a7%d8%a8%d8%aa%d9%83%d8%a7%d8%b1-%d8%aa%d8%b5%d9%85%d9%8a%d9%85-%d9%85%d8%b0%d9%87%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/happiness-marriage-mohamed-barhoumi",
          "destination": "/course/%d8%a7%d9%84%d8%b3%d8%b9%d8%a7%d8%af%d8%a9-%d8%a7%d9%84%d8%b2%d9%88%d8%ac%d9%8a%d8%a9-%d9%84%d9%84%d8%b1%d8%ac%d8%a7%d9%84-%d9%88-%d8%a7%d9%84%d9%86%d8%b3%d8%a7%d8%a1-%d8%b3%d9%88%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/ahmed-thaher",
          "destination": "/course/%d9%83%d9%8a%d9%81-%d8%a3%d8%aa%d8%b9%d8%a7%d9%85%d9%84-%d9%85%d8%b9-%d8%a7%d9%84%d9%85%d8%b4%d8%a7%d8%b9%d8%b1-%d8%a7%d9%84%d8%b3%d9%84%d8%a8%d9%8a%d8%a9-%d8%a7%d9%84%d8%ad%d8%b2%d9%86-%d9%88%d9%85",
          "permanent": true
      },
      {
          "source": "/courses/itil-4-foundation-course-arabic-and-english",
          "destination": "/course/itil-4-foundation-course-arabic-and-english",
          "permanent": true
      },
      {
          "source": "/courses/mohammad-e-alrasehed",
          "destination": "/course/%d8%a7%d9%84%d8%b9%d9%85%d9%84%d8%a7%d8%aa-%d8%a7%d9%84%d8%b1%d9%82%d9%85%d9%8a%d8%a9-%d9%88-%d8%b7%d8%b1%d9%82-%d8%a7%d8%b3%d8%aa%d8%ab%d9%85%d8%a7%d8%b1%d9%87%d8%a7",
          "permanent": true
      },
      {
          "source": "/courses/revit-2019-zaineb-shaker",
          "destination": "/course/%d8%b4%d8%b1%d8%ad-%d8%a8%d8%b1%d9%86%d8%a7%d9%85%d8%ac-%d8%a7%d9%84%d8%b1%d9%8a%d9%81%d8%aa-2019-%d8%a7%d9%84%d9%85%d8%b9%d9%85%d8%a7%d8%b1%d9%8a-%d9%84%d9%84%d8%aa%d8%b5%d9%85%d9%8a%d9%85-%d8%a7",
          "permanent": true
      },
      {
          "source": "/courses/khawlah-altamimi",
          "destination": "/course/%d9%85%d9%87%d8%a7%d8%b1%d8%a7%d8%aa-%d8%a7%d9%84%d8%aa%d8%ae%d8%b7%d9%8a%d8%b7-%d8%a7%d9%84%d8%b4%d8%ae%d8%b5%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/ali-abbas-kamal",
          "destination": "/course/%d8%a7%d9%84%d8%af%d9%88%d8%b1%d8%a9-%d8%a7%d9%84%d8%b9%d9%82%d8%a7%d8%b1%d9%8a%d8%a9-%d8%a7%d9%84%d8%b4%d8%a7%d9%85%d9%84%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/fawzy-algomaan",
          "destination": "/course/%d8%af%d9%88%d8%b1-%d9%85%d8%b9%d9%84%d9%85%d9%8a-%d8%a7%d9%84%d8%b8%d9%84-%d9%88%d8%a7%d9%84%d8%a3%d8%b3%d8%b1%d8%a9-%d9%81%d9%8a-%d8%af%d9%85%d8%ac-%d8%b0%d9%88%d9%8a-%d8%b7%d9%8a%d9%81-%d8%a7%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/self-confidence-dhouha-khaldi",
          "destination": "/course/%d8%a7%d9%84%d8%ab%d9%82%d8%a9-%d8%a8%d8%a7%d9%84%d9%86%d9%81%d8%b3",
          "permanent": true
      },
      {
          "source": "/courses/dr-abeer-khaled-al-baho",
          "destination": "/course/%d8%a7%d8%b3%d8%aa%d8%ae%d8%af%d8%a7%d9%85-%d8%a7%d9%84%d9%85%d9%81%d8%a7%d9%87%d9%8a%d9%85-%d8%a7%d9%84%d8%a5%d8%a8%d8%af%d8%a7%d8%b9%d9%8a%d8%a9-%d9%81%d9%8a-%d8%a5%d8%af%d8%a7%d8%b1%d8%a9-%d8%a3",
          "permanent": true
      },
      {
          "source": "/courses/anger-is-a-devastating-choice-dr-othman-alasfour",
          "destination": "/course/%d8%a7%d9%84%d8%ba%d8%b6%d8%a8-%d8%a7%d8%ae%d8%aa%d9%8a%d8%a7%d8%b1-%d9%85%d8%af%d9%85%d8%b1",
          "permanent": true
      },
      {
          "source": "/courses/weam-mohamed",
          "destination": "/course/%d9%83%d9%8a%d9%81-%d8%a3%d8%ad%d9%82%d9%82-%d8%a3%d9%87%d8%af%d8%a7%d9%81%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/prezi-next-2021-dalia-younis",
          "destination": "/course/%d9%85%d8%ad%d8%aa%d8%b1%d9%81-%d8%aa%d8%b7%d8%a8%d9%8a%d9%82-%d8%a8%d8%b1%d9%8a%d8%b2%d9%8a-%d9%84%d9%84%d8%b9%d8%b1%d9%88%d8%b6-%d8%a7%d9%84%d8%aa%d9%82%d8%af%d9%8a%d9%85%d9%8a%d8%a9-%d8%ab%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/abeer-salem",
          "destination": "/course/%d8%a7%d9%84%d8%b0%d9%83%d8%a7%d8%a1-%d8%a7%d9%84%d8%b9%d8%a7%d8%b7%d9%81%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/health-education-ola-salah-husain",
          "destination": "/course/%d8%a5%d8%b9%d8%af%d8%a7%d8%af-%d9%85%d9%85%d8%a7%d8%b1%d8%b3-%d9%85%d8%b9%d8%aa%d9%85%d8%af-%d9%81%d9%8a-%d8%a7%d9%84%d8%aa%d8%ab%d9%82%d9%8a%d9%81-%d8%a7%d9%84%d8%b5%d8%ad%d9%8a-%d9%88-%d9%86%d8%b8",
          "permanent": true
      },
      {
          "source": "/courses/to-save-and-invest-in-gold-dhafer-mobarak-aldossary",
          "destination": "/course/%d8%a7%d9%84%d8%a7%d8%af%d8%ae%d8%a7%d8%b1-%d9%88%d8%a7%d9%84%d8%a7%d8%b3%d8%aa%d8%ab%d9%85%d8%a7%d8%b1-%d9%81%d9%8a-%d8%a7%d9%84%d8%b0%d9%87%d8%a8-%d8%a8%d8%aa%d9%83%d9%86%d9%8a%d9%83%d8%a7%d8%aa",
          "permanent": true
      },
      {
          "source": "/courses/sarah-asiri",
          "destination": "/course/%d8%a7%d9%84%d9%83%d8%a7%d8%b1%d9%8a%d8%b2%d9%85%d8%a7-%d9%88%d8%a7%d9%84%d9%88%d8%b9%d9%8a-%d8%a7%d9%84%d8%a3%d9%86%d8%ab%d9%88%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/discover-your-vak-learning-style-dr-mohamed-alqarfan",
          "destination": "/course/%d8%a3%d9%83%d8%aa%d8%b4%d9%81-%d9%86%d9%85%d8%b7-%d8%a7%d9%84%d8%aa%d8%b9%d9%84%d9%85-%d9%84%d8%af%d9%8a%d9%83-vak",
          "permanent": true
      },
      {
          "source": "/courses/real-estate-appraisal-amal-mohammed",
          "destination": "/course/%d9%85%d9%82%d8%af%d9%85%d8%a9-%d9%81%d9%8a-%d8%a7%d9%84%d8%aa%d9%82%d9%8a%d9%8a%d9%85-%d8%a7%d9%84%d8%b9%d9%82%d8%a7%d8%b1%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/raoua-alhussin",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d8%b1%d8%a8%d9%8a%d8%a9-%d8%a7%d9%84%d8%ac%d9%86%d8%b3%d9%8a%d8%a9-%d8%a8%d8%a7%d9%84%d9%86%d8%b3%d8%a8%d8%a9-%d9%84%d9%85%d8%b1%d8%ad%d9%84%d8%a9-%d8%a7%d9%84%d8%b7%d9%81%d9%88",
          "permanent": true
      },
      {
          "source": "/courses/khalid-abdulaziz",
          "destination": "/course/%d8%a7%d8%b3%d8%aa%d8%b1%d8%a7%d8%aa%d9%8a%d8%ac%d9%8a%d8%a7%d8%aa-%d8%a7%d9%84%d8%aa%d8%af%d8%b1%d9%8a%d8%b3-%d8%a7%d9%84%d8%ad%d8%af%d9%8a%d8%ab%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/hanan-alramzi",
          "destination": "/course/%d8%aa%d8%b9%d8%af%d9%8a%d9%84-%d8%a7%d9%84%d8%a8%d8%b4%d8%b1%d8%a9-%d8%a7%d9%84%d9%85%d8%aa%d9%82%d8%af%d9%85-%d8%a8%d8%a7%d8%b3%d8%aa%d8%ae%d8%af%d8%a7%d9%85-%d8%a8%d8%b1%d9%86%d8%a7%d9%85%d8%ac",
          "permanent": true
      },
      {
          "source": "/courses/%d8%ad%d9%84%d9%88%d9%84-%d8%b9%d9%85%d9%84%d9%8a%d8%a9-%d9%84%d8%aa%d8%b7%d8%a8%d9%8a%d9%82%d8%a7%d8%aa-%d8%a5%d8%af%d8%a7%d8%b1%d8%a9-%d8%a7%d9%84%d9%85%d9%88%d8%a7%d8%b1%d8%af-%d8%a7%d9%84%d8%a8",
          "destination": "/course/%d8%ad%d9%84%d9%88%d9%84-%d8%b9%d9%85%d9%84%d9%8a%d8%a9-%d9%84%d8%aa%d8%b7%d8%a8%d9%8a%d9%82%d8%a7%d8%aa-%d8%a5%d8%af%d8%a7%d8%b1%d8%a9-%d8%a7%d9%84%d9%85%d9%88%d8%a7%d8%b1%d8%af-%d8%a7%d9%84%d8%a8",
          "permanent": true
      },
      {
          "source": "/courses/kamal-write-your-book",
          "destination": "/course/%d9%83%d9%8a%d9%81-%d8%aa%d8%a4%d9%84%d9%81-%d9%83%d8%aa%d8%a7%d8%a8%d9%83-%d8%a8%d8%af%d9%88%d9%86-%d9%83%d8%aa%d8%a7%d8%a8%d8%a9-%d8%ad%d8%b1%d9%81-%d9%88%d8%a7%d8%ad%d8%af",
          "permanent": true
      },
      {
          "source": "/courses/dr-rehab-mohamed-elshafey",
          "destination": "/course/%d8%a7%d9%84%d8%a5%d8%af%d8%a7%d8%b1%d8%a9-%d8%a7%d9%84%d8%b5%d9%81%d9%8a%d8%a9-%d9%81%d9%8a-%d8%b1%d9%8a%d8%a7%d8%b6-%d8%a7%d9%84%d8%a3%d8%b7%d9%81%d8%a7%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/dr-othman",
          "destination": "/course/%d8%a7%d8%b6%d8%b7%d8%b1%d8%a7%d8%a8-%d8%a7%d9%84%d9%87%d9%88%d9%8a%d8%a9-%d8%a7%d9%84%d8%ac%d9%86%d8%b3%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/amal-abdullah",
          "destination": "/course/%d8%a7%d9%84%d8%b1%d8%ad%d9%84%d8%a9-%d8%a5%d9%84%d9%89-%d8%a7%d9%84%d9%86%d8%b9%d9%8a%d9%85-%d9%88%d8%aa%d8%ad%d9%82%d9%8a%d9%82-%d8%a7%d9%84%d9%85%d8%b9%d8%ac%d8%b2%d8%a7%d8%aa",
          "permanent": true
      },
      {
          "source": "/courses/hani-nawaya",
          "destination": "/course/%d9%85%d9%87%d8%a7%d8%b1%d8%a7%d8%aa-%d8%a7%d9%84%d8%a8%d8%ad%d8%ab-%d8%a7%d9%84%d9%85%d8%aa%d9%82%d8%af%d9%85%d8%a9-%d9%81%d9%8a-%d8%a5%d9%83%d8%b3%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/how-do-you-read-a-book-khalid-abdulaziz",
          "destination": "/course/%d9%83%d9%8a%d9%81-%d8%aa%d9%82%d8%b1%d8%a3-%d9%83%d8%aa%d8%a7%d8%a8%d8%a7",
          "permanent": true
      },
      {
          "source": "/courses/raising-children-ahmed-said",
          "destination": "/course/%d8%a3%d9%84%d9%81-%d8%a8%d8%a7%d8%a1-%d8%aa%d8%b1%d8%a8%d9%8a%d8%a9-%d8%a7%d9%84%d8%a3%d8%a8%d9%86%d8%a7%d8%a1",
          "permanent": true
      },
      {
          "source": "/courses/zainab-saleem-qasem",
          "destination": "/course/%d8%b3%d8%ad%d8%b1-%d8%a7%d9%84%d9%82%d9%84%d9%88%d8%a8-%d8%a7%d9%84%d8%a8%d8%b1%d9%85%d8%ac%d8%a9-%d8%a7%d9%84%d8%a8%d9%8a%d9%88%d9%84%d9%88%d8%ac%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/khalfan-mufriji",
          "destination": "/course/%d8%a7%d9%84%d9%86%d9%82%d9%84%d8%a9-%d8%a7%d9%84%d9%86%d9%88%d8%b9%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/dalia-master-trainer",
          "destination": "/course/%d9%83%d9%8a%d9%81-%d8%aa%d8%b5%d8%a8%d8%ad-%d9%85%d8%b9%d9%84%d9%85-%d8%ae%d8%a8%d9%8a%d8%b1-%d9%85%d8%b9%d8%aa%d9%85%d8%af-%d9%85%d9%86-%d9%85%d8%a7%d9%8a%d9%83%d8%b1%d9%88%d8%b3%d9%88%d9%81%d8%aa",
          "permanent": true
      },
      {
          "source": "/courses/faiza-razem-level",
          "destination": "/course/%d9%85%d9%86%d9%87%d8%ac%d9%8a%d8%a9-%d9%83%d8%a7%d9%8a%d8%b2%d9%86-%d8%a7%d9%84%d9%85%d8%b3%d8%aa%d9%88%d9%89-%d8%a7%d9%84%d8%a3%d9%88%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/khairia",
          "destination": "/course/%d8%a7%d9%84%d8%b4%d9%81%d8%b7-%d9%88%d8%a7%d9%84%d8%aa%d8%ae%d8%b2%d9%8a%d9%86",
          "permanent": true
      },
      {
          "source": "/courses/dr-hazem-matter",
          "destination": "/course/%d8%a5%d8%af%d8%a7%d8%b1%d8%a9-%d8%a7%d9%84%d8%ac%d9%88%d8%af%d8%a9-%d8%a7%d9%84%d8%b4%d8%a7%d9%85%d9%84%d8%a9-%d9%81%d9%8a-%d8%a7%d9%84%d8%b9%d9%85%d9%84%d9%8a%d8%a9-%d8%a7%d9%84%d8%aa%d8%b1%d8%a8",
          "permanent": true
      },
      {
          "source": "/courses/mahmoud-ziyada",
          "destination": "/course/%d9%85%d8%a6%d8%a9-%d8%a8%d9%8a%d8%aa-%d9%88%d8%a8%d9%8a%d8%aa-%d9%85%d9%86-%d8%a7%d9%84%d8%b4%d8%b9%d8%b1-%d8%a7%d9%84%d8%b9%d8%b1%d8%a8%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/may-abdullah",
          "destination": "/course/%d9%81%d9%86-%d8%a7%d9%84%d8%aa%d8%b7%d8%b1%d9%8a%d8%b2-%d8%a8%d8%a3%d8%b3%d9%84%d9%88%d8%a8-%d8%a7%d9%84%d8%b1%d8%b3%d9%85",
          "permanent": true
      },
      {
          "source": "/courses/%d9%82%d8%b5%d8%a9-%d8%a5%d8%a8%d8%b1%d8%a7%d9%87%d9%8a%d9%85-%d8%b9%d9%84%d9%8a%d9%87-%d8%a7%d9%84%d8%b3%d9%84%d8%a7%d9%85-%d9%84%d9%85%d8%aa%d8%b9%d9%84%d9%85%d9%8a-%d8%a7%d9%84%d9%84",
          "destination": "/course/%d9%82%d8%b5%d8%a9-%d8%a5%d8%a8%d8%b1%d8%a7%d9%87%d9%8a%d9%85-%d8%b9%d9%84%d9%8a%d9%87-%d8%a7%d9%84%d8%b3%d9%84%d8%a7%d9%85-%d9%84%d9%85%d8%aa%d8%b9%d9%84%d9%85%d9%8a-%d8%a7%d9%84%d9%84%d8%ba%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/mohamed-hassan-makky",
          "destination": "/course/%d8%a7%d9%84%d9%85%d8%ad%d8%a7%d8%b3%d8%a8%d8%a9-%d8%a7%d9%84%d9%85%d8%a7%d9%84%d9%8a%d8%a9-%d9%84%d8%b1%d9%88%d8%a7%d8%af-%d8%a7%d9%84%d8%a3%d8%b9%d9%85%d8%a7%d9%84-%d9%88-%d8%a7%d9%84%d9%85%d8%af",
          "permanent": true
      },
      {
          "source": "/courses/word-learn",
          "destination": "/course/%d8%aa%d8%b9%d9%84%d9%85-%d8%a8%d8%b1%d9%86%d8%a7%d9%85%d8%ac-%d8%a7%d9%84%d9%88%d9%88%d8%b1%d8%af",
          "permanent": true
      },
      {
          "source": "/courses/excel-new",
          "destination": "/course/%d8%aa%d8%b9%d9%84%d9%85-%d8%ac%d8%af%d9%8a%d8%af-%d8%b9%d9%86-%d8%a7%d9%84%d8%a5%d9%83%d8%b3%d9%8a%d9%84-%d8%a8%d8%a7%d8%ad%d8%aa%d8%b1%d8%a7%d9%81",
          "permanent": true
      },
      {
          "source": "/courses/mustfa-ayyed",
          "destination": "/course/%d8%a3%d8%b3%d8%a7%d8%b3%d9%8a%d8%a7%d8%aa-%d8%a7%d9%84%d8%a8%d8%b1%d9%85%d8%ac%d8%a9-%d8%a8%d9%84%d8%ba%d8%a9-%d8%a8%d8%a7%d9%8a%d8%ab%d9%88%d9%86-%d9%85%d9%86-%d8%a7%d9%84%d8%b5%d9%81%d8%b1-%d8%a5",
          "permanent": true
      },
      {
          "source": "/courses/dr-ahmed-bouzobar",
          "destination": "/course/%d9%81%d9%86%d9%88%d9%86-%d8%a7%d9%84%d8%aa%d9%81%d8%a7%d9%88%d8%b6-%d9%88%d8%a7%d9%84%d8%a5%d9%82%d9%86%d8%a7%d8%b9",
          "permanent": true
      },
      {
          "source": "/courses/mahmoud-ziyada-prophets-sayings",
          "destination": "/course/%d9%85%d8%ae%d8%aa%d8%a7%d8%b1%d8%a7%d8%aa-%d9%85%d9%86-%d8%a7%d9%84%d8%ad%d8%af%d9%8a%d8%ab-%d8%a7%d9%84%d8%ac%d8%b2%d8%a1-%d8%a7%d9%84%d8%a3%d9%88%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/hani-kattan",
          "destination": "/course/%d8%b5%d9%8a%d8%a7%d9%86%d8%a9-%d9%85%d9%88%d8%a8%d8%a7%d9%8a%d9%84%d8%a7%d8%aa-%d9%88%d8%a3%d8%ac%d9%87%d8%b2%d8%a9-%d8%b0%d9%83%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/hazem-excel",
          "destination": "/course/%d8%a3%d8%b3%d8%a7%d8%b3%d9%8a%d8%a7%d8%aa-%d8%a8%d8%b1%d9%86%d8%a7%d9%85%d8%ac-%d8%a7%d9%84%d8%a5%d9%83%d8%b3%d9%8a%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/ibrahim-youth",
          "destination": "/course/%d9%81%d9%86-%d8%a7%d9%84%d8%aa%d8%b9%d8%a7%d9%85%d9%84-%d9%85%d8%b9-%d8%a7%d9%84%d9%85%d8%b1%d8%a7%d9%87%d9%82%d9%8a%d9%86",
          "permanent": true
      },
      {
          "source": "/courses/dr-mona-taman",
          "destination": "/course/%d8%aa%d8%b5%d9%85%d9%8a%d9%85-%d8%a7%d8%ae%d8%aa%d8%a8%d8%a7%d8%b1%d8%a7%d8%aa-%d8%a7%d9%84%d9%83%d8%aa%d8%b1%d9%88%d9%86%d9%8a%d8%a9-%d8%aa%d9%81%d8%a7%d8%b9%d9%84%d9%8a%d8%a9-%d8%a8%d8%b1%d9%86",
          "permanent": true
      },
      {
          "source": "/courses/personal-financial-planning",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d8%ae%d8%b7%d9%8a%d8%b7-%d8%a7%d9%84%d9%85%d8%a7%d9%84%d9%8a-%d8%a7%d9%84%d8%b4%d8%ae%d8%b5%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/business_administration",
          "destination": "/course/%d9%85%d8%a8%d8%a7%d8%af%d8%a6-%d8%a5%d8%af%d8%a7%d8%b1%d8%a9-%d8%a7%d9%84%d8%a3%d8%b9%d9%85%d8%a7%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/bath-bomb",
          "destination": "/course/%d8%a7%d8%b5%d9%86%d8%b9%d9%8a-%d8%a7%d9%84%d8%a8%d8%a7%d8%ab-%d8%a8%d9%88%d9%85%d8%a8",
          "permanent": true
      },
      {
          "source": "/courses/zaki-alawi",
          "destination": "/course/%d8%af%d9%88%d8%b1%d8%a9-%d8%a7%d9%84%d8%ad%d8%b3%d8%a7%d8%a8-%d8%a7%d9%84%d8%b0%d9%87%d9%86%d9%8a-%d8%a7%d9%84%d8%b3%d8%b1%d9%8a%d8%b9-%d8%a7%d9%84%d9%85%d8%b3%d8%aa%d9%88%d9%89-%d8%a7%d9%84%d8%a3",
          "permanent": true
      },
      {
          "source": "/courses/positive-thinking",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d9%81%d9%83%d9%8a%d8%b1-%d8%a7%d9%84%d8%a5%d9%8a%d8%ac%d8%a7%d8%a8%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/communication-skills",
          "destination": "/course/%d9%83%d9%8a%d9%81%d9%8a%d8%a9-%d8%a7%d9%84%d8%a7%d8%aa%d8%b5%d8%a7%d9%84-%d9%88%d8%a7%d9%84%d8%aa%d8%a3%d8%ab%d9%8a%d8%b1-%d8%b9%d9%84%d9%89-%d8%a7%d9%84%d8%a2%d8%ae%d8%b1%d9%8a%d9%86",
          "permanent": true
      },
      {
          "source": "/courses/prophetic-tradition-part-2",
          "destination": "/course/%d9%85%d8%ae%d8%aa%d8%a7%d8%b1%d8%a7%d8%aa-%d9%85%d9%86-%d8%a7%d9%84%d8%ad%d8%af%d9%8a%d8%ab-%d8%a7%d9%84%d8%ac%d8%b2%d8%a1-%d8%a7%d9%84%d8%ab%d8%a7%d9%86%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/ai-photo-enhancement",
          "destination": "/course/%d9%84%d9%88%d9%86-%d9%88-%d8%ad%d8%b3%d9%86-%d8%ac%d9%88%d8%af%d8%a9-%d8%a3%d9%8a-%d8%b5%d9%88%d8%b1%d8%a9-%d8%a7%d9%88-%d9%81%d9%8a%d8%af%d9%8a%d9%88-%d8%a8%d8%a7%d8%b3%d8%aa%d8%ae%d8%af%d8%a7%d9%85",
          "permanent": true
      },
      {
          "source": "/courses/tot",
          "destination": "/course/%d8%aa%d8%af%d8%b1%d9%8a%d8%a8-%d8%a7%d9%84%d9%85%d8%af%d8%b1%d8%a8%d9%8a%d9%86-tot",
          "permanent": true
      },
      {
          "source": "/courses/draw-your-life",
          "destination": "/course/%d8%a7%d8%b1%d8%b3%d9%85%d9%89-%d8%ad%d9%8a%d8%a7%d8%aa%d9%83-%d8%b9%d9%86-%d8%aa%d8%ad%d8%af%d9%8a%d8%af-%d9%88%d8%aa%d8%ad%d9%82%d9%8a%d9%82-%d8%a7%d9%84%d8%a3%d9%87%d8%af%d8%a7%d9%81-%d9%84%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/break-your-chains",
          "destination": "/course/%d8%a7%d9%83%d8%b3%d8%b1-%d9%82%d9%8a%d8%af%d9%83-%d8%a7%d9%84%d9%86%d8%a7%d9%82%d8%af-%d8%a7%d9%84%d8%b3%d9%84%d8%a8%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/emotional-freedom-technique",
          "destination": "/course/%d8%a7%d9%84%d8%ad%d8%b1%d9%8a%d8%a9-%d8%a7%d9%84%d9%86%d9%81%d8%b3%d9%8a%d8%a9-%d8%a7%d9%84%d9%85%d8%b3%d8%aa%d9%88%d9%89-%d8%a7%d9%84%d8%a3%d9%88%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/kali-linux-2020-4",
          "destination": "/course/%d8%a3%d9%82%d9%88%d9%89-%d9%88%d8%a3%d8%b3%d8%b1%d8%b9-%d9%85%d8%b1%d8%ac%d8%b9-%d9%84%d8%aa%d8%ad%d8%b3%d9%8a%d9%86-%d8%a7%d9%84%d9%83%d8%a7%d9%84%d9%8a-%d9%84%d9%8a%d9%86%d9%83%d8%b3-kali-linux-202",
          "permanent": true
      },
      {
          "source": "/courses/word-2019",
          "destination": "/course/%d8%a3%d8%b3%d8%b1%d8%b9-%d8%af%d9%88%d8%b1%d8%a9-%d9%84%d8%aa%d8%b9%d9%84%d9%85-%d9%85%d8%a7%d9%8a%d9%83%d8%b1%d9%88%d8%b3%d9%88%d9%81%d8%aa-%d9%88%d9%88%d8%b1%d8%af-%d9%85%d9%86-%d8%a7%d9%84%d8%a8",
          "permanent": true
      },
      {
          "source": "/courses/itil-4-foundation",
          "destination": "/course/%d8%a3%d9%82%d9%88%d9%89-%d9%88%d8%a3%d8%b3%d8%b1%d8%b9-%d9%85%d8%b1%d8%ac%d8%b9-%d9%84%d9%84%d8%ad%d8%b5%d9%88%d9%84-%d8%b9%d9%84%d9%8a-%d8%b4%d9%87%d8%a7%d8%af%d8%a9-itil-4-foundation",
          "permanent": true
      },
      {
          "source": "/courses/the-foundations-of-the-sons-industry",
          "destination": "/course/%d8%af%d9%88%d8%b1%d8%a9-%d8%a3%d8%b3%d8%b3-%d8%b5%d9%86%d8%a7%d8%b9%d8%a9-%d8%a7%d9%84%d8%a3%d8%a8%d9%86%d8%a7%d8%a1",
          "permanent": true
      },
      {
          "source": "/courses/pottery-wheel",
          "destination": "/course/%d8%af%d9%88%d9%84%d8%a7%d8%a8-%d8%a7%d9%84%d8%ae%d8%b2%d8%a7%d9%81",
          "permanent": true
      },
      {
          "source": "/courses/preparing-a-fitness-trainer-in-the-gym-and-online",
          "destination": "/course/%d8%af%d9%88%d8%b1%d8%a9-%d8%a5%d8%b9%d8%af%d8%a7%d8%af-%d9%85%d8%af%d8%b1%d8%a8-%d9%81%d8%aa%d9%86%d8%b3-%d9%81%d9%8a-%d8%a7%d9%84%d8%ac%d9%8a%d9%85-%d9%88-%d8%a3%d9%88%d9%86%d9%84%d8%a7%d9%8a%d9%86",
          "permanent": true
      },
      {
          "source": "/courses/pictures-and-videos-colorization-by-ai",
          "destination": "/course/pictures-and-videos-colorization-by-artificial-intelligence",
          "permanent": true
      },
      {
          "source": "/courses/the-secrets-of-self-care-in-a-changing-world",
          "destination": "/course/%d8%ae%d8%a8%d8%a7%d9%8a%d8%a7-%d8%a7%d9%84%d8%a7%d9%87%d8%aa%d9%85%d8%a7%d9%85-%d8%a8%d8%a7%d9%84%d8%b0%d8%a7%d8%aa-%d9%81%d9%8a-%d8%b9%d8%a7%d9%84%d9%85-%d9%85%d8%aa%d8%ba%d9%8a%d8%b1",
          "permanent": true
      },
      {
          "source": "/courses/editing-video-graphic-news-for-social-networks",
          "destination": "/course/%d9%85%d9%88%d9%86%d8%aa%d8%a7%d8%ac-%d8%a7%d9%84%d9%81%d9%8a%d8%af%d9%8a%d9%88%d8%ac%d8%b1%d8%a7%d9%81%d9%8a%d9%83-%d8%a7%d9%84%d8%a5%d8%ae%d8%a8%d8%a7%d8%b1%d9%8a-%d9%84%d8%b4%d8%a8%d9%83%d8%a7",
          "permanent": true
      },
      {
          "source": "/courses/child-behavioral-problems",
          "destination": "/course/%d9%85%d8%b4%d9%83%d9%84%d8%a7%d8%aa-%d8%a7%d9%84%d8%a3%d8%b7%d9%81%d8%a7%d9%84-%d8%a7%d9%84%d8%b3%d9%84%d9%88%d9%83%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/business-etiquette",
          "destination": "/course/%d8%a5%d8%aa%d9%8a%d9%83%d9%8a%d8%aa-%d8%a7%d9%84%d8%b9%d9%85%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/applied-skills-in-e-commerce",
          "destination": "/course/%d9%85%d9%87%d8%a7%d8%b1%d8%a7%d8%aa-%d8%aa%d8%b7%d8%a8%d9%8a%d9%82%d9%8a%d8%a9-%d9%81%d9%8a-%d8%a7%d9%84%d8%aa%d8%ac%d8%a7%d8%b1%d8%a9-%d8%a7%d9%84%d8%a5%d9%84%d9%83%d8%aa%d8%b1%d9%88%d9%86%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/autocad",
          "destination": "/course/%d8%af%d9%88%d8%b1%d8%a9-%d8%aa%d8%a3%d8%b3%d9%8a%d8%b3%d8%a9-%d9%84%d8%a8%d8%b1%d9%86%d8%a7%d9%85%d8%ac-%d8%a7%d9%84%d8%a7%d8%aa%d9%88%d9%83%d8%a7%d8%af",
          "permanent": true
      },
      {
          "source": "/courses/flower-arranging-basics",
          "destination": "/course/%d8%a3%d8%b3%d8%a7%d8%b3%d9%8a%d8%a7%d8%aa-%d8%aa%d9%86%d8%b3%d9%8a%d9%82-%d8%a7%d9%84%d8%b2%d9%87%d9%88%d8%b1",
          "permanent": true
      },
      {
          "source": "/courses/learn-the-basics-of-the-excel-program",
          "destination": "/course/%d8%aa%d8%b9%d9%84%d9%85-%d8%a7%d8%b3%d8%a7%d8%b3%d9%8a%d8%a7%d8%aa-%d8%a8%d8%b1%d9%86%d8%a7%d9%85%d8%ac-%d8%a7%d9%84%d8%a7%d9%83%d8%b3%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/living-with-silicosis",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d8%b9%d8%a7%d9%8a%d8%b4-%d9%85%d8%b9-%d8%a7%d9%84%d8%b3%d9%84%d9%8a%d8%a7%d9%83",
          "permanent": true
      },
      {
          "source": "/courses/success-engineering-level-i-nlp",
          "destination": "/course/%d9%87%d9%86%d8%af%d8%b3%d8%a9-%d8%a7%d9%84%d9%86%d8%ac%d8%a7%d8%ad-%d8%a7%d9%84%d9%85%d8%b3%d8%aa%d9%88%d9%89-%d8%a7%d9%84%d8%a3%d9%88%d9%84-nlp",
          "permanent": true
      },
      {
          "source": "/courses/linkdin",
          "destination": "/course/%d9%84%d9%8a%d9%86%d9%83%d8%af-%d8%a5%d9%86-%d9%85%d9%86-%d8%a7%d9%84%d8%b5%d9%81%d8%b1-%d8%ad%d8%aa%d9%89-%d8%a7%d9%84%d9%86%d8%ac%d9%88%d9%85%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/english-tenses",
          "destination": "/course/%d9%82%d9%88%d8%a7%d8%b9%d8%af-%d8%a7%d9%84%d8%a3%d8%b2%d9%85%d9%86%d8%a9-%d8%a8%d8%a7%d9%84%d9%84%d8%ba%d8%a9-%d8%a7%d9%84%d8%a7%d9%86%d8%ac%d9%84%d9%8a%d8%b2%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/academic-excellence-industry",
          "destination": "/course/%d8%b5%d9%86%d8%a7%d8%b9%d8%a9-%d8%a7%d9%84%d8%aa%d9%81%d9%88%d9%82-%d8%a7%d9%84%d8%af%d8%b1%d8%a7%d8%b3%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/how-to-start-your-digital-project-step-by-step",
          "destination": "/course/%d9%83%d9%8a%d9%81-%d8%aa%d8%a8%d8%af%d8%a3-%d9%85%d8%b4%d8%b1%d9%88%d8%b9%d9%83-%d8%a7%d9%84%d8%b1%d9%82%d9%85%d9%8a-%d8%ae%d8%b7%d9%88%d8%a9-%d8%a8%d8%ae%d8%b7%d9%88%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/%d8%aa%d9%8a%d8%b3%d9%8a%d8%b1-%d9%82%d9%88%d8%a7%d8%b9%d8%af-%d8%a7%d9%84%d9%84%d8%ba%d8%a9-%d8%a7%d9%84%d8%b9%d8%b1%d8%a8%d9%8a%d8%a9-%d8%a7%d9%84%d8%ac%d8%b2%d8%a1-%d8%a7%d9%84%d8%a3",
          "destination": "/course/%d8%aa%d9%8a%d8%b3%d9%8a%d8%b1-%d9%82%d9%88%d8%a7%d8%b9%d8%af-%d8%a7%d9%84%d9%84%d8%ba%d8%a9-%d8%a7%d9%84%d8%b9%d8%b1%d8%a8%d9%8a%d8%a9-%d8%a7%d9%84%d8%ac%d8%b2%d8%a1-%d8%a7%d9%84%d8%a3%d9%88%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/how-to-plan-your-future",
          "destination": "/course/%d9%83%d9%8a%d9%81-%d8%aa%d8%ae%d8%b7%d8%b7-%d9%84%d9%85%d8%b3%d8%aa%d9%82%d8%a8%d9%84%d9%83",
          "permanent": true
      },
      {
          "source": "/courses/instrument-assisted-soft-tissue-mobilization",
          "destination": "/course/%d8%a7%d9%84%d8%b9%d9%84%d8%a7%d8%ac-%d8%a8%d8%a7%d9%84%d8%a3%d8%af%d9%88%d8%a7%d8%aa-%d8%a7%d9%84%d9%85%d8%b3%d8%a7%d8%b9%d8%af%d8%a9-%d9%81%d9%8a-%d8%aa%d8%ad%d8%b1%d9%8a%d9%83-%d8%a7%d9%84%d8%a3",
          "permanent": true
      },
      {
          "source": "/courses/arabic-tayseer-simplifying-arabic-for-beginners-part-one",
          "destination": "/course/arabic-tayseer-simplifying-arabic-for-beginnerspart-one",
          "permanent": true
      },
      {
          "source": "/courses/yes-to-personal-boundaries",
          "destination": "/course/%d9%86%d8%b9%d9%85-%d9%84%d9%84%d8%ad%d8%af%d9%88%d8%af-%d9%88-%d9%84%d8%a7-%d9%84%d9%84%d9%87%d8%af%d9%85",
          "permanent": true
      },
      {
          "source": "/courses/is-my-child-stubborn-managing-childrens-stubbornness",
          "destination": "/course/%d9%87%d9%84-%d8%b7%d9%81%d9%84%d9%8a-%d8%b9%d9%86%d9%8a%d8%af-%d8%a5%d8%af%d8%a7%d8%b1%d8%a9-%d8%b9%d9%86%d8%a7%d8%af-%d8%a7%d9%84%d8%a3%d8%b7%d9%81%d8%a7%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/finical-analyses",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d8%ad%d9%84%d9%8a%d9%84-%d8%a7%d9%84%d9%85%d8%a7%d9%84%d9%89",
          "permanent": true
      },
      {
          "source": "/courses/learn-the-arabic-alphabet-in-the-easiest-way",
          "destination": "/course/learn-the-arabic-alphabet-in-the-easiest-way",
          "permanent": true
      },
      {
          "source": "/courses/learn-adobe-premiere",
          "destination": "/course/%d8%af%d9%88%d8%b1%d8%a9-%d8%a7%d8%ad%d8%aa%d8%b1%d8%a7%d9%81-%d9%81%d9%86-%d8%a7%d9%84%d9%85%d9%88%d9%86%d8%aa%d8%a7%d8%ac",
          "permanent": true
      },
      {
          "source": "/courses/secrets-of-social-networking-programs",
          "destination": "/course/%d8%a3%d8%b3%d8%b1%d8%a7%d8%b1-%d8%a8%d8%b1%d8%a7%d9%85%d8%ac-%d8%a7%d9%84%d8%aa%d9%88%d8%a7%d8%b5%d9%84-%d8%a7%d9%84%d8%a3%d8%ac%d8%aa%d9%85%d8%a7%d8%b9%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/emotion-management-license",
          "destination": "/course/%d8%b1%d8%ae%d8%b5%d8%a9-%d8%a5%d8%af%d8%a7%d8%b1%d8%a9-%d8%a7%d9%84%d9%85%d8%b4%d8%a7%d8%b9%d8%b1",
          "permanent": true
      },
      {
          "source": "/courses/baby-sleeping",
          "destination": "/course/%d9%86%d9%88%d9%85-%d8%a7%d9%84%d8%b1%d8%b6%d9%8a%d8%b9",
          "permanent": true
      },
      {
          "source": "/courses/cpr",
          "destination": "/course/%d8%a7%d9%84%d8%a5%d9%86%d8%b9%d8%a7%d8%b4-%d8%a7%d9%84%d9%82%d9%84%d8%a8%d9%8a-%d8%a7%d9%84%d8%b1%d8%a6%d9%88%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/baby-care",
          "destination": "/course/%d8%a7%d9%84%d8%b9%d9%86%d8%a7%d9%8a%d8%a9-%d8%a8%d8%a7%d9%84%d9%85%d9%88%d9%84%d9%88%d8%af",
          "permanent": true
      },
      {
          "source": "/courses/sme-growth-strategy-from-a-model360-perspective",
          "destination": "/course/%d8%a7%d8%b3%d8%aa%d8%b1%d8%a7%d8%aa%d9%8a%d8%ac%d9%8a%d8%a9-%d8%a7%d9%84%d9%86%d9%85%d9%88-%d9%81%d9%8a-%d8%a7%d9%84%d9%85%d8%b4%d8%b1%d9%88%d8%b9%d8%a7%d8%aa-%d8%a7%d9%84%d8%b5%d8%ba%d9%8a%d8%b1",
          "permanent": true
      },
      {
          "source": "/courses/breastfeeding",
          "destination": "/course/%d8%a7%d9%84%d8%b1%d8%b6%d8%a7%d8%b9%d8%a9-%d8%a7%d9%84%d8%b7%d8%a8%d9%8a%d8%b9%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/how-do-you-manage-your-priorities",
          "destination": "/course/%d9%83%d9%8a%d9%81-%d8%aa%d8%af%d9%8a%d8%b1-%d8%a3%d9%88%d9%84%d9%88%d9%8a%d8%a7%d8%aa%d9%83",
          "permanent": true
      },
      {
          "source": "/courses/get-value-to-your-life",
          "destination": "/course/%d8%a7%d8%ac%d8%b9%d9%84-%d9%84%d8%ad%d9%8a%d8%a7%d8%aa%d9%83-%d9%82%d9%8a%d9%85%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/%d8%a3%d9%86%d9%85%d8%a7%d8%b7-%d8%a7%d9%84%d8%b4%d8%ae%d8%b5%d9%8a%d8%a7%d8%aa",
          "destination": "/course/%d8%a3%d9%86%d9%85%d8%a7%d8%b7-%d8%a7%d9%84%d8%b4%d8%ae%d8%b5%d9%8a%d8%a7%d8%aa",
          "permanent": true
      },
      {
          "source": "/courses/user-experience-design-and-application-interfaces-ui-ux-design",
          "destination": "/course/%d8%aa%d8%b5%d9%85%d9%8a%d9%85-%d8%aa%d8%ac%d8%b1%d8%a8%d8%a9-%d8%a7%d9%84%d9%85%d8%b3%d8%aa%d8%ae%d8%af%d9%85-%d9%88-%d9%88%d8%a7%d8%ac%d9%87%d8%a7%d8%aa-%d8%a7%d9%84%d8%aa%d8%b7%d8%a8%d9%8a%d9%82",
          "permanent": true
      },
      {
          "source": "/courses/integrated-drawing-for-beginners-from-zero-to-professional",
          "destination": "/course/%d8%a7%d9%84%d8%b1%d8%b3%d9%85-%d8%a7%d9%84%d9%85%d8%aa%d9%83%d8%a7%d9%85%d9%84-%d9%84%d9%84%d9%85%d8%a8%d8%aa%d8%af%d8%a6%d9%8a%d9%86-%d9%85%d9%86-%d8%a7%d9%84%d8%b5%d9%81%d8%b1-%d8%ad%d8%aa%d9%89",
          "permanent": true
      },
      {
          "source": "/courses/%d8%a7%d9%84%d8%aa%d8%b3%d8%b9%d9%8a%d8%b1-%d8%a7%d9%84%d8%b3%d9%8a%d9%83%d9%88%d9%84%d9%88%d8%ac%d9%8a",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d8%b3%d8%b9%d9%8a%d8%b1-%d8%a7%d9%84%d8%b3%d9%8a%d9%83%d9%88%d9%84%d9%88%d8%ac%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/%d8%b3%d9%8a%d9%83%d9%88%d9%84%d9%88%d8%ac%d9%8a%d8%a9-%d8%a7%d9%84%d8%a5%d8%b9%d9%84%d8%a7%d9%86",
          "destination": "/course/%d8%b3%d9%8a%d9%83%d9%88%d9%84%d9%88%d8%ac%d9%8a%d8%a9-%d8%a7%d9%84%d8%a5%d8%b9%d9%84%d8%a7%d9%86",
          "permanent": true
      },
      {
          "source": "/courses/%d8%a7%d9%84%d8%a7%d8%b3%d8%aa%d9%87%d8%af%d8%a7%d9%81-%d8%a7%d9%84%d8%b3%d9%8a%d9%83%d9%88%d9%84%d9%88%d8%ac%d9%8a",
          "destination": "/course/%d8%a7%d9%84%d8%a7%d8%b3%d8%aa%d9%87%d8%af%d8%a7%d9%81-%d8%a7%d9%84%d8%b3%d9%8a%d9%83%d9%88%d9%84%d9%88%d8%ac%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/learn-the-art-of-successful-marital-quarrel",
          "destination": "/course/%d8%aa%d8%b9%d9%84%d9%85-%d9%81%d9%86-%d8%a7%d9%84%d9%85%d8%b4%d8%a7%d8%ac%d8%b1%d8%a9-%d8%a7%d9%84%d8%b2%d9%88%d8%ac%d9%8a%d8%a9-%d8%a7%d9%84%d9%86%d8%a7%d8%ac%d8%ad%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/charts-by-illustrator",
          "destination": "/course/%d8%a7%d9%84%d8%b1%d8%b3%d9%88%d9%85%d8%a7%d8%aa-%d8%a7%d9%84%d8%a8%d9%8a%d8%a7%d9%86%d9%8a%d8%a9-%d9%81%d9%8a-%d8%a7%d9%84%d8%a7%d9%84%d9%8a%d8%b3%d8%aa%d8%b1%d9%8a%d8%aa%d9%88%d8%b1",
          "permanent": true
      },
      {
          "source": "/courses/manage-effort",
          "destination": "/course/%d8%a5%d8%af%d8%a7%d8%b1%d8%a9-%d8%a7%d9%84%d8%ac%d9%87%d8%af",
          "permanent": true
      },
      {
          "source": "/courses/relations-secrets",
          "destination": "/course/%d8%a8%d9%88%d8%b5%d9%84%d8%a9-%d8%a7%d9%84%d8%b4%d8%ae%d8%b5%d9%8a%d8%a7%d8%aa-%d8%a3%d8%b3%d8%b1%d8%a7%d8%b1-%d8%a7%d9%84%d8%b9%d9%84%d8%a7%d9%82%d8%a7%d8%aa",
          "permanent": true
      },
      {
          "source": "/courses/microsoft-azure-security",
          "destination": "/course/microsoft-azure-security",
          "permanent": true
      },
      {
          "source": "/courses/facts-about-disease-prevention",
          "destination": "/course/%d8%ad%d9%82%d8%a7%d8%a6%d9%82-%d8%ac%d9%88%d9%87%d8%b1%d9%8a%d8%a9-%d8%b9%d9%86-%d8%a7%d9%84%d9%88%d9%82%d8%a7%d9%8a%d8%a9-%d9%85%d9%86-%d8%a7%d9%84%d8%a3%d9%85%d8%b1%d8%a7%d8%b6-%d9%88%d8%a7%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/professionalism-in-the-manufacture-of-levantine-eid-sweets",
          "destination": "/course/%d8%a7%d8%ad%d8%aa%d8%b1%d8%a7%d9%81-%d8%b5%d9%86%d8%a7%d8%b9%d8%a9-%d8%ad%d9%84%d9%88%d9%8a%d8%a7%d8%aa-%d8%a7%d9%84%d8%b9%d9%8a%d8%af-%d8%a7%d9%84%d8%b4%d8%a7%d9%85%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/sex-education-for-children-and-adolescents",
          "destination": "/course/%d8%af%d9%84%d9%8a%d9%84%d9%83-%d8%a7%d9%84%d8%b4%d8%a7%d9%85%d9%84-%d9%84%d8%aa%d9%82%d8%af%d9%8a%d9%85-%d8%a7%d9%84%d8%aa%d8%b1%d8%a8%d9%8a%d8%a9-%d8%a7%d9%84%d8%ac%d9%86%d8%b3%d9%8a%d8%a9-%d8%a7",
          "permanent": true
      },
      {
          "source": "/courses/start-programming",
          "destination": "/course/%d9%85%d9%82%d8%af%d9%85%d8%a9-%d9%81%d9%8a-%d8%a7%d8%ae%d8%aa%d8%a8%d8%a7%d8%b1-%d8%a7%d9%84%d8%a8%d8%b1%d9%85%d8%ac%d9%8a%d8%a7%d8%aa",
          "permanent": true
      },
      {
          "source": "/courses/understand-your-mind",
          "destination": "/course/%d8%a7%d9%81%d9%87%d9%85-%d8%b9%d9%82%d9%84%d9%83-%d9%88%d8%a8%d8%b1%d9%85%d8%ac-%d8%b9%d9%82%d9%84%d9%83-%d8%a7%d9%84%d8%a8%d8%a7%d8%b7%d9%86-%d9%88%d8%aa%d8%ac%d8%a7%d9%88%d8%b2-%d9%85%d8%ae%d8%a7",
          "permanent": true
      },
      {
          "source": "/courses/network-diagram-and-cpm-%d9%85%d8%ae%d8%b7%d8%b7-%d8%a7%d9%84%d8%b4%d8%a8%d9%83%d8%a9-%d9%88-%d8%b7%d8%b1%d9%8a%d9%82%d8%a9-%d8%a7%d9%84%d9%85%d8%b3%d8%a7%d8%b1-%d8%a7%d9%84%d8%ad%d8%b1%d8%ac",
          "destination": "/course/network-diagram-and-cpm-%d9%85%d8%ae%d8%b7%d8%b7-%d8%a7%d9%84%d8%b4%d8%a8%d9%83%d8%a9-%d9%88-%d8%b7%d8%b1%d9%8a%d9%82%d8%a9-%d8%a7%d9%84%d9%85%d8%b3%d8%a7%d8%b1-%d8%a7%d9%84%d8%ad%d8%b1%d8%ac",
          "permanent": true
      },
      {
          "source": "/courses/the-secrets-behind-human-motivation",
          "destination": "/course/%d8%a7%d9%84%d8%a3%d8%b3%d8%b1%d8%a7%d8%b1-%d9%88%d8%b1%d8%a7%d8%a1-%d8%a7%d9%84%d8%ad%d8%a7%d9%81%d8%b2-%d8%a7%d9%84%d8%a8%d8%b4%d8%b1%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/%d8%a7%d9%84%d8%aa%d8%b9%d8%a7%d9%85%d9%84-%d9%85%d8%b9-%d8%a7%d9%84%d8%b4%d8%ae%d8%b5%d9%8a%d8%a7%d8%aa-%d8%a7%d9%84%d8%b5%d8%b9%d8%a8%d8%a9",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d8%b9%d8%a7%d9%85%d9%84-%d9%85%d8%b9-%d8%a7%d9%84%d8%b4%d8%ae%d8%b5%d9%8a%d8%a7%d8%aa-%d8%a7%d9%84%d8%b5%d8%b9%d8%a8%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/how-to-protect-yourself-from-narcissists",
          "destination": "/course/%d8%b9%d9%84%d9%85-%d8%a7%d9%84%d9%86%d9%81%d8%b3-%d8%a7%d9%84%d9%85%d8%b8%d9%84%d9%85-%d9%88%d9%83%d9%8a%d9%81-%d8%aa%d9%82%d9%8a-%d9%86%d9%81%d8%b3%d9%83-%d9%85%d9%86-%d8%a7%d9%84%d9%86%d8%b1%d8%ac",
          "permanent": true
      },
      {
          "source": "/courses/make-the-right-decision",
          "destination": "/course/%d9%85%d9%87%d8%a7%d8%b1%d8%a9-%d8%a7%d8%aa%d8%ae%d8%a7%d8%b0-%d8%a7%d9%84%d9%82%d8%b1%d8%a7%d8%b1-%d8%a7%d9%84%d8%b5%d8%ad%d9%8a%d8%ad",
          "permanent": true
      },
      {
          "source": "/courses/microsoft-project",
          "destination": "/course/%d8%ac%d8%af%d9%88%d9%84%d8%a9-%d8%a7%d9%84%d9%85%d8%b4%d8%a7%d8%b1%d9%8a%d8%b9-%d8%a8%d8%a7%d8%b3%d8%aa%d8%ae%d8%af%d8%a7%d9%85-%d9%85%d8%a7%d9%8a%d9%83%d8%b1%d9%88%d8%b3%d9%88%d9%81%d8%aa-%d8%a8",
          "permanent": true
      },
      {
          "source": "/courses/how-do-i-prepare-and-write-books",
          "destination": "/course/%d9%83%d9%8a%d9%81-%d8%a3%d9%82%d9%88%d9%85-%d8%a8%d8%a5%d8%b9%d8%af%d8%a7%d8%af-%d9%88%d8%aa%d8%a3%d9%84%d9%8a%d9%81-%d8%a7%d9%84%d9%83%d8%aa%d8%a8",
          "permanent": true
      },
      {
          "source": "/courses/learning-after-affect",
          "destination": "/course/%d8%aa%d8%b9%d9%84%d9%85-%d8%a8%d8%b1%d9%86%d8%a7%d9%85%d8%ac-%d8%a7%d9%81%d8%aa%d8%b1-%d8%a7%d9%81%d9%83%d8%aa-%d9%84%d9%84%d9%85%d8%a8%d8%aa%d8%af%d8%a6%d9%8a%d9%86-%d8%a7%d9%84%d9%85%d8%b3%d8%aa",
          "permanent": true
      },
      {
          "source": "/courses/the-easiest-and-fastest-way-to-learn-excel",
          "destination": "/course/%d8%a7%d8%b3%d9%87%d9%84-%d9%88%d8%a7%d8%b3%d8%b1%d8%b9-%d8%b7%d8%b1%d9%8a%d9%82%d8%a9-%d9%84%d8%aa%d8%b9%d9%84%d9%85-%d8%a7%d9%84%d8%a7%d9%83%d8%b3%d9%84-%d8%a8%d8%b3%d8%a7%d8%b9%d8%aa%d9%8a%d9%86",
          "permanent": true
      },
      {
          "source": "/courses/teenage-problems",
          "destination": "/course/%d9%85%d8%b4%d9%83%d9%84%d8%a7%d8%aa-%d8%a7%d9%84%d9%85%d8%b1%d8%a7%d9%87%d9%82%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/power-of-love",
          "destination": "/course/%d8%b7%d8%a7%d9%82%d8%a9-%d8%a7%d9%84%d8%ad%d8%a8",
          "permanent": true
      },
      {
          "source": "/courses/sports-nutrition",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d8%ba%d8%b0%d9%8a%d8%a9-%d8%a7%d9%84%d8%b1%d9%8a%d8%a7%d8%b6%d9%8a%d8%a9-%d8%a7%d9%84%d9%85%d8%b3%d8%aa%d9%88%d9%89-%d8%a7%d9%84%d8%a3%d9%88%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/rubiks-cube-solving-algorithm",
          "destination": "/course/%d8%af%d9%88%d8%b1%d8%a9-%d8%ad%d9%84-%d9%85%d9%83%d8%b9%d8%a8-%d8%b1%d9%88%d8%a8%d9%8a%d9%83-%d8%a8%d8%b7%d8%b1%d9%8a%d9%82%d8%a9-%d8%a7%d9%84%d8%ae%d9%88%d8%a7%d8%b1%d8%b2%d9%85%d9%8a%d8%a7%d8%aa",
          "permanent": true
      },
      {
          "source": "/courses/markting-for-a-beginners",
          "destination": "/course/%d8%a7%d9%84%d9%85%d8%aa%d9%83%d8%a7%d9%85%d9%84-%d9%81%d9%8a-%d8%a7%d9%84%d9%83%d8%aa%d8%a7%d8%a8%d8%a9-%d8%a7%d9%84%d8%aa%d8%b3%d9%88%d9%8a%d9%82%d9%8a%d8%a9-%d9%84%d9%84%d9%85%d8%a8%d8%aa%d8%af",
          "permanent": true
      },
      {
          "source": "/courses/prepare-presentations-using-powerpoint",
          "destination": "/course/ms-power-point-complete-course-%d9%83%d9%88%d8%b1%d8%b3-%d8%a5%d8%b9%d8%af%d8%a7%d8%af-%d8%a7%d9%84%d8%b9%d8%b1%d9%88%d8%b6-%d8%a7%d9%84%d8%aa%d9%82%d8%af%d9%8a%d9%85%d9%8a%d8%a9-%d8%a8%d8%a7%d8%b3",
          "permanent": true
      },
      {
          "source": "/courses/excel2019",
          "destination": "/course/%d8%a3%d8%b3%d8%b1%d8%b9-%d8%af%d9%88%d8%b1%d8%a9-%d9%84%d8%aa%d8%b9%d9%84%d9%85-%d9%85%d8%a7%d9%8a%d9%83%d8%b1%d9%88%d8%b3%d9%88%d9%81%d8%aa-%d8%a7%d9%83%d8%b3%d9%8a%d9%84-%d9%85%d9%86-%d8%a7%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/talk-to-me",
          "destination": "/course/%d8%ad%d8%a7%d9%88%d8%b1%d9%86%d9%8a-%d8%a3%d9%88-%d8%a3%d8%b5%d9%85%d8%aa",
          "permanent": true
      },
      {
          "source": "/courses/online-shopping",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d8%b3%d9%88%d9%82-%d8%a7%d9%84%d8%a5%d9%84%d9%83%d8%aa%d8%b1%d9%88%d9%86%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/word-basics-from-start-to-professional",
          "destination": "/course/ms-word-complete-course-%d9%83%d9%88%d8%b1%d8%b3-%d8%a8%d8%b1%d9%86%d8%a7%d9%85%d8%ac-%d8%a7%d9%84%d9%88%d8%b1%d8%af-%d8%a7%d9%84%d8%a7%d8%ad%d8%aa%d8%b1%d8%a7%d9%81%d9%8a-%d8%a8%d8%a7%d9%84%d9%83",
          "permanent": true
      },
      {
          "source": "/courses/comprehensive-excel-course",
          "destination": "/course/ms-excel-complete-course-%d9%83%d9%88%d8%b1%d8%b3-%d8%a7%d9%84%d8%a5%d9%83%d8%b3%d9%84-%d8%a7%d9%84%d8%b4%d8%a7%d9%85%d9%84-%d8%a7%d9%84%d9%85%d8%aa%d9%82%d8%af%d9%85",
          "permanent": true
      },
      {
          "source": "/courses/feng-shui",
          "destination": "/course/feng-shui-%d8%b7%d8%a7%d9%82%d8%a9-%d8%a7%d9%84%d9%85%d9%83%d8%a7%d9%86",
          "permanent": true
      },
      {
          "source": "/courses/dealing-with-the-excel-program",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d8%b9%d8%a7%d9%85%d9%84-%d9%85%d8%b9-%d8%a8%d8%b1%d9%86%d8%a7%d9%85%d8%ac-%d8%a7%d9%84%d8%a5%d9%83%d8%b3%d9%8a%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/digital-logic-design",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d8%b5%d9%85%d9%8a%d9%85-%d8%a7%d9%84%d8%b1%d9%82%d9%85%d9%8a-%d9%84%d9%84%d8%a8%d9%88%d8%a7%d8%a8%d8%a7%d8%aa-%d8%a7%d9%84%d9%85%d9%86%d8%b7%d9%82%d9%8a%d9%87",
          "permanent": true
      },
      {
          "source": "/courses/learn-turkish",
          "destination": "/course/%d8%aa%d8%b9%d9%84%d9%85-%d8%a7%d9%84%d9%84%d8%ba%d8%a9-%d8%a7%d9%84%d8%aa%d8%b1%d9%83%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/develop-confidence-and-self-esteem",
          "destination": "/course/%d8%aa%d9%86%d9%85%d9%8a%d8%a9-%d8%a7%d9%84%d8%ab%d9%82%d8%a9-%d9%88%d8%aa%d9%82%d8%af%d9%8a%d8%b1-%d8%a7%d9%84%d8%b0%d8%a7%d8%aa",
          "permanent": true
      },
      {
          "source": "/courses/how-do-i-win-their-hearts",
          "destination": "/course/%d9%83%d9%8a%d9%81-%d8%a7%d9%83%d8%b3%d8%a8-%d9%82%d9%84%d9%88%d8%a8%d9%87%d9%85",
          "permanent": true
      },
      {
          "source": "/courses/how-do-you-enjoy-reading",
          "destination": "/course/%d9%83%d9%8a%d9%81-%d8%a7%d8%b3%d8%aa%d9%85%d8%aa%d8%b9-%d8%a8%d8%a7%d9%84%d9%82%d8%b1%d8%a7%d8%a1%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/face-your-problems-and-overcome-them",
          "destination": "/course/%d9%88%d8%a7%d8%ac%d9%87-%d9%85%d8%b4%d9%83%d9%84%d8%a7%d8%aa%d9%83-%d9%88%d8%aa%d8%ba%d9%84%d8%a8-%d8%b9%d9%84%d9%8a%d9%87%d8%a7",
          "permanent": true
      },
      {
          "source": "/courses/mobile-application-development-using-flutter",
          "destination": "/course/%d8%aa%d8%b7%d9%88%d9%8a%d8%b1-%d8%aa%d8%b7%d8%a8%d9%8a%d9%82%d8%a7%d8%aa-%d8%a7%d9%84%d8%ac%d9%88%d8%a7%d9%84-%d8%a8%d8%aa%d9%82%d9%86%d9%8a%d8%a7%d8%aa-flutter",
          "permanent": true
      },
      {
          "source": "/courses/",
          "destination": "/course/quantities-estimation-%d8%aa%d9%82%d8%af%d9%8a%d8%b1-%d8%a7%d9%84%d9%83%d9%85%d9%8a%d8%a7%d8%aa",
          "permanent": true
      },
      {
          "source": "/courses/primavera-level-one",
          "destination": "/course/primavera-level-one-%d8%a8%d8%b1%d9%8a%d9%85%d8%a7%d9%81%d9%8a%d8%b1%d8%a7-%d8%a7%d9%84%d9%85%d8%b3%d8%aa%d9%88%d9%89-%d8%a7%d9%84%d8%a3%d9%88%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/primavera-level-two",
          "destination": "/course/primavera-level-two-%d8%a8%d8%b1%d9%8a%d9%85%d8%a7%d9%81%d9%8a%d8%b1%d8%a7-%d8%a7%d9%84%d9%85%d8%b3%d8%aa%d9%88%d9%89-%d8%a7%d9%84%d8%ab%d8%a7%d9%86%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/microsoft-project-level-one",
          "destination": "/course/microsoft-project-level-one-%d9%85%d8%a7%d9%8a%d9%83%d8%b1%d9%88%d8%b3%d9%88%d9%81%d8%aa-%d8%a8%d8%b1%d9%88%d8%ac%d9%83%d8%aa-%d8%a7%d9%84%d9%85%d8%b3%d8%aa%d9%88%d9%89-%d8%a7%d9%84%d8%a3%d9%88%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/primavera-level-three",
          "destination": "/course/primavera-level-three-%d8%a8%d8%b1%d9%8a%d9%85%d8%a7%d9%81%d9%8a%d8%b1%d8%a7-%d8%a7%d9%84%d9%85%d8%b3%d8%aa%d9%88%d9%89-%d8%a7%d9%84%d8%ab%d8%a7%d9%84%d8%ab",
          "permanent": true
      },
      {
          "source": "/courses/%d9%85%d8%ad%d8%aa%d8%b1%d9%81-%d8%a5%d8%af%d8%a7%d8%b1%d8%a9-%d8%a7%d9%84%d9%85%d8%ae%d8%a7%d8%b7%d8%b1-%d8%a7%d9%84%d8%af%d9%88%d8%b1%d8%a9-%d8%a7%d9%84%d8%aa%d8%af%d8%b1%d9%8a%d8%a8%d9%8a",
          "destination": "/course/%d9%85%d8%ad%d8%aa%d8%b1%d9%81-%d8%a5%d8%af%d8%a7%d8%b1%d8%a9-%d8%a7%d9%84%d9%85%d8%ae%d8%a7%d8%b7%d8%b1-%d8%a7%d9%84%d8%af%d9%88%d8%b1%d8%a9-%d8%a7%d9%84%d8%aa%d8%af%d8%b1%d9%8a%d8%a8%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/",
          "destination": "/course/project-management-earned-value-technique-%d8%a5%d8%af%d8%a7%d8%b1%d8%a9-%d8%a7%d9%84%d9%82%d9%8a%d9%85%d8%a9-%d8%a7%d9%84%d9%85%d9%83%d8%aa%d8%b3%d8%a8%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/steps-to-success-in-working-with-autism",
          "destination": "/course/%d8%ae%d8%b7%d9%88%d8%a7%d8%aa-%d8%a7%d9%84%d9%86%d8%ac%d8%a7%d8%ad-%d9%81%d9%8a-%d8%a7%d9%84%d8%b9%d9%85%d9%84-%d9%85%d8%b9-%d8%ad%d8%a7%d9%84%d8%a7%d8%aa-%d8%a7%d8%b6%d8%b7%d8%b1%d8%a7%d8%a8-%d8%b7",
          "permanent": true
      },
      {
          "source": "/courses/e-learning",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d8%b9%d9%84%d9%8a%d9%85-%d8%a7%d9%84%d8%a5%d9%84%d9%83%d8%aa%d8%b1%d9%88%d9%86%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/since-research",
          "destination": "/course/%d9%85%d9%86%d9%87%d8%ac-%d8%a7%d9%84%d8%a8%d8%ad%d8%ab-%d8%a7%d9%84%d8%b9%d9%84%d9%85%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/safe-yourself-from-relations",
          "destination": "/course/%d8%ad%d9%85%d8%a7%d9%8a%d8%a9-%d8%a7%d9%84%d8%b0%d8%a7%d8%aa-%d9%85%d9%86-%d8%a7%d9%84%d8%b9%d9%84%d8%a7%d9%82%d8%a7%d8%aa",
          "permanent": true
      },
      {
          "source": "/courses/youtube",
          "destination": "/course/%d8%a7%d9%86%d8%b4%d8%a7%d8%a1-%d9%82%d9%86%d8%a7%d8%a9-%d8%a7%d8%ad%d8%aa%d8%b1%d8%a7%d9%81%d9%8a%d8%a9-%d8%b9%d9%84%d9%89-%d8%a7%d9%84%d9%8a%d9%88%d8%aa%d9%8a%d9%88%d8%a8-%d9%88%d8%a7%d9%84%d8%b1",
          "permanent": true
      },
      {
          "source": "/courses/%d8%b5%d9%86%d8%a7%d8%b9%d8%a9-%d8%a7%d9%84%d8%a3%d9%81%d9%83%d8%a7%d8%b1",
          "destination": "/course/%d8%b5%d9%86%d8%a7%d8%b9%d8%a9-%d8%a7%d9%84%d8%a3%d9%81%d9%83%d8%a7%d8%b1",
          "permanent": true
      },
      {
          "source": "/courses/child-protection",
          "destination": "/course/child-protection-%d8%ad%d9%85%d8%a7%d9%8a%d8%a9-%d8%a7%d9%84%d8%b7%d9%81%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/how-do-you-deal-with-your-partner",
          "destination": "/course/%d9%83%d9%8a%d9%81-%d8%aa%d8%aa%d8%b9%d8%a7%d9%85%d9%84-%d9%85%d8%b9-%d8%b4%d8%b1%d9%8a%d9%83-%d8%ad%d9%8a%d8%a7%d8%aa%d9%83",
          "permanent": true
      },
      {
          "source": "/courses/independence",
          "destination": "/course/%d8%a7%d9%84%d8%a7%d8%b3%d8%aa%d9%82%d9%84%d8%a7%d9%84%d9%8a%d8%a9-%d8%a7%d9%84%d8%b0%d8%a7%d8%aa%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/hr-management-skills-and-functions",
          "destination": "/course/%d9%85%d9%87%d8%a7%d8%b1%d8%a7%d8%aa-%d9%88%d9%88%d8%b8%d8%a7%d8%a6%d9%81-%d8%a5%d8%af%d8%a7%d8%b1%d8%a9-%d8%a7%d9%84%d9%85%d9%88%d8%a7%d8%b1%d8%af-%d8%a7%d9%84%d8%a8%d8%b4%d8%b1%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/learning-online-skills",
          "destination": "/course/%d9%85%d9%87%d8%a7%d8%b1%d8%a7%d8%aa-%d8%a7%d9%84%d8%aa%d8%b9%d9%84%d9%8a%d9%85-%d8%b9%d9%86-%d8%a8%d8%b9%d8%af",
          "permanent": true
      },
      {
          "source": "/courses/create-your-first-game-with-unity-engine",
          "destination": "/course/%d8%b5%d9%85%d9%85-%d9%84%d8%b9%d8%a8%d8%aa%d9%83-%d8%a7%d9%84%d8%a3%d9%88%d9%84%d9%89-%d8%a8%d8%a7%d8%b3%d8%aa%d8%ae%d8%af%d8%a7%d9%85-%d9%85%d8%ad%d8%b1%d9%83-%d9%8a%d9%88%d9%86%d9%8a%d8%aa%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/medical-terminology-medical-language",
          "destination": "/course/%d8%a7%d9%84%d9%84%d8%ba%d9%87-%d8%a7%d9%84%d8%b7%d8%a8%d9%8a%d9%87-%d8%a7%d9%84%d9%85%d8%b5%d8%b7%d9%84%d8%ad%d8%a7%d8%aa-%d8%a7%d9%84%d8%b7%d8%a8%d9%8a%d8%a9-medical-terminology-medical-language",
          "permanent": true
      },
      {
          "source": "/courses/student-styles",
          "destination": "/course/%d8%a3%d9%86%d9%85%d8%a7%d8%b7-%d8%a7%d9%84%d8%b7%d9%84%d8%a7%d8%a8",
          "permanent": true
      },
      {
          "source": "/courses/who-am-i",
          "destination": "/course/%d9%87%d9%88%d9%8a%d8%aa%d9%8a-%d8%a8%d9%88%d8%b5%d9%84%d8%aa%d9%8a-%d9%85%d9%86-%d8%a3%d9%86%d8%a7-%d9%83%d9%8a%d9%81-%d8%a3%d8%ad%d8%af%d8%af-%d9%85%d8%b3%d9%8a%d8%b1%d8%aa%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/the-power-of-choice",
          "destination": "/course/%d9%82%d9%88%d8%a9-%d8%a7%d9%84%d8%a7%d8%ae%d8%aa%d9%8a%d8%a7%d8%b1",
          "permanent": true
      },
      {
          "source": "/courses/learn-the-basics-of-programming-on-filters",
          "destination": "/course/%d8%aa%d8%b9%d9%84%d9%85-%d8%a7%d8%b3%d8%a7%d8%b3%d9%8a%d8%a7%d8%aa-%d8%a7%d9%84%d8%a8%d8%b1%d9%85%d8%ac%d8%a9-%d8%b9%d9%84%d9%89-%d9%81%d9%84%d8%a7%d8%aa%d8%b1-%d9%85%d9%86-%d8%a7%d9%84%d8%b5%d9%81",
          "permanent": true
      },
      {
          "source": "/courses/basics-of-solar-energy-systems",
          "destination": "/course/%d8%a3%d8%b3%d8%a7%d8%b3%d9%8a%d8%a7%d8%aa-%d8%a3%d9%86%d8%b8%d9%85%d8%a9-%d8%a7%d9%84%d8%b7%d8%a7%d9%82%d8%a9-%d8%a7%d9%84%d8%b4%d9%85%d8%b3%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/content-creator",
          "destination": "/course/%d8%af%d8%a8%d9%84%d9%88%d9%85%d9%87-%d8%aa%d8%b5%d9%85%d9%8a%d9%85-%d8%a7%d9%84%d9%85%d8%ad%d8%aa%d9%88%d9%89",
          "permanent": true
      },
      {
          "source": "/courses/journey-of-change",
          "destination": "/course/%d8%b1%d8%ad%d9%84%d8%a9-%d8%a7%d9%84%d8%aa%d8%ba%d9%8a%d8%b1",
          "permanent": true
      },
      {
          "source": "/courses/therapeutic-nutrition",
          "destination": "/course/%d9%85%d8%a7-%d9%87%d9%88-%d8%a7%d9%84%d8%a5%d9%85%d8%b3%d8%a7%d9%83-%d9%88%d8%b7%d8%b1%d9%82-%d8%b9%d9%84%d8%a7%d8%ac%d9%87-%d9%81%d9%8a-%d8%ac%d9%85%d9%8a%d8%b9-%d8%a7%d9%84%d9%85%d8%b1%d8%a7%d8%ad",
          "permanent": true
      },
      {
          "source": "/courses/hyperactivity",
          "destination": "/course/%d9%81%d8%b1%d8%b7-%d8%a7%d9%84%d8%ad%d8%b1%d9%83%d8%a9-%d9%88%d8%aa%d8%b4%d8%aa%d8%aa-%d8%a7%d9%84%d8%a7%d9%86%d8%aa%d8%a8%d8%a7%d9%87-%d8%b9%d9%86%d8%af-%d8%a7%d9%84%d8%a7%d8%b7%d9%81%d8%a7%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/businessman",
          "destination": "/course/%d8%af%d8%a8%d9%84%d9%88%d9%85-%d8%b1%d8%ac%d8%a7%d9%84-%d8%a7%d9%84%d8%a3%d8%b9%d9%85%d8%a7%d9%84-1-%d8%a7%d9%84%d8%a7%d8%b3%d8%aa%d8%b1%d8%a7%d8%aa%d9%8a%d8%ac%d9%8a%d8%a9-%d8%a7%d9%84%d8%ac%d8%af",
          "permanent": true
      },
      {
          "source": "/courses/life-coaching-for-beginners",
          "destination": "/course/life-coaching-for-beginners-%d9%84%d8%a7%d9%8a%d9%81-%d9%83%d9%88%d8%aa%d8%b4%d9%8a%d9%86%d8%ac-%d9%84%d9%84%d9%85%d8%a8%d8%aa%d8%af%d8%a6%d9%8a%d9%86",
          "permanent": true
      },
      {
          "source": "/courses/since-search-skills",
          "destination": "/course/%d9%85%d9%87%d8%a7%d8%b1%d8%a7%d8%aa-%d8%a7%d9%84%d8%a8%d8%ad%d8%ab-%d8%a7%d9%84%d8%b9%d9%84%d9%85%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/angry-mother",
          "destination": "/course/%d8%a5%d8%af%d8%a7%d8%b1%d8%a9-%d8%a7%d9%84%d8%ba%d8%b6%d8%a8-%d9%84%d9%84%d8%a3%d9%85%d9%87%d8%a7%d8%aa",
          "permanent": true
      },
      {
          "source": "/courses/how-to-be-professional-sales-man",
          "destination": "/course/%d9%83%d9%8a%d9%81-%d8%aa%d8%b5%d8%a8%d8%ad-%d8%a8%d8%a7%d8%a6%d8%b9-%d9%85%d9%86-%d8%b7%d8%b1%d8%a7%d8%b2-%d8%ae%d8%a7%d8%b5",
          "permanent": true
      },
      {
          "source": "/courses/blender-2-9",
          "destination": "/course/%d8%aa%d8%b9%d9%84%d9%85-%d8%a7%d9%84%d8%aa%d8%b5%d9%85%d9%8a%d9%85-%d8%ab%d9%84%d8%a7%d8%ab%d9%8a-%d8%a7%d9%84%d8%a3%d8%a8%d8%b9%d8%a7%d8%af-%d8%a8%d8%a8%d8%b1%d9%86%d8%a7%d9%85%d8%ac-blender-29",
          "permanent": true
      },
      {
          "source": "/courses/networks-fundamentals",
          "destination": "/course/networks-fundamentals-%d8%a3%d8%b3%d8%a7%d8%b3%d9%8a%d8%a7%d8%aa-%d8%b4%d8%a8%d9%83%d8%a7%d8%aa-%d8%a7%d9%84%d8%ad%d8%a7%d8%b3%d8%a8",
          "permanent": true
      },
      {
          "source": "/courses/trading",
          "destination": "/course/%d8%a3%d8%b3%d8%a7%d8%b3%d9%8a%d8%a7%d8%aa-%d8%a7%d9%84%d8%aa%d8%af%d8%a7%d9%88%d9%84-%d9%81%d9%8a-%d8%b3%d9%88%d9%82-%d8%a7%d9%84%d8%a3%d8%b3%d9%87%d9%85-%d8%a7%d9%84%d9%83%d9%88%d9%8a%d8%aa%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/stop-the-excuses",
          "destination": "/course/%d8%a3%d9%88%d9%82%d9%81-%d8%a7%d9%84%d8%a3%d8%b9%d8%b0%d8%a7%d8%b1-%d9%88%d8%a5%d8%a8%d8%af%d8%a3-%d8%a7%d9%84%d9%85%d8%b4%d9%88%d8%a7%d8%b1",
          "permanent": true
      },
      {
          "source": "/courses/positive-education-for-children",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d8%b1%d8%a8%d9%8a%d8%a9-%d8%a7%d9%84%d8%a5%d9%8a%d8%ac%d8%a7%d8%a8%d9%8a%d8%a9-%d9%84%d9%84%d8%a3%d8%b7%d9%81%d8%a7%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/sex-education-for-children",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d8%b1%d8%a8%d9%8a%d8%a9-%d8%a7%d9%84%d8%ac%d9%86%d8%b3%d9%8a%d8%a9-%d9%84%d9%84%d8%a3%d8%b7%d9%81%d8%a7%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/c-programming-language",
          "destination": "/course/c-programming-language",
          "permanent": true
      },
      {
          "source": "/courses/secrets-of-highs-in-the-financial-markets",
          "destination": "/course/%d8%a3%d8%b3%d8%b1%d8%a7%d8%b1-%d8%a7%d9%84%d8%a7%d8%b1%d8%aa%d9%81%d8%a7%d8%b9%d8%a7%d8%aa-%d8%a7%d9%84%d9%82%d9%8a%d8%a7%d8%b3%d9%8a%d8%a9-%d8%a8%d8%a7%d9%84%d8%a3%d8%b3%d9%88%d8%a7%d9%82-%d8%a7",
          "permanent": true
      },
      {
          "source": "/courses/photography-skill",
          "destination": "/course/%d9%85%d9%87%d8%a7%d8%b1%d8%a9-%d8%a7%d9%84%d8%aa%d8%b5%d9%88%d9%8a%d8%b1",
          "permanent": true
      },
      {
          "source": "/courses/adobe-photoshop-basics",
          "destination": "/course/%d8%a3%d8%b3%d8%a7%d8%b3%d9%8a%d8%a7%d8%aa-%d8%a8%d8%b1%d9%86%d8%a7%d9%85%d8%ac-%d8%a3%d8%af%d9%88%d8%a8%d9%8a-%d9%81%d9%88%d8%aa%d9%88%d8%b4%d9%88%d8%a8",
          "permanent": true
      },
      {
          "source": "/courses/smart-device-maintenance",
          "destination": "/course/%d8%b5%d9%8a%d8%a7%d9%86%d8%a9-%d8%a7%d9%84%d8%a3%d8%ac%d9%87%d8%b2%d8%a9-%d8%a7%d9%84%d8%b0%d9%83%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/fundamental-and-financial-analysis",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d8%ad%d9%84%d9%8a%d9%84-%d8%a7%d9%84%d9%85%d8%a7%d9%84%d9%8a-%d9%88%d8%a7%d9%84%d8%a3%d8%b3%d8%a7%d8%b3%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/manage-stress",
          "destination": "/course/%d8%a5%d8%af%d8%a7%d8%b1%d8%a9-%d8%a7%d9%84%d8%b6%d8%ba%d9%88%d8%b7-%d9%88%d8%a7%d9%84%d8%a3%d8%ad%d8%af%d8%a7%d8%ab-%d8%a7%d9%84%d8%ad%d9%8a%d8%a7%d8%aa%d9%8a%d8%a9-%d8%a7%d9%84%d9%85%d8%ab%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/manage-electronic-tables-with-shopify",
          "destination": "/course/%d8%a5%d9%86%d8%b4%d8%a7%d8%a1-%d9%88%d8%a5%d8%af%d8%a7%d8%b1%d8%a9-%d9%88%d8%aa%d8%ae%d8%b5%d9%8a%d8%b5-%d9%85%d8%aa%d8%ac%d8%b1%d9%83-%d8%a7%d9%84%d8%a5%d9%84%d9%83%d8%aa%d8%b1%d9%88%d9%86%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/programming-language-dart",
          "destination": "/course/%d8%a7%d9%84%d8%af%d9%88%d8%b1%d8%a9-%d8%a7%d9%84%d8%b4%d8%a7%d9%85%d9%84%d8%a9-%d9%81%d9%8a-%d9%84%d8%ba%d8%a9-%d8%a7%d9%84%d8%a8%d8%b1%d9%85%d8%ac%d8%a9-%d8%a7%d9%84%d9%83%d8%a7%d8%a6%d9%86%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/otc-basics-of-pharmacology",
          "destination": "/course/otc-basics-of-pharmacology",
          "permanent": true
      },
      {
          "source": "/courses/a-full-course-in-medicine",
          "destination": "/course/a-full-course-in-medicine",
          "permanent": true
      },
      {
          "source": "/courses/marital-compatibility",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d9%88%d8%a7%d9%81%d9%82-%d8%a7%d9%84%d8%b2%d9%88%d8%a7%d8%ac%d9%8a-%d9%85%d9%86-%d9%88%d8%ac%d9%87%d8%a9-%d9%86%d8%b8%d8%b1-%d8%a7%d9%84%d8%af%d9%8a%d9%86-%d8%a7%d9%84%d8%a5%d8%b3",
          "permanent": true
      },
      {
          "source": "/courses/lead-yourself",
          "destination": "/course/%d8%a8%d9%82%d9%8a%d8%a7%d8%af%d8%a9-%d8%b0%d8%a7%d8%aa%d9%83-%d8%aa%d8%ad%d9%84%d9%88-%d8%ad%d9%8a%d8%a7%d8%aa%d9%83-%d8%a3%d8%b3%d8%b1%d8%a7%d8%b1-%d9%88%d8%aa%d9%82%d9%86%d9%8a%d8%a7%d8%aa-%d9%81",
          "permanent": true
      },
      {
          "source": "/courses/growth-mindset",
          "destination": "/course/%d8%b9%d8%a7%d8%af%d8%a7%d8%aa%d9%8a-%d8%a7%d9%84%d9%8a%d9%88%d9%85%d9%8a%d8%a9-%d9%88%d9%86%d9%85%d9%88-%d8%a7%d9%84%d8%b9%d9%82%d9%84%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/xcode9",
          "destination": "/course/%d8%a8%d8%b1%d9%85%d8%ac%d8%a9-%d8%b3%d9%88%d9%8a%d9%81%d8%aa-4-%d9%85%d9%86-%d8%ae%d9%84%d8%a7%d9%84-%d8%a3%d9%8a-%d8%a3%d9%88-%d8%a5%d8%b3-11-%d9%88%d8%a5%d9%83%d8%b3-%d9%83%d9%88%d8%af-9",
          "permanent": true
      },
      {
          "source": "/courses/wi-fi-6",
          "destination": "/course/wi-fi-6",
          "permanent": true
      },
      {
          "source": "/courses/your-way-to-be-an-android-developer",
          "destination": "/course/%d8%b7%d8%b1%d9%8a%d9%82%d9%83-%d9%84%d8%aa%d9%83%d9%88%d9%86-%d9%85%d8%a8%d8%b1%d9%85%d8%ac-%d8%aa%d8%b7%d8%a8%d9%8a%d9%82%d8%a7%d8%aa-%d8%a7%d9%86%d8%af%d8%b1%d9%88%d9%8a%d8%af",
          "permanent": true
      },
      {
          "source": "/courses/google-forms-in-arabic",
          "destination": "/course/%d9%86%d9%85%d8%a7%d8%b0%d8%ac-%d8%ac%d9%88%d8%ac%d9%84-%d8%a8%d8%a7%d9%84%d8%b9%d8%b1%d8%a8%d9%8a%d8%a9-%d8%a7%d8%ad%d8%aa%d8%b1%d9%81%d9%87%d8%a7",
          "permanent": true
      },
      {
          "source": "/courses/build-you-android-app",
          "destination": "/course/%d8%aa%d8%b9%d9%84%d9%85-%d9%83%d9%8a%d9%81-%d8%aa%d8%b5%d9%86%d8%b9-%d8%aa%d8%b7%d8%a8%d9%8a%d9%82%d8%a7%d8%aa-%d8%a7%d9%84%d8%a3%d9%86%d8%af%d8%b1%d9%88%d9%8a%d8%af-%d8%a8%d8%af%d9%88%d9%86-%d9%85",
          "permanent": true
      },
      {
          "source": "/courses/facebook",
          "destination": "/course/%d8%af%d9%88%d8%b1%d8%a9-%d8%a7%d8%ad%d8%aa%d8%b1%d8%a7%d9%81-%d8%a7%d9%84%d9%81%d9%8a%d8%b3%d8%a8%d9%88%d9%83-%d9%88%d8%a7%d9%86%d8%b4%d8%a7%d8%a1-%d8%a7%d9%84%d8%ad%d9%85%d9%84%d8%a7%d8%aa-%d8%a7",
          "permanent": true
      },
      {
          "source": "/courses/life-with-more-power",
          "destination": "/course/%d8%ad%d9%8a%d8%a7%d8%a9-%d8%a3%d9%83%d8%ab%d8%b1-%d9%82%d9%88%d8%a9-%d8%b5%d9%86%d8%a7%d8%b9-%d8%a7%d9%84%d9%86%d8%aa%d8%a7%d8%a6%d8%ac",
          "permanent": true
      },
      {
          "source": "/courses/developing-childrens-skills",
          "destination": "/course/%d8%a7%d8%aa%d9%8a%d9%83%d9%8a%d8%aa-%d8%aa%d8%b1%d8%a8%d9%8a%d8%a9-%d9%88-%d8%aa%d9%86%d9%85%d9%8a%d8%a9-%d9%85%d9%87%d8%a7%d8%b1%d8%a7%d8%aa-%d8%a7%d9%84%d8%a7%d8%b7%d9%81%d8%a7%d9%84-%d8%a8%d8%a7",
          "permanent": true
      },
      {
          "source": "/courses/basics-of-cv-writing",
          "destination": "/course/%d9%85%d8%a8%d8%a7%d8%af%d8%a6-%d9%83%d8%aa%d8%a7%d8%a8%d8%a9-%d8%a7%d9%84%d8%b3%d9%8a%d8%b1%d8%a9-%d8%a7%d9%84%d8%b0%d8%a7%d8%aa%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/be-butterfly",
          "destination": "/course/%d9%83%d9%88%d9%86%d9%8a-%d9%81%d8%b1%d8%a7%d8%b4%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/critical-thinking-when-using-the-media",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d9%81%d9%83%d9%8a%d8%b1-%d8%a7%d9%84%d9%86%d8%a7%d9%82%d8%af-%d8%b9%d9%86%d8%af-%d8%a7%d8%b3%d8%aa%d8%ae%d8%af%d8%a7%d9%85-%d9%88%d8%b3%d8%a7%d8%a6%d9%84-%d8%a7%d9%84%d8%a5%d8%b9",
          "permanent": true
      },
      {
          "source": "/courses/c-from-zero-to-hero",
          "destination": "/course/c-from-zero-to-hero",
          "permanent": true
      },
      {
          "source": "/courses/learning-java",
          "destination": "/course/%d8%aa%d8%b9%d9%84%d9%85-%d8%a7%d9%84%d8%ac%d8%a7%d9%81%d8%a7-%d9%85%d9%86-%d8%a7%d9%84%d8%b5%d9%81%d8%b1",
          "permanent": true
      },
      {
          "source": "/courses/communication",
          "destination": "/course/%d9%85%d9%87%d8%a7%d8%b1%d8%a7%d8%aa-%d8%a7%d9%84%d8%a5%d8%aa%d8%b5%d8%a7%d9%84-%d9%88%d8%a7%d9%84%d8%aa%d9%88%d8%a7%d8%b5%d9%84-%d9%88%d8%a7%d9%84%d9%86%d9%85%d8%b7-%d8%a7%d9%84%d8%b3%d9%84%d9%88",
          "permanent": true
      },
      {
          "source": "/courses/how-to-learn-math",
          "destination": "/course/%d9%83%d9%8a%d9%81-%d9%86%d8%b9%d9%84%d9%85-%d8%ad%d8%a8-%d8%a7%d9%84%d8%b1%d9%8a%d8%a7%d8%b6%d9%8a%d8%a7%d8%aa",
          "permanent": true
      },
      {
          "source": "/courses/web-development",
          "destination": "/course/%d8%aa%d8%b7%d9%88%d9%8a%d8%b1-%d9%85%d9%88%d8%a7%d9%82%d8%b9-%d9%88%d9%8a%d8%a8-%d8%a5%d8%ad%d8%aa%d8%b1%d8%a7%d9%81%d9%8a%d8%a9-%d8%a8%d8%a5%d8%b3%d8%aa%d8%ae%d8%af%d8%a7%d9%85-%d9%86%d8%b8%d8%a7",
          "permanent": true
      },
      {
          "source": "/courses/%d8%a7%d9%84%d9%85%d8%b9%d9%84%d9%85-%d8%a7%d9%84%d9%85%d8%a4%d8%ab%d8%b1",
          "destination": "/course/%d8%a7%d9%84%d9%85%d8%b9%d9%84%d9%85-%d8%a7%d9%84%d9%85%d8%a4%d8%ab%d8%b1",
          "permanent": true
      },
      {
          "source": "/courses/motion-graphic",
          "destination": "/course/%d8%a7%d9%84%d9%85%d9%88%d8%b4%d9%86-%d8%ac%d8%b1%d8%a7%d9%81%d9%8a%d9%83",
          "permanent": true
      },
      {
          "source": "/courses/psychological-readiness-for-new-business",
          "destination": "/course/%d8%a7%d9%84%d8%a7%d8%b3%d8%aa%d8%b9%d8%af%d8%a7%d8%af-%d8%a7%d9%84%d9%86%d9%81%d8%b3%d9%8a-%d9%84%d9%84%d9%85%d8%b4%d8%b1%d9%88%d8%b9-%d8%a7%d9%84%d8%ac%d8%af%d9%8a%d8%af",
          "permanent": true
      },
      {
          "source": "/courses/purchasing-manager",
          "destination": "/course/%d9%85%d8%af%d9%8a%d8%b1-%d9%85%d8%b4%d8%aa%d8%b1%d9%8a%d8%a7%d8%aa-%d9%85%d8%ad%d8%aa%d8%b1%d9%81",
          "permanent": true
      },
      {
          "source": "/courses/manage-team-work",
          "destination": "/course/%d8%a5%d8%af%d8%a7%d8%b1%d8%a9-%d9%81%d8%b1%d9%8a%d9%82-%d8%a7%d9%84%d8%b9%d9%85%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/build-online-store",
          "destination": "/course/%d8%aa%d8%b9%d9%84%d9%85-%d8%a8%d9%86%d8%a7%d8%a1-%d9%88%d8%aa%d8%b7%d9%88%d9%8a%d8%b1-%d9%85%d8%aa%d8%ac%d8%b1-%d8%a5%d9%84%d9%83%d8%aa%d8%b1%d9%88%d9%86%d9%8a-%d8%a5%d8%ad%d8%aa%d8%b1%d8%a7%d9%81-2",
          "permanent": true
      },
      {
          "source": "/courses/confident-teacher",
          "destination": "/course/%d8%a7%d9%84%d9%85%d8%b9%d9%84%d9%85-%d8%a7%d9%84%d9%88%d8%a7%d8%ab%d9%82",
          "permanent": true
      },
      {
          "source": "/courses/mastering-storytelling-in-presentations",
          "destination": "/course/%d8%a7%d8%ad%d8%aa%d8%b1%d9%81-%d8%a7%d9%84%d8%b9%d8%b1%d9%88%d8%b6-%d8%a7%d9%84%d8%aa%d9%82%d8%af%d9%8a%d9%85%d9%8a%d8%a9-%d8%b9%d9%86-%d8%b7%d8%b1%d9%8a%d9%82-%d8%a3%d8%b3%d8%a7%d9%84%d9%8a%d8%a8",
          "permanent": true
      },
      {
          "source": "/courses/videoscribe-movavi-activepresenter",
          "destination": "/course/%d8%a7%d8%af%d9%88%d8%a7%d8%aa-%d8%a7%d9%84%d8%aa%d8%b5%d9%85%d9%8a%d9%85-%d8%a7%d9%84%d9%81%d8%b9%d8%a7%d9%84%d9%87-videoscribe-movavi-activepresenter",
          "permanent": true
      },
      {
          "source": "/courses/teaching-piano-first-level",
          "destination": "/course/%d8%aa%d8%b9%d9%84%d9%8a%d9%85-%d8%a7%d9%84%d8%a8%d9%8a%d8%a7%d9%86%d9%88-%d8%a7%d9%84%d9%85%d8%b3%d8%aa%d9%88%d9%89-%d8%a7%d9%84%d8%a7%d9%88%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/reflection",
          "destination": "/course/%d8%a7%d9%84%d8%a5%d9%86%d8%b9%d9%83%d8%a7%d8%b3",
          "permanent": true
      },
      {
          "source": "/courses/graphic-design-illustrator",
          "destination": "/course/%d8%aa%d8%b5%d9%85%d9%8a%d9%85-%d8%a7%d9%84%d8%ac%d8%b1%d8%a7%d9%81%d9%8a%d9%83-%d8%a8%d8%a8%d8%b1%d9%86%d8%a7%d9%85%d8%ac-%d8%a7%d9%84%d8%a3%d9%84%d9%8a%d8%b3%d8%aa%d8%b1%d9%8a%d8%aa%d9%88%d8%b1",
          "permanent": true
      },
      {
          "source": "/courses/piano-level-two",
          "destination": "/course/%d8%aa%d8%b9%d9%84%d9%85-%d8%a7%d9%84%d8%a8%d9%8a%d8%a7%d9%86%d9%88-%d8%a7%d9%84%d9%85%d8%b3%d8%aa%d9%88%d9%89-%d8%a7%d9%84%d8%ab%d8%a7%d9%86%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/sketch-up-program",
          "destination": "/course/%d8%a8%d8%b1%d9%86%d8%a7%d9%85%d8%ac-%d8%b3%d9%83%d9%8a%d8%aa%d8%b4-%d8%a7%d8%a8",
          "permanent": true
      },
      {
          "source": "/courses/guitar-level-two",
          "destination": "/course/%d8%aa%d8%b9%d9%84%d9%85-%d8%a7%d9%84%d8%ac%d9%8a%d8%aa%d8%a7%d8%b1-%d8%a7%d9%84%d9%85%d8%b3%d8%aa%d9%88%d9%89-%d8%a7%d9%84%d8%ab%d8%a7%d9%86%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/guitar-level-one",
          "destination": "/course/%d8%aa%d8%b9%d9%84%d9%85-%d8%a7%d9%84%d8%ac%d9%8a%d8%aa%d8%a7%d8%b1-%d8%a7%d9%84%d9%85%d8%b3%d8%aa%d9%88%d9%89-%d8%a7%d9%84%d8%a3%d9%88%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/photoshop-basics-2",
          "destination": "/course/%d8%aa%d8%b9%d9%84%d9%85-%d8%a3%d8%b3%d8%a7%d8%b3%d9%8a%d8%a7%d8%aa-%d8%a7%d9%84%d9%81%d9%88%d8%aa%d9%88%d8%b4%d9%88%d8%a8",
          "permanent": true
      },
      {
          "source": "/courses/cosmetic",
          "destination": "/course/%d9%85%d8%b3%d8%aa%d8%ad%d8%b6%d8%b1%d8%a7%d8%aa-%d8%a7%d9%84%d8%aa%d8%ac%d9%85%d9%8a%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/personal-branding",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d8%b3%d9%88%d9%8a%d9%82-%d8%a7%d9%84%d8%b4%d8%ae%d8%b5%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/professional-linkedin",
          "destination": "/course/%d8%a7%d8%b3%d8%aa%d8%ae%d8%af%d8%a7%d9%85-%d9%84%d9%8a%d9%86%d9%83%d8%af%d8%a5%d9%86-%d8%a8%d8%b4%d9%83%d9%84-%d8%a7%d8%ad%d8%aa%d8%b1%d8%a7%d9%81%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/how-to-teach-online",
          "destination": "/course/%d9%83%d9%8a%d9%81%d9%8a%d8%a9-%d8%a7%d9%84%d8%aa%d8%af%d8%b1%d9%8a%d8%b3-%d8%a3%d9%88%d9%86%d9%84%d8%a7%d9%8a%d9%86",
          "permanent": true
      },
      {
          "source": "/courses/storytelling",
          "destination": "/course/storytelling-%d9%85%d9%87%d8%a7%d8%b1%d8%a9-%d8%ad%d9%83%d8%a7%d9%8a%d8%a9-%d8%a7%d9%84%d9%82%d8%b5%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/build-website-without-coding",
          "destination": "/course/%d8%aa%d8%b5%d9%85%d9%8a%d9%85-%d9%85%d9%88%d8%a7%d9%82%d8%b9-%d8%a7%d8%ad%d8%aa%d8%b1%d8%a7%d9%81%d9%8a%d8%a9-%d8%af%d9%88%d9%86-%d8%a7%d8%b3%d8%aa%d8%ae%d8%af%d8%a7%d9%85-%d8%a3%d9%8a-%d9%83%d9%88",
          "permanent": true
      },
      {
          "source": "/courses/how-to-know-your-strength",
          "destination": "/course/%d9%83%d9%8a%d9%81-%d8%aa%d8%b9%d8%b1%d9%81-%d9%86%d9%82%d8%a7%d8%b7-%d9%82%d9%88%d8%aa%d9%83-%d9%88%d8%aa%d8%b3%d8%aa%d8%ae%d8%af%d9%85%d9%87%d8%a7-%d8%a8%d8%a7%d8%b3%d8%aa%d8%ae%d8%af%d8%a7%d9%85",
          "permanent": true
      },
      {
          "source": "/courses/release-from-stress",
          "destination": "/course/%d8%aa%d8%ad%d8%b1%d8%b1-%d9%85%d9%86-%d8%a7%d9%84%d8%b6%d8%ba%d8%b7-%d8%a7%d9%84%d9%86%d9%81%d8%b3%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/learning-guitar",
          "destination": "/course/%d8%aa%d8%b9%d9%84%d9%85-%d8%a7%d9%84%d8%ac%d9%8a%d8%aa%d8%a7%d8%b1-%d9%85%d9%86-%d8%a7%d9%84%d8%a8%d8%af%d8%a7%d9%8a%d8%a9%d8%a7%d9%84%d9%85%d8%b3%d8%aa%d9%88%d9%89-%d8%a7%d9%84%d8%a7%d9%88%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/i-deserve",
          "destination": "/course/%d9%84%d8%a3%d9%86%d9%8a-%d8%a7%d8%b3%d8%aa%d8%ad%d9%82",
          "permanent": true
      },
      {
          "source": "/courses/c-windows-form-sql-server",
          "destination": "/course/c-windows-formsql-server-%d9%84%d9%84%d9%85%d8%a8%d8%aa%d8%af%d8%a6%d9%8a%d9%86-%d8%a8%d8%b1%d9%85%d8%ac%d8%a9-%d8%b3%d9%8a-%d8%b4%d8%a7%d8%b1%d8%a8-%d8%b3%d8%b7%d8%ad-%d8%a7%d9%84%d9%85%d9%83%d8%aa",
          "permanent": true
      },
      {
          "source": "/courses/html-and-css-web-design",
          "destination": "/course/html-and-css-web-design-%d8%af%d9%88%d8%b1%d8%a9-%d8%aa%d8%b5%d9%85%d9%8a%d9%85-%d9%85%d9%88%d8%a7%d9%82%d8%b9-%d8%a7%d9%86%d8%aa%d8%b1%d9%86%d8%aa-%d9%84%d9%84%d9%85%d8%a8%d8%aa%d8%af%d8%a6%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/microsoft-word-advanced",
          "destination": "/course/microsoft-word-%d9%85%d8%a7%d9%8a%d9%83%d8%b1%d9%88%d8%b3%d9%88%d9%81%d8%aa-%d9%88%d9%88%d8%b1%d8%af-%d8%a7%d9%84%d8%b4%d8%a7%d9%85%d9%84%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/excel-professional-level",
          "destination": "/course/%d8%a7%d9%84%d8%a3%d9%83%d8%b3%d9%8a%d9%84-%d8%a8%d8%b5%d9%88%d8%b1%d8%a9-%d8%a7%d8%ad%d8%aa%d8%b1%d8%a7%d9%81%d9%8a%d8%a9-%d8%a7%d9%84%d8%ac%d8%b2%d8%a1-%d8%a7%d9%84%d8%a3%d9%88%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/powerpoint",
          "destination": "/course/%d8%a7%d9%84%d8%af%d9%88%d8%b1%d8%a9-%d8%a7%d9%84%d8%a7%d8%ad%d8%aa%d8%b1%d8%a7%d9%81%d9%8a%d8%a9-%d9%84%d8%a8%d8%b1%d9%86%d8%a7%d9%85%d8%ac-%d8%a7%d9%84%d8%a8%d8%a7%d9%88%d8%b1-%d8%a8%d9%88%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/how-to-get-free-of-the-past",
          "destination": "/course/%d9%83%d9%8a%d9%81-%d8%aa%d8%aa%d8%ad%d8%b1%d8%b1-%d9%85%d9%86-%d8%a7%d9%84%d9%85%d8%a7%d8%b6%d9%8a-%d9%88%d8%aa%d8%b3%d8%b9%d8%af-%d8%a8%d8%a7%d9%84%d8%ad%d8%a7%d8%b6%d8%b1",
          "permanent": true
      },
      {
          "source": "/courses/teaching-skills",
          "destination": "/course/%d9%85%d9%87%d8%a7%d8%b1%d8%a7%d8%aa-%d8%a7%d9%84%d8%aa%d8%af%d8%b1%d9%8a%d8%b3-%d8%a7%d9%84%d9%81%d8%b9%d8%a7%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/the-psychology-of-solving-family-problems",
          "destination": "/course/%d8%b3%d9%8a%d9%83%d9%88%d9%84%d9%88%d8%ac%d9%8a%d8%a9-%d8%ad%d9%84-%d8%a7%d9%84%d9%85%d8%b4%d9%83%d9%84%d8%a7%d8%aa-%d8%a7%d9%84%d8%a3%d8%b3%d8%b1%d9%8a%d8%a9-%d9%88%d8%a7%d8%aa%d8%ae%d8%a7%d8%b0",
          "permanent": true
      },
      {
          "source": "/courses/the-subconscious-mind",
          "destination": "/course/%d8%a7%d9%84%d8%a8%d8%b1%d9%85%d8%ac%d8%a9-%d8%a7%d9%84%d8%a5%d9%8a%d8%ac%d8%a7%d8%a8%d9%8a%d8%a9-%d9%84%d9%84%d8%b9%d9%82%d9%84-%d8%a7%d9%84%d8%a8%d8%a7%d8%b7%d9%86",
          "permanent": true
      },
      {
          "source": "/courses/autodesk-revit",
          "destination": "/course/%d8%b1%d9%8a%d9%81%d9%8a%d8%aa-%d8%a5%d9%86%d8%b4%d8%a7%d8%a6%d9%8a-%d9%85%d9%83%d8%aa%d8%a8-%d9%81%d9%86%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/build-your-online-store",
          "destination": "/course/%d8%aa%d8%b9%d9%84%d9%85-%d8%a8%d9%86%d8%a7%d8%a1-%d9%88%d8%aa%d8%b7%d9%88%d9%8a%d8%b1-%d9%85%d8%aa%d8%ac%d8%b1-%d8%a5%d9%84%d9%83%d8%aa%d8%b1%d9%88%d9%86%d9%8a-%d8%a5%d8%ad%d8%aa%d8%b1%d8%a7%d9%81",
          "permanent": true
      },
      {
          "source": "/courses/graphic-designs-for-social-media",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d8%b5%d9%85%d9%8a%d9%85-%d8%a7%d9%84%d8%ac%d8%b1%d8%a7%d9%81%d9%8a%d9%83%d9%8a-%d9%84%d9%88%d8%b3%d8%a7%d8%a6%d9%84-%d8%a7%d9%84%d8%aa%d9%88%d8%a7%d8%b5%d9%84-%d8%a7%d9%84%d8%a5",
          "permanent": true
      },
      {
          "source": "/courses/write-article",
          "destination": "/course/%d8%aa%d8%b9%d9%84%d9%85-%d9%83%d8%aa%d8%a7%d8%a8%d8%a9-%d8%a7%d9%84%d9%85%d9%82%d8%a7%d9%84-%d9%88%d8%aa%d8%b5%d8%af%d8%b1-%d9%86%d8%aa%d8%a7%d8%a6%d8%ac-%d8%a7%d9%84%d8%a8%d8%ad%d8%ab",
          "permanent": true
      },
      {
          "source": "/courses/microsoft-excel",
          "destination": "/course/%d9%85%d8%a7%d9%8a%d9%83%d8%b1%d9%88%d8%b3%d9%88%d9%81%d8%aa-%d8%a5%d9%83%d8%b3%d9%84-%d8%a7%d9%84%d8%a5%d8%ad%d8%aa%d8%b1%d8%a7%d9%81%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/teacher-educator",
          "destination": "/course/%d8%a7%d9%84%d9%85%d8%b9%d9%84%d9%85-%d8%a7%d9%84%d9%85%d8%b1%d8%a8%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/make-peace-with-yourself",
          "destination": "/course/%d8%aa%d8%b5%d8%a7%d9%84%d8%ad-%d9%85%d8%b9-%d8%b0%d8%a7%d8%aa%d9%83",
          "permanent": true
      },
      {
          "source": "/courses/personal-planning",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d8%ae%d8%b7%d9%8a%d8%b7-%d8%a7%d9%84%d8%b4%d8%ae%d8%b5%d9%8a-%d8%a7%d9%84%d8%a7%d8%b3%d8%aa%d8%b1%d8%a7%d8%aa%d9%8a%d8%ac%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/surreal-painting-drawing",
          "destination": "/course/%d8%a7%d8%b1%d8%b3%d9%85-%d9%84%d9%88%d8%ad%d8%a9-%d8%b3%d8%b1%d9%8a%d8%a7%d9%84%d9%8a%d8%a9-%d8%b2%d9%8a%d8%aa%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/how-to-build-store-with-magento-system",
          "destination": "/course/%d8%aa%d8%b9%d9%84%d9%85-%d9%83%d9%8a%d9%81%d9%8a%d8%a9-%d8%a8%d9%86%d8%a7%d8%a1-%d9%85%d8%aa%d8%ac%d8%b1-%d8%a7%d9%84%d9%83%d8%aa%d8%b1%d9%88%d9%86%d9%8a-%d8%b6%d8%ae%d9%85-%d9%88%d8%b4%d8%a7%d9%85",
          "permanent": true
      },
      {
          "source": "/courses/how-to-market",
          "destination": "/course/%d9%83%d9%8a%d9%81-%d8%aa%d8%b3%d9%88%d9%82-%d9%85%d8%b4%d8%b1%d9%88%d8%b9%d9%83-%d8%b5%d8%ad",
          "permanent": true
      },
      {
          "source": "/courses/the-way-to-your-goal",
          "destination": "/course/%d8%a7%d9%84%d8%b7%d8%b1%d9%8a%d9%82-%d8%a5%d9%84%d9%89-%d8%a7%d9%84%d9%87%d8%af%d9%81",
          "permanent": true
      },
      {
          "source": "/courses/renderforest",
          "destination": "/course/%d8%aa%d8%b5%d9%85%d9%8a%d9%85-%d9%81%d9%8a%d8%af%d9%8a%d9%88-%d9%84%d9%84%d8%af%d8%b9%d8%a7%d9%8a%d8%a9-%d8%a7%d9%84%d8%b4%d8%ae%d8%b5%d9%8a%d8%a9-%d8%a8%d8%a7%d9%84%d8%b1%d8%b3%d9%88%d9%85-%d8%a7",
          "permanent": true
      },
      {
          "source": "/courses/%d8%aa%d8%b9%d9%84%d9%85-%d9%88%d8%a7%d8%ad%d8%aa%d8%b1%d9%81-%d8%a7%d9%84%d8%b9%d9%85%d9%84-%d8%b9%d9%84%d9%89-%d8%a7%d9%83%d8%b3%d9%84-excel",
          "destination": "/course/%d8%aa%d8%b9%d9%84%d9%85-%d9%88%d8%a7%d8%ad%d8%aa%d8%b1%d9%81-%d8%a7%d9%84%d8%b9%d9%85%d9%84-%d8%b9%d9%84%d9%89-%d8%a7%d9%83%d8%b3%d9%84-excel",
          "permanent": true
      },
      {
          "source": "/courses/leading-businesses",
          "destination": "/course/%d9%85%d9%82%d8%af%d9%85%d8%a9-%d8%a5%d9%84%d9%89-%d8%b9%d8%a7%d9%84%d9%85-%d8%b1%d9%8a%d8%a7%d8%af%d8%a9-%d8%a7%d9%84%d8%a3%d8%b9%d9%85%d8%a7%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/",
          "destination": "/course/%d8%af%d8%b1%d8%a7%d8%b3%d8%a9-%d8%a7%d9%84%d8%ac%d8%af%d9%88%d9%89-%d9%84%d9%84%d9%85%d8%b4%d8%b1%d9%88%d8%b9%d8%a7%d8%aa",
          "permanent": true
      },
      {
          "source": "/courses/project-mangment",
          "destination": "/course/%d8%af%d9%88%d8%b1%d8%a9-%d8%aa%d8%b9%d8%b1%d9%8a%d9%81%d9%8a%d8%a9-%d8%a8%d9%85%d8%ac%d8%a7%d9%84-%d8%a7%d8%af%d8%a7%d8%b1%d8%a9-%d8%a7%d9%84%d9%85%d8%b4%d8%b1%d9%88%d8%b9%d8%a7%d8%aa",
          "permanent": true
      },
      {
          "source": "/courses/general-english-for-beginners",
          "destination": "/course/general-english-for-beginners",
          "permanent": true
      },
      {
          "source": "/courses/pmp-2021",
          "destination": "/course/%d8%a7%d8%ad%d8%aa%d8%b1%d8%a7%d9%81-%d8%a5%d8%af%d8%a7%d8%b1%d8%a9-%d8%a7%d9%84%d9%85%d8%b4%d8%a7%d8%b1%d9%8a%d8%b9-2022",
          "permanent": true
      },
      {
          "source": "/courses/cake-decoration",
          "destination": "/course/%d8%aa%d8%b2%d9%8a%d9%8a%d9%86-%d8%a7%d9%84%d9%83%d9%8a%d9%83-%d8%a7%d9%84%d8%aa%d8%a3%d8%b3%d9%8a%d8%b3%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/paython",
          "destination": "/course/%d8%aa%d8%b9%d9%84%d9%85-%d9%84%d8%ba%d8%a9-%d8%a7%d9%84%d8%a8%d8%b1%d9%85%d8%ac%d8%a9-%d8%a8%d8%a7%d9%8a%d8%ab%d9%88%d9%86-%d9%85%d9%86-%d8%a7%d9%84%d8%a8%d8%af%d8%a7%d9%8a%d8%a9-%d9%88%d8%ad%d8%aa",
          "permanent": true
      },
      {
          "source": "/courses/icdl",
          "destination": "/course/%d8%a7%d9%84%d8%a3%d8%ad%d8%aa%d8%b1%d8%a7%d9%81%d9%8a%d8%a9-icdl-%d8%af%d9%88%d8%b1%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/amazon-kindle-kdp",
          "destination": "/course/amazon-kindle-kdp-%d8%af%d9%88%d8%b1%d8%a9-%d8%a3%d9%85%d8%a7%d8%b2%d9%88%d9%86-%d9%83%d9%8a%d9%86%d8%af%d9%84-%d8%a7%d9%84%d8%b4%d8%a7%d9%85%d9%84%d8%a9-%d9%84%d8%aa%d8%b5%d9%85%d9%8a%d9%85-%d9%88",
          "permanent": true
      },
      {
          "source": "/courses/translate-website-to-arabic",
          "destination": "/course/%d8%af%d9%88%d8%b1%d8%a9-%d8%a7%d9%84%d8%aa%d8%b9%d8%b1%d9%8a%d8%a8-%d8%a7%d9%84%d8%b4%d8%a7%d9%85%d9%84%d8%a9-%d9%84%d9%85%d9%88%d8%a7%d9%82%d8%b9-%d9%88%d9%82%d9%88%d8%a7%d9%84%d8%a8-%d8%a7%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/leading-businesses-course",
          "destination": "/course/%d8%b1%d9%8a%d8%a7%d8%af%d8%a9-%d8%a7%d9%84%d8%a3%d8%b9%d9%85%d8%a7%d9%84-%d9%85%d9%86-%d8%a7%d9%84%d9%81%d9%83%d8%b1%d8%a9-%d8%a5%d9%84%d9%89-%d8%a7%d9%84%d8%aa%d9%86%d9%81%d9%8a%d8%b0",
          "permanent": true
      },
      {
          "source": "/courses/manage-meetings",
          "destination": "/course/practical-secrets-to-productive-meetings",
          "permanent": true
      },
      {
          "source": "/courses/read-and-write-any-word-in-korean-in-an-hour",
          "destination": "/course/%d8%a5%d9%82%d8%b1%d8%a3-%d9%88-%d8%a3%d9%83%d8%aa%d8%a8-%d8%a3%d9%8a-%d9%83%d9%84%d9%85%d8%a9-%d8%a8%d8%a7%d9%84%d9%84%d8%ba%d8%a9-%d8%a7%d9%84%d9%83%d9%88%d8%b1%d9%8a%d8%a9-%d9%81%d9%8a-%d8%b3%d8%a7",
          "permanent": true
      },
      {
          "source": "/courses/financial-analysis-from-zero-to-professional",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d8%ad%d9%84%d9%8a%d9%84-%d8%a7%d9%84%d9%85%d8%a7%d9%84%d9%8a-%d9%85%d9%86-%d8%a7%d9%84%d8%b5%d9%81%d8%b1-%d8%ad%d8%aa%d9%89-%d8%a7%d9%84%d8%a7%d8%ad%d8%aa%d8%b1%d8%a7%d9%81",
          "permanent": true
      },
      {
          "source": "/courses/test-course-from-developer",
          "destination": "/course/test-course-from-developer",
          "permanent": true
      },
      {
          "source": "/courses/test-course-2",
          "destination": "/course/test-course-2",
          "permanent": true
      },
      {
          "source": "/courses/positive-parenting-secrets",
          "destination": "/course/%d8%a3%d8%b3%d8%b1%d8%a7%d8%b1-%d8%a7%d9%84%d8%aa%d8%b1%d8%a8%d9%8a%d8%a9-%d8%a7%d9%84%d8%a7%d9%8a%d8%ac%d8%a7%d8%a8%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/genius-industry",
          "destination": "/course/%d8%b5%d9%86%d8%a7%d8%b9%d8%a9-%d8%b9%d8%a8%d9%82%d8%b1%d9%8a-%d9%85%d9%85%d9%8a%d8%b2",
          "permanent": true
      },
      {
          "source": "/courses/how-to-be-professional-marketer",
          "destination": "/course/%d8%b5%d9%86%d8%a7%d8%b9%d8%a9-%d8%a7%d9%84%d9%85%d8%b3%d9%88%d9%82-%d8%a7%d9%84%d9%86%d8%a7%d8%ac%d8%ad",
          "permanent": true
      },
      {
          "source": "/courses/the-art-of-make-up-pink-cut-chris",
          "destination": "/course/%d9%81%d9%86-%d8%a7%d9%84%d9%85%d9%83%d9%8a%d8%a7%d8%ac-%d9%83%d8%aa-%d9%83%d8%b1%d9%8a%d8%b3-%d9%88%d8%b1%d8%af%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/english-course-level-2",
          "destination": "/course/%d8%a7%d8%b3%d8%a7%d8%b3%d9%8a%d8%a7%d8%aa-%d8%a7%d9%84%d8%a5%d9%86%d8%ac%d9%84%d9%8a%d8%b2%d9%8a%d8%a9-%d8%a7%d9%84%d9%85%d8%b3%d8%aa%d9%88%d9%89-%d8%a7%d9%84%d8%ab%d8%a7%d9%86%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/english-course-level-one",
          "destination": "/course/%d8%a7%d8%b3%d8%a7%d8%b3%d9%8a%d8%a7%d8%aa-%d8%a7%d9%84%d8%a5%d9%86%d8%ac%d9%84%d9%8a%d8%b2%d9%8a%d8%a9-%d8%a7%d9%84%d9%85%d8%b3%d8%aa%d9%88%d9%89-%d8%a7%d9%84%d8%a3%d9%88%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/how-to-make-decisions",
          "destination": "/course/%d9%83%d9%8a%d9%81%d9%8a%d8%a9-%d8%a7%d8%aa%d8%ae%d8%a7%d8%b0-%d8%a7%d9%84%d9%82%d8%b1%d8%a7%d8%b1%d8%a7%d8%aa",
          "permanent": true
      },
      {
          "source": "/courses/psychological-and-physical-recovery-in-the-postpartum",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d8%b9%d8%a7%d9%81%d9%8a-%d8%a7%d9%84%d9%86%d9%81%d8%b3%d9%8a-%d9%88%d8%a7%d9%84%d8%ac%d8%b3%d8%af%d9%8a-%d9%81%d9%8a-%d8%a7%d9%84%d9%86%d9%81%d8%a7%d8%b3",
          "permanent": true
      },
      {
          "source": "/courses/passion-and-intent-management",
          "destination": "/course/%d8%a5%d8%af%d8%a7%d8%b1%d8%a9-%d8%a7%d9%84%d8%b4%d8%ba%d9%81-%d9%88%d8%a7%d9%84%d8%b9%d8%b2%d9%8a%d9%85%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/freelancer",
          "destination": "/course/%d8%b3%d9%88%d8%a8%d8%b1-%d9%81%d8%b1%d9%8a%d9%84%d8%a7%d9%86%d8%b3%d8%b1-%d8%af%d8%a8%d9%84%d9%88%d9%85%d8%a9-%d8%b7%d8%b1%d9%8a%d9%82%d9%83-%d8%a5%d9%84%d9%89-%d8%a7%d9%84%d8%b9%d9%85%d9%84-%d8%a7",
          "permanent": true
      },
      {
          "source": "/courses/special-motherhood",
          "destination": "/course/%d9%81%d9%86-%d8%a7%d9%84%d8%a3%d9%85%d9%88%d9%85%d8%a9-%d8%a7%d9%84%d9%85%d9%85%d9%8a%d8%b2%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/home-electricity",
          "destination": "/course/%d8%aa%d8%b9%d9%84%d9%85-%d8%a3%d8%b3%d8%a7%d8%b3%d9%8a%d8%a7%d8%aa-%d8%a7%d9%84%d8%aa%d9%85%d8%af%d9%8a%d8%af%d8%a7%d8%aa-%d8%a7%d9%84%d9%83%d9%87%d8%b1%d8%a8%d8%a7%d8%a6%d9%8a%d8%a9-%d9%83%d9%87",
          "permanent": true
      },
      {
          "source": "/courses/personality-patterns",
          "destination": "/course/%d9%81%d9%86-%d8%a7%d9%84%d8%aa%d8%b9%d8%a7%d9%85%d9%84-%d9%85%d8%b9-%d8%a3%d9%86%d9%85%d8%a7%d8%b7-%d8%a7%d9%84%d8%b4%d8%ae%d8%b5%d9%8a%d8%a7%d8%aa",
          "permanent": true
      },
      {
          "source": "/courses/adobe-pr",
          "destination": "/course/%d8%a7%d9%84%d8%af%d9%88%d8%b1%d8%a9-%d8%a7%d9%84%d8%b4%d8%a7%d9%85%d9%84%d8%a9-%d9%84%d8%a8%d8%b1%d9%86%d8%a7%d9%85%d8%ac-%d8%a7%d8%af%d9%88%d8%a8%d9%8a-%d8%a8%d8%b1%d9%8a%d9%85%d9%8a%d8%b1-%d9%85",
          "permanent": true
      },
      {
          "source": "/courses/hypnobirth",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d8%ad%d8%b6%d9%8a%d8%b1-%d9%84%d9%84%d9%88%d9%84%d8%a7%d8%af%d8%a9-%d8%a7%d9%84%d8%b7%d8%a8%d9%8a%d8%b9%d9%8a%d8%a9-%d8%a7%d9%84%d8%a5%d9%8a%d8%ac%d8%a7%d8%a8%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/fashion-design",
          "destination": "/course/%d8%af%d9%88%d8%b1%d8%a9-%d8%aa%d8%b5%d9%85%d9%8a%d9%85-%d8%a7%d9%84%d8%a3%d8%b2%d9%8a%d8%a7%d8%a1-%d9%84%d9%84%d9%85%d8%a8%d8%aa%d8%af%d8%a6%d9%8a%d9%86",
          "permanent": true
      },
      {
          "source": "/courses/professional-coach-preparation",
          "destination": "/course/%d8%a7%d9%84%d8%a7%d8%b3%d8%a8%d9%88%d8%b9-%d8%a7%d9%84%d8%a7%d9%88%d9%84-%d8%a5%d8%b9%d8%af%d8%a7%d8%af-%d9%85%d8%af%d8%b1%d8%a8-%d9%85%d8%ad%d8%aa%d8%b1%d9%81",
          "permanent": true
      },
      {
          "source": "/courses/crisis-management",
          "destination": "/course/%d8%a5%d8%af%d8%a7%d8%b1%d8%a9-%d8%a7%d9%84%d8%a3%d8%b2%d9%85%d8%a7%d8%aa-%d8%a8%d8%a7%d9%84%d8%b3%d9%8a%d9%86%d8%a7%d8%b1%d9%8a%d9%88%d9%87%d8%a7%d8%aa",
          "permanent": true
      },
      {
          "source": "/courses/time-management",
          "destination": "/course/%d8%a5%d8%af%d8%a7%d8%b1%d8%a9-%d8%a7%d9%84%d9%88%d9%82%d8%aa-%d9%88%d8%b6%d8%ba%d9%88%d8%b7-%d8%a7%d9%84%d8%b9%d9%85%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/thinking-strategy",
          "destination": "/course/%d8%a3%d8%af%d9%88%d8%a7%d8%aa-%d9%88%d9%85%d9%87%d8%a7%d8%b1%d8%a7%d8%aa-%d8%a7%d9%84%d8%aa%d9%81%d9%83%d9%8a%d8%b1-%d8%a7%d9%84%d8%a7%d8%b3%d8%aa%d8%b1%d8%a7%d8%aa%d9%8a%d8%ac%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/investing-in-intelligence-theory",
          "destination": "/course/%d8%a7%d8%b3%d8%aa%d8%ab%d9%85%d8%a7%d8%b1-%d9%86%d8%b8%d8%b1%d9%8a%d8%a9-%d8%a7%d9%84%d8%b0%d9%83%d8%a7%d8%a1%d8%a7%d8%aa-%d8%a7%d9%84%d9%85%d8%aa%d8%b9%d8%af%d8%af%d8%a9-%d9%81%d9%8a-%d8%a7%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/foreseeing-the-future",
          "destination": "/course/%d8%a7%d8%b3%d8%aa%d8%b4%d8%b1%d8%a7%d9%81-%d8%a7%d9%84%d9%85%d8%b3%d8%aa%d9%82%d8%a8%d9%84-%d9%88%d8%a7%d9%84%d8%aa%d8%b9%d8%a7%d9%85%d9%84-%d9%85%d8%b9-%d8%a7%d9%84%d8%a3%d8%b2%d9%85%d8%a7%d8%aa",
          "permanent": true
      },
      {
          "source": "/courses/influence-for-leaders",
          "destination": "/course/%d8%a7%d9%84%d8%a5%d9%86%d8%ac%d8%a7%d8%b2-%d9%88%d8%a7%d9%84%d8%aa%d8%a3%d8%ab%d9%8a%d8%b1-%d9%84%d9%84%d9%82%d8%a7%d8%af%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/managers-devlopment",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d8%b7%d9%88%d9%8a%d8%b1-%d8%a7%d9%84%d9%85%d8%b3%d8%aa%d8%af%d8%a7%d9%85-%d9%84%d9%85%d8%af%d8%b1%d8%a7%d8%a1-%d8%a7%d9%84%d9%85%d9%83%d8%a7%d8%aa%d8%a8-%d9%88%d8%a7%d9%84%d8%a5",
          "permanent": true
      },
      {
          "source": "/courses/fashion-drawing-basics",
          "destination": "/course/%d8%a3%d8%b3%d8%a7%d8%b3%d9%8a%d8%a7%d8%aa-%d8%b1%d8%b3%d9%85-%d8%a7%d9%84%d8%a3%d8%b2%d9%8a%d8%a7%d8%a1-%d9%84%d9%84%d9%85%d8%a8%d8%aa%d8%af%d8%a6%d9%8a%d9%86",
          "permanent": true
      },
      {
          "source": "/courses/management-planning-and-goal-setting",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d8%ae%d8%b7%d9%8a%d8%b7-%d8%a7%d9%84%d8%a5%d8%af%d8%a7%d8%b1%d9%8a-%d9%88%d8%b5%d9%86%d8%a7%d8%b9%d8%a9-%d8%a7%d9%84%d8%a3%d9%87%d8%af%d8%a7%d9%81",
          "permanent": true
      },
      {
          "source": "/courses/strategic-and-operational-planning",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d8%ae%d8%b7%d9%8a%d8%b7-%d8%a7%d9%84%d8%a3%d8%b3%d8%aa%d8%b1%d8%a7%d8%aa%d9%8a%d8%ac%d9%8a-%d9%88%d8%a7%d9%84%d8%aa%d8%b4%d8%ba%d9%8a%d9%84%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/strategic-planning-according-to-the-fever-model",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d8%ae%d8%b7%d9%8a%d8%b7-%d8%a7%d9%84%d8%a7%d8%b3%d8%aa%d8%b1%d8%a7%d8%aa%d9%8a%d8%ac%d9%8a-%d9%88%d9%81%d9%82-%d9%86%d9%85%d9%88%d8%b0%d8%ac-%d9%81%d9%8a%d9%81%d8%b1",
          "permanent": true
      },
      {
          "source": "/courses/interior-design",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d8%b5%d9%85%d9%8a%d9%85-%d8%a7%d9%84%d8%af%d8%a7%d8%ae%d9%84%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/enneagram",
          "destination": "/course/%d8%a7%d9%84%d8%a5%d9%86%d9%8a%d8%a7%d8%ac%d8%b1%d8%a7%d9%85",
          "permanent": true
      },
      {
          "source": "/courses/theoretical-basics-of-management-science",
          "destination": "/course/%d8%a7%d9%84%d8%a3%d8%b3%d8%a7%d8%b3%d9%8a%d8%a7%d8%aa-%d8%a7%d9%84%d9%86%d8%b8%d8%b1%d9%8a%d8%a9-%d9%84%d8%b9%d9%84%d9%85-%d8%a7%d9%84%d8%a5%d8%af%d8%a7%d8%b1%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/self-esteem",
          "destination": "/course/%d8%aa%d9%82%d8%af%d9%8a%d8%b1-%d8%a7%d9%84%d8%b0%d8%a7%d8%aa",
          "permanent": true
      },
      {
          "source": "/courses/ai",
          "destination": "/course/%d8%a7%d9%84%d8%b0%d9%83%d8%a7%d8%a1-%d8%a7%d9%84%d8%a7%d8%b5%d8%b7%d9%86%d8%a7%d8%b9%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/emotional-intelligence-in-the-work-environment",
          "destination": "/course/%d8%a7%d9%84%d8%b0%d9%83%d8%a7%d8%a1-%d8%a7%d9%84%d8%b9%d8%a7%d8%b7%d9%81%d9%8a-%d9%81%d9%8a-%d8%a8%d9%8a%d8%a6%d8%a9-%d8%a7%d9%84%d8%b9%d9%85%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/communication-skill",
          "destination": "/course/%d9%85%d9%87%d8%a7%d8%b1%d8%a7%d8%aa-%d8%a7%d9%84%d8%aa%d9%88%d8%a7%d8%b5%d9%84-%d9%85%d8%a7-%d9%8a%d8%ac%d8%a8-%d8%a3%d9%86-%d8%aa%d8%b9%d8%b1%d9%81%d9%87",
          "permanent": true
      },
      {
          "source": "/courses/leaders-skills-basics",
          "destination": "/course/%d8%a3%d8%b3%d8%a7%d8%b3%d9%8a%d8%a7%d8%aa-%d9%85%d9%87%d8%a7%d8%b1%d8%a7%d8%aa-%d8%a7%d9%84%d9%82%d9%8a%d8%a7%d8%af%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/emotional-intelligence-and-leadership",
          "destination": "/course/%d8%a7%d9%84%d8%b0%d9%83%d8%a7%d8%a1-%d8%a7%d9%84%d8%b9%d8%a7%d8%b7%d9%81%d9%8a-%d9%88%d8%a7%d9%84%d9%82%d9%8a%d8%a7%d8%af%d8%a9-2",
          "permanent": true
      },
      {
          "source": "/courses/creative-thinking-in-strategic-leadership",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d9%81%d9%83%d9%8a%d8%b1-%d8%a7%d9%84%d8%a5%d8%a8%d8%af%d8%a7%d8%b9%d9%8a-%d9%81%d9%8a-%d8%a7%d9%84%d9%82%d9%8a%d8%a7%d8%af%d8%a9-%d8%a7%d9%84%d8%a5%d8%b3%d8%aa%d8%b1%d8%a7%d8%aa-2",
          "permanent": true
      },
      {
          "source": "/courses/the-complete-guide-to-web-design",
          "destination": "/course/%d8%a7%d9%84%d8%af%d9%84%d9%8a%d9%84-%d8%a7%d9%84%d8%b4%d8%a7%d9%85%d9%84-%d9%81%d9%8a-%d8%aa%d8%b5%d9%85%d9%8a%d9%85-%d8%a7%d9%84%d9%85%d9%88%d8%a7%d9%82%d8%b9",
          "permanent": true
      },
      {
          "source": "/courses/effective-techniques-in-reporting-and-data-analysis",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d9%82%d9%86%d9%8a%d8%a7%d8%aa-%d8%a7%d9%84%d9%81%d8%b9%d8%a7%d9%84%d8%a9-%d9%81%d9%8a-%d8%a5%d8%b9%d8%af%d8%a7%d8%af-%d8%a7%d9%84%d8%aa%d9%82%d8%a7%d8%b1%d9%8a%d8%b1-%d9%88%d8%aa-2",
          "permanent": true
      },
      {
          "source": "/courses/how-to-be-an-influential-trainer",
          "destination": "/course/%d8%af%d9%88%d8%b1%d8%a9-%d8%aa%d8%af%d8%b1%d9%8a%d8%a8-%d8%a7%d9%84%d9%85%d8%af%d8%b1%d8%a8%d9%8a%d9%86-%d9%83%d9%8a%d9%81-%d8%aa%d9%83%d9%88%d9%86-%d9%85%d8%af%d8%b1%d8%a8%d8%a7-%d9%85%d8%a4%d8%ab",
          "permanent": true
      },
      {
          "source": "/courses/third-week",
          "destination": "/course/%d8%a7%d9%84%d8%a7%d8%b3%d8%a8%d9%88%d8%b9-%d8%a7%d9%84%d8%ab%d8%a7%d9%84%d8%ab-%d8%a5%d8%b9%d8%af%d8%a7%d8%af-%d9%85%d8%af%d8%b1%d8%a8-%d9%85%d8%ad%d8%aa%d8%b1%d9%81",
          "permanent": true
      },
      {
          "source": "/courses/second-week-2",
          "destination": "/course/%d8%a7%d9%84%d8%a7%d8%b3%d8%a8%d9%88%d8%b9-%d8%a7%d9%84%d8%ab%d8%a7%d9%86%d9%8a-%d8%a5%d8%b9%d8%af%d8%a7%d8%af-%d9%85%d8%af%d8%b1%d8%a8-%d9%85%d8%ad%d8%aa%d8%b1%d9%81",
          "permanent": true
      },
      {
          "source": "/courses/active-learning-strategies",
          "destination": "/course/%d8%a7%d8%b3%d8%aa%d8%b1%d8%a7%d8%aa%d9%8a%d8%ac%d9%8a%d8%a7%d8%aa-%d8%a7%d9%84%d8%aa%d8%b9%d9%84%d9%85-%d8%a7%d9%84%d9%86%d8%b4%d8%b7",
          "permanent": true
      },
      {
          "source": "/courses/happiness",
          "destination": "/course/%d9%87%d9%86%d8%af%d8%b3%d8%a9-%d8%a7%d9%84%d8%b3%d8%b9%d8%a7%d8%af%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/classroom-management-and-problem-solving",
          "destination": "/course/%d8%a7%d9%84%d8%a5%d8%af%d8%a7%d8%b1%d8%a9-%d8%a7%d9%84%d8%b5%d9%81%d9%8a%d8%a9-%d9%88%d8%ad%d9%84-%d8%a7%d9%84%d9%85%d8%b4%d9%83%d9%84%d8%a7%d8%aa",
          "permanent": true
      },
      {
          "source": "/courses/individual-differences-among-primary-school-students",
          "destination": "/course/%d8%a7%d9%84%d9%81%d8%b1%d9%88%d9%82-%d8%a7%d9%84%d9%81%d8%b1%d8%af%d9%8a%d8%a9-%d8%a8%d9%8a%d9%86-%d8%b7%d9%84%d8%a7%d8%a8-%d8%a7%d9%84%d9%85%d8%b1%d8%ad%d9%84%d8%a9-%d8%a7%d9%84%d8%a7%d8%a8%d8%aa",
          "permanent": true
      },
      {
          "source": "/courses/bullying-and-how-to-tackle-it",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d9%86%d9%85%d8%b1-%d9%88%d9%83%d9%8a%d9%81%d9%8a%d8%a9-%d8%a7%d9%84%d8%aa%d8%b5%d8%af%d9%8a-%d9%84%d9%87",
          "permanent": true
      },
      {
          "source": "/courses/traits-of-a-successful-teacher",
          "destination": "/course/%d8%b5%d9%81%d8%a7%d8%aa-%d8%a7%d9%84%d9%85%d8%b9%d9%84%d9%85-%d8%a7%d9%84%d9%86%d8%a7%d8%ac%d8%ad",
          "permanent": true
      },
      {
          "source": "/courses/how-do-i-deal-with-students",
          "destination": "/course/%d9%83%d9%8a%d9%81-%d8%a3%d8%aa%d8%b9%d8%a7%d9%85%d9%84-%d9%85%d8%b9-%d8%a7%d9%84%d8%b7%d9%84%d8%a7%d8%a8-%d9%88%d9%81%d9%82%d8%a7-%d9%84%d8%b0%d9%83%d8%a7%d8%a1%d8%a7%d8%aa%d9%87%d9%85",
          "permanent": true
      },
      {
          "source": "/courses/fourth-week",
          "destination": "/course/%d8%a7%d9%84%d8%a3%d8%b3%d8%a8%d9%88%d8%b9-%d8%a7%d9%84%d8%b1%d8%a7%d8%a8%d8%b9-%d8%a8%d8%b1%d9%86%d8%a7%d9%85%d8%ac-%d8%a5%d8%b9%d8%af%d8%a7%d8%af-%d9%85%d8%af%d8%b1%d8%a8-%d9%85%d8%ad%d8%aa%d8%b1",
          "permanent": true
      },
      {
          "source": "/courses/child-sex-education",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d8%b1%d8%a8%d9%8a%d8%a9-%d8%a7%d9%84%d8%ac%d9%86%d8%b3%d9%8a%d8%a9-%d9%84%d9%84%d8%a3%d8%b7%d9%81%d8%a7%d9%84-%d9%88%d8%a7%d9%84%d9%85%d8%b1%d8%a7%d9%87%d9%82%d9%8a%d9%86",
          "permanent": true
      },
      {
          "source": "/courses/gsm",
          "destination": "/course/%d8%b4%d8%a8%d9%83%d8%a7%d8%aa-%d8%a7%d9%84%d8%ac%d9%8a%d9%84-%d8%a7%d9%84%d8%ab%d8%a7%d9%86%d9%8a-%d9%84%d9%84%d9%87%d9%88%d8%a7%d8%aa%d9%81-%d8%a7%d9%84%d9%86%d9%82%d8%a7%d9%84%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/3g",
          "destination": "/course/%d8%b4%d8%a8%d9%83%d8%a7%d8%aa-%d8%a7%d9%84%d8%ac%d9%8a%d9%84-%d8%a7%d9%84%d8%ab%d8%a7%d9%84%d8%ab-%d9%84%d9%84%d9%87%d9%88%d8%a7%d8%aa%d9%81-%d8%a7%d9%84%d9%86%d9%82%d8%a7%d9%84%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/english-language",
          "destination": "/course/%d8%aa%d8%a3%d8%b3%d9%8a%d8%b3-%d8%a7%d9%84%d9%84%d8%ba%d8%a9-%d8%a7%d9%84%d8%a5%d9%86%d8%ac%d9%84%d9%8a%d8%b2%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/six-segma",
          "destination": "/course/%d8%a7%d8%ae%d8%b5%d8%a7%d8%a6%d9%8a-%d8%b3%d8%af%d8%a7%d8%b3%d9%8a%d8%a9-%d8%b3%d9%8a%d8%ac%d9%85%d8%a7-%d9%85%d8%b3%d8%aa%d9%88%d9%89-%d8%a7%d9%84%d8%ad%d8%b2%d8%a7%d9%85-%d8%a7%d9%84%d8%a7%d8%b5",
          "permanent": true
      },
      {
          "source": "/courses/clothes-arrangement",
          "destination": "/course/%d9%81%d9%86-%d8%aa%d9%86%d8%b3%d9%8a%d9%82-%d8%a7%d9%84%d9%85%d9%84%d8%a7%d8%a8%d8%b3-%d9%84%d8%a7%d8%b7%d9%84%d8%a7%d9%84%d8%a9-%d9%85%d9%85%d9%8a%d8%b2%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/how-do-i-choose-a-training-course",
          "destination": "/course/%d9%83%d9%8a%d9%81-%d8%a3%d9%86%d8%aa%d9%82%d9%8a-%d8%af%d9%88%d8%b1%d8%a9-%d8%aa%d8%af%d8%b1%d9%8a%d8%a8%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/crisis-media-management",
          "destination": "/course/%d8%a7%d9%84%d8%a5%d8%af%d8%a7%d8%b1%d8%a9-%d8%a7%d9%84%d8%a5%d8%b9%d9%84%d8%a7%d9%85%d9%8a%d8%a9-%d9%84%d9%84%d8%a3%d8%b2%d9%85%d8%a7%d8%aa",
          "permanent": true
      },
      {
          "source": "/courses/merit-and-self-esteem",
          "destination": "/course/%d8%a7%d9%84%d8%a5%d8%b3%d8%aa%d8%ad%d9%82%d8%a7%d9%82-%d9%88%d8%aa%d9%82%d8%af%d9%8a%d8%b1-%d8%a7%d9%84%d8%b0%d8%a7%d8%aa",
          "permanent": true
      },
      {
          "source": "/courses/how-to-create-a-professional-e-course",
          "destination": "/course/%d9%83%d9%8a%d9%81%d9%8a%d8%a9-%d8%a5%d9%86%d8%b4%d8%a7%d8%a1-%d8%af%d9%88%d8%b1%d8%a9-%d8%a5%d9%84%d9%83%d8%aa%d8%b1%d9%88%d9%86%d9%8a%d8%a9-%d8%a5%d8%ad%d8%aa%d8%b1%d8%a7%d9%81%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/cognitive-behavioral-counseling",
          "destination": "/course/%d8%a7%d9%84%d8%a5%d8%b1%d8%b4%d8%a7%d8%af-%d8%a7%d9%84%d9%85%d8%b9%d8%b1%d9%81%d9%8a-%d8%a7%d9%84%d8%b3%d9%84%d9%88%d9%83%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/language-correction",
          "destination": "/course/%d8%aa%d9%88%d8%ac%d9%87%d8%a7%d8%aa-%d9%81%d9%8a-%d8%a7%d9%84%d8%aa%d8%b5%d8%ad%d9%8a%d8%ad-%d8%a7%d9%84%d9%84%d8%ba%d9%88%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/creativity-in-the-skills-persuasion-maid",
          "destination": "/course/%d8%a7%d9%84%d8%a5%d8%a8%d8%af%d8%a7%d8%b9-%d9%81%d9%8a-%d9%85%d9%87%d8%a7%d8%b1%d8%a7%d8%aa-%d8%a7%d9%84%d8%a5%d9%82%d9%86%d8%a7%d8%b9-%d9%85%d8%b9%d9%8a%d8%b6",
          "permanent": true
      },
      {
          "source": "/courses/design-your-home",
          "destination": "/course/%d9%85%d9%86%d8%b2%d9%84-%d8%a3%d8%ad%d9%84%d8%a7%d9%85%d9%83-%d9%85%d9%86-%d8%a7%d9%84%d8%aa%d8%b5%d9%85%d9%8a%d9%85-%d8%a5%d9%84%d9%89-%d8%a7%d9%84%d8%aa%d8%a3%d8%ab%d9%8a%d8%ab",
          "permanent": true
      },
      {
          "source": "/courses/corporate-growth-and-profits-2",
          "destination": "/course/%d9%86%d9%85%d9%88-%d9%88%d8%a7%d8%b1%d8%a8%d8%a7%d8%ad-%d8%a7%d9%84%d8%b4%d8%b1%d9%83%d8%a7%d8%aa-%d9%85%d9%86-%d9%85%d9%86%d8%b8%d9%88%d8%b1",
          "permanent": true
      },
      {
          "source": "/courses/arabic-basics",
          "destination": "/course/%d8%a3%d8%b3%d8%a7%d8%b3%d9%8a%d8%a7%d8%aa-%d8%a7%d9%84%d9%84%d8%ba%d8%a9-%d8%a7%d9%84%d8%b9%d8%b1%d8%a8%d9%8a%d8%a9-%d9%88%d8%a7%d9%84%d8%aa%d8%ad%d8%b1%d9%8a%d8%b1-%d9%84%d9%84%d8%a5%d8%b9%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/how-to-start-my-own-business",
          "destination": "/course/%d9%83%d9%8a%d9%81-%d8%a3%d8%a8%d8%af%d8%a3-%d9%85%d8%b4%d8%b1%d9%88%d8%b9%d9%8a-%d8%a7%d9%84%d9%85%d9%86%d8%b2%d9%84%d9%8a-%d8%a7%d9%84%d8%b5%d8%ba%d9%8a%d8%b1",
          "permanent": true
      },
      {
          "source": "/courses/diploma-programming-neurolinguistics-npl",
          "destination": "/course/nlp-%d8%af%d8%a8%d9%84%d9%88%d9%85-%d8%a7%d9%84%d8%a8%d8%b1%d9%85%d8%ac%d8%a9-%d8%a7%d9%84%d9%84%d8%ba%d9%88%d9%8a%d8%a9-%d8%a7%d9%84%d8%b9%d8%b5%d8%a8%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/game-of-happiness",
          "destination": "/course/%d9%84%d8%b9%d8%a8%d8%a9-%d8%a7%d9%84%d8%b3%d8%b9%d8%a7%d8%af%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/the-sales-specialists",
          "destination": "/course/%d8%b1%d8%ad%d9%84%d8%a9-%d9%85%d8%aa%d8%ae%d8%b5%d8%b5-%d8%a7%d9%84%d9%85%d8%a8%d9%8a%d8%b9%d8%a7%d8%aa-%d9%85%d8%b9-%d8%a7%d9%84%d8%b9%d9%85%d9%8a%d9%84-%d9%81%d9%8a-%d8%b9%d8%a7%d9%84%d9%85-%d8%a7",
          "permanent": true
      },
      {
          "source": "/courses/management-by-results",
          "destination": "/course/%d8%a7%d9%84%d8%a5%d8%af%d8%a7%d8%b1%d8%a9-%d8%a8%d8%a7%d9%84%d9%86%d8%aa%d8%a7%d8%a6%d8%ac-%d9%88%d8%a7%d9%84%d9%82%d9%8a%d8%a7%d8%af%d8%a9-%d8%a8%d8%a7%d9%84%d8%aa%d8%ad%d8%af%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/silk-printing",
          "destination": "/course/%d8%a7%d9%84%d8%b7%d8%a8%d8%a7%d8%b9%d8%a9-%d8%a7%d9%84%d8%ad%d8%b1%d9%8a%d8%b1%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/ppt",
          "destination": "/course/%d8%a3%d8%a8%d8%ac%d8%af%d9%8a%d8%a7%d8%aa-%d8%a8%d9%88%d8%b1%d8%a8%d9%88%d9%8a%d9%86%d8%aa",
          "permanent": true
      },
      {
          "source": "/courses/creating-positivity",
          "destination": "/course/%d8%b5%d9%86%d8%a7%d8%b9%d8%a9-%d8%a7%d9%84%d8%a5%d9%8a%d8%ac%d8%a7%d8%a8%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/power-bi-in-38-mins",
          "destination": "/course/%d8%aa%d8%b9%d9%84%d9%85-%d8%a7%d9%84%d8%a8%d9%88%d8%b1-%d8%a8%d9%8a-%d8%a7%d9%8a-%d9%81%d9%8a-38-%d8%af%d9%82%d9%8a%d9%82%d8%a9-power-bi-in-38-mins",
          "permanent": true
      },
      {
          "source": "/courses/to-my-daughter",
          "destination": "/course/%d8%a5%d9%84%d9%89-%d8%a8%d9%86%d8%aa%d9%8a-%d8%a7%d9%84%d8%ba%d8%a7%d9%84%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/stimulus-power",
          "destination": "/course/%d9%82%d9%88%d8%a9-%d8%a7%d9%84%d8%aa%d8%ad%d9%81%d9%8a%d8%b2",
          "permanent": true
      },
      {
          "source": "/courses/montessori-education-from-3-6-years",
          "destination": "/course/%d9%85%d9%86%d9%87%d8%ac-%d9%85%d9%88%d9%86%d8%aa%d9%8a%d8%b3%d9%88%d8%b1%d9%8a-%d9%85%d9%86-3-6-%d8%b3%d9%86%d9%88%d8%a7%d8%aa",
          "permanent": true
      },
      {
          "source": "/courses/before-you-start-your-first-project",
          "destination": "/course/%d9%82%d8%a8%d9%84-%d8%a3%d9%86-%d8%aa%d8%a8%d8%af%d8%a3-%d9%85%d8%b4%d8%b1%d9%88%d8%b9%d9%83-%d8%a7%d9%84%d8%a3%d9%88%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/learn-java-programming-from-zero-to-advanced",
          "destination": "/course/%d8%aa%d8%b9%d9%84%d9%85-%d8%a7%d9%84%d8%a8%d8%b1%d9%85%d8%ac%d8%a9-%d8%a8%d9%84%d8%ba%d8%a9-%d8%ac%d8%a7%d9%81%d8%a7-%d9%85%d9%86-%d8%a7%d9%84%d8%b5%d9%81%d8%b1-%d8%a5%d9%84%d9%89-%d9%85%d8%b1%d8%ad",
          "permanent": true
      },
      {
          "source": "/courses/practical-steps-towards-a-refined-appearance",
          "destination": "/course/%d8%ae%d8%b7%d9%88%d8%a7%d8%aa-%d8%b9%d9%85%d9%84%d9%8a%d8%a9-%d9%86%d8%ad%d9%88-%d8%a7%d9%84%d9%85%d8%b8%d9%87%d8%b1-%d8%a7%d9%84%d8%b1%d8%a7%d9%82%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/managing-stress-and-psychological-burdens",
          "destination": "/course/%d8%a5%d8%af%d8%a7%d8%b1%d8%a9-%d8%a7%d9%84%d8%b6%d8%ba%d9%88%d8%b7-%d9%88%d8%a7%d9%84%d8%a3%d8%b9%d8%a8%d8%a7%d8%a1-%d8%a7%d9%84%d9%86%d9%81%d8%b3%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/how-do-i-earn-from-cryptocurrencies",
          "destination": "/course/%d9%83%d9%8a%d9%81-%d8%a3%d8%b1%d8%a8%d8%ad-%d9%85%d9%86-%d8%a7%d9%84%d8%b9%d9%85%d9%84%d8%a7%d8%aa-%d8%a7%d9%84%d8%b1%d9%82%d9%85%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/strategic-planning-skills",
          "destination": "/course/%d9%85%d9%87%d8%a7%d8%b1%d8%a7%d8%aa-%d8%a7%d9%84%d8%aa%d8%ae%d8%b7%d9%8a%d8%b7-%d8%a7%d9%84%d8%a7%d8%b3%d8%aa%d8%b1%d8%a7%d8%aa%d9%8a%d8%ac%d9%8a-%d9%85%d9%86-%d8%a7%d9%84%d8%a8%d8%af%d8%a7%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/successful-trading-in-the-corona",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d8%af%d8%a7%d9%88%d9%84-%d8%a7%d9%84%d9%86%d8%a7%d8%ac%d8%ad-%d9%81%d9%8a-%d8%a3%d8%b2%d9%85%d8%a9-%d9%83%d9%88%d8%b1%d9%88%d9%86%d8%a7",
          "permanent": true
      },
      {
          "source": "/courses/self-stimulation",
          "destination": "/course/%d9%81%d9%86-%d8%a7%d9%84%d8%aa%d8%ad%d9%81%d9%8a%d8%b2-%d8%a7%d9%84%d8%b0%d8%a7%d8%aa%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/think-positive-in-the-work",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d9%81%d9%83%d9%8a%d8%b1-%d8%a7%d9%84%d8%a5%d9%8a%d8%ac%d8%a7%d8%a8%d9%8a-%d9%81%d9%8a-%d8%a8%d9%8a%d8%a6%d8%a9-%d8%a7%d9%84%d8%b9%d9%85%d9%84",
          "permanent": true
      },
      {
          "source": "/courses/personal-quality",
          "destination": "/course/%d8%a3%d8%b5%d9%86%d8%b9-%d8%ac%d9%88%d8%af%d8%aa%d9%83-%d8%a7%d9%84%d8%b4%d8%ae%d8%b5%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/4g",
          "destination": "/course/%d8%b4%d8%a8%d9%83%d8%a7%d8%aa-%d8%a7%d9%84%d8%ac%d9%8a%d9%84-%d8%a7%d9%84%d8%b1%d8%a7%d8%a8%d8%b9-%d9%84%d9%84%d9%87%d9%88%d8%a7%d8%aa%d9%81-%d8%a7%d9%84%d9%86%d9%82%d8%a7%d9%84%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/5g",
          "destination": "/course/%d8%b4%d8%a8%d9%83%d8%a7%d8%aa-%d8%a7%d9%84%d8%ac%d9%8a%d9%84-%d8%a7%d9%84%d8%ae%d8%a7%d9%85%d8%b3-%d9%84%d9%84%d9%87%d9%88%d8%a7%d8%aa%d9%81-%d8%a7%d9%84%d9%86%d9%82%d8%a7%d9%84%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/emotional",
          "destination": "/course/%d8%a7%d9%84%d8%b0%d9%83%d8%a7%d8%a1-%d8%a7%d9%84%d8%b9%d8%a7%d8%b7%d9%81%d9%8a-%d9%88%d8%a7%d9%84%d9%82%d9%8a%d8%a7%d8%af%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/creative-thinking",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d9%81%d9%83%d9%8a%d8%b1-%d8%a7%d9%84%d8%a5%d8%a8%d8%af%d8%a7%d8%b9%d9%8a-%d9%81%d9%8a-%d8%a7%d9%84%d9%82%d9%8a%d8%a7%d8%af%d8%a9-%d8%a7%d9%84%d8%a5%d8%b3%d8%aa%d8%b1%d8%a7%d8%aa",
          "permanent": true
      },
      {
          "source": "/courses/effective-techniques",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d9%82%d9%86%d9%8a%d8%a7%d8%aa-%d8%a7%d9%84%d9%81%d8%b9%d8%a7%d9%84%d8%a9-%d9%81%d9%8a-%d8%a5%d8%b9%d8%af%d8%a7%d8%af-%d8%a7%d9%84%d8%aa%d9%82%d8%a7%d8%b1%d9%8a%d8%b1-%d9%88%d8%aa",
          "permanent": true
      },
      {
          "source": "/courses/european-model-of-quality",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d9%85%d9%8a%d8%b2-%d8%a7%d9%84%d9%85%d8%a4%d8%b3%d8%b3%d9%8a-%d9%85%d9%86-%d8%ae%d9%84%d8%a7%d9%84-%d8%a7%d9%84%d9%86%d9%85%d9%88%d8%b0%d8%ac-%d8%a7%d9%84%d8%a7%d8%b1%d9%88%d8%a8",
          "permanent": true
      },
      {
          "source": "/courses/risk-management",
          "destination": "/course/%d8%a7%d9%84%d8%ad%d9%88%d9%83%d9%85%d8%a9-%d8%a7%d9%84%d9%85%d8%aa%d9%82%d8%af%d9%85%d8%a9-%d9%88%d8%a5%d8%af%d8%a7%d8%b1%d8%a9-%d8%a7%d9%84%d9%85%d8%ae%d8%a7%d8%b7%d8%b1-%d9%88%d8%a7%d9%84%d8%a3",
          "permanent": true
      },
      {
          "source": "/courses/loyalty-in-marketing",
          "destination": "/course/%d8%a7%d9%84%d9%88%d9%84%d8%a7%d8%a1-%d9%81%d9%8a-%d8%a7%d9%84%d8%aa%d8%b3%d9%88%d9%8a%d9%82",
          "permanent": true
      },
      {
          "source": "/courses/start-your-youtube-channel-on-your-mobile-phone",
          "destination": "/course/%d8%a7%d8%a8%d8%af%d8%a3-%d9%82%d9%86%d8%a7%d8%aa%d9%83-%d8%b9%d9%84%d9%89-%d9%8a%d9%88%d8%aa%d9%8a%d9%88%d8%a8-%d9%85%d9%86-%d8%ae%d9%84%d8%a7%d9%84-%d9%87%d8%a7%d8%aa%d9%81%d9%83-%d8%a7%d9%84%d9%85",
          "permanent": true
      },
      {
          "source": "/courses/7-steps-to-write-a-report",
          "destination": "/course/%d8%b3%d8%a8%d8%b9-%d8%ae%d8%b7%d9%88%d8%a7%d8%aa-%d9%84%d9%83%d8%aa%d8%a7%d8%a8%d8%a9-%d8%a7%d9%84%d8%aa%d9%82%d8%a7%d8%b1%d9%8a%d8%b1",
          "permanent": true
      },
      {
          "source": "/courses/real-motherhood",
          "destination": "/course/%d8%a7%d9%84%d8%a3%d9%85%d9%88%d9%85%d8%a9-%d8%a7%d9%84%d8%ad%d9%82%d9%8a%d9%82%d9%8a%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/professional-wordpress-sites",
          "destination": "/course/%d8%a7%d9%84%d8%af%d9%88%d8%b1%d8%a9-%d8%a7%d9%84%d8%a7%d8%ad%d8%aa%d8%b1%d8%a7%d9%81%d9%8a%d8%a9-%d9%84%d9%85%d9%88%d8%a7%d9%82%d8%b9-%d8%a7%d9%84%d9%88%d9%88%d8%b1%d8%af-%d8%a8%d8%b1%d9%8a%d8%b3",
          "permanent": true
      },
      {
          "source": "/courses/grass-womens-nutritional-needs-during-pregnancy",
          "destination": "/course/%d8%ba%d8%b1%d8%a7%d8%b3-%d8%a7%d8%ad%d8%aa%d9%8a%d8%a7%d8%ac%d8%a7%d8%aa-%d8%a7%d9%84%d9%85%d8%b1%d8%a3%d8%a9-%d8%a7%d9%84%d8%ba%d8%b0%d8%a7%d8%a6%d9%8a%d8%a9-%d9%81%d9%8a-%d9%81%d8%aa%d8%b1%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/word-of-mouth-marketing",
          "destination": "/course/%d8%a7%d9%84%d8%aa%d8%b3%d9%88%d9%8a%d9%82-%d8%a7%d9%84%d8%b4%d9%81%d9%87%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/inner-child-treatment-program",
          "destination": "/course/%d8%a8%d8%b1%d9%86%d8%a7%d9%85%d8%ac-%d8%b9%d9%84%d8%a7%d8%ac-%d8%a7%d9%84%d8%b7%d9%81%d9%84-%d8%a7%d9%84%d8%af%d8%a7%d8%ae%d9%84%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/emotional-intelligence-workshop",
          "destination": "/course/%d9%88%d8%b1%d8%b4%d8%a9-%d8%a7%d9%84%d8%b0%d9%83%d8%a7%d8%a1-%d8%a7%d9%84%d8%b9%d8%a7%d8%b7%d9%81%d9%8a",
          "permanent": true
      },
      {
          "source": "/courses/tai-chi-chuan",
          "destination": "/course/%d8%aa%d8%a7%d9%8a-%d8%aa%d8%b4%d9%8a-%d9%84%d9%84%d8%b7%d8%a7%d9%82%d8%a9",
          "permanent": true
      },
      {
          "source": "/courses/",
          "destination": "/course/%d8%a3%d8%ad%d8%aa%d8%b1%d9%81-%d8%a8%d8%b1%d9%86%d8%a7%d9%85%d8%ac-%d8%a7%d9%84%d8%a3%d9%83%d8%b3%d9%84-%d9%85%d9%86-%d8%a7%d9%84%d8%a8%d8%af%d8%a7%d9%8a%d8%a9-%d8%ad%d8%aa%d9%8a-%d8%a7%d9%84%d8%a7",
          "permanent": true
      }
  ]
  },

}
