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
  // Next.js 16.3 Instant Navigations — SPA-feel shells + one prefetch per route
  cacheComponents: true,
  partialPrefetching: true,
  experimental: {
    optimizePackageImports: [
      '@headlessui/react',
      '@heroicons/react/24/solid',
      '@heroicons/react/16/solid',
      '@radix-ui/react-hover-card',
    ],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sebastianselling.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.public.blob.vercel-storage.com',
        pathname: '/media/**',
      },
      {
        protocol: 'https',
        hostname: 'workoscdn.com',
        pathname: '/**',
      },
    ],
    unoptimized: false,
  },
  async redirects() {
    return [
      {
        source: '/artifacts/archive/makings-of-ispect',
        destination: '/artifacts/makings-of-ispect',
        permanent: true,
      },
      {
        source: '/artifacts/archive/makings-of-icontrol',
        destination: '/artifacts/makings-of-icontrol',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.sebastianselling.com/craft/makings-of-icontrol',
          },
        ],
        destination:
          'https://sebastianselling.com/artifacts/makings-of-icontrol',
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
        destination: 'https://sebastianselling.com/artifacts/makings-of-ispect',
        permanent: true,
      },
    ]
  },
}

export default withMDX(nextConfig)
