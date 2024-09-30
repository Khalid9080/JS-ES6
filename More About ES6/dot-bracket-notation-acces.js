
//  -- Object Property Access 2 types --



const person = {
    name: 'John Doe',
    city: 'New York',
    country: 'USA',
    3: 'three',             // *for this we have to use bracket notation using string
    'add-dress': 'Dhaka'    // *for this we have to use " " or ' ' in bracket notation.
}

//dot notation
console.log(person.name); // John Doe



//bracket notation
/*
--> String banaia dite hobe.
--> or Variable banaia dite hobe.
*/
console.log(person['country']); // USA
console.log(person['3']); // three
console.log(person["add-dress"]); // Dhaka

const porp='city';
console.log(person[porp]); // New York


