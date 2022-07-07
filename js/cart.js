

export const cartUI = (items) => {
    const cartSection = document.getElementById('cart')
    items.map(item => {
        const createItem = document.createElement('ul')
        createItem.className = "cart--items"
        createItem.innerHTML = `
        <li><div><img src="${item.image}" alt="${item.name}" class="cart--items__image"></div></li>
                            <li>${item.name}</li>
                            <li id="price-product">${item.price}</li>
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  class="bi bi-dash-circle removeItem" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                          </svg></li>
        `

        cartSection.appendChild(createItem)
    })

}





