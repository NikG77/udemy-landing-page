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

    //
    let URL_FORM = 'server.php';
    let formMain = document.querySelector('.main-form');
    let form = document.querySelector('#form');
    
    let create = () => { 
        let node = document.createElement('div');
        node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red';
        node.style.position = 'absolute';
        node.style.left = 0;
        node.style.right = 0;
        node.style.fontSize = '30px';
        return node;
    };

    // Выводит в созданный div информацию об ошибке
    let onError = function (errorMessage) {
        let node = create();

        node.textContent = errorMessage;
        
        formMain.appendChild(node);
        window.setTimeout(function () {
            formMain.removeChild(node)
        }, 5000);
    };

    let onLoad = () => {
        formMain.reset();
        
        let node = create();

        node.textContent = 'Данные отправлены ';
        formMain.appendChild(node);
        window.setTimeout(() => {
            formMain.removeChild(node)
        }, 5000);
    };

    // Выводит в созданный div информацию об ошибке
    let onErrorForm = function (errorMessage) {
        let node = create();

        node.textContent = errorMessage;
        form.appendChild(node);
        window.setTimeout(() => {
            form.removeChild(node)
        }, 5000);
    };

    let onLoadForm = () => {
        form.reset();
        let node = create();
        node.textContent = 'Данные отправлены ';

        form.appendChild(node);
        window.setTimeout(function () {
            form.removeChild(node)
        }, 5000);
    };

    // Обработчик отправки формы связи popup
    formMain.addEventListener('submit', function (evt) {
        evt.preventDefault();
        window.backend.save(URL_FORM, new FormData(formMain), onLoad, onError);
    });

    // Обработчик отправки формы 
    form.addEventListener('submit', function (evt) {
        evt.preventDefault();
        window.backend.save(URL_FORM, new FormData(form), onLoadForm, onErrorForm);
    });
  

}) ();