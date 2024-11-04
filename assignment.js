
function updateCountdown() {
    var targetDate = new Date("December 31, 2024 23:59:59").getTime();
    var now = new Date().getTime();
    var timeLeft = targetDate - now;
    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = 
        `<span>${days}d</span> <span>${hours}h</span> <span>${minutes}m</span> <span>${seconds}s</span>`;

    if (timeLeft < 0) {
        document.getElementById("countdown").innerHTML = "Countdown Finished!";
    } else {
        setTimeout(updateCountdown, 1000);
    }
}

updateCountdown();