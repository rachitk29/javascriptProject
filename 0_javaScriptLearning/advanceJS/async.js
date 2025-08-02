// Asymchronous JavaScript

// Async Code Example

// console.log(1);
// console.log(2);

// setTimeout(() => {
//     console.log("Call back funtion called after 3 econds");
// }, 3000)

// console.log(3);
// console.log(4);


// TDZ = Temporal Dead Zone

// const say = function () {
//     let msg = 'hi'
//     console.log(msg);
//     say();
// }

{
const say = () => console.log(msg); 
    let msg = "hi";
    say();
}