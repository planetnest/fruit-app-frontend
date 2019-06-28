require("dotenv").config();
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const withFonts = require("next-fonts");
const compose = require("next-compose");
const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = compose([
  [withSass],
  [withCSS],
  [withFonts],
  {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.plugins = config.plugins || [];
    config.plugins = [
      ...config.plugins,
      new Dotenv({
        path: path.join(__dirname, ".env"),
        systemvars: true
      })
    ];
    // config.node = {
    //   fs: 'empty'
    // }

     return config
    }
  }
]);
