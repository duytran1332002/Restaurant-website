/* ------------- toggle navbar ---------*/
const navToggler = document.querySelector(".head__icon");
navToggler.addEventListener("click", togglerNav)

function togglerNav() {
    navToggler.classList.toggle('active');
    document.querySelector('.nav-bar').classList.toggle('open');
}
window.addEventListener('load', function () {
    document.querySelector(".page-loader").classList.add('fade-up');
    this.setTimeout(function () {
        document.querySelector('.page-loader').style.display='none'
    }, 600)
    AOS.init();
});

/* close nav when clicking on a nav item */
document.addEventListener('click', function (e) {
    if (e.target.closest(".nav-bar__item")) {
        togglerNav();
    }
})
/* ------------------ menu tabs ---------------------*/
const menuTabs = document.querySelector(".menu__tabs");
menuTabs.addEventListener("click", function (e) {
    if (e.target.classList.contains("menu__tab-item") && !e.target.classList.contains("active")) {
        const target = e.target.getAttribute("data-target");
        menuTabs.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const menuSection = document.querySelector(".menu");
        menuSection.querySelector(".menu__tab-content.active").classList.remove("active");
        menuSection.querySelector(target).classList.add("active");
        
    }
    AOS.init();
})


window.addEventListener("scroll", function () {
    if (this.pageYOffset > 60) {
        document.querySelector('.head').classList.add("sticky")
    } else {
        document.querySelector('.head').classList.remove("sticky")
    }
    
})



