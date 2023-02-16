var num = 2.12545;
var result = Math.floor(num);
var result2 = Math.ceil(num);
var result3 = Math.round(num);
console.log("Floor of " + num + " is " + result);
console.log("Ceil of " + num + " is " + result2);
console.log("Round of " + num + " is " + result3);
console.log("Round of", num, "is", result3);
console.log("\n");

var rand = Math.random() * 6;
console.log(rand);
var output = Math.round(rand);
console.log("Round of", rand, "is", output);
console.log("\n");

for (var i = 0; i < 10; i++) {
  var rand = Math.random() * 6;
  var output = Math.round(rand);
  console.log(output);
}
console.log("\n");
