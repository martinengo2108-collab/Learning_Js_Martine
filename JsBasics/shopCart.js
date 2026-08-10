const cart = [];

const cartSidebar = document.querySelector(".cart-sidebar");

const cartItemslist = document.querySelector(".cart-items");
const totalElement = document.getElementById("total");

document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click" ,() => {

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


function updateCartDisplay(){

    cartItemslist.innerHTML = ""

    let total = 0;
    
    cart.forEach((item,index) =>{
        const li = document.createElement("li");
        li.className = "cart-item";

        li.innerHTML = `
        <span>${item.name}</span>
        <span>${item.price.toFixed(0)} Fr</span>
        <button onclick ='removedFromCart(${index})'>&times;</button>

        `;
        cartItemslist.appendChild(li);

        total += item.price;
    });

    totalElement.textContent = total.toFixed(0);
}

function removedFromCart(index){
    cart.splice(index,1);
    updateCartDisplay();

}
document.querySelector(".close-cart").addEventListener("click" ,()=>{
    cartSidebar.classList.remove("active")
});