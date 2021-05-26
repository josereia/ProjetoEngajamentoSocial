//Efeito no header ao dar scroll
const nav = document.querySelector('header');
let onTop = true;
window.onscroll = function (evt) {
    /*Se o scroll estiver menos de 500px do topo da página
    adicione a classe "navbarOnTop" */
    if (window.scrollY < 500 && !onTop) {
        nav.classList.add("navbarOnTop");
        onTop = true;
    }

    /*Se o scroll estiver mais de 500px do topo da página
    remova a classe "navbarOnTop" */
    if (window.scrollY > 500 && onTop) {
        nav.classList.remove("navbarOnTop");
        onTop = false;
    }
}