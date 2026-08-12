
let addressBook = [];

const contactForm = document.getElementById('contactForm');
const fullNameInput = document.getElementById('fullName');
const phoneNumberInput = document.getElementById('phoneNumber');
const addressInput = document.getElementById('address');
const cityInput = document.getElementById('city');
const emailInput = document.getElementById('email');
const contactRows = document.getElementById('contactRows');
const btnCancel = document.getElementById('btnCancel');

function displayContacts() {
    tfoot.innerHTML = "";

    if( addressBook.length === 0){
            tbody.innerHTML = `<tr>
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
                <button class ="btn-delete" onclick = "deleteContact("${contact.id}">Delete</button>
            </td>
            `;

            tbody.appendChild(tr);

        });
            `
    
}
contactForm.addEventListener("submit",(e) => {
    
    e.preventDefault();

    const newContact = {
    
        id: Date.now(),
        fullName: fullNameInput.value.trim(),
        phoneNumber: phoneNumberInput.value.trim(),
        address: addressInput.value.trim(),
        city: cityInput.value.trim(),
        email: emailInput.value.trim()
    };

    addressBook.push(newContact);

    contactForm.reset();

    displayContacts();
    
});

function deleteContact(id){

    addressBook = addressBook.filter(contact => contact.id !== id);

    displayContacts();


}
    if(btnCancel){
    btnCancel.addEventListener("click", () =>{
        contactForm.reset();
        })
    };

