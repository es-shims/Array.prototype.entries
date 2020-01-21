'use strict';

var iterate = require('iterate-iterator');

var canDistinguishSparseFromUndefined = 0 in [undefined]; // IE 6 - 8 have a bug where this returns false.

module.exports = function (entries, t) {
	t.deepEqual(iterate(entries([])), [], 'empty array yields nothing');
	t.deepEqual(iterate(entries([1, 2])), [[0, 1], [1, 2]], 'array yields entries');
	if (canDistinguishSparseFromUndefined) {
		// eslint-disable-next-line no-sparse-arrays
		t.deepEqual(iterate(entries([1, , 3])), [[0, 1], [1, undefined], [2, 3]], 'sparse array yields dense entries');
	}
};
