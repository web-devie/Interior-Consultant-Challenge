const btnNav = document.querySelector(".sm-navigation");
const header = document.querySelector(".header");

btnNav.addEventListener("click",function(){
    header.classList.toggle("nav-open");
})