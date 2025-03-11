import { getCartProductFromLS } from "./getCartProductFromLS"

export const fetchQuantityFromCartLS =(id,price)=>{
let cartProducts = getCartProductFromLS();

let existingProduct = cartProducts.find((curProd)=>curProd.id == id);
let quantity =1;
// let prices=price;

if(existingProduct){
    quantity = existingProduct.quantity;
    price =  (quantity* price).toFixed(2);
}
return { quantity, price};

};