


//      --- 8 ways to get undefiend ----



// 1. variable value not assigned
let a;
console.log(a); // undefiend

// 2. Function with no return


let first;
function add(a, b) {
    console.log(a + b);
}
const result = add();
console.log(result); // undefiend

// 3. Parameter pass na korle undefiend hobe.

function sub(x, y, z) {
    const total = x - y - z;
    console.log(x, y, z);

}

sub(20, 10);

// 4. Jodi right sight theke kno kisu return na kore tahole undefiend return korbe
function noNageative() {
    if (a < 0 || b < 0) {
        return
    }
    return a + b;
}
const total = noNageative(2, 5);
console.log(total); // undefiend

// 5. kno property object a nathakle by defealt undefiend return korbe
const fifth = { id: 1, name: "sakib", phone: 1234 };
console.log(fifth.address); // undefiend

// 6. index out of range thakle undefiend return korbe
const sixth = [1, 2, 3, 4, 5];
console.log(sixth[2], sixth[10]); // undefiend

// 7. inside an array index number delete korle undefiend return korbe
const num = [556,749,5,32,264,665,56];
delete num[2];
console.log(num[2]); // undefiend


//8. Set a variable value as undefiend
//   --> null use korbo
const eight = undefined;


console.log(typeof null); // object

