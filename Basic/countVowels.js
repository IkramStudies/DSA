const countVowels = (str) => {
  let vowels = 0;
  let consonants = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    )
      vowels++;
    else consonants++;
  }
  let freq = { consonants: consonants, vowels: vowels };
  return freq;
};
console.log(countVowels("hello"));
