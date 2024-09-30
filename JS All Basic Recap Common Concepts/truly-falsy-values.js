
//----------- Truty: ----------
// 1. true
const a = true;
// 2. Any number positive or negative value without 0 will be truthy
        const c = 4;
// 3. jekono String truthy hobe, double space  '  ' (empty string) truthy hobe na.
        const name = 'sakib';
        const name2 = ' ';
// 4. '' string er vitor jai dibo truthy hobe.
const name3 = '0';
const name4 = 'false';
// 5. empty Object truthy hobe.
const obj = {};
// 6. empty array truthy hobe.
const arr = [];





//------------ Falsy: -----------

// 1. false
const x =false;
// 2. value of 0 is falsy
const y = 0;
// 3. empty string falsy hobe.  ''(empty string)
const z = '';
// 4. undefined values are falsely values
const b = undefined;
// 5. null is also falsy
const d = null;







if(x){
    coconsole.log('Value is truthy');
}
else{
    console.log('Value is falsy');
}


//optional

//check falsy value
const u = false;
if(!u){ // true hoile execute korbe
 console.log('Value is falsy');
}

const t=' '
//check truthy value
if(!!t){
    console.log('Value is truthy');
}