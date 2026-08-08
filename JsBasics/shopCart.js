const cart = [];

const cartSidebar = document.querySelector(".cart-sidebar");

const cartItemslist = document.querySelector(".cart-items");
const totalElement = document.getElementById("total");

document.querySelectorAll("add-to-cart").forEach(button => {
    button.addEventListener("click" ,() =>{
        const product = {
            id: button.dataset.id ,
            name: button.dataset.name,

            price: parseFloat(button.dataset.price)
        };

        cart.push(product);

        updateCartDisplay();
        cartSidebar.classList.add("active");
    });

});