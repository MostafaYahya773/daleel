import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    viewTransition: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['boccvxdoadtkygrhdeeq.supabase.co', 'i.postimg.cc'],
  },
  productionBrowserSourceMaps: false,
};

export default nextConfig;
