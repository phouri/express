/*!
 * express
 * Copyright(c) 2009-2013 TJ Holowaychuk
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */

'use strict';

/**
 * Module dependencies.
 * @private
 */

var baseResponse = require('./response');
/**
 * Module exports.
 * @public
 */

module.exports = setMethods;

function setMethods(res, base) {

  if (res._express_decorated) {
    return res;
  }
  res._express_decorated = true;
  if (!base) {
    base = baseResponse;
  }
  return Object.defineProperties(res, Object.getOwnPropertyDescriptors(base));
}
