import isEqual from './isEqual';
import { GLOBAL_UNDEFINED } from './constants';

export default function isUndefined(value) {
  if (isEqual(value, GLOBAL_UNDEFINED)) {
    return true;
  } else {
    return false;
  }
}
