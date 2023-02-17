var name = "Kuddus";
function add(num1, num2) {
  var result = num1 + num2;
  result2 = num1 * num2; //can also be accessed from outside
  window.result3 = num1 + 100;
  console.log("result inside: ", result);
  console.log("name inside: ", name);

  function double(num) {
    return num * 2;
  }

  var total = double(result);
  return total;
}

console.log("name outside: ", name);
// console.log("result outside: ", result);
var sum = add(13, 21);
console.log(sum);

console.log("result2 outside", result2);
// console.log("result3 outside", result3); //can be found in browser console
