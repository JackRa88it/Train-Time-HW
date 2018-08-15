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
var trainName;
var destination;
var startTime;
var frequency;
var nextArrival;



// EVENT HANDLERS
// --------------------------
// these also need to be repurposed for trains
$("#submit").on("click", function(event) {

  event.preventDefault();

  trainName = $("#trainName").val().trim();
  destination = $("#destination").val().trim();
  startTime = $("#startTime").val().trim();
  frequency = parseInt($("#frequency").val().trim())

  database.ref().push({
      trainName: trainName,
      destination: destination,
      startTime: startTime,
      frequency: frequency,
      dateAdded: firebase.database.ServerValue.TIMESTAMP

  });

});

database.ref().on("child_added", function(event) {

  var newRow = $("<tr>")
  var tdName = $("<td>")
  tdName.text(event.val().trainName)
  var tdDestination = $("<td>")
  tdDestination.text(event.val().destination)
  var tdStart = $("<td>")
  tdStart.text(event.val().startTime)
  var tdFrequency = $("<td>")
  tdFrequency.text(event.val().frequency)
  var tdNext = $("<td>")
  tdNext.text('')
  newRow.append(tdName, tdDestination, tdStart, tdFrequency, tdNext)
  $("tbody").append(newRow)

});


// CALLS
// --------------------------