const timeDisplay = document.getElementById("timeDisplay");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;

//START TIMER FUNCTION
startBtn.addEventListener("click", () => {
    if(paused){
        paused = false;

        //gives the current time 
        startTime = Date.now() - elapsedTime;

        //begin the timer
        intervalId = setInterval(updateTime, 75)
    }
});

//PAUSE TIMER FUNCTION
pauseBtn.addEventListener("click", () => {
    if(!paused){
        paused = true;

        //this will save how much time have passed
        elapsedTime = Date.now() - startTime;

        //pause the timer
        clearInterval(intervalId);
    }
});

//RESET TIMER FUNCTION
resetBtn.addEventListener("click", () => {
    paused = true;
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    hrs = 0;
    mins = 0;
    secs = 0;

    //sets display timer to zero
    timeDisplay.textContent = "00:00:00";
});

//function to update time
function updateTime(){
    elapsedTime = Date.now() - startTime;

    //calculates the seconds
    secs = Math.floor((elapsedTime / 1000) % 60); 
    //calculates the minutes
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60); 
    //calculates the hours
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60); 

    //adding zero to single digit timer
    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);

    //displays the timer
    timeDisplay.textContent = `${hrs}:${mins}:${secs}`;


    //function to add another zero to a single digit timer
    function pad(unit){
        return(("0") + unit).length > 2 ? unit : "0" + unit;
    }

}