import isUndefined from './isUndefined';
import { GLOBAL_UNDEFINED } from './constants';

export default function getConstructor(object) {
  if (isUndefined(object)) {
    return GLOBAL_UNDEFINED;
  } else {
    const objectConstructor = object.constructor;
    return objectConstructor;
  }
}
