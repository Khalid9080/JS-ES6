
/*
 --> json() is a method that returns a promise, 
     so we can chain another .then() method to handle the response
 --> .json() is not similer but close to .parse() method

 -->  Working Process of API: 
    1. Fetch function k call kora, using API url [fetch('https://jsonplaceholder.typicode.com/todos/1')]
       fetch function or/API k call korle amra ekta promise pabo (Like an Object).
    2. Promise ta k resolve korar jonno (promise ta diteo pare ,naw dite pare,dite deri korte pare) amra .then() method use korechi.
    3. .then() method er vitor amra response.json() method k call korechi, jeta ekta promise return kore.
    4. json k console.log(json) kore dibo, jate amra dekhte pari je ki response asche.;
*/

// example 1
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json()) 
      .then(json => console.log(json))

// example 2
// const url='https://jsonplaceholder.typicode.com/todos/1'
// fetch(url)
// .then(response => response.json())  
// .then(json=>console.log(json));

// example 3

function loadData(){
    const url='https://jsonplaceholder.typicode.com/todos/1'
    fetch(url)
.then(response => response.json())  // 
.then(json=>console.log(json));
}