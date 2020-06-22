'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  VUE_APP_BASE_API: '"http://localhost:8085"',
  VUE_APP_TOKEN_HEADER: '"x-auth-token"',
  VUE_APP_TOKEN_KEY: '"Admin-Token"',
  VUE_APP_TOKEN_PREFIX: '"Bearer "'
})
