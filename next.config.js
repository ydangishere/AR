/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/AR',
  assetPrefix: '/AR/',
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
