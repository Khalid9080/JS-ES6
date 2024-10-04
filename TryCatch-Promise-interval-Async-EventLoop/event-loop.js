
/* satck a ekta erpor ekta kore function thakbe, 
   jodi ekta function aro ekta function call kore tahole 
   stack a last a je function ta thakbe seta first a execute hobe
   then aro ekta function call korbe.

   fetch() function ta asynchronus vabe kaj korbe,
   opekkha korbe ,stack a kaj sesh hobar por execute korbe. 

*/

function a(){
    console.log('a');
    b()
    console.log('aa');
}

function b(){
    console.log('b');
    c()
    console.log('bb');
}
function c(){
    console.log('c');
    console.log('cc');
}


setTimeout(()=>{
    console.log('inside timeout')
}, 2000)


fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(json => console.log(json))
a()
