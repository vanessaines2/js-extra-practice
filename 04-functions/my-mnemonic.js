// My Mnemonic
// Write a function myMnemonic that accepts up to four strings.
// myMnemonic should return a new string of the first characters for each string argument.

// Note that the user may not pass in all four strings!

// Example:
// myMnemonic('Must', 'Accept', 'Sugar', 'Happiness'); // => MASH
// myMnemonic('We', 'Eat', 'Eggs'); // => WEE

// YOUR CODE BELOW
function myMnemonic(str1, str2, str3, str4) {
  let mnemonic = "";

  if (typeof str1 === "string") {
    const firstLetter = str1[0];
    mnemonic += firstLetter;
  }
  if (typeof str2 === "string") {
    const firstLetter = str2[0];
    mnemonic += firstLetter;
  }
  if (typeof str3 === "string") {
    const firstLetter = str3[0];
    mnemonic += firstLetter;
  }
  if (typeof str4 === "string") {
    const firstLetter = str4[0];
    mnemonic += firstLetter;
  }
  return mnemonic.toUpperCase();
}

// Do not change the code below this line
module.exports = { myMnemonic };
