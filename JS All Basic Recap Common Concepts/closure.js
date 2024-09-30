

/*  --------- Closure -------------

--> Syntax:  

function Matchine() {
    let counter = 0;
    return function () {
        counter++;
        return counter;
    }
}
const firstServer = Matchine();
console.log(firstServer());
console.log(firstServer());


const secondServer = Matchine();
console.log(secondServer());
console.log(secondServer());


--> Explanation:
1. Ekta parent functionthakbe, oitar vitore ekta child function thakbe.
   chile function ta parent function k return korbe.
2. Parent function a value initialization hobe
3. Child function a value increment hobe and return korbe.
4. Function a ekta variable er moddhe rekhe jotobar call korbo totobar value increment hobe.
5. Same Function er Alada alada variable er jonno count alada hobe.
*/



function kitchen() {
    let roast = 0;  // initial value
    return function () {
        roast++;  // value increment
        return roast;
    }
}

const firstServer = kitchen(); // function calling and store in a variable
console.log(firstServer());
console.log(firstServer()); // value increment
console.log(firstServer());
console.log(firstServer());

console.log('---------');

const secondServer = kitchen(); // another calling to same function and store in a variable
console.log(secondServer());
console.log(secondServer());    // value increment
console.log(secondServer());