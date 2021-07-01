'use strict'
window.addEventListener('load', ()=>{
    new Glider(document.querySelector('#testimoniosGlider'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        scrollLock: true,
        scrollLockDelay: 100,
        dots: '#puntos',
        draggable: true
    });
});