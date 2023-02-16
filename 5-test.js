function explain_callback(name, age, work) {
  work();
  console.log("Hello", name);
  console.log("Your age", age);
  // console.log(task);
  work(name);
}

function washHand(name) {
  console.log("Wash hand with soap", name);
  console.log("\n");
}
function takeShower(name) {
  console.log("Take shower", name);
  console.log("\n");
}
function scrollFacebook(name) {
  console.log("Scrolls Facebook all time", name);
  console.log("\n");
}

explain_callback("Kabir", 17, washHand);
explain_callback("Rakib", 13, takeShower);
explain_callback("Nakib", 14, scrollFacebook);

function user() {
  name = "Arif";
  console.log(name);
}

user();
console.log(name);
console.log("\n");

(function user() {
  name = "Arif2";
  console.log(name);
})();
