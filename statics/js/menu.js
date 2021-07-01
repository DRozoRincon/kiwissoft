'use strict'
window.addEventListener('load', ()=>{
    let btnMenu = document.querySelector('#btnMenu');
    let nav = document.querySelector('nav');
    let header = document.querySelector('header');
    let nombreLogo = document.getElementById('nombreLogo');

    localStorage.removeItem('openMenu');

    function toggleMenu(){
        btnMenu.classList.toggle('open');
        if(localStorage.getItem('openMenu') == null){ // logica para abrir menu
            localStorage.setItem('openMenu', true);
            nombreLogo.style.cssText = "color: #818181"; //el header se vuelve blanco por ende debemos cambiar color al logo a gris
            nav.style.cssText = "display: block;";
            if(window.scrollY < 65){ // si estamos posicionados a la altura de 65px debemos cambiar el header de tranparente a blanco
                header.style.cssText = "background-color: rgba(255,255,255, 1);padding: 0px 20px;";
            }
        }else{ // logica para cerrar menu
            localStorage.removeItem('openMenu');
            nav.style.cssText = "display: none;";
            if(window.scrollY < 65){ // si estamos posicionados a la altura de 65px
                nombreLogo.style.cssText = "color: #ffffff"; // el header se vuelve tranparente por lo que demos cambiar el color del logo a blanco
                header.style.cssText = "background-color: rgba(255,255,255, 0); padding: 20px;"; // debemos cambiar el header de blanco a transparente
            }
        }
    }

    btnMenu.addEventListener('click', toggleMenu);

    nav.addEventListener('click', ()=>{
        if(window.innerWidth <= 1000) toggleMenu();
    });


});