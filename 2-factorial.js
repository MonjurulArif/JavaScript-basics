var factorial = 1;
for (var i = 1; i <= 10; i++) {
  factorial = factorial * i;
  console.log(i);
  console.log(i, factorial);
}
console.log("\n");
console.log(factorial + " Factorial");
console.log("\n");

function Factorial(n) {
  var factorial = 1;
  for (var i = 1; i <= n; i++) {
    factorial = factorial * i;
    //console.log(i);
    console.log(i, factorial);
  }
  return factorial;
}

var result = Factorial(5);
console.log(result + " Factorial");
console.log("\n");

function Factorial2(n) {
  var i = 1;
  var factorial = 1;
  while (i <= n) {
    factorial = factorial * i;
    //console.log(i);
    console.log(i, factorial);
    i++;
  }
  return factorial;
}

console.log("\n");
var result2 = Factorial2(6);
console.log(result2);

function Factorial3(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * Factorial3(n - 1);
  }
}

console.log("\n");
var result3 = Factorial3(6);
console.log(result3 + " Recursive Factorial");
