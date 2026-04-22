/** @type {import('next').NextConfig} */
const nextConfig = {
  // Serve static HTML files
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/index.html',
      },
      {
        source: '/ar',
        destination: '/ar/index.html',
      },
      {
        source: '/chaimae-belkhir',
        destination: '/chaimae-belkhir.html',
      },
      {
        source: '/ar/chaimae-belkhir',
        destination: '/ar/chaimae-belkhir.html',
      },
    ];
  },
};

module.exports = nextConfig;
