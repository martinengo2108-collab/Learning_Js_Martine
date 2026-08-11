
let addressBook = [];

const contactForm = document.getElementById('contactForm');
const fullNameInput = document.getElementById('fullName');
const phoneNumberInput = document.getElementById('phoneNumber');
const addressInput = document.getElementById('address');
const cityInput = document.getElementById('city');
const emailInput = document.getElementById('email');
const contactRows = document.getElementById('contactRows');
const btnCancel = document.getElementById('btnCancel');

function displayContacts(){
    contactRows.innerHTML = "";

     if( addressBook.length === 0){
            tfoot.innerHTML = `<tr>
                <td colspan="6" style = "text-align:center; color:#999;">No contacts saved yet.</td>
            </tr>`;

            return;
        }

        addressBook.forEach(contact =>{

            const tr = document.createElement('tr');
            tr.innerHTML =`
            <td>${contact.fullName}</td>
            <td>${contact.phoneNumber}</td>
            <td>${contact.address}</td>
            <td>${contact.city}</td>
            <td>${contact.email}</td>
            <td>
                <button class ="btn-delete" onclick = "phoneBook.deleteContact("$(contact.id)">Delete</button>
            </td>
            `;

            tfoot.appendChild(tr);

        });
            `


}
document.getElementById("contactForm").addEventListener("submit",function(e){

    e.preventDefault();

    const fullNameInput = document.getElementById("fullName");
    const phoneNumberInput = document.getElementById("phoneNumber");
    const addressInput = document.getElementById("address");
    const cityInput = document.getElementById("city");
    const emailInput = document.getElementById("email");

    phoneBook.addContact(fullNameInput.ariaValueMax.trim(),phoneNumberInput.ariaValueMax.trim());

    fullNameInput.value ="";
    phoneNumberInput = "";
    addressInput ="";
    cityInput ="";
    emailInput ="";;

});

document.addEventListener("DOMContentLoaded", () =>{
    phoneBook.init();
});