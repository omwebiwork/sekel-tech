/* @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    STRAPI_PATH: "https://strapi.sekel.tech/api",
    STRAPI_URL: "https://strapi.sekel.tech",
    // STRAPI_PATH_STG : "https://strapi.sekel.tech/api",
    // STRAPI_URL_STG : "https://strapi.sekel.tech",
  },
};

export default nextConfig;
