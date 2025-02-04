import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {unoptimized: true},
  pageExtensions: ['js', 'jsx', 'mdx', 'md', 'ts', 'tsx'],
};

export default nextConfig;
