

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    sleep(){
        console.log(`${this.name} is sleeping now.` ); // ${this.name} constructor er name property k call kore
    }

    activity(){
        this.sleep(); //  method k call kora
    }
}

const kodom = new Person('Khalid',25);
console.log(kodom);
kodom.sleep(); // Khalid is sleeping


const badam = new Person('Kacha Badam',30);
badam.sleep(); // Kacha Badam is sleeping

badam.activity(); // Kacha Badam is sleeping now.  // method k call kora