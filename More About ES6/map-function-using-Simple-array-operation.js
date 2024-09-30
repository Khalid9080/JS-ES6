
// double of an array -----------


// mathod-1 --
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubledNewArray = [];
for (const num of numbers) {
    const double = num * 2;
    doubledNewArray.push(double);
}

console.log(doubledNewArray);




// **mathod-2 --
/* 
 --> .map() array er upor jokhon calano hobe tokhon, function array er 
      prottect elements er upor calabe. jei result ta ashbe oita nije internally ekjagae rakhbe.
      result er array ta return korbe.


*/

const digits = [12, 34, 56, 78, 89]

function double(x) {  // this is a call back function
    console.log('number now:', x);
    return x * 2;
}

const result = digits.map(double);

console.log('Numbers double:', result);




// **mathod-2 [More Simplified] --> (Using Arrow Function)

const value = [23, 34, 25, 74, 4, 7, 3457, 86, 64]
const outCome = n => n * 2;

const finalResult = value.map(outCome);
console.log('Double of an array More Simplified:', finalResult);







// ***mathod-2 [MOST Simplified] --> (Using Arrow Function)

const number = [23, 34, 25, 74, 4, 7, 3457, 86, 64]
const multy = number.map(n => n * 2);
console.log('Double of an array MOST Simplified:', multy);

const add = number.map(n => n + 2);
console.log('Double of an array MOST Simplified:', add);

const vag = number.map(n => n / 2);
console.log('Double of an array MOST Simplified:', vag);




const len = ['Khalid', 'Saifullah', 'Shuvo', 'Rahim', 'Karim'];

const lengths = len.map(n => n.length);  // length property
console.log('Length of an array MOST Simplified:', lengths);

// First letter of an array
const FirstLetter = len.map(n => n[0]); 
console.log('First Letter of an array MOST Simplified:', FirstLetter);




