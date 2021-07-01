window.addEventListener('load', ()=>{

    let loadinPage = document.querySelector('#loadingPage');

    setTimeout(() => {
        window.scrollTo(0,0);
    });
    
    loadinPage.className = 'stop';
    setTimeout(()=>{
        loadinPage.style.cssText = "display: none;"
    }, 2000)
});