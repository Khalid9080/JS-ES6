
// JavaScript is a Dynamic type language

// Primitive Data Types 
// --> simple ekta value carry kore
const a=5;
const b='Khalid Saifullah';
const d=true;

// Non-Primitive Data Types
//--> onk gula value carry kore
const age=[12,34,5657,758];
const student={is:23,  class:7}
//console.log(typeof a,typeof b,typeof d,typeof age,typeof student);


let x=5;
let y=x;
console.log(x,y);
y=10;
console.log(x,y);

let p = {name:'Khalid', age:23};
let q = p;

//q={name:'Saifullah', age:23};
q.age=24;
console.log(p,q);

/*
 --> Non premetive data type a shobgula ekta reference hisebe pass hoy
 --> ekbar variable change korle reference shobgula change kore dae.
*/