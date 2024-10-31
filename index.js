const cart = [];
const cartTableBody = document.querySelector(".cart table tbody");
const totalPriceElement = document.getElementById("price5");
const checkoutButton = document.querySelector(".buttons button");
const accountElement = document.querySelector(".account");

// Función para actualizar el total y el número de artículos en el carrito
function updateCart() {
    cartTableBody.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><img src="${item.image}" alt="${item.name}"></td>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td><button onclick="removeFromCart(${index})">X</button></td>
        `;
        cartTableBody.appendChild(row);
        total += item.price;
    });

    totalPriceElement.innerText = total;
    accountElement.innerText = cart.length;
}

// Función para añadir un producto al carrito
function addToCart(name, price, image) {
    cart.push({ name, price, image });
    updateCart();
}

// Función para eliminar un producto del carrito
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Función para vaciar el carrito
function empty2() {
    cart.length = 0;
    updateCart();
}

// Función para realizar la compra
checkoutButton.addEventListener("click", () => {
    if (cart.length === 0) {
        alert("El carrito está vacío. ¡Agrega productos para continuar!");
        return;
    }
    alert("¡Compra realizada con éxito!");
    empty2();
});

// Asignar la función de añadir al carrito a los botones de los productos
document.querySelectorAll(".product").forEach((product) => {
    const name = product.querySelector("h3").innerText;
    const price = parseInt(product.querySelector("p").innerText);
    const image = product.querySelector("img").src;
    product.querySelector("button").addEventListener("click", () => {
        addToCart(name, price, image);
    });
});