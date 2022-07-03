const navLinks = document.querySelectorAll(".button-container a")
const activePage = window.location.pathname
navLinks.forEach(navLink =>{
    if(navLink.href.includes(`${activePage}`)){
        navLink.classList.add("active")
        console.log(`${activePage}`);
    }
})







const headerLogo = document.querySelector(".header-logo")
headerLogo.addEventListener("click" , ()=>{
    window.location.assign("index.html")
})