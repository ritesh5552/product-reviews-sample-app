const dotenv = require("dotenv");
const webpack = require("webpack");

dotenv.config();

const apiKey = JSON.stringify(process.env.SHOPIFY_API_KEY);

module.exports = {
  webpack: (config) => {
    // configure API_KEY env variable needed for AppBridgeProvider component in _app.js
    const env = { API_KEY: "3feaa822ea9422356b8b0e457ad57477" };
    config.plugins.push(new webpack.DefinePlugin(env));

    // Add ESM support for .mjs files in webpack 4
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto",
    });

    return config;
  },
};
