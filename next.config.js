/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // Use the faster SWC compiler for minification
  compress: true, // Enable gzip compression for responses
  poweredByHeader: false, // Remove the 'X-Powered-By' header
};

module.exports = withBundleAnalyzer(nextConfig);