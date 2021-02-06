const slider = document.querySelector(".slider-container");
const slides = Array.from(document.querySelectorAll(".slide"));

let isDragging = false;
let startPos = 0;
let currentTransalte = 0;
let prevTranslate = 0;
let animationID = 0;
let currentIndex = 0;

slides.forEach((slide, index) => {
  const slideImage = slide.querySelector("img");
  slideImage.addEventListener("dragstart", (e) => e.preventDefault());

  // Touch events
  slide.addEventListener("touchstart", touchStart(index));
  slide.addEventListener("touchend", touchEnd);
  slide.addEventListener("touchmove", touchMove);

  // Mouse events
  slide.addEventListener("mousedown", touchStart(index));
  slide.addEventListener("mouseup", touchEnd);
  slide.addEventListener("mouseleave", touchEnd);
  slide.addEventListener("mousemove", touchMove);
});

// Disable context menu
window.oncontextmenu = function (event) {
  event.preventDefault();
  event.stopPropagation();
  return false;
};

function touchStart(index) {
  return function (event) {
    currentIndex = index;
    startPos = getPositionX(event)
    isDragging = true;

    
  };
}

function touchEnd() {
  isDragging = false;
}

function touchMove() {
  if (isDragging) {
    console.log("move");
  }
}

function getPositionX(event) {
    return event.type.includes(';mouse')? event.pageX : event.touches[0].clientX
} 
