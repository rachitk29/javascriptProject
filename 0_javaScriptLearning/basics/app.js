// scope of var

// var a = 10;
// if (true) {
//   var a = 20;
//   console.log("Inside if:", a); // 20
// }
// console.log("Outside if:", a); // 20

// scope of let

// let b = 10;
// if (true) {
//   let b = 20;
//   console.log("Inside if:", b); // 20
// }
// console.log("Outside if:", b); // 10





// string literals style 1

// let title = "hi"
// let name = "rachit"

// console.log(title + " " + name); // hi rachit

// string literals style 2

// let title = "hi"
// let name = "rachit"

// console.log(`we welcome ${title} ${name}`) // we welcome hi rachit






// String access character by index

// let name = "raj";

// console.log(name[0]);
// console.log(name[1]);



// string legth

// let words = "hello world"
// console.log(words.length);




// uppercase and lowercase

// let word = "Hello"
// console.log(word.toLowerCase());
// console.log(word.toUpperCase());




// search index present or not

// let word = "hello"
// console.log(word.indexOf('e')); // present 1
// console.log(word.indexOf('r')); // not present -1


// console.log("helllo");

// let word = "hello"
// console.log(word.includes('e'));
// console.log(word.includes('z'));




// Trim method remove the white space from start and end

// let word = "      hello    rachit"
// console.log(word.trim());


// let word = "hello"
// console.log(word.length)
// console.log(word.slice(1,2));
// console.log(word.slice(1));
// console.log(word.slice(-1));


// let words = "hello world"
// console.log(words.split(""));
// console.log(words.split());
// console.log(words.split("e"));


// console.log(words.split(" "));
// console.log(words.split());
// console.log(words.split("e"));



// pre increment

// let a = 10
// console.log(a);

// a++
// console.log(a);

// ++a
// console.log(a);


// let age = "20"
// if (age == 20) {
//     console.log("adult");
// }




// strict equality

// let age = "20"
// if (age === 20) {
//     console.log("adult");
// }

// let umar = 20
// if (umar === 20) {
//     console.log("adult hai aaap");
// }

// let stringType = "54"
// console.log(stringType, typeof stringType);




//number method

// let numberType = Number(stringType)
// console.log(numberType, typeof numberType);


// Imp Note
// in NUMBR method passing String is must of numberic values



// let numberType = 56

// string method

// let stringType = String(numberType)
// console.log(stringType, typeof stringType);


// Arrays

// let dishes = ["Biryani", "Kabab Paratha ", "Burger", "Momo"]
// access
// console.log(dishes[0]);
// console.log(dishes[2]);


// Modify the array

// dishes[0] = "murgaa"
// console.log(dishes);
// join method



// console.log(dishes.join());

// let newDishes = ["sweet-dish", "Paani-poori"]

// console.log(dishes.concat(newDishes));
// let updateDishes = dishes.concat(newDishes)



// Length

// console.log(updateDishes.length);

// push method

// console.log(updateDishes.push("Chholey--Bhaturey")); // return the nrew lenght of an array
// console.log(updateDishes);

// POP : remove the element from the end and update it also

// console.log(updateDishes.pop());
// console.log(updateDishes);





// Boolean Values and Comparison Operators

// let booleanType = true;
// let stringType = "true";

// console.log(typeof booleanType, typeof  stringType);


// Methods return boolean values

// let email = "rachitkumar@gmail.com"
// let booleanValue = email.includes("@")
// console.log(bo);


// console.log("rachit");
// const name = "katariya"
// console.log(name);







// control flow
// for loops

// run the specific taks for 5 times
// without loop

// for(let i=0; i<10; i++) {
//     console.log(i);
// }



// Usecase of for loop




// let dishes = ["Biryani", "Kabab Paratha ", "Burger", "Momos"]

// access the array values
// console.log(dishes[0]);

// for(let i=0; i<dishes.length; i++) {
//     console.log(dishes[i]);
// }

// let j =  1;
// while(j < 5) {
//     console.log("Mehak Pagal");
//     j++;
// }






// Variables and Block Scope

// SCOPE -> Area Where variable is defined or accessible


// let score = 90; // Glocal Scope

// if (true) {
//     score = 50
//     scope = 30
//     console.log("Scope wala hai ye : " + score);
// }

// console.log(score);

 



//  Ternary operator ( ? :)


// let age = 20

// if (age > 18) {
//     console.log("Qualify");
// } else {
//     console.log("Fail");
// }

// Single line solution

// let result = age > 18 ? "Qualify" : "Fail"
// console.log(result);




// Function

// It is simply a piece of code which we can use in our program many times

// It is just like a variable holding some piece of code


// function nameOfFunction() {
//     console.log("You are running code present inside the function");
// }

// function call
// nameOfFunction()

// // Funtion Expression

// let fun = function () { // anonymous func
//     console.log("This is an example of function expression");
// }

// console.log(fun());







// Real life example

// Passing values (Arguments and Parameters)

// let invitaion = function (name = "rachit") {
//     console.log(`Congrats ${name} you are invited`);
// }

// invitaion("marie")
// invitaion()

// Function me hamesh ek return value hoti hai chahe aap return kare ya nahi

// let ageCalculator = function (birthYear, currentYear = 2025) {
//     let age = currentYear - birthYear;
//     console.log(`Your current age is = ${age}`);
//     return age;
// }

// ageCalculator(2005, 2025)




// ARROW Functions(ES6)

// Special Form of Function Expression
// It allows us to write function more fast becuase
// No need to use function keyword
// No need to use paranthesis() in case of single parameter
// No need to use curly {}  if single line code in function
// No need to use return statement if single line cod ein function



// Passing function as an Arguments(Higher order function example)

// let upperCase = function(str) {
//     return str.toUpperCase();
// }

// let lowercase = function(str) {
//     return str.toLowerCase();
// }

// let transformer = function(str, fun) {
//     return fun(str)
// }

// console.log(transformer("hello", lowercase));





// another version of Higher Order Function

// let compliment = function (msg) {
//     return function (name) {
//         console.log(`${msg} ${name}`);
//         return
//     }
// };

// console.log(compliment("You are a good")("rachit"));



// Immediately invoked function Expression
// Executed Only Once


//  now this is expression

// (function(name) {
//     console.log("This function will never execute again", name);
// }) ("IIFE")




// setTimeout out setInterval
// setTimeout -> Run Funcion "Once" after "Interval" of time
// setInterval -> Run function repeatedly, Starting after the Interval of time, then repeating


// function greetings() {
//     console.log("Welcome mere bhai aa gya tu phr se basics par");
// }
// setTimeout(greetings, 3000)

// setTimeout(function greetings() {
//     console.log("aa gaya mere bhai");
// })



// Set Interval

// function greetings() {
//     console.log("hey rachit this side nandnini");
// }

// setInterval(greetings, 1000)




// Hoisting
// Variable "declaration" are "hoisted" toward "top" of their scope

// functiond declaration
// test()
// function test() {
//     console.log("Hello Programmer");
// }


// Not function expression or arrow function

// test()
// let test = () => {
//     console.log("Hello Programmer");
// }



// Introduction to objects in JavaScript

// let car = {
//     color: "black",
//     model: "2022",
//     company: "Honda"
// }

// console.log(car);

// Accessing the Javascript object properties

// console.log(car["company"]);
// console.log(car.model);
 

// let propertyName = "color"

// console.log(car[propertyName]);
// console.log(car.propertyName)


// Modifying the Object

// car.color = "Brown"
// console.log(car.color);




// VERY IMPORTANT
// Function vs Method

// let ageCalculate = function (birthYear) {
//     let age = currentYear - birthYear;
//     console.log(`Your current age is = ${age}`);
//     return age;
// }

// ageCalculator(2005)




// METHOD ----> It is nothing but object property(Key) holding
// Function as "Value"

// let person = {
//     ageCalculate: function (birthYear = 2005) {
//         let age = 2023 - birthYear;
//         return age;
//     }
// }

// console.log(`Current age is ${person.ageCalculate(2005)}`);





// THIS Keyword

// In Each Method we have an access of special keyword called
// "This"

// "this" keyword represent the object, "Calling" the "Method"
// In which "this" is "Present"


// Example

// let person = {
//     firstName: "Harry",
//     lastName: "Brook",
//     city: "Delhi",
//     birthYear: "2004",
//     education: "Software Engineer",
//     getSummary: function () {
//         return `${this.firstName} ${this.lastName} lives in ${this.city} his birth year is ${this.birthYear} and he is ${this.education}`
//     }
// }

// console.log(person.getSummary());





// forEach method of array

// Its another type of loop which we used to traverse
// over the array

// let dishes = ["Biryani", "Kabab", "Momos", "Finger"]

// using for loop

// for (let i = 0; i < dishes.length; i++) {
//     console.log(dishes[i]);
// }

// console.log("**************");

// using forEach

// dishes.forEach(function (element) {
//     console.log(element);
// })




// Math Object built in object in javascript

// console.log(Math);

// let number = 7.4

// console.log(Math.round(number)) // round to the nearest integer

// console.log(Math.floor(number)) // round to down

// console.log(Math.ceil(number)) // round to up

// console.log(Math.trunc(number)); // remove the decimal part



// let random = Math.random()
//     console.log(Math.round(random ))

// function greetings() {
//     console.log(Math.round(random))
// }

// setInterval(greetings, 1000)






/* 

// call and apply method
// we can manually set the value of "this" keyword using "call" and "apply"

let mainPlane = {
    airline: "Fly India",
    iatcode: "FI",
    bookings: [],
    book: function (flightNum, name) {
        console.log(`${name} Booked Flight on ${this.airline} with flight number ${this.iatcode} ${this.flightNum}`);
        this.bookings.push({flight:`${this.airline}`, name:name})
    }
}

mainPlane.book(55, "Carlos")
mainPlane.book(25, "Areena")
// console.log(mainPlane);


// New Airline launched of same group
let childPlain = { 
    airline: "Child Plain",
    iatcode: "CP",
    bookings: [],
}

let book = mainPlane.book; 
// book(665, "Lurie") // Book is regular function
// "this" value is "undefined" at least in strict mode

// Solution using "call" method

book.call(childPlain, 6969, "Zaxk")

console.log(childPlain);

book.call(mainPlane, 69, "Lurie")
console.log(mainPlane);


book.apply(childPlain, [786, "HAMESHHH"]) */









// BIND Method

// let user = {
//     firstName: "Harry",
//     lastName: "Brook"
// }

// function greet() {
//     console.log(`Welcome ${this.firstName} ${this.lastName} on coder dost channel`);
// }

// let greets = greet.bind(user);
// greets()





/* 

// "Object/Arrays" how "reference" are passed to

let arr = [1, 2, 3, 4, 5];

let getRef = arr;

getRef[5] = 7
getRef.shift()

console.log("Original array", arr);
console.log("getRef array", getRef);


console.log("***************");

// pass by value

let getValue = [...arr]

getValue[5] = 8
getValue.shift()

console.log("Original array", arr); // no change
console.log("getValue array", getValue);


 */










// For in loop (Each iteration return a "Key" or object)

let car = {
    model: "2022",
    color: "black",
    company: "Skoda"
}

console.log(car);

for (let key in car) {
    console.log(key);
}
