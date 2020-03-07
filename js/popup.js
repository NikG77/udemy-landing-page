'use strict';

(function () {

    let info = document.querySelector('.info');
    let overlay = document.querySelector('.overlay');
    let closePopup = document.querySelector('.popup-close');


    let onBtnClick = function (evt) {
        let onPopupCloseClick = function () {
            overlay.style.display = 'none';
            overlay.classList.remove('more-splash');
            document.body.style.overflow = '';
        }
      
        let target = evt.target;
      
        if (target && target.classList.contains('description-btn')) {
            console.log('Выпролняется');

            overlay.style.display = 'block';
            overlay.classList.add('more-splash');
            document.body.style.overflow = 'hidden';

            closePopup.addEventListener('click', onPopupCloseClick);
        }

    };
    
    // info.addEventListener('click', onBtnClick);

    // let age = document.getElementById('age');
    // function showUser(surname, name) {
    //     alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
    // }
    // showUser();


})();