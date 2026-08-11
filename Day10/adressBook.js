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

    addContact(name,phone) {

        const newContact = {
            id: Date.now().toString(),
            name:name,
            phone:phone
        };

        this.contacts.push(newContact);
        this.saveToStorage();
        this.render();
    }

}