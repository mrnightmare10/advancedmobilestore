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

  async headers() {
    return [
      {
        source: "/_next/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "https://advancedmobilestore.vercel.app/" },
        ],
      },
    ]
  },


};
