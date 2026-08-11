const phoneBook = {

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
    }

}