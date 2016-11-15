import isUndefined from '../language/isUndefined';
import isEqual from '../language/isEqual';

const nativeIsNaN = isNaN;
const nativeNumberIsNaN = Number.isNaN;

let isNaNFunction;

// Try to use the native isNaN
if (!isUndefined(nativeIsNaN)) {
  isNaNFunction = nativeIsNaN;
}

// Fallback to the native Number.isNaN
if (isUndefined(isNaNFunction) && !isUndefined(nativeNumberIsNaN)) {
  isNaNFunction = nativeNumberIsNaN;
}

// Polyfill for older environments
if (isUndefined(isNaNFunction)) {
  isNaNFunction = function isNaN(value) {
    if (isEqual(value, value)) {
      // new Number(NaN) is equal to itself
      return false;
    } else {
      return true;
    }
  };
}

export default isNaNFunction;
