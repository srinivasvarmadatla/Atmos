// config-overrides.js
module.exports = {
    webpack: (config) => {
      config.resolve.fallback = {
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        fs: false,
        child_process: false,
      };
      return config;
    },
  };
  