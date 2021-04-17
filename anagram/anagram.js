export const findAnagrams = (word, list) => {
  const changeToLowerCase = w => w.toLowerCase();
  const formatWord = w => changeToLowerCase(w).split('').sort().join('');

  const formattedWord = formatWord(word);

  const result = list.filter(item => {
    const formattedItem = formatWord(item);

    const charsMatch = formattedItem == formattedWord;
    const validWordsMatch = !(changeToLowerCase(word) == changeToLowerCase(item));

    return charsMatch && validWordsMatch;
  })

  return result;
};
