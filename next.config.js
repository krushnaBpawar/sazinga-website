/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/platform",
        destination: "/product",
        permanent: true,
      },
      {
        source: "/products",
        destination: "/product",
        permanent: true,
      },
      {
        source: "/reconciliation",
        destination: "/product/reconciliation",
        permanent: true,
      },
      {
        source: "/data-preparation",
        destination: "/product/data-preparation",
        permanent: true,
      },
      {
        source: "/ledgers",
        destination: "/product/ledgers",
        permanent: true,
      },
      {
        source: "/analytics-reporting",
        destination: "/product/analytics-reporting",
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
  experimental: {
    esmExternals: "loose",
  },
  transpilePackages: [
    "sanity-plugin-seo-pane",
    "lodash-es",
    "yoastseo",
    "@yoast",
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
