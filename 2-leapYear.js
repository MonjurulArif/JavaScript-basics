const year = 3588;
const remainder = year % 4;
if (remainder == 0) {
  console.log(year + " is a Leap Year");
} else {
  console.log(year + " is not a Leap Year");
}

function isLeapYear(year) {
  //const remainder = year % 4;
  if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
    return true;
  } else {
    return false;
  }
}

let x = 2000;
const check1 = isLeapYear(x);
if (check1 == true) {
  console.log(check1 + "! " + x + " is a Leap Year");
} else {
  console.log(check + "! " + x + " is not a Leap Year");
}
console.log("\n");

let y = 1900;
const check2 = isLeapYear(y);
if (check2 == true) {
  console.log(check2 + "! " + y + " is a Leap Year");
} else {
  console.log(check2 + "! " + y + " is not a Leap Year");
}
