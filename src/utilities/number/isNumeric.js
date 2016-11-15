import getConstructor from '../language/getConstructor';
import getTypeOfValue from '../language/getTypeOfValue';
import isEqual from '../language/isEqual';
import isNaN from './isNaN';
import { TYPEOF_NUMBER } from '../language/typeOfValues';

export default function isNumeric(value) {
  if (isNaN(value)) {
    return false;
  }

  if (isEqual(getTypeOfValue(value), TYPEOF_NUMBER)) {
    return true;
  }

  const valueConstructor = getConstructor(value);
  if (isEqual(valueConstructor, Number)) {
    return true;
  } else {
    return false;
  }
}
