/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/payment/:token",
        destination:
          "https://app.sandbox.midtrans.com/snap/v3/redirection/:token",
        permanent: false,
      },
    ];
  },
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["bookstorealtagroupproject.s3.ap-southeast-1.amazonaws.com"],
  },
};

module.exports = nextConfig;
