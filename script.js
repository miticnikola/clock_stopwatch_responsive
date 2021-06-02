let h1CurrentTime = document.getElementById('currentTime');

// Current time
let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
h1CurrentTime.innerHTML = `${hours}: ${minutes}: ${seconds}`;

// Updating time in one second
setInterval(()=> {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if(hours < 10){
        hours = "0" + date.getHours();
    }
    
    if(minutes < 10){
        minutes = "0" + date.getMinutes();
    }
    
    if(seconds < 10){
        seconds = "0" + date.getSeconds();
    }

    h1CurrentTime.innerHTML = `${hours}: ${minutes}: ${seconds}`;

}, 1000);

// Stopwatch
let h3StopwatchResult = document.getElementById("stopwatchResult");
let btnStart = document.getElementById("start");
let btnPause = document.getElementById("pause");
let btnReset = document.getElementById("reset");

let clock = null;
let counter = 0;

btnStart.addEventListener('click', () => {
    if(clock == null){
      clock = setInterval(() => {
            counter++;

            h3StopwatchResult.innerHTML = `${counter}s`;

            if(counter > 59){
                let seconds = counter % 60;
                let minutes = (counter - seconds) / 60;  
                h3StopwatchResult.innerHTML = `${minutes}m : ${seconds + 1}s`;
     
                if(minutes > 59){
                    let minutes1 = minutes % 60; 
                    let hours = (minutes - (minutes1 % 60)) / 60;
                    h3StopwatchResult.innerHTML = `${hours}h : ${minutes1}m : ${seconds}s`;
                }
                
            }


        }, 1000);
    }
});

btnPause.addEventListener('click', () => {
    if(btnReset.clicked == true){
        counter = 0;
    } else {
        clearInterval(clock);
        clock = null;
    }

});

btnReset.addEventListener('click', () => {
    counter = 0;
    clearInterval(clock);
    clock = null;
    h3StopwatchResult.innerHTML = ` `;
});

