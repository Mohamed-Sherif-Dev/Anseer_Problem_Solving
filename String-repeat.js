// create Empty string
// Take the Number Argument Loop Through the String and Add it to the Empty String
// Add the String to the Empty one

function repeateString(number, str) {
  let newSring = "";

  for (let i = 0; i < number; i++) {
    newSring += str;
  }
  return newSring;
}
console.log(repeateString(3, "ar"));

function repeateString1(number, str) {
  return str.repeat(number);
}
console.log(repeateString(3,  "mohamed"));

// No repeat()
// no map
// no split
// yaus loops
// Yuas variable
// string concatenation

function repeatStringNumTimes(str, num) {
  let newString = "";
  for (let i = 0; i < num; i++) {
    newString += str;
  }
  return newString;
}

console.log(repeatStringNumTimes("abc", 3));
