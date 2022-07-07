import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-firestore.js"; 
import { chargeProducts } from "./chargeProducts.js";
import { addToCart } from "./addToCart.js";



const getProducts = async () => {
    let listProducts = [];
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
      listProducts.push({
        name: doc.data().name,
        image: doc.data().image,
        id: doc.id,
        price: doc.data().price,
        stock: doc.data().stock,
        category: doc.data().category,
        brand: doc.data().brand
      })  
    });

    return listProducts;
}

export let products = await getProducts()

window.addEventListener('DOMContentLoaded', chargeProducts(products))

const addButton = document.querySelectorAll('.card--add')

addButton.forEach(boton => {
    boton.addEventListener('click', addToCart)
})






