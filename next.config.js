module.exports = {

  webpack2: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }

    return config
  },

  distDir: 'build',

  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'],
  },
  
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3000/:path*'
      }
    ]
  },
  
};
