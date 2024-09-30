
// ----------------- Class ----------------

const products = [ 

    { id: 1, name: 'laptop', price: 100000, brand: 'hp' },
    { id: 2, name: 'desktop', price: 150000, brand: 'dell' },
    { id: 3, name: 'phone', price: 50000, brand: 'samsung' },
    { id: 4, name: 'tablet', price: 36000, brand: 'apple' },


 ]


 /*
  --> class er nijesso boisisto ba property thakbe ja onno property er shate milbe na. er jonno especial function Constructor use korte hoe.
 --> Similar typer ekta jinish use korte hoe, sheta holo class
 --> class diye object banano

 --> **Class er duita jinish thakbe
        1. Property -> jemon name, price, brand (boishisto)
        2. Method-> jemon buy, sell, discount (kaj korbe)

--> class theke similar typer object bananor jonno constructor use kori.

--> class er vitor variable use kora jabe but kno typeof dea jabe na.(const,let.var use kora jabe na)
--> class er vitor mathod use korte parbo but function keyword use kora jabe na.
--> Similar object banao jae new keyword use kore. [const lenevo = new Product();]
--> Ekta class er ekadhik instance thakte pare.
 */

//Class
    class Product{

        country='Bangladesh'; // default value

        constructor(name){
            this.name=name;
        }

        speak(talk){    
        console.log(`talking about ${talk}`);
       }
    }
//instance of the class
    const lenevo = new Product(' lenevo laptop'); // similer object banano
    console.log(lenevo); // Product { country: 'Bangladesh' } product object guloi show korbe
    lenevo.speak('oba kita kou');
  



    
//Class
    class Teacher{

        // constructor are especial characteristis of class object
        constructor(name,subject,address){ 
            this.name=name;
            this.subject=subject;
            this.address=address;
        }

        lecture(){ // method
            console.log(' My name is Tapan Sir');
        }
    }


//instance of the class
    const tapan =new Teacher('Tapan Sir','Physics','Dhaka');
    console.log(tapan);
    tapan.lecture();

//instance of the class
    const rashid=new Teacher('Rashid Sir','C++','Dhaka');
    console.log(rashid);
