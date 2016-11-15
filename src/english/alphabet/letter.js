import { getCharacterFromCharacterCode } from '../../utilities/characterAndCharacterCodeConversion';

export default class Letter {
  constructor(characterCode) {
    this._characterCode = characterCode;

    const character = getCharacterFromCharacterCode(characterCode);
    this._character = character;
  }

  get characterCode() {
    return this._characterCode;
  }

  get character() {
    return this._character;
  }
}
