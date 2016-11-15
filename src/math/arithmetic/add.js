import isNumeric from '../../utilities/number/isNumeric';

const AUGEND_IS_NOT_NUMERIC = 'The augend is not numeric.';
const ADDEND_IS_NOT_NUMERIC = 'The addend is not numeric.';

export default function add(augend, addend) {
  if (!isNumeric(augend)) {
    throw new Error(AUGEND_IS_NOT_NUMERIC);
  }
  if (!isNumeric(addend)) {
    throw new Error(ADDEND_IS_NOT_NUMERIC);
  }

  const sum = augend + addend;
  return sum;
}
