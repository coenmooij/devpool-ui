"use strict";
const merge = require("webpack-merge");
const devEnv = require("./dev.env");

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  API_BASE_URL: '"https://api.devpool.test"'
});
