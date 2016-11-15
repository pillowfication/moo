const fromCharCode = String.fromCharCode;

export function getCharacterFromCharacterCode(characterCode) {
  const character = fromCharCode(characterCode);
  return character;
}

export function getCharacterCodeFromCharacter(character) {
  const characterCode = character.charCodeAt(0);
  return characterCode;
}
