console.log(47);
console.log("Good Morning");

var applePrice = 17;
console.log(applePrice);
console.log(typeof applePrice);

var name = " String and String";
console.log(typeof name);

var isHot = true;
var isRich = false;
console.log(isHot);
console.log(typeof isRich);

var name2 = "It is also string";
console.log(name2);
console.log(typeof name2);

var name = "AAA";
name = "BBB";
name = "CCC";
var NAME = "Software ENGINEER from Abdul Monem Limited";
var name3 = "Software ENGINEER from Abdul Monem Limited";
console.log(name3.toLowerCase());
console.log(name3.toUpperCase());
console.log(name3.indexOf("from"));
console.log(name3.indexOf("frm"));
console.log(name3.indexOf("Ab"));
console.log(name3.indexOf("FROM"));
console.log(name3.split("from"));

var num1 = 25;
var num2 = 15.5;
console.log(num1 + num2);

var num1 = 25;
var num2 = "15.5";
console.log(num1 + num2);

var num1 = 25;
var num2 = "15.5";
num2 = parseFloat(num2);
console.log(num1 + num2);

var num1 = 25;
var num2 = "15.5";
num2 = parseInt(num2);
console.log(num1 + num2);

var num1 = 25;
var num2 = "15.5";
num2 = +num2; /*string to numeric*/
console.log(num1 + num2);

var num1 = 25;
var num2 = 15.5;
num1 = "" + num1;
console.log(num1 + num2);
console.log(typeof num1);

var num1 = 0.1;
var num2 = 0.2;
var total = num1 + num2;
total = total.toFixed(5);
console.log(total);

var price1 = 25;
var price2 = 35;
var total = price1 + price2;
console.log(total);

var price1 = 25;
var price2 = 35;
var total = price2 - price1;
console.log(total);

var price1 = 25;
var price2 = 35;
var total = price1 * price2;
console.log(total);

var price1 = 25;
var price2 = 35;
var total = price2 / price1;
console.log(total);

var price1 = 25;
var price2 = 35;
var total = price2 % price1;
console.log(total);

var price1 = 25;
var price2 = 35;
price2++;
console.log(price2);

var price1 = 25;
var price2 = 35;
var newPrice2 = price2++;
console.log(newPrice2);

var price1 = 25;
var price2 = 35;
var newPrice2 = ++price2;
console.log(newPrice2);

var price1 = 25;
var price2 = 35;
price1--;
console.log(price1);

var a1 = 24;
var a2 = "String";
var result = a1 + a2;
console.log(result);

var a1 = 24;
var a2 = " 15";
var result = a1 + a2;
console.log(result);

var a1 = "Monjurul";
var a2 = "Arif";
var result = a1 + " " + a2;
console.log(result);

var num = -5;
var absoluteNumber = Math.abs(num);
console.log(absoluteNumber);

var num = 6.21;
var absoluteNumber = Math.round(num);
console.log(absoluteNumber);

var num = 6.56;
var absoluteNumber = Math.round(num);
console.log(absoluteNumber);

var num = 6.17;
var absoluteNumber = Math.ceil(num);
console.log(absoluteNumber);

var num = 6.99;
var absoluteNumber = Math.floor(num);
console.log(absoluteNumber);

var num = Math.random();
console.log(num);

var num = Math.random() * 100;
console.log(num);

var num = Math.random() * 100;
var result = Math.round(num);
console.log(result);

var todayDate = new Date();
console.log(todayDate);

var todayDate = new Date("1971-12-16");
console.log(todayDate);
