'use strict'
const addon = require('bindings')('addon')
module.exports = require('./lib')(new addon.Secp256k1())
