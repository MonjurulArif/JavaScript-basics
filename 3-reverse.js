function reverseString(str) {
  var reverse = "";
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    reverse = char + reverse; // char H + reverse ""
  }
  return reverse;
}

var statement = "Hello Alien bhai brother";
var forAlien = reverseString(statement);
console.log(forAlien);
var forAlien2 = reverseString("Ki khawa jai");
console.log(forAlien2);
console.log("\n");
