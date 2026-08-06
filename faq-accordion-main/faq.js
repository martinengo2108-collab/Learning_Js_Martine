const headers = document.querySelectorAll(".acc-header");

headers.forEach(header =>  {
    header.addEventListener("click", ()=>{
    
        const currentContent = header.nextElementSibling;

        const currentIcon = header.querySelector(".open");

        document.querySelectorAll("acc-content").forEach(content =>{

            if(content !== currentContent){
                content.classList.remove("show");
            }


        });

        document.querySelectorAll(".open").forEach(icon =>{

            if(icon !==currentIcon){
                icon.src ="./assets/images/icon-plus.svg";
            }
        });
        currentContent.classList.toggle("show");

        if(currentContent.classList.contains("show")){
            currentIcon.src ="./assets/images/icon-minus.svg";

        }else{
            currentIcon.src ="./assets/images/icon-plus.svg";
        }
    });
});