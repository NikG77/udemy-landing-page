'use strict';

(function () {
    let info = document.querySelector('.info-header');
    let tab = document.querySelectorAll('.info-header-tab');
    let tabContent = document.querySelectorAll('.info-tabcontent');

    let hideTabConten = (a) => {
        for (let i = a; i < tab.length; i++) {
            tabContent[i].classList.add('hide');
            tabContent[i].classList.remove('show');
        }
    };

    let show = (i) => {
        if (tabContent[i].classList.contains('hide')) {
            tabContent[i].classList.add('show');
            tabContent[i].classList.remove('hide');
        }
    };

    let onHeaderClick = (evt) => {
        let target = evt.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabConten(0);
                    show(i);
                    break;
                }
            }
        }
            
    };

    hideTabConten(1);

    info.addEventListener('click', onHeaderClick);

}) ();