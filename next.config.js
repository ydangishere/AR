/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { formats: ['image/avif', 'image/webp'] },
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
