const VALID_CHARS_REGEX = /\w+('[\w]+)?/g;
const INVALID_CHARS_REGEX = /[_]/g;

export const parse = phrase => {
  const splitPhrase = phrase.replace(INVALID_CHARS_REGEX, '').match(VALID_CHARS_REGEX);
  const result = splitPhrase.map(word => word.charAt(0).toUpperCase()).join('');
  return result;
};
