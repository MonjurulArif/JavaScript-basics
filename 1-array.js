var ageArray = [12, 16, 19, 13];
console.log(ageArray);
console.log(ageArray[2]);

var a = ageArray[3];
console.log(a);

ageArray[1] = 200;
console.log(ageArray);

var position = ageArray.indexOf(140);
console.log(position);

console.log(ageArray.length);
ageArray.push(24);
ageArray.push(37, 43); /*adding at last*/
console.log(ageArray);
console.log(ageArray.length);

ageArray.unshift(7, 4); /*adding in begining*/
console.log(ageArray);

console.log(ageArray);
ageArray.pop(); /*removing single from last*/
console.log(ageArray);

ageArray.shift(); /*removing from begining */
console.log(ageArray);

/*splice changes original array*/
ageArray = ageArray.splice(0, 2); /*removing multiple from begining */
console.log(ageArray);
ageArray = ageArray.splice(-2, 2); /*removing multiple from last */

var teaLine = ["Rafiq", "Shafiq", "Jobbar", "Barkat"];
teaLine.push("Shafiul");
console.log(teaLine);
teaLine.pop();
console.log(teaLine);
teaLine.unshift("Kalam");
console.log(teaLine);

var teaLine = ["Rafiq", "Shafiq", "Jabbar", "Barkat", "Robiul"];
teaLine.push("Shafiul");
console.log(teaLine);
// teaLine.pop();
var part1 = teaLine.slice(2); /*slice doesn't change original array*/
console.log(part1);
var part2 = teaLine.slice(2, 4);
console.log(part2);
var part3 = teaLine.slice(2, 5);
console.log(part3);

console.log(teaLine);

var test = [4, "Arif", "Playing"];
console.log(test);
console.log(typeof test);
