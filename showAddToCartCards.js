 import products from "./api/products.json";
 import { getCartProductFromLS } from "./getCartProductFromLS";

 let cartProducts = getCartProductFromLS();

 let filterProducts = products.filter((curProd)=>{
  return cartProducts.some((curElem)=> curElem.id == curProd.id);
// using some we get only element which are equal 
});

 console.log(filterProducts);
 