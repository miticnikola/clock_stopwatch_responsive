// Active class for nav
let aTagsNav = document.querySelectorAll('#navigation li a');
console.log(aTagsNav);

let deleteActive = () => {
    aTagsNav.forEach(a => {
        a.classList.remove("active");
    });
};

aTagsNav.forEach(a => {
    a.addEventListener('click', () => {
        if (!a.classList.contains('active')) {
            deleteActive();
            a.classList.add('active');
        }
    });
});


// Current time
let h1CurrentTime = document.getElementById('currentTime');
let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
h1CurrentTime.innerHTML = `${hours}: ${minutes}: ${seconds}`;

// Updating time in one second
setInterval(() => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hours < 10) {
        hours = "0" + date.getHours();
    }

    if (minutes < 10) {
        minutes = "0" + date.getMinutes();
    }

    if (seconds < 10) {
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
h3StopwatchResult.innerHTML = `0`;

btnStart.addEventListener('click', () => {
    if (clock == null) {
        clock = setInterval(() => {
            counter++;

            h3StopwatchResult.innerHTML = `${counter}s`;

            if (counter > 59) {
                let seconds = counter % 60;
                let minutes = (counter - seconds) / 60;
                h3StopwatchResult.innerHTML = `${minutes}m : ${seconds + 1}s`;

                if (minutes > 59) {
                    let minutes1 = minutes % 60;
                    let hours = (minutes - (minutes1 % 60)) / 60;
                    h3StopwatchResult.innerHTML = `${hours}h : ${minutes1}m : ${seconds}s`;
                }

            }


        }, 1000);
    }
});

btnPause.addEventListener('click', () => {
    if (btnReset.clicked == true) {
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

// Wall clock
let divHour = document.querySelector('.hour');
let divMinute = document.querySelector('.minute');
let divSecond = document.querySelector('.second');

setInterval(() => {
    let date = new Date();

    let sec = date.getSeconds();
    let secDeg = sec / 60 * 360 + 90;
    let hour = date.getHours() + 1;
    let min = date.getMinutes();

    let hourDeg = hour / 12 * 360 + 90;
    let minDeg = min / 60 * 360 + 90;

    divSecond.style.transform = `rotate(${secDeg}deg)`;
    divHour.style.transform = `rotate(${hourDeg}deg)`;
    divMinute.style.transform = `rotate(${minDeg}deg)`;
}, 1000);
