function caesar(string) {
  let lowerArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let upperArray = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let newString = "";

  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) == " ") {
      newString = newString + " ";
    } else if (string.charAt(i) == `'`) {
      newString = newString + `'`;
    } else if (string.charAt(i) == string.charAt(i).toLowerCase()) {
      newString =
        newString + lowerArray[lowerArray.indexOf(string.charAt(i)) + 1];
    } else if (string.charAt(i) == string.charAt(i).toUpperCase()) {
      newString =
        newString + upperArray[upperArray.indexOf(string.charAt(i)) + 1];
    }
  }
  return newString;
}

module.exports = caesar;
