
// Object --
const glass = {

    //keys   values
    name: 'glass',
    price: 3.99,
    color: 'golden',
    isAvailable: true
};

// keys
console.log(glass);
const keys = Object.keys(glass);

// values
const values = Object.values(glass);
console.log(values);

// Array of array/ 2 dimentional Array/ key value pair--
const pair = Object.entries(glass);
console.log(pair);

/* ------- Remove property from the object -----------*/

delete glass.isAvailable;
console.log(glass);

// Destructuring Delete 
// etar mane holo isAvailable property ta delete kore rest sob property ta niye asho
const { isAvailable, ...rest } = glass; // ...(u can named anything)


// freeze object
Object.seal(glass);
glass.source = 'BD'; // source ='BD'
glass.price = 5.99; // price = 3.99
delete glass.name;
console.log(glass);


// Object.seal(glass);
// glass.source = 'BD'; // source ='BD'
// glass.price = 5.99; // price = 3.99
// delete glass.name;
// console.log(glass);

