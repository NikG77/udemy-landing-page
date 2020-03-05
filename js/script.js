window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    let headerMain = document.querySelector('.info-header');
    let headers = document.querySelectorAll('.info-header-tab');
    let headersContent = document.querySelectorAll('.info-tabcontent');

    let hide = function (a) {
        for (let i = a; i < headers.length; i++) {
            headersContent[i].classList.add('hide');
            headersContent[i].classList.remove('show');
        }
    };

    let show = function (i) {
        if (headersContent[i].classList.contains('hide')) {
            headersContent[i].classList.add('show');
            headersContent[i].classList.remove('hide');
        }
    };

    
    let onHeaderClick = function (evt) {
        let target = evt.target;
        for (let i = 0; i < headers.length; i++) {
            if (target && target == headers[i]) {
                hide(0);
                show(i);
                break;
            }
        }
    };

    hide(1);

    headerMain.addEventListener('click', onHeaderClick);


});