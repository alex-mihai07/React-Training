var lapCounter=0,
    seconds = 0, minutes = 0, hours = 0,
    startButton = document.getElementById("startBtn"),
    stopButton = document.getElementById("stopBtn"),
    resetButton = document.getElementById("resetBtn"),
    lapButton = document.getElementById("lapBtn"),
    mainCounter = document.getElementById("mainCounter"),
    laps = document.getElementById("laps"),
    setTimeoutHandler;


function addSeconds(){
    seconds++;
    mainCounter.textContent = transformSecondsToTime(seconds);

    setTimeoutInterval()
}

function setTimeoutInterval() {
    setTimeoutHandler = setTimeout(addSeconds, 1000)
}

startButton.onclick = setTimeoutInterval

stopButton.onclick = function(){
    clearTimeout(setTimeoutHandler)
}

resetButton.onclick = function() {
    seconds = lapCounter = 0;
    mainCounter.textContent = "00:00:00"
    laps.textContent = "";
    clearTimeout(setTimeoutHandler)
}

lapButton.onclick = function() {
    lapCounter++
    var liNode = document.createElement("LI"),
        liContent = document.createTextNode("Lap " + lapCounter + ": " +  transformSecondsToTime(seconds));

    liNode.appendChild(liContent);
    laps.appendChild(liNode);
        
}
