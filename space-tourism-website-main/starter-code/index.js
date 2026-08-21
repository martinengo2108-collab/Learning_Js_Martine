const nav = document.querySelector(".primary-navigation");

navToogle.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-visible");
  if (visibility === "false") {
    nav.setAttribute("data-visible", true);
  }
  else{
    nav.setAttribute("data-visible", false);
  }
  


    console.log(visibility);
});