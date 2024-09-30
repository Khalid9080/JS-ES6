
//function declaration
function add(a,b){
    return a+b;
}


//function expression 
const add = function(a,b){ ///annonymus function
    return a+b;
};


//arrow function
// use it in simple case
const add = (a,b) => a+b;
const add =(num1,num2,num3,num4) => num1+num2+num3+num4;
const multiply = (num1,num2) => num1*num2;

//function call--
const s = add(10,20);
console.log(s);
const sum = add(10,20,30,40);
console.log(sum);
const result = multiply(10,20);
console.log(result);