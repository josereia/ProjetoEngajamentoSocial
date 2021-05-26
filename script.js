const btnMenuMobile = document.querySelector(".navbar nav .btn-menu-mobile");

function toggleMobileMenu() {
    const nav = document.querySelector(".navbar nav");
    nav.classList.toggle('mobile-menu');
}
btnMenuMobile.onclick = () => {
    toggleMobileMenu();
}