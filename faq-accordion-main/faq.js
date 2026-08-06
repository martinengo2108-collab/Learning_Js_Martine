const headers = document.querySelectorAll(".acc-header");

headers.forEach(header =>  {
    header.addEventListener("click", ()=>{
    
        const currentContent = header.nextElementSibling;

        const currentIcon = header.querySelector(".open");

        document.querySelectorAll("acc-content").forEach(content =>{

            if(content !== currentContent){
                content.classList.remove("show")
            }


        })
    })
})