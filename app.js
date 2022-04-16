//Variables
let time = 0;
let timerId = 0;
let timerOut = true;
//Elements in a variable
const start = document.querySelector("#start");
const reset = document.querySelector("#reset");
const timer = document.querySelector("#time-display");

//use this function to start the timer

//this function update the timer values

// stop and clear the timer

// Start the timer

const stopClock =() =>{
clearInterval(timerId);
}

const startClock =() =>{
timerOut=false;
timerId = setInterval(() => {
    time++;
    timerCount();
}, 1000);
}
const timerCount =() =>{
    const min = Math.floor(time / 60);
    const sec = time % 60;
    if (sec < 10){
        timer.innerHTML=`${min}:0${sec}`;
    }else{
        timer.innerHTML=`${min}:${sec}`;

    }

}

start.addEventListener("click",function(){
if (timerOut){
startClock();}
});

reset.addEventListener("click",function(){
stopClock();
timerOut=true;
time=0;
timerCount();
});