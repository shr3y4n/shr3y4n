import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '/shr3y4n',
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
