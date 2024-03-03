// Advance JS God level JS

// this call apply bind

// this keyword js mein one of the most suspenseful keyword

// keyword ka matlab hota hai aisa word jiska koi matlab ho programming mein

// var if else for break. let const function this

// this keyword

// this ki value baar baar badal sakti hai alag alag conditions mein,
// saari conditions ko seekh jaao to this ko samajh jaoge


// in sabi me this ke value 
//  *global    - window 
//  global scope ka mtlb  kisi bhi scope ke ander code n likhna (mtlb kisi bhi function ke ander code n hona )
//  console.log(this);



// *function   - window
// function abcd() {
//   console.log(this);
// }
// abcd();



// *method     - object
// aisa function jo object ke ander ho use method kahte hain 
// var obj = {
  //   name: "Niranajn",
  //   abcd() {
  // console.log(this);
  //     console.log(this.name);
  //   },
  // };
  // console.log(obj);
// obj.abcd();
  
  

// *fnc inside method (es5)    - window
//method ke ander method bnnana----
// var obj = {
//   sayName: function () {
//     function childFnc() {
//       console.log(this);
//     }

//     childFnc();
//   },
// };

// obj.sayName();



// *fnc inside method (es6)    - object
// => arrow function me this ka  value window nhi hota kyu ki arrow function apne aap ko yaad rkhta hain 
//jo apne value ko parent se leta  hain 
// var obj = {
//   sayName: function () {
//     console.log(this);
//     const childFnc = () => {
//       console.log(this);
//     };

//     childFnc();
//   },
//   age: 23,
// };



// *constructor fnc mein this ki value   - new blank object
// aise function jisko aap new function ke rup me call chlate hain use constructor kahte hain 
//var obj = {
  //   sayName: () => {
  //     console.log(this);
  //     const childFnc = () => {
  //       console.log(this);
  //     };
  
  //     childFnc();
  //   },
  //   age: 23,
  // };
  
  // obj.sayName();
  
  // function add() {
  //   console.log(this);
  // }
  
  // add();
  
  // function add() {
  //   console.log(this);
  // }
  


// *even listener mein this ki value     - that element jispar event lis lga ho
 //document.querySelector("h1").addEventListener("click", (e) => {
  //   console.log(this);
  // });
  
  // document.querySelector("h1").addEventListener("click", function () {
  //   console.log(this);
  // });
  