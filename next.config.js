/** @type {import('next').NextConfig} */
// next.config.js
// const { i18n } = require("./next-i18next.config");



module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
  
    return config;
  },
  images: {
    domains: ["cdn.alibaba.ir"],
  },
  i18n: {
    defaultLocale: "fa",
    locales: ["fa", "en"],
    localePath: "./locales",
    localeDetection: false
  },
}