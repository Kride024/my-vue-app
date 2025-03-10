 import products from "./api/products.json";
 import { getCartProductFromLS } from "./getCartProductFromLS";

 let cartProducts = getCartProductFromLS();
//In filterProduct all value of LS stored
 let filterProducts = products.filter((curProd)=>{
 return cartProducts.some((curElem)=> curElem.id == curProd.id);
// using some we get only element which are equal 
});

 console.log(filterProducts);

 //---------------------------
 // to update the addToCart page
 //------------------------------

 const cartElement = document.querySelector("#productCartContainer");
 const templateContainer = document.querySelector("#productCartTemplate");

 const showCartProduct = () =>{
    filterProducts.forEach((curProd)=>{
        const {  category, id, image, name, stock,price} = curProd;
        let productClone = document.importNode(templateContainer.content, true);
          
       const lSActualData = fetchQuantityFromCartLS(id,price);

        productClone.querySelector("#cardValue").setAttribute("id",`card${id}`);
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src=image;
        

        cartElement.appendChild(productClone);
    });

 };

 //----------------------------
 // showing the cartProducts
 //-----------------------------

 showCartProduct();




 