

export const chargeProducts = (products) => {
    const videogames = document.getElementById('videogames');
    products.forEach((product) => {
        const pay12 = (product.price / 12).toFixed(0)
        const createCard = document.createElement('article')
        createCard.className = "card--container"
        createCard.innerHTML = `
        <img src="${product.image}" alt=${product.name} class="card--image">
        <div class="card--title">
           <p id="name">${product.name}</p> 
        </div>
        <div class="card--price">
            <p id="price">$${product.price}</p>
            <p id="pay">12 CUOTAS DE $${pay12}</p>
        </div>
        <button class="card--add" data-id=${product.id}>Agregar</button>
        `

        videogames.appendChild(createCard)
    })

    
}





