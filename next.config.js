/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["bookstorealtagroupproject.s3.ap-southeast-1.amazonaws.com"],
  },
};

module.exports = nextConfig;
