'use strict';

var IsCallable = require('is-callable');

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	// Safari 7.1 defines Array#keys and Array#entries natively, but the resulting ArrayIterator objects don't have a "next" method.
	if (Array.prototype.entries && IsCallable([1].entries().next)) {
		return Array.prototype.entries;
	}

	return implementation;
};
