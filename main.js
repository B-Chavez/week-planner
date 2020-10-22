//Functions to run at start of webpage
makeRows()

var scheduledDay = document.querySelector("#scheduled-day");
var week = document.querySelector(".week");
week.addEventListener('click', changeDay)

function changeDay(event){
    if(event.target.className !== "week"){
        scheduledDay.innerHTML = "Scheduled Events for " + event.target.textContent;
        var dayToLowerCase = event.target.innerHTML.toLowerCase()

        switchDay(dayToLowerCase)
        applyDataModelToDOM(dayToLowerCase)
    }
}

var button = document.querySelector("button");
button.addEventListener('click', displayModal);
var submit = document.querySelector("#submit");
submit.addEventListener('click', function (){
    displayModal()
    myFormData()
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

function myFormData(){
  var daySelected = dayOption.value;
  var timeSelected = timeOption.selectedOptions[0].innerHTML;
  var desc = submitText.value;
    if(desc === "" || day === 0 || time === 0){
        resetEntry()
        return;
    }
    
    addEntryToDataModel(daySelected, timeSelected, desc)
    applyDataModelToDOM(daySelected)
    
}


function resetEntry(){
    dayOption.selectedIndex = 0;
    timeOption.selectedIndex = 0;
    submitText.value = "";
}



function makeRows(){
    var tbody = document.querySelector("tbody");

    for(var i = 0; i < 7; i++){
        var tablerow = document.createElement("tr");
        var tabledataTime = document.createElement("td");
        var tabledataDesc = document.createElement("td");
        tabledataTime.classList.add("time")
        tabledataDesc.classList.add("description")
        tablerow.appendChild(tabledataTime)
        tablerow.appendChild(tabledataDesc)
        tbody.appendChild(tablerow)
    }
}

function addEntryToDataModel(dayEntry, timeEntry, descEntry){
    var entry = {
        day: dayEntry,
        time: timeEntry,
        description: descEntry
    }
    entries[dayEntry].push(entry)
    
}

function applyDataModelToDOM(day){
        var eventsArray = entries[day];
        for(var i = 0; i < eventsArray.length; i++){
            time[i].innerHTML = eventsArray[i]['day'] + " " + eventsArray[i]['time']
            description[i].innerHTML = eventsArray[i]['description']
        }
}

function switchDay(day){
    entries['currentDaySelected'] = day;
    for(var i = 0; i < time.length; i++){
        time[i].innerHTML = "";
        description[i].innerHTML = "";
    }
}


//data model
var entries = {
    currentDaySelected: "",
    sunday: [{day: "sunday", time: "5:00", description: "asd"}, {day: "sunday", time: "4:00", description: "asd"}],
    monday: [{day: "monday", time: "6:00", description: "asd"}],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: []
}