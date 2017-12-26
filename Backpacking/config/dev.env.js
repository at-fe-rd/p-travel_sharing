'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  SERVER_IP: '"http://localhost:3000/"',
  APP_ID: '"884618848377974"',
  VERSION: '"v2.11"',
  MAP_KEY: '"AIzaSyDBP7bsS6gD5Pe8ZS9esToRwiG4THL-FRQ"',
  MAP_VERSION: '"3.26"'
})
