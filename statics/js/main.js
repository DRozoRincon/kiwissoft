'use strict'

window.addEventListener('load', ()=>{
    
    // Header elements
    let header = document.querySelector('header');
    let linksMenu = document.getElementsByClassName('cambiarColor');
    let btnMenu = document.querySelector('#btnMenu');
    let nav = document.querySelector('nav');


    let links = document.getElementsByClassName('link');
    let sections = document.getElementsByTagName('section');

    // console.log(sections)
    document.querySelector('nav');
    let nuevosEstilosHeader = false; // para evitar entrar varias mas de dos veces en las condicionales del evento scroll
    
    resaltarLinksMenu();
    aplicarEstilosAheader();
    
    // Funcion para header
    function aplicarEstilosAheader(){
        if(window.scrollY >= 65 && !nuevosEstilosHeader){ // cambiamos estilos de header a blanco y el color
            nuevosEstilosHeader = true;
            header.style.cssText = "background-color: rgba(255,255,255, 1);box-shadow: 5px 0px 5px #ccc;padding: 0px 20px;";
            if(window.innerWidth >= 1000) cambiarColorALinks('#818181');
            else nombreLogo.style.cssText = "color: #818181";
        }
        if(window.scrollY < 65 && nuevosEstilosHeader && localStorage.getItem('openMenu') == null){
            nuevosEstilosHeader = false;
            header.style.cssText = "background-color: rgba(255,255,255, 0); padding: 20px;";
            if(window.innerWidth >= 1000) cambiarColorALinks('#ffffff');
            else nombreLogo.style.cssText = "color: #ffffff";
        }
        
    }

    function resaltarLinksMenu(){
        try{
            for(let link in links){
                links[link].classList.remove("activo");
                if(link == 6) break;
            }

            let posicionYactual = window.scrollY;
            let activarLink = 'contacto';
            let alturaSecciones = 0;

            for(let section in sections){
                if(section == 4 ) alturaSecciones = alturaSecciones + sections[section].clientHeight - 500;
                if(section == 5) alturaSecciones = alturaSecciones + sections[section].clientHeight/2; 
                else alturaSecciones = alturaSecciones + sections[section].clientHeight; 
                if(posicionYactual < alturaSecciones){
                    activarLink = sections[section].id;
                    break
                }
            }
            document.querySelector(`a[href='#${activarLink}']`).classList.add('activo');
        }catch(e){console.log(e)}
    }

    window.addEventListener('scroll', ()=>{
        resaltarLinksMenu();
        aplicarEstilosAheader();

    });

    // Funcion para plugin facebook
    let pluginFB = document.querySelector('#pluginFB');
    let blog = document.querySelector('#blog');

    // Funcion para plugin de facebook

    function reDimensionarFBPlugin(anchoSection) {
        pluginFB.setAttribute('src', `https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fkiwissoft&tabs=timeline&width=${anchoSection - 40}&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=870325900497256`);
        pluginFB.setAttribute('width', `${anchoSection - 40}`);
    }
    setTimeout(()=>{
        if(blog.clientWidth<=540) {reDimensionarFBPlugin(blog.clientWidth)}
        else{
            reDimensionarFBPlugin(540)
        }
    }, 2100);
    

    window.addEventListener('resize', ()=>{

        // Logica para header y menu

        if(window.innerWidth > 1000 && localStorage.getItem('openMenu')){
            localStorage.removeItem('openMenu');
            btnMenu.classList.toggle('open');
            nav.style.cssText = "display: none;"
        }
        
        if(window.innerWidth > 1000 && window.scrollY >= 65){
            cambiarColorALinks('#818181');
        }

        if(window.innerWidth > 1000 && window.scrollY < 65){
            header.style.cssText = "background-color: rgba(255,255,255, 0); padding: 20px;";
            cambiarColorALinks('#ffffff');
        }

        // Logica para plugin facebook

        let achoSectionBlog = blog.clientWidth;
        if(achoSectionBlog <= 540){
            reDimensionarFBPlugin(achoSectionBlog);
        }


        // if(window.innerWidth <= 1000 && window.scrollY < 65){
        //     ContenedorMarca.style.cssText = "color: #ffffff";
        // }

        // if(window.innerWidth<= 1000 && window.scrollY >= 65){
        //     ContenedorMarca.style.cssText = "color: #818181";
        // }

    });

    function cambiarColorALinks(color){
        for(let link in linksMenu){
            linksMenu[link].style.color = color;
            if(link == 7) break;
        }
    }
});