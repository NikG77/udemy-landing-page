'use strict';

(function () {
    let DEADLINE = '2020-03-08';

    function getTimeRemaining(endTime) {
        let t = Date.parse(endTime) - Date.parse(new Date());
        let seconds = Math.floor((t/1000)%60);
        let minutes = Math.floor((t/1000/60)%60);
        let hours = Math.floor(t/(1000*60*60));
        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        };
    }

    function setClock (id, endTime) {
        
        let timer = document.getElementById(id);
        let hours = timer.querySelector('.hours');
        let minutes = timer.querySelector('.minutes');
        let seconds = timer.querySelector('.seconds');

        if (Date.parse(endTime) <= Date.parse(new Date())) {
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';     
        } else  {
            let timeInterval = setInterval(updateClock, 1000);
        }

        function updateClock () {
            let t = getTimeRemaining(endTime);

            function addZero(num){
                if(num <= 9) {
                    return '0' + num;
                } else return num;
            };
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);
            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('timer', DEADLINE);
})();