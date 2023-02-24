/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");


module.exports = {
  images: {
    domains: ["cdn.alibaba.ir"],
  },
  i18n
}