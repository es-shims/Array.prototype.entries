'use strict';

var CreateArrayIterator = require('es-create-array-iterator');
var ToObject = require('es-abstract/2020/ToObject');

module.exports = function entries() {
	var O = ToObject(this);
	return CreateArrayIterator(O, 'key+value');
};
