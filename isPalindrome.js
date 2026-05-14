const isPalindrome = (str) => {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) reversed += str[i];
  if (reversed == str) return true;
  return false;
};
console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
