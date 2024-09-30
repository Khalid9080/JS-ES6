


function sum(a,b,c ){
    arguments.push(5);
    const result=a+b+c;
    return result;
}

const result = sum(2,3,4);
console.log(result); // 9