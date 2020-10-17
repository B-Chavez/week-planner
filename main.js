var scheduledDay = document.querySelector("#scheduled-day");
var week = document.querySelector(".week");
week.addEventListener('click', changeDay)

function changeDay(event){
    scheduledDay.innerHTML = "Scheduled Events for " + event.target.innerHTML;
}