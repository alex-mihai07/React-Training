function transformSecondsToTime(seconds){
    seconds = Number(seconds);
    var h = Math.floor(seconds / 3600);
    var m = Math.floor(seconds % 3600 / 60);
    var s = Math.floor(seconds % 3600 % 60);

    var hDisplay = h <= 9 ? "0" + h : h;
    var mDisplay = m <= 9 ? "0" + m : m;
    var sDisplay = s <= 9 ? "0" + s : s;
    return hDisplay + ":" +  mDisplay + ":" +  sDisplay; 
}
