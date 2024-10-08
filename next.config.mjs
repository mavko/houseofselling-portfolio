import rehypePrism from '@mapbox/rehype-prism'
import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/videos/',
          outputPath: 'static/videos/',
          name: '[name].[hash].[ext]',
        },
      },
    });

    return config;
  },
  images: {
    domains: ['f003.backblazeb2.com', 'api.microlink.io'], // Add this line to allow Backblaze B2 domain
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.sebastianselling.com/craft/makings-of-icontrol',
          },
        ],
        destination: 'https://sebastianselling.com/alchemy/makings-of-icontrol',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.sebastianselling.com/craft/makings-of-ispect',
          },
        ],
        destination: 'https://sebastianselling.com/alchemy/makings-of-ispect',
        permanent: true,
      },
    ];
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})

const config = {
  ...withMDX(nextConfig),
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}

export default config
