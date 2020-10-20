//Functions to run at start of webpage
makeRows()

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

        
    if(dayOption[dayOption.selectedIndex].innerHTML === "Sunday"){
        if(entries[0].description1 === ""){
            entries[0].description1 = submitText.value;
            description[0].textContent = entries[0].description1;
            entries[0].day1 = dayOption[dayOption.selectedIndex].innerHTML;
            entries[0].time1 = timeOption[timeOption.selectedIndex].innerHTML;
            time[0].textContent = entries[0].day1 + " " + entries[0].time1;
        } else if(entries[0].description1 !== ""){
            entries[0].description2 = submitText.value;
            description[0].textContent = entries[0].description1;
            entries[0].day2 = dayOption[dayOption.selectedIndex].innerHTML;
            entries[0].time2 = timeOption[timeOption.selectedIndex].innerHTML;
            time[1].textContent = entries[0].day2 + " " + entries[0].time2;
        } else if(entries[0].description2 !== ""){
            entries[0].description2 = submitText.value;
            description[0].textContent = entries[0].description1;
            entries[0].day2 = dayOption[dayOption.selectedIndex].innerHTML;
            entries[0].time2 = timeOption[timeOption.selectedIndex].innerHTML;
            time[1].textContent = entries[0].day2 + " " + entries[0].time2;
        }
        

    } else if(dayOption[dayOption.selectedIndex].innerHTML === "Monday"){
        
    }

    resetEntry()
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

//Data Model

var entries = [{
    entry:"sunday",
    day1:"",
    time1:"0:00",
    description1:"",
    day2:"",
    time2:"0:00",
    description2:"",
    day3:"",
    time3:"0:00",
    description3:"",
    day4:"",
    time4:"0:00",
    description4:"",
    day5:"",
    time5:"0:00",
    description5:"",
    day6:"",
    time6:"0:00",
    description6:""
}, {
    entry:"monday",
    day1:"",
    time1:"0:00",
    description1:"",
    day2:"",
    time2:"0:00",
    description2:"",
    day3:"",
    time3:"0:00",
    description3:"",
    day4:"",
    time4:"0:00",
    description4:"",
    day5:"",
    time5:"0:00",
    description5:"",
    day6:"",
    time6:"0:00",
    description6:""
},
{
    entry:"tuesday",
    day1:"",
    time1:"0:00",
    description1:"",
    day2:"",
    time2:"0:00",
    description2:"",
    day3:"",
    time3:"0:00",
    description3:"",
    day4:"",
    time4:"0:00",
    description4:"",
    day5:"",
    time5:"0:00",
    description5:"",
    day6:"",
    time6:"0:00",
    description6:""
},
{
    entry:"wednesday",
    day1:"",
    time1:"0:00",
    description1:"",
    day2:"",
    time2:"0:00",
    description2:"",
    day3:"",
    time3:"0:00",
    description3:"",
    day4:"",
    time4:"0:00",
    description4:"",
    day5:"",
    time5:"0:00",
    description5:"",
    day6:"",
    time6:"0:00",
    description6:""
},
{
    entry:"thursday",
    day1:"",
    time1:"0:00",
    description1:"",
    day2:"",
    time2:"0:00",
    description2:"",
    day3:"",
    time3:"0:00",
    description3:"",
    day4:"",
    time4:"0:00",
    description4:"",
    day5:"",
    time5:"0:00",
    description5:"",
    day6:"",
    time6:"0:00",
    description6:""
},
{
    entry:"friday",
    day1:"",
    time1:"0:00",
    description1:"",
    day2:"",
    time2:"0:00",
    description2:"",
    day3:"",
    time3:"0:00",
    description3:"",
    day4:"",
    time4:"0:00",
    description4:"",
    day5:"",
    time5:"0:00",
    description5:"",
    day6:"",
    time6:"0:00",
    description6:""
},
{
    entry:"saturday",
    day1:"",
    time1:"0:00",
    description1:"",
    day2:"",
    time2:"0:00",
    description2:"",
    day3:"",
    time3:"0:00",
    description3:"",
    day4:"",
    time4:"0:00",
    description4:"",
    day5:"",
    time5:"0:00",
    description5:"",
    day6:"",
    time6:"0:00",
    description6:""
}]