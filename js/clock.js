function showTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    h = checkTime(h);
    day = getWeekOfDay();
    document.querySelector("#myClock").innerHTML =  h + ":" + m + ":" + s + "  " + day;
}

function getWeekOfDay() {
    const weekday = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    const d = new Date();

    let day = weekday[d.getDay()];
    return day;
}

  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
setInterval(showTime, 0)