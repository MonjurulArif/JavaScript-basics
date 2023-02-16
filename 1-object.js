var student = { id: 12, phone: 14666, name: "Arif" };
var student2 = { id: 13, phone: 016777, name: "Kabir" };

console.log(student);
console.log(student2);

var phoneNo = student.phone;
console.log(phoneNo);

var phoneNo2 = student["phone"];
console.log(phoneNo2);

var phonePropertyName = "phone";
var phoneNo3 = student[phonePropertyName];
console.log(phoneNo3);

console.log("\n");

student.phone = 5441;
student["phone"] = 66641;
student[phonePropertyName] = 9994561;
var phoneNo = student.phone;
console.log(phoneNo);
console.log(student);
console.log("\n");

student.hobby = "Playing";
student["hobby"] = "Singing";
console.log(student);
console.log("\n");

var test = [4, "Arif", "Playing"];
console.log(test);
console.log(typeof test);
