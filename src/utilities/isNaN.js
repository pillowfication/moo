import isUndefined from './isUndefined';
import isEqual from './isEqual';

const nativeIsNaN = isNaN;

let isNaNFunction;

// Try to use the native isNaN
if (!isUndefined(nativeIsNaN)) {
  isNaNFunction = nativeIsNaN;
}

// Polyfill for older environments
if (isUndefined(isNaNFunction)) {
  isNaNFunction = function isNaN(value) {
    if (isEqual(value, value)) {
      return false;
    } else {
      return true;
    }
  };
}

export default isNaNFunction;
