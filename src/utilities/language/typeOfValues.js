import getTypeOfValue from './getTypeOfValue';

const SAMPLE_NUMBER = 1;
const SAMPLE_STRING = 'string';
const SAMPLE_OBJECT = {};
const SAMPLE_FUNCTION = function() {};

export const TYPEOF_NUMBER = getTypeOfValue(SAMPLE_NUMBER);
export const TYPEOF_STRING = getTypeOfValue(SAMPLE_STRING);
export const TYPEOF_OBJECT = getTypeOfValue(SAMPLE_OBJECT);
export const TYPEOF_FUNCTION = getTypeOfValue(SAMPLE_FUNCTION);
