//кнопка ввверх
(function() {
    'use strict';
  
    function trackScroll() {
        var scrolled = window.pageYOffset;
        var coords = document.documentElement.clientHeight;

        if (scrolled > coords) {
        BtnUp.classList.add('shown');
        }
        if (scrolled < coords) {
        BtnUp.classList.remove('shown');
        }
    }
    
    var BtnUp = document.querySelector('.up');
    window.addEventListener('scroll', trackScroll);
})();

//wow
wow = new WOW({
    offset: 3,          // not default
  })
  wow.init();