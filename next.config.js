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
        source: '/signup',
        destination: '/SignUp',
      },
      {
        source: '/signin',
        destination: '/SignIn',
      },
      {
        source: '/course/:path*',
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
        destination: '/Category',
      },
      {
        source: '/topic/:path*',
        destination: '/SubCategory',
      },
      {
        source: '/forgetpassword',
        destination: '/ForgetPassword',
      },
      {
        source: '/joinusasatrainer',
        destination: '/JoinAsATrainer',
      },
      {
        source: '/resetpassword',
        destination: '/ResetPassword',
      },
      {
        source: '/subscription',
        destination: '/TadarabSubscription',
      },
      {
        source: '/transactioninprogress',
        destination: '/TransactionInProgress',
      },
    ]
  },
}
