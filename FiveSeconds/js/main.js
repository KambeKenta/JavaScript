(function(){
    'use strict';

    var start = document.getElementById('start');
    var stop = document.getElementById('stop');
    var result = document.getElementById('result');
    var startTime;
    var isStarted = false;

    start.addEventListener('click',function(){
        if(isStarted === true){
            return;
        }
        isStarted = true;
        startTime = Date.now();
        this.className = 'pushed';
        stop.className = '';
        result.textContent ='0.000';
        result.classname = 'standby';
    });

    stop.addEventListener('click',function(){
        var elapsedTime;
        if(isStarted === false){
            return;}
        elapsedTime = (Date.now() - startTime) / 1000;
        result.textContent = elapsedTime;
        isStarted = false;
        this.className = 'pushed';
        start.className = '';
        result.className = '';

    });
})();