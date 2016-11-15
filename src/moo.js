import Word from './english/words/word';
import { LETTER_M, LETTER_O } from './english/alphabet/alphabet';

const MOO_WORD = new Word(LETTER_M, LETTER_O, LETTER_O);

function moo() {
  console.log(MOO_WORD.stringRepresentation);
}

moo();
