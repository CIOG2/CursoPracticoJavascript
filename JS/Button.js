const menu = document.getElementById("menu-desplegable__hamburguer");
const top1 = document.getElementById("hamburger-top");
const middle = document.getElementById("hamburger-middle");
const botton = document.getElementById("hamburger-bottom");


menu.classList.add('menu-Desplegable');
let i = 1;

function desplegarLista() {
    i++;
    
    if((i % 2) === 0){
        menu.classList.remove('menu-Desplegable');
        top1.classList.add('hamburger-top');
        middle.classList.add('hamburger-middle');
        botton.classList.add('hamburger-bottom');
    }
    else{        
        menu.classList.add('menu-Desplegable');
        top1.classList.remove('hamburger-top');
        middle.classList.remove('hamburger-middle');
        botton.classList.remove('hamburger-bottom');
    }
}
