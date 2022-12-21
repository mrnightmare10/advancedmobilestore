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
          { key: "Access-Control-Allow-Origin", value: "https://iwhqukdl.apicdn.sanity.io/v2022-02-03/data/query/production?query=*%5B_type%20%3D%3D%20%22product%22%5D" },
        ],
      },
    ]
  },


};
