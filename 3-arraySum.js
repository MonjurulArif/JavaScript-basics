var numbers = [45, 65, 78, 12, 3, 54, 65];
sum = 0;
for (var i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
}
console.log("Sum is : ", sum);
console.log("\n");

function getArraySum(numbers) {
  sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
}
var numbers = [45, 65, 78, 12, 3, 54, 65];
var result = getArraySum(numbers);
console.log("Array Sum is : ", result);
console.log("\n");

var total = getArraySum([43, 56, 12, 41, 86]);
console.log("Array total is : ", total);
console.log("\n");
