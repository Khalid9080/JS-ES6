
//  ------------JSON (JavaScript Object Notation)----------------

// JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax. 
// It is commonly used for transmitting data in web applications (e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa).

const user={id:1,name:"John",age:25};

// JSON.stringify() -------

// JSON.stringify() method converts a JavaScript object or value to a JSON string "", exepet values like undefined, function, symbol
const stringified=JSON.stringify(user);

console.log(user);
console.log(stringified);


const shop={
    owner:"Khalid",
    adderss:{
        city:"Dhaka",
        country:"Bangladesh"
    },

    products:["Laptop","Mobile","Tablet"],
    revenue:100000,
    isOpen:true,
    isNew:false,
}

console.log(shop);
const shopJSON=JSON.stringify(shop);  // Object er property gulo shob JSON String a convert hoe jabe.
console.log(shopJSON);

/* OUTPUT:
{"owner":"Khalid","adderss":{"city":"Dhaka","country":"Bangladesh"},
"products":["Laptop","Mobile","Tablet"],"revenue":100000,"isOpen":true,"isNew":false}

*/



// JSON.parse() --------

// --> Shokol JSON String k punorae Object a rupantor korbe.

const ShopObj=JSON.parse(shopJSON);
console.log(ShopObj);