// new topic clousers--
// closures

// aisa koi bhi function jo ek function ko return karde usey closure kahte hai

// can we say any function which returns another function using some value of
// a parent function is called closure ?

// ek function jo return kare doosra function, aur use kare parent function ka koi variable

// function counter() {
//   var count = 0;

//   return function () {
//     count++;
//     console.log(count);
//   };
// }

// const res = counter();

// res();

//example2
// function timer() {
//   var a = 12;

//   return setTimeout(() => {
//     console.log(a);
//   }, 2000);
// }

// var res = timer();

// console.log(res);