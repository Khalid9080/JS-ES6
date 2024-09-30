/*

--- ...numbers is a spread operator
---> The spread operator allows an expression to be expanded in places where multiple arguments or elements are expected.
---> Emni kicu dile only array ta pabo but ...numbers dile array only number gulo return korbe

*/

const max= Math.max(6,23,15,45,1,89,89)
const numbers=[45,545,23,1,56,23,565,12,]
const arrayMax=Math.max(numbers)
console.log(...numbers); // spread operator
console.log(arrayMax)


//use spread operator to copy array

const friends = [1,2,3,4,5,6,7,8,9]
const bondhu = friends ;

const dosto = [...friends]  /* friends k 100  push korleo sheta r 
                                dosto te asbe na , reference ta dhore rakhe na notun vabe kore
                            */
friends.push(100)
console.log(dosto);
console.log(friends); 

//advance spread operator

const songkha = [89,98, ...friends,100] // immedieatly adding number
console.log(songkha);