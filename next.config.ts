// next.config.js
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/Gyannnnn/iitkirba.io/blob/main/db/pyq/branch/**/logo/**",
      },
      {
        protocol: "https",
        hostname: "gyannnnn.github.io",
        pathname: "/iitkirba.io/db/pyq/branch/**/logo/**",
      },
    ],
  },
};

export default nextConfig;
