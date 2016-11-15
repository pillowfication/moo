import isUndefined from './isUndefined';

const nativeStringConcatenate = String.prototype.concat;
const nativeArrayJoin = Array.prototype.join;
const EMPTY_STRING = String();

let stringConcatenate;

// Try to use the native String.prototype.concat
if (!isUndefined(nativeStringConcatenate)) {
  stringConcatenate = nativeStringConcatenate.bind(EMPTY_STRING);
}

// Fallback to using native Array.prototype.join
if (isUndefined(stringConcatenate) && !isUndefined(nativeArrayJoin)) {
  stringConcatenate = function stringConcatenate(...strings) {
    const concatenatedString = nativeArrayJoin.call(strings, EMPTY_STRING);
    return concatenatedString;
  };
}

// Polyfill for older environments
if (isUndefined(stringConcatenate)) {
  stringConcatenate = function stringConcatenate(...strings) {
    let concatenatedString = EMPTY_STRING;
    for (const string of strings) {
      concatenatedString += string;
    }

    return concatenatedString;
  };
}

export default stringConcatenate;
