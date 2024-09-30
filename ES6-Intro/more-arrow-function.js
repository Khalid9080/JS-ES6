

// multile paramitazied arrow function 
// soto function er khetre return keyword use korte hobe dite hobe na
const difference = (x, y) => x - y;
const product = (first, second, third) => first * second * third;  


// single paramitazied arrow function using Object
const student = { name: 'Khalid', age: 24 };
const age = getAge(student);
const getAge = (person) => person.age;  // implicitly call korbe
console.log(age);

// single parameterise arrow function using Array
const getThird = numbers => numbers[2];
const third = getThird([10, 20, 30, 40]);
console.log(third);


//no parameterise arrow function 
const getPI = () => Math.PI;
console.log(getPI());



//large arrow function--
// boro function er khetre return keyword use korte hobe dite hobe
const doMath = (x, y, z) => {
    const sum = x + y + z;
    const mult = x * y * z;
    const result = sum + mult;  
    return result;
}