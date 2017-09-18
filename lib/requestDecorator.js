/*!
 * express
 * Copyright(c) 2009-2013 TJ Holowaychuk
 * Copyright(c) 2013 Roman Shtylman
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */

'use strict';

/**
 * Request prototype.
 * @public
 */
var baseReqeust = require('./request');
/**
 * Module exports.
 * @public
 */
module.exports = setMethods;

function setMethods(req, base) {
  // if (req._express_decorated) {
  //   return req;
  // }
  req._express_decorated = true;
  if (!base) {
    base = baseReqeust;
  }
  return Object.defineProperties(req, Object.getOwnPropertyDescriptors(base));
}
