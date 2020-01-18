'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

module.exports = function shimArrayEntries() {
	var polyfill = getPolyfill();
	define(
		Array.prototype,
		{ entries: polyfill },
		{ entries: function () { return Array.prototype.entries !== polyfill; } }
	);
	return polyfill;
};
