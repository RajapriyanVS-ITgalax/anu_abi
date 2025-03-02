let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    navlist.classList.toggle('open');
    menu.classList.toggle('bx-x');
}
navlist.onclick = () => {
    navlist.classList.remove('open');
    menu.classList.remove('bx-x');
}


const products = [
    {
        "id": 1,
        "title": "Bakery Counter",
        "image": "/asset/display/display-main.png",
        "description": "Cold Rectangular Pastry Showcase <br> Bakery Display Counter  <br> Vertical Cake Display Counter <br> Food Display Counter <br> ",
        "category": "Display Counter"
        
    },
    {
        "id": 2,
        "title": "Bakery Machinery",
        "image": "/asset/display/double-oven.png",
        "description": "Gas Heated Baking Oven <br> Double Deck Oven <br> SS Display Counter <br> Stainless Steel Oven <br> ",
        "category": "Bakery Machinery"
        
    },
    {
        "id": 3,
        "title": "Kitchen Equipment",
        "image": "/asset/display/oven.png",
        "description": "Electrical Big Rice Steaming Cart <br> Sink with Table <br> Gas Deck Oven <br>  Electrical Dish Warmer <br> ",
        "category": "Kitchen Equipment"
        
    },
    {
        "id": 4,
        "title": "Juice Equipments",
        "image": "/asset/display/juicer.png",
        "description": "Juice Dispenser Machine <br> Stainless Steel Juicer <br> Juice Extractor With Pulp Container <br> ",
        "category": "Juice Equipments"
        
    }
];

function renderProducts() {
    const productList = document.getElementById("product-list");

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("col-3");

        productCard.innerHTML = `
            <div class="card" style="cursor: pointer;" onclick="handleCardClick(${product.id})">
                <div class="card-image">
                    <img src="${product.image}" alt="${product.title}">
                </div>
                <div class="card-content">
                    <h3>${product.title}</h3>
                    <p>${product.description}</p>
                   
                    
                </div>
            </div>
        `;
        productList.appendChild(productCard);
    });
}

// Call the function to render products
renderProducts();


function handleCardClick(val){
console.log(val);
}
