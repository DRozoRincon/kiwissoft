'use strict'
window.addEventListener('load', ()=>{
    const glider = new Glider(document.querySelector('#testimoniosGlider'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        scrollLock: true,
        scrollLockDelay: 100,
        dots: '#puntos',
        draggable: true
    });

    function sliderAuto(slider, miliseconds) {
        const slidesCount = slider.track.childElementCount;
        let slideTimeout = null;
        let nextIndex = 1;
       
        function slide () {
          slideTimeout = setTimeout(
            function () {
              if (nextIndex >= slidesCount ) {
                nextIndex = 0;
              }
              slider.scrollItem(nextIndex++);
            },
            miliseconds
          );
        }
       
        slider.ele.addEventListener('glider-animated', function() {
          window.clearInterval(slideTimeout);
          slide();
        });
       
        slide();
    }
       
    sliderAuto(glider, 4000)
});