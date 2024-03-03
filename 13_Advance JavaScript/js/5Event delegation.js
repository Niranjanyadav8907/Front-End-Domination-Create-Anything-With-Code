// javaScript event delegation

// Event Delegation

// event delegation = jab aap event listener se kai saare different
// elements ke events ko handle kar sake

// event listener ko parent par lgao and unko id, class ya fir tag
// ke basis par differentiate karke different task karao

// var parent = document.querySelector("#parent");

// parent.addEventListener("click", (e) => { //function(details) // arrow function ke jgh ye bhi use kr skte hain 
// console.log("works");
// console.log(e);
// console.log(e.target);
//   if (e.target.id === "play") {
//     console.log("play song");
//   } else if (e.target.id === "pause") {
//     console.log("pause song");
//   }
// });