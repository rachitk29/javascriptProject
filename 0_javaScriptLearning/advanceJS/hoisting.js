// y = 5
// console.log(y);
// var y;


// for(let i=0; i<5; i++) {
//     setTimeout(
//         () => console.log(i),
//         1000) 
// } 
// for(var i=0; i<5; i++) {
//     setTimeout(
//         () => console.log(i),
//         1000) 
// }


// You can fix the var version using an IIFE (Immediately Invoked Function Expression):

// for (var i = 0; i < 5; i++) {
//   (function(i) {
//     setTimeout(() => console.log(i), 1000);
//   })(i);
// } 