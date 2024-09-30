

/*
--> Destructur kno ekta oject k shohje pawa jae
--> if right side is an object left side of destructuring will be an object
*/

const actor = {
    name: 'Brad Pitt',
    age: 56,
    phone: "123456",
    money: 1000000,
}

const { phone, age } = actor // dane jodi obkect hoe bameo object count hobe
// property ta as a variable hishebe count hbe, jate property value ta pass kore



/*
 nicer style a na likhe , 
 uporer moto likhte hobe

*/


// const phone = actor.phone
// const name = actor.name
// const age = actor.age

console.log(phone);
console.log(phone);
console.log(phone);
console.log(age);
console.log(phone);
console.log(phone);
console.log(phone);


// array destructuring

const num = [1, 2, 3]
const [first, second, third] = num
const [x, y, z] = [12, 23, 56] //x=12, y=23, z=56

//advance destructuring
// array destructuring using array function

function doubleThem(a, b) {
    return [a * 2, b * 2]
}

const [prothom, ditiyo] = doubleThem(6, 9);
console.log(prothom, ditiyo); // a=12, b=18