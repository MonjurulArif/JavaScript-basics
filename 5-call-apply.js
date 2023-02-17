const normalPerson = {
  firstName: "Rahim",
  lastName: "Udding",
  salary: 15000,
  getFullName: function () {
    console.log(this.firstName, this.lastName); //to access object property from inside a function
  },
  chargeBill: function (amount) {
    console.log(this);
    this.salary = this.salary - amount;
    return this.salary;
  },
  chargeBill: function (amount, tips, tax) {
    console.log(this);
    this.salary = this.salary - amount - tips - tax;
    return this.salary;
  },
};

console.log(normalPerson);
console.log(normalPerson.firstName);

normalPerson.chargeBill(150);
normalPerson.chargeBill(3000);
console.log(normalPerson.salary);

const heroPerson = {
  firstName: "Jamal",
  lastName: "Hossain",
  salary: 25000,
};

const friendlyPerson = {
  firstName: "Kamal",
  lastName: "Ahmed",
  salary: 24000,
};

normalPerson.chargeBill();

const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(2000);
heroChargeBill(3000);
console.log(heroPerson.salary);
console.log(normalPerson.salary);

const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
friendlyChargeBill(1500);
console.log(friendlyPerson.salary);

normalPerson.chargeBill.call(heroPerson, 900, 100, 10);
normalPerson.chargeBill.call(heroPerson, 3000, 300, 30);
console.log(heroPerson.salary);

normalPerson.chargeBill.call(friendlyPerson, 5000, 500, 50);
console.log(friendlyPerson.salary);

normalPerson.chargeBill.apply(heroPerson, [3000, 300, 40]);
normalPerson.chargeBill.apply(heroPerson, [4000, 400, 30]);
console.log(heroPerson.salary);
