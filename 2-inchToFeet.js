var inch = 156;
var feet = inch / 12;
console.log(feet + " Feet");

function inchToFeet(inch) {
  var feet = inch / 12;
  return feet;
}
var inFeet = inchToFeet(144);
console.log(inFeet + " feet");

function inchToFeet2(inch2) {
  var feet = inch2 / 12;
  return feet;
}
var inchs = [132, 144, 156];
var inFeet2 = inchToFeet(inchs[0]);
console.log(inFeet2 + " feet");
