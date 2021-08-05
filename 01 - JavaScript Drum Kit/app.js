function playSong(e) {
  const strKey = e.key;
  const keyNum = strKey.charCodeAt();
  const audio = document.querySelector(`audio[data-key="${keyNum}"]`);
  if (!audio) return;
  audio.play();

  // rewind the audio play
  audio.currentTime = 0;

  // How to add animation
  const key = document.querySelector(`.key[data-key="${keyNum}"]`);
  key.classList.add("playing");
}

function endEvent(e) {
  if (e.propertyName !== "transform") return;

  this.classList.remove("playing");
}

// init
window.addEventListener("keydown", playSong);
const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", endEvent));
