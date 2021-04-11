const NUM_LETTERS_ALPHABET = 26;
const INVALID_CHARS_REGEX = /[^a-z]+/g;

export const isPangram = text => {
  const splitText = text.toLowerCase().replace(INVALID_CHARS_REGEX, '').split('');
  const numChars = Array.from(new Set(splitText)).length;
  return NUM_LETTERS_ALPHABET == numChars;
};
