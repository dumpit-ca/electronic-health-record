let json = localStorage.getItem("formData");

// parse json data to javascript object

let formData = JSON.parse(json);

// create html to be rendered
let patientName = `${formData.name}`;

// render data in container
document.querySelector("#patientName").innerHTML = patientName;
