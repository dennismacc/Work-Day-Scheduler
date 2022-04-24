// Set hour variables to be called in timeBlock function
var hours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

// Function for timeBlocks to determine what the current state of time is  
function timeBlocks(hour, todo = "") {
  var currentHour = new Date().getHours();
  var state = "future";
  if (currentHour > hour + 9) state = "past";
  if (currentHour === hour + 9) state = "present";
  var hourName = hours[hour];
  // Gets info from local storage and uses jQuery append method to display the info in the container 
  var todo = localStorage.getItem(hourName);
  $(".container").append(
    $(`
    <div class="row time-block">
        <div class="hour col-1">${hourName}</div>
        <textarea name="" id="${hourName}" cols="30" rows="3" class="description col-9 ${state}">${todo || ""}</textarea>
        <button class="btn saveBtn col-2">Save</button>
    </div>`)
  );

}

for (var i = 0; i < 9; i++) {
  timeBlocks(i);
}

var btns = document.querySelectorAll(".saveBtn");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", saveSchedule);
}

function saveSchedule(event) {

  var todoValue = event.target.parentNode.children[1].value;
  var todoKey = event.target.parentNode.children[1].id;

  localStorage.setItem(todoKey, todoValue);
}
