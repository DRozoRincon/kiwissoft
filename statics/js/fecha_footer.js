'use strict'
window.addEventListener('load', ()=>{
    let fecha = new Date();
    let span = document.getElementById('año');
    span.innerHTML = String(fecha.getFullYear());
});