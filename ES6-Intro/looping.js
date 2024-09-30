


const numbers = [1, 2, 3, 4, 5];

// for(let i = 0; i < numbers.length; i++) {}  --> Mjhe moddhe use korbo

// While loop --> mjhe moddhe use korbo

// **for of loop --> use korbo
/*
  amra string othoba array er upora for of use korte pari
  but object er upor parbona.
*/

for(const num of numbers) {
   // console.log(num);
}

const nobab = 'siraj Ud Doula';
for(const char of nobab) {
    console.log(char);
}
 


// **for in loop --> object er upor use korbo
const glass = {

    //keys   values
    name: 'glass',
    price: 3.99,
    color: 'golden',
    isAvailable: true
};

for(const key in glass) {
    console.log(key);
}



