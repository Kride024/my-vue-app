import { getCartProductFromLS } from "./getCartProductFromLS";
import { updateCartValue } from "./updateCartValue";

// to get the card data from localStorage
// to update the cart value and also to get the data always ready from local storage

getCartProductFromLS();
export const addToCart = (event ,id,stock)=>{

let arrLocalStorageProduct = getCartProductFromLS();
const currentProdElem = document.querySelector(`#card${id}`);
let quantity = currentProdElem.querySelector(".productQuantity").innerText;
let price = currentProdElem.querySelector(".productPrice").innerText;

// console.log(quantity, price);
price = price.replace("₹","");

let existingProd = arrLocalStorageProduct.find(
    (curProd) => curProd.id ===id
    
);

if(existingProd && quantity > 1 ){
    quantity=Number(existingProd.quantity) + Number(quantity);
   price = Number(price * quantity); 
   let updatedCart = { id,quantity,price};
   updatedCart=arrLocalStorageProduct.map((curProd)=>{
    return (curProd.id===id) ? updatedCart : curProd;   
   });
   console.log(updatedCart);
   
   localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));
}



if(existingProd  ){
    // alert("bro Duplicate hai");
    return false;
}

price = Number(price * quantity);
quantity=Number(quantity);

let updateCart = {id,quantity,price};
arrLocalStorageProduct.push({id,quantity,stock});

localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));
//update the cart button value
updateCartValue(arrLocalStorageProduct);
};