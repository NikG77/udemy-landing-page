'use strict';

(function () {

    let info = document.querySelector('.info');
    let overlay = document.querySelector('.overlay');
    let closePopup = document.querySelector('.popup-close');


    let onBtnClick = (evt) => {
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
    
    info.addEventListener('click', onBtnClick);

    // let age = document.getElementById('age');
    // function showUser(surname, name) {
    //     alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
    // }
    // showUser();

    // Р’С‚РѕСЂРѕРµ Р·Р°РґР°РЅРёРµ

    // let age = document.getElementById('age');
    
    // function showUser(surname, name) {
    //          alert("РџРѕР»СЊР·РѕРІР°С‚РµР»СЊ " + surname + " " + name + ", РµРіРѕ РІРѕР·СЂР°СЃС‚ " + this.value);
    // }
    
    // showUser.apply(age, ["Р“РѕСЂСЊРєРёР№","РњР°РєСЃРёРј"]);


    // class Options {
    //     constructor(height, width, bg, fontSize, textAlign) {
    //         this.height = height;
    //         this.width = width;
    //         this.bg = bg;
    //         this.fontSize = fontSize;
    //         this.textAlign = textAlign;
    //     }
    
    //     createDiv() {
    //         let elem = document.createElement('div');
    //         document.body.appendChild(elem);
    //         let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
    //         elem.style.cssText = param;
    //     }
    // }
    
    // const item = new Options(300, 350, "red", 14, "center");
    
    // item.createDiv();


})();