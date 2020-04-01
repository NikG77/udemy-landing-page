'use strict';

(function () {
    let slideIndex = 1;

    let slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);    

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');
        dots.forEach((item) => item.classList.remove('dot-active'));
        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlider(n) {
        showSlides(slideIndex += n);
    }
    function currentSlider(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function() {
        plusSlider(-1);
    });

    next.addEventListener('click', function() {
        plusSlider(1);
    });

    dotsWrap.addEventListener('click', function(evt) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (evt.target.classList.content('dot') && evt.target == dots[i - 1]) {
                currentSlider(i - 1);
            }
        }

    });



})();