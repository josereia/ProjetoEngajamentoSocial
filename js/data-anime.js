const target = document.querySelectorAll('[data-anime]'); //seleciona os elementos com data-anime
const animationClass = 'animate';

function animeScroll () {
    const windowTop = window.pageYOffset + (window.innerHeight * 3) / 3;//verifica a distancia da barra de scroll e o top do site 
    target.forEach(function(element) {
        console.log(`Barra: ${windowTop}`);
        console.log(`elemento: ${element.offsetTop}`);
        
        if ( (windowTop) > element.offsetTop) {
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass);
        }
    })
}
//todo vez que move o scroll chama a função animeScroll()
window.addEventListener('scroll', function() {
    animeScroll();
})

window.onload( animeScroll() );