const INVALID_CHARS_REGEX = /[^a-z]+/g;

export const isIsogram = word => {
  const formattedWord = word.toLowerCase().replace(INVALID_CHARS_REGEX, '');
  const letters = formattedWord.split('');
  const uniqueCharsCount = Array.from(new Set(letters)).length;
  return formattedWord.length == uniqueCharsCount;
};
