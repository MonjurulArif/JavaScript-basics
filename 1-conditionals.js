var biscuitPrice = 12;
if (biscuitPrice < 10) {
  console.log("I will buy");
} else {
  console.log("I will not buy");
}

var biscuitPrice = 7;
if (biscuitPrice != 8) {
  console.log("I will buy");
} else {
  console.log("I will not buy");
}

var job = true;
var saving = 5000;
if (job == true && saving > 200000) {
  console.log("Invest now");
} else {
  console.log("No need to invest");
}

if (job == true && saving > 200000) {
  console.log("Invest now");
} else if (job == true) {
  console.log("Try now");
} else {
  console.log("No need to invest");
}

if (job == true || saving > 200000) {
  console.log("Invest now");
} else {
  console.log("No need to invest");
}
