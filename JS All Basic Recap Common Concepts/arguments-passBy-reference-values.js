


function sum(a,b,c ){ //parameter
    console.log(arguments); //arguments er ekta object return kore
    //arguments.push(5);
    const result=a+b+c;
    return result;
}

const total = sum(12,56,78,56,53,13); //arguments
console.log(total); // 9