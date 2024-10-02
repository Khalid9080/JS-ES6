
 
/*     -----  catch() -----
 --> .jon() is a method that returns a error promise. error take dhorar jonno 
    .catch() use kora hoy


 */

    // 1st way
const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json()) 
        .then(data => console.log(data))
        .catch(error => console.log('Error Paise', error))
}



    // 2nd way USING async() and await

    /*
    --> To avoid .then() multiple times
    --> fetch() function esxcute er shomoy karo jonno wait kore na.
    --> wait koranor jonno await use kora hoy.
    --> await use korar jonno function er age async keyword use kora hoy.

    */
const loadComments2 = async() => {

    const res = fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await res.json()
    console.log(data);

}

// 3rd way try and catch


const loadComments3 = async() => {

    try{
          const res = fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await res.jon()
    console.log(data);
    }

    catch(error){
        console.error('Error Paise', error)
    }
  

}