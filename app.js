const menuToggle = document.querySelector(".navbar-toggle-btn")
const navItems = document.querySelector(".nav-items")
const navItem = document.querySelectorAll(".nav-item")
const navSection = document.querySelector(".nav-section")


menuToggle.addEventListener("click", () => {
    useMenu();
});



const closeMenu = () => {
    menuToggle.classList.remove("active-menu");
    menuToggle.classList.add("navbar-toggle-btn")
    navItems.classList.remove("active-nav");
    navItems.classList.add("nav-items")
    navSection.classList.add("nav-section");

    navItem.forEach(item => {
        item.classList.remove("active-nav-item")
    });
};


const useMenu = () => {
        menuToggle.classList.toggle("active-menu")
        navItems.classList.toggle("active-nav");
        navSection.classList.toggle("nav-section");
    
        navItem.forEach(item => {
            item.classList.toggle("active-nav-item")
        });
}