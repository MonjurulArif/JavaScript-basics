var number = 45;
number = 77;
number = 100;
console.log(number);

let number2 = 45;
number2 = 80;
number2 = 103;
console.log(number2);

const name = "Arif";

var marks = [];
var marks = [87, 95, 89, 76];
for (var i = 0; i < marks.length; i++) {
  // var element = marks[i];
  // console.log(element);
  console.log(marks[i]);
}

function add(num1, num2) {
  var total = num1 + num2;
  return total;
}

var result = add(42, 54);
console.log(result);

var a = "go";
var b = " now";
var result2 = add(a, b);
console.log(result2);

function largestNumber(numbers) {
  var larger = numbers[0];
  for (var i = 1; i < numbers.length; i++) {
    var element = numbers[i];
    if (element > larger) {
      larger = element;
    }
  }
}

largestNumber([45, 62, 87]);
