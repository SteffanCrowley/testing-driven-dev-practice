function caesar(string) {
  let newString = string.charAt(0).toUpperCase();

  for (let i = 1; i < string.length; i++) {
    newString = newString + string.charAt(i).toLowerCase();
  }
  return newString;
}

module.exports = caesar;
