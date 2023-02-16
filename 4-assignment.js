function feetToMile(feet) {
  var mile = feet / 5280;
  return mile;
}

var feet = 1000;
var result = feetToMile(feet);
// var result = feetToMile(2568);
result = result.toFixed(5);
console.log(feet, "Feet is", result, "Miles");
console.log("\n");

function woodCalculator(chair, table, couch) {
  const chairWood = 1;
  const tableWood = 3;
  const couchWood = 5;
  var totalWood = 0;

  var totalWood = chair * chairWood + table * tableWood + couch * couchWood;
  return totalWood;
}

var chair = 20,
  table = 12,
  couch = 7;
var woodNeed = woodCalculator(chair, table, couch);
console.log("Total wood need: ", woodNeed);
console.log("\n");

function brickCalculator(floor) {
  var tillTenthFloor = 15;
  var tillTwentyFloor = 12;
  var upperTwentyFloor = 10;
  var bricksPerFloor = 1000;
  var totalBricks = 0;
  if (floor <= 10) {
    totalBricks = floor * tillTenthFloor * bricksPerFloor;
  } else if (floor > 10 && floor <= 20) {
    totalBricks = 10 * tillTenthFloor * bricksPerFloor + (floor - 10) * tillTwentyFloor * bricksPerFloor;
  } else if (floor > 20) {
    totalBricks = 10 * tillTenthFloor * bricksPerFloor + 10 * tillTwentyFloor * bricksPerFloor + (floor - 20) * upperTwentyFloor * bricksPerFloor;
  } else {
    console.log("Wrong input");
  }
  return totalBricks;
}

var floor = 24;
var requiredBricks = brickCalculator(floor);
console.log(requiredBricks, "Bricks need for", floor, "floors");
console.log("\n");

function tinyFriend(names) {
  var tinyName = names[0];
  for (var i = 1; i < names.length; i++) {
    if (tinyName.length > names[i].length) {
      tinyName = names[i];
    }
  }
  return tinyName;
}

var names = ["Monjurul", "Arif", "d", "Jahangir", "Abc"];
var tiny = tinyFriend(names);
console.log(tiny, "is the smallest name");
console.log("\n");

// for(let word of words){
//   if(word.length>longestWord.length){
//       longestWord=word;
//   }
// }
