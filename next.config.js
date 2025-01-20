const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/Gyannnnn/iitkirba.io/raw/main/db/pyq/branch/**/logo/**",
      },
      {
        protocol: "https",
        hostname: "gyannnnn.github.io",
        pathname: "/iitkirba.io/db/pyq/branch/**/logo/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
