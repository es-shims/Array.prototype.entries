# array.prototype.entries <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

An ES2015 spec-compliant `Array.prototype.entries` shim/polyfill/replacement that works as far down as ES3.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the [spec](https://www.ecma-international.org/ecma-262/6.0/).

Because `Array.prototype.entries` depends on a receiver (the “this” value), the main export takes the array to operate on as the first argument.

## Example

```js
var entries = require('array.prototype.entries');
var assert = require('assert');
var iterate = require('iterate-iterator');

assert.deepStrictEqual(iterate(entries([1, 2, 3])), [[0, 1], [1, 2], [2, 3]]);
assert.deepStrictEqual(iterate(entries([1, 0, 1])), [[0, 1], [1, 0], [2, 1]]);
assert.deepStrictEqual(iterate(entries([NaN])), [[0, NaN]]);
assert.deepStrictEqual(iterate(entries([1,,3])), [[0, 1], [1, undefined], [2, 3]]);
```

```js
var entries = require('array.prototype.entries');
var assert = require('assert');
/* when Array#entries is not present */
delete Array.prototype.entries;
var shimmedMap = entries.shim();
assert.deepStrictEqual(shimmedMap, entries.getPolyfill());
assert.deepStrictEqual(iterate([1, 2, 3].entries()), [[0, 1], [1, 2], [2, 3]]);
assert.deepStrictEqual(iterate([1, 0, 1].entries()), [[0, 1], [1, 0], [2, 1]]);
assert.deepStrictEqual(iterate([NaN].entries()), [[0, NaN]]);
assert.deepStrictEqual(iterate([1,,3].entries()), [[0, 1], [1, undefined], [2, 3]]);
```

```js
var entries = require('array.prototype.entries');
var assert = require('assert');
/* when Array#entries is present */
var shimmedMap = entries.shim();
assert.equal(shimmedMap, Array.prototype.entries);
assert.deepStrictEqual(iterate([1, 2, 3].entries()), [[0, 1], [1, 2], [2, 3]]);
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/array.prototype.entries
[npm-version-svg]: https://versionbadg.es/es-shims/Array.prototype.entries.svg
[deps-svg]: https://david-dm.org/es-shims/Array.prototype.entries.svg
[deps-url]: https://david-dm.org/es-shims/Array.prototype.entries
[dev-deps-svg]: https://david-dm.org/es-shims/Array.prototype.entries/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/Array.prototype.entries#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/array.prototype.entries.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/array.prototype.entries.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/array.prototype.entries.svg
[downloads-url]: https://npm-stat.com/charts.html?package=array.prototype.entries
