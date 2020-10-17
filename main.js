var scheduledDay = document.querySelector("#scheduled-day");
var week = document.querySelector(".week");
week.addEventListener('click', changeDay)

function changeDay(event){
    if(event.target.className !== "week"){
        scheduledDay.innerHTML = "Scheduled Events for " + event.target.textContent;
    }
    
}

var button = document.querySelector("button");
button.addEventListener('click', displayModal);
var submit = document.querySelector("#submit");
submit.addEventListener('click', function (){
    displayModal()
    submitFunc()
})

var showModal = false;
function displayModal(){
    var modal = document.querySelector(".modal");
    var transparentBG = document.querySelector(".transparentBG");
    if(showModal === false){
        modal.classList.remove("hidden");
        transparentBG.classList.remove("hidden");
        showModal = true;
    } else {
        modal.classList.add("hidden");
        transparentBG.classList.add("hidden");
        showModal = false;
    }
}

var descCount = 0;
var submitText = document.querySelector("#entry");
var description = document.querySelectorAll(".description");
var time = document.querySelectorAll(".time");
var dayOption = document.querySelector("#day");
var timeOption = document.querySelector("#time")

function submitFunc(){
    

    if(submitText.value === "" || dayOption.selectedIndex === 0 || timeOption.selectedIndex === 0){
        resetEntry()
        return;
    }

    description[descCount].textContent = submitText.value;
    time[descCount].textContent = dayOption[dayOption.selectedIndex].innerHTML + " " + timeOption[timeOption.selectedIndex].innerHTML;
    
    resetEntry()
    submitText.value = "";
    descCount++;
    if(descCount === 6){
        descCount = 0;
    }
}

function resetEntry(){
    dayOption.selectedIndex = 0;
    timeOption.selectedIndex = 0;
    submitText.value = "";
}