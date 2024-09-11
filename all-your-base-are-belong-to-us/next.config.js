module.exports = {
  async rewrites() {
    return [
      // Rewrite for zone1 static assets
      {
        source: '/_next/static/:path*',
        destination: 'http://localhost:8080/_next/static/:path*' // Proxy static assets to zone1
      },
      // Rewrite for zone1 pages and other requests
      {
        source: '/zone1/:path*',
        destination: 'http://localhost:8080/zone1/:path*' // Proxy other requests to zone1
      },
      // Rewrite for zone2 static assets
      {
        source: '/_next/static/:path*',
        destination: 'http://localhost:3001/_next/static/:path*' // Proxy static assets to zone2
      },
      // Rewrite for zone2 pages and other requests
      {
        source: '/zone2/:path*',
        destination: 'http://localhost:3001/zone2/:path*' // Proxy other requests to zone2
      },
    ];
  },
};

