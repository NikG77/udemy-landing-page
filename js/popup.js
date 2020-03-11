'use strict';

(() => {

    let info = document.querySelector('.info');
    let overlay = document.querySelector('.overlay');
    let closePopup = document.querySelector('.popup-close');
    let btnMore = document.querySelector('.more');
    let formMain = document.querySelector('.main-form')

    let onPopupCloseClick = () => {
        overlay.style.display = 'none';
        overlay.classList.remove('more-splash');
        document.body.style.overflow = '';

    };

    let openPopup = () => {
        overlay.style.display = 'block';
        overlay.classList.add('more-splash');
        document.body.style.overflow = 'hidden';

        closePopup.addEventListener('click', onPopupCloseClick);
    };

    let onBtnDescriptionClick = (evt) => {
        let target = evt.target;
        if (target && target.classList.contains('description-btn')) {
            openPopup();
        }
    };

    let onBtnMoreClick = () => {
        openPopup();
    };
    
    info.addEventListener('click', onBtnDescriptionClick);

    btnMore.addEventListener('click', onBtnMoreClick);


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