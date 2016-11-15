import stringConcatenate from '../../utilities/stringConcatenate';

export default class Word {
  constructor(...letters) {
    this._letters = letters;

    const characters = letters.map((letter) => {
      return letter.character;
    });

    const stringRepresentation = stringConcatenate(...characters);
    this._stringRepresentation = stringRepresentation;
  }

  get letters() {
    return this._letters;
  }

  get stringRepresentation() {
    return this._stringRepresentation;
  }
}
