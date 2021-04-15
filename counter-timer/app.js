let countDownDate = new Date("2021-04-27 01:28:20").getTime();
let day = document.querySelector("#days");
let hour = document.querySelector("#hours");
let min = document.querySelector("#minutes");
let sec = document.querySelector("#seconds");
let title = document.querySelector(".headTitle");

function init() {
  day.textContent = 0;
  hour.textContent = 0;
  min.textContent = 0;
  sec.textContent = 0;
}

function formatNumber(time) {
  return time < 10 ? `0${time}` : time;
}

let time = setInterval(function () {
  let now = new Date().getTime();

  let diff = countDownDate - now;

  // time calculation
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  day.textContent = days;
  hour.textContent = formatNumber(hours);
  min.textContent = formatNumber(minutes);
  sec.textContent = formatNumber(seconds);

  if (diff < 0) {
    clearInterval(time);
    title.textContent = "Closed. C u next time ;)";
    init();
  }
}, 1000);
