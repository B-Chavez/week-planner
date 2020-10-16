var scheduledDay = document.querySelector("#scheduled-day");
var week = document.querySelector(".week");
week.addEventListener('click', function(event){
    scheduledDay.innerHTML = "Scheduled Events for " + event.target.innerHTML;
})