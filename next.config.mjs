/** @type {import('next').NextConfig} */
const basePath = '/corwin';

const nextConfig = {
  basePath,
  trailingSlash: true,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: {
    // Allow remote images from Unsplash (and its sub-services)
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
      { protocol: 'https', hostname: 'plus.unsplash.com',   pathname: '/**' },
      { protocol: 'https', hostname: 'source.unsplash.com', pathname: '/**' },
    ],
    // If you ever switch to static export, uncomment the next line:
    // unoptimized: true,
  },
};

export default nextConfig;
