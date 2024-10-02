


// API

function loadUsers2() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers2(data))
}

/* 
--> Ekhane amra API er function tae alada ekta function banalam [displayUsers2(data)].
--> ei function tae nice amra ekta for of loop calie user name take list er modhe rekhe 
    dilam.
--> Button a click korlei eta kaj korbe. Nmae gula show korbe.

*/

function displayUsers2(users) { // perameter dite hobe
    // for (const user of users){
    //     //console.log(user);
    //     console.log(user.email);
    // }

    const ul = document.getElementById('users-list');
    for (const user of users) {
        //console.log(user.name);
        const li = document.createElement('li')
        li.innerText = user.name;
        ul.appendChild(li)
    }
}




 // Delete er khetre function er Fetch Scope  moddhe bole dite hobe [ method: 'DELETE',]
 // Delete a post
 function deletePost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
});
}


// Update a post
function PatchApost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PATCH',
        body: JSON.stringify({
          title: 'foo',
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}


// Create a new post
function CreatApost(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}