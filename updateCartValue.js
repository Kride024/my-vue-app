

const cartValue = document.querySelector("#cartValue");

export const updateCartValue =(cartProducts)=>{
    return (cartValue.innerHTML = ` <i class="fa-solid fa-cart-shopping" style="display:grid; grid-template-columns: repeat(2,1fr);gap:7px;"> ${cartProducts.length}</i>`) ;
    
}