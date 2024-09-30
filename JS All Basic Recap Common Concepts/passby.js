/*

-->
    1. Pass by value (Primitive data types) er khetre, je value arguments a dibo oi value
       function er vitore change korleo ager value tai thakbe.
    2. Pass by values 
    
*/

let n1=5;
let n2=10;
function multiply(a, b) {
    a=37;
  const result = a * b;
  return result;
}

console.log(n1); // 5
const output = multiply(n1, n2);
console.log(output); // 50



/*

-->
    1. Pass by value Non-Primitive data types (Objects er khetre), kno object er property gulo k function scope er vitor new property/key setup kore 
    angshik vabe object k change kora jabe. Object gulo reference hisebe pass hobe. Vitore change korle baire otake pawa jae
    
*/



let student = {name: 'John',parnter: 'Jane'};   
let student1 = {name: 'Khalid',parnter: 'Saifullah'};


function makeMovie(actor,actrees){
    actor.name='Sazim';
    actrees.name='Fahmida';{

}
}
console.log(student,student1);
makeMovie(student,student1);
console.log(student,student1);