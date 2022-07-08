import { cartUI } from "./cart.js"
import { totalShop } from "./total.js"

export let cart = []
export let price = []



export const addToCart = (e) => {
    const buttonTarget = e.target.parentNode
    
    const data = [{
        name: buttonTarget.querySelector("#name").textContent,
        price: buttonTarget.querySelector("#price").textContent,
        image: buttonTarget.querySelector(".card--image").src,
        qty: 1
    }]

    const priceContent = buttonTarget.querySelector("#price").textContent
    const newPrice = priceContent.slice(1)
    const priceProduct = Number(newPrice)
    price.push(priceProduct)

    
    cart.push(data)
    cartUI(data)
    totalShop(price.reduce((acc, val) => acc + val))

    

    const remove = document.querySelectorAll(".removeItem")
    remove.forEach((item) => {
        item.addEventListener("click", removeItem)
    })
}

export const removeItem = (e) => {
    const target = e.target
    const removeItemSelected = target.parentElement.parentElement
    const priceItemRemoved = removeItemSelected.querySelector("#price-product").textContent
    const newPrice = priceItemRemoved.slice(1)
    const priceProduct = Number(newPrice)
    const cart = document.getElementById("cart")
    cart.removeChild(removeItemSelected)
    price.push(-priceProduct)
    totalShop(price.reduce((acc, val) => acc + val))
  }





