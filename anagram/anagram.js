export const findAnagrams = (word, list) => {
  const formatWord = w => w.toLowerCase().split('').sort().join('');
  const formattedWord = formatWord(word);

  const anagrams = list.filter(item => {
    const formattedItem = formatWord(item);
    const charsMatch = formattedItem == formattedWord;
    const validWordsMatch = word.toLowerCase() != item.toLowerCase();

    return charsMatch && validWordsMatch;
  })

  return anagrams;
};
