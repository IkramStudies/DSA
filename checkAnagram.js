/*
Input: "listen", "silent"
Output: true
*/
// This is the apporach i used
// const checkAnagram = (str1, str2) => {
//   let freq1 = {};
//   let freq2 = {};
//   let result = null;
//   for (let char of str1) {
//     if (freq1[char]) freq1[char]++;
//     else freq1[char] = 1;
//   }
//   for (let char1 of str2) {
//     if (freq2[char1]) freq2[char1]++;
//     else freq2[char1] = 1;
//   }
//   for (let char of str1) {
//     if (freq1[char] == freq2[char]) result = true;
//     else result = false;
//   }
//   return result;
// };
// checkAnagram("listen", "silent");
// Optimized Approach suggested by ChatGPT
function checkAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let count = {};

  for (let char of str1) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of str2) {
    // for (let s of silent)
    if (!count[char]) {
      //if (!count[s])
      return false;
    }

    count[char]--;
    // count[char]--;
    // count[s]--;
    // count[s] = 0;
  }

  return true;
}
checkAnagram("listen", "silent");
