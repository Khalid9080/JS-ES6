

const products = [ 

    { id: 1, name: 'laptop', price: 1000, brand: 'hp' },
    { id: 2, name: 'desktop', price: 1500, brand: 'dell' },
    { id: 3, name: 'phone', price: 500, brand: 'samsung' },
    { id: 4, name: 'tablet', price: 300, brand: 'apple' },


 ]

 //map 
 // names guli k array akare return korbe
 const names = products.map(product => product.name);
 console.log(names);

 const prices = products.map(product => product.price);
console.log(prices);


//forEach()

products.forEach(p=>console.log(p.id))

//filter
const expensive=products.filter(p=>p.price>1000)
console.log('Filter Example :',expensive);

//FIND  
const affordable=products.find(p=>p.price<50000)
console.log('Find Example :',affordable);


//Reduce

const reduce= products.reduce((acum,current)=>acum+current.price,0)
console.log('Reduce Example :',reduce);