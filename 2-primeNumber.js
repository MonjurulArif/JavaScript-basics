function isPrime(n) {
  for (var i = 2; i < n; i++) {
    //console.log(i, n % i);
    if (n % i == 0) {
      return n + " is not a Prime number";
    }
  }

  return n + " is a Prime number";
}

var result = isPrime(127);
// var result = isPrime(93);
console.log(result);
