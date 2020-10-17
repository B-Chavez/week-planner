var scheduledDay = document.querySelector("#scheduled-day");
var week = document.querySelector(".week");
week.addEventListener('click', changeDay)

function changeDay(event){
    if(event.target.className !== "week"){
        scheduledDay.innerHTML = "Scheduled Events for " + event.target.textContent;
    }
    
}