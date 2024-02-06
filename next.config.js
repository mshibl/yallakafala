const withNextIntl = require("next-intl/plugin")();
/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["drive.google.com"],
  },
};

module.exports = withNextIntl(nextConfig);
