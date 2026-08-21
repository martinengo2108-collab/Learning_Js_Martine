const nav = document.querySelector(".primary-navigation");

navToogle.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-visible");

    console.log(visibility);
});