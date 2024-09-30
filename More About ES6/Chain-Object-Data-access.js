
// ---------Data access-------

// How to get user address--
// its an array of object
const data =[{id:1, name:'John', address:'123 Main St'},]
console.log(data[0].address);


// How to get second product price--
const products = {
    count :5000,
    data:[
        {id:1, name:'product 1', price:100},
        {id:2, name:'product 2', price:200},
        {id:3, name:'product 3', price:300},
        {id:4, name:'product 4', price:400},
    ]
}

console.log(products.data[1].price);


// How to get jhons second address name--
const user = {
    id:1,
    name:'John',
    age:25,
    address:{
        street:{
                first: '123 Main St',
                second: 'Goli 1',
                third: 'Goli 2',
            },

        city:'New York',
        zip:10001
    }
}

console.log(user.address.street.second);




const user2 = {
    id:2,
    name:'Khalid Saifullah',
    age:25,
    add:{
                one: '123 Main St',
                two: 'place 1',
                three: 'place 2',
            },

    city:'New York',
    zip:10001
    }


console.log(user2.add.street?.second);
/*street? meaning- jodi add er por street namer kno property na pae tahole
  execute korbe na. paile execute kokrbe.
*/
