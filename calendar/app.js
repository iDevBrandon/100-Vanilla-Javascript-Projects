const calendar = document.querySelector("#app-calendar");

const isWeekend = day => {
    
}

for (let day = 1; day <= 31; day++) {
  calendar.insertAdjacentHTML("beforeend", `<div class='day'>${day}</div>`);
}
