const withNextIntl = require("next-intl/plugin")();
/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
        port: "",
      },
    ],
  },
};

module.exports = withNextIntl(nextConfig);
