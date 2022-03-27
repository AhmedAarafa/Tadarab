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
        destination: '/Checkout',
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
    ]
  },
}
