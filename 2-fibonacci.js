var fibo = [0, 1];
for (var i = 2; i <= 10; i++) {
  fibo[i] = fibo[i - 1] + fibo[i - 2];
  // console.log(fibo[i - 2], fibo[i - 1], fibo[i]);
}
console.log(fibo);
console.log("\n");

function fibonacci(n) {
  var fibo = [0, 1];
  for (var i = 2; i <= n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
    // console.log(fibo[i - 2], fibo[i - 1], fibo[i]);
  }
  return fibo;
}

var result = fibonacci(12);
console.log(result + "Fibonacci");
console.log("\n");

function fibonacci(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

var result = fibonacci(10);
console.log(result + " Recursive Fibonacci");
console.log("\n");

function fibonacci(n) {
  if (n == 0) {
    return [0];
  } else if (n == 1) {
    return [0, 1];
  } else {
    var fibo = fibonacci(n - 1);
    var nextElement = fibo[n - 1] + fibo[n - 2];
    fibo.push(nextElement);
    return fibo;
  }
}

var result = fibonacci(10);
console.log(result + " Recursive Array Fibonacci");
console.log("\n");
