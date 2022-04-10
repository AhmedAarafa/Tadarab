/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: false,
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
        destination: '/CourseDetails/:path*',
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
        source: '/forget-password',
        destination: '/ForgetPassword',
      },
      {
        source: '/join-us-as-a-trainer',
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
        source: '/privacy',
        destination: '/Privacy',
      },
    ]
  },
}
