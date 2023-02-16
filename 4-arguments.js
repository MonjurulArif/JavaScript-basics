function addNumbers(num1, num2) {
  // console.log(arguments); //arguments only work in function to access parameters
  //console.log(arguments[3]);
  var sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    const num = arguments[i];
    // console.log(num);
    sum = sum + num;
  }
  // arguments.push(14);  not possible
  // return num1 + num2;

  function logInfo(message) {
    console.log(message);
  }
  logInfo("Good Morning");

  return sum;
}

var result = addNumbers(4, 8, 2, 5, 20);
console.log(result);
