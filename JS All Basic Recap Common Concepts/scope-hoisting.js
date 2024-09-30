// ----------------- Scope -----------------

function add(a, b) {
    const total=a+b;
    console.log(a,b);     // function er body hocche function er scope.                       
                          // Er mane hocche function er vitore shokol operation kora jabe er baire just function k call kora jabe r kisu na.
    if(b>5){
       const sum=25+a+b;
            // scope er vitor sum k console.log() korte hobe
    }

    else {
        const sum =5+a+b;;
        var current =sum
    }
    console.log(current); // var dile scope er baire o access kora jabe
    console.log(sum); // sum is not defined/available outside of the if block
     return total;
}
//console.log(total); // total is not defined
add(4, 5); 

// var use korle scope er baire o access kora jabe, hoisting er karon e.
// hoisting er mane hocche jodi kono variable declare kora hoy tahole seta upore niye jabe.
// let and const use korle scope er baire access kora jabe na.(block scope)
// var use korle scope er baire access kora jabe.(function scope)
// const and let use korle scope er vitor access kora jabe.(block scope)
// function er vitor jodi kono variable declare kora hoy tahole seta function er scope er vitor thakbe.