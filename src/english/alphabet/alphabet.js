import Letter from './letter';
import { FIRST_LETTER } from '../../constants';
import { A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z } from './relativeLetterCodes';
import { getCharacterCodeFromCharacter } from '../../utilities/characterAndCharacterCodeConversion';

const FIRST_LETTER_CHARACTER_CODE = getCharacterCodeFromCharacter(FIRST_LETTER);

function getAbsoluteLetterCode(relativeLetterCode) {
  const absoluteLetterCode = FIRST_LETTER_CHARACTER_CODE + relativeLetterCode;
  return absoluteLetterCode;
}

export const LETTER_A = new Letter(getAbsoluteLetterCode(A));
export const LETTER_B = new Letter(getAbsoluteLetterCode(B));
export const LETTER_C = new Letter(getAbsoluteLetterCode(C));
export const LETTER_D = new Letter(getAbsoluteLetterCode(D));
export const LETTER_E = new Letter(getAbsoluteLetterCode(E));
export const LETTER_F = new Letter(getAbsoluteLetterCode(F));
export const LETTER_G = new Letter(getAbsoluteLetterCode(G));
export const LETTER_H = new Letter(getAbsoluteLetterCode(H));
export const LETTER_I = new Letter(getAbsoluteLetterCode(I));
export const LETTER_J = new Letter(getAbsoluteLetterCode(J));
export const LETTER_K = new Letter(getAbsoluteLetterCode(K));
export const LETTER_L = new Letter(getAbsoluteLetterCode(L));
export const LETTER_M = new Letter(getAbsoluteLetterCode(M));
export const LETTER_N = new Letter(getAbsoluteLetterCode(N));
export const LETTER_O = new Letter(getAbsoluteLetterCode(O));
export const LETTER_P = new Letter(getAbsoluteLetterCode(P));
export const LETTER_Q = new Letter(getAbsoluteLetterCode(Q));
export const LETTER_R = new Letter(getAbsoluteLetterCode(R));
export const LETTER_S = new Letter(getAbsoluteLetterCode(S));
export const LETTER_T = new Letter(getAbsoluteLetterCode(T));
export const LETTER_U = new Letter(getAbsoluteLetterCode(U));
export const LETTER_V = new Letter(getAbsoluteLetterCode(V));
export const LETTER_W = new Letter(getAbsoluteLetterCode(W));
export const LETTER_X = new Letter(getAbsoluteLetterCode(X));
export const LETTER_Y = new Letter(getAbsoluteLetterCode(Y));
export const LETTER_Z = new Letter(getAbsoluteLetterCode(Z));
