import "./style.css";
import products from "./api/products.json" 
import  { showProductContainer } from "./homeProductCards"; //(ctrl+space) after bracket to include this smoothly

// Define a function named `showProductContainer` that takes an
//  array of products as input
showProductContainer(products);
