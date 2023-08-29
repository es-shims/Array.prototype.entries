import callBind from 'call-bind';
import RequireObjectCoercible from 'es-abstract/2023/RequireObjectCoercible.js';

import getPolyfill from 'array.prototype.entries/polyfill';

const bound = callBind(getPolyfill());

export default function entries(array) {
	RequireObjectCoercible(array);
	return bound(array);
}

export { default as getPolyfill } from 'array.prototype.entries/polyfill';
export { default as implementation } from 'array.prototype.entries/implementation';
export { default as shim } from 'array.prototype.entries/shim';
