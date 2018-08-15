// GLOBAL VARIABLES
// --------------------------
// initialize firebase dbase
var config = {
  apiKey: "AIzaSyAqCiQtTtEcx8zC0AHd0VJ3D2gV3W7Ub84",
  authDomain: "train-time-hw-5391e.firebaseapp.com",
  databaseURL: "https://train-time-hw-5391e.firebaseio.com",
  projectId: "train-time-hw-5391e",
  storageBucket: "train-time-hw-5391e.appspot.com",
  messagingSenderId: "769748482892"
};
firebase.initializeApp(config);

var database = firebase.database();

// these need to be repurposed for trains
var employeeName;
var role;
var startDate;
var monthlyRate;
var monthsWorked;
var totalBilled;



// EVENT HANDLERS
// --------------------------
// these also need to be repurposed for trains
$("#submit").on("click", function(event) {

  event.preventDefault();

  employeeName = $("#employeeName").val().trim();
  role = $("#role").val().trim();
  startDate = $("#startDate").val().trim();
  monthlyRate = parseInt($("#monthlyRate").val().trim())

  database.ref().push({
      employeeName: employeeName,
      role: role,
      startDate: startDate,
      monthlyRate: monthlyRate,
      dateAdded: firebase.database.ServerValue.TIMESTAMP

  });

});

database.ref().on("child_added", function(event) {

  var newRow = $("<tr>")
  var tdName = $("<td>")
  tdName.text(event.val().employeeName)
  var tdRole = $("<td>")
  tdRole.text(event.val().role)
  var tdStart = $("<td>")
  tdStart.text(event.val().startDate)
  var tdWorked = $("<td>")
  tdWorked.text(event.val().monthsWorked) 
  var tdRate = $("<td>")
  tdRate.text(event.val().monthlyRate)
  var tdBilled = $("<td>")
  tdBilled.text(event.val().totalBilled)
  newRow.append(tdName, tdRole, tdStart, tdWorked, tdRate,  tdBilled)
  $("tbody").append(newRow)

});


// CALLS
// --------------------------