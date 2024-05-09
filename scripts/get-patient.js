let json = localStorage.getItem("formData");

// parse json data to javascript object
let formData = JSON.parse(json);

// create html to be rendered
let patientName = `${formData.name}`;
let sex = `${formData.sex}`;
let birth = `${formData.birth}`;
let age = `${formData.age}`;
let address = `${formData.address}`;
let civilStatus = `${formData.civil}`;
let religion = `${formData.religion}`;
let nationality = `${formData.nationality}`;
let weight = `${formData.weight}`;
let height = `${formData.height}`;
let schedule = new Date(formData.scheduleDate).toLocaleDateString();

let diagnosis = `${formData.diagnosis}`;
let doctor = `${formData.doctor}`;

// render data in container
document.querySelector("#patientName").innerHTML = patientName;
document.querySelector("#sex").innerHTML = sex;
document.querySelector("#birthday").innerHTML = birth;
document.querySelector("#age").innerHTML = age;
document.querySelector("#address").innerHTML = address;
document.querySelector("#civilStatus").innerHTML = civilStatus;
document.querySelector("#religion").innerHTML = religion;
document.querySelector("#nationality").innerHTML = nationality;
document.querySelector("#weight").innerHTML = weight.concat("kg");
document.querySelector("#height").innerHTML = height.concat("cm");
document.querySelector("#schedule").innerHTML = schedule;
// document.querySelector("#diagnosis").innerHTML = diagnosis;
document.querySelector("#doctor").innerHTML = doctor;
