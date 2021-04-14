const VALID_WORD_REGEX = /[\w]+('[\w]+)?/g;

export const countWords = sentence => {
  let result = {};
  const words = sentence.toLowerCase().match(VALID_WORD_REGEX);
  words.forEach(word => {
    if (result[word]) {
      result[word]++;
    } else {
      result[word] = 1;
    }
  });

  return result;
};
