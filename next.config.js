/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    allowFutureImage: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.thecocktaildb.com",
        port: "",
        pathname: "/images/media/drink/**",
      },
    ],
    //or
    domains: ["images.unsplash.com", "media.wired.com"],
  },
};

module.exports = nextConfig;
