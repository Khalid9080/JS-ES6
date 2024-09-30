

/** What we have learned so far :
 * 
 * 1.Var Let Const
 * 2. default parameter
 * 3.template string
 * 4. arrow function
 * 5. distructuring and spread operator
 * 6. Object.keys and Object.values Object.entries
 * 7. for of loop using array and object
 * 6. for in loop using object
 */


// template string
const a=56;
const numbers =[1,2,3,4,5,6,7,8,9,10];
const person = {
    name:'John',
};

const message = `Hello ${person.name}!. Your roll is ${a}. Your makrs is ${numbers[6]}`;
console.log(message);

// Arrow function
const square = x => x*x;
const sum =(a,b)=>a+b;

// Distructuring adn spread operator

const {age,z, ...others}={x:2,y:5,z:3, name:'John', age:25};
const[first,second,...remaining] =['ram','shyam','hari','sita','gita'];