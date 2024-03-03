// new topic javaScript call , apply , bind

// call apply bind
// ye teen tareeke hai function ko call karne ke kisi object ko this maan kar

// * call this ka value kya rkhna ye function call krte time aap decide kr skte hain 
// function abcd() {
//   console.log(this);
// }

// abcd();
// const obj = { name: "Niranjan" };

// abcd.call(obj);


// * apply  me pahla value this dena hota or dusra value el array hota hain
// function abcd(a, b, c, d) {
//   console.log(this, a, b, c, d);
// }

// abcd();
// const obj = { name: "Niranjan" };

// abcd.apply(obj, [1, 2, 3, 4]);

// function abcd() {
//   console.log(this);
// }

//* bind  bilkul call ki trah hain bind function ko chlata nhi ek new function bnata jo aap baad me chla skte hain  
// abcd();
// const obj = { name: "Niranjan" };

// const res = abcd.bind(obj);

// console.log(res());
