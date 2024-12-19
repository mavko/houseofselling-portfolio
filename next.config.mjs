import createMDX from '@next/mdx'
/** @type {import('next').NextConfig} */

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
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
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sebastianselling.com',
        pathname: '/**',
      },
    ],
    unoptimized: false,
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

export default withMDX(nextConfig)
