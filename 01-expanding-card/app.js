// what i miss was to forget putting removeActive class. it is same as adding one. 

const panels = document.querySelectorAll(".panel");

for (const panel of panels) {
  panel.addEventListener("click", function () {
    removeActive();
    panel.classList.add("active");
  });
}

// panels.forEach(function (panel) {
//   panel.addEventListener("click", () => {
//     removeActive();
//     panel.classList.add("active");
//   });
// });

function removeActive() {
  panels.forEach(function (panel) {
    panel.classList.remove("active");
  });
}
