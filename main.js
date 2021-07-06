//data model
var entries = {
    currentDaySelected: "",
    sunday: [],
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: []
}

function makeRows(time, description){
    
    var tbody = document.querySelector("tbody");
    var tablerow = document.createElement("tr");
    var tabledataTime = document.createElement("td");
    var tabledataDesc = document.createElement("td");
    tabledataTime.classList.add("time")
    tabledataDesc.classList.add("description")
    tabledataTime.textContent = time
    tabledataDesc.textContent = description
    tablerow.appendChild(tabledataTime)
    tablerow.appendChild(tabledataDesc)
    tbody.appendChild(tablerow)
}

var scheduledDay = document.querySelector("#scheduled-day");
var week = document.querySelector(".week");
week.addEventListener('click', changeDay)

function changeDay(event){
    if(event.target.className !== "week"){
        scheduledDay.textContent = "Scheduled Events for " + event.target.textContent;
        var dayToLowerCase = event.target.textContent.toLowerCase()

        var description = document.querySelectorAll(".description");
        var time = document.querySelectorAll(".time");
        entries.currentDaySelected = dayToLowerCase;
        dayObject = entries.currentDaySelected
        for(var i = 0; i < time.length; i++){
            time[i].textContent = "";
            description[i].textContent = "";
        }
        for(var i = 0; i < time.length; i++){
            time[i].textContent = entries[dayObject][i].day + " " + entries[dayObject][i].time;
            description[i].textContent = entries[dayObject][i].description;
        }
    }
}

var button = document.querySelector("button");
button.addEventListener('click', displayModal);
var submit = document.querySelector("#submit");
submit.addEventListener('click', function (){
    
    displayModal()
    handleAddEntryFormSubmission()
    
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

var dayOption = document.querySelector("#day");
var timeOption = document.querySelector("#time")

function handleAddEntryFormSubmission(){
  var daySelected = dayOption.value;
  var timeSelected = timeOption.selectedOptions[0].textContent;
  var desc = submitText.value;
    if(!desc || !day || !time){
        resetEntry()
        return;
    }
    


    addEntryToDataModel(daySelected, timeSelected, desc)
    applyDataModelToDOM(daySelected)
    resetEntry()
}


function resetEntry(){
    dayOption.selectedIndex = 0;
    timeOption.selectedIndex = 0;
    submitText.value = "";
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
            var timeEntry = eventsArray[i]['day'] + " " + eventsArray[i]['time']
            var descEntry = eventsArray[i]['description']
        }
        makeRows(timeEntry, descEntry)
        
}


function deleteEntry(day, entrySelected){
    entries[day][entrySelected]
}


