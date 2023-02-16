var speech = "I am a      good person. I don't snore at night";
// console.log(speech.length);
var count = 0;
for (var i = 0; i < speech.length; i++) {
  var char = speech[i];
  // console.log(char);
  if (char == " " && speech[i - 1] != " ") {
    count++;
  }
}
count++; //after last word there is no whitespace
console.log(count);
