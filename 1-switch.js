var num = 5;
switch (num) {
  case 1000:
    console.log("It is 1000");
    break;
  case 2000:
    console.log("It is 2000");
    break;
  case 20:
  case 10:
    console.log("It is 10");
    break;
  default:
    console.log("Number is not found");
}
console.log("\n");

switch (num) {
  case 1000:
    console.log("It is 1000");
  // break;
  case 2000:
    console.log("It is 2000");
  // break;
  case 20:
  case 10:
    console.log("It is 10");
    break;
  default:
    console.log("Number is not found");
}
console.log("\n");

var Animal = "Giraffe";
switch (Animal) {
  case "Cow":
  case "Giraffe":
  case "Dog":
  case "Dear":
    console.log("Found in the earth");
    break;

  case "Dinosaur":
    console.log("Not Found in the earth");
    break;
  default:
    console.log("Not found");
}
console.log("\n");

switch (true) {
  case "fetch" in globalThis:
    // Fetch a resource with fetch
    break;
  case "XMLHttpRequest" in globalThis:
    // Fetch a resource with XMLHttpRequest
    break;
  default:
    // Fetch a resource with some custom AJAX logic
    break;
}
console.log("\n");

switch (true) {
  case isSquare(shape):
    console.log("This shape is a square.");
  // Fall-through, since a square is a rectangle as well!
  case isRectangle(shape):
    console.log("This shape is a rectangle.");
  case isQuadrilateral(shape):
    console.log("This shape is a quadrilateral.");
    break;
  case isCircle(shape):
    console.log("This shape is a circle.");
    break;
}
console.log("\n");
