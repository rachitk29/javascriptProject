// Working with Arrays (Simple methods)

let letters = ["a", "e", "i", "o", "u"];

// Reverese (Mutate the original array)

let reverse = letters.reverse();

console.log(reverse);
console.log(letters);


// concat

let nums = [1, 2, 3, 4, 5];
let concat = nums.concat(letters)
console.log(concat);

// join

let joined = letters.join('-')
console.log(joined);