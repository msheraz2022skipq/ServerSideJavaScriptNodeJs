//count the number of Characters in the given String and return the value
const countCharacters = (str) => {
  return str.length
}
//count the number of vowels in the given String and return the value
const countVowels = (str) => {
  // find the count of vowels
  if (str===""){
    return 0;
  }
  const count = str.match(/[aeiou]/gi).length;
  // return number of vowels
  return count;
}

//Check the existence of the given String in the Specified String and return the value
const checkExistenceOfStr = (str, checkStr) => {
  if (str.includes(checkStr)){
    return true
  }
  return false
}

//replace a word and return the value
const replaceWord = (str, wordToBeReplaced, replaceWord) => {
  return str.replace(wordToBeReplaced, replaceWord);
}

//convert the specified string into Title Case and return the value
const titleCaseConversion = (str) => {
  if (str===""){
    return "";
  }
  const string = str.toLowerCase().split(" ").map(word => {
      return word[0].toUpperCase() + word.substr(1, word.length);
   }).join(" ");
   return string;
}

// find the largest word (in terms of length) in the specified string and return the value
const findLongestWord = (str) => {var longestWord = str.split(' ').reduce(function(longest, currentWord) {
  return currentWord.length > longest.length ? currentWord : longest;
}, "");
return longestWord;
}


module.exports = {
  countCharacters,
  countVowels,
  checkExistenceOfStr,
  replaceWord,
  titleCaseConversion,
  findLongestWord
}