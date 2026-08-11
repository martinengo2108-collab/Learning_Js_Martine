let phoneBook = 
    {

    contacts:[],

    init(){

        const storedContacts = localStorage.getItem("myContacts");

        if(storedContacts){
            this.contacts = JSON.parse(storedContacts);
        
        }

        this.render();
    },

    saveToStorage(){

        localStorage.setItem("myContacts", JSON.stringify(this.contacts));

    },

    addContact(fullName,phoneNumber,address,city,email) {

        const newContact = {
            id: Date.now().toString(),
            fullName: fullName,
            phoneNumber:phoneNumber,
            address:address,
            city: city,
            email: email
        };

        this.contacts.push(newContact);
        this.saveToStorage();
        this.render();
    },

    deleteContact(id){

        this.contacts = this.contacts.filter(contact => contact.id !== id);

        this.saveToStorage();
        this.render();
    },

    render(){

        const tfoot = document.getElementById("contactRows");
        tfoot.innerHTML ="";

        if( this.contacts.length === 0){
            tfoot.innerHTML = `<tr><td colspan="3" style = "text-align:center; color:#999;">No contacts saved yet.</td></tr>`;

            return;
        }

        this.contacts.forEach(contacts =>{
            const tr = document.createElement("tr")

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
    }

};
let addressBook = [];

const contactForm = document.getElementById('contactForm');
const fullNameInput = document.getElementById('fullName');
const phoneNumberInput = document.getElementById('phoneNumber');
const addressInput = document.getElementById('address');
const cityInput = document.getElementById('city');
const emailInput = document.getElementById('email');
const contactRows = document.getElementById('contactRows');
const btnCancel = document.getElementById('btnCancel');


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