
// normal case
function add(num1, num2) {
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}

const sum = add(10, 20);



//deafult case
/* /arguments/function call er smose kno value na dei tahole deafult value ke count korbe, 
   r jodi duita value e add kora hoe tahole only function call er je value ta ase ota k call korbe.
*/

function add(num1, num2 = 0) { //deafult value 0
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}

const jog = add(10); //arguments

function fullName(first, last = '') { //deafult value '' is empty string
    const name = first + ' ' + last;
    return name;
}


function friends(numbs=[]){ // deafult array value empty array

}

function person(human={}){ //deafult object value empty object

}