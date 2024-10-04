
/*  ---- Asysncronous (ekshate) ------
--> setTimeout(), fetch() sequentially cole na
--> normal function calling sequentially cole.

*/


/*  ---- Synchronous (alada vabe) ------------
console.log(1);
console.log(2);
console.log(3);
console.log(4);
*/

console.log(1);
console.log(2);
console.log(3);
console.log(4);


// setTimeout(doSomething, 4000)

setTimeout(()=>{
    console.log('Lazy Logged')
},4000 )


//doSomething();

/*
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
*/

console.log(6);
console.log(7);
console.log(8);

function doSomething(){
    console.log(5)
}