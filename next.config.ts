import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    viewTransition: true,
  },
  images: {
    domains: ['i.postimg.cc'],
  },
  productionBrowserSourceMaps: false,
};

export default nextConfig;
