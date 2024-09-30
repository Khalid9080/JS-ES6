


function sum(a,b,c ){ //parameter
    //console.log(arguments[4]); //arguments er ekta object return kore, array like object
    //arguments.push(5);

    const args=[...arguments]; //arguments er array like object ke array te convert korlam
    console.log(args);
    const result=a+b+c;
    return result;
}

const total = sum(12,56,78,56,53,13); //arguments
console.log(total); // 9

console.log(sum.length); //3 //parameter er length