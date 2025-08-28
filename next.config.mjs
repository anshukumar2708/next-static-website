/** @type {import('next').NextConfig} */
const basePath = "/corwin";

const nextConfig = {
  basePath,
  trailingSlash: true,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "plus.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "source.unsplash.com", pathname: "/**" },
    ],
  },
  redirects: async () => [
    {
      source: "/",
      destination: "/corwin",
      permanent: true,
      basePath: false,
    },
  ],
};

export default nextConfig;
