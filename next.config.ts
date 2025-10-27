import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */  
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // <- desactiva Image Optimization para output: 'export'
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'firebasestudio-hosting.web.app',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // si quieres i18n activa, añádelo aquí (pero quita output: 'export' en ese caso)
  // i18n: { locales: ['es','en'], defaultLocale: 'es' },
};

export default nextConfig;
