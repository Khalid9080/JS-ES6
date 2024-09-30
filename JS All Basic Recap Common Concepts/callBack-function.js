
function greetings(greetingHandler,name){
    greetingHandler(name);
}


//const num = 45;
//const num = [45,54,78,32454,54,534,3441,564,546];
//const num = {name: 'sogir', phone: 4578};

function greetingHandler(name ){
    console.log('Good Morning',name);
}

function Evening(name ){
    console.log('Hello, How are You',name);
}


greetings(greetingHandler,'KHALID'); 
greetings(greetingHandler,'SAIFULLSHAH'); 
greetings(greetingHandler,'SAZZAD'); 

greetings(Evening,'Tom Solaiman');
greetings(Evening,'KHAN');