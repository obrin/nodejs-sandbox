import falcor from 'falcor'


// We can prime the model cache with a new falcor.Model
var model = new falcor.Model({
  cache: {
    events: [
      {
        name: "ng-conf",
        description: "The worlds best Angular Conference",
        location: { city: "Salt Lake City", state: "Utah" }
      },
      {
        name: "React Rally",
        description: "Conference focusing on Facebook's React",
        location: { city: "Salt Lake City", state: "Utah" }
      },
      {
        name: "ng-Vegas",
        description: "Two days jam-packed with Angular goodness with a focus on Angular 2",
        location: { city: "Las Vegas", state: "Nevada" }
      },
      {
        name: "Midwest JS",
        description: "Midwest JS is a premier technology conference focused on the JavaScript ecosystem.",
        location: { city: "Minneapolis", state: "Minnesota" }
      },
      {
        name: "NodeConf",
        description: "NodeConf is the longest running community driven conference for the Node community.",
        location: { city: "Walker Creek Ranch", state: "California" }
      }

    ]
  }
});


// model
// // We want the name and description values for the first three items
// // from the data model
// //   .get(["events", {from: 0, to: 2}, ["name", "description"]], ["events", {from: 0, to: 2}, "location", ["city", "state"]])
// //   .set(falcor.pathValue(["events", 0, "location", "state"], "UT"))
//   .then(function(response) {
//
//     console.log(JSON.stringify(response, 0, 2)); // TODO: REMOVE CONSOLE LOG
//     // document.getElementById("event-data").innerHTML = JSON.stringify(response, null, 2);
//   });


// model
// // We want the name and description values for the first three items
// // from the data model
// //   .get(["events", {from: 0, to: 2}, ["name", "description"]], ["events", {from: 0, to: 2}, "location", ["city", "state"]])
//   .set(falcor.pathValue(["events", 0, "location", "state"], "UT"))
//   .then(function(response) {
//     model
//       .get(["events", {from: 0, to: 2}, ["name", "description"]], ["events", {from: 0, to: 2}, "location", ["city", "state"]])
//       .then(res => {
//       })
//
//     console.log(JSON.stringify(response, 0, 2)); // TODO: REMOVE CONSOLE LOG
//     // document.getElementById("event-data").innerHTML = JSON.stringify(response, null, 2);
//   });
//
//

// const pathV = falcor.pathValue("events")

// model
// // We set the value of the first occurrence of Utah to UT
//   .set(falcor.pathValue(["events", 0, "location", "state"], 'UT'))
//   .then(function(response) {
//     model
//     // What we find afterwards is that the value gets changed in one location, but not both.
//       .get(["events", {from: 0, to: 2}, ["name", "description"]],['events', {from: 0, to: 2}, 'location', ['city', 'state']])
//       .then(function(response) {
//         // document.getElementById('event-data').innerHTML = JSON.stringify(response, null, 2);
//       });
//   });
