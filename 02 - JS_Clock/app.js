const hour = document.querySelector(".hour-hand");
const min = document.querySelector(".min-hand");
const second = document.querySelector(".second-hand");

// if second hit 12, min should up by 1

// if min hit 12, hour should up by 1

function setTime() {
  const now = new Date();
  const secondNow = now.getSeconds();
  const secondDeg = (secondNow / 60) * 360 + 90;
  second.style.transform = `rotate(${secondDeg}deg)`;
  second.style.backgroundColor = "green";

  const minNow = now.getMinutes();
  const minDeg = (minNow / 60) * 360 + 90;
  min.style.transform = `rotate(${minDeg}deg)`;
  min.style.backgroundColor = "blue";

  const hourNow = now.getHours();
  const hourDeg = (hourNow / 12) * 360 + 90;
  hour.style.transform = `rotate(${hourDeg}deg)`;
  hour.style.backgroundColor = "red";

  console.log(hourNow, minNow, secondNow);
}

setInterval(setTime, 1000);
