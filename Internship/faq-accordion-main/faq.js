const headers = document.querySelectorAll(".acc-header");

headers.forEach(header =>  {
    header.addEventListener("click", ()=>{
    
        const currentContent = header.nextElementSibling;

        const currentIcon = header.querySelector(".open");

        const isOpen = currentContent.classList.contains("show");


        document.querySelectorAll(".acc-content").forEach(content =>{

                content.classList.remove("show");
            
        });

        document.querySelectorAll(".open").forEach(icon =>{
            
                icon.src ="./assets/images/icon-plus.svg";
        
        });

        if(!isOpen){
            currentContent.classList.add("show");

            currentIcon.src ="./assets/images/icon-minus.svg";
        }
    });
});