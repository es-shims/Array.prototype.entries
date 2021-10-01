'use strict';

var define = require('define-properties');
var callBind = require('call-bind');
var RequireObjectCoercible = require('es-abstract/2021/RequireObjectCoercible');

var implementation = require('./implementation');
var getPolyfill = require('./polyfill');
var shim = require('./shim');

var bound = callBind(getPolyfill());
var boundEntries = function entries(array) {
	RequireObjectCoercible(array);
	return bound(array);
};

define(boundEntries, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = boundEntries;
