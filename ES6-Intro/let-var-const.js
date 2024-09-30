//var : no reason to use var
//let : allow it to reassign
// const : dont allow it to reassign

//---------- Const ---------------
const money = 100;
const rich = money + 100;
console.log(rich);

// You can not reassigned this --

/* const count=10;
let count=count+10;
console.log(count);
*/

// You can not reassign whole array, but only some elements --
const numbers = [10, 20, 30];
numbers[1] = 40;
numbers.push(50);
console.log(numbers);


// cant do  using const this --
const student = {
    name: 'Jhon',
    age: 20
}

student = { name: 'Doe' };



//---------- Let ---------------

let pupile = {
    name: 'Jhon',
    age: 20
}

pupile = { name: 'Doe' };


//---------- loop---------------
let sum = 0
for (let i = 0; i < 10; i++) {
    const num = i;
    sum = num + num;
    console.log(i);
}

console.log(i); 