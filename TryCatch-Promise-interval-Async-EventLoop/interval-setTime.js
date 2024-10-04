 

 // setTimeout() mane bujhae eita asynchronus vabe ektu pore hobe.
 /*
   --> setTimeout(()=>{ console.log(3) }, 4000) 
      - eitar mane holo 4000mili sec/4 sec pore, console.log(3) show korbe
   --> setTimeout() execute korbe.
 */


console.log(1)
console.log(2)

// setTimeout(()=>{
// console.log(3)   
// })


// Another way -- using parameter

setTimeout(()=>{
    console.log(3)
}, 4000) 

console.log(4)
console.log(5)
console.log(6)


/*  ---- setInterval() -----
  num=6 porjonto interval colte thakbe  
  bar bar ekta nidristo shomoy porjon execute korte thakbe, 
  jotokhon porjonto clearInterval time add kora na hoe

*/

let num=0
const clockId=setInterval(()=>{
    num++
    //mum=num+1
    //num+=1
    if(num>6){
        clearInterval(clockId)
    }
    
    console.log(clockId, num)},2000)