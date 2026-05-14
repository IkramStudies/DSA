/*
Input: "aabbcde"
Output: "c"
*/
const firstNonRepeating = (str) => {
  let freq = {};
  for (let char of str) {
    if (freq[char]) freq[char]++;
    else freq[char] = 1;
  }
  for (let char of str) if (freq[char] == 1) return char;
  return false;
};
console.log(firstNonRepeating("aabbcde"));
