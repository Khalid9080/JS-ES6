

/* 
--> Shob gilo upadan nie kisu ekta korbe
--> .reduce(   callBackFunction,        initialValue)
        (Initial Value, Current Value) 
--> previous means sum of all the elements, current means the current element    
*/

const numbers = [1,2,3,4,5,6,7,8,9,10];
const total = numbers.reduce((previous, current)=> previous+current, 0); // 0 is the initial value of sum    
console.log(total);
