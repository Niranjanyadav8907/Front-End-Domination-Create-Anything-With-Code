// new topic Prototype inheritance

// prototypal Inheritance

// hum objects create karte hai and kisi ek parent constructor function
 //k eprototype mein kuchh add kr dete hai and jab bhi add hota hai to wo parent 
 //se banne waale sabhi chldren instances ko wo properties jo parent ko prototype 
 //mein di gayi thi wo milti hai saugat mein.

// function makeHuman(name, age) {
//   this.name = name;
//   this.age = age;
// this.printMyName = function () {
//   console.log(this.name);
// };
// }

//  aisa koi bhi function jismein aap this ka upyog kar rhe ho aur us function 
//ko call karte waqt aap new ka upyog karein, to new ka matlab waha par ek blank object hojaata hai

// blank object

// ek function jo ki this ka upyog kar raha ho and new ke dwara nayein nayein
// objects bnakar deta ho ese functions ko constructor function kehte hai

// function makeHuman(name, age) {
//   this.name = name;
//   this.age = age;
// this.printMyName = function () {
//   console.log(this.name);
// };
// }

// makeHuman.prototype.printMyName = function () {
//   console.log(this.name);
// };

// const human1 = new makeHuman("Harsh", 25);
// const human2 = new makeHuman("Arjun", 22);
// const human3 = new makeHuman("niranjan", 23);

// console.log(human1);

// human1.printMyName();
// human2.printMyName();
// human3.printMyName();
