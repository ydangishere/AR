/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  // Required so static assets resolve correctly on GitHub Pages project site: /AR
  basePath: isProd ? '/AR' : undefined,
  assetPrefix: isProd ? '/AR/' : undefined,
  images: { 
    unoptimized: true,
    formats: ['image/avif', 'image/webp'] 
  },
  // Disable strict mode for better compatibility
  reactStrictMode: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      oneOf: [
        {
          resourceQuery: /component/,
          use: [{ loader: '@svgr/webpack', options: { icon: true } }]
        },
        { type: 'asset', resourceQuery: { not: [/component/] } }
      ]
    });
    
    return config;
  }
};

module.exports = nextConfig;
