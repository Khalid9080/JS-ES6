

function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>displayPost(data))

}

/**
 * 1. jei new element ta add korte cai, oitar container elemets k paite hobe.
 * 2. create Child element
 * 3. set innerHTML/innerText
 * 4. appendChild
 * 
 */
   

function displayPost(post){
    const postContainer = document.getElementById('post-container');
    for (const p of post){
        console.log(p); // property gulo (userId,title,body) browser er console a dekha jabe
        const postDiv = document.createElement('div'); // assign value dinamically
        postDiv.classList.add('post'); // adding inline CSS class name
        postDiv.innerHTML=`  
        <h4> User :${p.userId} <h4>
        <h4> Post : ${p.title} <h4>
        <p> Post Description : ${p.body} <p>
        `; 
        postContainer.appendChild(postDiv);
    }

}

loadPost();

