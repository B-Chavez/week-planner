var header = document.querySelector("#scheduled-day");

var days = document.querySelectorAll(".day").forEach(day =>{
    day.addEventListener('click', function(){
        header.innerText = "Scheduled Events for " + day.innerHTML;
    })
})