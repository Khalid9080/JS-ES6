






const addProduct = () => {
    const produnctName=document.getElementById('product-input');
    const quantityProduct=document.getElementById('quantity-input');
    const product=produnctName.value;
    const quantity=quantityProduct.value;

    produnctName.value='';
    quantityProduct.value='';

    console.log(product,quantity);

    displayProduct(product,quantity);

    getSavedProduct(product,quantity);


}

const displayProduct=(pro,qua)=>{
    const ul=document.getElementById('product-container');
    const li=document.createElement('li');
    li.innerText=`${pro} : ${qua}`;
    ul.appendChild(li);
}

// age check kore nite hobe amder local storage e data store kora ase kina
const getStoredProduct=()=>{
    const storedCard= localStorage.getItem('khalid');

    let cart={};
    //stotredCard ektas string hishabe ase local storage e.
    if(storedCard){
        // JSON.parse() --> JSON String k JS Object{} a convert kore
        cart=JSON.parse(storedCard);

    }
    return cart;


}




const getSavedProduct=(product,quantity)=>{

    //calling getStoredProduct() function to get the stored data
    const storedCard=getStoredProduct();

    //product and quantity add kora hocche
    storedCard[product]=quantity;
   // console.log(cart);

   //Object{} return kortese jeta shorashori local storage e store kora jabe na.
   // er jonno JSON.stringify() use kora hoyeche
   const stringified=JSON.stringify(storedCard);
   //console.log(stringified);
   // set the data in local storage
   localStorage.setItem('khalid',stringified);

}

/* 
--> Akhon jodi browser refresh kore dekha jai toh dekha jabe je local storage e data store kora ase.
--> Store kora data ke abar display korar jonno getStoredProduct() function call kora hoyeche.
--> for in loop use kore storedCard er moddhe data gula access kora hoyeche.
*/

const displayStoredProduct=(product,quantity)=>{
    const savedCard = getStoredProduct()
    console.log(savedCard);

    for (const product in savedCard) {
        const quantity=savedCard[product];
        displayProduct(product,quantity);
        
    }
}

displayStoredProduct();


