var nav = document.querySelector('header');
let onTop = true;
window.onscroll = function (evt) {

    if (window.scrollY < 500 && !onTop) {
        nav.classList.add("navbarOnTop");
        onTop = true;
    }

    if (window.scrollY > 500 && onTop) {
        nav.classList.remove("navbarOnTop");
        onTop = false;
    }
}