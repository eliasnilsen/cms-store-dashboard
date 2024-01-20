/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:slug",
        destination: "/:slug/settings",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
