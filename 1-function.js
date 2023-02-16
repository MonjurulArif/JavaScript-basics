function func() {
  console.log("Function created");
  console.log("Some operation done");
}

func();

function doubleIt(num) {
  var result = num * 2;
  console.log(result);
}

doubleIt(10);
doubleIt(24);
console.log("\n");

function doubleIt(num) {
  var result = num * 2;
  // console.log(result);
  return result;
}

var first = doubleIt(13);
var second = doubleIt(17);
console.log(first, second);
console.log("\n");

var total = first + second;
console.log(total);
console.log("\n");

function add(num1, num2) {
  var result = num1 + num2;
  return result;
}

var sum = add(15, 17);
console.log(sum);
console.log("\n");
