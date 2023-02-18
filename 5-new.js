class Person {
  constructor(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
  }
}

const heroPerson = new Person("Hero", "Alom", 2000);
console.log(heroPerson);
const friendlyPerson = new Person("Hero", "Kalam", 25000);
console.log(friendlyPerson);

//in old JS function was used as class
function Person1(firstName, lastName, salary) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.salary = salary;
}

const oldPerson = new Person1("Grand", "Father", 1200);
console.log(oldPerson);
