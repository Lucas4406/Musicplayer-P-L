const headerList=document.querySelector(".header-list")
const navLinks = document.querySelectorAll(".button-container a")
const activePage = window.location.pathname
navLinks.forEach(link =>{
    if(link.href.includes(`${activePage}`)){
        link.classList.add("active")
    }
})







const headerLogo = document.querySelector(".header-logo")
headerLogo.addEventListener("click" , ()=>{
    window.location.assign("index.html")
})