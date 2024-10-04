

/* Promise syntax--> Clinet site a beshi use korbo na.

    new Promise((resolve, reject) => {
        condition, Operation execution
        })


*/




const myLoader = () => {
    return new Promise((resolve, reject) => {
        const value = Math.random();
        if (value <= 0.5) {
            resolve(value)
        }
        else {
            reject(value)
        }
    })
}

myLoader()
    .then(data => console.log('Resolve Data', data))
    .catch(err => console.log('Rejected Value', err))



fetch('')
.then(res=>res.json())
.then(data=>console.error(err))

//another way -- Using async await ---
// async dile then then dea lagbe na.
async function loadData(){
    const res = await fetch('')
    const data = await res.json()
    console.log(data);

}



//smae thing using arrow function ---

const taskLoader=async()=>{
    const res = await fetch('')
}
loadData();