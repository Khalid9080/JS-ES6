function loadData2(){  //Load Data 2 button er jonno
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res=>res.json())
    .then(data=>console.log(data))
}

function loadUsers(){ //Load User button er jonno
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data=> displayUsers(data))
}

function displayUsers(data){ // data is calling from another function 
   console.log(data);
}