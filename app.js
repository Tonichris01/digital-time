const digitalClock = document.getElementById('digitalClock');
setInterval(update, 1000);

function update() {
    const d = new Date();
    var hrs = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    var period = ""
    if (hrs > 12) {
        period = "pm"
    } else {
        period = "am"
    }
    if (hrs > 12) {
        hrs = hrs - 12
    } else {
        hrs = hrs
    }
    if (secs < 10) {
        secs = "0" + secs
    }
    if (mins < 10) {
        mins = "0" + mins
    }
    if (hrs < 10) {
        hrs = "0" + hrs
    }

    digitalClock.innerText = hrs + ":" + mins + ":" + secs + " " + period;

}