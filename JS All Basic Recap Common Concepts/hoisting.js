

/* 
-->  Nomally Function k jodi upore call kori tahole function er shokol karjokrom hoisting hobe,
    orthat shokol kisu upore nie output show korbe.
--> But jodi kno variable aer moddhe rekhe decleare kora hoe function k tahole, 
    function k upore call korleo output dibe na.

*/



print5(); // output dibe - Inside Print 5: 5
print(); // output dibena - undefined


for (var i=0; i<5; i++) {
  console.log(i);
}
console.log('Outside Output',i); // 10


function print5(){
    console.log('Inside Print 5:',5);
}

const print=function(){
    console.log('Inside Print:',5);
}