function showTime() {
    const time = document.getElementById('currentTime');

    if (time) {
        time.innerHTML = new Date().toUTCString();
    }
}

showTime();

setInterval(function () {
    showTime();
}, 1000);


function goBack() {
    history.back();
}


