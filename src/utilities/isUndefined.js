import isEqual from './isEqual';

function getGlobalUndefined() {
  return;
}

const GLOBAL_UNDEFINED = getGlobalUndefined();

export default function isUndefined(value) {
  if (isEqual(value, GLOBAL_UNDEFINED)) {
    return true;
  } else {
    return false;
  }
}
