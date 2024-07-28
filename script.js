var milliseconds=0
var seconds=0
var minutes=0
var hours=0
var timer
var display = document.querySelector('.display-content')
var laps = document.querySelector('.laps')
function start(){
    if(!timer){
        timer=setInterval(run,10)
    }
}
function run(){
    display.innerHTML=getTimer()
    milliseconds++
    if(milliseconds==100){
        milliseconds=0
        seconds++
    }
    if(seconds==60){
        seconds=0
        minutes++
    }
    if(minutes==60){
        minutes=0
        hours++
    }

}
function  getTimer(){
    return(hours<10 ? "0" + hours : hours) + " : " + (minutes<10 ? "0" + minutes : minutes) + " : " + (seconds<10 ? "0" + seconds : seconds) + " : " + (milliseconds<10 ? "0" + milliseconds : milliseconds)
}
function stopTimer(){
    clearInterval(timer)
    timer=false
}
function pause(){
    stopTimer()
}
function reset(){
    stopTimer()
    minutes=0
    hours=0
    milliseconds=0
    seconds=0
    display.innerHTML=getTimer()
}
function lap(){
    if(timer){
        var li=document.createElement("li")
        li.innerHTML=getTimer()
        laps.appendChild(li)
    }
}
function resetLap(){
    laps.innerHTML=""
}